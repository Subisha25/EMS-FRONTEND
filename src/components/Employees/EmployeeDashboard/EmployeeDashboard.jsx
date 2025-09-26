import React, { useState, useEffect } from 'react';
import { FaUserCheck, FaUserTimes, FaBullhorn, FaClock, FaCalendarAlt, FaChartLine } from 'react-icons/fa';
import { useParams } from 'react-router-dom';
import { showSuccess, showError, showWarning, showInfo } from "../../utils/toast";
import API from '../../../utils/api';

function EmployeeDashboard() {
  const emp_id = JSON.parse(sessionStorage.getItem('user'))?.emp_id;

  

  const [dateTime, setDateTime] = useState(new Date());
  const [lastAttendance, setLastAttendance] = useState('You have not marked attendance today.');
  const [attendanceAction, setAttendanceAction] = useState(null);
  // const [attendanceSummary] = useState({ present: 18, absent: 2, total: 20 });
  const [employee, setEmployee] = useState(null);
 const [month, setMonth] = useState(new Date().getMonth() + 1); // 1-12
  const [year, setYear] = useState(new Date().getFullYear());
  const [attendanceSummary, setAttendanceSummary] = useState({ present: 0, absent: 0, total: 0 });


useEffect(() => {
  const timer = setInterval(() => setDateTime(new Date()), 1000);

  // 🔹 Employee details
  const fetchEmployeeDetails = async () => {
    try {
      const { data } = await API.get(`api/employee/get_one.php?emp_id=${emp_id}`);
      setEmployee(data);
    } catch (error) {
      console.error("Error fetching employee data:", error);
    }
  };

  // 🔹 Attendance status (today check)
  const fetchAttendanceStatus = async () => {
    try {
      const { data: result } = await API.post("api/attendance/check_attendance.php", { emp_id });
      setLastAttendance(result.message);
    } catch (error) {
      console.error("Error fetching attendance status:", error);
    }
  };

  // 🔹 Monthly attendance summary
  const fetchMonthlyAttendance = async () => {
    try {
      const { data: result } = await API.post("api/attendance/get_monthlyattendance.php", {
        emp_id,
        month,
        year,
      });

      if (result.status) {
        setAttendanceSummary({
          present: result.present_days,
          absent: result.absent_days,
          total: result.total_days,
        });
      } else {
        setAttendanceSummary({ present: 0, absent: 0, total: 0 });
      }
    } catch (error) {
      console.error("Error fetching monthly attendance:", error);
    }
  };

  fetchEmployeeDetails();
  fetchAttendanceStatus();
  fetchMonthlyAttendance();

  return () => clearInterval(timer);
}, [emp_id, month, year]);

   const presentPercent = attendanceSummary.total
    ? (attendanceSummary.present / attendanceSummary.total) * 100
    : 0;
  const absentPercent = attendanceSummary.total
    ? (attendanceSummary.absent / attendanceSummary.total) * 100
    : 0;

  const handleMark = (type) => setAttendanceAction(type);
const confirmMark = async () => {
  try {
    const payload = {
      emp_id: employee?.emp_id,
      first_name: employee?.first_name,
      last_name: employee?.last_name,
      status: attendanceAction,
    };

    const { data: result } = await API.post("api/attendance/mark_attendance.php", payload);

    if (result.status) {
      showSuccess(result.message || "Attendance marked successfully!");
    } else {
      showError(result.message || "Failed to mark attendance");
    }

    setAttendanceAction(null);
  } catch (error) {
    console.error("Attendance error:", error);
    showError("Something went wrong while marking attendance.");
  }
};


  // const confirmMark = async () => {
  //   try {
  //     const response = await fetch('http://localhost/EMS-backend/api/attendance/mark_attendance.php', {
  //       method: 'POST',
  //       headers: { 'Content-Type': 'application/json' },
  //       body: JSON.stringify({
  //         emp_id: employee?.emp_id,
  //         first_name: employee?.first_name,
  //         last_name: employee?.last_name,
  //         status: attendanceAction,
  //       }),
  //     });

  //     const result = await response.json();
  //     if (result.status) showSuccess(result.message || 'Attendance marked successfully!');
  //     else showError(result.message || 'Failed to mark attendance');

  //     setAttendanceAction(null);
  //   }
  //    catch (error) {
  //     console.error('Attendance error:', error);
  //     showError('Something went wrong while marking attendance.');
  //   }
  // };

  const cancelMark = () => setAttendanceAction(null);



  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 p-6">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <div className="relative bg-gradient-to-r from-[#101c3d] to-[#1a2a54] rounded-3xl p-8 mb-8 overflow-hidden shadow-2xl">
          {/* Background decorations */}
          <div className="absolute top-0 right-0 w-40 h-40 bg-white opacity-10 rounded-full transform translate-x-10 -translate-y-10"></div>
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-white opacity-10 rounded-full transform -translate-x-8 translate-y-8"></div>
          
          <div className="relative z-10 flex items-center justify-between flex-wrap gap-4">
            <div>
              <h1 className="text-4xl font-black text-white mb-2 flex items-center gap-3">
                <span className="text-5xl">👋</span>
                Welcome Back!
              </h1>
              <p className="text-xl text-white opacity-90 font-medium">
                {employee ? `${employee.first_name} ${employee.last_name}` : 'Employee'} 
                <span className="text-blue-300 ml-2">({employee?.emp_id})</span>
              </p>
            </div>
            
            {/* Live Clock */}
            <div className="bg-white bg-opacity-15 backdrop-blur-sm rounded-2xl p-4 border border-white border-opacity-20">
              <div className="flex items-center gap-3 text-white">
                <FaClock className="text-2xl text-blue-300" />
                <div>
                  <div className="text-2xl font-bold">
                    {dateTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </div>
                  <div className="text-sm opacity-80">
                    {dateTime.toLocaleDateString('en-US', { 
                      weekday: 'long', 
                      month: 'short', 
                      day: 'numeric' 
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Attendance Action Cards */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {/* Mark Present Card */}
          {/* <div className="group relative bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-green-400 to-emerald-500 opacity-0 group-hover:opacity-10 transition-opacity duration-500"></div>
            <div className="relative z-10">
              <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-emerald-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <FaUserCheck className="text-2xl text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-3">Mark Present</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Click here to mark your attendance as present for today. Make sure you're at the office location.
              </p>
              <button
                className="w-full bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center gap-3"
                onClick={() => handleMark('present')}
              >
                <FaUserCheck />
                Mark Present
              </button>
            </div>
          </div> */}

          {/* Mark Absent Card */}
          {/* <div className="group relative bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-red-400 to-pink-500 opacity-0 group-hover:opacity-10 transition-opacity duration-500"></div>
            <div className="relative z-10">
              <div className="w-16 h-16 bg-gradient-to-br from-red-400 to-pink-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <FaUserTimes className="text-2xl text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-3">Mark Absent</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                If you're not able to attend office today, mark yourself as absent with proper reason.
              </p>
              <button
                className="w-full bg-gradient-to-r from-red-500 to-pink-600 hover:from-red-600 hover:to-pink-700 text-white px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center gap-3"
                onClick={() => handleMark('absent')}
              >
                <FaUserTimes />
                Mark Absent
              </button>
            </div>
          </div> */}
        </div>

        {/* Status and Summary Row */}
        <div className="grid lg:grid-cols-2 gap-8">
          
          {/* Last Attendance Status */}
          {lastAttendance && (
            <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-xl flex items-center justify-center">
                  <FaClock className="text-xl text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800">Attendance Status</h3>
              </div>
              <div 
                className="bg-gradient-to-r from-blue-50 to-indigo-50 border-l-4 border-blue-400 p-6 rounded-2xl text-blue-800 font-semibold text-lg leading-relaxed"
                dangerouslySetInnerHTML={{ __html: lastAttendance }}
              />
            </div>
          )}
{/* Attendance Summary */}
     {/* Attendance Summary */}
<div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100">
  <div className="flex items-center gap-4 mb-6">
    <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-pink-500 rounded-xl flex items-center justify-center">
      <FaChartLine className="text-xl text-white" />
    </div>
    <h3 className="text-2xl font-bold text-gray-800">Monthly Summary</h3>

    {/* Month Selector */}
    <select
      className="ml-auto border rounded-xl px-4 py-2"
      value={month}
      onChange={(e) => setMonth(parseInt(e.target.value))}
    >
      {Array.from({ length: 12 }, (_, i) => (
        <option key={i + 1} value={i + 1}>
          {new Date(0, i).toLocaleString("default", { month: "long" })}
        </option>
      ))}
    </select>
  </div>

  <div className="flex items-center gap-8">
    {/* Present Circle */}
 <div className="relative w-32 h-32">
  <svg viewBox="0 0 36 36" className="w-full h-full transform -rotate-90">
    {/* Background Circle */}
    <circle cx="18" cy="18" r="16" fill="none" stroke="#f3f4f6" strokeWidth="3" />

    {/* Present Arc */}
    <circle
      cx="18"
      cy="18"
      r="16"
      fill="none"
      stroke="#10b981"
      strokeWidth="3"
      strokeDasharray={`${(attendanceSummary.present / attendanceSummary.total) * 100} ${100}`}
      strokeDashoffset="0"
    />

    {/* Absent Arc */}
    <circle
      cx="18"
      cy="18"
      r="16"
      fill="none"
      stroke="#ef4444"
      strokeWidth="3"
      strokeDasharray={`${(attendanceSummary.absent / attendanceSummary.total) * 100} ${100}`}
      strokeDashoffset={`-${(attendanceSummary.present / attendanceSummary.total) * 100}`}
    />
  </svg>

  <div className="absolute inset-0 flex flex-col items-center justify-center">
    <span className="text-2xl font-bold text-gray-800">{attendanceSummary.total}</span>
    <span className="text-sm text-gray-500">Days</span>
  </div>
</div>


    {/* Stats */}
    <div className="flex-1 space-y-4">
      <div className="flex items-center justify-between">
        <span className="text-gray-600 font-medium">Present Days</span>
        <span className="text-green-600 font-bold text-xl">
          {attendanceSummary.present}
        </span>
      </div>
      <div className="flex items-center justify-between">
        <span className="text-gray-600 font-medium">Absent Days</span>
        <span className="text-red-600 font-bold text-xl">
          {attendanceSummary.absent}
        </span>
      </div>
      <div className="flex items-center justify-between">
        <span className="text-gray-600 font-medium">Total Days</span>
        <span className="text-gray-800 font-bold text-xl">
          {attendanceSummary.total}
        </span>
      </div>
      <div className="flex items-center justify-between border-t pt-4">
        <span className="text-gray-800 font-bold">Attendance Rate</span>
        <span className="text-[#101c3d] font-bold text-xl">
          {Math.round(presentPercent)}%
        </span>
      </div>
    </div>
  </div>
</div>


        </div>

        {/* Confirmation Modal */}
        {attendanceAction && (
          <div className="fixed inset-0 bg-black bg-opacity-60 backdrop-blur-sm flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-3xl shadow-2xl p-8 w-full max-w-md transform transition-all duration-300 scale-100">
              <div className="text-center">
                <div className={`w-20 h-20 mx-auto mb-6 rounded-2xl flex items-center justify-center ${
                  attendanceAction === 'present' ? 'bg-green-100' : 'bg-red-100'
                }`}>
                  {attendanceAction === 'present' ? 
                    <FaUserCheck className="text-3xl text-green-600" /> : 
                    <FaUserTimes className="text-3xl text-red-600" />
                  }
                </div>
                
                <h2 className="text-2xl font-bold mb-4 text-gray-800">
                  Confirm Mark {attendanceAction === 'present' ? 'Present' : 'Absent'}?
                </h2>
                
                <p className="text-gray-600 mb-8 leading-relaxed">
                  Are you sure you want to mark yourself as{' '}
                  <span className={`font-bold ${
                    attendanceAction === 'present' ? 'text-green-600' : 'text-red-600'
                  }`}>
                    {attendanceAction}
                  </span> for today?
                </p>
                
                <div className="flex gap-4">
                  <button
                    onClick={cancelMark}
                    className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-700 py-3 px-6 rounded-2xl font-semibold transition-all duration-300"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={confirmMark}
                    className={`flex-1 text-white py-3 px-6 rounded-2xl font-semibold transition-all duration-300 transform hover:scale-105 ${
                      attendanceAction === 'present' 
                        ? 'bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700' 
                        : 'bg-gradient-to-r from-red-500 to-pink-600 hover:from-red-600 hover:to-pink-700'
                    }`}
                  >
                    Confirm
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}

export default EmployeeDashboard;