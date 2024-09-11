import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient;

export const getProfile = async (req, res)=>{
    try {
        const {userId} = req.params;
                
        const isUserProfile = await prisma.user.findUnique({
            where: {id: Number(userId)},
            select: {
                firstName: true,
                lastName: true,
                userName: true,
                email: true,
                profile:{
                    select:{
                        bio: true,
                        profilePictureUrl: true
                    }
                }
            }
        });
        if (!isUserProfile){
            return res.status(404).json({message: "User not found"});
        };
        return res.status(200).json({userProfile: isUserProfile});
    } catch (error) {
        console.error(error);
        return res.status(500).json({message: "Error fetching profile"});
    }finally{
        await prisma.$disconnect();
    }
}
