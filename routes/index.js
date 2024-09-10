import express from "express";
import {bio, createUser, loginUser, logoutUser, verifyEmail} from "../controllers/index.js";
import {userLoginSchema, userRegistrationSchema} from "../schemas/userSchema.js";
import { validateRequest } from "../middleware/requestValidate.js";
const router = express.Router();

router.post("/register", validateRequest(userRegistrationSchema), createUser);
router.get("/verify-email", verifyEmail);
router.post("/login", validateRequest(userLoginSchema), loginUser);
router.put("/update-bio", bio);
router.post("/logout", logoutUser);

export default router;
