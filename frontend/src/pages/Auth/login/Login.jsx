import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useForm } from "react-hook-form";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { loginValidationSchema } from "../../../utils/validationSchema";
import { yupResolver } from "@hookform/resolvers/yup";

const Login = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(loginValidationSchema),
  });

  const onSubmit = async (data) => {
    try {
      setLoading(true);
      const response = await axios.post(
        "http://localhost:8756/login",
        {
          ...data,
        },
        { withCredentials: true }
      );
      if (response.status === 200 || response.status === 201) {
        const token = response.data.token;
        if (token) {
          localStorage.setItem("token", token);
        }

        toast.success(response.data.message || "Login successfully");
        setTimeout(() => {
          navigate("/");
        }, 2000);
      } else {
        toast.error(`Unexpected error: ${response.status}`);
        console.log("Unexpected response data:", response.data);
      }
    } catch (error) {
      console.log("Login error", error);
      if (error.response) {
        const message = error.response.data.message || "Invalid Credentials";
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
      <ToastContainer />
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white p-6 rounded shadow-md w-full max-w-sm"
      >
        <h2 className="text-2xl font-bold mb-4">Login</h2>

        <input
          {...register("email")}
          type="email"
          className="w-full p-2 mb-4 border border-gray-300 rounded"
          placeholder="Email"
        />
        <p className="text-red-500 text-sm">{errors.email?.message}</p>

        <input
          {...register("password")}
          type="password"
          className="w-full p-2 mb-4 border border-gray-300 rounded"
          placeholder="Password"
        />
        <p className="text-red-500 text-sm">{errors.password?.message}</p>
        {/* Remember Me Checkbox */}
        <div className="flex items-center justify-between mb-4">
          <label className="inline-flex items-center">
            <input
              type="checkbox"
              className="form-checkbox text-blue-600"
              // checked={rememberMe}
            />
            <span className="ml-2 text-sm text-gray-600">Remember Me</span>
          </label>

          {/* Forgot Password Link */}
          <Link
            to="/forgot-password"
            className="text-sm text-blue-600 hover:underline"
          >
            Forgot Password?
          </Link>
        </div>

        <button
          disabled={loading}
          className="w-full bg-blue-600 text-white p-2 rounded"
        >
          {loading ? (
            <div className="flex justify-center">
              <div className="spinner-border animate-spin inline-block w-4 h-4 border-2 rounded-full border-t-transparent"></div>
            </div>
          ) : (
            "Login"
          )}
        </button>

        {/* Sign Up Link */}
        <p className="text-sm text-center mt-4">
          Don't have an account?{" "}
          <Link to="/register" className="text-blue-600 hover:underline">
            Sign Up
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
