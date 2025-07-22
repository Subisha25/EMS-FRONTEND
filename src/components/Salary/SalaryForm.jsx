import React, { useState } from 'react';

const SalaryStatusForm = () => {
  const [employeeId, setEmployeeId] = useState('');
  const [name, setName] = useState('');
  const [salary, setSalary] = useState('');
  const [allowance, setAllowance] = useState('');
  const [total, setTotal] = useState(0);

  // Auto calculate total
  const handleCalculation = (salaryValue, allowanceValue) => {
    const sal = parseFloat(salaryValue) || 0;
    const allo = parseFloat(allowanceValue) || 0;
    setTotal(sal + allo);
  };

  return (
    <div className="max-w-xl mx-auto p-6 mt-10 bg-white shadow-2xl rounded-xl">
      <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Salary Status</h2>

      <form className="space-y-4">
        {/* Employee ID */}
        <div>
          <label className="block mb-1 text-gray-700 font-medium">Employee ID</label>
          <input
            type="text"
            value={employeeId}
            onChange={(e) => setEmployeeId(e.target.value)}
            placeholder="Enter Employee ID"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Name */}
        <div>
          <label className="block mb-1 text-gray-700 font-medium">Employee Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter Employee Name"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Salary */}
        <div>
          <label className="block mb-1 text-gray-700 font-medium">Salary</label>
          <input
            type="number"
            value={salary}
            onChange={(e) => {
              setSalary(e.target.value);
              handleCalculation(e.target.value, allowance);
            }}
            placeholder="Enter Salary Amount"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Allowance */}
        <div>
          <label className="block mb-1 text-gray-700 font-medium">Allowance</label>
          <input
            type="number"
            value={allowance}
            onChange={(e) => {
              setAllowance(e.target.value);
              handleCalculation(salary, e.target.value);
            }}
            placeholder="Enter Allowance Amount"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Total */}
        <div>
          <label className="block mb-1 text-gray-700 font-medium">Total</label>
          <input
            type="text"
            value={total}
            readOnly
            className="w-full px-4 py-2 bg-gray-100 border rounded-lg text-gray-700 cursor-not-allowed"
          />
        </div>

        {/* Submit Button */}
        <div className="text-center pt-4">
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-2 rounded-lg transition duration-300"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default SalaryStatusForm;
