import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { registrationValidationSchema } from "../../../utils/validationSchema";

const Register = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(registrationValidationSchema),
  });

  const onSubmit = async (data) => {
    try {
      setLoading(true);

      const response = await axios.post("http://localhost:8756/register", {
        ...data,
      });
      if (response.status === 201) {
        toast.success("Registration successful");
        setTimeout(() => {
          navigate("/email-confirmation");
        }, 2000);
      } else {
        toast.error(`Unexpected error: ${response.status}`);
      }
    } catch (error) {
      console.log(error);
      if (error.response) {
        const message = error.response.data.message || "Registration failed";
        toast.error(message);
      } else if (error.request) {
        toast.error("Network error, please try again");
      } else {
        toast.error("An unexpected error occured!");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-4xl">
        <h2 className="text-2xl text-center font-bold mb-6">Register</h2>
        <ToastContainer />
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div>
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Firstname
              </label>
              <input
                {...register("firstName")}
                type="text"
                className="w-full p-2 border border-gray-300 rounded"
                placeholder="Firstname"
              />
              <p className="text-red-500 text-sm">
                {errors.firstName?.message}
              </p>
            </div>

            {/* Last name */}
            <div>
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Last name
              </label>
              <input
                {...register("lastName")}
                type="text"
                className="w-full p-2 border border-gray-300 rounded"
                placeholder="Last name"
              />
              <p className="text-red-500 text-sm">{errors.lastName?.message}</p>
            </div>
            {/* Username */}
            <div>
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Username
              </label>
              <input
                {...register("userName")}
                type="text"
                className="w-full p-2 border border-gray-300 rounded"
                placeholder="Username"
              />
              <p className="text-red-500 text-sm">{errors.username?.message}</p>
            </div>

            {/* Email */}
            <div>
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Email
              </label>
              <input
                {...register("email")}
                type="email"
                className="w-full p-2 border border-gray-300 rounded"
                placeholder="Email"
              />
              <p className="text-red-500 text-sm">{errors.email?.message}</p>
            </div>

            {/* Phone Number */}
            <div>
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Phone Number
              </label>
              <input
                {...register("phoneNumber")}
                type="text"
                className="w-full p-2 border border-gray-300 rounded"
                placeholder="Phone Number"
              />
              <p className="text-red-500 text-sm">
                {errors.phoneNumber?.message}
              </p>
            </div>

            {/* Date of Birth */}
            <div>
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Date of Birth
              </label>
              <input
                {...register("dob")}
                type="date"
                className="w-full p-2 border border-gray-300 rounded"
              />
              <p className="text-red-500 text-sm">{errors.dob?.message}</p>
            </div>

            {/* Gender */}
            <div className="col-span-1 md:col-span-2">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Gender
              </label>
              <select
                {...register("gender")}
                className="w-full p-2 border border-gray-300 rounded"
              >
                <option value="">Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
              <p className="text-red-500 text-sm">{errors.gender?.message}</p>
            </div>

            {/* Password */}
            <div className="">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Password
              </label>
              <input
                {...register("password")}
                type="password"
                className="w-full p-2 border border-gray-300 rounded"
                placeholder="Password"
              />
              <p className="text-red-500 text-sm">{errors.password?.message}</p>
            </div>
            <div className="">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Confirm Password
              </label>
              <input
                type="password"
                className="w-full p-2 border border-gray-300 rounded"
                placeholder="Password"
              />
            </div>
          </div>

          <button
            className="w-full bg-blue-600 text-white p-2 rounded mb-4"
            disabled={loading}
          >
            {loading ? (
              <div className="flex justify-center">
                <div className="spinner-border animate-spin inline-block w-4 h-4 border-2 rounded-full border-t-transparent"></div>
              </div>
            ) : (
              "Register"
            )}
          </button>

          <p className="text-sm text-center">
            Already have an account?{" "}
            <Link to="/login" className="text-blue-600 hover:underline">
              Login
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;
