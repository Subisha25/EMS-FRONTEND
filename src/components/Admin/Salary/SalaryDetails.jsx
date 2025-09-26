// // // import React, { useEffect, useState } from 'react';
// // // import { useParams } from 'react-router-dom';
// // // import axios from 'axios';

// // // const PayslipDetails = () => {
// // //   const { employeeId } = useParams();
// // //   const [payslip, setPayslip] = useState(null);

// // //   useEffect(() => {
// // //     const fetchPayslipDetails = async () => {
// // //       try {
// // //         const res = await axios.get(`http://localhost/ems-backend/api/payslip/get.php?employee_id=${employeeId}`);
// // //         if (res.data.status === 'success' && res.data.data.length > 0) {
// // //           setPayslip(res.data.data[0]); // show latest payslip
// // //         }
// // //       } catch (error) {
// // //         console.error('Error fetching payslip:', error);
// // //       }
// // //     };

// // //     fetchPayslipDetails();
// // //   }, [employeeId]);

// // //   if (!payslip) {
// // //     return <p className="text-center mt-10 text-gray-600">Loading payslip details...</p>;
// // //   }

// // //   return (
// // //     <div className="max-w-2xl mx-auto mt-10 p-6 shadow-lg bg-white rounded-lg">
// // //       <h2 className="text-2xl font-bold text-center mb-6 text-blue-700">Payslip Details</h2>
// // //       <div className="space-y-3 text-gray-800">
// // //         <p><strong>Employee ID:</strong> {payslip.employee_id}</p>
// // //         <p><strong>Name:</strong> {payslip.name}</p>
// // //         <p><strong>Designation:</strong> {payslip.designation}</p>
// // //         <p><strong>Date of Joining:</strong> {payslip.doj}</p>
// // //         <p><strong>Salary Month:</strong> {payslip.salary_month}</p>
// // //         <hr />
// // //         <p><strong>Basic Salary:</strong> ₹ {payslip.basic_salary}</p>
// // //         <p><strong>Professional Tax:</strong> ₹ {payslip.professional_tax}</p>
// // //         <p><strong>Income Tax:</strong> ₹ {payslip.income_tax}</p>
// // //         <p><strong>LOP:</strong> ₹ {payslip.lop}</p>
// // //         <p><strong>Total Salary:</strong> ₹ {
// // //           parseFloat(payslip.basic_salary) -
// // //           parseFloat(payslip.professional_tax || 0) -
// // //           parseFloat(payslip.income_tax || 0) -
// // //           parseFloat(payslip.lop || 0)
// // //         }</p>
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default PayslipDetails;


// // import React, { useEffect, useRef, useState } from 'react';
// // import { useParams } from 'react-router-dom';
// // import axios from 'axios';
// // import PCS from '../assets/logo-removebg-preview.1718a43bb7173db834d7.png';

// // const PayslipDetails = () => {
// //   const { employeeId } = useParams();
// //   const slipRef = useRef();
// //   const [payslip, setPayslip] = useState(null);

// //   const handlePrint = () => {
// //     const printContents = slipRef.current.innerHTML;
// //     const originalContents = document.body.innerHTML;
// //     document.body.innerHTML = printContents;
// //     window.print();
// //     document.body.innerHTML = originalContents;
// //     window.location.reload();
// //   };

// //   useEffect(() => {
// //     const fetchPayslipDetails = async () => {
// //       try {
// //         const res = await axios.get(`http://localhost/ems-backend/api/payslip/get.php?employee_id=${employeeId}`);
// //         if (res.data.status === 'success' && res.data.data.length > 0) {
// //           setPayslip(res.data.data[0]); // latest payslip
// //         }
// //       } catch (error) {
// //         console.error('Error fetching payslip:', error);
// //       }
// //     };

// //     fetchPayslipDetails();
// //   }, [employeeId]);

// //   if (!payslip) return <div className="text-center py-8">Loading payslip...</div>;

// //   const {
// //     employee_id,
// //     name,
// //     designation,
// //     doj,
// //     basic_salary,
// //     professional_tax,
// //     income_tax,
// //     lop,
// //     salary_month,
// //   } = payslip;

// //   // Salary breakdown
// //   const originalBasic = parseFloat(basic_salary || 0);
// //   const houseRentAllowance = originalBasic * 0.2;
// //   const transportAllowance = originalBasic * 0.1;
// //   const finalBasic = originalBasic - houseRentAllowance - transportAllowance;

// //   const pt = parseFloat(professional_tax || 0);
// //   const it = parseFloat(income_tax || 0);
// //   const lopVal = parseFloat(lop || 0);

// //   const totalEarnings = finalBasic + houseRentAllowance + transportAllowance;
// //   const totalDeductions = pt + it + lopVal;
// //   const netPay = totalEarnings - totalDeductions;

// //   return (
// //     <div className="p-4">
// //       {/* Print Button */}
// //       <div className="flex justify-end mb-4">
// //         <button
// //           onClick={handlePrint}
// //           className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition"
// //         >
// //           🖨 Print / Download PDF
// //         </button>
// //       </div>

// //       {/* Payslip Content */}
// //       <div
// //         ref={slipRef}
// //         className="max-w-4xl mx-auto p-8 bg-white shadow-2xl rounded-xl border border-gray-200 print:shadow-none print:border-none print:rounded-none print:p-0"
// //       >
// //         {/* Header */}
// //         <div className="text-center mb-6">
// //           <img
// //             src={PCS}
// //             alt="Company Logo"
// //             className="mx-auto w-[100px] h-[35px] mb-2"
// //           />
// //           <h1 className="text-2xl font-bold text-gray-800">Salary Slip</h1>
// //           <p className="font-medium pt-1 text-gray-700">
// //             For the Month of{" "}
// //             <span className="text-blue-600 font-bold">
// //               {new Date(payslip.salary_month + "-01").toLocaleDateString("en-US", {
// //                 year: "numeric",
// //                 month: "long",
// //               })}
// //             </span>
// //           </p>
// //         </div>

// //         {/* Employee Info */}
// //         <div className="grid grid-cols-2 gap-64 text-sm mb-6">
// //           <div>
// //             <p><span className="font-semibold">Name:</span> {name}</p>
// //             <p><span className="font-semibold">Designation:</span> {designation}</p>
// //           </div>
// //           <div>
// //             <p><span className="font-semibold">Employee ID:</span> {employee_id}</p>
// //             <p><span className="font-semibold">Date of Joining:</span> {doj}</p>
// //           </div>
// //         </div>

// //         {/* Salary Table */}
// //         <div className="overflow-x-auto mb-8">
// //           <table className="w-full border border-gray-300 text-sm">
// //             <thead className="bg-gray-100">
// //               <tr>
// //                 <th className="border px-3 py-2 text-left">Earnings</th>
// //                 <th className="border px-3 py-2 text-right">Amount (₹)</th>
// //                 <th className="border px-3 py-2 text-left">Deductions</th>
// //                 <th className="border px-3 py-2 text-right">Amount (₹)</th>
// //               </tr>
// //             </thead>
// //             <tbody>
// //               <tr>
// //                 <td className="border px-3 py-2">Basic Salary</td>
// //                 <td className="border px-3 py-2 text-right">{finalBasic.toFixed(2)}</td>
// //                 <td className="border px-3 py-2">Professional Tax</td>
// //                 <td className="border px-3 py-2 text-right">{pt.toFixed(2)}</td>
// //               </tr>
// //               <tr>
// //                 <td className="border px-3 py-2">House Rent Allowance</td>
// //                 <td className="border px-3 py-2 text-right">{houseRentAllowance.toFixed(2)}</td>
// //                 <td className="border px-3 py-2">Income Tax</td>
// //                 <td className="border px-3 py-2 text-right">{it.toFixed(2)}</td>
// //               </tr>
// //               <tr>
// //                 <td className="border px-3 py-2">Transport Allowance</td>
// //                 <td className="border px-3 py-2 text-right">{transportAllowance.toFixed(2)}</td>
// //                 <td className="border px-3 py-2">Loss of Pay</td>
// //                 <td className="border px-3 py-2 text-right">{lopVal.toFixed(2)}</td>
// //               </tr>
// //               <tr className="bg-gray-50 font-semibold">
// //                 <td className="border px-3 py-2">Total Earnings</td>
// //                 <td className="border px-3 py-2 text-right">{totalEarnings.toFixed(2)}</td>
// //                 <td className="border px-3 py-2">Total Deductions</td>
// //                 <td className="border px-3 py-2 text-right">{totalDeductions.toFixed(2)}</td>
// //               </tr>
// //             </tbody>
// //           </table>
// //         </div>

// //         {/* Net Pay */}
// //         <div className="text-center mt-6">
// //           <h2 className="text-xl font-bold text-green-600">
// //             Net Pay: ₹{netPay.toFixed(2)}
// //           </h2>
// //         </div>

// //         {/* Footer */}
// //         <div className="border-t mt-8 pt-4 text-center text-xs text-gray-500 print:mt-12">
// //           <p>This is a computer-generated payslip and does not require signature.</p>
// //           <p className='text-blue-800'>&copy; 2025 Pavitha Consultancy Services</p>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default PayslipDetails;


// import React, { useEffect, useRef, useState } from 'react';
// import { useParams, useLocation } from 'react-router-dom';
// import axios from 'axios';
// import PCS from '../assets/logo-removebg-preview.1718a43bb7173db834d7.png';

// const PayslipDetails = () => {
//   const { employeeId } = useParams();
//   const location = useLocation();
//   const salaryMonth = location.state?.salary_month;

//   const slipRef = useRef();
//   const [payslip, setPayslip] = useState(null);

//   const handlePrint = () => {
//     const printContents = slipRef.current.innerHTML;
//     const originalContents = document.body.innerHTML;
//     document.body.innerHTML = printContents;
//     window.print();
//     document.body.innerHTML = originalContents;
//     window.location.reload();
//   };

//   useEffect(() => {
//     const fetchPayslipDetails = async () => {
//       try {
//         const res = await axios.get(`http://localhost/ems-backend/api/payslip/get.php?employee_id=${employeeId}&salary_month=${salaryMonth}`);
//         if (res.data.status === 'success' && res.data.data.length > 0) {
//           setPayslip(res.data.data[0]); // payslip for that month
//         }
//       } catch (error) {
//         console.error('Error fetching payslip:', error);
//       }
//     };

//     if (employeeId && salaryMonth) {
//       fetchPayslipDetails();
//     }
//   }, [employeeId, salaryMonth]);

//   if (!payslip) return <div className="text-center py-8">Loading payslip...</div>;

//   const {
//     employee_id,
//     name,
//     designation,
//     doj,
//     basic_salary,
//     professional_tax,
//     income_tax,
//     lop,
//     salary_month,
//   } = payslip;

//   // Salary breakdown
//   const originalBasic = parseFloat(basic_salary || 0);
//   const houseRentAllowance = originalBasic * 0.2;
//   const transportAllowance = originalBasic * 0.1;
//   const finalBasic = originalBasic - houseRentAllowance - transportAllowance;

//   const pt = parseFloat(professional_tax || 0);
//   const it = parseFloat(income_tax || 0);
//   const lopVal = parseFloat(lop || 0);

//   const totalEarnings = finalBasic + houseRentAllowance + transportAllowance;
//   const totalDeductions = pt + it + lopVal;
//   const netPay = totalEarnings - totalDeductions;

//   return (
//     <div className="p-4">
//       <div className="flex justify-end mb-4">
//         <button
//           onClick={handlePrint}
//           className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition"
//         >
//           🖨 Print / Download PDF
//         </button>
//       </div>

//       <div
//         ref={slipRef}
//         className="max-w-4xl mx-auto p-8 bg-white shadow-2xl rounded-xl border border-gray-200 print:shadow-none print:border-none print:rounded-none print:p-0"
//       >
//         <div className="text-center mb-6">
//           <img
//             src={PCS}
//             alt="Company Logo"
//             className="mx-auto w-[100px] h-[35px] mb-2"
//           />
//           <h1 className="text-2xl font-bold text-gray-800">Salary Slip</h1>
//           <p className="font-medium pt-1 text-gray-700">
//             For the Month of{" "}
//             <span className="text-blue-600 font-bold">
//               {new Date(salary_month + "-01").toLocaleDateString("en-US", {
//                 year: "numeric",
//                 month: "long",
//               })}
//             </span>
//           </p>
//         </div>

//         <div className="grid grid-cols-2 gap-64 text-sm mb-6">
//           <div>
//             <p><span className="font-semibold">Name:</span> {name}</p>
//             <p><span className="font-semibold">Designation:</span> {designation}</p>
//           </div>
//           <div>
//             <p><span className="font-semibold">Employee ID:</span> {employee_id}</p>
//             <p><span className="font-semibold">Date of Joining:</span> {doj}</p>
//           </div>
//         </div>

//         <div className="overflow-x-auto mb-8">
//           <table className="w-full border border-gray-300 text-sm">
//             <thead className="bg-gray-100">
//               <tr>
//                 <th className="border px-3 py-2 text-left">Earnings</th>
//                 <th className="border px-3 py-2 text-right">Amount (₹)</th>
//                 <th className="border px-3 py-2 text-left">Deductions</th>
//                 <th className="border px-3 py-2 text-right">Amount (₹)</th>
//               </tr>
//             </thead>
//             <tbody>
//               <tr>
//                 <td className="border px-3 py-2">Basic Salary</td>
//                 <td className="border px-3 py-2 text-right">{finalBasic.toFixed(2)}</td>
//                 <td className="border px-3 py-2">Professional Tax</td>
//                 <td className="border px-3 py-2 text-right">{pt.toFixed(2)}</td>
//               </tr>
//               <tr>
//                 <td className="border px-3 py-2">House Rent Allowance</td>
//                 <td className="border px-3 py-2 text-right">{houseRentAllowance.toFixed(2)}</td>
//                 <td className="border px-3 py-2">Income Tax</td>
//                 <td className="border px-3 py-2 text-right">{it.toFixed(2)}</td>
//               </tr>
//               <tr>
//                 <td className="border px-3 py-2">Transport Allowance</td>
//                 <td className="border px-3 py-2 text-right">{transportAllowance.toFixed(2)}</td>
//                 <td className="border px-3 py-2">Loss of Pay</td>
//                 <td className="border px-3 py-2 text-right">{lopVal.toFixed(2)}</td>
//               </tr>
//               <tr className="bg-gray-50 font-semibold">
//                 <td className="border px-3 py-2">Total Earnings</td>
//                 <td className="border px-3 py-2 text-right">{totalEarnings.toFixed(2)}</td>
//                 <td className="border px-3 py-2">Total Deductions</td>
//                 <td className="border px-3 py-2 text-right">{totalDeductions.toFixed(2)}</td>
//               </tr>
//             </tbody>
//           </table>
//         </div>

//         <div className="text-center mt-6">
//           <h2 className="text-xl font-bold text-green-600">
//             Net Pay: ₹{netPay.toFixed(2)}
//           </h2>
//         </div>

//         <div className="border-t mt-8 pt-4 text-center text-xs text-gray-500 print:mt-12">
//           <p>This is a computer-generated payslip and does not require signature.</p>
//           <p className='text-blue-800'>&copy; 2025 Pavitha Consultancy Services</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default PayslipDetails;

import React, { useEffect, useRef, useState } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import axios from 'axios';
import PCS from '../assets/logo-removebg-preview.1718a43bb7173db834d7.png';
import { useNavigate } from 'react-router-dom'; // also add this
import API from '../../../utils/api';

const PayslipDetails = () => {
  const { employeeId } = useParams();
  const location = useLocation();
  const salaryMonth = location.state?.salary_month;
  const navigate = useNavigate();
  const slipRef = useRef();
  const [payslip, setPayslip] = useState(null);


  const handlePrint = () => {
    const printContents = slipRef.current.innerHTML;
    const originalContents = document.body.innerHTML;
    document.body.innerHTML = printContents;
    window.print();
    document.body.innerHTML = originalContents;
    window.location.reload();
  };



  useEffect(() => {
    // redirect if salaryMonth is missing
    if (!salaryMonth) {
      alert('Salary month not provided. Please navigate from Manage Salary page.');
      navigate('/mainlayout/managesalary');
      return;
    }

    const fetchPayslipDetails = async () => {
      try {
        const res = await API.get(
          `api/payslip/get.php?employee_id=${employeeId}&salary_month=${salaryMonth}`
        );
        if (res.data.status === 'success' && res.data.data.length > 0) {
          setPayslip(res.data.data[0]);
        }
      } catch (error) {
        console.error('Error fetching payslip:', error);
      }
    };

    fetchPayslipDetails();
  }, [employeeId, salaryMonth, navigate]);


  if (!payslip) return <div className="text-center py-8">Loading payslip...</div>;

  const {
    employee_id,
    name,
    designation,
    doj,
    basic_salary,
    professional_tax,
    income_tax,
    lop,
    salary_month,
  } = payslip;

  // Salary breakdown
  const originalBasic = parseFloat(basic_salary || 0);
  const houseRentAllowance = originalBasic * 0.2;
  const transportAllowance = originalBasic * 0.1;
  const finalBasic = originalBasic - houseRentAllowance - transportAllowance;

  const pt = parseFloat(professional_tax || 0);
  const it = parseFloat(income_tax || 0);
  const lopVal = parseFloat(lop || 0);

  const totalEarnings = finalBasic + houseRentAllowance + transportAllowance;
  const totalDeductions = pt + it + lopVal;
  const netPay = totalEarnings - totalDeductions;

  return (
    <div className="p-4">
      <div className="flex justify-end mb-4">
        <button
          onClick={handlePrint}
          className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition"
        >
          🖨 Print / Download PDF
        </button>
      </div>

      <div
        ref={slipRef}
        className="max-w-4xl mx-auto p-8 bg-white shadow-2xl rounded-xl border border-gray-200 print:shadow-none print:border-none print:rounded-none print:p-0"
      >
        <div className="text-center mb-6">
          <img
            src={PCS}
            alt="Company Logo"
            className="mx-auto w-[100px] h-[35px] mb-2"
          />
          <h1 className="text-2xl font-bold text-gray-800">Salary Slip</h1>
          <p className="font-medium pt-1 text-gray-700">
            For the Month of{" "}
            <span className="text-blue-600 font-bold">
              {new Date(salary_month + "-01").toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
              })}
            </span>
          </p>
        </div>

        <div className="grid grid-cols-2 gap-64 text-sm mb-6">
          <div>
            <p><span className="font-semibold">Name:</span> {name}</p>
            <p><span className="font-semibold">Designation:</span> {designation}</p>
          </div>
          <div>
            <p><span className="font-semibold">Employee ID:</span> {employee_id}</p>
            <p><span className="font-semibold">Date of Joining:</span> {doj}</p>
          </div>
        </div>

        <div className="overflow-x-auto mb-8">
          <table className="w-full border border-gray-300 text-sm">
            <thead className="bg-gray-100">
              <tr>
                <th className="border px-3 py-2 text-left">Earnings</th>
                <th className="border px-3 py-2 text-right">Amount (₹)</th>
                <th className="border px-3 py-2 text-left">Deductions</th>
                <th className="border px-3 py-2 text-right">Amount (₹)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border px-3 py-2">Basic Salary</td>
                <td className="border px-3 py-2 text-right">{finalBasic.toFixed(2)}</td>
                <td className="border px-3 py-2">Professional Tax</td>
                <td className="border px-3 py-2 text-right">{pt.toFixed(2)}</td>
              </tr>
              <tr>
                <td className="border px-3 py-2">House Rent Allowance</td>
                <td className="border px-3 py-2 text-right">{houseRentAllowance.toFixed(2)}</td>
                <td className="border px-3 py-2">Income Tax</td>
                <td className="border px-3 py-2 text-right">{it.toFixed(2)}</td>
              </tr>
              <tr>
                <td className="border px-3 py-2">Transport Allowance</td>
                <td className="border px-3 py-2 text-right">{transportAllowance.toFixed(2)}</td>
                <td className="border px-3 py-2">Loss of Pay</td>
                <td className="border px-3 py-2 text-right">{lopVal.toFixed(2)}</td>
              </tr>
              <tr className="bg-gray-50 font-semibold">
                <td className="border px-3 py-2">Total Earnings</td>
                <td className="border px-3 py-2 text-right">{totalEarnings.toFixed(2)}</td>
                <td className="border px-3 py-2">Total Deductions</td>
                <td className="border px-3 py-2 text-right">{totalDeductions.toFixed(2)}</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="text-center mt-6">
          <h2 className="text-xl font-bold text-green-600">
            Net Pay: ₹{netPay.toFixed(2)}
          </h2>
        </div>

        <div className="border-t mt-8 pt-4 text-center text-xs text-gray-500 print:mt-12">
          <p>This is a computer-generated payslip and does not require signature.</p>
          <p className='text-blue-800'>&copy; 2025 Pavitha Consultancy Services</p>
        </div>
      </div>
    </div>
  );
};

export default PayslipDetails;
