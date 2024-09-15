import React, { useState } from "react";
import Layout from "../../components/Layout";

const EditProfile = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [profilePicture, setProfilePicture] = useState(null);
  const [bio, setBio] = useState("");

  const handlePictureChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setProfilePicture(URL.createObjectURL(file));
    }
  };

  const handleSave = () => {
    
    alert("Profile updated!");
  };

  return (
    <Layout>
      <div className="min-h-screen bg-gray-100 flex flex-col items-center">
        <div className="bg-white p-6 rounded shadow-md w-full max-w-md mt-10">
          <h1 className="text-2xl font-semibold mb-4">Edit Profile</h1>

          <div className="flex flex-col items-center mb-6">
            <div className="relative">
              {profilePicture ? (
                <img
                  src={profilePicture}
                  alt="Profile"
                  className="w-24 h-24 rounded-full object-cover"
                />
              ) : (
                <div className="w-24 h-24 rounded-full bg-gray-200 flex items-center justify-center">
                  <span className="text-gray-500">No Image</span>
                </div>
              )}
              <input
                type="file"
                accept="image/*"
                className="absolute inset-0 opacity-0 cursor-pointer"
                onChange={handlePictureChange}
              />
            </div>
            <span className="text-sm text-gray-600 mt-2">
              Click to change profile picture
            </span>
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Name
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your name"
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your email"
            />
          </div>

          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700">
              Bio
            </label>
            <textarea
              value={bio}
              onChange={(e) => setBio(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Tell us about yourself"
              rows="3"
            />
          </div>

          <button
            onClick={handleSave}
            className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition"
          >
            Save Changes
          </button>
        </div>
      </div>
    </Layout>
  );
};

export default EditProfile;
