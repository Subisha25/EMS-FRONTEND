import React from 'react';

const AdminProfile = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 flex justify-center items-center p-4">
      <div className="bg-white shadow-2xl rounded-2xl w-full max-w-md p-6">
        <div className="flex flex-col items-center text-center">
          <img
            src="https://i.pravatar.cc/150?img=12"
            alt="Admin"
            className="w-28 h-28 rounded-full border-4 border-blue-300 shadow-md"
          />
          <h2 className="text-xl font-bold text-gray-800 mt-4">Admin Name</h2>
          <p className="text-sm text-gray-500">admin@example.com</p>
        </div>

        <div className="mt-6 space-y-4">
          <div className="text-sm">
            <p className="text-gray-600">
              <strong>Role:</strong> Super Admin
            </p>
            <p className="text-gray-600">
              <strong>Phone:</strong> +91 9876543210
            </p>
            <p className="text-gray-600">
              <strong>Joined:</strong> 10 Jan 2024
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-full transition-all">
              Edit Profile
            </button>
            <button className="bg-yellow-500 hover:bg-yellow-600 text-white py-2 rounded-full transition-all">
              Change Password
            </button>
            <button className="bg-red-500 hover:bg-red-600 text-white py-2 rounded-full transition-all">
              Logout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminProfile;
