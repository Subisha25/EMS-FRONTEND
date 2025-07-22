import React from 'react';

const Dashboard = () => {
  const leaveRequests = [
    { name: 'John Doe', type: 'Sick Leave', date: '2025-07-15', status: 'Pending' },
    { name: 'Jane Smith', type: 'Casual Leave', date: '2025-07-12', status: 'Approved' },
    { name: 'Alex Johnson', type: 'Sick Leave', date: '2025-07-10', status: 'Rejected' },
  ];

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
        <div className="bg-white rounded-xl shadow p-6 text-center">
          <h3 className="text-xl font-semibold mb-2">Total Employees</h3>
          <p className="text-3xl font-bold text-blue-600">150</p>
        </div>
        <div className="bg-white rounded-xl shadow p-6 text-center">
          <h3 className="text-xl font-semibold mb-2">Total Leave Request</h3>
          <p className="text-3xl font-bold text-yellow-600">35</p>
        </div>
        <div className="bg-white rounded-xl shadow p-6 text-center">
          <h3 className="text-xl font-semibold mb-2">Leave Applied</h3>
          <p className="text-3xl font-bold text-purple-600">120</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <div className="bg-white rounded-xl shadow p-6 text-center">
          <h3 className="text-xl font-semibold mb-2">Pending Leave Request</h3>
          <p className="text-3xl font-bold text-orange-500">10</p>
        </div>
        <div className="bg-white rounded-xl shadow p-6 text-center">
          <h3 className="text-xl font-semibold mb-2">Approved Leave Request</h3>
          <p className="text-3xl font-bold text-green-500">25</p>
        </div>
      </div>

      {/* Table */}
      <div className="bg-white rounded-xl shadow overflow-x-auto">
        <h2 className="text-xl font-semibold p-4 border-b">Recent Leave Requests</h2>
        <table className="min-w-full text-left text-sm">
          <thead className="bg-gray-200 text-gray-600">
            <tr>
              <th className="px-6 py-3">Employee Name</th>
              <th className="px-6 py-3">Leave Type</th>
              <th className="px-6 py-3">Date</th>
              <th className="px-6 py-3">Status</th>
            </tr>
          </thead>
          <tbody>
            {leaveRequests.map((request, index) => (
              <tr key={index} className="border-t hover:bg-gray-50">
                <td className="px-6 py-3">{request.name}</td>
                <td className="px-6 py-3">{request.type}</td>
                <td className="px-6 py-3">{request.date}</td>
                <td className="px-6 py-3">
                  <span
                    className={`px-3 py-1 rounded-full text-white text-xs ${
                      request.status === 'Approved'
                        ? 'bg-green-500'
                        : request.status === 'Pending'
                        ? 'bg-yellow-500'
                        : 'bg-red-500'
                    }`}
                  >
                    {request.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Dashboard;
