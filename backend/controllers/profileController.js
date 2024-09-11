import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient;

// get user profile
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

// update user profile
export const updateUserProfile = async (req, res)=>{
    try {
        const {userId} = req.session;
        const {firstName, lastName, bio, profilePictureUrl} = req.body;

        // check if user exists
        const isUserExists = await prisma.user.findUnique({
            where: {id: Number(userId)},
            include: {profile: true},            
        });        

        if (!isUserExists){
            return res.status(404).json({message: "User not found"});
        };
        // check for user profile
        if (!isUserExists.profile){
            return res.status(404).json({message: "Profile not found"})
        }
        // update profile info
        const updateProfile = await prisma.profile.update({
            where: {userId: Number(userId)},
            data: {
                bio: bio || isUserExists.profile?.bio,
                profilePictureUrl: profilePictureUrl || isUserExists.profile?.profilePictureUrl
            },
        });
        // Optionally update user details
    const updateUser = await prisma.user.update({
        where: { id: Number(userId) },
        data: {
          firstName: firstName || isUserExists.firstName,
          lastName: lastName || isUserExists.lastName
        }
      });
        return res.status(200).json({message: "Profile updated successfully"})
    } catch (error) {
        console.error(error);
        return res.status(500).json({message: "Error while updating profile"});
    }finally{
        await prisma.$disconnect();
    }
}
