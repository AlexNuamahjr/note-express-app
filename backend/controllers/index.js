import { PrismaClient } from "@prisma/client";
import { genertateToken } from "../utils/tokenGenerator.js";
import bcrypt from "bcrypt";
import nodemailer from "nodemailer";
import { v2 as cloudinary } from "cloudinary";
import { CloudinaryStorage } from "multer-storage-cloudinary";
import multer from "multer";
import { log } from "console";

const prisma = new PrismaClient();

// configure cloudinary
cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_API,
  api_secret: process.env.API_SECRET,
});

// set up cloudinary storage for multer
const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: "profile_pictures",
    format: async (req, file) => "jpg",
    public_id: (req, file) => "profle" + Date.now(),
  },
});

const upload = multer({ storage: storage });

// register user
export const createUser = async (req, res) => {
  try {
    const { firstName, lastName, userName, email, dob, password, gender, phoneNumber } =
      req.body;
      console.log(req.body);
      
    // check if user exists
    const isUserExists = await prisma.user.findFirst({
      where: { email: email },
    });
    if (isUserExists) {
      return res.status(400).json({ message: "User already exists" });
    }
    // hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    // create new user
    const newUser = await prisma.user.create({
      data: {
        firstName,
        lastName,
        userName,
        email,
        dateOfBirth: new Date(dob).toISOString(),
        password: hashedPassword,
        gender,
        phoneNumber,
        isVerified: false,
      },
    });
    // generate verification token
    const plainToken = genertateToken();
    // store hashed token
    const hashedToken = await bcrypt.hash(plainToken, 10);
    // store hashed token
    await prisma.emailVerification.create({
      data: {
        token: hashedToken,
        userId: newUser.id,
        expireAt: new Date(Date.now() + 3600000),
      },
    });
    // send token in email
    const verificationUrl = `http://localhost:5173/verify-email?token=${plainToken}&userId=${newUser.id}`;

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS,
      },
    });
    const mailOption = {
      from: "no-reply@noteapp.com",
      to: email,
      subject: "Verify your email",
      text: `Please verify your email by clicking the following link: ${verificationUrl}`,
    };
    await transporter.sendMail(mailOption);
    return res.status(201).json({
      message:
        "User created successfully, check your email for verification link.",
      user: newUser,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Error occured while creating user" });
  } finally {
    await prisma.$disconnect();
  }
};

// verify email
export const verifyEmail = async (req, res) => {
  try {
    const { token, userId } = req.query;
    console.log('Query ', req.query);
    
    // find verification token in the database
    const tokenEntry = await prisma.emailVerification.findFirst({
      where: {
        userId: Number(userId),
        expireAt: { gte: new Date() },
      },
      orderBy: {
        expireAt: "desc",
      },
    });
    if (!tokenEntry) {
      return res.status(400).json({ error: "Invalid token" });
    }
    // check if token has expired
    const now = new Date();
    if (now > tokenEntry.expireAt) {
      return res.status(400).json({ error: "Token has expired" });
    }
    const isTokenValid = await bcrypt.compare(token, tokenEntry.token);
    if (!isTokenValid) {
      return res.status(400).json({ error: "Invalid verification token" });
    }
    // mark as verify user
    await prisma.user.update({
      where: { id: Number(userId) },
      data: { isVerified: true },
    });
    // delete verification token
    await prisma.emailVerification.delete({
      where: { id: tokenEntry.id },
    });
    return res.status(200).json({ message: "Email verified successfully" });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Error verifying email" });
  } finally {
    await prisma.$disconnect();
  }
};

// login user
export const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    // check if user exists
    const isUserExists = await prisma.user.findUnique({
      where: { email: email },
    });
    if (!isUserExists) {
      return res.status(401).json({ error: "Invalid credentials" });
    }
    // check for email verification
    if (!isUserExists.isVerified) {
      return res
        .status(403)
        .json({ error: "Kindly verify your email before logging in" });
    }
    const isPasswordCorrect = await bcrypt.compare(
      password,
      isUserExists.password
    );
    // check if password is correct
    if (!isPasswordCorrect) {
      return res.status(401).json({ error: "Invalid credentials" });
    } else {
      // login user
      req.session.userId = isUserExists.id;
      return res.status(201).json({ message: "Login successfully" });
    }
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .json({ error: "Error occured while loging in, kindly try again" });
  } finally {
    await prisma.$disconnect();
  }
};

// update bio
export const bio = async (req, res) => {
  try {
    const { userId } = req.session;
    const { bio } = req.body;

    // update user bio
    const updatedProfile = await prisma.profile.upsert({
      where: { userId: Number(userId) },
      update: { bio: bio },
      create: {
        bio: bio,
        userId: Number(userId),
      },
    });
    return res
      .status(200)
      .json({ message: "Profile updated successfully", updatedProfile });
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .json({ error: "Error occur while updating profile" });
  } finally {
    await prisma.$disconnect();
  }
};

// uploading profile picture
export const uploadProfilePicture = async (req, res) => {
  const { userId } = req.session;
  upload.single("profilePicture")(req, res, async (err) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: "Error uploading file" });
    }
    try {
      // Check if file is uploaded
      if (!req.file) {
        return res.status(400).json({ error: "No file uploaded" });
      };
      const profilePictureUrl = req.file.path;
      // save the image url in the database profile table
      console.log(`User : ${userId}  ProfileURL : ${profilePictureUrl}`);

      // Check if user profile already exist
      const isExist = prisma.profile.findFirst({ where: { userId } });
      if (!isExist)
        return res.status(404).json({ message: "User profile exist" });

      await prisma.profile.create({ data: { userId, profilePictureUrl } });

      return res.status(200).json({
        message: "Profile picture uploaded successfully",
        profilePictureUrl,
      });
    } catch (error) {
      console.error(error);
      return res
        .status(500)
        .json({ error: "Error occur while uploading picture" });
    } finally {
      await prisma.$disconnect();
    }
  });
};

// delete user account
export const deleteUserAccount = async (req, res) => {
  try {
    const { userId } = req.session;
    // check if user exists
    const isUserExists = await prisma.user.findUnique({
      where: { id: Number(userId) },
    });
    if (!isUserExists) {
      return res.status(404).json({ error: "User not found" });
    }
    // delete user account
    await prisma.user.delete({
      where: { id: Number(userId) },
    });
    // clear user session
    req.session.destroy();
    return res
      .status(200)
      .json({ message: "User account deleted successfully" });
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .json({ error: "Error occur while deleting account" });
  } finally {
    await prisma.$disconnect();
  }
};

// logout user
export const logoutUser = (req, res) => {
  try {
    req.session.destroy((error) => {
      if (error) {
        return res.status(401).json({ error: "Logout failed" });
      } else {
        return res.status(201).json({ message: "Logout successfully" });
      }
    });
  } catch (error) {
    return res.status(500).json({ error: "Enternal server error" });
  }
};
