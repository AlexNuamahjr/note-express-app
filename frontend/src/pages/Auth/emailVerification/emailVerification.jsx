import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";


const EmailVerification = () => {
  const navigate = useNavigate();
  const token = window.location.href.split('?token=')[1]
  useEffect(() => {
    const verifyEmail = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8756/verify-email?token=${token}`
        );
        console.log(response);
        
        if (response.status === 200) {
          toast.success("Email verified successfully");
         navigate("/login");
        }
      } catch (error) {
        console.log(error);
        toast.error("Email verification failed. Please try again.");        
      }
    };

    verifyEmail();
  }, [token, navigate]);

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white p-6 rounded shadow-md">
        <h2 className="text-2xl font-bold text-center mb-4">Verifying...</h2>
        <p className="text-center">Please wait while we verify your email.</p>
      </div>
    </div>
  );
};

export default EmailVerification;
