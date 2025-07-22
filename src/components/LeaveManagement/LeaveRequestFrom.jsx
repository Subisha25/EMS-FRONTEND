import React, { useState } from 'react';

const LeaveRequestDetails = () => {
  const [leaveRequests, setLeaveRequests] = useState([
    {
      id: 1,
      employeeId: 'EMP001',
      name: 'John Doe',
      from: '2025-07-01',
      to: '2025-07-05',
      leaveType: 'Sick Leave',
      reason: 'Fever and rest',
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
      reason: 'Family Function',
      postingDate: '2025-07-05',
      status: 'Pending',
    },
  ]);

  const handleAction = (id, newStatus) => {
    const updated = leaveRequests.map((req) =>
      req.id === id ? { ...req, status: newStatus } : req
    );
    setLeaveRequests(updated);
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'Approved':
        return 'bg-green-500';
      case 'Rejected':
        return 'bg-red-500';
      default:
        return 'bg-yellow-500';
    }
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold text-center mb-6">Leave Request Details</h2>

      {leaveRequests.length === 0 ? (
        <p className="text-center text-gray-500">No leave requests found.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {leaveRequests.map((req) => (
            <div key={req.id} className="bg-white shadow-md rounded-lg p-5 border">
              <div className="text-sm text-gray-600 mb-1">
                <span className="font-semibold">Employee ID:</span> {req.employeeId}
              </div>
              <div className="text-lg font-semibold text-gray-800 mb-2">{req.name}</div>

              <div className="text-sm mb-1">
                <span className="font-semibold">Leave Type:</span> {req.leaveType}
              </div>
              <div className="text-sm mb-1">
                <span className="font-semibold">From:</span> {req.from}
              </div>
              <div className="text-sm mb-1">
                <span className="font-semibold">To:</span> {req.to}
              </div>
              <div className="text-sm mb-1">
                <span className="font-semibold">Posting Date:</span> {req.postingDate}
              </div>
              <div className="text-sm mb-3">
                <span className="font-semibold">Reason:</span> {req.reason}
              </div>

              <div className="mb-3">
                <span
                  className={`text-white text-xs px-3 py-1 rounded-full font-semibold ${getStatusColor(
                    req.status
                  )}`}
                >
                  {req.status}
                </span>
              </div>

              <div>
                <p className="text-sm font-semibold mb-2 text-gray-700">Take Action:</p>
                {req.status === 'Pending' ? (
                  <div className="flex justify-between gap-3">
                    <button
                      onClick={() => handleAction(req.id, 'Approved')}
                      className="flex-1 bg-green-500 hover:bg-green-600 text-white text-sm py-1 rounded"
                    >
                      Approve
                    </button>
                    <button
                      onClick={() => handleAction(req.id, 'Rejected')}
                      className="flex-1 bg-red-500 hover:bg-red-600 text-white text-sm py-1 rounded"
                    >
                      Reject
                    </button>
                  </div>
                ) : (
                  <p className="text-sm font-medium text-gray-600">
                    Leave request has been <span className="font-bold">{req.status}</span>.
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default LeaveRequestDetails;
