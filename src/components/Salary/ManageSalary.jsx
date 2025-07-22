import React from 'react';
import { FaEye } from 'react-icons/fa';

const salaryData = [
  {
    id: 'EMP001',
    name: 'Subisha M',
    salary: 25000,
    allowance: 5000,
    total: 30000,
    creationDate: '2024-07-01',
  },
  {
    id: 'EMP002',
    name: 'Anand R',
    salary: 30000,
    allowance: 4000,
    total: 34000,
    creationDate: '2024-07-02',
  },
  // Add more salary records here...
];

const ManageSalary = () => {
  return (
    <div className="max-w-7xl mx-auto p-6 mt-10">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Manage Salary</h2>

      <div className="overflow-x-auto shadow-xl rounded-xl bg-white">
        <table className="min-w-full table-auto text-sm">
          <thead className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
            <tr>
              <th className="py-3 px-4 text-left">Emp ID</th>
              <th className="py-3 px-4 text-left">Name</th>
              <th className="py-3 px-4 text-left">Salary</th>
              <th className="py-3 px-4 text-left">Allowance</th>
              <th className="py-3 px-4 text-left">Total</th>
              <th className="py-3 px-4 text-left">Creation Date</th>
              <th className="py-3 px-4 text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {salaryData.map((data, index) => (
              <tr key={data.id} className={index % 2 === 0 ? 'bg-gray-100' : 'bg-white'}>
                <td className="py-3 px-4">{data.id}</td>
                <td className="py-3 px-4">{data.name}</td>
                <td className="py-3 px-4 text-green-700 font-semibold">₹ {data.salary}</td>
                <td className="py-3 px-4 text-yellow-700 font-semibold">₹ {data.allowance}</td>
                <td className="py-3 px-4 text-blue-700 font-semibold">₹ {data.total}</td>
                <td className="py-3 px-4 text-gray-600">{data.creationDate}</td>
                <td className="py-3 px-4 flex justify-center">
                  <button className="text-blue-600 hover:text-blue-800" title="View">
                    <FaEye />
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

export default ManageSalary;
