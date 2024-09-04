require("dotenv").config();
const crypto = require("crypto");
const bcrypt = require("bcrypt");
const nodemailer = require("nodemailer");
const {PrismaClient} = require("@prisma/client");

const prisma = new PrismaClient;

const forgotPassword = async(req, res)=>{
    console.log("Forgot Password route hit");
    try {
        const {email} = req.body;

        // check if the user exists
        const isUserExists = await prisma.user.findUnique({where: {email}});
        if (!isUserExists){
            return res.status(200).json({message: "If email exists, we will send a password reset link"});
        }
        // generate a reset token
        const token = crypto.randomBytes(32).toString("hex");
        const hashedToken = await bcrypt.hash(token, 10);
        const expiresAt = new Date(Date.now() + 360000);

        // store the token
        await prisma.passwordResetToken.create({
            data: {
                token: hashedToken,
                expiresAt,
                user: isUserExists.id
            }
        })

        // create reset link
        const resetUrl = `http://localhost:8756/reset-password?token=${token}&id=${isUserExists.id}`;
        console.log("Reset url", resetUrl);
        
        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.MAIL_USER,
                pass: process.env.MAIL_PASS
            }
        });
        const mailOption = {
            from: "no-reply@noteapp.com",
            to: email,
            subject: "Password reset",
            text: `You requested a password reset. Click the link to set a new password: ${resetUrl}`
        }
        await transporter.sendMail(mailOption);
        return res.status(200).json({message: "Password reset link sent to your email"})
    } catch (error) {
        console.error(error);
        return res.status(500).json({error: "Something went wrong, kindly try again later"});
    }
}

module.exports = {
    forgotPassword    
}
