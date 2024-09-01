const express = require("express");
const {createUser} = require("../controllers/index.js");
const userSchema = require("../schemas/userSchema.js");
const {validateRequest} = require("../middleware/requestValidate.js")
const router = express.Router();

router.post("/register", validateRequest(userSchema), createUser);

module.exports = router;