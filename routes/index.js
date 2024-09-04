const express = require("express");
const {createUser, loginUser, logoutUser} = require("../controllers/index.js");
const {userRegistrationSchema, userLoginSchema} = require("../schemas/userSchema.js");
const {validateRequest} = require("../middleware/requestValidate.js");
const router = express.Router();

router.post("/register", validateRequest(userRegistrationSchema), createUser);
router.post("/login", validateRequest(userLoginSchema), loginUser);
router.post("/logout", logoutUser);


module.exports = router;
