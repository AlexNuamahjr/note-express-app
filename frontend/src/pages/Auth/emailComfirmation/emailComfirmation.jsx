import React from "react";
import { useLocation, Link } from "react-router-dom";

const EmailConfirmation = () => {
  const location = useLocation();
  const { email } = location.state || {};

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white p-6 rounded shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-4">Confirm Your Email</h2>
        {email ? (
          <p className="text-center mb-6">
            A confirmation link has been sent to <strong>{email}</strong>. Please check your inbox and follow the instructions to complete your registration.
          </p>
        ) : (
          <p className="text-center mb-6">
            A confirmation link has been sent to your email address. Please check your inbox and follow the instructions to complete your registration.
          </p>
        )}
        <p className="text-sm text-center text-gray-600">
          Didn't receive the email? <Link href="/" className="text-blue-600 hover:underline">Resend Confirmation</Link>
        </p>
      </div>
    </div>
  );
};

export default EmailConfirmation;
