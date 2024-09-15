import React, { useState } from "react";
import Layout from "../../../components/Layout";

const ChangePassword = () => {
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handlePasswordChange = (e) => {
    e.preventDefault();

    if (newPassword !== confirmPassword) {
      alert("New passwords do not match");
      return;
    }
  };

  return (
    <Layout>
      <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100">
        <div className="w-full max-w-md bg-white p-8 shadow-lg rounded-md">
          <h1 className="text-2xl font-bold mb-6 text-center">
            Change Password
          </h1>
          <form onSubmit={handlePasswordChange}>
            <div className="mb-4">
              <label
                htmlFor="old-password"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Old Password
              </label>
              <input
                type="password"
                id="old-password"
                className="w-full p-2 border border-gray-300 rounded-md"
                value={oldPassword}
                onChange={(e) => setOldPassword(e.target.value)}
                required
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="new-password"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                New Password
              </label>
              <input
                type="password"
                id="new-password"
                className="w-full p-2 border border-gray-300 rounded-md"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                required
              />
            </div>

            <div className="mb-6">
              <label
                htmlFor="confirm-password"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Confirm New Password
              </label>
              <input
                type="password"
                id="confirm-password"
                className="w-full p-2 border border-gray-300 rounded-md"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors"
            >
              Change Password
            </button>
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default ChangePassword;
