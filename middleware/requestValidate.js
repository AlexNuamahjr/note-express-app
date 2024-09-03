
const validateRequest = (schema)=>{
    return (req, res, next)=>{
        try {
            // console.log("validate request",req.body);
            
            const {error} = schema.validate(req.body, {abortEarly: false});
            if (error){
                return res.status(400).json({error: error.details});
            }
            next();
        } catch (error) {
            return next(error);
        }
    }
}

module.exports = {validateRequest};
