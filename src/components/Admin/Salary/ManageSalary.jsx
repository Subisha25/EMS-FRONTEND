// // import React from 'react';
// // import { FaEye } from 'react-icons/fa';

// // const salaryData = [
// //   {
// //     id: 'EMP001',
// //     name: 'Subisha M',
// //     salary: 25000,
// //     allowance: 5000,
// //     total: 30000,
// //     creationDate: '2024-07-01',
// //   },
// //   {
// //     id: 'EMP002',
// //     name: 'Anand R',
// //     salary: 30000,
// //     allowance: 4000,
// //     total: 34000,
// //     creationDate: '2024-07-02',
// //   },
// //   // Add more salary records here...
// // ];

// // const ManageSalary = () => {
// //   return (
// //     <div className="max-w-7xl mx-auto p-6 mt-10">
// //       <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Manage Salary</h2>

// //       <div className="overflow-x-auto shadow-xl rounded-xl bg-white">
// //         <table className="min-w-full table-auto text-sm">
// //           <thead className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
// //             <tr>
// //               <th className="py-3 px-4 text-left">Emp ID</th>
// //               <th className="py-3 px-4 text-left">Name</th>
// //               <th className="py-3 px-4 text-left">Salary</th>
// //               <th className="py-3 px-4 text-left">Allowance</th>
// //               <th className="py-3 px-4 text-left">Total</th>
// //               <th className="py-3 px-4 text-left">Creation Date</th>
// //               <th className="py-3 px-4 text-center">Actions</th>
// //             </tr>
// //           </thead>
// //           <tbody>
// //             {salaryData.map((data, index) => (
// //               <tr key={data.id} className={index % 2 === 0 ? 'bg-gray-100' : 'bg-white'}>
// //                 <td className="py-3 px-4">{data.id}</td>
// //                 <td className="py-3 px-4">{data.name}</td>
// //                 <td className="py-3 px-4 text-green-700 font-semibold">₹ {data.salary}</td>
// //                 <td className="py-3 px-4 text-yellow-700 font-semibold">₹ {data.allowance}</td>
// //                 <td className="py-3 px-4 text-blue-700 font-semibold">₹ {data.total}</td>
// //                 <td className="py-3 px-4 text-gray-600">{data.creationDate}</td>
// //                 <td className="py-3 px-4 flex justify-center">
// //                   <button className="text-blue-600 hover:text-blue-800" title="View">
// //                     <FaEye />
// //                   </button>
// //                 </td>
// //               </tr>
// //             ))}
// //           </tbody>
// //         </table>
// //       </div>
// //     </div>
// //   );
// // };

// // export default ManageSalary;

// import React, { useEffect, useState } from 'react';
// import { FaEye } from 'react-icons/fa';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';



// const ManageSalary = () => {
//   const [salaryData, setSalaryData] = useState([]);
// const navigate = useNavigate();

//   useEffect(() => {
//     const fetchSalaryData = async () => {
//       try {
//         const res = await axios.get(`http://localhost/ems-backend/api/payslip/get_all.php`);
//         if (res.data.status === 'success') {
//           const data = res.data.data.map((item) => ({
//             id: item.employee_id,
//             name: item.name,
//             salary: item.basic_salary,
//             allowance: item.lop || 0, // Adjust if you have another allowance field
//             total:
//               (parseFloat(item.basic_salary) -
//               parseFloat(item.professional_tax || 0) -
//               parseFloat(item.income_tax || 0) -
//               parseFloat(item.lop || 0)),
//             creationDate: item.salary_month,
//           }));
//           setSalaryData(data);
//         }
//       } catch (error) {
//         console.error('Failed to fetch salary data:', error);
//       }
//     };

//     fetchSalaryData();
//   }, []);

//   return (
//     <div className="max-w-7xl mx-auto p-6 mt-10">

//       <div className="flex justify-end mb-4">
//   <button
//     onClick={() => navigate('/mainlayout/add-salary')}
//     className="bg-[#101c3d] text-white font-bold px-4 py-2 rounded  transition"
//   >
//     ➕ Add Salary
//   </button>
// </div>

//       <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Manage Salary</h2>

//       <div className="overflow-x-auto shadow-xl rounded-xl bg-white">
//         <table className="min-w-full table-auto text-sm">
//           <thead className="bg-[#101c3d] text-white">
//             <tr>
//               <th className="py-3 px-4 text-left">Emp ID</th>
//               <th className="py-3 px-4 text-left">Name</th>
//               <th className="py-3 px-4 text-left">Salary</th>
//               <th className="py-3 px-4 text-left">Allowance</th>
//               <th className="py-3 px-4 text-left">Total</th>
//               <th className="py-3 px-4 text-left">Creation Date</th>
//               <th className="py-3 px-4 text-center">Actions</th>
//             </tr>
//           </thead>
//           <tbody>
//             {salaryData.map((data, index) => (
//               <tr key={index} className={index % 2 === 0 ? 'bg-gray-100' : 'bg-white'}>
//                 <td className="py-3 px-4">{data.id}</td>
//                 <td className="py-3 px-4">{data.name}</td>
//                 <td className="py-3 px-4 text-green-700 font-semibold">₹ {data.salary}</td>
//                 <td className="py-3 px-4 text-yellow-700 font-semibold">₹ {data.allowance}</td>
//                 <td className="py-3 px-4 text-blue-700 font-semibold">₹ {data.total}</td>
//                 <td className="py-3 px-4 text-gray-600">{data.creationDate}</td>
//                 <td className="py-3 px-4 flex justify-center">
//                   {/* <button className="text-blue-600 hover:text-blue-800" title="View"   onClick={() => navigate(`/mainlayout/payslipdetails/${data.id}`)}
// >
//                     <FaEye />
//                   </button> */}

//                   <button
//   className="text-blue-600 hover:text-blue-800"
//   title="View"
//   onClick={() =>
//     navigate(`/mainlayout/payslipdetails/${data.id}`, {
//       state: { salary_month: data.creationDate },
//     })
//   }
// >
//   <FaEye />
// </button>

//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default ManageSalary;


import React, { useEffect, useState } from 'react';
import { FaEye } from 'react-icons/fa';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import API from '../../../utils/api';

const ManageSalary = () => {
  const [salaryData, setSalaryData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1); // ✅ pagination state
  const recordsPerPage = 10;
  const navigate = useNavigate();

  useEffect(() => {
    const fetchSalaryData = async () => {
      try {
        const res = await API.get(`api/payslip/get_all.php`);
        if (res.data.status === 'success') {
          const data = res.data.data.map((item) => ({
            id: item.employee_id,
            name: item.name,
            salary: item.basic_salary,
            allowance: item.lop || 0,
            total:
              (parseFloat(item.basic_salary) -
                parseFloat(item.professional_tax || 0) -
                parseFloat(item.income_tax || 0) -
                parseFloat(item.lop || 0)),
            creationDate: item.salary_month,
          }));
          setSalaryData(data);
        }
      } catch (error) {
        console.error('Failed to fetch salary data:', error);
      }
    };

    fetchSalaryData();
  }, []);

  // ✅ Pagination logic
  const indexOfLastRecord = currentPage * recordsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
  const currentRecords = salaryData.slice(indexOfFirstRecord, indexOfLastRecord);
  const totalPages = Math.ceil(salaryData.length / recordsPerPage);

  return (
    <div className="max-w-7xl mx-auto p-6 mt-10">

      <div className="flex justify-end mb-4">
        <button
          onClick={() => navigate('/mainlayout/add-salary')}
          className="bg-[#101c3d] text-white font-bold px-4 py-2 rounded transition"
        >
          ➕ Add Salary
        </button>
      </div>

      <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Manage Salary</h2>

      <div className="overflow-x-auto shadow-xl rounded-xl bg-white">
        <table className="min-w-full table-auto text-sm">
          <thead className="bg-[#101c3d] text-white">
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
            {currentRecords.map((data, index) => (
              <tr key={index} className={index % 2 === 0 ? 'bg-gray-100' : 'bg-white'}>
                <td className="py-3 px-4">{data.id}</td>
                <td className="py-3 px-4">{data.name}</td>
                <td className="py-3 px-4 text-green-700 font-semibold">₹ {data.salary}</td>
                <td className="py-3 px-4 text-yellow-700 font-semibold">₹ {data.allowance}</td>
                <td className="py-3 px-4 text-blue-700 font-semibold">₹ {data.total}</td>
                <td className="py-3 px-4 text-gray-600">{data.creationDate}</td>
                <td className="py-3 px-4 flex justify-center">
                  <button
                    className="text-blue-600 hover:text-blue-800"
                    title="View"
                    onClick={() =>
                      navigate(`/mainlayout/payslipdetails/${data.id}`, {
                        state: { salary_month: data.creationDate },
                      })
                    }
                  >
                    <FaEye />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* ✅ Pagination Controls */}
      {totalPages > 1 && (
        <div className="flex justify-center items-center mt-6 space-x-2">
          <button
            className="px-3 py-1 bg-gray-200 rounded-md disabled:opacity-50"
            onClick={() => setCurrentPage((prev) => prev - 1)}
            disabled={currentPage === 1}
          >
            Prev
          </button>

          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i + 1}
              onClick={() => setCurrentPage(i + 1)}
              className={`px-3 py-1 rounded-md ${
                currentPage === i + 1
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-200 hover:bg-gray-300'
              }`}
            >
              {i + 1}
            </button>
          ))}

          <button
            className="px-3 py-1 bg-gray-200 rounded-md disabled:opacity-50"
            onClick={() => setCurrentPage((prev) => prev + 1)}
            disabled={currentPage === totalPages}
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
};

export default ManageSalary;
