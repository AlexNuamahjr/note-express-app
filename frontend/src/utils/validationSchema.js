import * as yup from "yup";

export const registrationValidationSchema = yup.object().shape({
  firstName: yup.string().required("first name is required"),
  lastName: yup.string().required("Last name is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
  userName: yup.string().required("Username is required"),
  gender: yup.string().required("Gender is required"),
  phoneNumber: yup.string().required("Phone number is required"),
  dob: yup.string().required("Date of birth is required"),
  password: yup.string().required("Password is required"),
});

export const loginValidationSchema = yup.object().shape({
  email: yup.string().required("Email is required"),
  password: yup.string().required("Password is required"),
});
