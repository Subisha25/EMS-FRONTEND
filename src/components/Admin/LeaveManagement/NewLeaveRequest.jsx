// // import React, { useEffect, useState } from "react";
// // import { useNavigate } from "react-router-dom";
// //   import API from "../../../utils/api";
// // import { showError, showSuccess } from "../../utils/toast";

// // const LeaveRequestTable = () => {
// //   const [leaveRequests, setLeaveRequests] = useState([]);
// //   const [currentPage, setCurrentPage] = useState(1);
// //   const rowsPerPage = 5;
// //   const navigate = useNavigate();

// //   useEffect(() => {
// //     fetchLeaves();
// //   }, []);


// // // ✅ Fetch leave requests
// // const fetchLeaves = async () => {
// //   try {
// //     const res = await API.get("api/leave/get.php");
// //     if (res.data.status === "success") {
// //       setLeaveRequests(res.data.data);
// //     } else {
// //       console.error("Failed to fetch leaves");
// //     }
// //   } catch (err) {
// //     console.error("Error fetching leaves:", err);
// //   }
// // };

// // // ✅ Update leave status
// // const updateLeaveStatus = async (id, status) => {
// //   const confirmAction = window.confirm(
// //     `Are you sure you want to ${status} this leave request?`
// //   );
// //   if (!confirmAction) return;

// //   try {
// //     await API.get(`api/leave/approve_reject.php?id=${id}&status=${status}`);

// //     // ✅ Show toast after success
// //     showSuccess(`Leave ${status} Successfully`);

// //     // ✅ Navigate after 3s (same as toast autoClose)
// //     setTimeout(() => {
// //       navigate("/mainlayout/all-leaves");
// //     }, 3000);
// //   } catch (err) {
// //     console.error("Status update failed:", err);
// //     showError("Something went wrong. Please try again!");
// //   }
// // };



// //   // const fetchLeaves = () => {
// //   //   fetch("http://localhost/ems-backend/api/leave/get.php")
// //   //     .then((res) => res.json())
// //   //     .then((data) => {
// //   //       if (data.status === "success") {
// //   //         setLeaveRequests(data.data);
// //   //       } else {
// //   //         console.error("Failed to fetch leaves");
// //   //       }
// //   //     })
// //   //     .catch((err) => console.error(err));
// //   // };

// //   // const updateLeaveStatus = (id, status) => {
// //   //   const confirmAction = window.confirm(
// //   //     `Are you sure you want to ${status} this leave request?`
// //   //   );
// //   //   if (!confirmAction) return;

// //   //   fetch(
// //   //     `http://localhost/EMS-backend/api/leave/approve_reject.php?id=${id}&status=${status}`
// //   //   )
// //   //     .then(() => {
// //   //       navigate("/mainlayout/all-leaves");
// //   //     })
// //   //     .catch((err) => console.error("Status update failed:", err));
// //   // };

// //   // Filter only pending leaves
// //   const pendingRequests = leaveRequests.filter(
// //     (req) => req.status === "Pending"
// //   );

// //   // Pagination logic
// //   const indexOfLastRow = currentPage * rowsPerPage;
// //   const indexOfFirstRow = indexOfLastRow - rowsPerPage;
// //   const currentRows = pendingRequests.slice(indexOfFirstRow, indexOfLastRow);
// //   const totalPages = Math.ceil(pendingRequests.length / rowsPerPage);

// //   return (
// //     <div className="p-6 md:p-10 bg-white rounded-xl shadow-lg">
// //       <h1 className="text-2xl font-bold text-[#101c3d] mb-6 border-b pb-3">
// //         New Leave Requests
// //       </h1>

// //       <div className="overflow-x-auto rounded-lg border">
// //         <table className="min-w-full text-sm">
// //           <thead className="bg-[#101c3d] text-white text-left">
// //             <tr>
// //               <th className="py-3 px-4">#</th>
// //               <th className="py-3 px-4">Employee ID</th>
// //               <th className="py-3 px-4">Name</th>
// //               <th className="py-3 px-4">From</th>
// //               <th className="py-3 px-4">To</th>
// //               <th className="py-3 px-4">Leave Type</th>
// //               <th className="py-3 px-4">Reason</th>
// //               <th className="py-3 px-4 text-center">Action</th>
// //             </tr>
// //           </thead>

// //           <tbody>
// //             {currentRows.length === 0 ? (
// //               <tr>
// //                 <td
// //                   colSpan="8"
// //                   className="text-center py-6 text-gray-500 italic"
// //                 >
// //                   No pending leave requests.
// //                 </td>
// //               </tr>
// //             ) : (
// //               currentRows.map((req, index) => (
// //                 <tr
// //                   key={req.id}
// //                   className="border-b hover:bg-gray-50 text-gray-700"
// //                 >
// //                   <td className="py-3 px-4">
// //                     {indexOfFirstRow + index + 1}
// //                   </td>
// //                   <td className="py-3 px-4">{req.employee_id}</td>
// //                   <td className="py-3 px-4">{req.name}</td>
// //                   <td className="py-3 px-4">{req.leave_from}</td>
// //                   <td className="py-3 px-4">{req.leave_to}</td>
// //                   <td className="py-3 px-4">{req.leave_type}</td>
// //                   <td className="py-3 px-4">{req.reason}</td>
// //                   <td className="py-3 px-4">
// //                     <div className="flex gap-2 justify-center">
// //                       <button
// //                         onClick={() => updateLeaveStatus(req.id, "Approved")}
// //                         className="bg-green-500 text-white px-3 py-1 rounded-md hover:bg-green-600 transition"
// //                       >
// //                         Approve
// //                       </button>
// //                       <button
// //                         onClick={() => updateLeaveStatus(req.id, "Rejected")}
// //                         className="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600 transition"
// //                       >
// //                         Reject
// //                       </button>
// //                     </div>
// //                   </td>
// //                 </tr>
// //               ))
// //             )}
// //           </tbody>
// //         </table>
// //       </div>

// //       {/* Pagination Controls */}
// //       {totalPages > 1 && (
// //         <div className="flex justify-between items-center mt-6 text-sm">
// //           <p className="text-gray-600">
// //             Page {currentPage} of {totalPages}
// //           </p>
// //           <div className="flex gap-2">
// //             <button
// //               disabled={currentPage === 1}
// //               onClick={() => setCurrentPage((prev) => prev - 1)}
// //               className={`px-3 py-1 rounded-md border ${
// //                 currentPage === 1
// //                   ? "bg-gray-200 text-gray-400 cursor-not-allowed"
// //                   : "bg-white hover:bg-gray-100 text-gray-700"
// //               }`}
// //             >
// //               Prev
// //             </button>
// //             <button
// //               disabled={currentPage === totalPages}
// //               onClick={() => setCurrentPage((prev) => prev + 1)}
// //               className={`px-3 py-1 rounded-md border ${
// //                 currentPage === totalPages
// //                   ? "bg-gray-200 text-gray-400 cursor-not-allowed"
// //                   : "bg-white hover:bg-gray-100 text-gray-700"
// //               }`}
// //             >
// //               Next
// //             </button>
// //           </div>
// //         </div>
// //       )}
// //     </div>
// //   );
// // };

// // export default LeaveRequestTable;

// import React, { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import API from "../../../utils/api";
// import { showError, showSuccess } from "../../utils/toast";

// // Custom Confirm Modal Component
// const ConfirmModal = ({ isOpen, onClose, onConfirm, action, employeeName }) => {
//   if (!isOpen) return null;

//   const isApprove = action === "Approved";
  
//   return (
//     <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
//       <div className="bg-white rounded-xl shadow-2xl max-w-md w-full transform transition-all duration-300 scale-100">
//         {/* Header */}
//         <div className={`px-6 py-4 rounded-t-xl ${isApprove ? 'bg-green-50 border-b border-green-100' : 'bg-red-50 border-b border-red-100'}`}>
//           <div className="flex items-center gap-3">
//             {isApprove ? (
//               <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
//                 <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
//                 </svg>
//               </div>
//             ) : (
//               <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center">
//                 <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
//                 </svg>
//               </div>
//             )}
//             <h3 className={`text-lg font-semibold ${isApprove ? 'text-green-800' : 'text-red-800'}`}>
//               {isApprove ? 'Approve Leave Request' : 'Reject Leave Request'}
//             </h3>
//           </div>
//         </div>

//         {/* Content */}
//         <div className="px-6 py-4">
//           <p className="text-gray-700 mb-2">
//             Are you sure you want to <span className={`font-semibold ${isApprove ? 'text-green-600' : 'text-red-600'}`}>
//               {action.toLowerCase()}
//             </span> the leave request for:
//           </p>
//           <p className="text-lg font-medium text-gray-900 bg-gray-50 px-3 py-2 rounded-lg">
//             {employeeName}
//           </p>
//           <p className="text-sm text-gray-500 mt-2">
//             This action cannot be undone.
//           </p>
//         </div>

//         {/* Actions */}
//         <div className="px-6 py-4 bg-gray-50 rounded-b-xl flex gap-3 justify-end">
//           <button
//             onClick={onClose}
//             className="px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors duration-200 font-medium"
//           >
//             Cancel
//           </button>
//           <button
//             onClick={onConfirm}
//             className={`px-4 py-2 text-white rounded-lg font-medium transition-colors duration-200 ${
//               isApprove 
//                 ? 'bg-green-600 hover:bg-green-700' 
//                 : 'bg-red-600 hover:bg-red-700'
//             }`}
//           >
//             {isApprove ? 'Approve' : 'Reject'}
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// const LeaveRequestTable = () => {
//   const [leaveRequests, setLeaveRequests] = useState([]);
//   const [currentPage, setCurrentPage] = useState(1);
//   const [showConfirmModal, setShowConfirmModal] = useState(false);
//   const [pendingAction, setPendingAction] = useState(null);
//   const rowsPerPage = 5;
//   const navigate = useNavigate();

//   useEffect(() => {
//     fetchLeaves();
//   }, []);

//   // ✅ Fetch leave requests
//   const fetchLeaves = async () => {
//     try {
//       const res = await API.get("api/leave/get.php");
//       if (res.data.status === "success") {
//         setLeaveRequests(res.data.data);
//       } else {
//         console.error("Failed to fetch leaves");
//       }
//     } catch (err) {
//       console.error("Error fetching leaves:", err);
//     }
//   };

//   // Show confirm modal before updating leave status
//   const handleLeaveAction = (id, status, employeeName) => {
//     setPendingAction({ id, status, employeeName });
//     setShowConfirmModal(true);
//   };

//   // ✅ Update leave status after confirmation
//   const confirmLeaveAction = async () => {
//     if (!pendingAction) return;

//     try {
//       await API.get(`api/leave/approve_reject.php?id=${pendingAction.id}&status=${pendingAction.status}`);
      
//       // Close modal first
//       setShowConfirmModal(false);
//       setPendingAction(null);
      
//       // ✅ Show toast after success
//       showSuccess(`Leave ${pendingAction.status} Successfully`);

//       // ✅ Navigate after 3s (same as toast autoClose)
//       setTimeout(() => {
//         navigate("/mainlayout/all-leaves");
//       }, 3000);
//     } catch (err) {
//       console.error("Status update failed:", err);
//       setShowConfirmModal(false);
//       setPendingAction(null);
//       showError("Something went wrong. Please try again!");
//     }
//   };

//   const closeConfirmModal = () => {
//     setShowConfirmModal(false);
//     setPendingAction(null);
//   };

//   // Filter only pending leaves
//   const pendingRequests = leaveRequests.filter(
//     (req) => req.status === "Pending"
//   );

//   // Pagination logic
//   const indexOfLastRow = currentPage * rowsPerPage;
//   const indexOfFirstRow = indexOfLastRow - rowsPerPage;
//   const currentRows = pendingRequests.slice(indexOfFirstRow, indexOfLastRow);
//   const totalPages = Math.ceil(pendingRequests.length / rowsPerPage);

//   return (
//     <>
//       <div className="p-6 md:p-10 bg-white rounded-xl shadow-lg">
//         <h1 className="text-2xl font-bold text-[#101c3d] mb-6 border-b pb-3">
//           New Leave Requests
//         </h1>

//         <div className="overflow-x-auto rounded-lg border">
//           <table className="min-w-full text-sm">
//             <thead className="bg-[#101c3d] text-white text-left">
//               <tr>
//                 <th className="py-3 px-4">#</th>
//                 <th className="py-3 px-4">Employee ID</th>
//                 <th className="py-3 px-4">Name</th>
//                 <th className="py-3 px-4">From</th>
//                 <th className="py-3 px-4">To</th>
//                 <th className="py-3 px-4">Leave Type</th>
//                 <th className="py-3 px-4">Reason</th>
//                 <th className="py-3 px-4 text-center">Action</th>
//               </tr>
//             </thead>

//             <tbody>
//               {currentRows.length === 0 ? (
//                 <tr>
//                   <td
//                     colSpan="8"
//                     className="text-center py-6 text-gray-500 italic"
//                   >
//                     No pending leave requests.
//                   </td>
//                 </tr>
//               ) : (
//                 currentRows.map((req, index) => (
//                   <tr
//                     key={req.id}
//                     className="border-b hover:bg-gray-50 text-gray-700"
//                   >
//                     <td className="py-3 px-4">
//                       {indexOfFirstRow + index + 1}
//                     </td>
//                     <td className="py-3 px-4">{req.employee_id}</td>
//                     <td className="py-3 px-4 font-medium">{req.name}</td>
//                     <td className="py-3 px-4">{req.leave_from}</td>
//                     <td className="py-3 px-4">{req.leave_to}</td>
//                     <td className="py-3 px-4">{req.leave_type}</td>
//                     <td className="py-3 px-4">{req.reason}</td>
//                     <td className="py-3 px-4">
//                       <div className="flex gap-2 justify-center">
//                         <button
//                           onClick={() => handleLeaveAction(req.id, "Approved", req.name)}
//                           className="bg-green-500 text-white px-3 py-1 rounded-md hover:bg-green-600 transition-colors duration-200 font-medium shadow-sm hover:shadow-md"
//                         >
//                           Approve
//                         </button>
//                         <button
//                           onClick={() => handleLeaveAction(req.id, "Rejected", req.name)}
//                           className="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600 transition-colors duration-200 font-medium shadow-sm hover:shadow-md"
//                         >
//                           Reject
//                         </button>
//                       </div>
//                     </td>
//                   </tr>
//                 ))
//               )}
//             </tbody>
//           </table>
//         </div>

//         {/* Pagination Controls */}
//         {totalPages > 1 && (
//           <div className="flex justify-between items-center mt-6 text-sm">
//             <p className="text-gray-600">
//               Page {currentPage} of {totalPages}
//             </p>
//             <div className="flex gap-2">
//               <button
//                 disabled={currentPage === 1}
//                 onClick={() => setCurrentPage((prev) => prev - 1)}
//                 className={`px-3 py-1 rounded-md border transition-colors duration-200 ${
//                   currentPage === 1
//                     ? "bg-gray-200 text-gray-400 cursor-not-allowed"
//                     : "bg-white hover:bg-gray-100 text-gray-700"
//                 }`}
//               >
//                 Prev
//               </button>
//               <button
//                 disabled={currentPage === totalPages}
//                 onClick={() => setCurrentPage((prev) => prev + 1)}
//                 className={`px-3 py-1 rounded-md border transition-colors duration-200 ${
//                   currentPage === totalPages
//                     ? "bg-gray-200 text-gray-400 cursor-not-allowed"
//                     : "bg-white hover:bg-gray-100 text-gray-700"
//                 }`}
//               >
//                 Next
//               </button>
//             </div>
//           </div>
//         )}
//       </div>

//       {/* Custom Confirm Modal */}
//       <ConfirmModal
//         isOpen={showConfirmModal}
//         onClose={closeConfirmModal}
//         onConfirm={confirmLeaveAction}
//         action={pendingAction?.status}
//         employeeName={pendingAction?.employeeName}
//       />
//     </>
//   );
// };

// export default LeaveRequestTable;

import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../../../utils/api";
import { showError, showSuccess } from "../../utils/toast";

// Custom Confirm Modal Component
const ConfirmModal = ({ isOpen, onClose, onConfirm, action, employeeName, isLoading }) => {
  if (!isOpen) return null;

  const isApprove = action === "Approved";
  
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl shadow-2xl max-w-md w-full transform transition-all duration-300 scale-100">
        {/* Header */}
        <div className={`px-6 py-4 rounded-t-xl ${isApprove ? 'bg-green-50 border-b border-green-100' : 'bg-red-50 border-b border-red-100'}`}>
          <div className="flex items-center gap-3">
            {isApprove ? (
              <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
              </div>
            ) : (
              <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
              </div>
            )}
            <h3 className={`text-lg font-semibold ${isApprove ? 'text-green-800' : 'text-red-800'}`}>
              {isApprove ? 'Approve Leave Request' : 'Reject Leave Request'}
            </h3>
          </div>
        </div>

        {/* Content */}
        <div className="px-6 py-4">
          <p className="text-gray-700 mb-2">
            Are you sure you want to <span className={`font-semibold ${isApprove ? 'text-green-600' : 'text-red-600'}`}>
              {action.toLowerCase()}
            </span> the leave request for:
          </p>
          <p className="text-lg font-medium text-gray-900 bg-gray-50 px-3 py-2 rounded-lg">
            {employeeName}
          </p>
          <p className="text-sm text-gray-500 mt-2">
            This action cannot be undone.
          </p>
        </div>

        {/* Actions */}
        <div className="px-6 py-4 bg-gray-50 rounded-b-xl flex gap-3 justify-end">
          <button
            onClick={onClose}
            disabled={isLoading}
            className={`px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors duration-200 font-medium ${
              isLoading ? 'opacity-50 cursor-not-allowed' : ''
            }`}
          >
            Cancel
          </button>
          <button
            onClick={onConfirm}
            disabled={isLoading}
            className={`px-4 py-2 text-white rounded-lg font-medium transition-colors duration-200 flex items-center gap-2 ${
              isApprove 
                ? 'bg-green-600 hover:bg-green-700' 
                : 'bg-red-600 hover:bg-red-700'
            } ${isLoading ? 'opacity-75 cursor-not-allowed' : ''}`}
          >
            {isLoading && (
              <svg className="animate-spin h-4 w-4" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
            )}
            {isLoading ? 'Processing...' : (isApprove ? 'Approve' : 'Reject')}
          </button>
        </div>
      </div>
    </div>
  );
};

const LeaveRequestTable = () => {
  const [leaveRequests, setLeaveRequests] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [pendingAction, setPendingAction] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const rowsPerPage = 5;
  const navigate = useNavigate();

  useEffect(() => {
    fetchLeaves();
  }, []);

  // ✅ Fetch leave requests
  const fetchLeaves = async () => {
    try {
      const res = await API.get("api/leave/get.php");
      if (res.data.status === "success") {
        setLeaveRequests(res.data.data);
      } else {
        console.error("Failed to fetch leaves");
      }
    } catch (err) {
      console.error("Error fetching leaves:", err);
    }
  };

  // Show confirm modal before updating leave status
  const handleLeaveAction = (id, status, employeeName) => {
    setPendingAction({ id, status, employeeName });
    setShowConfirmModal(true);
  };

  // ✅ Update leave status after confirmation
  const confirmLeaveAction = async () => {
    if (!pendingAction || isLoading) return;

    setIsLoading(true);
    
    try {
      await API.get(`api/leave/approve_reject.php?id=${pendingAction.id}&status=${pendingAction.status}`);
      
      // ✅ Show toast after success
      showSuccess(`Leave ${pendingAction.status} Successfully`);
      
      // Close modal and reset states
      setShowConfirmModal(false);
      setPendingAction(null);
      setIsLoading(false);

      // ✅ Navigate after 3s (same as toast autoClose)
      setTimeout(() => {
        navigate("/mainlayout/all-leaves");
      }, 3000);
    } catch (err) {
      console.error("Status update failed:", err);
      setShowConfirmModal(false);
      setPendingAction(null);
      setIsLoading(false);
      showError("Something went wrong. Please try again!");
    }
  };

  const closeConfirmModal = () => {
    if (isLoading) return; // Prevent closing modal while processing
    setShowConfirmModal(false);
    setPendingAction(null);
    setIsLoading(false);
  };

  // Filter only pending leaves
  const pendingRequests = leaveRequests.filter(
    (req) => req.status === "Pending"
  );

  // Pagination logic
  const indexOfLastRow = currentPage * rowsPerPage;
  const indexOfFirstRow = indexOfLastRow - rowsPerPage;
  const currentRows = pendingRequests.slice(indexOfFirstRow, indexOfLastRow);
  const totalPages = Math.ceil(pendingRequests.length / rowsPerPage);

  return (
    <>
      <div className="p-6 md:p-10 bg-white rounded-xl shadow-lg">
        <h1 className="text-2xl font-bold text-[#101c3d] mb-6 border-b pb-3">
          New Leave Requests
        </h1>

        <div className="overflow-x-auto rounded-lg border">
          <table className="min-w-full text-sm">
            <thead className="bg-[#101c3d] text-white text-left">
              <tr>
                <th className="py-3 px-4">#</th>
                <th className="py-3 px-4">Employee ID</th>
                <th className="py-3 px-4">Name</th>
                <th className="py-3 px-4">From</th>
                <th className="py-3 px-4">To</th>
                <th className="py-3 px-4">Leave Type</th>
                <th className="py-3 px-4">Reason</th>
                <th className="py-3 px-4 text-center">Action</th>
              </tr>
            </thead>

            <tbody>
              {currentRows.length === 0 ? (
                <tr>
                  <td
                    colSpan="8"
                    className="text-center py-6 text-gray-500 italic"
                  >
                    No pending leave requests.
                  </td>
                </tr>
              ) : (
                currentRows.map((req, index) => (
                  <tr
                    key={req.id}
                    className="border-b hover:bg-gray-50 text-gray-700"
                  >
                    <td className="py-3 px-4">
                      {indexOfFirstRow + index + 1}
                    </td>
                    <td className="py-3 px-4">{req.employee_id}</td>
                    <td className="py-3 px-4 font-medium">{req.name}</td>
                    <td className="py-3 px-4">{req.leave_from}</td>
                    <td className="py-3 px-4">{req.leave_to}</td>
                    <td className="py-3 px-4">{req.leave_type}</td>
                    <td className="py-3 px-4">{req.reason}</td>
                    <td className="py-3 px-4">
                      <div className="flex gap-2 justify-center">
                        <button
                          onClick={() => handleLeaveAction(req.id, "Approved", req.name)}
                          className="bg-green-500 text-white px-3 py-1 rounded-md hover:bg-green-600 transition-colors duration-200 font-medium shadow-sm hover:shadow-md"
                        >
                          Approve
                        </button>
                        <button
                          onClick={() => handleLeaveAction(req.id, "Rejected", req.name)}
                          className="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600 transition-colors duration-200 font-medium shadow-sm hover:shadow-md"
                        >
                          Reject
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>

        {/* Pagination Controls */}
        {totalPages > 1 && (
          <div className="flex justify-between items-center mt-6 text-sm">
            <p className="text-gray-600">
              Page {currentPage} of {totalPages}
            </p>
            <div className="flex gap-2">
              <button
                disabled={currentPage === 1}
                onClick={() => setCurrentPage((prev) => prev - 1)}
                className={`px-3 py-1 rounded-md border transition-colors duration-200 ${
                  currentPage === 1
                    ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                    : "bg-white hover:bg-gray-100 text-gray-700"
                }`}
              >
                Prev
              </button>
              <button
                disabled={currentPage === totalPages}
                onClick={() => setCurrentPage((prev) => prev + 1)}
                className={`px-3 py-1 rounded-md border transition-colors duration-200 ${
                  currentPage === totalPages
                    ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                    : "bg-white hover:bg-gray-100 text-gray-700"
                }`}
              >
                Next
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Custom Confirm Modal */}
      <ConfirmModal
        isOpen={showConfirmModal}
        onClose={closeConfirmModal}
        onConfirm={confirmLeaveAction}
        action={pendingAction?.status}
        employeeName={pendingAction?.employeeName}
        isLoading={isLoading}
      />
    </>
  );
};

export default LeaveRequestTable;