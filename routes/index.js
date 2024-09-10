import express from "express";
import {bio, createUser, deleteUserAccount, loginUser, logoutUser, verifyEmail} from "../controllers/index.js";
import {bioSchema, userLoginSchema, userRegistrationSchema} from "../schemas/userSchema.js";
import { validateRequest } from "../middleware/requestValidate.js";
const router = express.Router();

router.post("/register", validateRequest(userRegistrationSchema), createUser);
router.get("/verify-email", verifyEmail);
router.post("/login", validateRequest(userLoginSchema), loginUser);
router.put("/update-bio", validateRequest(bioSchema), bio);
router.post("/logout", logoutUser);
router.delete("/delete-account", deleteUserAccount);

export default router;
