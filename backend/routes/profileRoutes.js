import express from "express";
import { isAuthenticated } from "../middleware/authenticate.js";
import { getProfile, updateUserProfile } from "../controllers/profileController.js";

const profileRouter = express.Router();

profileRouter.get("/:userId", isAuthenticated, getProfile);
profileRouter.patch("/update/:userId", isAuthenticated, updateUserProfile);

export default profileRouter;