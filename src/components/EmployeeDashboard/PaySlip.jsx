import React from 'react';
import { FaMoneyCheckAlt } from 'react-icons/fa';

function PaySlip() {
  return (
    <div className="bg-white rounded-lg shadow-md p-8 max-w-lg mx-auto mt-8">
      <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
        <FaMoneyCheckAlt className="text-green-500" /> Pay Slip
      </h2>
      <div className="border rounded-lg p-6 bg-gray-50">
        <div className="mb-2 flex justify-between">
          <span className="font-semibold">Employee Name:</span>
          <span>John Doe</span>
        </div>
        <div className="mb-2 flex justify-between">
          <span className="font-semibold">Month:</span>
          <span>June 2024</span>
        </div>
        <div className="mb-2 flex justify-between">
          <span className="font-semibold">Basic Salary:</span>
          <span>₹30,000</span>
        </div>
        <div className="mb-2 flex justify-between">
          <span className="font-semibold">Allowances:</span>
          <span>₹5,000</span>
        </div>
        <div className="mb-2 flex justify-between">
          <span className="font-semibold">Deductions:</span>
          <span>₹2,000</span>
        </div>
        <div className="mt-4 flex justify-between text-lg font-bold">
          <span>Net Pay:</span>
          <span className="text-green-600">₹33,000</span>
        </div>
      </div>
    </div>
  );
}

export default PaySlip; 