import express from "express";
import {createUser, loginUser, logoutUser} from "../controllers/index.js";
import {userLoginSchema, userRegistrationSchema} from "../schemas/userSchema.js";
import { validateRequest } from "../middleware/requestValidate.js";
const router = express.Router();

router.post("/register", validateRequest(userRegistrationSchema), createUser);
router.post("/login", validateRequest(userLoginSchema), loginUser);
router.post("/logout", logoutUser);

export default router;
