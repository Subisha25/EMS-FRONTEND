import React from 'react';
import { FaClipboardList } from 'react-icons/fa';

function Attendance() {
  return (
    <div className="bg-white rounded-lg shadow-md p-8 max-w-2xl mx-auto mt-8">
      <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
        <FaClipboardList className="text-orange-400" /> Attendance
      </h2>
      <table className="min-w-full bg-white border rounded-lg overflow-hidden">
        <thead>
          <tr className="bg-gray-100">
            <th className="py-2 px-4 border-b">Date</th>
            <th className="py-2 px-4 border-b">Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="py-2 px-4 border-b">2024-07-01</td>
            <td className="py-2 px-4 border-b text-green-600 font-semibold">Present</td>
          </tr>
          <tr>
            <td className="py-2 px-4 border-b">2024-07-02</td>
            <td className="py-2 px-4 border-b text-red-500 font-semibold">Absent</td>
          </tr>
          <tr>
            <td className="py-2 px-4 border-b">2024-07-03</td>
            <td className="py-2 px-4 border-b text-green-600 font-semibold">Present</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Attendance; 