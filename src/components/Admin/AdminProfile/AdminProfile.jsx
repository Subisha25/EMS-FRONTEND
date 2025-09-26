// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import EditProfileModal from './EditProfileModal';
// import { useNavigate } from 'react-router-dom';
// import ForgetPassword from '../../ForgetPassword';


// const AdminProfile = () => {
//   const [admin, setAdmin] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState('');
//   const [showEdit, setShowEdit] = useState(false);
//   const navigate = useNavigate();
//   const [showForget, setShowForget] = useState(false); // ✅ control popup

//   const fetchAdmin = async () => {
//     try {
//       const res = await axios.get("http://localhost/EMS-backend/api/admin/get_all.php");
//       if (res.data.status && res.data.admins.length > 0) {
//         setAdmin(res.data.admins[0]);
//       } else {
//         setError("No admin data found");
//       }
//     } catch (err) {
//       setError("Error fetching admin data");
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchAdmin();
//   }, []);

//   if (loading) return <div className="text-center p-10">Loading...</div>;
//   if (error) return <div className="text-center p-10 text-red-500">{error}</div>;

//   return (
//     <div className="min-h-screen  flex justify-center items-center p-4">
//       <div className="bg-white shadow-2xl rounded-2xl w-full max-w-md p-6">
//         <div className="flex flex-col items-center  text-center">
//           {admin?.image && (
//             <img src={admin.image} alt="Admin" className="w-28 h-28 rounded-full border-4 border-blue-300 shadow-md" />
//           )}
//           <h2 className="text-xl font-bold text-gray-800 mt-4">{admin.name}</h2>
//           <p className="text-sm text-gray-500">{admin.email}</p>
//         </div>

//         <div className="mt-6 space-y-2 text-sm text-gray-600">
//           <p><strong>Role:</strong> {admin.role || "Super Admin"}</p>
//           <p><strong>Phone:</strong> {admin.phone}</p>
//           <p><strong>Location:</strong> {admin.location || "N/A"}</p>
//           <p><strong>Office Open Date:</strong> {admin.office_opening_date || "N/A"}</p>
//         </div>

//         <div className="flex flex-col gap-3 mt-6">
//           <button
//             className="bg-[#101c3d]  text-white py-2 rounded-full transition-all"
//             onClick={() => navigate('/mainlayout/edit-profile', { state: { admin } })}
//           >
//             Edit Profile
//           </button>
//            {/* ✅ Forgot password link */}
//         <p
//           onClick={() => setShowForget(true)}
//           className="text-blue-600 text-sm mt-2 text-center cursor-pointer hover:underline"
//         >
//           Change Password?
//         </p>
      
//           {/* <button className="bg-yellow-500 hover:bg-yellow-600 text-white py-2 rounded-full transition-all">Change Password</button> */}
//           {/* <button className="bg-red-500 hover:bg-red-600 text-white py-2 rounded-full transition-all">Logout</button> */}
//        {/* <button
//   className="bg-red-500 hover:bg-red-600 text-white py-2 rounded-full transition-all"
//   onClick={() => navigate('/')}
// >  Logout</button> */}
//         </div>
//       </div>

      

//       {showEdit && (
//         <EditProfileModal
//           admin={admin}
//           onClose={() => setShowEdit(false)}
//           onUpdate={fetchAdmin}
//         />
//       )}

       

//       {/* ✅ Popup Modal for Forget Password */}
//       {showForget && (
//         <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
//           <div className="relative bg-white rounded-2xl shadow-lg w-full max-w-lg p-6">
//             <button
//               onClick={() => setShowForget(false)}
//               className="absolute top-3 right-3 text-gray-600 hover:text-red-500"
//             >
//               ✕
//             </button>
//             <ForgetPassword />
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default AdminProfile;

import React, { useEffect, useState } from "react";
import axios from "axios";
import EditProfileModal from "./EditProfileModal";
import { useNavigate } from "react-router-dom";
import ForgetPassword from "../../ForgetPassword";
import API from "../../../utils/api";

const AdminProfile = () => {
  const [admin, setAdmin] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [showEdit, setShowEdit] = useState(false);
  const [showForget, setShowForget] = useState(false);
  const navigate = useNavigate();

  const fetchAdmin = async () => {
    try {
      const res = await API.get(
        "api/admin/get_all.php"
      );
      if (res.data.status && res.data.admins.length > 0) {
        setAdmin(res.data.admins[0]);
      } else {
        setError("No admin data found");
      }
    } catch (err) {
      setError("Error fetching admin data");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAdmin();
  }, []);

  if (loading) return <div className="text-center p-10">Loading...</div>;
  if (error) return <div className="text-center p-10 text-red-500">{error}</div>;

  return (
    <div className="min-h-screen flex justify-center items-center p-4  animate-gradient">
      <div className="backdrop-blur-lg  bg-gradient-to-br from-[#101c3d] via-[#243b6b] to-[#101c3d] bg-white/20 border-2 border-[#101c3d] rounded-2xl shadow-2xl w-full max-w-md p-8 transition-all hover:scale-[1.02]">
        {/* Profile Section */}
        <div className="flex flex-col items-center text-center">
          {admin?.image && (
            <img
              src={admin.image}
              alt="Admin"
              className="w-28 h-28 rounded-full border-4 border-blue-400 shadow-lg"
            />
          )}
          <h2 className="text-2xl font-bold text-white mt-4">{admin.name}</h2>
          <p className="text-sm text-blue-200">{admin.email}</p>
        </div>

        {/* Info Section */}
        <div className="mt-6 space-y-3 text-sm text-white/90">
          <p>
            <strong className="text-blue-300">Role:</strong>{" "}
            {admin.role || "Super Admin"}
          </p>
          <p>
            <strong className="text-blue-300">Phone:</strong> {admin.phone}
          </p>
          <p>
            <strong className="text-blue-300">Location:</strong>{" "}
            {admin.location || "N/A"}
          </p>
          <p>
            <strong className="text-blue-300">Office Open Date:</strong>{" "}
            {admin.office_opening_date || "N/A"}
          </p>
        </div>

        {/* Actions */}
        <div className="flex flex-col gap-4 mt-8">
          <button
            className="bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 text-white py-2 rounded-full font-semibold shadow-md transition-all duration-300 hover:scale-105"
            onClick={() =>
              navigate("/mainlayout/edit-profile", { state: { admin } })
            }
          >
            ✏️ Edit Profile
          </button>

          <p
            onClick={() => setShowForget(true)}
            className="text-blue-300 text-sm mt-2 text-center cursor-pointer hover:underline hover:text-blue-400 transition-all"
          >
            🔑 Change Password?
          </p>
        </div>
      </div>

      {/* Forget Password Modal */}
      {showForget && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/60 z-50">
          <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-lg p-6 animate-fadeIn">
            <button
              onClick={() => setShowForget(false)}
              className="absolute top-3 right-3 text-gray-600 hover:text-red-500 text-xl"
            >
              ✕
            </button>
            <ForgetPassword />
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminProfile;
