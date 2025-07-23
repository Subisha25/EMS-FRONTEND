import React, { useEffect, useState } from 'react';
import { FaEye, FaEdit, FaTrash, FaMoneyCheckAlt, FaUmbrellaBeach } from 'react-icons/fa';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const API_BASE = 'http://localhost/EMS-backend/api/employee'; // Update if different

const EmployeeList = () => {
  const [employees, setEmployees] = useState([]);
const navigate = useNavigate();

  // Get all employees
  const fetchEmployees = async () => {
    try {
      const res = await axios.get(`${API_BASE}/get_all.php`);
      setEmployees(res.data);
    } catch (err) {
      console.error('Error fetching employees:', err);
    }
  };

  // Delete an employee
  const deleteEmployee = async (id) => {
    if (window.confirm('Are you sure you want to delete this employee?')) {
      try {
        const res = await axios.post(`${API_BASE}/delete.php`, { id });
        console.log("DELETE RESPONSE:", res.data);
if (res.data && res.data.status === true) {
  alert('Employee deleted successfully!');
  fetchEmployees();
} else {
  console.warn("Unexpected response format", res.data);
  alert(res.data?.message || 'Failed to delete employee.');
}

      } catch (err) {
        console.error('Delete error:', err);
      }
    }
  };

  useEffect(() => {
    fetchEmployees();
  }, []);

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
              <tr
                key={emp.id}
                className={index % 2 === 0 ? 'bg-gray-100' : 'bg-white'}
              >
                <td className="py-3 px-4">{emp.emp_id}</td>
                <td className="py-3 px-4">{emp.first_name} {emp.last_name}</td>
                <td className="py-3 px-4">{emp.department}</td>
                <td className="py-3 px-4">{emp.email}</td>
                <td className="py-3 px-4">{emp.mobile}</td>
                <td className="py-3 px-4 flex flex-wrap justify-center gap-2">
          <button
  className="text-blue-600 hover:text-blue-800"
  title="View"
  onClick={() => navigate(`/mainlayout/adminemployeeprofile/${emp.emp_id}`)}
>
  <FaEye />
</button>


                  {/* <button
                    className="text-green-600 hover:text-green-800"
                    title="Edit"
                  >
                    <FaEdit />
                  </button> */}
                  <button
                    className="text-red-600 hover:text-red-800"
                    title="Delete"
                    onClick={() => deleteEmployee(emp.id)}
                  >
                    <FaTrash />
                  </button>
                  {/* <button className="text-yellow-600 hover:text-yellow-800" title="Salary">
                    <FaMoneyCheckAlt />
                  </button>
                  <button className="text-pink-600 hover:text-pink-800" title="Leave">
                    <FaUmbrellaBeach />
                  </button> */}
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
