import express from "express";
import {bio, createUser, deleteUserAccount, loginUser, logoutUser, uploadProfilePicture, verifyEmail} from "../controllers/index.js";
import {bioSchema, userLoginSchema, userRegistrationSchema} from "../schemas/validationSchema.js";
import { validateRequest } from "../middleware/requestValidate.js";
import { isAuthenticated } from "../middleware/authenticate.js";
import { limiter } from "../middleware/rateLimit.js";
const router = express.Router();

router.post("/register", validateRequest(userRegistrationSchema), createUser);
router.get("/verify-email", verifyEmail);
router.post("/login", limiter, validateRequest(userLoginSchema), loginUser);
router.put("/update-bio", isAuthenticated, validateRequest(bioSchema), bio);
router.post("/upload-picture", isAuthenticated, uploadProfilePicture)
router.post("/logout", isAuthenticated, logoutUser);
router.delete("/delete-account", isAuthenticated, deleteUserAccount);

export default router;
