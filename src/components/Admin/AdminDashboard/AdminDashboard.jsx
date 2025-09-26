// // // import React from 'react';
// // // import LeaveRequestTable from '../LeaveManagement/NewLeaveRequest';

// // // const AdminDashboard = () => {


// // //   return (
// // //     <div className="p-6 bg-gray-100 min-h-screen ">
// // //       {/* Cards */}
// // //       <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
// // //         <div className="bg-white rounded-xl shadow p-6 text-center">
// // //           <h3 className="text-xl font-semibold mb-2">Total Employees</h3>
// // //           <p className="text-3xl font-bold text-blue-600">150</p>
// // //         </div>
// // //         <div className="bg-white rounded-xl shadow p-6 text-center">
// // //           <h3 className="text-xl font-semibold mb-2">Total Leave Request</h3>
// // //           <p className="text-3xl font-bold text-yellow-600">35</p>
// // //         </div>
// // //         <div className="bg-white rounded-xl shadow p-6 text-center">
// // //           <h3 className="text-xl font-semibold mb-2">Leave Applied</h3>
// // //           <p className="text-3xl font-bold text-purple-600">120</p>
// // //         </div>
// // //       </div>

// // //       <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
// // //         <div className="bg-white rounded-xl shadow p-6 text-center">
// // //           <h3 className="text-xl font-semibold mb-2">Pending Leave Request</h3>
// // //           <p className="text-3xl font-bold text-orange-500">10</p>
// // //         </div>
// // //         <div className="bg-white rounded-xl shadow p-6 text-center">
// // //           <h3 className="text-xl font-semibold mb-2">Approved Leave Request</h3>
// // //           <p className="text-3xl font-bold text-green-500">25</p>
// // //         </div>
// // //       </div>

// // //    <LeaveRequestTable />
// // //     </div>
// // //   );
// // // };

// // // export default AdminDashboard;


// // // import React, { useEffect, useState } from 'react';
// // // import LeaveRequestTable from '../LeaveManagement/NewLeaveRequest';
// // // import axios from 'axios';

// // // const AdminDashboard = () => {
// // //   const [totalEmployees, setTotalEmployees] = useState(0);

//   // useEffect(() => {
//   //   const fetchEmployeeCount = async () => {
//   //     try {
//   //       const response = await axios.get('http://localhost/ems-backend/api/employee/get_all.php');
//   //       if (Array.isArray(response.data)) {
//   //         setTotalEmployees(response.data.length);
//   //       } else {
//   //         console.error("Unexpected data format:", response.data);
//   //       }
//   //     } catch (error) {
//   //       console.error("Error fetching employee data:", error);
//   //     }
//   //   };

//   //   fetchEmployeeCount();
//   // }, []);

// // //   return (
// // //     <div className="p-6 bg-gray-100 min-h-screen">
// // //       {/* Cards */}
// // //       <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
// // //         <div className="bg-white rounded-xl shadow p-6 text-center">
// // //           <h3 className="text-xl font-semibold mb-2">Total Employees</h3>
// // //           <p className="text-3xl font-bold text-blue-600">{totalEmployees}</p>
// // //         </div>
// // //         <div className="bg-white rounded-xl shadow p-6 text-center">
// // //           <h3 className="text-xl font-semibold mb-2">New Request</h3>
// // //           <p className="text-3xl font-bold text-yellow-600">35</p>
// // //         </div>
// // //         <div className="bg-white rounded-xl shadow p-6 text-center">
// // //           <h3 className="text-xl font-semibold mb-2">Leave Applied</h3>
// // //           <p className="text-3xl font-bold text-purple-600">120</p>
// // //         </div>
// // //       </div>

// // //       <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
// // //         <div className="bg-white rounded-xl shadow p-6 text-center">
// // //           <h3 className="text-xl font-semibold mb-2">Rejected Leave Request</h3>
// // //           <p className="text-3xl font-bold text-orange-500">10</p>
// // //         </div>
// // //         <div className="bg-white rounded-xl shadow p-6 text-center">
// // //           <h3 className="text-xl font-semibold mb-2">Approved Leave Request</h3>
// // //           <p className="text-3xl font-bold text-green-500">25</p>
// // //         </div>
// // //       </div>

// // //       <LeaveRequestTable />
// // //     </div>
// // //   );
// // // };

// // // export default AdminDashboard;


// // import React, { useEffect, useState } from 'react';
// // import LeaveRequestTable from '../LeaveManagement/NewLeaveRequest';
// // import axios from 'axios';

// // const AdminDashboard = () => {
// //   const [totalEmployees, setTotalEmployees] = useState(0);
// //   const [leaveStats, setLeaveStats] = useState({
// //     total: 0,
// //     approved: 0,
// //     rejected: 0,
// //     pending: 0,
// //   });

// //   useEffect(() => {
//     // // Fetch total employees
//     // const fetchEmployeeCount = async () => {
//     //   try {
//     //     const response = await axios.get('http://localhost/ems-backend/api/employee/get_all.php');
//     //     if (Array.isArray(response.data)) {
//     //       setTotalEmployees(response.data.length);
//     //     }
//     //   } catch (error) {
//     //     console.error("Error fetching employee count:", error);
//     //   }
//     // };

// //     // Fetch leave data
// //     const fetchLeaveStats = async () => {
// //       try {
// //         const response = await axios.get('http://localhost/ems-backend/api/leave/get.php');
// //         if (Array.isArray(response.data)) {
// //           const total = response.data.length;
// //           const approved = response.data.filter((leave) => leave.status === 'Approved').length;
// //           const rejected = response.data.filter((leave) => leave.status === 'Rejected').length;
// //           const pending = response.data.filter((leave) => leave.status === 'Pending').length;

// //           setLeaveStats({ total, approved, rejected, pending });
// //         }
// //       } catch (error) {
// //         console.error("Error fetching leave data:", error);
// //       }
// //     };

// //     fetchEmployeeCount();
// //     fetchLeaveStats();
// //   }, []);

// //   return (
// //     <div className="p-6 bg-gray-100 min-h-screen">
// //       {/* Cards */}
// //       <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
// //         <div className="bg-white rounded-xl shadow p-6 text-center">
// //           <h3 className="text-xl font-semibold mb-2">Total Employees</h3>
// //           <p className="text-3xl font-bold text-blue-600">{totalEmployees}</p>
// //         </div>
// //         <div className="bg-white rounded-xl shadow p-6 text-center">
// //           <h3 className="text-xl font-semibold mb-2">New Request</h3>
// //           <p className="text-3xl font-bold text-yellow-600">{leaveStats.pending}</p>
// //         </div>
// //         <div className="bg-white rounded-xl shadow p-6 text-center">
// //           <h3 className="text-xl font-semibold mb-2">Leave Applied</h3>
// //           <p className="text-3xl font-bold text-purple-600">{leaveStats.total}</p>
// //         </div>
// //       </div>

// //       <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
// //         <div className="bg-white rounded-xl shadow p-6 text-center">
// //           <h3 className="text-xl font-semibold mb-2">Rejected Leave Request</h3>
// //           <p className="text-3xl font-bold text-orange-500">{leaveStats.rejected}</p>
// //         </div>
// //         <div className="bg-white rounded-xl shadow p-6 text-center">
// //           <h3 className="text-xl font-semibold mb-2">Approved Leave Request</h3>
// //           <p className="text-3xl font-bold text-green-500">{leaveStats.approved}</p>
// //         </div>
// //       </div>

// //       <LeaveRequestTable />
// //     </div>
// //   );
// // };

// // export default AdminDashboard;

// import React, { useEffect, useState } from 'react';
// import LeaveRequestTable from '../LeaveManagement/NewLeaveRequest';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';

// const AdminDashboard = () => {
//   const [totalEmployees, setTotalEmployees] = useState(0);
//   const navigate = useNavigate();

//   const [leaveStats, setLeaveStats] = useState({
//     total: 0,
//     approved: 0,
//     rejected: 0,
//     pending: 0,
//   });

//   const [todayAttendance, setTodayAttendance] = useState({
//   present: 0,
//   absent: 0,
// });

//   useEffect(() => {

    
//     // Fetch total employees
//     const fetchEmployeeCount = async () => {
//       try {
//         const response = await axios.get('http://localhost/ems-backend/api/employee/get_all.php');
//         if (Array.isArray(response.data)) {
//           setTotalEmployees(response.data.length);
          
//         }
//       } catch (error) {
//         console.error("Error fetching employee count:", error);
//       }
//     };

//     // Fetch leave data
//     const fetchLeaveStats = async () => {
//     try {
//       const response = await axios.get('http://localhost/ems-backend/api/leave/get.php');
//       console.log("Leave API response:", response.data);

//       const leaveList = Array.isArray(response.data) ? response.data : response.data.data;

//       if (Array.isArray(leaveList)) {
//         const total = leaveList.length;
//         const approved = leaveList.filter((leave) => leave.status?.toLowerCase() === 'approved').length;
//         const rejected = leaveList.filter((leave) => leave.status?.toLowerCase() === 'rejected').length;
//         const pending = leaveList.filter((leave) => leave.status?.toLowerCase() === 'pending').length;

//         setLeaveStats({ total, approved, rejected, pending });
//       }
//     } catch (error) {
//       console.error("Error fetching leave data:", error);
//     }
//   };

 
// const fetchTodayAttendance = async () => {
//   try {
//     const response = await axios.post('http://localhost/ems-backend/api/attendance/get_attendance.php');

//     const attendanceList = response.data?.data || [];
//     const today = new Date().toISOString().split('T')[0]; // YYYY-MM-DD

//     const todayRecords = attendanceList.filter((record) => record.date === today);

//     const present = todayRecords.filter((record) => record.status?.toLowerCase() === 'present').length;
//     const absent = todayRecords.filter((record) => record.status?.toLowerCase() === 'absent').length;

//     setTodayAttendance({ present, absent });
//   } catch (error) {
//     console.error("Error fetching today's attendance:", error);
//   }
// };

//   fetchEmployeeCount();
// fetchLeaveStats();
// fetchTodayAttendance(); // <- new call

//   }, []);



//   return (
//     <div className="p-6 bg-gray-100 min-h-screen">
//       {/* Cards */}

//       <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
//         <div className="bg-white rounded-xl shadow p-6 text-center">
//           <h3 className="text-xl font-semibold mb-2">Total Employees</h3>
//           <p className="text-3xl font-bold text-blue-600">{totalEmployees}</p>
//         </div>
//        <div
//   className="bg-white rounded-xl shadow p-6 text-center"
//   // onClick={() => navigate('/mainlayout/leave-requests')}
// >
//   <h3 className="text-xl font-semibold mb-2">New Request</h3>
//   <p className="text-3xl font-bold text-yellow-600">{leaveStats.pending}</p>
// </div>

//         <div className="bg-white rounded-xl shadow p-6 text-center">
//           <h3 className="text-xl font-semibold mb-2">Leave Applied</h3>
//           <p className="text-3xl font-bold text-purple-600">{leaveStats.total}</p>
//         </div>
//       </div>

//       <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
//         <div className="bg-white rounded-xl shadow p-6 text-center">
//           <h3 className="text-xl font-semibold mb-2">Rejected Leave Request</h3>
//           <p className="text-3xl font-bold text-orange-500">{leaveStats.rejected}</p>
//         </div>
//         <div className="bg-white rounded-xl shadow p-6 text-center">
//           <h3 className="text-xl font-semibold mb-2">Approved Leave Request</h3>
//           <p className="text-3xl font-bold text-green-500">{leaveStats.approved}</p>
//         </div>
//       </div>

//       <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
//   <div className="bg-white rounded-xl shadow p-6 text-center">
//     <h3 className="text-xl font-semibold mb-2">Today Present</h3>
//     <p className="text-3xl font-bold text-green-600">{todayAttendance.present}</p>
//   </div>
//   <div className="bg-white rounded-xl shadow p-6 text-center">
//     <h3 className="text-xl font-semibold mb-2">Today Absent</h3>
//     <p className="text-3xl font-bold text-red-600">{todayAttendance.absent}</p>
//   </div>
// </div>


//       {/* <LeaveRequestTable /> */}
//     </div>
//   );
// };

// export default AdminDashboard;


import React, { useEffect, useState } from 'react';
import {
  FaUserTie, FaCheckCircle, FaTimesCircle, FaHourglassHalf,
  FaCalendarTimes, FaCalendarCheck
} from 'react-icons/fa';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import TestTubeChart from './BarChart';
import API from '../../../utils/api';

const AdminDashboard = () => {
  const [totalEmployees, setTotalEmployees] = useState(0);
  const navigate = useNavigate();

  const [leaveStats, setLeaveStats] = useState({
    total: 0,
    approved: 0,
    rejected: 0,
    pending: 0,
  });

  const [todayAttendance, setTodayAttendance] = useState({
    present: 0,
    absent: 0,
  });

  useEffect(() => {
    // Fetch total employees
    const fetchEmployeeCount = async () => {
      try {
        const response = await API.get('api/employee/get_all.php');
        if (Array.isArray(response.data)) {
          setTotalEmployees(response.data.length);
        }
      } catch (error) {
        console.error("Error fetching employee count:", error);
      }
    };

    // Fetch leave data
    const fetchLeaveStats = async () => {
      try {
        const response = await API.get('api/leave/get.php');
        const leaveList = Array.isArray(response.data) ? response.data : response.data.data;

        if (Array.isArray(leaveList)) {
          const total = leaveList.length;
          const approved = leaveList.filter((leave) => leave.status?.toLowerCase() === 'approved').length;
          const rejected = leaveList.filter((leave) => leave.status?.toLowerCase() === 'rejected').length;
          const pending = leaveList.filter((leave) => leave.status?.toLowerCase() === 'pending').length;

          setLeaveStats({ total, approved, rejected, pending });
        }
      } catch (error) {
        console.error("Error fetching leave data:", error);
      }
    };

    // Fetch today's attendance
    const fetchTodayAttendance = async () => {
      try {
        const response = await API.post('api/attendance/get_attendance.php');

        const attendanceList = response.data?.data || [];
        const today = new Date().toISOString().split('T')[0]; // YYYY-MM-DD

        const todayRecords = attendanceList.filter((record) => record.date === today);

        const present = todayRecords.filter((record) => record.status?.toLowerCase() === 'present').length;
        const absent = todayRecords.filter((record) => record.status?.toLowerCase() === 'absent').length;

        setTodayAttendance({ present, absent });
      } catch (error) {
        console.error("Error fetching today's attendance:", error);
      }
    };

    fetchEmployeeCount();
    fetchLeaveStats();
    fetchTodayAttendance();
  }, []);

  // Card component for a clean, reusable design
  const DashboardCard = ({ title, value, icon: Icon, bgColor, textColor, onClick }) => (
    <div
      className={`relative rounded-3xl p-6 shadow-xl transform transition-all duration-300 hover:scale-[1.03] overflow-hidden cursor-pointer ${bgColor} ${textColor}`}
      onClick={onClick}
    >
      {/* Background shape */}
      <div className="absolute -top-10 -right-10 w-28 h-28 rounded-full opacity-20 transform rotate-12" style={{ background: `radial-gradient(circle, white, transparent 60%)` }}></div>
      <div className="flex items-center justify-between relative z-10">
        <div>
          <h3 className="text-sm font-semibold opacity-80">{title}</h3>
          <p className="text-4xl font-bold mt-2">{value}</p>
        </div>
        <div className="w-16 h-16 flex items-center justify-center rounded-full bg-white bg-opacity-20 backdrop-blur-sm shadow-inner">
          <Icon className="text-3xl" />
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen">
      <h1 className="text-3xl font-bold text-[#101c3d] mb-8">Admin Dashboard</h1>
      
      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6  mb-8">
        <DashboardCard
          title="Total Employees"
          value={totalEmployees}
          icon={FaUserTie}
          bgColor="bg-gradient-to-br from-blue-500 to-blue-700"
          textColor="text-white"
        />
        <DashboardCard
          title="New Leave Requests"
          value={leaveStats.pending}
          icon={FaHourglassHalf}
          bgColor="bg-gradient-to-br from-yellow-500 to-orange-500"
          textColor="text-white"
          onClick={() => navigate('/mainlayout/leave-requests')}
        />
        <DashboardCard
          title="Total Leave Applied"
          value={leaveStats.total}
          icon={FaCalendarCheck}
          bgColor="bg-gradient-to-br from-purple-500 to-indigo-600"
          textColor="text-white"
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        <DashboardCard
          title="Approved Leaves"
          value={leaveStats.approved}
          icon={FaCheckCircle}
          bgColor="bg-gradient-to-br from-green-500 to-green-700"
          textColor="text-white"
        />
        <DashboardCard
          title="Rejected Leaves"
          value={leaveStats.rejected}
          icon={FaTimesCircle}
          bgColor="bg-gradient-to-br from-red-500 to-red-700"
          textColor="text-white"
        />
        <DashboardCard
          title="Today's Present"
          value={todayAttendance.present}
          icon={FaCalendarCheck}
          bgColor="bg-gradient-to-br from-cyan-500 to-blue-500"
          textColor="text-white"
        />
        <DashboardCard
          title="Today's Absent"
          value={todayAttendance.absent}
          icon={FaCalendarTimes}
          bgColor="bg-gradient-to-br from-gray-500 to-gray-700 mb-12"
          textColor="text-white"
        />
      </div>
<TestTubeChart />
      {/* You can add the LeaveRequestTable component here if needed */}
      {/* <LeaveRequestTable /> */}
    </div>
  );
};

export default AdminDashboard;