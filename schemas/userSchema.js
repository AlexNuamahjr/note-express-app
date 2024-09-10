import Joi from "joi";

export const userRegistrationSchema = Joi.object({
  firstName: Joi.string().required(),
  lastName: Joi.string().required(),
  userName: Joi.string().alphanum().min(5).required(),
  email: Joi.string().email({minDomainSegments: 2, tlds: {allow: ["com"]}}),
  dateOfBirth: Joi.string().required(),
  password: Joi.string().required(),
  confirmPassword: Joi.ref("password")
});

export const userLoginSchema = Joi.object({
  email: Joi.string().required(),
  password: Joi.string().required()
});

export const forgotPasswordSchema = Joi.object({
  email: Joi.string().email({minDomainSegments: 2, tlds: {allow: ["com"]}})
});

export const resetPasswordSchema = Joi.object({
  newPassword: Joi.string().required(),
  userId: Joi.number().required(),
  token: Joi.string().required()
});

export const bioSchema = Joi.object({
  bio: Joi.string().required()
})
