import React from 'react';

const LeaveManagement = () => {
  const leaveRequests = [
    {
      id: 1,
      employeeId: 'EMP001',
      name: 'John Doe',
      from: '2025-07-01',
      to: '2025-07-05',
      leaveType: 'Sick Leave',
      reason: 'Fever and cold',
      postingDate: '2025-06-28',
      status: 'Pending',
    },
    {
      id: 2,
      employeeId: 'EMP002',
      name: 'Jane Smith',
      from: '2025-07-10',
      to: '2025-07-12',
      leaveType: 'Casual Leave',
      reason: 'Family function',
      postingDate: '2025-07-01',
      status: 'Approved',
    },
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'Approved':
        return 'text-green-600 bg-green-100';
      case 'Rejected':
        return 'text-red-600 bg-red-100';
      default:
        return 'text-yellow-600 bg-yellow-100';
    }
  };

  return (
    <div className="p-4 md:p-10 bg-white rounded-xl shadow-lg">
      <h1 className="text-2xl font-bold text-blue-800 mb-6">Leave Management</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-sm">
          <thead>
            <tr className="bg-blue-100 text-blue-800 font-semibold text-sm">
              <th className="py-2 px-4 border">#</th>
              <th className="py-2 px-4 border">Employee ID</th>
              <th className="py-2 px-4 border">Name</th>
              <th className="py-2 px-4 border">From</th>
              <th className="py-2 px-4 border">To</th>
              <th className="py-2 px-4 border">Leave Type</th>
              <th className="py-2 px-4 border">Reason</th>
              <th className="py-2 px-4 border">Posting Date</th>
              <th className="py-2 px-4 border">Status</th>
            </tr>
          </thead>
          <tbody>
            {leaveRequests.map((req, index) => (
              <tr key={req.id} className="text-center text-sm">
                <td className="py-2 px-4 border">{index + 1}</td>
                <td className="py-2 px-4 border">{req.employeeId}</td>
                <td className="py-2 px-4 border">{req.name}</td>
                <td className="py-2 px-4 border">{req.from}</td>
                <td className="py-2 px-4 border">{req.to}</td>
                <td className="py-2 px-4 border">{req.leaveType}</td>
                <td className="py-2 px-4 border">{req.reason}</td>
                <td className="py-2 px-4 border">{req.postingDate}</td>
                <td className={`py-2 px-4 border font-medium rounded ${getStatusColor(req.status)}`}>
                  {req.status}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default LeaveManagement;
