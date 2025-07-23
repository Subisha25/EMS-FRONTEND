// // // import React, { useState } from 'react';
// // // import {
// // //   FaTachometerAlt, FaUserCog, FaMoneyBillWave,
// // //   FaSignOutAlt, FaChevronDown, FaChevronUp, FaCalendarCheck
// // // } from 'react-icons/fa';

// // // import logo from '../assets/logo.553589f656b9eb7282fc.png';

// // // export default function Sidebar({ activeMenu, setActiveMenu }) {
// // //   const [activeDropdown, setActiveDropdown] = useState('');

// // //   const toggleDropdown = (name) => {
// // //     setActiveDropdown(prev => prev === name ? '' : name);
// // //   };

// // //   const isActive = (menuName) => activeMenu === menuName;

// // //   return (
// // //     <div className="w-[260px] bg-[#101c3d] text-white h-screen fixed left-0 top-0 shadow-md z-50 flex flex-col">

// // //       <div className="overflow-y-auto scrollbar-hide flex-grow">
// // //         {/* Logo */}
// // //         <div className="flex items-center px-4 pt-6 pb-4">
// // //           <img src={logo} alt="Logo" className="w-12 h-12 mr-3" />
// // //           <span className="text-[22px] font-bold tracking-wide">PCS TECH</span>
// // //         </div>

// // //         {/* Profile */}
// // //         <div className="flex flex-col items-center mb-6">
// // //           <img
// // //             src="https://i.pravatar.cc/60?img=3"
// // //             alt="Profile"
// // //             className="w-[60px] h-[60px] rounded-full border-4 border-yellow-400"
// // //           />
// // //           <div className="mt-2 font-semibold">PCS</div>
// // //           <div className="text-sm text-yellow-400">Admin</div>
// // //         </div>

// // //         {/* Menu Items */}
// // //         <div className="px-2 pb-4 space-y-1">

// // //           {/* Dashboard */}
// // //           <div
// // //             className={`flex items-center px-4 py-3 rounded-lg cursor-pointer font-medium text-[16px]
// // //               ${isActive('Dashboard') ? 'bg-yellow-400 text-[#101c3d]' : 'hover:bg-yellow-400 hover:text-[#101c3d]'}`}
// // //             onClick={() => setActiveMenu('Dashboard')}
// // //           >
// // //             <FaTachometerAlt className="mr-4 text-[20px]" />
// // //             Dashboard
// // //           </div>

// // //             {/* Dashboard */}
// // //           <div
// // //             className={`flex items-center px-4 py-3 rounded-lg cursor-pointer font-medium text-[16px]
// // //               ${isActive('adminprofile') ? 'bg-yellow-400 text-[#101c3d]' : 'hover:bg-yellow-400 hover:text-[#101c3d]'}`}
// // //             onClick={() => setActiveMenu('adminprofile')}
// // //           >
// // //             <FaTachometerAlt className="mr-4 text-[20px]" />
// // //             Admin Profile
// // //           </div>

// // //           {/* Employee Management */}
// // //           <div>
// // //             <div
// // //               className={`flex items-center justify-between px-4 py-3 rounded-lg cursor-pointer font-medium text-[16px]
// // //                 ${activeDropdown === 'employee' ? 'bg-yellow-400 text-[#101c3d]' : 'hover:bg-yellow-400 hover:text-[#101c3d]'}`}
// // //               onClick={() => toggleDropdown('employee')}
// // //             >
// // //               <div className="flex items-center">
// // //                 <FaUserCog className="mr-4 text-[20px]" />
// // //                 Employee Management
// // //               </div>
// // //               {activeDropdown === 'employee' ? <FaChevronUp /> : <FaChevronDown />}
// // //             </div>
// // //             {activeDropdown === 'employee' && (
// // //               <div className="ml-10 mt-1 space-y-1">
// // //                 <div onClick={() => setActiveMenu('AddEmployee')} className={`cursor-pointer px-2 py-1 rounded-md text-sm ${isActive('AddEmployee') ? 'bg-yellow-300 text-black font-medium' : 'hover:text-yellow-300'}`}>
// // //                   Add Employee
// // //                 </div>
// // //                 <div onClick={() => setActiveMenu('ManageEmployee')} className={`cursor-pointer px-2 py-1 rounded-md text-sm ${isActive('ManageEmployee') ? 'bg-yellow-300 text-black font-medium' : 'hover:text-yellow-300'}`}>
// // //                   Manage Employee
// // //                 </div>
// // //               </div>
// // //             )}
// // //           </div>

// // //           {/* Salary */}
// // //           <div>
// // //             <div
// // //               className={`flex items-center justify-between px-4 py-3 rounded-lg cursor-pointer font-medium text-[16px]
// // //                 ${activeDropdown === 'salary' ? 'bg-yellow-400 text-[#101c3d]' : 'hover:bg-yellow-400 hover:text-[#101c3d]'}`}
// // //               onClick={() => toggleDropdown('salary')}
// // //             >
// // //               <div className="flex items-center">
// // //                 <FaMoneyBillWave className="mr-4 text-[20px]" />
// // //                 Salary
// // //               </div>
// // //               {activeDropdown === 'salary' ? <FaChevronUp /> : <FaChevronDown />}
// // //             </div>
// // //             {activeDropdown === 'salary' && (
// // //               <div className="ml-10 mt-1 space-y-1">
// // //                 <div onClick={() => setActiveMenu('AddSalary')} className={`cursor-pointer px-2 py-1 rounded-md text-sm ${isActive('AddSalary') ? 'bg-yellow-300 text-black font-medium' : 'hover:text-yellow-300'}`}>
// // //                   Add Salary
// // //                 </div>
// // //                 <div onClick={() => setActiveMenu('ManageSalary')} className={`cursor-pointer px-2 py-1 rounded-md text-sm ${isActive('ManageSalary') ? 'bg-yellow-300 text-black font-medium' : 'hover:text-yellow-300'}`}>
// // //                   Manage Salary
// // //                 </div>
// // //               </div>
// // //             )}
// // //           </div>

// // //           {/* Leave Request */}
// // //           <div>
// // //             <div
// // //               className={`flex items-center justify-between px-4 py-3 rounded-lg cursor-pointer font-medium text-[16px]
// // //                 ${activeDropdown === 'leave' ? 'bg-yellow-400 text-[#101c3d]' : 'hover:bg-yellow-400 hover:text-[#101c3d]'}`}
// // //               onClick={() => toggleDropdown('leave')}
// // //             >
// // //               <div className="flex items-center">
// // //                 <FaCalendarCheck className="mr-4 text-[20px]" />
// // //                 Leave Request
// // //               </div>
// // //               {activeDropdown === 'leave' ? <FaChevronUp /> : <FaChevronDown />}
// // //             </div>
// // //             {activeDropdown === 'leave' && (
// // //               <div className="ml-10 mt-1 space-y-1">
// // //                 <div onClick={() => setActiveMenu('NewLeaveRequests')} className={`cursor-pointer px-2 py-1 rounded-md text-sm ${isActive('NewLeaveRequest') ? 'bg-yellow-300 text-black font-medium' : 'hover:text-yellow-300'}`}>
// // //                   New Request
// // //                 </div>
// // //                 <div onClick={() => setActiveMenu('AllLeaveDetails')} className={`cursor-pointer px-2 py-1 rounded-md text-sm ${isActive('AllLeaveRequests') ? 'bg-yellow-300 text-black font-medium' : 'hover:text-yellow-300'}`}>
// // //                   All Leave Details
// // //                 </div>
// // //               </div>
// // //             )}
// // //           </div>
// // //         </div>
// // //       </div>

// // //       {/* Logout */}
// // //       <div className="p-4">
// // //         <button className="bg-red-600 w-full text-white py-3 rounded-lg font-bold text-base flex items-center justify-center hover:bg-red-700">
// // //           <FaSignOutAlt className="mr-2" />
// // //           Log Out
// // //         </button>
// // //       </div>
// // //     </div>
// // //   );
// // // }


// // import React, { useState } from 'react';
// // import {
// //   FaTachometerAlt, FaUserCog, FaMoneyBillWave,
// //   FaSignOutAlt, FaChevronDown, FaChevronUp, FaCalendarCheck
// // } from 'react-icons/fa';
// // import { useNavigate, useLocation } from 'react-router-dom';

// // import logo from '../assets/logo.553589f656b9eb7282fc.png';

// // export default function Sidebar() {
// //   const [activeDropdown, setActiveDropdown] = useState('');
// //   const navigate = useNavigate();
// //   const location = useLocation();

// //   const toggleDropdown = (name) => {
// //     setActiveDropdown((prev) => (prev === name ? '' : name));
// //   };

// //   const isActive = (path) => location.pathname.includes(path);

// //   return (
// //     <div className="w-[260px] bg-[#101c3d] text-white h-screen fixed left-0 top-0 shadow-md z-50 flex flex-col">
// //       <div className="overflow-y-auto scrollbar-hide flex-grow">
// //         {/* Logo */}
// //         <div className="flex items-center px-4 pt-6 pb-4">
// //           <img src={logo} alt="Logo" className="w-12 h-12 mr-3" />
// //           <span className="text-[22px] font-bold tracking-wide">PCS TECH</span>
// //         </div>

// //         {/* Profile */}
// //         <div className="flex flex-col items-center mb-6">
// //           <img
// //             src="https://i.pravatar.cc/60?img=3"
// //             alt="Profile"
// //             className="w-[60px] h-[60px] rounded-full border-4 border-yellow-400"
// //           />
// //           <div className="mt-2 font-semibold">PCS</div>
// //           <div className="text-sm text-yellow-400">Admin</div>
// //         </div>

// //         {/* Menu Items */}
// //         <div className="px-2 pb-4 space-y-1">
// //           {/* Dashboard */}
// //           <div
// //             className={`flex items-center px-4 py-3 rounded-lg cursor-pointer font-medium text-[16px]
// //               ${isActive('dashboard') ? 'bg-yellow-400 text-[#101c3d]' : 'hover:bg-yellow-400 hover:text-[#101c3d]'}`}
// //             onClick={() => navigate('/mainlayout/dashboard')}
// //           >
// //             <FaTachometerAlt className="mr-4 text-[20px]" />
// //             Dashboard
// //           </div>

// //           {/* Admin Profile */}
// //           <div
// //             className={`flex items-center px-4 py-3 rounded-lg cursor-pointer font-medium text-[16px]
// //               ${isActive('admin-profile') ? 'bg-yellow-400 text-[#101c3d]' : 'hover:bg-yellow-400 hover:text-[#101c3d]'}`}
// //             onClick={() => navigate('/mainlayout/admin-profile')}
// //           >
// //             <FaTachometerAlt className="mr-4 text-[20px]" />
// //             Admin Profile
// //           </div>

// //           {/* Employee Management */}
// //           <div>
// //             <div
// //               className={`flex items-center justify-between px-4 py-3 rounded-lg cursor-pointer font-medium text-[16px]
// //                 ${activeDropdown === 'employee' ? 'bg-yellow-400 text-[#101c3d]' : 'hover:bg-yellow-400 hover:text-[#101c3d]'}`}
// //               onClick={() => toggleDropdown('employee')}
// //             >
// //               <div className="flex items-center">
// //                 <FaUserCog className="mr-4 text-[20px]" />
// //                 Employee Management
// //               </div>
// //               {activeDropdown === 'employee' ? <FaChevronUp /> : <FaChevronDown />}
// //             </div>
// //             {activeDropdown === 'employee' && (
// //               <div className="ml-10 mt-1 space-y-1">
// //                 <div
// //                   onClick={() => navigate('/mainlayout/add-employee')}
// //                   className={`cursor-pointer px-2 py-1 rounded-md text-sm ${
// //                     isActive('add-employee') ? 'bg-yellow-300 text-black font-medium' : 'hover:text-yellow-300'
// //                   }`}
// //                 >
// //                   Add Employee
// //                 </div>
// //                 <div
// //                   onClick={() => navigate('/mainlayout/manage-employee')}
// //                   className={`cursor-pointer px-2 py-1 rounded-md text-sm ${
// //                     isActive('manage-employee') ? 'bg-yellow-300 text-black font-medium' : 'hover:text-yellow-300'
// //                   }`}
// //                 >
// //                   Manage Employee
// //                 </div>
// //               </div>
// //             )}
// //           </div>

// //           {/* Salary */}
// //           <div>
// //             <div
// //               className={`flex items-center justify-between px-4 py-3 rounded-lg cursor-pointer font-medium text-[16px]
// //                 ${activeDropdown === 'salary' ? 'bg-yellow-400 text-[#101c3d]' : 'hover:bg-yellow-400 hover:text-[#101c3d]'}`}
// //               onClick={() => toggleDropdown('salary')}
// //             >
// //               <div className="flex items-center">
// //                 <FaMoneyBillWave className="mr-4 text-[20px]" />
// //                 Salary
// //               </div>
// //               {activeDropdown === 'salary' ? <FaChevronUp /> : <FaChevronDown />}
// //             </div>
// //             {activeDropdown === 'salary' && (
// //               <div className="ml-10 mt-1 space-y-1">
// //                 <div
// //                   onClick={() => navigate('/mainlayout/add-salary')}
// //                   className={`cursor-pointer px-2 py-1 rounded-md text-sm ${
// //                     isActive('add-salary') ? 'bg-yellow-300 text-black font-medium' : 'hover:text-yellow-300'
// //                   }`}
// //                 >
// //                   Add Salary
// //                 </div>
// //                 <div
// //                   onClick={() => navigate('/mainlayout/manage-salary')}
// //                   className={`cursor-pointer px-2 py-1 rounded-md text-sm ${
// //                     isActive('manage-salary') ? 'bg-yellow-300 text-black font-medium' : 'hover:text-yellow-300'
// //                   }`}
// //                 >
// //                   Manage Salary
// //                 </div>
// //               </div>
// //             )}
// //           </div>

// //           {/* Leave Request */}
// //           <div>
// //             <div
// //               className={`flex items-center justify-between px-4 py-3 rounded-lg cursor-pointer font-medium text-[16px]
// //                 ${activeDropdown === 'leave' ? 'bg-yellow-400 text-[#101c3d]' : 'hover:bg-yellow-400 hover:text-[#101c3d]'}`}
// //               onClick={() => toggleDropdown('leave')}
// //             >
// //               <div className="flex items-center">
// //                 <FaCalendarCheck className="mr-4 text-[20px]" />
// //                 Leave Request
// //               </div>
// //               {activeDropdown === 'leave' ? <FaChevronUp /> : <FaChevronDown />}
// //             </div>
// //             {activeDropdown === 'leave' && (
// //               <div className="ml-10 mt-1 space-y-1">
// //                 <div
// //                   onClick={() => navigate('/mainlayout/new-leave-requests')}
// //                   className={`cursor-pointer px-2 py-1 rounded-md text-sm ${
// //                     isActive('new-leave-requests') ? 'bg-yellow-300 text-black font-medium' : 'hover:text-yellow-300'
// //                   }`}
// //                 >
// //                   New Request
// //                 </div>
// //                 <div
// //                   onClick={() => navigate('/mainlayout/all-leave-details')}
// //                   className={`cursor-pointer px-2 py-1 rounded-md text-sm ${
// //                     isActive('all-leave-details') ? 'bg-yellow-300 text-black font-medium' : 'hover:text-yellow-300'
// //                   }`}
// //                 >
// //                   All Leave Details
// //                 </div>
// //               </div>
// //             )}
// //           </div>
// //         </div>
// //       </div>

// //       {/* Logout */}
// //       <div className="p-4">
// //         <button className="bg-red-600 w-full text-white py-3 rounded-lg font-bold text-base flex items-center justify-center hover:bg-red-700">
// //           <FaSignOutAlt className="mr-2" />
// //           Log Out
// //         </button>
// //       </div>
// //     </div>
// //   );
// // }


// import React, { useState } from 'react';
// import {
//   FaTachometerAlt, FaUserCog, FaMoneyBillWave,
//   FaSignOutAlt, FaChevronDown, FaChevronUp, FaCalendarCheck
// } from 'react-icons/fa';
// import { useNavigate, useLocation } from 'react-router-dom';
// import logo from '../assets/logo.553589f656b9eb7282fc.png';

// export default function Sidebar() {
//   const [activeDropdown, setActiveDropdown] = useState('');
//   const navigate = useNavigate();
//   const location = useLocation();

//   const isActive = (path) => location.pathname === `/mainlayout/${path}`;

//   const handleMenuClick = (path) => {
//     navigate(`/mainlayout/${path}`);
//     setActiveDropdown('');
//   };

//   const toggleDropdown = (name) => {
//     setActiveDropdown(activeDropdown === name ? '' : name);
//   };

//   return (
//     <div className="w-[260px] bg-[#101c3d] text-white h-screen fixed left-0 top-0 shadow-md z-50 flex flex-col">
//       <div className="overflow-y-auto scrollbar-hide flex-grow pb-4">
//         {/* Logo */}
//         <div className="flex items-center px-4 pt-6 pb-4">
//           <img src={logo} alt="Logo" className="w-12 h-12 mr-3" />
//           <span className="text-[22px] font-bold tracking-wide">PCS TECH</span>
//         </div>

//         {/* Profile */}
//         <div className="flex flex-col items-center mb-6">
//           <img
//             src="https://i.pravatar.cc/60?img=3"
//             alt="Profile"
//             className="w-[60px] h-[60px] rounded-full border-4 border-yellow-400"
//           />
//           <div className="mt-2 font-semibold">PCS</div>
//           <div className="text-sm text-yellow-400">Admin</div>
//         </div>

//         {/* Menu */}
//         <div className="px-2 space-y-1">
//           {/* Dashboard */}
//           <div
//             className={`flex items-center px-4 py-3 rounded-lg cursor-pointer font-medium text-[16px]
//               ${isActive('dashboard') ? 'bg-yellow-400 text-[#101c3d]' : 'hover:bg-yellow-100 hover:text-[#101c3d]'}`}
//             onClick={() => handleMenuClick('dashboard')}
//           >
//             <FaTachometerAlt className="mr-4 text-[20px]" />
//             Dashboard
//           </div>

//           {/* Admin Profile */}
//           <div
//             className={`flex items-center px-4 py-3 rounded-lg cursor-pointer font-medium text-[16px]
//               ${isActive('admin-profile') ? 'bg-yellow-400 text-[#101c3d]' : 'hover:bg-yellow-100 hover:text-[#101c3d]'}`}
//             onClick={() => handleMenuClick('admin-profile')}
//           >
//             <FaTachometerAlt className="mr-4 text-[20px]" />
//             Admin Profile
//           </div>

//           {/* Attendance */}
//           <div>
//             <div
//               className={`flex items-center justify-between px-4 py-3 rounded-lg cursor-pointer font-medium text-[16px]
//                 ${activeDropdown === 'attendance' ? 'bg-yellow-400 text-[#101c3d]' : 'hover:bg-yellow-100 hover:text-[#101c3d]'}`}
//               onClick={() => toggleDropdown('attendance')}
//             >
//               <div className="flex items-center">
//                 <FaUserCog className="mr-4 text-[20px]" />
//                 Attendance
//               </div>
//               {activeDropdown === 'attendance' ? <FaChevronUp /> : <FaChevronDown />}
//             </div>
//             {activeDropdown === 'attendance' && (
//               <div className="ml-10 mt-1 space-y-1">
//                 <div
//                   onClick={() => handleMenuClick('attendance')}
//                   className={`cursor-pointer px-2 py-2 rounded-md text-sm
//                     ${isActive('attendance') ? 'text-yellow-300 font-semibold' : 'hover:text-yellow-300'}`}
//                 >
//                   Manage Attendance
//                 </div>
//               </div>
//             )}
//           </div>

//           {/* Employee Management */}
//           <div>
//             <div
//               className={`flex items-center justify-between px-4 py-3 rounded-lg cursor-pointer font-medium text-[16px]
//                 ${activeDropdown === 'employee' ? 'bg-yellow-400 text-[#101c3d]' : 'hover:bg-yellow-100 hover:text-[#101c3d]'}`}
//               onClick={() => toggleDropdown('employee')}
//             >
//               <div className="flex items-center">
//                 <FaUserCog className="mr-4 text-[20px]" />
//                 Employee Management
//               </div>
//               {activeDropdown === 'employee' ? <FaChevronUp /> : <FaChevronDown />}
//             </div>
//             {activeDropdown === 'employee' && (
//               <div className="ml-10 mt-1 space-y-1">
//                 <div
//                   onClick={() => handleMenuClick('add-employee')}
//                   className={`cursor-pointer px-2 py-2 rounded-md text-sm
//                     ${isActive('add-employee') ? 'text-yellow-300 font-semibold' : 'hover:text-yellow-300'}`}
//                 >
//                   Add Employee
//                 </div>
//                 <div
//                   onClick={() => handleMenuClick('manage-employee')}
//                   className={`cursor-pointer px-2 py-2 rounded-md text-sm
//                     ${isActive('manage-employee') ? 'text-yellow-300 font-semibold' : 'hover:text-yellow-300'}`}
//                 >
//                   Manage Employee
//                 </div>
//               </div>
//             )}
//           </div>

//           {/* Salary */}
//           <div>
//             <div
//               className={`flex items-center justify-between px-4 py-3 rounded-lg cursor-pointer font-medium text-[16px]
//                 ${activeDropdown === 'salary' ? 'bg-yellow-400 text-[#101c3d]' : 'hover:bg-yellow-100 hover:text-[#101c3d]'}`}
//               onClick={() => toggleDropdown('salary')}
//             >
//               <div className="flex items-center">
//                 <FaMoneyBillWave className="mr-4 text-[20px]" />
//                 Salary
//               </div>
//               {activeDropdown === 'salary' ? <FaChevronUp /> : <FaChevronDown />}
//             </div>
//             {activeDropdown === 'salary' && (
//               <div className="ml-10 mt-1 space-y-1">
//                 <div
//                   onClick={() => handleMenuClick('add-salary')}
//                   className={`cursor-pointer px-2 py-2 rounded-md text-sm
//                     ${isActive('add-salary') ? 'text-yellow-300 font-semibold' : 'hover:text-yellow-300'}`}
//                 >
//                   Add Salary
//                 </div>
//                 <div
//                   onClick={() => handleMenuClick('manage-salary')}
//                   className={`cursor-pointer px-2 py-2 rounded-md text-sm
//                     ${isActive('manage-salary') ? 'text-yellow-300 font-semibold' : 'hover:text-yellow-300'}`}
//                 >
//                   Manage Salary
//                 </div>
//               </div>
//             )}
//           </div>

//           {/* Leave Request */}
//           <div>
//             <div
//               className={`flex items-center justify-between px-4 py-3 rounded-lg cursor-pointer font-medium text-[16px]
//                 ${activeDropdown === 'leave' ? 'bg-yellow-400 text-[#101c3d]' : 'hover:bg-yellow-100 hover:text-[#101c3d]'}`}
//               onClick={() => toggleDropdown('leave')}
//             >
//               <div className="flex items-center">
//                 <FaCalendarCheck className="mr-4 text-[20px]" />
//                 Leave Request
//               </div>
//               {activeDropdown === 'leave' ? <FaChevronUp /> : <FaChevronDown />}
//             </div>
//             {activeDropdown === 'leave' && (
//               <div className="ml-10 mt-1 space-y-1">
//                 <div
//                   onClick={() => handleMenuClick('leave-requests')}
//                   className={`cursor-pointer px-2 py-2 rounded-md text-sm
//                     ${isActive('leave-requests') ? 'text-yellow-300 font-semibold' : 'hover:text-yellow-300'}`}
//                 >
//                   New Request
//                 </div>
//                 <div
//                   onClick={() => handleMenuClick('all-leaves')}
//                   className={`cursor-pointer px-2 py-2 rounded-md text-sm
//                     ${isActive('all-leaves') ? 'text-yellow-300 font-semibold' : 'hover:text-yellow-300'}`}
//                 >
//                   All Leave Details
//                 </div>
//               </div>
//             )}
//           </div>

//           {/* Logout */}
//           <div className="pt-6">
//             <button className="bg-red-600 w-full text-white py-3 rounded-lg font-bold text-base flex items-center justify-center hover:bg-red-700">
//               <FaSignOutAlt className="mr-2" />
//               Log Out
//             </button>
//           </div>
//         </div>
//       </div>

//     </div>
//   );
// }

import React, { useState, useEffect } from 'react';
import {
  FaTachometerAlt, FaUserCog, FaMoneyBillWave,
  FaSignOutAlt, FaChevronDown, FaChevronUp, FaCalendarCheck, FaUserCircle
} from 'react-icons/fa';
import { useNavigate, useLocation } from 'react-router-dom';
import logo from '../assets/logo.553589f656b9eb7282fc.png';

export default function Sidebar() {
  const [activeDropdown, setActiveDropdown] = useState('');
  const navigate = useNavigate();
  const location = useLocation();

  // Replace with your actual role logic
  const [role, setRole] = useState(''); // 'admin' or 'employee'

  useEffect(() => {
    // Example: Load role from localStorage (replace with your real logic)
    const storedRole = localStorage.getItem('role') || 'employee';
    setRole(storedRole);
  }, []);

  const isActive = (path) => location.pathname === `/mainlayout/${path}`;

  const handleMenuClick = (path) => {
    navigate(`/mainlayout/${path}`);
    setActiveDropdown('');
  };

  const toggleDropdown = (name) => {
    setActiveDropdown(activeDropdown === name ? '' : name);
  };

  return (
    <div className="w-[260px] bg-[#101c3d] text-white h-screen fixed left-0 top-0 shadow-md z-50 flex flex-col">
      <div className="overflow-y-auto scrollbar-hide flex-grow pb-4">
        {/* Logo */}
        <div className="flex items-center px-4 pt-6 pb-4">
          <img src={logo} alt="Logo" className="w-12 h-12 mr-3" />
          <span className="text-[22px] font-bold tracking-wide">PCS TECH</span>
        </div>

        {/* Profile */}
        <div className="flex flex-col items-center mb-6">
          <img
            src="https://i.pravatar.cc/60?img=3"
            alt="Profile"
            className="w-[60px] h-[60px] rounded-full border-4 border-yellow-400"
          />
          <div className="mt-2 font-semibold">PCS</div>
          <div className="text-sm text-yellow-400 capitalize">{role}</div>
        </div>

        {/* Menu */}
        <div className="px-2 space-y-1">
  

{/* Employee Dashboard */}
{role === 'employee' && (
  <div
    className={`flex items-center px-4 py-3 rounded-lg cursor-pointer font-medium text-[16px]
    ${isActive('employeedashboard') ? 'bg-yellow-400 text-[#101c3d]' : 'hover:bg-yellow-100 hover:text-[#101c3d]'}`}
    onClick={() => {
      const employee = JSON.parse(localStorage.getItem('user'));
      const employeeId = employee?.emp_id || employee?.id;
      navigate(`/mainlayout/employeedashboard/${employeeId}`);
      setActiveDropdown('');
    }}
  >
    <FaTachometerAlt className="mr-4 text-[20px]" />
    Employee Dashboard
  </div>
)}




          {/* Role-specific menus */}
          {role === 'admin' ? (
            <>

             <div
    className={`flex items-center px-4 py-3 rounded-lg cursor-pointer font-medium text-[16px]
    ${isActive('dashboard') ? 'bg-yellow-400 text-[#101c3d]' : 'hover:bg-yellow-100 hover:text-[#101c3d]'}`}
    onClick={() => handleMenuClick('dashboard')}
  >
    <FaTachometerAlt className="mr-4 text-[20px]" />
    Admin Dashboard
  </div>
              {/* Admin Profile */}
              <div
                className={`flex items-center px-4 py-3 rounded-lg cursor-pointer font-medium text-[16px]
                ${isActive('admin-profile') ? 'bg-yellow-400 text-[#101c3d]' : 'hover:bg-yellow-100 hover:text-[#101c3d]'}`}
                onClick={() => handleMenuClick('admin-profile')}
              >
                <FaUserCog className="mr-4 text-[20px]" />
                Admin Profile
              </div>

              {/* Attendance Dropdown */}
              <div>
                <div
                  className={`flex items-center justify-between px-4 py-3 rounded-lg cursor-pointer font-medium text-[16px]
                  ${activeDropdown === 'attendance' ? 'bg-yellow-400 text-[#101c3d]' : 'hover:bg-yellow-100 hover:text-[#101c3d]'}`}
                  onClick={() => toggleDropdown('attendance')}
                >
                  <div className="flex items-center">
                    <FaCalendarCheck className="mr-4 text-[20px]" />
                    Attendance
                  </div>
                  {activeDropdown === 'attendance' ? <FaChevronUp /> : <FaChevronDown />}
                </div>
                {activeDropdown === 'attendance' && (
                  <div className="ml-10 mt-1 space-y-1">
                    <div
                      onClick={() => handleMenuClick('attendance')}
                      className={`cursor-pointer px-2 py-2 rounded-md text-sm
                        ${isActive('attendance') ? 'text-yellow-300 font-semibold' : 'hover:text-yellow-300'}`}
                    >
                      Manage Attendance
                    </div>
                  </div>
                )}
              </div>

              {/* Employee Management */}
              <div>
                <div
                  className={`flex items-center justify-between px-4 py-3 rounded-lg cursor-pointer font-medium text-[16px]
                  ${activeDropdown === 'employee' ? 'bg-yellow-400 text-[#101c3d]' : 'hover:bg-yellow-100 hover:text-[#101c3d]'}`}
                  onClick={() => toggleDropdown('employee')}
                >
                  <div className="flex items-center">
                    <FaUserCog className="mr-4 text-[20px]" />
                    Employee Management
                  </div>
                  {activeDropdown === 'employee' ? <FaChevronUp /> : <FaChevronDown />}
                </div>
                {activeDropdown === 'employee' && (
                  <div className="ml-10 mt-1 space-y-1">
                    <div
                      onClick={() => handleMenuClick('add-employee')}
                      className={`cursor-pointer px-2 py-2 rounded-md text-sm
                        ${isActive('add-employee') ? 'text-yellow-300 font-semibold' : 'hover:text-yellow-300'}`}
                    >
                      Add Employee
                    </div>
                    <div
                      onClick={() => handleMenuClick('manage-employee')}
                      className={`cursor-pointer px-2 py-2 rounded-md text-sm
                        ${isActive('manage-employee') ? 'text-yellow-300 font-semibold' : 'hover:text-yellow-300'}`}
                    >
                      Manage Employee
                    </div>
                  </div>
                )}
              </div>

              {/* Salary Dropdown */}
              <div>
                <div
                  className={`flex items-center justify-between px-4 py-3 rounded-lg cursor-pointer font-medium text-[16px]
                  ${activeDropdown === 'salary' ? 'bg-yellow-400 text-[#101c3d]' : 'hover:bg-yellow-100 hover:text-[#101c3d]'}`}
                  onClick={() => toggleDropdown('salary')}
                >
                  <div className="flex items-center">
                    <FaMoneyBillWave className="mr-4 text-[20px]" />
                    Salary
                  </div>
                  {activeDropdown === 'salary' ? <FaChevronUp /> : <FaChevronDown />}
                </div>
                {activeDropdown === 'salary' && (
                  <div className="ml-10 mt-1 space-y-1">
                    <div
                      onClick={() => handleMenuClick('add-salary')}
                      className={`cursor-pointer px-2 py-2 rounded-md text-sm
                        ${isActive('add-salary') ? 'text-yellow-300 font-semibold' : 'hover:text-yellow-300'}`}
                    >
                      Add Salary
                    </div>
                    <div
                      onClick={() => handleMenuClick('manage-salary')}
                      className={`cursor-pointer px-2 py-2 rounded-md text-sm
                        ${isActive('manage-salary') ? 'text-yellow-300 font-semibold' : 'hover:text-yellow-300'}`}
                    >
                      Manage Salary
                    </div>
                  </div>
                )}
              </div>

              {/* Leave Requests */}
              <div>
                <div
                  className={`flex items-center justify-between px-4 py-3 rounded-lg cursor-pointer font-medium text-[16px]
                  ${activeDropdown === 'leave' ? 'bg-yellow-400 text-[#101c3d]' : 'hover:bg-yellow-100 hover:text-[#101c3d]'}`}
                  onClick={() => toggleDropdown('leave')}
                >
                  <div className="flex items-center">
                    <FaCalendarCheck className="mr-4 text-[20px]" />
                    Leave Request
                  </div>
                  {activeDropdown === 'leave' ? <FaChevronUp /> : <FaChevronDown />}
                </div>
                {activeDropdown === 'leave' && (
                  <div className="ml-10 mt-1 space-y-1">
                    <div
                      onClick={() => handleMenuClick('leave-requests')}
                      className={`cursor-pointer px-2 py-2 rounded-md text-sm
                        ${isActive('leave-requests') ? 'text-yellow-300 font-semibold' : 'hover:text-yellow-300'}`}
                    >
                      New Request
                    </div>
                    <div
                      onClick={() => handleMenuClick('all-leaves')}
                      className={`cursor-pointer px-2 py-2 rounded-md text-sm
                        ${isActive('all-leaves') ? 'text-yellow-300 font-semibold' : 'hover:text-yellow-300'}`}
                    >
                      All Leave Details
                    </div>
                  </div>
                )}
              </div>
            </>
          ) : (
            <>
              {/* Employee - Leave Management */}
              <div>
                <div
                  className={`flex items-center justify-between px-4 py-3 rounded-lg cursor-pointer font-medium text-[16px]
                  ${activeDropdown === 'leave' ? 'bg-yellow-400 text-[#101c3d]' : 'hover:bg-yellow-100 hover:text-[#101c3d]'}`}
                  onClick={() => toggleDropdown('leave')}
                >
                  <div className="flex items-center">
                    <FaCalendarCheck className="mr-4 text-[20px]" />
                    Leave Management
                  </div>
                  {activeDropdown === 'leave' ? <FaChevronUp /> : <FaChevronDown />}
                </div>
                {activeDropdown === 'leave' && (
                  <div className="ml-10 mt-1 space-y-1">
                    <div
                      onClick={() => handleMenuClick('employeeleavemanage')}
                      className={`cursor-pointer px-2 py-2 rounded-md text-sm
                        ${isActive('employeeleavemanage') ? 'text-yellow-300 font-semibold' : 'hover:text-yellow-300'}`}
                    >
                      Apply Leave
                    </div>
                    <div
                      onClick={() => handleMenuClick('leave-status')}
                      className={`cursor-pointer px-2 py-2 rounded-md text-sm
                        ${isActive('leave-status') ? 'text-yellow-300 font-semibold' : 'hover:text-yellow-300'}`}
                    >
                      Leave Status
                    </div>
                  </div>
                )}
              </div>

              {/* Payslip */}
              <div
                className={`flex items-center px-4 py-3 rounded-lg cursor-pointer font-medium text-[16px]
                ${isActive('payslip') ? 'bg-yellow-400 text-[#101c3d]' : 'hover:bg-yellow-100 hover:text-[#101c3d]'}`}
                onClick={() => handleMenuClick('employeepayslip')}
              >
                <FaMoneyBillWave className="mr-4 text-[20px]" />
                Payslip
              </div>

              {/* Profile */}
              <div
                className={`flex items-center px-4 py-3 rounded-lg cursor-pointer font-medium text-[16px]
                ${isActive('profile') ? 'bg-yellow-400 text-[#101c3d]' : 'hover:bg-yellow-100 hover:text-[#101c3d]'}`}
                onClick={() => handleMenuClick('employeeprofile')}
              >
                <FaUserCircle className="mr-4 text-[20px]" />
                Profile
              </div>
            </>
          )}

          {/* Logout */}
          <div className="pt-6">
            <button className="bg-red-600 w-full text-white py-3 rounded-lg font-bold text-base flex items-center justify-center hover:bg-red-700">
              <FaSignOutAlt className="mr-2" />
              Log Out
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
