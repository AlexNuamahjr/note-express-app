import dotEnv from "dotenv";
dotEnv.config();
import crypto from "crypto";
import bcrypt from "bcrypt";
import nodemailer from "nodemailer";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// forgot password
export const forgotPassword = async (req, res) => {
  try {
    const { email } = req.body;
    // check if the user exists
    const isUserExists = await prisma.user.findUnique({ where: { email } });
    if (!isUserExists) {
      return res
        .status(200)
        .json({
          message: "If email exists, we will send a password reset link",
        });
    }
    // generate a reset token
    const token = crypto.randomBytes(32).toString("hex");
    const hashedToken = await bcrypt.hash(token, 10);
   // set expiration
    const expiresAt = new Date(Date.now() + 36000000);
    // store the token
    await prisma.passwordResetToken.create({
      data: {
        token: hashedToken,
        expireAt: expiresAt,
        userId: isUserExists.id,
      },
    });
    // create reset link
    const resetUrl = `http://localhost:8756/auth/reset-password?token=${token}&userId=${isUserExists.id}`;
    console.log("Reset url", resetUrl);

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
      subject: "Password reset",
      text: `You requested a password reset. Click the link to set a new password: ${resetUrl}`,
    };
    await transporter.sendMail(mailOption);
    return res
      .status(200)
      .json({ message: "Password reset link sent to your email" });
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .json({ error: "Something went wrong, kindly try again later" });
  }
};

// reset password
export const resetPassword = async (req, res) => {
  try {    
    const { token, userId } = req.query;    
    const {newPassword} = req.body;    
    if (isNaN(userId)) {
      return res.status(400).json({ error: "Invalid user ID" });
  }
    // find token in the database
    const resetTokenEntry = await prisma.passwordResetToken.findFirst({
      where: {
        userId: Number(userId),
        expireAt: { gte: new Date() },
      },
      // get the latest token
      orderBy: {
        expireAt: "desc"
      }
    });
    if (!resetTokenEntry) {
      return res
        .status(400)
        .json({ error: "Invalid or expired password reset token!!!" });
    }

    // check if token has expired
    const now = new Date();    
    if(now > resetTokenEntry.expireAt){
      return res.status(400).json({ error: "Token has expired" });
    }
    // compare the provided token to the stored one in the database
    const isTokenValid = await bcrypt.compare(token, resetTokenEntry.token);    
    if (!isTokenValid) {
      return res
        .status(400)
        .json({ error: "Invalid password reset token" });
    } 
    const hashedPassword = await bcrypt.hash(newPassword, 10);
    await prisma.user.update({
      where: {id: Number(userId)},
      data: {
        password: hashedPassword,
      },
    });
    // delete the reset token from the database
    await prisma.passwordResetToken.delete({where: {id: resetTokenEntry.id}});
    return res.status(200).json({message: "Password reset successful"});
  } catch (error) {
    console.error(error);
    return res.status(500).json({error: "Something went wrong"})
  }finally{
    await prisma.$disconnect();    
  }
};
