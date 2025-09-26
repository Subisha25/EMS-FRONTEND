// // import React, { useState, useEffect } from 'react';
// // import {
// //   FaTachometerAlt, FaCalendarCheck, FaMoneyBillWave,
// //   FaUserCircle, FaChevronDown, FaChevronUp, FaSignOutAlt
// // } from 'react-icons/fa';
// // import { useNavigate, useLocation } from 'react-router-dom';
// // import logo from '../assets/logo.553589f656b9eb7282fc.png';

// // export default function EmployeeSidebar() {
// //   const navigate = useNavigate();
// //   const location = useLocation();
// //   const [activeDropdown, setActiveDropdown] = useState('');
// //   const [employeeData, setEmployeeData] = useState(null);

// //   const employee = JSON.parse(sessionStorage.getItem('user'));
// //   const employeeId = employee?.emp_id || employee?.id;

// //   // ✅ Fetch employee details from API
// //   useEffect(() => {
// //     const fetchEmployee = async () => {
// //       if (!employeeId) return;

// //       try {
// //         const response = await fetch(`http://localhost/EMS-backend/api/employee/get_one.php?emp_id=${employeeId}`);
// //         const data = await response.json();

// //         if (data && data.emp_id) {
// //           setEmployeeData(data);
// //         }
// //       } catch (error) {
// //         console.error("Error fetching employee:", error);
// //       }
// //     };

// //     fetchEmployee();
// //   }, [employeeId]);

// //   // Keep leave dropdown open if path matches
// //   useEffect(() => {
// //     if (location.pathname.includes('employeeleavemanage') || location.pathname.includes('leave-status')) {
// //       setActiveDropdown('leave');
// //     }
// //   }, [location.pathname]);

// //   const isActive = (path) => location.pathname === `/mainlayout/${path}`;
// //   const handleMenuClick = (path) => navigate(`/mainlayout/${path}`);
// //   const toggleDropdown = (name) => setActiveDropdown(activeDropdown === name ? '' : name);

// //   return (
// //     <div className="scrollbar-thin-yellow w-[260px] bg-[#101c3d] text-white h-screen fixed left-0 top-0 shadow-md z-50 flex flex-col overflow-y-auto scrollbar-thin scrollbar-thumb-yellow-400 scrollbar-track-transparent">
// //       {/* Logo */}
// //       <div className="flex items-center px-4 pt-6 pb-4">
// //         <img src={logo} alt="Logo" className="w-12 h-12 mr-3" />
// //         <span className="text-[22px] font-bold tracking-wide">PCS TECH</span>
// //       </div>

// //       {/* Profile */}
// //       <div className="flex flex-col items-center mb-6">
// //         <img
// //           src={employeeData?.photo ? `http://localhost/EMS-backend/uploads/${employeeData.photo}` : "https://i.pravatar.cc/60"}
// //           alt="Profile"
// //           className="w-[60px] h-[60px] rounded-full border-4 border-yellow-400"
// //         />
// //         <div className="mt-2 font-semibold">
// //           {employeeData ? `${employeeData.first_name} ${employeeData.last_name}` : "Loading..."}
// //         </div>
// //         <div className="text-sm text-yellow-400">{employeeData?.designation || "Employee"}</div>
// //       </div>

// //       {/* Menu Items */}
// //       <div className="px-2 space-y-1">

// //         {/* Dashboard */}
// //         <div
// //           className={`flex items-center px-4 py-3 rounded-tr-3xl rounded-bl-3xl cursor-pointer font-medium text-[16px] ${
// //             location.pathname.includes('/employeedashboard') ? 'bg-white text-[#101c3d]' : 'hover:bg-white hover:text-[#101c3d]'
// //           }`}
// //           onClick={() => navigate(`/mainlayout/employeedashboard`)}
// //         >
// //           <FaTachometerAlt className="mr-4 text-[20px]" />
// //           Employee Dashboard
// //         </div>

// //         {/* Attendance */}
// //         <div
// //           className={`flex items-center px-4 py-3 rounded-lg cursor-pointer font-medium text-[16px] ${
// //             isActive('employeeattendance') ? 'bg-yellow-400 text-[#101c3d]' : 'hover:bg-yellow-100 hover:text-[#101c3d]'
// //           }`}
// //           onClick={() => handleMenuClick('employeeattendance')}
// //         >
// //           <FaUserCircle className="mr-4 text-[20px]" />
// //           Attendance
// //         </div>

// //         {/* Leave Management Dropdown */}
// //         <div>
// //           <div
// //             className={`flex items-center justify-between px-4 py-3 rounded-lg cursor-pointer font-medium text-[16px] ${
// //               activeDropdown === 'leave' ? 'bg-yellow-400 text-[#101c3d]' : 'hover:bg-yellow-100 hover:text-[#101c3d]'
// //             }`}
// //             onClick={() => toggleDropdown('leave')}
// //           >
// //             <div className="flex items-center">
// //               <FaCalendarCheck className="mr-4 text-[20px]" />
// //               Leave Management
// //             </div>
// //             {activeDropdown === 'leave' ? <FaChevronUp /> : <FaChevronDown />}
// //           </div>

// //           {activeDropdown === 'leave' && (
// //             <div className="ml-10 mt-1 space-y-1">
// //               <div
// //                 onClick={() => handleMenuClick('employeeleavemanage')}
// //                 className={`cursor-pointer px-2 py-2 rounded-md text-sm ${
// //                   isActive('employeeleavemanage') ? 'text-yellow-300 font-semibold' : 'hover:text-yellow-300'
// //                 }`}
// //               >
// //                 Apply Leave
// //               </div>
// //               <div
// //                 onClick={() => handleMenuClick('leavestatus')}
// //                 className={`cursor-pointer px-2 py-2 rounded-md text-sm ${
// //                   isActive('leavestatus') ? 'text-yellow-300 font-semibold' : 'hover:text-yellow-300'
// //                 }`}
// //               >
// //                 Leave Status
// //               </div>
// //             </div>
// //           )}
// //         </div>

// //         {/* Payslip */}
// //         <div
// //           className={`flex items-center px-4 py-3 rounded-lg cursor-pointer font-medium text-[16px] ${
// //             isActive('employeepayslip') ? 'bg-yellow-400 text-[#101c3d]' : 'hover:bg-yellow-100 hover:text-[#101c3d]'
// //           }`}
// //           onClick={() => handleMenuClick('employeepayslip')}
// //         >
// //           <FaMoneyBillWave className="mr-4 text-[20px]" />
// //           Payslip
// //         </div>

// //         {/* Profile */}
// //         <div
// //           className={`flex items-center px-4 py-3 rounded-lg cursor-pointer font-medium text-[16px] ${
// //             isActive('employeeprofile') ? 'bg-yellow-400 text-[#101c3d]' : 'hover:bg-yellow-100 hover:text-[#101c3d]'
// //           }`}
// //           onClick={() => handleMenuClick('employeeprofile')}
// //         >
// //           <FaUserCircle className="mr-4 text-[20px]" />
// //           Profile
// //         </div>

// //         {/* Logout */}
// //         <div className="pt-6">
// //           <button 
// //             className="bg-red-600 w-full text-white py-3 rounded-lg font-bold text-base flex items-center justify-center hover:bg-red-700"
// //             onClick={() => {
// //               sessionStorage.clear();
// //               navigate('/');
// //             }}
// //           >
// //             <FaSignOutAlt className="mr-2" />
// //             Log Out
// //           </button>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }

// import React, { useState, useEffect } from 'react';
// import {
//   FaTachometerAlt, FaCalendarCheck, FaMoneyBillWave,
//   FaUserCircle, FaChevronDown, FaChevronUp, FaSignOutAlt
// } from 'react-icons/fa';
// import { useNavigate, useLocation } from 'react-router-dom';
// import logo from '../assets/logo.553589f656b9eb7282fc.png';

// export default function EmployeeSidebar() {
//   const navigate = useNavigate();
//   const location = useLocation();
//   const [activeDropdown, setActiveDropdown] = useState('');
//   const [employeeData, setEmployeeData] = useState(null);

//   const employee = JSON.parse(sessionStorage.getItem('user'));
//   const employeeId = employee?.emp_id || employee?.id;

//   // ✅ Fetch employee details from API
//   useEffect(() => {
//     const fetchEmployee = async () => {
//       if (!employeeId) return;

//       try {
//         const response = await fetch(`http://localhost/EMS-backend/api/employee/get_one.php?emp_id=${employeeId}`);
//         const data = await response.json();

//         if (data && data.emp_id) {
//           setEmployeeData(data);
//         }
//       } catch (error) {
//         console.error("Error fetching employee:", error);
//       }
//     };

//     fetchEmployee();
//   }, [employeeId]);

//   // Keep leave dropdown open if path matches
//   useEffect(() => {
//     if (location.pathname.includes('employeeleavemanage') || location.pathname.includes('leave-status')) {
//       setActiveDropdown('leave');
//     }
//   }, [location.pathname]);

//   const isActive = (path) => location.pathname === `/mainlayout/${path}`;
//   const handleMenuClick = (path) => navigate(`/mainlayout/${path}`);
//   const toggleDropdown = (name) => setActiveDropdown(activeDropdown === name ? '' : name);

//   return (
//     <div className="w-[270px] bg-white h-screen fixed left-0 top-0 shadow-xl z-50 flex flex-col overflow-y-auto border-r border-gray-200">
      
//       {/* Header Section */}
//       <div className="bg-gradient-to-br from-[#101c3d] via-[#1a2a54] to-[#0f1838] pt-8 pb-12 px-6 relative overflow-hidden">
//         {/* Background decorations */}
//         <div className="absolute top-0 right-0 w-32 h-32 bg-white opacity-5 rounded-full transform translate-x-8 -translate-y-8"></div>
//         <div className="absolute bottom-8 left-0 w-20 h-20 bg-white opacity-5 rounded-full transform -translate-x-4"></div>
        
//         {/* Curved bottom with shadow */}
//         <div className="absolute bottom-0 left-0 w-full h-8 bg-white rounded-t-[40px] shadow-inner"></div>
        
//         {/* Logo Section */}
//         <div className="flex items-center mb-8 relative z-10">
//           <div className="relative">
//             <div className="w-14 h-14 bg-gradient-to-br from-white to-gray-100 rounded-2xl flex items-center justify-center shadow-2xl border border-white border-opacity-20">
//               <img src={logo} alt="Logo" className="w-10 h-10 drop-shadow-lg" />
//             </div>
//             {/* Logo glow effect */}
//             <div className="absolute inset-0 bg-white opacity-20 rounded-2xl blur-xl scale-110"></div>
//           </div>
//           <div className="ml-4">
//             <span className="text-white text-2xl font-black tracking-wider drop-shadow-lg">PCS TECH</span>
//             <div className="text-white text-xs opacity-75 font-medium tracking-wide">Employee Management</div>
//           </div>
//         </div>

//         {/* Enhanced Profile Section */}
//         <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-4 border border-white border-opacity-20 shadow-xl relative z-10">
//           <div className="flex items-center">
//             <div className="relative">
//               {/* Profile image with enhanced styling */}
//               <div className="w-16 h-16 rounded-2xl overflow-hidden border-3 border-white shadow-2xl relative">
//                 <img
//                   src={employeeData?.photo ? `http://localhost/EMS-backend/uploads/${employeeData.photo}` : "https://i.pravatar.cc/80"}
//                   alt="Profile"
//                   className="w-full h-full object-cover"
//                 />
//                 {/* Online status with pulse effect */}
//                 <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-green-400 rounded-full border-3 border-white shadow-lg">
//                   <div className="absolute inset-0 bg-green-400 rounded-full animate-ping opacity-75"></div>
//                 </div>
//               </div>
              
//               {/* Profile glow */}
//               <div className="absolute inset-0 bg-white opacity-20 rounded-2xl blur-lg scale-125 -z-10"></div>
//             </div>
            
//             <div className="ml-4 flex-1">
//               <div className="text-white font-bold text-lg leading-tight drop-shadow-md">
//                 {employeeData ? `${employeeData.first_name} ${employeeData.last_name}` : "Loading..."}
//               </div>
//               <div className="text-white text-sm opacity-90 font-medium">
//                 {employeeData?.designation || "Employee"}
//               </div>
//               <div className="flex items-center mt-1">
//                 <div className="w-2 h-2 bg-green-400 rounded-full mr-2"></div>
//                 <span className="text-white text-xs opacity-75">Active Now</span>
//               </div>
//             </div>
            
//             {/* Welcome badge */}
//             <div className="bg-white bg-opacity-20 px-3 py-1 rounded-full">
//               <span className="text-white text-xs font-semibold">Welcome</span>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Menu Section */}
//       <div className="flex-1 px-4 pt-6">
        
//         {/* Dashboard */}
//         <div className="mb-2">
//           <div
//             className={`group flex items-center px-4 py-3 rounded-2xl cursor-pointer transition-all duration-300 ${
//               location.pathname.includes('/employeedashboard') 
//                 ? 'bg-[#101c3d] text-white shadow-lg relative overflow-hidden' 
//                 : 'text-[#101c3d] hover:bg-gray-50'
//             }`}
//             onClick={() => navigate(`/mainlayout/employeedashboard`)}
//           >
//             {/* Active indicator curve */}
//             {location.pathname.includes('/employeedashboard') && (
//               <div className="absolute right-0 top-0 w-8 h-full bg-white rounded-l-full opacity-10"></div>
//             )}
            
//             <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all ${
//               location.pathname.includes('/employeedashboard') 
//                 ? 'bg-white bg-opacity-20' 
//                 : 'bg-[#101c3d] bg-opacity-10 group-hover:bg-opacity-15'
//             }`}>
//               <FaTachometerAlt className="text-lg" />
//             </div>
//             <span className="ml-3 font-medium">Dashboard</span>
//           </div>
//         </div>

//         {/* Attendance */}
//         <div className="mb-2">
//           <div
//             className={`group flex items-center px-4 py-3 rounded-2xl cursor-pointer transition-all duration-300 ${
//               isActive('employeeattendance') 
//                 ? 'bg-[#101c3d] text-white shadow-lg relative overflow-hidden' 
//                 : 'text-[#101c3d] hover:bg-gray-50'
//             }`}
//             onClick={() => handleMenuClick('employeeattendance')}
//           >
//             {/* Active indicator curve */}
//             {isActive('employeeattendance') && (
//               <div className="absolute right-0 top-0 w-8 h-full bg-white rounded-l-full opacity-10"></div>
//             )}
            
//             <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all ${
//               isActive('employeeattendance') 
//                 ? 'bg-white bg-opacity-20' 
//                 : 'bg-[#101c3d] bg-opacity-10 group-hover:bg-opacity-15'
//             }`}>
//               <FaUserCircle className="text-lg" />
//             </div>
//             <span className="ml-3 font-medium">Attendance</span>
//           </div>
//         </div>

//         {/* Leave Management */}
//         <div className="mb-2">
//           <div
//             className={`group flex items-center justify-between px-4 py-3 rounded-2xl cursor-pointer transition-all duration-300 ${
//               activeDropdown === 'leave' 
//                 ? 'bg-[#101c3d] text-white shadow-lg relative overflow-hidden' 
//                 : 'text-[#101c3d] hover:bg-gray-50'
//             }`}
//             onClick={() => toggleDropdown('leave')}
//           >
//             {/* Active indicator curve */}
//             {activeDropdown === 'leave' && (
//               <div className="absolute right-0 top-0 w-8 h-full bg-white rounded-l-full opacity-10"></div>
//             )}
            
//             <div className="flex items-center">
//               <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all ${
//                 activeDropdown === 'leave' 
//                   ? 'bg-white bg-opacity-20' 
//                   : 'bg-[#101c3d] bg-opacity-10 group-hover:bg-opacity-15'
//               }`}>
//                 <FaCalendarCheck className="text-lg" />
//               </div>
//               <span className="ml-3 font-medium">Leave Management</span>
//             </div>
            
//             <div className={`transition-transform duration-300 ${activeDropdown === 'leave' ? 'rotate-180' : ''}`}>
//               <FaChevronDown className="text-sm" />
//             </div>
//           </div>

//           {/* Dropdown Items */}
//           <div className={`overflow-hidden transition-all duration-300 ${
//             activeDropdown === 'leave' ? 'max-h-32 opacity-100 mt-2' : 'max-h-0 opacity-0'
//           }`}>
//             <div className="bg-gray-50 rounded-2xl p-2 space-y-1">
//               <div
//                 onClick={() => handleMenuClick('employeeleavemanage')}
//                 className={`flex items-center px-4 py-2 rounded-xl cursor-pointer transition-all duration-200 ${
//                   isActive('employeeleavemanage') 
//                     ? 'bg-[#101c3d] text-white shadow-md' 
//                     : 'text-[#101c3d] hover:bg-white hover:shadow-sm'
//                 }`}
//               >
//                 <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
//                 <span className="text-sm font-medium">Apply Leave</span>
//               </div>
//               <div
//                 onClick={() => handleMenuClick('leavestatus')}
//                 className={`flex items-center px-4 py-2 rounded-xl cursor-pointer transition-all duration-200 ${
//                   isActive('leavestatus') 
//                     ? 'bg-[#101c3d] text-white shadow-md' 
//                     : 'text-[#101c3d] hover:bg-white hover:shadow-sm'
//                 }`}
//               >
//                 <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
//                 <span className="text-sm font-medium">Leave Status</span>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Payslip */}
//         <div className="mb-2">
//           <div
//             className={`group flex items-center px-4 py-3 rounded-2xl cursor-pointer transition-all duration-300 ${
//               isActive('employeepayslip') 
//                 ? 'bg-[#101c3d] text-white shadow-lg relative overflow-hidden' 
//                 : 'text-[#101c3d] hover:bg-gray-50'
//             }`}
//             onClick={() => handleMenuClick('employeepayslip')}
//           >
//             {/* Active indicator curve */}
//             {isActive('employeepayslip') && (
//               <div className="absolute right-0 top-0 w-8 h-full bg-white rounded-l-full opacity-10"></div>
//             )}
            
//             <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all ${
//               isActive('employeepayslip') 
//                 ? 'bg-white bg-opacity-20' 
//                 : 'bg-[#101c3d] bg-opacity-10 group-hover:bg-opacity-15'
//             }`}>
//               <FaMoneyBillWave className="text-lg" />
//             </div>
//             <span className="ml-3 font-medium">Payslip</span>
//           </div>
//         </div>

//         {/* Profile */}
//         <div className="mb-6">
//           <div
//             className={`group flex items-center px-4 py-3 rounded-2xl cursor-pointer transition-all duration-300 ${
//               isActive('employeeprofile') 
//                 ? 'bg-[#101c3d] text-white shadow-lg relative overflow-hidden' 
//                 : 'text-[#101c3d] hover:bg-gray-50'
//             }`}
//             onClick={() => handleMenuClick('employeeprofile')}
//           >
//             {/* Active indicator curve */}
//             {isActive('employeeprofile') && (
//               <div className="absolute right-0 top-0 w-8 h-full bg-white rounded-l-full opacity-10"></div>
//             )}
            
//             <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all ${
//               isActive('employeeprofile') 
//                 ? 'bg-white bg-opacity-20' 
//                 : 'bg-[#101c3d] bg-opacity-10 group-hover:bg-opacity-15'
//             }`}>
//               <FaUserCircle className="text-lg" />
//             </div>
//             <span className="ml-3 font-medium">Profile</span>
//           </div>
//         </div>

//       </div>

//       {/* Logout Button */}
//       <div className="p-4 border-t border-gray-100">
//         <button 
//           className="w-full bg-gradient-to-r from-red-500 to-red-600 text-white py-3 px-4 rounded-2xl font-semibold flex items-center justify-center hover:from-red-600 hover:to-red-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-[1.02]"
//           onClick={() => {
//             sessionStorage.clear();
//             navigate('/');
//           }}
//         >
//           <div className="w-8 h-8 bg-white bg-opacity-20 rounded-lg flex items-center justify-center mr-3">
//             <FaSignOutAlt className="text-sm" />
//           </div>
//           Log Out
//         </button>
//       </div>
//     </div>
//   );
// }
import React, { useState, useEffect } from 'react';
import {
  FaTachometerAlt, FaCalendarCheck, FaMoneyBillWave,
  FaUserCircle, FaChevronDown, FaSignOutAlt, FaUserCog
} from 'react-icons/fa';
import { useNavigate, useLocation } from 'react-router-dom';
import logo from '../assets/logo.553589f656b9eb7282fc.png';
import API from '../../../utils/api';

export default function EmployeeSidebar() {
  const navigate = useNavigate();
  const location = useLocation();
  const [activeDropdown, setActiveDropdown] = useState('');
  const [employeeData, setEmployeeData] = useState(null);

  const employee = JSON.parse(sessionStorage.getItem('user'));
  const employeeId = employee?.emp_id || employee?.id;

  // ✅ Fetch employee details from API
useEffect(() => {
  const fetchEmployee = async () => {
    if (!employeeId) return;

    try {
      const res = await API.get(`api/employee/get_one.php?emp_id=${employeeId}`);
      const data = res.data;

      if (data && data.emp_id) {
        setEmployeeData(data);
      }
    } catch (error) {
      console.error("Error fetching employee:", error);
    }
  };

  fetchEmployee();
}, [employeeId]);

  // Keep leave dropdown open if path matches
  useEffect(() => {
    if (location.pathname.includes('employeeleavemanage') || location.pathname.includes('leavestatus')) {
      setActiveDropdown('leave');
    }
  }, [location.pathname]);

  const isActive = (path) => location.pathname === `/mainlayout/${path}`;
  const handleMenuClick = (path) => navigate(`/mainlayout/${path}`);
  const toggleDropdown = (name) => setActiveDropdown(activeDropdown === name ? '' : name);

  return (
    <div className="w-[270px] bg-white h-screen fixed left-0 top-0 shadow-xl z-50 flex flex-col border-r border-gray-200">
      
      {/* Enhanced Header Section - This will stay fixed */}
      <div className="bg-gradient-to-br from-[#101c3d] via-[#1a2a54] to-[#0f1838] pt-8 pb-6 px-6 relative overflow-hidden">
        {/* Background decorations */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-white opacity-5 rounded-full transform translate-x-8 -translate-y-8"></div>
        <div className="absolute bottom-8 left-0 w-20 h-20 bg-white opacity-5 rounded-full transform -translate-x-4"></div>
        
        {/* Curved bottom with shadow */}
        <div className="absolute bottom-0 left-0 w-full h-8 bg-white rounded-t-[40px] shadow-inner"></div>
        
        {/* Logo Section */}
        <div className="flex items-center mb-8 relative z-10">
          <div className="relative">
            <div className="w-14 h-14 bg-gradient-to-br from-white to-gray-100 rounded-2xl flex items-center justify-center shadow-2xl border border-white border-opacity-20">
              <img src={logo} alt="Logo" className="w-10 h-10 drop-shadow-lg" />
            </div>
            {/* Logo glow effect */}
            <div className="absolute inset-0 bg-white opacity-20 rounded-2xl blur-xl scale-110"></div>
          </div>
          <div className="ml-4">
            <span className="text-white text-2xl font-black tracking-wider drop-shadow-lg">PCS TECH</span>
            <div className="text-white text-xs opacity-75 font-medium tracking-wide">Employee Panel</div>
          </div>
        </div>
      </div>

      {/* Menu Section - This is now the scrollable part */}
      <div className="scrollbar-thin-yellow flex-1 px-4 pt-6 overflow-y-auto">
        
        {/* Dashboard */}
        <div className="mb-2">
          <div
            className={`group flex items-center px-4 py-3 rounded-2xl cursor-pointer transition-all duration-300 ${
              location.pathname.includes('/employeedashboard') 
                ? 'bg-[#101c3d] text-white shadow-lg relative overflow-hidden' 
                : 'text-[#101c3d] hover:bg-gray-50'
            }`}
            onClick={() => navigate(`/mainlayout/employeedashboard`)}
          >
            {/* Active indicator curve */}
            {location.pathname.includes('/employeedashboard') && (
              <div className="absolute right-0 top-0 w-8 h-full bg-white rounded-l-full opacity-10"></div>
            )}
            
            <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all ${
              location.pathname.includes('/employeedashboard') 
                ? 'bg-white bg-opacity-20' 
                : 'bg-[#101c3d] bg-opacity-10 group-hover:bg-opacity-15'
            }`}>
              <FaTachometerAlt className="text-lg" />
            </div>
            <span className="ml-3 font-medium">Dashboard</span>
          </div>
        </div>

        {/* Attendance */}
        <div className="mb-2">
          <div
            className={`group flex items-center px-4 py-3 rounded-2xl cursor-pointer transition-all duration-300 ${
              isActive('employeeattendance') 
                ? 'bg-[#101c3d] text-white shadow-lg relative overflow-hidden' 
                : 'text-[#101c3d] hover:bg-gray-50'
            }`}
            onClick={() => handleMenuClick('employeeattendance')}
          >
            {/* Active indicator curve */}
            {isActive('employeeattendance') && (
              <div className="absolute right-0 top-0 w-8 h-full bg-white rounded-l-full opacity-10"></div>
            )}
            
            <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all ${
              isActive('employeeattendance') 
                ? 'bg-white bg-opacity-20' 
                : 'bg-[#101c3d] bg-opacity-10 group-hover:bg-opacity-15'
            }`}>
              <FaUserCircle className="text-lg" />
            </div>
            <span className="ml-3 font-medium">Attendance</span>
          </div>
        </div>

        {/* Leave Management */}
        <div className="mb-2">
          <div
            className={`group flex items-center justify-between px-4 py-3 rounded-2xl cursor-pointer transition-all duration-300 ${
              activeDropdown === 'leave' 
                ? 'bg-[#101c3d] text-white shadow-lg relative overflow-hidden' 
                : 'text-[#101c3d] hover:bg-gray-50'
            }`}
            onClick={() => toggleDropdown('leave')}
          >
            {/* Active indicator curve */}
            {activeDropdown === 'leave' && (
              <div className="absolute right-0 top-0 w-8 h-full bg-white rounded-l-full opacity-10"></div>
            )}
            
            <div className="flex items-center">
              <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all ${
                activeDropdown === 'leave' 
                  ? 'bg-white bg-opacity-20' 
                  : 'bg-[#101c3d] bg-opacity-10 group-hover:bg-opacity-15'
              }`}>
                <FaCalendarCheck className="text-lg" />
              </div>
              <span className="ml-3 font-medium">Leave Management</span>
            </div>
            
            <div className={`transition-transform duration-300 ${activeDropdown === 'leave' ? 'rotate-180' : ''}`}>
              <FaChevronDown className="text-sm" />
            </div>
          </div>

          {/* Dropdown Items */}
          <div className={`overflow-hidden transition-all duration-300 ${
            activeDropdown === 'leave' ? 'max-h-32 opacity-100 mt-2' : 'max-h-0 opacity-0'
          }`}>
            <div className="bg-gray-50 rounded-2xl p-2 space-y-1">
              <div
                onClick={() => handleMenuClick('employeeleavemanage')}
                className={`flex items-center px-4 py-2 rounded-xl cursor-pointer transition-all duration-200 ${
                  isActive('employeeleavemanage') 
                    ? 'bg-[#101c3d] text-white shadow-md' 
                    : 'text-[#101c3d] hover:bg-white hover:shadow-sm'
                }`}
              >
                <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                <span className="text-sm font-medium">Apply Leave</span>
              </div>
              <div
                onClick={() => handleMenuClick('leavestatus')}
                className={`flex items-center px-4 py-2 rounded-xl cursor-pointer transition-all duration-200 ${
                  isActive('leavestatus') 
                    ? 'bg-[#101c3d] text-white shadow-md' 
                    : 'text-[#101c3d] hover:bg-white hover:shadow-sm'
                }`}
              >
                <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
                <span className="text-sm font-medium">Leave Status</span>
              </div>
            </div>
          </div>
        </div>

        {/* Payslip */}
        <div className="mb-2">
          <div
            className={`group flex items-center px-4 py-3 rounded-2xl cursor-pointer transition-all duration-300 ${
              isActive('employeepayslip') 
                ? 'bg-[#101c3d] text-white shadow-lg relative overflow-hidden' 
                : 'text-[#101c3d] hover:bg-gray-50'
            }`}
            onClick={() => handleMenuClick('employeepayslip')}
          >
            {/* Active indicator curve */}
            {isActive('employeepayslip') && (
              <div className="absolute right-0 top-0 w-8 h-full bg-white rounded-l-full opacity-10"></div>
            )}
            
            <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all ${
              isActive('employeepayslip') 
                ? 'bg-white bg-opacity-20' 
                : 'bg-[#101c3d] bg-opacity-10 group-hover:bg-opacity-15'
            }`}>
              <FaMoneyBillWave className="text-lg" />
            </div>
            <span className="ml-3 font-medium">Payslip</span>
          </div>
        </div>

        {/* Profile */}
        <div className="mb-6">
          <div
            className={`group flex items-center px-4 py-3 rounded-2xl cursor-pointer transition-all duration-300 ${
              isActive('employeeprofile') 
                ? 'bg-[#101c3d] text-white shadow-lg relative overflow-hidden' 
                : 'text-[#101c3d] hover:bg-gray-50'
            }`}
            onClick={() => handleMenuClick('employeeprofile')}
          >
            {/* Active indicator curve */}
            {isActive('employeeprofile') && (
              <div className="absolute right-0 top-0 w-8 h-full bg-white rounded-l-full opacity-10"></div>
            )}
            
            <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all ${
              isActive('employeeprofile') 
                ? 'bg-white bg-opacity-20' 
                : 'bg-[#101c3d] bg-opacity-10 group-hover:bg-opacity-15'
            }`}>
              <FaUserCog className="text-lg" />
            </div>
            <span className="ml-3 font-medium">Profile</span>
          </div>
        </div>

           <div className="mb-6">
                    <div
                      className={`group flex items-center px-4 py-3 rounded-2xl cursor-pointer transition-all duration-300 ${
                        isActive('holidaycalendar') 
                          ? 'bg-[#101c3d] text-white shadow-lg relative overflow-hidden' 
                          : 'text-[#101c3d] hover:bg-gray-50'
                      }`}
                      onClick={() => handleMenuClick('holidaycalendar')}
                    >
                      {/* Active indicator curve */}
                      {isActive('holidaycalendar') && (
                        <div className="absolute right-0 top-0 w-8 h-full bg-white rounded-l-full opacity-10"></div>
                      )}
                      
                      <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all ${
                        isActive('holidaycalendar') 
                          ? 'bg-white bg-opacity-20' 
                          : 'bg-[#101c3d] bg-opacity-10 group-hover:bg-opacity-15'
                      }`}>
                        <FaCalendarCheck className="text-lg" />
                      </div>
                      <span className="ml-3 font-medium">Calendar</span>
                    </div>
                  </div>

                    <div className="mb-6">
                            <div
                              className={`group flex items-center px-4 py-3 rounded-2xl cursor-pointer transition-all duration-300 ${
                                isActive('task-management') 
                                  ? 'bg-[#101c3d] text-white shadow-lg relative overflow-hidden' 
                                  : 'text-[#101c3d] hover:bg-gray-50'
                              }`}
                              onClick={() => handleMenuClick('task-management')}
                            >
                              {/* Active indicator curve */}
                              {isActive('task-management') && (
                                <div className="absolute right-0 top-0 w-8 h-full bg-white rounded-l-full opacity-10"></div>
                              )}
                              
                              <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all ${
                                isActive('task-management') 
                                  ? 'bg-white bg-opacity-20' 
                                  : 'bg-[#101c3d] bg-opacity-10 group-hover:bg-opacity-15'
                              }`}>
                                {/* <Fa className="text-lg" /> */}
                              </div>
                              <span className="ml-3 font-medium">Task Management</span>
                            </div>
                          </div>

        {/* Enhanced Profile Section */}
        {/* <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-4 border border-gray-100 shadow-xl relative z-10">
          <div className="flex items-center">
            <div className="relative">
              <div className="w-16 h-16 rounded-2xl overflow-hidden border-3 border-white shadow-2xl relative">
                <img
                  src={employeeData?.photo ? `http://localhost/EMS-backend/uploads/${employeeData.photo}` : "https://i.pravatar.cc/80"}
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
                <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-green-400 rounded-full border-3 border-white shadow-lg">
                  <div className="absolute inset-0 bg-green-400 rounded-full animate-ping opacity-75"></div>
                </div>
              </div>
              
              
              <div className="absolute inset-0 bg-white opacity-20 rounded-2xl blur-lg scale-125 -z-10"></div>
            </div>
            
            <div className="ml-4 flex-1">
              <div className="text-gray-900 font-bold text-lg leading-tight drop-shadow-md">
                {employeeData ? `${employeeData.first_name} ${employeeData.last_name}` : "Loading..."}
              </div>
              <div className="text-gray-600 text-sm opacity-90 font-medium">
                {employeeData?.designation || "Employee"}
              </div>
              <div className="flex items-center mt-1">
                <div className="w-2 h-2 bg-green-400 rounded-full mr-2"></div>
                <span className="text-gray-500 text-xs opacity-75">Active Now</span>
              </div>
            </div>
            
           
            <div className="bg-gray-100 px-3 py-1 rounded-full">
              <span className="text-gray-600 text-xs font-semibold">Welcome</span>
            </div>
          </div>
        </div> */}
      </div>

      {/* Enhanced Logout Button */}
      <div className="p-4 border-t border-gray-100">
        <button 
          className="w-full bg-gradient-to-r from-red-500 to-red-600 text-white py-3 px-4 rounded-2xl font-semibold flex items-center justify-center hover:from-red-600 hover:to-red-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-[1.02]"
          onClick={() => {
            sessionStorage.clear();
            navigate('/');
          }}
        >
          <div className="w-8 h-8 bg-white bg-opacity-20 rounded-lg flex items-center justify-center mr-3">
            <FaSignOutAlt className="text-sm" />
          </div>
          Log Out
        </button>
      </div>
    </div>
  );
}