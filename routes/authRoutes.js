import express from "express";
import {forgotPassword, resetPassword} from "../controllers/authController.js";
import {forgotPasswordSchema, resetPasswordSchema} from "../schemas/userSchema.js";
import { validateRequest } from "../middleware/requestValidate.js";

const authRouter = express.Router();

authRouter.post("/forgot-password", validateRequest(forgotPasswordSchema), forgotPassword);

authRouter.post("/reset-password", validateRequest(resetPasswordSchema), resetPassword);

export default authRouter;
