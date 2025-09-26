// // import React from 'react';

// // const LeaveManagement = () => {
// //   const leaveRequests = [
// //     {
// //       id: 1,
// //       employeeId: 'EMP001',
// //       name: 'John Doe',
// //       from: '2025-07-01',
// //       to: '2025-07-05',
// //       leaveType: 'Sick Leave',
// //       reason: 'Fever and cold',
// //       postingDate: '2025-06-28',
// //       status: 'Pending',
// //     },
// //     {
// //       id: 2,
// //       employeeId: 'EMP002',
// //       name: 'Jane Smith',
// //       from: '2025-07-10',
// //       to: '2025-07-12',
// //       leaveType: 'Casual Leave',
// //       reason: 'Family function',
// //       postingDate: '2025-07-01',
// //       status: 'Approved',
// //     },
// //   ];

// //   const getStatusColor = (status) => {
// //     switch (status) {
// //       case 'Approved':
// //         return 'text-green-600 bg-green-100';
// //       case 'Rejected':
// //         return 'text-red-600 bg-red-100';
// //       default:
// //         return 'text-yellow-600 bg-yellow-100';
// //     }
// //   };

// //   return (
// //     <div className="p-4 md:p-10 bg-white rounded-xl shadow-lg">
// //       <h1 className="text-2xl font-bold text-blue-800 mb-6">Leave Management</h1>
// //       <div className="overflow-x-auto">
// //         <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-sm">
// //           <thead>
// //             <tr className="bg-blue-100 text-blue-800 font-semibold text-sm">
// //               <th className="py-2 px-4 border">#</th>
// //               <th className="py-2 px-4 border">Employee ID</th>
// //               <th className="py-2 px-4 border">Name</th>
// //               <th className="py-2 px-4 border">From</th>
// //               <th className="py-2 px-4 border">To</th>
// //               <th className="py-2 px-4 border">Leave Type</th>
// //               <th className="py-2 px-4 border">Reason</th>
// //               <th className="py-2 px-4 border">Posting Date</th>
// //               <th className="py-2 px-4 border">Status</th>
// //             </tr>
// //           </thead>
// //           <tbody>
// //             {leaveRequests.map((req, index) => (
// //               <tr key={req.id} className="text-center text-sm">
// //                 <td className="py-2 px-4 border">{index + 1}</td>
// //                 <td className="py-2 px-4 border">{req.employeeId}</td>
// //                 <td className="py-2 px-4 border">{req.name}</td>
// //                 <td className="py-2 px-4 border">{req.from}</td>
// //                 <td className="py-2 px-4 border">{req.to}</td>
// //                 <td className="py-2 px-4 border">{req.leaveType}</td>
// //                 <td className="py-2 px-4 border">{req.reason}</td>
// //                 <td className="py-2 px-4 border">{req.postingDate}</td>
// //                 <td className={`py-2 px-4 border font-medium rounded ${getStatusColor(req.status)}`}>
// //                   {req.status}
// //                 </td>
// //               </tr>
// //             ))}
// //           </tbody>
// //         </table>
// //       </div>
// //     </div>
// //   );
// // };

// // export default LeaveManagement;


// // import React, { useEffect, useState } from 'react';

// // const LeaveManagement = () => {
// //   const [leaveRequests, setLeaveRequests] = useState([]);

// //   useEffect(() => {
// //     fetch('http://localhost/ems-backend/api/leave/get.php')
// //       .then(res => res.json())
// //       .then(data => {
// //         if (data.status === 'success') {
// //           setLeaveRequests(data.data);
// //         } else {
// //           console.error('Failed to fetch leaves');
// //         }
// //       })
// //       .catch(err => console.error(err));
// //   }, []);

// //   const getStatusColor = (status) => {
// //     switch (status) {
// //       case 'Approved':
// //         return 'text-green-600 bg-green-100';
// //       case 'Rejected':
// //         return 'text-red-600 bg-red-100';
// //       default:
// //         return 'text-yellow-600 bg-yellow-100';
// //     }
// //   };

// //   return (
// //     <div className="p-4 md:p-10 bg-white rounded-xl shadow-lg">
// //       <h1 className="text-2xl font-bold text-blue-800 mb-6">Leave Management</h1>
// //       <div className="overflow-x-auto">
// //         <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-sm">
// //           <thead>
// //             <tr className="bg-blue-100 text-blue-800 font-semibold text-sm">
// //               <th className="py-2 px-4 border">#</th>
// //               <th className="py-2 px-4 border">Employee ID</th>
// //               <th className="py-2 px-4 border">Name</th>
// //               <th className="py-2 px-4 border">From</th>
// //               <th className="py-2 px-4 border">To</th>
// //               <th className="py-2 px-4 border">Leave Type</th>
// //               <th className="py-2 px-4 border">Reason</th>
// //               <th className="py-2 px-4 border">Status</th>
// //             </tr>
// //           </thead>
// //           <tbody>
// //             {leaveRequests.length === 0 ? (
// //               <tr><td colSpan="9" className="text-center py-4">No leave requests found.</td></tr>
// //             ) : (
// //               leaveRequests.map((req, index) => (
// //                 <tr key={req.id} className="text-center text-sm">
// //                   <td className="py-2 px-4 border">{index + 1}</td>
// //                   <td className="py-2 px-4 border">{req.employee_id}</td>
// //                   <td className="py-2 px-4 border">{req.name}</td>
// //                   <td className="py-2 px-4 border">{req.leave_from}</td>
// //                   <td className="py-2 px-4 border">{req.leave_to}</td>
// //                   <td className="py-2 px-4 border">{req.leave_type}</td>
// //                   <td className="py-2 px-4 border">{req.reason}</td>
// //                   <td className={`py-2 px-4 border font-medium rounded ${getStatusColor(req.status)}`}>
// //                     {req.status}
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

// // export default LeaveManagement;


// import React, { useEffect, useState } from 'react';

// const LeaveManagement = () => {
//   const [leaveRequests, setLeaveRequests] = useState([]);

//   useEffect(() => {
//     fetchLeaves();
//   }, []);

//   const fetchLeaves = () => {
//     fetch('http://localhost/ems-backend/api/leave/get.php')
//       .then(res => res.json())
//       .then(data => {
//         if (data.status === 'success') {
//           setLeaveRequests(data.data);
//         } else {
//           console.error('Failed to fetch leaves');
//         }
//       })
//       .catch(err => console.error(err));
//   };

//   const updateLeaveStatus = (id, status) => {
//     fetch(`http://localhost/EMS-backend/api/leave/approve_reject.php?id=${id}&status=${status}`)
//       .then(() => fetchLeaves())
//       .catch(err => console.error('Status update failed:', err));
//   };

//   const getStatusColor = (status) => {
//     switch (status) {
//       case 'Approved':
//         return 'text-green-600 bg-green-100';
//       case 'Rejected':
//         return 'text-red-600 bg-red-100';
//       default:
//         return 'text-yellow-600 bg-yellow-100';
//     }
//   };

//   return (
//     <div className="p-4 md:p-10 bg-white rounded-xl shadow-lg">
//       <h1 className="text-2xl font-bold text-blue-800 mb-6">Leave Management</h1>
//       <div className="overflow-x-auto">
//         <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-sm">
//           <thead>
//             <tr className="bg-blue-100 text-blue-800 font-semibold text-sm">
//               <th className="py-2 px-4 border">#</th>
//               <th className="py-2 px-4 border">Employee ID</th>
//               <th className="py-2 px-4 border">Name</th>
//               <th className="py-2 px-4 border">From</th>
//               <th className="py-2 px-4 border">To</th>
//               <th className="py-2 px-4 border">Leave Type</th>
//               <th className="py-2 px-4 border">Reason</th>
//               <th className="py-2 px-4 border">Action</th>
//             </tr>
//           </thead>
//           <tbody>
//             {leaveRequests.length === 0 ? (
//               <tr><td colSpan="9" className="text-center py-4">No leave requests found.</td></tr>
//             ) : (
//               leaveRequests.map((req, index) => (
//                 <tr key={req.id} className="text-center text-sm">
//                   <td className="py-2 px-4 border">{index + 1}</td>
//                   <td className="py-2 px-4 border">{req.employee_id}</td>
//                   <td className="py-2 px-4 border">{req.name}</td>
//                   <td className="py-2 px-4 border">{req.leave_from}</td>
//                   <td className="py-2 px-4 border">{req.leave_to}</td>
//                   <td className="py-2 px-4 border">{req.leave_type}</td>
//                   <td className="py-2 px-4 border">{req.reason}</td>
//                   <td className="py-2 px-4 border">
//                     {req.status === 'Pending' ? (
//                       <div className="flex gap-2 justify-center">
//                         <button
//                           onClick={() => updateLeaveStatus(req.id, 'Approved')}
//                           className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600"
//                         >
//                           Approve
//                         </button>
//                         <button
//                           onClick={() => updateLeaveStatus(req.id, 'Rejected')}
//                           className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
//                         >
//                           Reject
//                         </button>
//                       </div>
//                     ) : (
//                       <span className={`px-2 py-1 rounded text-sm font-medium ${getStatusColor(req.status)}`}>
//                         {req.status}
//                       </span>
//                     )}
//                   </td>
//                 </tr>
//               ))
//             )}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default LeaveManagement;



// import React, { useEffect, useState } from 'react';

// const LeaveManagement = () => {
//   const [leaveRequests, setLeaveRequests] = useState([]);

//   useEffect(() => {
//     fetchLeaves();
//   }, []);

//   const fetchLeaves = () => {
//     fetch('http://localhost/ems-backend/api/leave/get.php')
//       .then(res => res.json())
//       .then(data => {
//         if (data.status === 'success') {
//           setLeaveRequests(data.data);
//         } else {
//           console.error('Failed to fetch leaves');
//         }
//       })
//       .catch(err => console.error(err));
//   };

//   // 🔴🟡🟢 Get background and text color based on status
//   const getStatusStyle = (status) => {
//     switch (status) {
//       case 'Approved':
//         return 'bg-green-600 text-white';
//       case 'Rejected':
//         return 'bg-red-600 text-white';
//       case 'Pending':
//       default:
//         return 'bg-yellow-600 text-white';
//     }
//   };

//   return (
//     <div className="p-4 md:p-10 bg-white rounded-xl shadow-lg">
//       <h1 className="text-2xl font-bold text-blue-800 mb-6">Leave Management</h1>
//       <div className="overflow-x-auto">
//         <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-sm">
//           <thead>
//             <tr className="bg-blue-100 text-blue-800 font-semibold text-sm">
//               <th className="py-2 px-4 border">#</th>
//               <th className="py-2 px-4 border">Employee ID</th>
//               <th className="py-2 px-4 border">Name</th>
//               <th className="py-2 px-4 border">From</th>
//               <th className="py-2 px-4 border">To</th>
//               <th className="py-2 px-4 border">Leave Type</th>
//               <th className="py-2 px-4 border">Reason</th>
//               <th className="py-2 px-4 border">Status</th>
//             </tr>
//           </thead>
//           <tbody>
//             {leaveRequests.length === 0 ? (
//               <tr>
//                 <td colSpan="8" className="text-center py-4 text-gray-500">
//                   No leave requests found.
//                 </td>
//               </tr>
//             ) : (
//               leaveRequests.map((req, index) => (
//                 <tr key={req.id} className="text-center text-sm">
//                   <td className="py-2 px-4 border">{index + 1}</td>
//                   <td className="py-2 px-4 border">{req.employee_id}</td>
//                   <td className="py-2 px-4 border">{req.name}</td>
//                   <td className="py-2 px-4 border">{req.leave_from}</td>
//                   <td className="py-2 px-4 border">{req.leave_to}</td>
//                   <td className="py-2 px-4 border">{req.leave_type}</td>
//                   <td className="py-2 px-4 border">{req.reason}</td>
//                   <td className= {`py-2 px-4 border  ${getStatusStyle(req.status)}`}>
//                     <span className={`px-3 py-1 rounded-full font-medium`}>
//                       {req.status}
//                     </span>
//                   </td>
//                 </tr>
//               ))
//             )}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default LeaveManagement;

// import React, { useEffect, useState } from 'react';

// const LeaveManagement = () => {
//   const [leaveRequests, setLeaveRequests] = useState([]);

//   useEffect(() => {
//     fetchLeaves();
//   }, []);

//   const fetchLeaves = () => {
//     fetch('http://localhost/ems-backend/api/leave/get.php')
//       .then(res => res.json())
//       .then(data => {
//         if (data.status === 'success') {
//           setLeaveRequests(data.data);
//         } else {
//           console.error('Failed to fetch leaves');
//         }
//       })
//       .catch(err => console.error(err));
//   };

//   const getStatusStyle = (status) => {
//     switch (status) {
//       case 'Approved':
//         return 'bg-green-100 text-green-700 border border-green-300';
//       case 'Rejected':
//         return 'bg-red-100 text-red-700 border border-red-300';
//       case 'Pending':
//       default:
//         return 'bg-yellow-100 text-yellow-700 border border-yellow-300';
//     }
//   };

//   return (
//     <div className="">
//       <h1 className="text-center text-3xl font-bold mb-6">Leave Management</h1>
//       <div className="overflow-x-auto">
//         <table className="min-w-full bg-white rounded-xl shadow-lg overflow-hidden">
//           <thead>
//             <tr className="bg-[#101c3d] text-white text-sm">
//               <th className="py-3 px-4 text-left">#</th>
//               <th className="py-3 px-4 text-left">Employee ID</th>
//               <th className="py-3 px-4 text-left">Name</th>
//               <th className="py-3 px-4 text-left">From</th>
//               <th className="py-3 px-4 text-left">To</th>
//               <th className="py-3 px-4 text-left">Leave Type</th>
//               <th className="py-3 px-4 text-left">Reason</th>
//               <th className="py-3 px-4 text-center">Status</th>
//             </tr>
//           </thead>
//           <tbody>
//             {leaveRequests.length === 0 ? (
//               <tr>
//                 <td colSpan="8" className="text-center py-4 text-gray-500">
//                   No leave requests found.
//                 </td>
//               </tr>
//             ) : (
//               leaveRequests.map((req, index) => (
//                 <tr key={req.id} className="border-b hover:bg-gray-50 text-sm">
//                   <td className="py-2 px-4">{index + 1}</td>
//                   <td className="py-2 px-4">{req.employee_id}</td>
//                   <td className="py-2 px-4">{req.name}</td>
//                   <td className="py-2 px-4">{req.leave_from}</td>
//                   <td className="py-2 px-4">{req.leave_to}</td>
//                   <td className="py-2 px-4">{req.leave_type}</td>
//                   <td className="py-2 px-4">{req.reason}</td>
//                   <td className="py-2 px-4 text-center">
//                     <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusStyle(req.status)}`}>
//                       {req.status}
//                     </span>
//                   </td>
//                 </tr>
//               ))
//             )}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default LeaveManagement;

import React, { useEffect, useState } from "react";
import API from "../../../utils/api";

const LeaveManagement = () => {
  const [leaveRequests, setLeaveRequests] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 10; // 🔹 fixed 10 records per page

  useEffect(() => {
    fetchLeaves();
  }, []);
  const fetchLeaves = async () => {
  try {
    const res = await API.get("api/leave/get.php"); // ✅ baseURL auto add aagum
    if (res.data.status === "success") {
      setLeaveRequests(res.data.data);
    } else {
      console.error("Failed to fetch leaves");
    }
  } catch (err) {
    console.error("Error fetching leaves:", err);
  }
};

  // const fetchLeaves = () => {
  //   fetch("http://localhost/ems-backend/api/leave/get.php")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       if (data.status === "success") {
  //         setLeaveRequests(data.data);
  //       } else {
  //         console.error("Failed to fetch leaves");
  //       }
  //     })
  //     .catch((err) => console.error(err));
  // };

  const getStatusStyle = (status) => {
    switch (status) {
      case "Approved":
        return "bg-green-100 text-green-700 border border-green-300";
      case "Rejected":
        return "bg-red-100 text-red-700 border border-red-300";
      case "Pending":
      default:
        return "bg-yellow-100 text-yellow-700 border border-yellow-300";
    }
  };

  // 🔍 Filter leaves by search term
  const filteredLeaves = leaveRequests.filter(
    (req) =>
      req.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      req.employee_id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      req.leave_type.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // 📑 Pagination logic
  const indexOfLastRow = currentPage * rowsPerPage;
  const indexOfFirstRow = indexOfLastRow - rowsPerPage;
  const currentRows = filteredLeaves.slice(indexOfFirstRow, indexOfLastRow);
  const totalPages = Math.ceil(filteredLeaves.length / rowsPerPage);

  return (
    <div className="p-6">
      <h1 className="text-center text-3xl font-bold mb-6 text-[#101c3d]">
        Leave Management
      </h1>

      {/* 🔍 Search Box */}
      <div className="flex justify-end mb-4">
        <input
          type="text"
          placeholder="Search by ID, Name, or Leave Type..."
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value);
            setCurrentPage(1); // reset to first page when searching
          }}
          className="px-4 py-2 border border-gray-300 rounded-lg w-72 focus:ring-2 focus:ring-[#101c3d] outline-none"
        />
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full bg-white rounded-xl shadow-lg overflow-hidden text-sm">
          <thead>
            <tr className="bg-[#101c3d] text-white">
              <th className="py-3 px-4 text-left">#</th>
              <th className="py-3 px-4 text-left">Employee ID</th>
              <th className="py-3 px-4 text-left">Name</th>
              <th className="py-3 px-4 text-left">From</th>
              <th className="py-3 px-4 text-left">To</th>
              <th className="py-3 px-4 text-left">Leave Type</th>
              <th className="py-3 px-4 text-left">Reason</th>
              <th className="py-3 px-4 text-center">Status</th>
            </tr>
          </thead>
          <tbody>
            {currentRows.length === 0 ? (
              <tr>
                <td colSpan="8" className="text-center py-6 text-gray-500">
                  No leave requests found.
                </td>
              </tr>
            ) : (
              currentRows.map((req, index) => (
                <tr
                  key={req.id}
                  className="border-b hover:bg-gray-50 transition"
                >
                  <td className="py-2 px-4">{indexOfFirstRow + index + 1}</td>
                  <td className="py-2 px-4">{req.employee_id}</td>
                  <td className="py-2 px-4">{req.name}</td>
                  <td className="py-2 px-4">{req.leave_from}</td>
                  <td className="py-2 px-4">{req.leave_to}</td>
                  <td className="py-2 px-4">{req.leave_type}</td>
                  <td className="py-2 px-4">{req.reason}</td>
                  <td className="py-2 px-4 text-center">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusStyle(
                        req.status
                      )}`}
                    >
                      {req.status}
                    </span>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {/* 📑 Pagination Controls */}
      {totalPages > 1 && (
        <div className="flex justify-between items-center mt-6 text-sm">
          <p className="text-gray-600">
            Page {currentPage} of {totalPages}
          </p>
          <div className="flex gap-2">
            <button
              disabled={currentPage === 1}
              onClick={() => setCurrentPage((prev) => prev - 1)}
              className={`px-4 py-2 rounded-md font-semibold ${
                currentPage === 1
                  ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                  : "bg-[#101c3d] text-white hover:bg-[#0d1530]"
              }`}
            >
              Prev
            </button>
            <button
              disabled={currentPage === totalPages}
              onClick={() => setCurrentPage((prev) => prev + 1)}
              className={`px-4 py-2 rounded-md font-semibold ${
                currentPage === totalPages
                  ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                  : "bg-[#101c3d] text-white hover:bg-[#0d1530]"
              }`}
            >
              Next
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default LeaveManagement;

