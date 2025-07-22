import React from 'react';
import { FaEye } from 'react-icons/fa';

const LeaveRequestTable = ({ setActiveMenu }) => {
  const leaveRequests = [
    {
      id: 1,
      employeeId: 'EMP001',
      name: 'John Doe',
      fromDate: '2025-07-10',
      toDate: '2025-07-12',
      postingDate: '2025-07-05',
      status: '', // Not updated yet
    },
    {
      id: 2,
      employeeId: 'EMP002',
      name: 'Jane Smith',
      fromDate: '2025-07-15',
      toDate: '2025-07-18',
      postingDate: '2025-07-08',
      status: 'Approved',
    },
  ];

  const getStatusDisplay = (status) => {
    if (!status) return 'Not Updated Yet';
    return status;
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'Approved':
        return 'bg-green-100 text-green-600';
      case 'Rejected':
        return 'bg-red-100 text-red-600';
      case '':
        return 'bg-gray-100 text-gray-500';
      default:
        return 'bg-yellow-100 text-yellow-600';
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">New Leave Requests</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200 text-sm text-gray-800">
          <thead className="bg-blue-100 text-left">
            <tr>
              <th className="px-4 py-2">#</th>
              <th className="px-4 py-2">Employee ID</th>
              <th className="px-4 py-2">Name</th>
              <th className="px-4 py-2">From</th>
              <th className="px-4 py-2">To</th>
              <th className="px-4 py-2">Posting Date</th>
              <th className="px-4 py-2">Status</th>
              <th className="px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-100">
            {leaveRequests.map((req, index) => (
              <tr key={req.id} className="hover:bg-gray-50">
                <td className="px-4 py-2">{index + 1}</td>
                <td className="px-4 py-2">{req.employeeId}</td>
                <td className="px-4 py-2">{req.name}</td>
                <td className="px-4 py-2">{req.fromDate}</td>
                <td className="px-4 py-2">{req.toDate}</td>
                <td className="px-4 py-2">{req.postingDate}</td>
                <td className="px-4 py-2">
                  <span className={`px-2 py-1 rounded-full text-xs font-semibold ${getStatusColor(req.status)}`}>
                    {getStatusDisplay(req.status)}
                  </span>
                </td>
                <td className="px-4 py-2">
                  <button
                    className="bg-blue-500 hover:bg-blue-600 text-white p-2 rounded-full"
                    onClick={() => setActiveMenu('NewLeavedetails')}
                    title="View Employee Profile"
                  >
                    <FaEye size={14} />
                  </button>
                </td>
              </tr>
            ))}
            {leaveRequests.length === 0 && (
              <tr>
                <td colSpan="8" className="text-center py-4 text-gray-400">
                  No leave requests found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default LeaveRequestTable;
