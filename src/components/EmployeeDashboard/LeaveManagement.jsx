import React, { useState } from 'react';
import { FaCalendarAlt, FaTrashAlt } from 'react-icons/fa';
import Modal from '../components/Modal';

const initialLeaves = [
  { id: 1, type: 'Casual', from: '2024-07-01', to: '2024-07-02', reason: 'Family event', status: 'Approved' },
  { id: 2, type: 'Sick', from: '2024-07-10', to: '2024-07-11', reason: 'Fever', status: 'Pending' },
  { id: 3, type: 'Earned', from: '2024-07-15', to: '2024-07-16', reason: 'Personal', status: 'Rejected' },
];
const leaveBalance = { Casual: { used: 6, total: 10 }, Sick: { used: 3, total: 5 }, Earned: { used: 2, total: 5 } };

function LeaveManagement() {
  const [leaves, setLeaves] = useState(initialLeaves);
  const [form, setForm] = useState({ type: 'Casual', from: '', to: '', reason: '' });
  const [showModal, setShowModal] = useState(false);
  const [cancelId, setCancelId] = useState(null);

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = e => {
    e.preventDefault();
    setLeaves([
      ...leaves,
      { id: Date.now(), ...form, status: 'Pending' }
    ]);
    setForm({ type: 'Casual', from: '', to: '', reason: '' });
  };

  const handleCancel = id => {
    setCancelId(id);
    setShowModal(true);
  };

  const confirmCancel = () => {
    setLeaves(leaves.map(l => l.id === cancelId ? { ...l, status: 'Cancelled' } : l));
    setShowModal(false);
    setCancelId(null);
  };

  return (
    <div className="flex flex-col gap-8">
      {/* Leave Balance */}
      <div className="flex gap-6">
        {Object.entries(leaveBalance).map(([type, { used, total }]) => (
          <div key={type} className="bg-purple-50 border-l-4 border-purple-400 p-4 rounded w-48">
            <div className="font-bold text-purple-700">{type} Leave</div>
            <div className="text-lg font-semibold">{total - used} / {total} left</div>
            <div className="text-xs text-gray-500">Used: {used}</div>
          </div>
        ))}
      </div>
      {/* Apply Leave Form */}
      <div className="bg-white rounded-lg shadow-md p-8 max-w-xl mx-auto">
        <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
          <FaCalendarAlt className="text-purple-500" /> Apply for Leave
        </h2>
        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          <div>
            <label className="block mb-1 font-semibold">Leave Type</label>
            <select name="type" value={form.type} onChange={handleChange} className="w-full border rounded px-3 py-2">
              <option>Casual</option>
              <option>Sick</option>
              <option>Earned</option>
            </select>
          </div>
          <div className="flex gap-4">
            <div className="flex-1">
              <label className="block mb-1 font-semibold">From</label>
              <input type="date" name="from" value={form.from} onChange={handleChange} className="w-full border rounded px-3 py-2" required />
            </div>
            <div className="flex-1">
              <label className="block mb-1 font-semibold">To</label>
              <input type="date" name="to" value={form.to} onChange={handleChange} className="w-full border rounded px-3 py-2" required />
            </div>
          </div>
          <div>
            <label className="block mb-1 font-semibold">Reason</label>
            <textarea name="reason" value={form.reason} onChange={handleChange} className="w-full border rounded px-3 py-2" rows="3" placeholder="Enter reason..." required />
          </div>
          <button type="submit" className="bg-purple-500 hover:bg-purple-600 text-white px-6 py-2 rounded-lg font-semibold mt-4">Apply Leave</button>
        </form>
      </div>
      {/* Applied Leaves Table */}
      <div className="bg-white rounded-lg shadow-md p-6 max-w-3xl mx-auto">
        <h3 className="text-xl font-bold mb-4">Applied Leaves</h3>
        <table className="min-w-full text-left">
          <thead>
            <tr className="bg-gray-100">
              <th className="py-2 px-4">Type</th>
              <th className="py-2 px-4">From</th>
              <th className="py-2 px-4">To</th>
              <th className="py-2 px-4">Reason</th>
              <th className="py-2 px-4">Status</th>
              <th className="py-2 px-4">Action</th>
            </tr>
          </thead>
          <tbody>
            {leaves.map(l => (
              <tr key={l.id} className={l.status === 'Cancelled' ? 'text-gray-400 line-through' : ''}>
                <td className="py-2 px-4">{l.type}</td>
                <td className="py-2 px-4">{l.from}</td>
                <td className="py-2 px-4">{l.to}</td>
                <td className="py-2 px-4">{l.reason}</td>
                <td className="py-2 px-4 font-semibold">
                  {l.status === 'Approved' && <span className="text-green-600">Approved</span>}
                  {l.status === 'Pending' && <span className="text-yellow-600">Pending</span>}
                  {l.status === 'Rejected' && <span className="text-red-600">Rejected</span>}
                  {l.status === 'Cancelled' && <span className="text-gray-400">Cancelled</span>}
                </td>
                <td className="py-2 px-4">
                  {l.status === 'Pending' && (
                    <button
                      className="text-red-500 hover:text-red-700 flex items-center gap-1"
                      onClick={() => handleCancel(l.id)}
                    >
                      <FaTrashAlt /> Cancel
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {/* Modal for cancel confirmation */}
      <Modal
        isOpen={showModal}
        title="Cancel Leave?"
        message="Are you sure you want to cancel this pending leave?"
        onConfirm={confirmCancel}
        onCancel={() => setShowModal(false)}
        confirmText="Yes, Cancel"
        cancelText="No"
      />
    </div>
  );
}

export default LeaveManagement; 