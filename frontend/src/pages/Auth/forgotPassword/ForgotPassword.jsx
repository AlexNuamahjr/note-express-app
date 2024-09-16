import React, { useState } from "react";
import Layout from "../../../components/Layout";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleForgotPassword = (e) => {
    e.preventDefault();

    setMessage(`A password reset link has been sent to ${email}`);
  };

  return (
    <Layout>
      <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100">
        <div className="w-full max-w-md bg-white p-8 shadow-lg rounded-md">
          <h1 className="text-2xl font-bold mb-6 text-center">
            Forgot Password
          </h1>
          <form onSubmit={handleForgotPassword}>
            <div className="mb-6">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Enter your email
              </label>
              <input
                type="email"
                id="email"
                className="w-full p-2 border border-gray-300 rounded-md"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors"
            >
              Send Reset Link
            </button>
          </form>
          {message && <p className="mt-4 text-green-600">{message}</p>}
        </div>
      </div>
    </Layout>
  );
};

export default ForgotPassword;
