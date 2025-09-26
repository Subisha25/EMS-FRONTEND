// import React, { useEffect, useState } from 'react';
// import { FaEye, FaTrash } from 'react-icons/fa';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';
// import { showSuccess, showError } from '../../utils/toast'; // ✅ adjust path
// import { MdSettingsBackupRestore } from "react-icons/md";
// import API from '../../../utils/api';

// // const API_BASE = API;

// const TrashedEmployeeList = () => {
//   const [employees, setEmployees] = useState([]);
//   const [searchTerm, setSearchTerm] = useState(""); 
//   const [currentPage, setCurrentPage] = useState(1); 
//   const recordsPerPage = 10;
//   const navigate = useNavigate();

//  const fetchEmployees = async () => {
//     try {
//       const res = await API.get(`api/employee/getunavailable.php`);
//       setEmployees(res.data);
//     } catch (err) {
//       console.error('Error fetching employees:', err);
//       showError('Failed to fetch employees');
//     }
//   };

//   // Delete employee
//   const deleteEmployee = async (id) => {
//     if (window.confirm(' Are you sure you want to restore this employee?')) {
//       try {
//         const res = await API.post(`api/employee/restore.php`, { id });
//         if (res.data && res.data.status === true) {
//           showSuccess(' Employee Restored successfully!');
//           fetchEmployees();
//           navigate("/mainlayout/unavailable-employee");

//         } else {
//           showError(res.data?.message || 'Failed to Restore employee.');
//         }
//       } catch (err) {
//         console.error('Delete error:', err);
//         showError('Something went wrong while Restoring.');
//       }
//     }
//   };

//   useEffect(() => {
//     fetchEmployees();
//   }, []);


//    const filteredEmployees = employees.filter(emp => {
//     const fullName = `${emp.first_name} ${emp.last_name}`.toLowerCase();
//     return (
//       emp.emp_id.toLowerCase().includes(searchTerm.toLowerCase()) ||
//       fullName.includes(searchTerm.toLowerCase()) ||
//       emp.email.toLowerCase().includes(searchTerm.toLowerCase())
//     );
//   });

// // ✅ Pagination after filtering
// const indexOfLastRecord = currentPage * recordsPerPage;
// const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
// const currentRecords = filteredEmployees.slice(indexOfFirstRecord, indexOfLastRecord);
// const totalPages = Math.ceil(filteredEmployees.length / recordsPerPage);


//   return (
//     <div className="max-w-7xl mx-auto p-6">
//       <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Employee List</h2>
//  {/* ✅ Top bar with Search (left) and Trashed Entries (right) */}
//       <div className="flex justify-between items-center mb-4">
//         {/* Search Box */}
//         <input
//           type="text"
//           placeholder="Search by Name, Emp ID, Email"
//           value={searchTerm}
//           onChange={(e) => setSearchTerm(e.target.value)}
//           className="w-1/3 px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
//         />

//         {/* Trashed Entries Button */}
//         <button
//           onClick={() => navigate("/mainlayout/manage-employee")}
//           className="bg-[#101c3d] text-white px-4 py-2 rounded-md shadow "
//         >
//          Active Entries
//         </button>
//       </div>

//       <div className="overflow-x-auto shadow-lg rounded-xl">
//         <table className="min-w-full bg-white rounded-xl">
//           <thead className="bg-[#101c3d] text-white">
//             <tr>
//               <th className="text-left py-3 px-4">Emp ID</th>
//               <th className="text-left py-3 px-4">Name</th>
//               <th className="text-left py-3 px-4">Designation</th>
//               <th className="text-left py-3 px-4">Email</th>
//               <th className="text-left py-3 px-4">Mobile</th>
//               <th className="text-center py-3 px-4">Actions</th>
//             </tr>
//           </thead>
//         <tbody>
//   {currentRecords.map((emp, index) => (
//     <tr
//       key={emp.id}
//       className={index % 2 === 0 ? 'bg-gray-100' : 'bg-white'}
//     >
//       <td className="py-3 px-4">{emp.emp_id}</td>
//       <td className="py-3 px-4">{emp.first_name} {emp.last_name}</td>
//       <td className="py-3 px-4">{emp.designation}</td>
//       <td className="py-3 px-4">{emp.email}</td>
//       <td className="py-3 px-4">{emp.mobile}</td>
//       <td className="py-3 px-4 flex flex-wrap justify-center gap-3">
//         <button
//           className="text-green-600 hover:text-green-800 font-bold text-2xl"
//           title="Restore"
//           onClick={() => deleteEmployee(emp.id)}
//         >
//           <MdSettingsBackupRestore />
//         </button>
//       </td>
//     </tr>
//   ))}
// </tbody>

//         </table>
//       </div>

//       {/* ✅ Pagination Controls */}
//       {totalPages > 1 && (
//         <div className="flex justify-center items-center mt-6 space-x-2">
//           <button
//             className="px-3 py-1 bg-gray-200 rounded-md disabled:opacity-50"
//             onClick={() => setCurrentPage((prev) => prev - 1)}
//             disabled={currentPage === 1}
//           >
//             Prev
//           </button>

//           {Array.from({ length: totalPages }, (_, i) => (
//             <button
//               key={i + 1}
//               onClick={() => setCurrentPage(i + 1)}
//               className={`px-3 py-1 rounded-md ${
//                 currentPage === i + 1
//                   ? 'bg-blue-600 text-white'
//                   : 'bg-gray-200 hover:bg-gray-300'
//               }`}
//             >
//               {i + 1}
//             </button>
//           ))}

//           <button
//             className="px-3 py-1 bg-gray-200 rounded-md disabled:opacity-50"
//             onClick={() => setCurrentPage((prev) => prev + 1)}
//             disabled={currentPage === totalPages}
//           >
//             Next
//           </button>
//         </div>
//       )}
//     </div>
//   );
// };

// export default TrashedEmployeeList;

import React, { useEffect, useState } from 'react';
import { FaEye, FaTrash, FaTimes, FaCheckCircle } from 'react-icons/fa';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { showSuccess, showError } from '../../utils/toast';
import { MdSettingsBackupRestore } from "react-icons/md";
import API from '../../../utils/api';

// Custom Restore Confirmation Modal Component
const RestoreConfirmationModal = ({ isOpen, onClose, onConfirm, employeeName, loading }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full mx-4 transform transition-all duration-300 scale-100">
        {/* Header */}
        <div className="bg-gradient-to-r from-green-500 to-green-600 text-white p-6 rounded-t-2xl">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="bg-white bg-opacity-20 p-2 rounded-full">
                <MdSettingsBackupRestore className="text-2xl" />
              </div>
              <h3 className="text-xl font-bold">Restore Employee</h3>
            </div>
            <button
              onClick={onClose}
              className="text-white hover:text-gray-200 transition-colors p-1"
              disabled={loading}
            >
              <FaTimes className="text-xl" />
            </button>
          </div>
        </div>

        {/* Body */}
        <div className="p-6">
          <div className="text-center mb-6">
            <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
              <MdSettingsBackupRestore className="text-green-500 text-3xl" />
            </div>
            <p className="text-gray-700 text-lg mb-2">
              Are you sure you want to restore
            </p>
            <p className="font-bold text-xl text-gray-800 mb-4">
              {employeeName}?
            </p>
            <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded">
              <p className="text-blue-800 text-sm">
                <strong>Info:</strong> This employee will be moved back to the active employee list and will regain access to the system.
              </p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="bg-gray-50 px-6 py-4 rounded-b-2xl flex justify-end space-x-3">
          <button
            onClick={onClose}
            disabled={loading}
            className="px-6 py-2 bg-gray-300 text-gray-700 rounded-lg hover:bg-gray-400 transition-colors duration-200 font-medium disabled:opacity-50"
          >
            Cancel
          </button>
          <button
            onClick={onConfirm}
            disabled={loading}
            className="px-6 py-2 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-lg hover:from-green-600 hover:to-green-700 transition-all duration-200 font-medium shadow-lg transform hover:scale-105 disabled:opacity-50 disabled:transform-none flex items-center space-x-2"
          >
            {loading ? (
              <>
                <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                <span>Restoring...</span>
              </>
            ) : (
              <>
                <MdSettingsBackupRestore />
                <span>Restore</span>
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

const TrashedEmployeeList = () => {
  const [employees, setEmployees] = useState([]);
  const [searchTerm, setSearchTerm] = useState(""); 
  const [currentPage, setCurrentPage] = useState(1); 
  const [showRestoreModal, setShowRestoreModal] = useState(false);
  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const [restoreLoading, setRestoreLoading] = useState(false);
  const recordsPerPage = 10;
  const navigate = useNavigate();

  const fetchEmployees = async () => {
    try {
      const res = await API.get(`api/employee/getunavailable.php`);
      setEmployees(res.data);
    } catch (err) {
      console.error('Error fetching employees:', err);
      showError('Failed to fetch employees');
    }
  };

  // Handle restore click
  const handleRestoreClick = (employee) => {
    setSelectedEmployee(employee);
    setShowRestoreModal(true);
  };

  // Confirm restore
  const confirmRestore = async () => {
    if (!selectedEmployee) return;

    setRestoreLoading(true);
    try {
      const res = await API.post(`api/employee/restore.php`, { id: selectedEmployee.id });
      if (res.data && res.data.status === true) {
        showSuccess(`${selectedEmployee.first_name} ${selectedEmployee.last_name} restored successfully!`);
        fetchEmployees();
        setShowRestoreModal(false);
        setSelectedEmployee(null);
        navigate("/mainlayout/manage-employee");
      } else {
        showError(res.data?.message || 'Failed to restore employee.');
      }
    } catch (err) {
      console.error('Restore error:', err);
      showError('Something went wrong while restoring.');
    } finally {
      setRestoreLoading(false);
    }
  };

  // Cancel restore
  const cancelRestore = () => {
    if (!restoreLoading) {
      setShowRestoreModal(false);
      setSelectedEmployee(null);
    }
  };

  useEffect(() => {
    fetchEmployees();
  }, []);

  const filteredEmployees = employees.filter(emp => {
    const fullName = `${emp.first_name} ${emp.last_name}`.toLowerCase();
    return (
      emp.emp_id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      fullName.includes(searchTerm.toLowerCase()) ||
      emp.email.toLowerCase().includes(searchTerm.toLowerCase())
    );
  });

  // Pagination after filtering
  const indexOfLastRecord = currentPage * recordsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
  const currentRecords = filteredEmployees.slice(indexOfFirstRecord, indexOfLastRecord);
  const totalPages = Math.ceil(filteredEmployees.length / recordsPerPage);

  return (
    <div className="max-w-7xl mx-auto p-6">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Trashed Employee List</h2>
      
      {/* Top bar with Search (left) and Active Entries (right) */}
      <div className="flex justify-between items-center mb-4">
        {/* Search Box */}
        <input
          type="text"
          placeholder="Search by Name, Emp ID, Email"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-1/3 px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        {/* Active Entries Button */}
        <button
          onClick={() => navigate("/mainlayout/manage-employee")}
          className="bg-[#101c3d] text-white px-4 py-2 rounded-md shadow hover:bg-opacity-90 transition-colors"
        >
          Active Entries
        </button>
      </div>

      {/* Employee Table */}
      <div className="overflow-x-auto shadow-lg rounded-xl">
        <table className="min-w-full bg-white rounded-xl">
          <thead className="bg-[#101c3d] text-white">
            <tr>
              <th className="text-left py-3 px-4">Emp ID</th>
              <th className="text-left py-3 px-4">Name</th>
              <th className="text-left py-3 px-4">Designation</th>
              <th className="text-left py-3 px-4">Email</th>
              <th className="text-left py-3 px-4">Mobile</th>
              <th className="text-center py-3 px-4">Actions</th>
            </tr>
          </thead>
          <tbody>
            {currentRecords.length === 0 ? (
              <tr>
                <td colSpan="6" className="py-8 text-center text-gray-500">
                  {searchTerm ? 'No employees found matching your search.' : 'No trashed employees found.'}
                </td>
              </tr>
            ) : (
              currentRecords.map((emp, index) => (
                <tr
                  key={emp.id}
                  className={index % 2 === 0 ? 'bg-gray-100' : 'bg-white'}
                >
                  <td className="py-3 px-4">{emp.emp_id}</td>
                  <td className="py-3 px-4">{emp.first_name} {emp.last_name}</td>
                  <td className="py-3 px-4">{emp.designation}</td>
                  <td className="py-3 px-4">{emp.email}</td>
                  <td className="py-3 px-4">{emp.mobile}</td>
                  <td className="py-3 px-4 flex flex-wrap justify-center gap-3">
                    <button
                      className="text-green-600 hover:text-green-800 p-2 rounded-full hover:bg-green-50 transition-all"
                      title="Restore Employee"
                      onClick={() => handleRestoreClick(emp)}
                    >
                      <MdSettingsBackupRestore size={20} />
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {/* Pagination Controls */}
      {totalPages > 1 && (
        <div className="flex justify-center items-center mt-6 space-x-2">
          <button
            className="px-3 py-1 bg-gray-200 rounded-md disabled:opacity-50 hover:bg-gray-300 transition-colors"
            onClick={() => setCurrentPage((prev) => prev - 1)}
            disabled={currentPage === 1}
          >
            Prev
          </button>

          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i + 1}
              onClick={() => setCurrentPage(i + 1)}
              className={`px-3 py-1 rounded-md transition-colors ${
                currentPage === i + 1
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-200 hover:bg-gray-300'
              }`}
            >
              {i + 1}
            </button>
          ))}

          <button
            className="px-3 py-1 bg-gray-200 rounded-md disabled:opacity-50 hover:bg-gray-300 transition-colors"
            onClick={() => setCurrentPage((prev) => prev + 1)}
            disabled={currentPage === totalPages}
          >
            Next
          </button>
        </div>
      )}

      {/* Restore Confirmation Modal */}
      <RestoreConfirmationModal
        isOpen={showRestoreModal}
        onClose={cancelRestore}
        onConfirm={confirmRestore}
        employeeName={selectedEmployee ? `${selectedEmployee.first_name} ${selectedEmployee.last_name}` : ''}
        loading={restoreLoading}
      />
    </div>
  );
};

export default TrashedEmployeeList;