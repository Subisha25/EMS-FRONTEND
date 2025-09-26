
// // import React, { useEffect, useState } from 'react';
// // import { MdCheckCircle, MdCancel } from 'react-icons/md';
// // import { useNavigate } from 'react-router-dom';

// // const EmployeeAttendance = () => {
// //   const [employee, setEmployee] = useState(null);
// //   const [attendanceData, setAttendanceData] = useState([]);
// //   const navigate = useNavigate();

// //   const handleMarkAttendance = () => {
// //     navigate('/mainlayout/employeedashboard');
// //   };

// //   useEffect(() => {
// //     const user = JSON.parse(sessionStorage.getItem('user'));
// //     const emp_id = user?.emp_id;

// //     if (emp_id) {
// //       // Fetch employee details
// //       fetch(`http://localhost/ems-backend/api/employee/get_one.php?emp_id=${emp_id}`)
// //         .then(res => res.json())
// //         .then(data => {
// //           if (data && data.emp_id) {
// //             setEmployee(data);
// //           } else {
// //             console.warn("Employee not found");
// //           }
// //         })
// //         .catch(err => console.error('Error fetching employee data:', err));

// //       // Fetch attendance records for that employee (POST)
// //       fetch('http://localhost/ems-backend/api/attendance/get_attendance.php', {
// //         method: 'POST',
// //         headers: {
// //           'Content-Type': 'application/json'
// //         },
// //         body: JSON.stringify({ emp_id })
// //       })
      
// //         .then(res => res.json())
// //         .then(data => {
// //           if (data.status) {
// //             setAttendanceData(data.data);
// //           } else {
// //             setAttendanceData([]);
// //           }
// //         })
// //         .catch(err => console.error("Error fetching attendance data:", err));
        
// //     }
// //   }, []);

// //   return (
// //     <div className="bg-white rounded-lg shadow-md p-8 max-w-3xl mx-auto mt-10 border border-gray-200">
// //       {/* Header */}
// //       <div className="mb-4">
// //         <p className="text-lg font-medium text-gray-800">
// //           Hello, <span className="text-yellow-600 font-semibold">
// //             {employee ? `${employee.first_name} ${employee.last_name} 👋` : 'Loading...'}
// //           </span>
// //         </p>
// //         <p className="text-sm text-gray-700 mt-1">
// //           🆔 Employee ID: <span className="font-semibold">{employee?.emp_id || ''}</span>
// //         </p>
// //         <p className="text-sm text-blue-600 mt-1">
// //           📅 Joined: {employee?.doj || 'Loading...'}
// //         </p>
// //       </div>

// //       {/* Today status (optional - can be improved with logic) */}
// //      {/* Today status (dynamic) */}
// // <div className="mb-4">
// //   {(() => {
// //     const today = new Date();
// //     const formattedToday = today.toLocaleDateString('en-GB', {
// //       day: '2-digit',
// //       month: 'short',
// //       year: '2-digit',
// //     }).replace(/ /g, '-'); // example: "24-Jul-25"

// //     const todayRecord = attendanceData.find(item => item.date === formattedToday);

// //     if (!todayRecord) {
// //       return (
// //         <p className="text-gray-500 font-medium">📅 Today’s attendance not yet marked.</p>
// //       );
// //     }

// //     return todayRecord.status.toLowerCase() === 'present' ? (
// //       <p className="text-green-600 font-semibold flex items-center gap-2">
// //         <MdCheckCircle className="text-green-500" /> Today: Present
// //       </p>
// //     ) : (
// //       <p className="text-red-600 font-semibold flex items-center gap-2">
// //         <MdCancel className="text-red-500" /> Today: Absent
// //       </p>
// //     );
// //   })()}
// // </div>


// //       {/* Mark Attendance */}
// //       <div className="mb-6">
// //         <button
// //           className="text-sm text-pink-600 hover:underline"
// //           onClick={handleMarkAttendance}
// //         >
// //           [ Mark Attendance ] <span className="text-gray-500">(Only if not already marked)</span>
// //         </button>
// //       </div>

// //       {/* Attendance Table */}
// //       <div className="overflow-x-auto">
// //         <table className="min-w-full bg-white border rounded-lg">
// //           <thead className="bg-gray-100 text-gray-600 text-sm">
// //             <tr>
// //               <th className="py-2 px-4 border-b text-left">Date</th>
// //               <th className="py-2 px-4 border-b text-left">Day</th>
// //               <th className="py-2 px-4 border-b text-left">Status</th>
// //             </tr>
// //           </thead>
// //           <tbody>
// //             {attendanceData.length === 0 ? (
// //               <tr>
// //                 <td colSpan="3" className="py-4 px-4 text-center text-gray-500">
// //                   No attendance records found.
// //                 </td>
// //               </tr>
// //             ) : (
// //               attendanceData.map((item, idx) => (
// //                 <tr key={idx} className="hover:bg-gray-50 transition">
// //                   <td className="py-2 px-4 border-b">{item.date}</td>
// //                   <td className="py-2 px-4 border-b text-yellow-600">{item.day}</td>
// //                   <td className="py-2 px-4 border-b">
// //                   <td className="py-2 px-4 border-b">
// //   {item.status.toLowerCase() === 'present' ? (
// //     <span className="text-green-600 font-medium flex items-center gap-1">
// //       <MdCheckCircle /> Present
// //     </span>
// //   ) : (
// //     <span className="text-red-500 font-medium flex items-center gap-1">
// //       <MdCancel /> Absent
// //     </span>
// //   )}
// // </td>

// //                   </td>
// //                 </tr>
// //               ))
// //             )}
// //           </tbody>
// //         </table>
// //       </div>
// //     </div>
// //   );
// // };

// // export default EmployeeAttendance;


// // import React, { useEffect, useState } from 'react';
// // import { MdCheckCircle, MdCancel } from 'react-icons/md';
// // import { useNavigate } from 'react-router-dom';

// // const EmployeeAttendance = () => {
// //   const [employee, setEmployee] = useState(null);
// //   const [attendanceData, setAttendanceData] = useState([]);
// //   const navigate = useNavigate();

// //   const handleMarkAttendance = () => {
// //     navigate('/mainlayout/employeedashboard');
// //   };

// //   useEffect(() => {
// //     const user = JSON.parse(sessionStorage.getItem('user'));
// //     const emp_id = user?.emp_id;

// //     if (emp_id) {
// //       // Fetch employee details
// //       fetch(`http://localhost/ems-backend/api/employee/get_one.php?emp_id=${emp_id}`)
// //         .then(res => res.json())
// //         .then(data => {
// //           if (data && data.emp_id) {
// //             setEmployee(data);
// //           } else {
// //             console.warn("Employee not found");
// //           }
// //         })
// //         .catch(err => console.error('Error fetching employee data:', err));

// //       // Fetch attendance records
// //       fetch('http://localhost/ems-backend/api/attendance/getone_attendance.php', {
// //         method: 'POST',
// //         headers: {
// //           'Content-Type': 'application/json'
// //         },
// //         body: JSON.stringify({ emp_id })
// //       })
// //         .then(res => res.json())
// //         .then(data => {
// //           if (data.status) {
// //             setAttendanceData(data.data);
// //           } else {
// //             setAttendanceData([]);
// //           }
// //         })
// //         .catch(err => console.error("Error fetching attendance data:", err));
// //     }
// //   }, []);

// //   return (
// //     <div className="bg-white rounded-lg shadow-md p-8 max-w-3xl mx-auto mt-10 border border-gray-200">
      
// //       {/* Header */}
// //       <div className="mb-4">
// //         <p className="text-lg font-medium text-gray-800">
// //           Hello, <span className="text-yellow-600 font-semibold">
// //             {employee ? `${employee.first_name} ${employee.last_name} 👋` : 'Loading...'}
// //           </span>
// //         </p>
// //         <p className="text-sm text-gray-700 mt-1">
// //           🆔 Employee ID: <span className="font-semibold">{employee?.emp_id || ''}</span>
// //         </p>
// //         <p className="text-sm text-blue-600 mt-1">
// //           📅 Joined: {employee?.doj || 'Loading...'}
// //         </p>
// //       </div>

// //       {/* Today status */}
// //       <div className="mb-4">
// //         {(() => {
// //           const today = new Date();
// //           const formattedToday = today.toISOString().split('T')[0]; // Format: YYYY-MM-DD

// //           const todayRecord = attendanceData.find(item => item.date === formattedToday);

// //           if (!todayRecord) {
// //             return (
// //               <p className="text-gray-500 font-medium">📅 Today’s attendance not yet marked.</p>
// //             );
// //           }

// //           return todayRecord.status.toLowerCase() === 'present' ? (
// //             <p className="text-green-600 font-semibold flex items-center gap-2">
// //               <MdCheckCircle className="text-green-500" /> Today: Present
// //             </p>
// //           ) : (
// //             <p className="text-red-600 font-semibold flex items-center gap-2">
// //               <MdCancel className="text-red-500" /> Today: Absent
// //             </p>
// //           );
// //         })()}
// //       </div>

// //       {/* Mark Attendance Button */}
// //       <div className="mb-6">
// //         <button
// //           className="text-sm text-pink-600 hover:underline"
// //           onClick={handleMarkAttendance}
// //         >
// //           [ Mark Attendance ] <span className="text-gray-500">(Only if not already marked)</span>
// //         </button>
// //       </div>

// //       {/* Attendance Table */}
// //       <div className="overflow-x-auto">
// //         <table className="min-w-full bg-white border rounded-lg">
// //           <thead className="bg-gray-100 text-gray-600 text-sm">
// //             <tr>
// //               <th className="py-2 px-4 border-b text-left">Date</th>
// //               <th className="py-2 px-4 border-b text-left">Day</th>
// //               <th className="py-2 px-4 border-b text-left">Status</th>
// //             </tr>
// //           </thead>
// //           <tbody>
// //             {attendanceData.length === 0 ? (
// //               <tr>
// //                 <td colSpan="3" className="py-4 px-4 text-center text-gray-500">
// //                   No attendance records found.
// //                 </td>
// //               </tr>
// //             ) : (
// //               attendanceData.map((item, idx) => (
// //                 <tr key={idx} className="hover:bg-gray-50 transition">
// //                   <td className="py-2 px-4 border-b">{item.date}</td>
// //                   <td className="py-2 px-4 border-b text-yellow-600">{item.day}</td>
// //                   <td className="py-2 px-4 border-b">
// //                     {item.status.toLowerCase() === 'present' ? (
// //                       <span className="text-green-600 font-medium flex items-center gap-1">
// //                         <MdCheckCircle /> Present
// //                       </span>
// //                     ) : (
// //                       <span className="text-red-500 font-medium flex items-center gap-1">
// //                         <MdCancel /> Absent
// //                       </span>
// //                     )}
// //                   </td>
// //                 </tr>
// //               ))
// //             )}
// //           </tbody>
// //         </table>
// //       </div>
// //     </div>
// //   );
// // };

// // export default EmployeeAttendance;


// import React, { useEffect, useState } from 'react';
// import { MdCheckCircle, MdCancel, MdCalendarMonth } from 'react-icons/md';
// import { FaUserCircle, FaCalendarAlt, FaCalendarDay } from 'react-icons/fa';
// import { useNavigate } from 'react-router-dom';
// import API from '../../../utils/api';

// const EmployeeAttendance = () => {
//   const [employee, setEmployee] = useState(null);
//   const [attendanceData, setAttendanceData] = useState([]);
//   const [selectedMonth, setSelectedMonth] = useState(new Date().getMonth()); // 0-11
//   const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());
//   const navigate = useNavigate();

//   const handleMarkAttendance = () => {
//     navigate('/mainlayout/employeedashboard');
//   };

//    useEffect(() => {
//     const user = JSON.parse(sessionStorage.getItem("user"));
//     const emp_id = user?.emp_id;

//     if (!emp_id) return;

//     // 🔹 Fetch employee details
//     API.get(`api/employee/get_one.php?emp_id=${emp_id}`)
//       .then((res) => setEmployee(res.data))
//       .catch((err) => console.error("Employee fetch error:", err));

//     // 🔹 Fetch attendance records
//     API.post("api/attendance/getone_attendance.php", { emp_id })
//       .then((res) => {
//         if (res.data.status) {
//           setAttendanceData(res.data.data);
//         } else {
//           setAttendanceData([]);
//         }
//       })
//       .catch((err) => console.error("Attendance fetch error:", err));
//   }, []);

//   // useEffect(() => {
//   //   const user = JSON.parse(sessionStorage.getItem('user'));
//   //   const emp_id = user?.emp_id;

//   //   if (emp_id) {
//   //     // Fetch employee details
//   //     fetch(`http://localhost/ems-backend/api/employee/get_one.php?emp_id=${emp_id}`)
//   //       .then(res => res.json())
//   //       .then(data => setEmployee(data))
//   //       .catch(err => console.error(err));

//   //     // Fetch attendance records
//   //     fetch('http://localhost/ems-backend/api/attendance/getone_attendance.php', {
//   //       method: 'POST',
//   //       headers: { 'Content-Type': 'application/json' },
//   //       body: JSON.stringify({ emp_id })
//   //     })
//   //       .then(res => res.json())
//   //       .then(data => setAttendanceData(data.status ? data.data : []))
//   //       .catch(err => console.error(err));
//   //   }
//   // }, []);

//   // Generate all dates of selected month
//   const getMonthDates = (year, month) => {
//     const dates = [];
//     const date = new Date(year, month, 1);
//     while (date.getMonth() === month) {
//       dates.push(new Date(date));
//       date.setDate(date.getDate() + 1);
//     }
//     return dates;
//   };

//   // Map attendance records to dates
//   const monthDates = getMonthDates(selectedYear, selectedMonth);
//   const monthAttendance = monthDates.map(date => {
//     const dateStr = date.toISOString().split('T')[0];
//     const record = attendanceData.find(item => item.date === dateStr);
//     return {
//       date: dateStr,
//       day: date.toLocaleDateString('en-US', { weekday: 'short' }),
//       status: record ? record.status : 'Not marked'
//     };
//   });

//   return (
//     <div className="bg-gray-50 min-h-screen p-6">
//       <div className="bg-white rounded-2xl shadow-xl p-8 max-w-5xl mx-auto border border-gray-100">
        
//         {/* Header Section */}
//         <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 border-b pb-6 border-gray-100">
//           <div className="mb-4 sm:mb-0">
//             <div className="flex items-center text-lg font-medium text-gray-800">
//               <FaUserCircle className="text-2xl mr-2 text-[#101c3d]" />
//               <p>Hello, <span className="text-indigo-600 font-semibold">{employee ? `${employee.first_name} ${employee.last_name} 👋` : 'Loading...'}</span></p>
//             </div>
//             <p className="text-sm text-gray-600 mt-2">
//               <span className="font-semibold">🆔 Employee ID:</span> {employee?.emp_id || ''}
//             </p>
//             <p className="text-sm text-gray-600 mt-1">
//               <span className="font-semibold">📅 Joined:</span> {employee?.doj || 'Loading...'}
//             </p>
//           </div>
          
//           {/* Month/Year selector */}
//           <div className="flex flex-col sm:flex-row gap-4 items-center bg-gray-50 p-3 rounded-xl border border-gray-200 shadow-inner">
//             <div className="flex items-center gap-2">
//               <MdCalendarMonth className="text-gray-500 text-xl" />
//               <select
//                 value={selectedMonth}
//                 onChange={e => setSelectedMonth(parseInt(e.target.value))}
//                 className="bg-transparent text-gray-700 font-medium cursor-pointer focus:outline-none"
//               >
//                 {Array.from({ length: 12 }, (_, i) => (
//                   <option key={i} value={i}>{new Date(0, i).toLocaleString('default', { month: 'long' })}</option>
//                 ))}
//               </select>
//             </div>
//             <div className="flex items-center gap-2">
//               <FaCalendarDay className="text-gray-500 text-xl" />
//               <input
//                 type="number"
//                 value={selectedYear}
//                 onChange={e => setSelectedYear(parseInt(e.target.value))}
//                 className="bg-transparent text-gray-700 font-medium w-20 text-center focus:outline-none"
//               />
//             </div>
//           </div>
//         </div>

//         {/* Attendance Status & Button Section */}
//         <div className="flex flex-col md:flex-row justify-between items-center mb-6">
//           {/* Today's Status */}
//           <div className="mb-4 md:mb-0">
//             {(() => {
//               const today = new Date();
//               const formattedToday = today.toISOString().split('T')[0];
//               const todayRecord = attendanceData.find(item => item.date === formattedToday);
              
//               if (!todayRecord) {
//                 return (
//                   <p className="text-gray-500 font-medium flex items-center gap-2">
//                     <FaCalendarAlt className="text-xl" />
//                     Today's attendance not yet marked.
//                   </p>
//                 );
//               }
              
//               const status = todayRecord.status.toLowerCase();
//               return status === 'present' ? (
//                 <p className="text-green-600 font-bold flex items-center gap-2">
//                   <MdCheckCircle className="text-2xl" /> Today: Present
//                 </p>
//               ) : (
//                 <p className="text-red-600 font-bold flex items-center gap-2">
//                   <MdCancel className="text-2xl" /> Today: Absent
//                 </p>
//               );
//             })()}
//           </div>
          
//           {/* Mark Attendance Button */}
//           <div>
//             <button
//               className="bg-[#101c3d] text-white font-semibold py-3 px-6 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
//               onClick={handleMarkAttendance}
//             >
//               Mark Attendance
//             </button>
//           </div>
//         </div>

//         {/* Attendance Table */}
//         <div className="overflow-x-auto">
//           <table className="min-w-full bg-white rounded-2xl overflow-hidden shadow-inner border border-gray-100">
//             <thead className="bg-gray-100 text-gray-700 text-sm font-semibold uppercase">
//               <tr>
//                 <th className="py-4 px-6 text-left">Date</th>
//                 <th className="py-4 px-6 text-left">Day</th>
//                 <th className="py-4 px-6 text-left">Status</th>
//               </tr>
//             </thead>
//             <tbody className="divide-y divide-gray-100">
//               {monthAttendance.length === 0 ? (
//                 <tr>
//                   <td colSpan="3" className="py-8 text-center text-gray-500">No attendance records for this month.</td>
//                 </tr>
//               ) : (
//                 monthAttendance.map((item, idx) => (
//                   <tr key={idx} className="hover:bg-gray-50 transition-colors duration-200">
//                     <td className="py-4 px-6">{item.date}</td>
//                     <td className="py-4 px-6 font-medium text-gray-600">{item.day}</td>
//                     <td className="py-4 px-6">
//                       {item.status.toLowerCase() === 'present' ? (
//                         <span className="inline-flex items-center gap-2 px-3 py-1 text-xs font-semibold rounded-full bg-green-100 text-green-700">
//                           <MdCheckCircle className="text-base" /> Present
//                         </span>
//                       ) : item.status.toLowerCase() === 'absent' ? (
//                         <span className="inline-flex items-center gap-2 px-3 py-1 text-xs font-semibold rounded-full bg-red-100 text-red-700">
//                           <MdCancel className="text-base" /> Absent
//                         </span>
//                       ) : (
//                         <span className="inline-flex items-center gap-2 px-3 py-1 text-xs font-semibold rounded-full bg-gray-100 text-gray-500">
//                           <FaCalendarAlt className="text-base" /> Not marked
//                         </span>
//                       )}
//                     </td>
//                   </tr>
//                 ))
//               )}
//             </tbody>
//           </table>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default EmployeeAttendance;

import React, { useEffect, useState } from 'react';
import { MdCheckCircle, MdCancel, MdCalendarMonth } from 'react-icons/md';
import { FaUserCircle, FaCalendarAlt, FaCalendarDay } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import API from '../../../utils/api';

const EmployeeAttendance = () => {
  const [employee, setEmployee] = useState(null);
  const [attendanceData, setAttendanceData] = useState([]);
  const [selectedMonth, setSelectedMonth] = useState(new Date().getMonth()); // 0-11
  const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());
  const navigate = useNavigate();

  const handleMarkAttendance = () => {
    navigate('/mainlayout/employeedashboard');
  };

  useEffect(() => {
    const user = JSON.parse(sessionStorage.getItem("user"));
    const emp_id = user?.emp_id;

    if (!emp_id) return;

    // 🔹 Fetch employee details
    API.get(`api/employee/get_one.php?emp_id=${emp_id}`)
      .then((res) => setEmployee(res.data))
      .catch((err) => console.error("Employee fetch error:", err));

    // 🔹 Fetch attendance records
    API.post("api/attendance/getone_attendance.php", { emp_id })
      .then((res) => {
        if (res.data.status) {
          setAttendanceData(res.data.data);
        } else {
          setAttendanceData([]);
        }
      })
      .catch((err) => console.error("Attendance fetch error:", err));
  }, []);

  // Generate all dates of selected month
  const getMonthDates = (year, month) => {
    const dates = [];
    const date = new Date(year, month, 1);
    while (date.getMonth() === month) {
      dates.push(new Date(date));
      date.setDate(date.getDate() + 1);
    }
    return dates;
  };

  // FIXED: Function to get correct day name from date string
  const getDayFromDate = (dateStr) => {
    const date = new Date(dateStr + 'T00:00:00'); // Add time to avoid timezone issues
    return date.toLocaleDateString('en-US', { weekday: 'short' });
  };

  // Map attendance records to dates
  const monthDates = getMonthDates(selectedYear, selectedMonth);
  const monthAttendance = monthDates.map(date => {
    const dateStr = date.toISOString().split('T')[0];
    const record = attendanceData.find(item => item.date === dateStr);
    
    // FIXED: Calculate day from the actual date instead of using database day
    const correctDay = getDayFromDate(dateStr);
    
    return {
      date: dateStr,
      day: correctDay, // Use calculated day instead of database day
      status: record ? record.status : 'Not marked'
    };
  });

  return (
    <div className="bg-gray-50 min-h-screen p-6">
      <div className="bg-white rounded-2xl shadow-xl p-8 max-w-5xl mx-auto border border-gray-100">
        
        {/* Header Section */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 border-b pb-6 border-gray-100">
          <div className="mb-4 sm:mb-0">
            <div className="flex items-center text-lg font-medium text-gray-800">
              <FaUserCircle className="text-2xl mr-2 text-[#101c3d]" />
              <p>Hello, <span className="text-indigo-600 font-semibold">{employee ? `${employee.first_name} ${employee.last_name} 👋` : 'Loading...'}</span></p>
            </div>
            <p className="text-sm text-gray-600 mt-2">
              <span className="font-semibold">🆔 Employee ID:</span> {employee?.emp_id || ''}
            </p>
            <p className="text-sm text-gray-600 mt-1">
              <span className="font-semibold">📅 Joined:</span> {employee?.doj || 'Loading...'}
            </p>
          </div>
          
          {/* Month/Year selector */}
          <div className="flex flex-col sm:flex-row gap-4 items-center bg-gray-50 p-3 rounded-xl border border-gray-200 shadow-inner">
            <div className="flex items-center gap-2">
              <MdCalendarMonth className="text-gray-500 text-xl" />
              <select
                value={selectedMonth}
                onChange={e => setSelectedMonth(parseInt(e.target.value))}
                className="bg-transparent text-gray-700 font-medium cursor-pointer focus:outline-none"
              >
                {Array.from({ length: 12 }, (_, i) => (
                  <option key={i} value={i}>{new Date(0, i).toLocaleString('default', { month: 'long' })}</option>
                ))}
              </select>
            </div>
            <div className="flex items-center gap-2">
              <FaCalendarDay className="text-gray-500 text-xl" />
              <input
                type="number"
                value={selectedYear}
                onChange={e => setSelectedYear(parseInt(e.target.value))}
                className="bg-transparent text-gray-700 font-medium w-20 text-center focus:outline-none"
              />
            </div>
          </div>
        </div>

        {/* Attendance Status & Button Section */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-6">
          {/* Today's Status */}
          <div className="mb-4 md:mb-0">
            {(() => {
              const today = new Date();
              const formattedToday = today.toISOString().split('T')[0];
              const todayRecord = attendanceData.find(item => item.date === formattedToday);
              
              if (!todayRecord) {
                return (
                  <p className="text-gray-500 font-medium flex items-center gap-2">
                    <FaCalendarAlt className="text-xl" />
                    Today's attendance not yet marked.
                  </p>
                );
              }
              
              const status = todayRecord.status.toLowerCase();
              return status === 'present' ? (
                <p className="text-green-600 font-bold flex items-center gap-2">
                  <MdCheckCircle className="text-2xl" /> Today: Present
                </p>
              ) : (
                <p className="text-red-600 font-bold flex items-center gap-2">
                  <MdCancel className="text-2xl" /> Today: Absent
                </p>
              );
            })()}
          </div>
          
          {/* Mark Attendance Button */}
          <div>
            <button
              className="bg-[#101c3d] text-white font-semibold py-3 px-6 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              onClick={handleMarkAttendance}
            >
              Mark Attendance
            </button>
          </div>
        </div>

        {/* Attendance Table */}
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white rounded-2xl overflow-hidden shadow-inner border border-gray-100">
            <thead className="bg-gray-100 text-gray-700 text-sm font-semibold uppercase">
              <tr>
                <th className="py-4 px-6 text-left">Date</th>
                <th className="py-4 px-6 text-left">Day</th>
                <th className="py-4 px-6 text-left">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {monthAttendance.length === 0 ? (
                <tr>
                  <td colSpan="3" className="py-8 text-center text-gray-500">No attendance records for this month.</td>
                </tr>
              ) : (
                monthAttendance.map((item, idx) => (
                  <tr key={idx} className="hover:bg-gray-50 transition-colors duration-200">
                    <td className="py-4 px-6">{item.date}</td>
                    <td className="py-4 px-6 font-medium text-gray-600">{item.day}</td>
                    <td className="py-4 px-6">
                      {item.status.toLowerCase() === 'present' ? (
                        <span className="inline-flex items-center gap-2 px-3 py-1 text-xs font-semibold rounded-full bg-green-100 text-green-700">
                          <MdCheckCircle className="text-base" /> Present
                        </span>
                      ) : item.status.toLowerCase() === 'absent' ? (
                        <span className="inline-flex items-center gap-2 px-3 py-1 text-xs font-semibold rounded-full bg-red-100 text-red-700">
                          <MdCancel className="text-base" /> Absent
                        </span>
                      ) : (
                        <span className="inline-flex items-center gap-2 px-3 py-1 text-xs font-semibold rounded-full bg-gray-100 text-gray-500">
                          <FaCalendarAlt className="text-base" /> Not marked
                        </span>
                      )}
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default EmployeeAttendance;