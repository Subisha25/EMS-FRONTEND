
// // import React, { useEffect, useState } from 'react';
// // import { useParams } from 'react-router-dom';
// // import { useNavigate } from 'react-router-dom';

// // const API_BASE = 'http://localhost/EMS-backend/api/employee';

// // const AdminEmployeeProfile = () => {
// //   const { emp_id } = useParams();
// //   const [employee, setEmployee] = useState(null);
// // const navigate = useNavigate();

// //   useEffect(() => {
// //     fetch(`${API_BASE}/get_one.php?emp_id=${emp_id}`)
// //       .then(res => res.json())
// //       .then(data => setEmployee(data))
// //       .catch(err => console.error('Error fetching profile:', err));
// //   }, [emp_id]);

// //   if (!employee) return <div className="text-center p-10">Loading profile...</div>;

// //   return (
// //     <div className="max-w-5xl mx-auto bg-white shadow-2xl rounded-2xl p-8 mt-10 mb-10">
// //       <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Employee Profile</h2>

// //       <div className="flex flex-col md:flex-row items-center md:items-start gap-10">
// //         <div className="flex flex-col items-center">
// // <img
// //   src={employee.photo ? `http://localhost/EMS-backend/uploads/${employee.photo}` : 'https://i.pravatar.cc/100'}
// //   onError={(e) => {
// //     e.target.src = 'https://i.pravatar.cc/100';
// //   }}
// //   alt="Employee"
// //   className="w-32 h-32 rounded-full border-4 border-blue-300 shadow-md"
// // />

// //           <p className="mt-4 text-xl font-semibold">{employee.first_name} {employee.last_name}</p>
// //           <p className="text-gray-500">{employee.emp_id}</p>
// //           <div className="mt-6 flex flex-col gap-3 w-44">
            
// // <button
// //   className="bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg"
// //   onClick={() => navigate(`/mainlayout/admin/employee/${emp_id}/edit`)}
// // >
// //   Update
// // </button>
// //           </div>
// //         </div>

// //         <div className="grid grid-cols-1 md:grid-cols-2 gap-6 flex-grow">
// //           <div><label className="block text-gray-600 font-medium mb-1">Email</label><div className="text-gray-800">{employee.email}</div></div>
// //           <div><label className="block text-gray-600 font-medium mb-1">Mobile No</label><div className="text-gray-800">{employee.mobile}</div></div>
// //           <div><label className="block text-gray-600 font-medium mb-1">Designation</label><div className="text-gray-800">{employee.designation}</div></div>
// //           <div><label className="block text-gray-600 font-medium mb-1">Date of Birth</label><div className="text-gray-800">{employee.dob}</div></div>
// //           <div><label className="block text-gray-600 font-medium mb-1">Date of Joining</label><div className="text-gray-800">{employee.doj}</div></div>
// //           <div><label className="block text-gray-600 font-medium mb-1">Country</label><div className="text-gray-800">{employee.country}</div></div>
// //           <div><label className="block text-gray-600 font-medium mb-1">State</label><div className="text-gray-800">{employee.state}</div></div>
// //           <div><label className="block text-gray-600 font-medium mb-1">City</label><div className="text-gray-800">{employee.city}</div></div>
// //           <div className="md:col-span-2"><label className="block text-gray-600 font-medium mb-1">Address</label><div className="text-gray-800">{employee.address}</div></div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default AdminEmployeeProfile;

// import React, { useEffect, useState } from 'react';
// import { useParams, useNavigate } from 'react-router-dom';
// import { FaEnvelope, FaPhone, FaBriefcase, FaBirthdayCake, FaCalendarAlt, FaGlobe, FaMapMarkerAlt, FaHome } from 'react-icons/fa';
// import API from '../../../utils/api';


// const AdminEmployeeProfile = () => {
//   const { emp_id } = useParams();
//   const [employee, setEmployee] = useState(null);
//   const navigate = useNavigate();

//   useEffect(() => {
//     fetch(`${API_BASE}employee/get_one.php?emp_id=${emp_id}`)
//       .then(res => res.json())
//       .then(data => setEmployee(data))
//       .catch(err => console.error('Error fetching profile:', err));
//   }, [emp_id]);

//   if (!employee) return <div className="text-center p-10 text-lg font-medium">Loading profile...</div>;

//   return (
//     <div className="max-w-5xl mx-auto bg-white shadow-xl rounded-xl overflow-hidden mt-10 mb-10 border border-gray-100">
      
//       {/* Profile Header */}
//       <div className="bg-[#101c3d] p-8 flex flex-col items-center">
        // <img
        //   src={employee.photo ? `API.uploads/${employee.photo}` : 'https://i.pravatar.cc/150'}
        //   onError={(e) => { e.target.src = 'https://i.pravatar.cc/150'; }}
        //   alt="Employee"
        //   className="w-36 h-36 rounded-full border-4 border-white shadow-lg transform hover:scale-105 transition-transform duration-300"
        // />
//         <h2 className="mt-4 text-2xl font-bold text-white">{employee.first_name} {employee.last_name}</h2>
//         <p className="text-blue-100">{employee.emp_id}</p>
//         <button
//           className="mt-5 bg-gradient-to-r from-green-400 to-green-600 hover:from-green-500 hover:to-green-700 text-white px-6 py-2 rounded-full shadow-lg transition-all"
//           onClick={() => navigate(`/mainlayout/admin/employee/${emp_id}/edit`)}
//         >
//           Update Profile
//         </button>
//       </div>

//       {/* Details Section */}
//       <div className="p-8 grid grid-cols-1 md:grid-cols-2 gap-6">
//         <InfoCard icon={<FaEnvelope />} label="Email" value={employee.email} />
//         <InfoCard icon={<FaPhone />} label="Mobile No" value={employee.mobile} />
//         <InfoCard icon={<FaBriefcase />} label="Designation" value={employee.designation} />
//         <InfoCard icon={<FaBirthdayCake />} label="Date of Birth" value={employee.dob} />
//         <InfoCard icon={<FaCalendarAlt />} label="Date of Joining" value={employee.doj} />
//         <InfoCard icon={<FaGlobe />} label="Country" value={employee.country} />
//         <InfoCard icon={<FaMapMarkerAlt />} label="State" value={employee.state} />
//         <InfoCard icon={<FaMapMarkerAlt />} label="City" value={employee.city} />
//         <InfoCard className="md:col-span-2" icon={<FaHome />} label="Address" value={employee.address} />
//       </div>
//     </div>
//   );
// };

// // Reusable Info Card Component
// const InfoCard = ({ icon, label, value, className }) => (
//   <div className={`flex items-start gap-4 p-4 bg-gray-50 rounded-lg shadow-sm hover:shadow-md transition-shadow ${className || ''}`}>
//     <div className="text-blue-600 text-xl">{icon}</div>
//     <div>
//       <p className="text-sm text-gray-500 font-medium">{label}</p>
//       <p className="text-gray-800 font-semibold">{value || 'N/A'}</p>
//     </div>
//   </div>
// );

// export default AdminEmployeeProfile;

import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { FaEnvelope, FaPhone, FaBriefcase, FaBirthdayCake, FaCalendarAlt, FaGlobe, FaMapMarkerAlt, FaHome } from 'react-icons/fa';
import API, { UPLOADS_BASE_URL } from '../../../utils/api';  // ✅ axios instance import

const AdminEmployeeProfile = () => {
  const { emp_id } = useParams();
  const [employee, setEmployee] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchEmployee = async () => {
      try {
        const res = await API.get(`api/employee/get_one.php?emp_id=${emp_id}`);
        setEmployee(res.data);
      } catch (err) {
        console.error("Error fetching profile:", err);
      }
    };
    fetchEmployee();
  }, [emp_id]);

  if (!employee) {
    return <div className="text-center p-10 text-lg font-medium">Loading profile...</div>;
  }

  return (
    <div className="max-w-5xl mx-auto bg-white shadow-xl rounded-xl overflow-hidden mt-10 mb-10 border border-gray-100">
      {/* Profile Header */}
      <div className="bg-[#101c3d] p-8 flex flex-col items-center">
     <img
  src={employee.photo ? `${UPLOADS_BASE_URL}${employee.photo}` : 'https://i.pravatar.cc/150'}
  onError={(e) => { e.target.src = 'https://i.pravatar.cc/150'; }}
  alt="Employee"
  className="w-36 h-36 rounded-full border-4 border-white shadow-lg transform hover:scale-105 transition-transform duration-300"
/>

        <h2 className="mt-4 text-2xl font-bold text-white">{employee.first_name} {employee.last_name}</h2>
        <p className="text-blue-100">{employee.emp_id}</p>
        <button
          className="mt-5 bg-gradient-to-r from-green-400 to-green-600 hover:from-green-500 hover:to-green-700 text-white px-6 py-2 rounded-full shadow-lg transition-all"
          onClick={() => navigate(`/mainlayout/admin/employee/${emp_id}/edit`)}
        >
          Update Profile
        </button>
      </div>

      {/* Details Section */}
      <div className="p-8 grid grid-cols-1 md:grid-cols-2 gap-6">
        <InfoCard icon={<FaEnvelope />} label="Email" value={employee.email} />
        <InfoCard icon={<FaPhone />} label="Mobile No" value={employee.mobile} />
        <InfoCard icon={<FaBriefcase />} label="Designation" value={employee.designation} />
        <InfoCard icon={<FaBirthdayCake />} label="Date of Birth" value={employee.dob} />
        <InfoCard icon={<FaCalendarAlt />} label="Date of Joining" value={employee.doj} />
        <InfoCard icon={<FaGlobe />} label="Country" value={employee.country} />
        <InfoCard icon={<FaMapMarkerAlt />} label="State" value={employee.state} />
        <InfoCard icon={<FaMapMarkerAlt />} label="City" value={employee.city} />
        <InfoCard className="md:col-span-2" icon={<FaHome />} label="Address" value={employee.address} />
      </div>
    </div>
  );
};

// Reusable Info Card
const InfoCard = ({ icon, label, value, className }) => (
  <div className={`flex items-start gap-4 p-4 bg-gray-50 rounded-lg shadow-sm hover:shadow-md transition-shadow ${className || ''}`}>
    <div className="text-blue-600 text-xl">{icon}</div>
    <div>
      <p className="text-sm text-gray-500 font-medium">{label}</p>
      <p className="text-gray-800 font-semibold">{value || 'N/A'}</p>
    </div>
  </div>
);

export default AdminEmployeeProfile;
