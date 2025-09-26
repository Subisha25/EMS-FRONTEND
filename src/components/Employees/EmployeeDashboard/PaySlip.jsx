import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import { FaPrint } from "react-icons/fa";
import PCS from "../assets/logo-removebg-preview.1718a43bb7173db834d7.png";
import API from "../../../utils/api";

const PaySlip = () => {
  const slipRef = useRef();
  const [allPayslips, setAllPayslips] = useState([]);
  const [selectedPayslip, setSelectedPayslip] = useState(null);

  const handlePrint = () => {
    const printContents = slipRef.current.innerHTML;
    const originalContents = document.body.innerHTML;
    document.body.innerHTML = printContents;
    window.print();
    document.body.innerHTML = originalContents;
    window.location.reload();
  };

  useEffect(() => {
    const fetchPayslip = async () => {
      const user = JSON.parse(sessionStorage.getItem("user"));
      const empId = user?.emp_id;

      try {
        const response = await API.get(
          `api/payslip/get.php?employee_id=${empId}`
        );

        if (response.data.status === "success" && response.data.data.length > 0) {
          const sortedData = response.data.data
            .sort((a, b) => new Date(a.salary_month) - new Date(b.salary_month));

          // Step 1: Create full month list between first payslip and latest (current) month
          const firstMonth = new Date(sortedData[0].salary_month + "-01");
          const lastMonth = new Date(); // current month

          const fullMonths = [];
          const cursor = new Date(firstMonth);

          while (
            cursor.getFullYear() < lastMonth.getFullYear() ||
            (cursor.getFullYear() === lastMonth.getFullYear() &&
              cursor.getMonth() <= lastMonth.getMonth())
          ) {
            const ym = `${cursor.getFullYear()}-${String(cursor.getMonth() + 1).padStart(2, "0")}`;
            fullMonths.push(ym);
            cursor.setMonth(cursor.getMonth() + 1);
          }

          setAllPayslips({
            fullMonths,
            originalSlips: sortedData
          });

          // Default selected: latest month in fullMonths
          const latestMonth = fullMonths[fullMonths.length - 1];
          const matched = getClosestSlip(sortedData, latestMonth);
          if (matched) {
            setSelectedPayslip({ ...matched, salary_month: latestMonth });
          }
        }
      } catch (err) {
        console.error("Error fetching payslip:", err);
      }
    };

    fetchPayslip();
  }, []);

  const getClosestSlip = (slips, targetMonth) => {
    // Get latest payslip before or same as targetMonth
    const filtered = slips.filter(
      (p) => new Date(p.salary_month + "-01") <= new Date(targetMonth + "-01")
    );
    if (filtered.length === 0) return null;
    return filtered[filtered.length - 1]; // latest match
  };

  if (!selectedPayslip)
    return <div className="text-center py-8">Loading payslip...</div>;

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
  } = selectedPayslip || {};

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
    <div className="bg-gray-50 min-h-screen p-6">
      {/* Controls Section */}
      <div className="max-w-4xl mx-auto flex flex-col sm:flex-row justify-between items-center bg-white p-6 rounded-2xl shadow-lg mb-6">
        <div className="flex items-center mb-4 sm:mb-0">
          <label className="font-semibold text-gray-700 mr-3 text-sm">Select Month:</label>
          <select
            className="w-full sm:w-auto border border-gray-300 rounded-xl px-4 py-2 bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-400"
            onChange={(e) => {
              const month = e.target.value;
              const closest = getClosestSlip(allPayslips.originalSlips, month);
              if (closest) {
                setSelectedPayslip({ ...closest, salary_month: month });
              }
            }}
            value={selectedPayslip?.salary_month}
          >
            {allPayslips.fullMonths.map((m) => (
              <option key={m} value={m}>
                {new Date(m + "-01").toLocaleDateString("en-US", {
                  month: "long",
                  year: "numeric",
                })}
              </option>
            ))}
          </select>
        </div>

        <button
          onClick={handlePrint}
          className="w-full sm:w-auto flex items-center justify-center gap-2 bg-[#101c3d] text-white font-semibold px-6 py-2 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
        >
          <FaPrint className="text-white" />
          Print / Download
        </button>
      </div>

      {/* Payslip Content */}
      {!selectedPayslip || !selectedPayslip.basic_salary ? (
        <div className="max-w-4xl mx-auto p-12 text-center bg-white rounded-2xl shadow-xl border border-gray-200">
          <p className="text-red-500 font-medium text-lg">
            No payslip available for this month.
          </p>
        </div>
      ) : (
        <div
          ref={slipRef}
          className="max-w-4xl mx-auto p-8 bg-white shadow-2xl rounded-xl border border-gray-200 print:shadow-none print:border-none print:rounded-none print:p-0"
        >
          {/* Header */}
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

          {/* Employee Info */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm mb-6">
            <div>
              <p>
                <span className="font-semibold text-gray-700">Name:</span> {name}
              </p>
              <p>
                <span className="font-semibold text-gray-700">Designation:</span>{" "}
                {designation}
              </p>
            </div>
            <div>
              <p>
                <span className="font-semibold text-gray-700">Employee ID:</span>{" "}
                {employee_id}
              </p>
              <p>
                <span className="font-semibold text-gray-700">Date of Joining:</span> {doj}
              </p>
            </div>
          </div>

          {/* Salary Table */}
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
                  <td className="border px-3 py-2 text-right">
                    {finalBasic.toFixed(2)}
                  </td>
                  <td className="border px-3 py-2">Professional Tax</td>
                  <td className="border px-3 py-2 text-right">
                    {pt.toFixed(2)}
                  </td>
                </tr>
                <tr>
                  <td className="border px-3 py-2">House Rent Allowance</td>
                  <td className="border px-3 py-2 text-right">
                    {houseRentAllowance.toFixed(2)}
                  </td>
                  <td className="border px-3 py-2">Income Tax</td>
                  <td className="border px-3 py-2 text-right">
                    {it.toFixed(2)}
                  </td>
                </tr>
                <tr>
                  <td className="border px-3 py-2">Transport Allowance</td>
                  <td className="border px-3 py-2 text-right">
                    {transportAllowance.toFixed(2)}
                  </td>
                  <td className="border px-3 py-2">Loss of Pay</td>
                  <td className="border px-3 py-2 text-right">
                    {lopVal.toFixed(2)}
                  </td>
                </tr>
                <tr className="bg-gray-50 font-semibold">
                  <td className="border px-3 py-2">Total Earnings</td>
                  <td className="border px-3 py-2 text-right">
                    {totalEarnings.toFixed(2)}
                  </td>
                  <td className="border px-3 py-2">Total Deductions</td>
                  <td className="border px-3 py-2 text-right">
                    {totalDeductions.toFixed(2)}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Net Pay */}
          <div className="text-center mt-6">
            <h2 className="text-xl font-bold text-green-600">
              Net Pay: ₹{netPay.toFixed(2)}
            </h2>
          </div>

          {/* Footer */}
          <div className="border-t mt-8 pt-4 text-center text-xs text-gray-500 print:mt-12">
            <p>This is a computer-generated payslip and does not require a signature.</p>
            <p className="text-blue-800">
              &copy; 2025 Pavitha Consultancy Services
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default PaySlip;