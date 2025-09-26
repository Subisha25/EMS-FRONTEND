
// import React, { useState } from 'react';
// import { FaCalendarAlt } from 'react-icons/fa';
// import Modal from '../EmployeeDashboard/Modal';

// const initialLeaves = [
//   { id: 1, type: 'Casual', from: '2024-07-01', to: '2024-07-02', reason: 'Family event', status: 'Approved' },
//   { id: 2, type: 'Sick', from: '2024-07-10', to: '2024-07-11', reason: 'Fever', status: 'Pending' },
//   { id: 3, type: 'Earned', from: '2024-07-15', to: '2024-07-16', reason: 'Personal', status: 'Rejected' },
// ];

// const leaveBalance = {
//   Casual: { used: 6, total: 10 },
//   Sick: { used: 3, total: 5 },
//   Earned: { used: 2, total: 5 },
// };

// function EmployeeLeaveManagement() {
//   const [leaves, setLeaves] = useState(initialLeaves);
//   const [form, setForm] = useState({
//     employeeId: '',
//     employeeName: '',
//     employeeEmail: '',
//     type: 'Casual',
//     from: '',
//     to: '',
//     reason: '',
//   });

//   const [showModal, setShowModal] = useState(false);
//   const [cancelId, setCancelId] = useState(null);

//   const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

//   const handleSubmit = e => {
//     e.preventDefault();
//     setLeaves([...leaves, { id: Date.now(), ...form, status: 'Pending' }]);
//     setForm({
//       employeeId: '',
//       employeeName: '',
//       employeeEmail: '',
//       type: 'Casual',
//       from: '',
//       to: '',
//       reason: '',
//     });
//   };

//   const handleCancel = id => {
//     setCancelId(id);
//     setShowModal(true);
//   };

//   const confirmCancel = () => {
//     setLeaves(leaves.map(l => (l.id === cancelId ? { ...l, status: 'Cancelled' } : l)));
//     setShowModal(false);
//     setCancelId(null);
//   };

//   return (
//     <div className="flex flex-col gap-8">
//       {/* Leave Balance Cards */}
//       <div className="flex gap-6 flex-wrap">
//         {Object.entries(leaveBalance).map(([type, { used, total }]) => (
//           <div key={type} className="bg-purple-50 border-l-4 border-purple-400 p-4 rounded w-48">
//             <div className="font-bold text-purple-700">{type} Leave</div>
//             <div className="text-lg font-semibold">{total - used} / {total} left</div>
//             <div className="text-xs text-gray-500">Used: {used}</div>
//           </div>
//         ))}
//       </div>

//       {/* Apply Leave Form */}
//       <div className="bg-white rounded-lg shadow-md p-8 max-w-3xl mx-auto">
//         <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
//           <FaCalendarAlt className="text-purple-500" /> Apply for Leave
//         </h2>

//         <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
//           <div className="flex flex-col md:flex-row gap-4">
//             <div className="flex-1">
//               <label className="block mb-1 font-semibold">Employee ID</label>
//               <input
//                 type="text"
//                 name="employeeId"
//                 value={form.employeeId}
//                 onChange={handleChange}
//                 className="w-full border rounded px-3 py-2"
//                 required
//               />
//             </div>
//             <div className="flex-1">
//               <label className="block mb-1 font-semibold">Employee Name</label>
//               <input
//                 type="text"
//                 name="employeeName"
//                 value={form.employeeName}
//                 onChange={handleChange}
//                 className="w-full border rounded px-3 py-2"
//                 required
//               />
//             </div>
//             <div className="flex-1">
//               <label className="block mb-1 font-semibold">Employee Email</label>
//               <input
//                 type="email"
//                 name="employeeEmail"
//                 value={form.employeeEmail}
//                 onChange={handleChange}
//                 className="w-full border rounded px-3 py-2"
//                 required
//               />
//             </div>
//           </div>

//           <div>
//             <label className="block mb-1 font-semibold">Leave Type</label>
//             <select name="type" value={form.type} onChange={handleChange} className="w-full border rounded px-3 py-2">
//               <option>Casual</option>
//               <option>Sick</option>
//               <option>Earned</option>
//             </select>
//           </div>

//           <div className="flex gap-4">
//             <div className="flex-1">
//               <label className="block mb-1 font-semibold">From</label>
//               <input
//                 type="date"
//                 name="from"
//                 value={form.from}
//                 onChange={handleChange}
//                 className="w-full border rounded px-3 py-2"
//                 required
//               />
//             </div>
//             <div className="flex-1">
//               <label className="block mb-1 font-semibold">To</label>
//               <input
//                 type="date"
//                 name="to"
//                 value={form.to}
//                 onChange={handleChange}
//                 className="w-full border rounded px-3 py-2"
//                 required
//               />
//             </div>
//           </div>

//           <div>
//             <label className="block mb-1 font-semibold">Reason</label>
//             <textarea
//               name="reason"
//               value={form.reason}
//               onChange={handleChange}
//               className="w-full border rounded px-3 py-2"
//               rows="3"
//               required
//             />
//           </div>

//           <button
//             type="submit"
//             className="bg-purple-500 hover:bg-purple-600 text-white px-6 py-2 rounded-lg font-semibold mt-4"
//           >
//             Apply Leave
//           </button>
//         </form>
//       </div>

//       {/* Modal */}
//       <Modal
//         isOpen={showModal}
//         title="Cancel Leave?"
//         message="Are you sure you want to cancel this pending leave?"
//         onConfirm={confirmCancel}
//         onCancel={() => setShowModal(false)}
//         confirmText="Yes, Cancel"
//         cancelText="No"
//       />
//     </div>
//   );
// }

// export default EmployeeLeaveManagement;


// import React, { useState, useEffect } from 'react';
// import { FaCalendarAlt } from 'react-icons/fa';
// import Modal from './Modal';
// import { showSuccess, showError, showWarning, showInfo } from "../../utils/toast"; // ✅ import toast
// import { useNavigate } from 'react-router-dom';


// const initialLeaves = [
//   { id: 1, type: 'Casual', from: '2024-07-01', to: '2024-07-02', reason: 'Family event', status: 'Approved' },
//   { id: 2, type: 'Sick', from: '2024-07-10', to: '2024-07-11', reason: 'Fever', status: 'Pending' },
//   { id: 3, type: 'Earned', from: '2024-07-15', to: '2024-07-16', reason: 'Personal', status: 'Rejected' },
// ];

// const leaveBalance = {
//   Casual: { used: 6, total: 10 },
//   Sick: { used: 3, total: 5 },
//   Earned: { used: 2, total: 5 },
// };

// function EmployeeLeaveManagement() {
//   const [leaves, setLeaves] = useState(initialLeaves);
//   const [form, setForm] = useState({
//     employeeId: '',
//     employeeName: '',
//     employeeEmail: '',
//     type: 'Casual',
//     from: '',
//     to: '',
//     reason: '',
//   });
// const navigate = useNavigate();
//   const [showModal, setShowModal] = useState(false);
//   const [cancelId, setCancelId] = useState(null);
// const [isSubmitting, setIsSubmitting] = useState(false);

// useEffect(() => {
//   const user = JSON.parse(sessionStorage.getItem('user'));

//   if (user?.emp_id) {
//     // ✅ Correct query param is emp_id not id
//     fetch(`http://localhost/EMS-backend/api/employee/get_one.php?emp_id=${user.emp_id}`)
//       .then(res => res.json())
//       .then(data => {
//         if (data && data.emp_id) {
//           setForm(prev => ({
//             ...prev,
//             employeeId: data.emp_id || '',
//             employeeName: `${data.first_name} ${data.last_name}` || '',
//             employeeEmail: data.email || '',
//           }));

//           // 🔄 Update sessionStorage also with latest employee data
//           sessionStorage.setItem('user', JSON.stringify(data));
//         }
//       })
//       .catch(err => console.error("Error fetching employee details:", err));
//   }
// }, []);


//   const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

 

// // const handleSubmit = async e => {
// //   e.preventDefault();

// //   // Prevent submitting until employee info is loaded
// //   if (!form.employeeId || !form.employeeName || !form.employeeEmail) {
// //     alert('Employee data not loaded. Please wait a moment and try again.');
// //     return;
// //   }

// //   // Check required fields
// //   if (!form.from || !form.to || !form.reason.trim()) {
// //     alert('Please fill all required fields.');
// //     return;
// //   }

// //   setIsSubmitting(true); // Disable button

// //   try {
// //     const res = await fetch('http://localhost/EMS-backend/api/leave/submit_leave.php', {
// //       method: 'POST',
// //       headers: { 'Content-Type': 'application/json' },
// //       body: JSON.stringify(form)
// //     });

// //     const data = await res.json();

// //     if (data.status === 'success') {
// //       alert('Leave submitted successfully!');
// //       setForm(prev => ({
// //         ...prev,
// //         type: 'Casual',
// //         from: '',
// //         to: '',
// //         reason: '',
// //       }));
// //       window.location.reload();
// //     } else {
// //       alert('Leave submission failed.');
// //     }
// //   } catch (err) {
// //     console.error(err);
// //     alert('An error occurred. Try again.');
// //   } finally {
// //     setIsSubmitting(false);
// //   }
// // };



//  const handleSubmit = async e => {
//     e.preventDefault();

//     if (!form.employeeId || !form.employeeName || !form.employeeEmail) {
//       showWarning('Employee data not loaded. Please wait a moment and try again.');
//       return;
//     }

//     if (!form.from || !form.to || !form.reason.trim()) {
//       showWarning('Please fill all required fields.');
//       return;
//     }

//     setIsSubmitting(true);

//     try {
//       const res = await fetch('http://localhost/EMS-backend/api/leave/submit_leave.php', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify(form)
//       });

//       const data = await res.json();

//       if (data.status === 'success') {
//         showSuccess('Leave submitted successfully!');
//         setForm(prev => ({
//           ...prev,
//           type: 'Casual',
//           from: '',
//           to: '',
//           reason: '',
//         }));
//         navigate("/mainlayout/leavestatus");

//         // optional: update leave list dynamically instead of reload
//         // window.location.reload();
//       } else {
//         showError('Leave submission failed.');
//       }
//     } catch (err) {
//       console.error(err);
//       showError('An error occurred. Try again.');
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   const handleCancel = id => {
//     setCancelId(id);
//     setShowModal(true);
//   };

//   // const confirmCancel = () => {
//   //   setLeaves(leaves.map(l => (l.id === cancelId ? { ...l, status: 'Cancelled' } : l)));
//   //   setShowModal(false);
//   //   setCancelId(null);
//   // };

//    const confirmCancel = () => {
//     setLeaves(leaves.map(l => (l.id === cancelId ? { ...l, status: 'Cancelled' } : l)));
//     setShowModal(false);
//     setCancelId(null);
//     showInfo('Leave cancelled successfully'); // ✅ toast on cancel
//   };
//   return (
//     <div className="flex flex-col gap-8">
//       {/* Leave Balance Cards */}
//       {/* <div className="flex gap-6 flex-wrap">
//         {Object.entries(leaveBalance).map(([type, { used, total }]) => (
//           <div key={type} className="bg-purple-50 border-l-4 border-purple-400 p-4 rounded w-48">
//             <div className="font-bold text-purple-700">{type} Leave</div>
//             <div className="text-lg font-semibold">{total - used} / {total} left</div>
//             <div className="text-xs text-gray-500">Used: {used}</div>
//           </div>
//         ))}
//       </div> */}

//       {/* Apply Leave Form */}
//       <div className="bg-white rounded-lg shadow-md p-8 max-w-3xl mx-auto">
//         <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
//           <FaCalendarAlt className="text-purple-500" /> Apply for Leave
//         </h2>

//         <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
//           <div className="flex flex-col md:flex-row gap-4">
//             <div className="flex-1">
//               <label className="block mb-1 font-semibold">Employee ID</label>
//               <input
//                 type="text"
//                 name="employeeId"
//                 value={form.employeeId}
//                 className="w-full border rounded px-3 py-2 bg-gray-100"
//                 readOnly
//               />
//             </div>
//             <div className="flex-1">
//               <label className="block mb-1 font-semibold">Employee Name</label>
//               <input
//                 type="text"
//                 name="employeeName"
//                 value={form.employeeName}
//                 className="w-full border rounded px-3 py-2 bg-gray-100"
//                 readOnly
//               />
//             </div>
//             <div className="flex-1">
//               <label className="block mb-1 font-semibold">Employee Email</label>
//               <input
//                 type="email"
//                 name="employeeEmail"
//                 value={form.employeeEmail}
//                 className="w-full border rounded px-3 py-2 bg-gray-100"
//                 readOnly
//               />
//             </div>
//           </div>

//           <div>
//             <label className="block mb-1 font-semibold">Leave Type</label>
//             <select name="type" value={form.type} onChange={handleChange} className="w-full border rounded px-3 py-2">
//               <option>Casual</option>
//               <option>Sick</option>
//               <option>Earned</option>
//             </select>
//           </div>

//           <div className="flex gap-4">
//             <div className="flex-1">
//               <label className="block mb-1 font-semibold">From</label>
//               <input
//                 type="date"
//                 name="from"
//                 value={form.from}
//                 onChange={handleChange}
//                 className="w-full border rounded px-3 py-2"
//                 required
//               />
//             </div>
//             <div className="flex-1">
//               <label className="block mb-1 font-semibold">To</label>
//               <input
//                 type="date"
//                 name="to"
//                 value={form.to}
//                 onChange={handleChange}
//                 className="w-full border rounded px-3 py-2"
//                 required
//               />
//             </div>
//           </div>

//           <div>
//             <label className="block mb-1 font-semibold">Reason</label>
//             <textarea
//               name="reason"
//               value={form.reason}
//               onChange={handleChange}
//               className="w-full border rounded px-3 py-2"
//               rows="3"
//               required
//             />
//           </div>

//           <button
//   type="submit"
//   className={`bg-purple-500 hover:bg-purple-600 text-white px-6 py-2 rounded-lg font-semibold mt-4 ${
//     isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
//   }`}
//   disabled={isSubmitting}
// >
//   {isSubmitting ? 'Submitting...' : 'Apply Leave'}
// </button>

// {/* 
//           <button
//             type="submit"
//             className="bg-purple-500 hover:bg-purple-600 text-white px-6 py-2 rounded-lg font-semibold mt-4"
//           >
//             Apply Leave
//           </button> */}
//         </form>
//       </div>

//       {/* Modal */}
//       <Modal
//         isOpen={showModal}
//         title="Cancel Leave?"
//         message="Are you sure you want to cancel this pending leave?"
//         onConfirm={confirmCancel}
//         onCancel={() => setShowModal(false)}
//         confirmText="Yes, Cancel"
//         cancelText="No"
//       />
//     </div>
//   );
// }

// export default EmployeeLeaveManagement;


import React, { useState, useEffect } from 'react';
import { FaCalendarAlt } from 'react-icons/fa'; // FaCalendarCheck, FaPlane, FaBed, FaUserTie are removed
import Modal from './Modal';
import { showSuccess, showError, showWarning, showInfo } from "../../utils/toast";
import { useNavigate } from 'react-router-dom';
import API from '../../../utils/api';


function EmployeeLeaveManagement() {
  const [form, setForm] = useState({
    employeeId: '',
    employeeName: '',
    employeeEmail: '',
    type: 'Casual',
    from: '',
    to: '',
    reason: '',
  });
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  const [cancelId, setCancelId] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

useEffect(() => {
  const user = JSON.parse(sessionStorage.getItem("user"));

  if (user?.emp_id) {
    API.get(`api/employee/get_one.php?emp_id=${user.emp_id}`)
      .then((res) => {
        const data = res.data;

        if (data && data.emp_id) {
          setForm((prev) => ({
            ...prev,
            employeeId: data.emp_id || "",
            employeeName: `${data.first_name} ${data.last_name}` || "",
            employeeEmail: data.email || "",
          }));

          // ✅ Update session with latest details
          sessionStorage.setItem("user", JSON.stringify(data));
        }
      })
      .catch((err) => console.error("Error fetching employee details:", err));
  }
}, []);

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });


const handleSubmit = async (e) => {
  e.preventDefault();

  if (!form.employeeId || !form.employeeName || !form.employeeEmail) {
    showWarning("Employee data not loaded. Please wait a moment and try again.");
    return;
  }

  if (!form.from || !form.to || !form.reason.trim()) {
    showWarning("Please fill all required fields.");
    return;
  }

  setIsSubmitting(true);

  try {
    const res = await API.post("api/leave/submit_leave.php", form); // ✅ axios auto stringifies JSON
    const data = res.data;

    if (data.status === "success") {
      showSuccess("Leave submitted successfully!");
      setForm((prev) => ({
        ...prev,
        type: "Casual",
        from: "",
        to: "",
        reason: "",
      }));
      navigate("/mainlayout/leavestatus");
    } else {
      showError(data.message || "Leave submission failed.");
    }
  } catch (err) {
    console.error("Leave submit error:", err);
    showError("An error occurred. Try again.");
  } finally {
    setIsSubmitting(false);
  }
};


  const handleCancel = id => {
    setCancelId(id);
    setShowModal(true);
  };

  const confirmCancel = () => {
    setShowModal(false);
    setCancelId(null);
    showInfo('Leave cancelled successfully');
  };

  return (
    <div className="bg-gray-50 min-h-screen p-6">
      <div className="flex flex-col md:flex-row gap-6 max-w-4xl mx-auto">
        
        {/* Main Section: Apply Leave Form */}
        <div className="w-full bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
          <h2 className="text-3xl font-bold mb-8 flex items-center gap-3 text-[#101c3d]">
            <FaCalendarAlt className="text-3xl text-blue-500" /> Apply for Leave
          </h2>

          <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="flex flex-col">
                <label className="text-sm font-semibold text-gray-700 mb-1">Employee ID</label>
                <input
                  type="text"
                  name="employeeId"
                  value={form.employeeId}
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 bg-gray-50 text-gray-600 focus:outline-none"
                  readOnly
                />
              </div>
              <div className="flex flex-col">
                <label className="text-sm font-semibold text-gray-700 mb-1">Employee Name</label>
                <input
                  type="text"
                  name="employeeName"
                  value={form.employeeName}
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 bg-gray-50 text-gray-600 focus:outline-none"
                  readOnly
                />
              </div>
              <div className="flex flex-col">
                <label className="text-sm font-semibold text-gray-700 mb-1">Employee Email</label>
                <input
                  type="email"
                  name="employeeEmail"
                  value={form.employeeEmail}
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 bg-gray-50 text-gray-600 focus:outline-none"
                  readOnly
                />
              </div>
            </div>

            <div className="flex flex-col">
              <label className="text-sm font-semibold text-gray-700 mb-1">Leave Type</label>
              <select
                name="type"
                value={form.type}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-xl px-4 py-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-400"
              >
                <option>Casual</option>
                <option>Sick</option>
                <option>Earned</option>
              </select>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col">
                <label className="text-sm font-semibold text-gray-700 mb-1">From</label>
                <input
                  type="date"
                  name="from"
                  value={form.from}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-xl px-4 py-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-400"
                  required
                />
              </div>
              <div className="flex flex-col">
                <label className="text-sm font-semibold text-gray-700 mb-1">To</label>
                <input
                  type="date"
                  name="to"
                  value={form.to}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-xl px-4 py-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-400"
                  required
                />
              </div>
            </div>

            <div className="flex flex-col">
              <label className="text-sm font-semibold text-gray-700 mb-1">Reason</label>
              <textarea
                name="reason"
                value={form.reason}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-xl px-4 py-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-400"
                rows="4"
                required
              />
            </div>

            <button
              type="submit"
              className={`w-full bg-[#101c3d] text-white py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.01] ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Submitting...' : 'Apply Leave'}
            </button>
          </form>
        </div>
      </div>

      {/* Modal */}
      <Modal
        isOpen={showModal}
        title="Cancel Leave?"
        message="Are you sure you want to cancel this pending leave?"
        onConfirm={confirmCancel}
        onCancel={() => setShowModal(false)}
        confirmText="Yes, Cancel"
        cancelText="No"
      />
    </div>
  );
}

export default EmployeeLeaveManagement;