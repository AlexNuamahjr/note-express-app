import express from "express";
import {bio, checkSession, createUser, deleteUserAccount, loginUser, logoutUser, uploadProfilePicture, verifyEmail} from "../controllers/index.js";
import {bioSchema, userLoginSchema, userRegistrationSchema} from "../schemas/validationSchema.js";
import { validateRequest } from "../middleware/requestValidate.js";
import { isAuthenticated } from "../middleware/authenticate.js";
const router = express.Router();

router.post("/register", validateRequest(userRegistrationSchema), createUser);
router.get("/verify-email", verifyEmail);
router.post("/login", validateRequest(userLoginSchema), loginUser);
router.get("/check-session", checkSession)
router.put("/update-bio", isAuthenticated, validateRequest(bioSchema), bio);
router.post("/upload-picture", isAuthenticated, uploadProfilePicture)
router.post("/logout", isAuthenticated, logoutUser);
router.delete("/delete-account", isAuthenticated, deleteUserAccount);

export default router;
