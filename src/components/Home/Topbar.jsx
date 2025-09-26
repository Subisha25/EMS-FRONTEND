// // import React from 'react';
// // import { FaBell, FaWrench, FaEnvelope } from 'react-icons/fa';
// // import './Topbar.css';

// // export default function Topbar() {
// //   return (
// //     <div className="topbar">
// //       <div className="topbar-left">
// //         <button className="menu-toggle">
// //           <span className="menu-icon">&#9776;</span>
// //         </button>
// //         <select className="candidate-dropdown">
// //           <option>All Candidates</option>
// //         </select>
// //         <input className="search-bar" type="text" placeholder="Search..." />
// //       </div>
// //       <div className="topbar-right">
// //         <div className="icon-badge">
// //           <FaBell />
// //           <span className="badge">13</span>
// //         </div>
// //         <div className="icon-badge">
// //           <FaWrench />
// //         </div>
// //         <div className="icon-badge">
// //           <FaEnvelope />
// //           <span className="badge">13</span>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // } 

// import React from 'react';

// export default function Topbar() {
//   const user = JSON.parse(sessionStorage.getItem('user'));
//   const empId = user?.emp_id;
//   const role = user?.role?.trim().toLowerCase();

//   if (role === 'admin') {
//     return (
//       <div className="topbar  px-6 py-3  flex justify-center items-center">
//         <span className="text-violet-700 text-lg font-semibold">
//           Pavitha Consultancy Services
//         </span>
//       </div>
//     );
//   }

//   return (
//     <div className="topbar  px-6 py-3 flex justify-between items-center">
//       <span className="text-violet-700 text-lg font-semibold">
//         Pavitha Consultancy Services
//       </span>
//       <span className="text-gray-800 font-semibold">
//         Employee ID: {empId || 'N/A'}
//       </span>
//     </div>
//   );
// }

// import React, { useEffect, useState } from 'react';
// import { Bell } from 'lucide-react';
// import axios from 'axios';

// export default function Topbar() {
//   const [newRequests, setNewRequests] = useState(0);
//   const user = JSON.parse(sessionStorage.getItem('user'));
//   const role = user?.role?.trim().toLowerCase();

//   useEffect(() => {
//     if (role === 'admin') {
//       // Fetch leave requests
//       axios.get('http://localhost/ems-backend/api/leave/get.php')
//         .then(res => {
//           const leaveList = Array.isArray(res.data) ? res.data : res.data.data;
//           const pendingCount = leaveList.filter(l => l.status?.toLowerCase() === 'pending').length;
//           setNewRequests(pendingCount);
//         })
//         .catch(err => console.error(err));
//     }
//   }, [role]);

//   if (role === 'admin') {
//     return (
//       <div className="topbar px-6 py-3 flex justify-between items-center bg-white shadow">
//         <span className="text-violet-700 text-lg font-semibold">
//           Pavitha Consultancy Services
//         </span>
//         <div className="relative cursor-pointer">
//           <Bell size={24} className="text-gray-700" />
//           {newRequests > 0 && (
//             <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
//               {newRequests}
//             </span>
//           )}
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="topbar px-6 py-3 flex justify-between items-center bg-white shadow">
//       <span className="text-violet-700 text-lg font-semibold">
//         Pavitha Consultancy Services
//       </span>
//       <span className="text-gray-800 font-semibold">
//         Employee ID: {user?.emp_id || 'N/A'}
//       </span>
//     </div>
//   );
// }

// import React, { useEffect, useState } from 'react';
// import { Bell } from 'lucide-react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom'; // <-- import useNavigate

// export default function Topbar() {
//   const [newRequests, setNewRequests] = useState(0);
//   const user = JSON.parse(sessionStorage.getItem('user'));
//   const role = user?.role?.trim().toLowerCase();
//   const navigate = useNavigate(); // <-- initialize navigate

//   useEffect(() => {
//     if (role === 'admin') {
//       // Fetch leave requests
//       axios.get('http://localhost/ems-backend/api/leave/get.php')
//         .then(res => {
//           const leaveList = Array.isArray(res.data) ? res.data : res.data.data;
//           const pendingCount = leaveList.filter(l => l.status?.toLowerCase() === 'pending').length;
//           setNewRequests(pendingCount);
//         })
//         .catch(err => console.error(err));
//     }
//   }, [role]);

//   const handleBellClick = () => {
//     navigate('/mainlayout/leave-requests'); // <-- navigate on click
//   };

//   if (role === 'admin') {
//     return (
//       <div className="topbar px-6 py-3 flex justify-between items-center bg-white shadow">
//         <span className="text-violet-700 text-lg font-semibold">
//           Pavitha Consultancy Services
//         </span>
//         <div className="relative cursor-pointer" onClick={handleBellClick}>
//           <Bell size={24} className="text-gray-700" />
//           {newRequests > 0 && (
//             <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
//               {newRequests}
//             </span>
//           )}
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="topbar px-6 py-3 flex justify-between items-center bg-white shadow">
//       <span className="text-violet-700 text-lg font-semibold">
//         Pavitha Consultancy Services
//       </span>
//       <span className="text-gray-800 font-semibold">
//         Employee ID: {user?.emp_id || 'N/A'}
//       </span>
//     </div>
//   );
// }

// import React, { useEffect, useState } from 'react';
// import { Bell } from 'lucide-react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';

// export default function Topbar() {
//   const [newRequests, setNewRequests] = useState(0);
//   const user = JSON.parse(sessionStorage.getItem('user'));
//   const role = user?.role?.trim().toLowerCase();
//   const navigate = useNavigate();

//   useEffect(() => {
//     let interval;

//     const fetchPendingCount = () => {
//       if (role === 'admin') {
//         axios.get('http://localhost/ems-backend/api/leave/get.php')
//           .then(res => {
//             const leaveList = Array.isArray(res.data) ? res.data : res.data.data;
//             const pendingCount = leaveList.filter(l => l.status?.toLowerCase() === 'pending').length;
//             setNewRequests(pendingCount);
//           })
//           .catch(err => console.error(err));
//       }
//     };

//     // Initial fetch
//     fetchPendingCount();

//     // Poll API every 3 seconds
//     interval = setInterval(fetchPendingCount, 3000);

//     // Cleanup interval on unmount
//     return () => clearInterval(interval);
//   }, [role]);

//   const handleBellClick = () => {
//     navigate('/mainlayout/leave-requests');
//   };

//   if (role === 'admin') {
//     return (
//       <div className=" px-6 py-3 flex justify-between items-center bg-white">
//         <span className="text-violet-700 text-lg font-semibold">
//           Pavitha Consultancy Services
//         </span>
//         <div className="relative cursor-pointer" onClick={handleBellClick}>
//           <Bell size={24} className="text-gray-700" />
//           {newRequests > 0 && (
//             <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
//               {newRequests}
//             </span>
//           )}
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="topbar px-6 py-3 flex justify-between items-center bg-white shadow">
//       <span className="text-violet-700 text-lg font-semibold">
//         Pavitha Consultancy Services
//       </span>
//       <span className="text-gray-800 font-semibold">
//         Employee ID: {user?.emp_id || 'N/A'}
//       </span>
//     </div>
//   );
// }

import React, { useEffect, useState } from 'react';
import { Bell } from 'lucide-react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import API from '../../utils/api';

export default function Topbar() {
  const [newRequests, setNewRequests] = useState(0);
  const user = JSON.parse(sessionStorage.getItem('user'));
  const role = user?.role?.trim().toLowerCase();
  const navigate = useNavigate();

  useEffect(() => {
    let interval;

    const fetchPendingCount = () => {
      if (role === 'admin') {
        API.get('api/leave/get.php')
          .then(res => {
            const leaveList = Array.isArray(res.data) ? res.data : res.data.data;
            const pendingCount = leaveList.filter(l => l.status?.toLowerCase() === 'pending').length;
            setNewRequests(pendingCount);
          })
          .catch(err => console.error(err));
      }
    };

    // Initial fetch
    fetchPendingCount();

    // Poll API every 3 seconds
    interval = setInterval(fetchPendingCount, 3000);

    // Cleanup interval on unmount
    return () => clearInterval(interval);
  }, [role]);

  const handleBellClick = () => {
    navigate('/mainlayout/leave-requests');
  };

  if (role === 'admin') {
    return (
      <div className="bg-gradient-to-r from-white to-gray-50 py-4 px-8 flex justify-between items-center border-b border-gray-200 shadow-sm">
        <span className="text-[#101c3d] text-2xl font-black tracking-wide drop-shadow-sm">
          Pavitha Consultancy Services
        </span>
        <div className="relative group cursor-pointer" onClick={handleBellClick}>
          <div className="relative w-12 h-12 flex items-center justify-center rounded-full bg-gray-100 transition-all duration-300 transform group-hover:scale-110">
            <Bell size={24} className="text-gray-600 transition-all duration-300 group-hover:text-[#101c3d]" />
            {newRequests > 0 && (
              <span className="absolute top-0 right-0 -mt-1 -mr-1 bg-red-500 text-white text-[10px] font-bold w-5 h-5 flex items-center justify-center rounded-full border-2 border-white shadow-md">
                {newRequests}
              </span>
            )}
          </div>
        </div>
      </div>
    );
  }

  // Employee Topbar
  return (
    <div className="bg-gradient-to-r from-white to-gray-50 py-4 px-8 flex justify-center items-center border-b border-gray-200 shadow-sm">
      <div className="text-center">
        <span className="text-[#101c3d] text-2xl font-black tracking-wide drop-shadow-sm">
          Pavitha Consultancy Services
        </span>
        <div className="text-gray-500 text-sm mt-1 font-medium">
          Employee ID: <span className="text-gray-800 font-semibold">{user?.emp_id || 'N/A'}</span>
        </div>
      </div>
    </div>
  );
}