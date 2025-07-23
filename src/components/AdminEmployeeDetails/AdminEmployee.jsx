
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const API_BASE = 'http://localhost/EMS-backend/api/employee';

const AdminEmployeeProfile = () => {
  const { emp_id } = useParams();
  const [employee, setEmployee] = useState(null);
const navigate = useNavigate();

  useEffect(() => {
    fetch(`${API_BASE}/get_one.php?emp_id=${emp_id}`)
      .then(res => res.json())
      .then(data => setEmployee(data))
      .catch(err => console.error('Error fetching profile:', err));
  }, [emp_id]);

  if (!employee) return <div className="text-center p-10">Loading profile...</div>;

  return (
    <div className="max-w-5xl mx-auto bg-white shadow-2xl rounded-2xl p-8 mt-10 mb-10">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Employee Profile</h2>

      <div className="flex flex-col md:flex-row items-center md:items-start gap-10">
        <div className="flex flex-col items-center">
<img
  src={employee.photo ? `http://localhost/EMS-backend/uploads/${employee.photo}` : 'https://i.pravatar.cc/100'}
  onError={(e) => {
    e.target.src = 'https://i.pravatar.cc/100';
  }}
  alt="Employee"
  className="w-32 h-32 rounded-full border-4 border-blue-300 shadow-md"
/>

          <p className="mt-4 text-xl font-semibold">{employee.first_name} {employee.last_name}</p>
          <p className="text-gray-500">{employee.emp_id}</p>
          <div className="mt-6 flex flex-col gap-3 w-44">
            
<button
  className="bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg"
  onClick={() => navigate(`/mainlayout/admin/employee/${emp_id}/edit`)}
>
  Update
</button>
            {/* <button className="bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg">Update</button> */}
            <button className="bg-green-600 hover:bg-green-700 text-white py-2 rounded-lg">Salary</button>
            <button className="bg-yellow-500 hover:bg-yellow-600 text-white py-2 rounded-lg">Leave</button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 flex-grow">
          <div><label className="block text-gray-600 font-medium mb-1">Email</label><div className="text-gray-800">{employee.email}</div></div>
          <div><label className="block text-gray-600 font-medium mb-1">Mobile No</label><div className="text-gray-800">{employee.mobile}</div></div>
          <div><label className="block text-gray-600 font-medium mb-1">Department</label><div className="text-gray-800">{employee.department}</div></div>
          <div><label className="block text-gray-600 font-medium mb-1">Date of Birth</label><div className="text-gray-800">{employee.dob}</div></div>
          <div><label className="block text-gray-600 font-medium mb-1">Date of Joining</label><div className="text-gray-800">{employee.doj}</div></div>
          <div><label className="block text-gray-600 font-medium mb-1">Country</label><div className="text-gray-800">{employee.country}</div></div>
          <div><label className="block text-gray-600 font-medium mb-1">State</label><div className="text-gray-800">{employee.state}</div></div>
          <div><label className="block text-gray-600 font-medium mb-1">City</label><div className="text-gray-800">{employee.city}</div></div>
          <div className="md:col-span-2"><label className="block text-gray-600 font-medium mb-1">Address</label><div className="text-gray-800">{employee.address}</div></div>
        </div>
      </div>
    </div>
  );
};

export default AdminEmployeeProfile;
