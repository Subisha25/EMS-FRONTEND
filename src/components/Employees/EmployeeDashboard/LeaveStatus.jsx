// // import React, { useEffect, useState } from "react";
// // import axios from "axios";

// // const LeaveStatus = () => {
// //   const [leaves, setLeaves] = useState([]);
// //   const [employeeId, setEmployeeId] = useState(null);
// //   const [employeeName, setEmployeeName] = useState("");
// //   const [currentPage, setCurrentPage] = useState(1);
// //   const leavesPerPage = 10; // ✅ one page 10 leaves

// //   useEffect(() => {
// //     const user = JSON.parse(sessionStorage.getItem("user"));
// //     if (user && user.emp_id) {
// //       setEmployeeId(user.emp_id);
// //       const fullName = `${user.first_name} ${user.last_name}`;
// //       setEmployeeName(fullName);
// //     }
// //   }, []);

// //   useEffect(() => {
// //     if (employeeId) {
// //       axios
// //         .get(
// //           `http://localhost/ems-backend/api/leave/get.php?employee_id=${employeeId}`
// //         )
// //         .then((response) => {
// //           if (response.data.status === "success") {
// //             // ✅ sort descending (newest first) by id or date
// //             const sorted = [...response.data.data].sort(
// //               (a, b) => new Date(b.leave_from) - new Date(a.leave_from)
// //             );
// //             setLeaves(sorted);
// //           } else {
// //             setLeaves([]);
// //           }
// //         })
// //         .catch((error) => {
// //           console.error("Error fetching leave data:", error);
// //         });
// //     }
// //   }, [employeeId]);

// //   // 🎨 Status badge styles
// //   const getStatusStyle = (status) => {
// //     switch (status) {
// //       case "Approved":
// //         return "bg-green-100 text-green-700 border border-green-300";
// //       case "Rejected":
// //         return "bg-red-100 text-red-700 border border-red-300";
// //       default:
// //         return "bg-yellow-100 text-yellow-700 border border-yellow-300";
// //     }
// //   };

// //   // ✅ Pagination logic
// //   const indexOfLastLeave = currentPage * leavesPerPage;
// //   const indexOfFirstLeave = indexOfLastLeave - leavesPerPage;
// //   const currentLeaves = leaves.slice(indexOfFirstLeave, indexOfLastLeave);
// //   const totalPages = Math.ceil(leaves.length / leavesPerPage);

// //   return (
// //     <div className="p-4 md:p-10">
// //       {/* Employee Info */}
// //       <div className="mb-6 text-center">
// //         <p className="text-lg font-medium text-gray-700">
// //           Employee ID: <span className="font-bold">{employeeId}</span>
// //         </p>
// //         <p className="text-lg font-medium text-gray-700">
// //           Name: <span className="font-bold">{employeeName}</span>
// //         </p>
// //       </div>

// //       <h2 className="text-3xl font-bold text-center mb-6">Leave Status</h2>

// //       <div className="overflow-x-auto">
// //         <table className="min-w-full bg-white rounded-xl shadow-lg overflow-hidden">
// //           <thead>
// //             <tr className="bg-gradient-to-r from-purple-500 to-blue-500 text-white text-sm">
// //               <th className="py-3 px-4 text-left">Leave Type</th>
// //               <th className="py-3 px-4 text-left">Reason</th>
// //               <th className="py-3 px-4 text-left">From</th>
// //               <th className="py-3 px-4 text-left">To</th>
// //               <th className="py-3 px-4 text-center">Status</th>
// //             </tr>
// //           </thead>
// //           <tbody>
// //             {currentLeaves.length > 0 ? (
// //               currentLeaves.map((leave, index) => (
// //                 <tr
// //                   key={index}
// //                   className="border-b hover:bg-gray-50 text-sm"
// //                 >
// //                   <td className="py-2 px-4">{leave.leave_type}</td>
// //                   <td className="py-2 px-4">{leave.reason}</td>
// //                   <td className="py-2 px-4">{leave.leave_from}</td>
// //                   <td className="py-2 px-4">{leave.leave_to}</td>
// //                   <td className="py-2 px-4 text-center">
// //                     <span
// //                       className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusStyle(
// //                         leave.status
// //                       )}`}
// //                     >
// //                       {leave.status}
// //                     </span>
// //                   </td>
// //                 </tr>
// //               ))
// //             ) : (
// //               <tr>
// //                 <td
// //                   colSpan="5"
// //                   className="py-4 text-center text-gray-500"
// //                 >
// //                   No leave records found.
// //                 </td>
// //               </tr>
// //             )}
// //           </tbody>
// //         </table>
// //       </div>

// //       {/* ✅ Pagination Controls */}
// //       {totalPages > 1 && (
// //         <div className="flex justify-center items-center gap-2 mt-6">
// //           <button
// //             onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
// //             className="px-3 py-1 bg-gray-200 rounded disabled:opacity-50"
// //             disabled={currentPage === 1}
// //           >
// //             Prev
// //           </button>

// //           <span className="text-sm font-semibold">
// //             Page {currentPage} of {totalPages}
// //           </span>

// //           <button
// //             onClick={() =>
// //               setCurrentPage((prev) => Math.min(prev + 1, totalPages))
// //             }
// //             className="px-3 py-1 bg-gray-200 rounded disabled:opacity-50"
// //             disabled={currentPage === totalPages}
// //           >
// //             Next
// //           </button>
// //         </div>
// //       )}
// //     </div>
// //   );
// // };

// // export default LeaveStatus;

// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { format } from 'date-fns';

// const LeaveStatus = () => {
//   const [leaves, setLeaves] = useState([]);
//   const [employeeId, setEmployeeId] = useState(null);
//   const [employeeName, setEmployeeName] = useState('');
//   const [currentPage, setCurrentPage] = useState(1);
//   const leavesPerPage = 10;

//   useEffect(() => {
//     const user = JSON.parse(sessionStorage.getItem('user'));
//     if (user && user.emp_id) {
//       setEmployeeId(user.emp_id);
//       const fullName = `${user.first_name} ${user.last_name}`;
//       setEmployeeName(fullName);
//     }
//   }, []);

//   useEffect(() => {
//     if (employeeId) {
//       axios
//         .get(`http://localhost/ems-backend/api/leave/get.php?employee_id=${employeeId}`)
//         .then((response) => {
//           if (response.data.status === 'success') {
//             const fetchedLeaves = response.data.data;
//             // ✅ Sort leaves by their leave_id in descending order (newest first)
//             const sortedLeaves = fetchedLeaves.sort((a, b) => b.id - a.id);
//             setLeaves(sortedLeaves);
//           } else {
//             setLeaves([]);
//           }
//         })
//         .catch((error) => {
//           console.error('Error fetching leave data:', error);
//         });
//     }
//   }, [employeeId]);

//   // 🎨 Status badge styles
//   const getStatusStyle = (status) => {
//     switch (status) {
//       case 'Approved':
//         return 'bg-green-100 text-green-700 border border-green-300';
//       case 'Rejected':
//         return 'bg-red-100 text-red-700 border border-red-300';
//       default:
//         return 'bg-yellow-100 text-yellow-700 border border-yellow-300';
//     }
//   };

//   // 📄 Pagination logic
//   const indexOfLastLeave = currentPage * leavesPerPage;
//   const indexOfFirstLeave = indexOfLastLeave - leavesPerPage;
//   const currentLeaves = leaves.slice(indexOfFirstLeave, indexOfLastLeave);
//   const totalPages = Math.ceil(leaves.length / leavesPerPage);

//   const handlePageChange = (pageNumber) => {
//     setCurrentPage(pageNumber);
//   };

//   return (
//     <div className="p-4 md:p-10">
//       {/* Employee Info */}
//       <div className="mb-6 text-center">
//         <p className="text-lg font-medium text-gray-700">
//           Employee ID: <span className="font-bold">{employeeId}</span>
//         </p>
//         <p className="text-lg font-medium text-gray-700">
//           Name: <span className="font-bold">{employeeName}</span>
//         </p>
//       </div>

//       <h2 className="text-3xl font-bold text-center mb-6">Leave Status</h2>

//       <div className="overflow-x-auto">
//         <table className="min-w-full bg-white rounded-xl shadow-lg overflow-hidden">
//           <thead>
//             <tr className="bg-gradient-to-r from-purple-500 to-blue-500 text-white text-sm">
//               <th className="py-3 px-4 text-left">Leave Type</th>
//               <th className="py-3 px-4 text-left">Reason</th>
//               <th className="py-3 px-4 text-left">From</th>
//               <th className="py-3 px-4 text-left">To</th>
//               <th className="py-3 px-4 text-center">Status</th>
//             </tr>
//           </thead>
//           <tbody>
//             {currentLeaves.length > 0 ? (
//               currentLeaves.map((leave, index) => (
//                 <tr key={index} className="border-b hover:bg-gray-50 text-sm">
//                   <td className="py-2 px-4">{leave.leave_type}</td>
//                   <td className="py-2 px-4">{leave.reason}</td>
//                   <td className="py-2 px-4">{leave.leave_from}</td>
//                   <td className="py-2 px-4">{leave.leave_to}</td>
//                   <td className="py-2 px-4 text-center">
//                     <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusStyle(leave.status)}`}>
//                       {leave.status}
//                     </span>
//                   </td>
//                 </tr>
//               ))
//             ) : (
//               <tr>
//                 <td colSpan="5" className="py-4 text-center text-gray-500">
//                   No leave records found.
//                 </td>
//               </tr>
//             )}
//           </tbody>
//         </table>
//       </div>

//       {/* Pagination Controls */}
//       {leaves.length > leavesPerPage && (
//         <div className="flex justify-center mt-6 space-x-2">
//           {Array.from({ length: totalPages }, (_, i) => (
//             <button
//               key={i}
//               onClick={() => handlePageChange(i + 1)}
//               className={`px-4 py-2 rounded-md ${
//                 currentPage === i + 1
//                   ? 'bg-blue-500 text-white'
//                   : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
//               }`}
//             >
//               {i + 1}
//             </button>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default LeaveStatus;

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';
import API from '../../../utils/api';

const LeaveStatus = () => {
  const [leaves, setLeaves] = useState([]);
  const [employeeId, setEmployeeId] = useState(null);
  const [employeeName, setEmployeeName] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const leavesPerPage = 10;

  useEffect(() => {
    const user = JSON.parse(sessionStorage.getItem('user'));
    if (user && user.emp_id) {
      setEmployeeId(user.emp_id);
      const fullName = `${user.first_name} ${user.last_name}`;
      setEmployeeName(fullName);
    }
  }, []);

  useEffect(() => {
    if (employeeId) {
     API
        .get(`api/leave/get.php?employee_id=${employeeId}`)
        .then((response) => {
          if (response.data.status === 'success') {
            const fetchedLeaves = response.data.data;
            // Sort leaves by their leave_id in descending order (newest first)
            const sortedLeaves = fetchedLeaves.sort((a, b) => b.id - a.id);
            setLeaves(sortedLeaves);
          } else {
            setLeaves([]);
          }
        })
        .catch((error) => {
          console.error('Error fetching leave data:', error);
        });
    }
  }, [employeeId]);

  // Status badge styles
  const getStatusStyle = (status) => {
    switch (status) {
      case 'Approved':
        return 'bg-green-100 text-green-700 font-semibold';
      case 'Rejected':
        return 'bg-red-100 text-red-700 font-semibold';
      case 'Pending':
        return 'bg-yellow-100 text-yellow-700 font-semibold';
      default:
        return 'bg-gray-100 text-gray-700 font-semibold';
    }
  };

  // Pagination logic
  const indexOfLastLeave = currentPage * leavesPerPage;
  const indexOfFirstLeave = indexOfLastLeave - leavesPerPage;
  const currentLeaves = leaves.slice(indexOfFirstLeave, indexOfLastLeave);
  const totalPages = Math.ceil(leaves.length / leavesPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  
  const renderPageNumbers = () => {
    const pageNumbers = [];
    const maxPagesToShow = 5; // Show a maximum of 5 page numbers
    let startPage = Math.max(1, currentPage - Math.floor(maxPagesToShow / 2));
    let endPage = Math.min(totalPages, startPage + maxPagesToShow - 1);

    if (endPage - startPage + 1 < maxPagesToShow && totalPages > maxPagesToShow) {
      startPage = Math.max(1, endPage - maxPagesToShow + 1);
    }

    for (let i = startPage; i <= endPage; i++) {
      pageNumbers.push(
        <button
          key={i}
          onClick={() => handlePageChange(i)}
          className={`h-10 w-10 flex items-center justify-center rounded-lg transition-colors duration-200 ${
            currentPage === i
              ? 'bg-[#101c3d] text-white shadow-md'
              : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
          }`}
        >
          {i}
        </button>
      );
    }
    return pageNumbers;
  };


  return (
    <div className="bg-gray-50 min-h-screen p-6">
      <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-xl p-8">
        <div className="flex flex-col items-center mb-6">
          <h2 className="text-3xl font-bold text-[#101c3d] mb-2">Leave Status</h2>
          <p className="text-gray-600 font-medium">
            <span className="font-semibold text-gray-800">{employeeName}</span> (ID: {employeeId})
          </p>
        </div>

        <div className="overflow-x-auto rounded-xl border border-gray-200">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-100">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                  Leave Type
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                  Reason
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                  From
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                  To
                </th>
                <th scope="col" className="px-6 py-3 text-center text-xs font-semibold text-gray-700 uppercase tracking-wider">
                  Status
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {currentLeaves.length > 0 ? (
                currentLeaves.map((leave, index) => (
                  <tr key={leave.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">{leave.leave_type}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{leave.reason}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{leave.leave_from}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{leave.leave_to}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-center">
                      <span className={`px-3 py-1 rounded-full text-xs ${getStatusStyle(leave.status)}`}>
                        {leave.status}
                      </span>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="5" className="px-6 py-10 text-center text-gray-500 text-lg">
                    No leave records found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* Pagination Controls */}
        {leaves.length > leavesPerPage && (
          <div className="flex items-center justify-center mt-8 space-x-2">
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className="h-10 w-10 flex items-center justify-center rounded-lg text-gray-600 bg-gray-200 hover:bg-gray-300 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200"
            >
              <FaAngleLeft />
            </button>
            
            {renderPageNumbers()}
            
            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="h-10 w-10 flex items-center justify-center rounded-lg text-gray-600 bg-gray-200 hover:bg-gray-300 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200"
            >
              <FaAngleRight />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default LeaveStatus;