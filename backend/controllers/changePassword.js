import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";

const prisma = new PrismaClient();

export const changePassword = async (req, res)=>{
    try {
        const {userId} = req.session;
        const {oldPassword, newPassword} = req.body;

        // check if user exists
        const isUserExists = await prisma.user.findUnique({
            where: {id: Number(userId)}
        });
        if (!isUserExists){
            return res.status(404).json({message: "User not found"});
        };
        // verify old password
        const isPasswordMatch = await bcrypt.compare(oldPassword, isUserExists.password);
        if (!isPasswordMatch){
            return res.status(403).json({message: "Incorrect old password"});
        };
        // hash new password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(newPassword, salt);

        // update password
        await prisma.user.update({
            where: {id: Number(userId)},
            data: {
                password: hashedPassword
            }
        });
        return res.status(200).json({message: "Password updated successfully"});

    } catch (error) {
        console.error(error);
        return res.status(500).json({message: "Error occur while changing password"});
    }finally{
        await prisma.$disconnect();
    }
}
