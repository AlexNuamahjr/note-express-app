const { PrismaClient } = require("@prisma/client");
const bcrypt = require("bcrypt");

const prisma = new PrismaClient();

const createUser = async (req, res) => {
  try {
    const { firstName, lastName, userName, email, dateOfBirth, password } =
      req.body;

    // check if user exists
    const isUserExists = await prisma.user.findFirst({
      where: { email: email },
    });
    if (isUserExists) {
      return res.status(400).json({ message: "User already exists" });
    }
    // hash password
    const hashedPassword = await bcrypt.hash(password, 10);
    // create new user
    const newUser = await prisma.user.create({
      data: {
        firstName,
        lastName,
        userName,
        email,
        dateOfBirth: new Date(dateOfBirth),
        password: hashedPassword,
      },
    });
    return res
      .status(201)
      .json({ message: "User created successfully", user: newUser });
  } catch (error) {
    return res.status(500).json({ error: "Error occured while creating user" });
  } finally {
    await prisma.$disconnect();
    process.exit(1);
  }
};

const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    // check if user exists
    const isUserExists = await prisma.user.findUnique({
      where: { email: email },
    });
    if (!isUserExists) {
      return res.status(401).json({ error: "Invalid credentials" });
    }
    const isPasswordCorrect = await bcrypt.compare(
      password,
      isUserExists.password
    );
    if (!isPasswordCorrect) {
      return res.status(401).json({ error: "Invalid credentials" });
    } else {
      req.session.id  = isUserExists.id;
      return res.status(201).json({ message: "Login successfully" });
    }
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .json({ error: "Error occured while loging in, kindly try again" });
  } finally {
    await prisma.$disconnect();
    process.exit(1);
  }
};

const logoutUser = (req, res) => {
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

module.exports = {
  createUser,
  loginUser,
  logoutUser,
};
