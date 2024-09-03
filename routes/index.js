const express = require("express");
const {createUser} = require("../controllers/index.js");
const {userRegistrationSchema} = require("../schemas/userSchema.js");
const {validateRequest} = require("../middleware/requestValidate.js");
const router = express.Router();

router.post("/register", validateRequest(userRegistrationSchema), createUser);
// console.log(userRegistrationSchema);


module.exports = router;
