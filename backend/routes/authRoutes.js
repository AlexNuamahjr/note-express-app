import express from "express";
import {checkSession, forgotPassword, resetPassword} from "../controllers/authController.js";
import {changePasswordSchema, forgotPasswordSchema, resetPasswordSchema} from "../schemas/validationSchema.js";
import { validateRequest } from "../middleware/requestValidate.js";
import { isAuthenticated } from "../middleware/authenticate.js";
import { changePassword } from "../controllers/changePassword.js";

const authRouter = express.Router();

authRouter.get("/check-session", checkSession);
authRouter.post("/forgot-password", isAuthenticated, validateRequest(forgotPasswordSchema), forgotPassword);
authRouter.post("/reset-password", isAuthenticated, validateRequest(resetPasswordSchema), resetPassword);
authRouter.patch("/change-password", isAuthenticated,  validateRequest(changePasswordSchema), changePassword);

export default authRouter;
