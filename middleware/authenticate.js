export const isAuthenticated = (req, res, next)=>{
    if (req.session && req.userId){
        return next();
    }else{
        return res.status(401).json({message: "Kindly login"})
    }
}