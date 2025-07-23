import React, { useState, useEffect } from 'react';
import { FaUserCheck, FaUserTimes, FaBullhorn } from 'react-icons/fa';
import Modal from '../EmployeeDashboard/Modal';
import { useParams } from 'react-router-dom';

function EmployeeDashboard() {
  const { emp_id } = useParams(); // 👈 GET emp_id from URL
  const user = JSON.parse(localStorage.getItem('user'));
  const userName = user?.name || 'Employee'; // use localStorage name

  const announcements = [
    'HR: Submit your timesheet by 5 PM today.',
    'Admin: Office will be closed on Friday for maintenance.'
  ];

  const [dateTime, setDateTime] = useState(new Date());
  const [lastAttendance, setLastAttendance] = useState('You marked present at 9:15 AM today');
  const [showModal, setShowModal] = useState(false);
  const [attendanceAction, setAttendanceAction] = useState(null);
  const [attendanceSummary] = useState({ present: 18, absent: 2, total: 20 });

  useEffect(() => {
    const timer = setInterval(() => setDateTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const handleMark = (type) => {
    setAttendanceAction(type);
    setShowModal(true);
  };

  const confirmMark = () => {
    setLastAttendance(`You marked ${attendanceAction} at ${dateTime.toLocaleTimeString()} today`);
    setShowModal(false);
  };

  const presentPercent = (attendanceSummary.present / attendanceSummary.total) * 100;
  const absentPercent = (attendanceSummary.absent / attendanceSummary.total) * 100;

  return (
    <div className="flex flex-col gap-6">
      {/* Announcements Banner */}
      {announcements.length > 0 && (
        <div className="bg-yellow-100 border-l-4 border-yellow-400 text-yellow-800 p-4 rounded flex items-center gap-3">
          <FaBullhorn className="text-yellow-500 text-xl" />
          <div className="flex-1 flex flex-col gap-1">
            {announcements.map((msg, i) => (
              <span key={i}>{msg}</span>
            ))}
          </div>
        </div>
      )}

      {/* Welcome and Date/Time */}
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold flex items-center gap-2">
          👋 Welcome, {userName}
        </h1>
        <div className="text-lg font-semibold text-gray-600">
          {dateTime.toLocaleDateString()} {dateTime.toLocaleTimeString()}
        </div>
      </div>

      {/* Mark Attendance */}
      <div className="flex gap-4">
        <button
          className="flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg font-semibold text-lg shadow"
          onClick={() => handleMark('present')}
        >
          <FaUserCheck /> Mark Present
        </button>
        <button
          className="flex items-center gap-2 bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-lg font-semibold text-lg shadow"
          onClick={() => handleMark('absent')}
        >
          <FaUserTimes /> Mark Absent
        </button>
      </div>

      {/* Last Attendance Summary */}
      <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded text-blue-800 font-semibold">
        {lastAttendance}
      </div>

      {/* Attendance Summary */}
      <div className="flex items-center gap-6 bg-white rounded-lg shadow p-6 max-w-md">
        <div className="relative w-24 h-24">
          <svg viewBox="0 0 36 36" className="w-full h-full">
            <circle cx="18" cy="18" r="16" fill="#e5e7eb" />
            <circle
              cx="18" cy="18" r="16"
              fill="none"
              stroke="#22c55e"
              strokeWidth="4"
              strokeDasharray={`${presentPercent} ${100 - presentPercent}`}
              strokeDashoffset="25"
            />
            <circle
              cx="18" cy="18" r="16"
              fill="none"
              stroke="#ef4444"
              strokeWidth="4"
              strokeDasharray={`${absentPercent} ${100 - absentPercent}`}
              strokeDashoffset={25 + presentPercent}
            />
          </svg>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className="text-xl font-bold">{attendanceSummary.present}</span>
            <span className="text-xs text-gray-500">Present</span>
          </div>
        </div>
        <div>
          <div className="font-semibold text-lg">Attendance This Month</div>
          <div className="text-gray-600">
            {attendanceSummary.present} days present / {attendanceSummary.total} days
          </div>
        </div>
      </div>

      {/* Modal */}
      <Modal
        isOpen={showModal}
        title={`Confirm Mark ${attendanceAction === 'present' ? 'Present' : 'Absent'}?`}
        message={`Are you sure you want to mark yourself as ${attendanceAction}?`}
        onConfirm={confirmMark}
        onCancel={() => setShowModal(false)}
        confirmText="Yes"
        cancelText="No"
      />
    </div>
  );
}

export default EmployeeDashboard;
