const express = require("express");
const {forgotPassword, home} = require("../controllers/authController.js");
const {forgotPasswordSchema} = require("../schemas/userSchema.js");
const {validateRequest} = require("../middleware/requestValidate.js");

const authRouter = express.Router();


authRouter.post("/forgot-password", validateRequest(forgotPasswordSchema), forgotPassword)


module.exports = authRouter;
