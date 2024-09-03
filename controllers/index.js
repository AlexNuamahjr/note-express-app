const { PrismaClient } = require("@prisma/client");
const bcrypt = require("bcrypt");

const prisma = new PrismaClient();

const createUser = async (req, res) => {
  try {
    const { firstName, lastName, userName, email, dateOfBirth, password } =
      req.body;
      console.log("incoming data:", req.body);
      
    // check if user exists
    const isUserExists = await prisma.user.findFirst({where: {email: email}});
    if (isUserExists){
        return res.status(400).json({message: "User already exists"})
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
    return res.status(201).json({message: "User created successfully", user: newUser});
  } catch (error) {
    return res.status(500).json({error: "Error occured while creating user"})
  } finally {
    await prisma.$disconnect();
  }
};

module.exports = {
  createUser,
};
