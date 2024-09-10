import crypto from "crypto";
import bcrypt from "bcrypt";

// generate token
export const genertateToken = ()=>{
    return crypto.randomBytes(32).toString("hex");
}

// hash token
export const hashToken = async (token)=>{
    const hashedToken = await bcrypt.hash(token, 10);
    return hashedToken;
};

// hash password
export const hashPassword = async (password)=>{
    const hashedPassword = await bcrypt.hash(password, 10);
    return hashedPassword;
}