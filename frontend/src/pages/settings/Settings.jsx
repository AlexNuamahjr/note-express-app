import React, { useState } from "react";
import Layout from "../../components/Layout";

const Settings = () => {
  const [profilePicture, setProfilePicture] = useState(null);
  const [bio, setBio] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [phone, setPhone] = useState("");
  const [dob, setDob] = useState("");

  const handleProfilePictureChange = (e) => {
    setProfilePicture(URL.createObjectURL(e.target.files[0]));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <Layout>
      <div className="flex justify-center items-center h-screen bg-gray-100">
        <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-4xl">
          <h2 className="text-2xl font-bold mb-6">Settings</h2>
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col md:flex-row mb-6">
              <div className="w-full md:w-1/2 md:pr-4 mb-4 md:mb-0">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Profile Picture
                </label>
                <div className="flex items-center">
                  <div className="w-24 h-24 border border-gray-300 rounded-full overflow-hidden">
                    {profilePicture ? (
                      <img
                        src={profilePicture}
                        alt="Profile"
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center bg-gray-200">
                        <span className="text-gray-500">No Image</span>
                      </div>
                    )}
                  </div>
                  <input
                    type="file"
                    className="ml-4"
                    onChange={handleProfilePictureChange}
                  />
                </div>
              </div>
              <div className="w-full md:w-1/2 md:pl-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Bio
                </label>
                <textarea
                  className="w-full p-2 border border-gray-300 rounded"
                  rows="4"
                  value={bio}
                  onChange={(e) => setBio(e.target.value)}
                />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div>
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full p-2 border border-gray-300 rounded"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div>
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Username
                </label>
                <input
                  type="text"
                  className="w-full p-2 border border-gray-300 rounded"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
              <div>
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Phone Number
                </label>
                <input
                  type="text"
                  className="w-full p-2 border border-gray-300 rounded"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>
              <div>
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Date of Birth
                </label>
                <input
                  type="date"
                  className="w-full p-2 border border-gray-300 rounded"
                  value={dob}
                  onChange={(e) => setDob(e.target.value)}
                />
              </div>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white p-2 rounded"
            >
              Save Changes
            </button>
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default Settings;
