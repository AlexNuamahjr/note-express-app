export const isAuthenticated = (req, res, next)=>{
    if (req.session.userId){
        return next();
    }else{
        return res.status(403).json({message: "Kindly login to proceed"})
    }
    
}