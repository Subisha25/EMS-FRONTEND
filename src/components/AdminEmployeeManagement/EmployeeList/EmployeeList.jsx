// import React from 'react';
// import { FaEye, FaEdit, FaTrash, FaMoneyCheckAlt, FaUmbrellaBeach } from 'react-icons/fa';

// const employees = [
//   {
//     id: 'EMP001',
//     name: 'Subisha M',
//     department: 'HR',
//     email: 'subisha@example.com',
//     mobile: '9876543210',
//   },
//   {
//     id: 'EMP002',
//     name: 'Anand R',
//     department: 'Development',
//     email: 'anand@example.com',
//     mobile: '9876543222',
//   },
//   // Add more employee objects here...
// ];

// const EmployeeList = ({ onViewOrEdit }) => {
//   return (
//     <div className="max-w-7xl mx-auto p-6">
//       <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Employee List</h2>

//       <div className="overflow-x-auto shadow-lg rounded-xl">
//         <table className="min-w-full bg-white rounded-xl">
//           <thead className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
//             <tr>
//               <th className="text-left py-3 px-4">Emp ID</th>
//               <th className="text-left py-3 px-4">Name</th>
//               <th className="text-left py-3 px-4">Department</th>
//               <th className="text-left py-3 px-4">Email</th>
//               <th className="text-left py-3 px-4">Mobile</th>
//               <th className="text-center py-3 px-4">Actions</th>
//             </tr>
//           </thead>
//           <tbody>
//             {employees.map((emp, index) => (
//               <tr
//                 key={emp.id}
//                 className={index % 2 === 0 ? 'bg-gray-100' : 'bg-white'}
//               >
//                 <td className="py-3 px-4">{emp.id}</td>
//                 <td className="py-3 px-4">{emp.name}</td>
//                 <td className="py-3 px-4">{emp.department}</td>
//                 <td className="py-3 px-4">{emp.email}</td>
//                 <td className="py-3 px-4">{emp.mobile}</td>
//                 <td className="py-3 px-4 flex flex-wrap justify-center gap-2">
//                   <button
//                     className="text-blue-600 hover:text-blue-800"
//                     title="View"
//                     onClick={() => onViewOrEdit(emp)}
//                   >
//                     <FaEye />
//                   </button>
//                   <button
//                     className="text-green-600 hover:text-green-800"
//                     title="Edit"
//                     onClick={() => onViewOrEdit(emp)}
//                   >
//                     <FaEdit />
//                   </button>
//                   {/* <button className="text-red-600 hover:text-red-800" title="Delete">
//                     <FaTrash />
//                   </button> */}
//                   <button className="text-yellow-600 hover:text-yellow-800" title="Salary">
//                     <FaMoneyCheckAlt />
//                   </button>
//                   <button className="text-pink-600 hover:text-pink-800" title="Leave">
//                     <FaUmbrellaBeach />
//                   </button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default EmployeeList;

import React, { useEffect, useState } from 'react';
import { FaEye, FaEdit, FaTrash, FaMoneyCheckAlt, FaUmbrellaBeach } from 'react-icons/fa';

const API_BASE = 'http://localhost/EMS-backend/api/employee';

const EmployeeList = ({ onViewOrEdit }) => {
  const [employees, setEmployees] = useState([]);

  // 🔄 Fetch employees from backend
  useEffect(() => {
    fetch(`${API_BASE}/get_all.php`)
      .then((res) => res.json())
      .then((data) => setEmployees(data))
      .catch((err) => console.error('Fetch error:', err));
  }, []);

  // 🗑️ Delete handler
  const handleDelete = async (emp_id) => {
    const confirmDelete = window.confirm('Are you sure you want to delete this employee?');
    if (!confirmDelete) return;

    try {
      const res = await fetch(`${API_BASE}/delete.php`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ emp_id }),
      });

      const result = await res.json();

      if (result.success) {
        alert('Employee deleted successfully');
        setEmployees((prev) => prev.filter((emp) => emp.emp_id !== emp_id));
      } else {
        alert(result.message || 'Delete failed');
      }
    } catch (error) {
      console.error('Delete error:', error);
      alert('Error deleting employee');
    }
  };

  return (
    <div className="max-w-7xl mx-auto p-6">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Employee List</h2>

      <div className="overflow-x-auto shadow-lg rounded-xl">
        <table className="min-w-full bg-white rounded-xl">
          <thead className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
            <tr>
              <th className="text-left py-3 px-4">Emp ID</th>
              <th className="text-left py-3 px-4">Name</th>
              <th className="text-left py-3 px-4">Department</th>
              <th className="text-left py-3 px-4">Email</th>
              <th className="text-left py-3 px-4">Mobile</th>
              <th className="text-center py-3 px-4">Actions</th>
            </tr>
          </thead>
          <tbody>
            {employees.map((emp, index) => (
              <tr key={emp.emp_id} className={index % 2 === 0 ? 'bg-gray-100' : 'bg-white'}>
                <td className="py-3 px-4">{emp.emp_id}</td>
                <td className="py-3 px-4">{emp.first_name} {emp.last_name}</td>
                <td className="py-3 px-4">{emp.department}</td>
                <td className="py-3 px-4">{emp.email}</td>
                <td className="py-3 px-4">{emp.mobile}</td>
                <td className="py-3 px-4 flex flex-wrap justify-center gap-2">
                  {/* 👁️ View */}
                  <button
                    className="text-blue-600 hover:text-blue-800"
                    title="View"
                    onClick={() => onViewOrEdit(emp)}
                  >
                    <FaEye />
                  </button>

                  {/* ✏️ Edit */}
                  <button
                    className="text-green-600 hover:text-green-800"
                    title="Edit"
                    onClick={() => onViewOrEdit(emp)}
                  >
                    <FaEdit />
                  </button>

                  {/* 🗑️ Delete */}
                  <button
                    className="text-red-600 hover:text-red-800"
                    title="Delete"
                    onClick={() => handleDelete(emp.emp_id)}
                  >
                    <FaTrash />
                  </button>

                  {/* 💰 Salary */}
                  <button className="text-yellow-600 hover:text-yellow-800" title="Salary">
                    <FaMoneyCheckAlt />
                  </button>

                  {/* 🌴 Leave */}
                  <button className="text-pink-600 hover:text-pink-800" title="Leave">
                    <FaUmbrellaBeach />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default EmployeeList;
