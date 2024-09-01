const Joi = require("joi");

const userValidator = (schema)=>(payload)=>{
    return schema.validate(payload, {abortEarly: false})
}

const userRegistrationSchema = Joi.object({
  firstName: Joi.string().required(),
  lastName: Joi.string().required(),
  userName: Joi.string().alphanum().min(5).required(),
  email: Joi.string().email({minDomainSegments: 2, tlds: {allow: ["com"]}}),
  dateOfBirth: Joi.string().required(),
  password: Joi.string().required(),
  confirmPassword: Joi.ref("password")
});

module.exports = userValidator(userRegistrationSchema);
