import express from "express";
import { isAuthenticated } from "../middleware/authenticate.js";
import { getProfile } from "../controllers/profileController.js";

const profileRouter = express.Router();

profileRouter.get("/:userId", isAuthenticated, getProfile);

export default profileRouter;
