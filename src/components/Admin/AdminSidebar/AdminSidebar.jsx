import React, { useState, useEffect } from 'react';
import {
  FaTachometerAlt, FaUserCog, FaMoneyBillWave,
  FaChevronDown, FaChevronUp, FaCalendarCheck, FaSignOutAlt,
  FaUsers, FaPlus, FaCog
} from 'react-icons/fa';
import { useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios';
import logo from '../assets/logo.553589f656b9eb7282fc.png';
import API from '../../../utils/api';

export default function AdminSidebar() {
  const navigate = useNavigate();
  const location = useLocation();
  const [activeDropdown, setActiveDropdown] = useState('');
  const [admin, setAdmin] = useState({ name: '', image: '' });

  // Get admin info from API
  useEffect(() => {
    API.get("api/admin/get_all.php")
      .then((res) => {
        if (res.data?.status && res.data.admins?.length > 0) {
          const firstAdmin = res.data.admins[0];
          setAdmin({
            name: firstAdmin.name,
            image: firstAdmin.image
          });
        }
      })
      .catch((err) => console.error("Error fetching admin:", err));
  }, []);

  // Determine active dropdown
  useEffect(() => {
    const path = location.pathname;
    if (path.includes('attendance')) setActiveDropdown('attendance');
    else if (path.includes('employee')) setActiveDropdown('employee');
    else if (path.includes('salary')) setActiveDropdown('salary');
    else if (path.includes('leave')) setActiveDropdown('leave');
    else setActiveDropdown('');
  }, [location.pathname]);

  const isActive = (path) => location.pathname === `/mainlayout/${path}`;
  const handleMenuClick = (path) => navigate(`/mainlayout/${path}`);
  const toggleDropdown = (name) =>
    setActiveDropdown((prev) => (prev === name ? '' : name));

  return (
    <div className="w-[270px] bg-white h-screen fixed left-0 top-0 shadow-xl z-50 flex flex-col border-r border-gray-200">
      
      {/* Enhanced Header Section - This will stay fixed */}
      <div className="bg-gradient-to-br from-[#101c3d] via-[#1a2a54] to-[#0f1838] pt-8 pb-6 px-6 relative overflow-hidden">
        {/* Background decorations */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-white opacity-5 rounded-full transform translate-x-8 -translate-y-8"></div>
        <div className="absolute bottom-8 left-0 w-20 h-20 bg-white opacity-5 rounded-full transform -translate-x-4"></div>
        
        {/* Curved bottom with shadow */}
        <div className="absolute bottom-0 left-0 w-full h-8 bg-white rounded-t-[40px] shadow-inner"></div>
        
        {/* Logo Section */}
        <div className="flex items-center mb-8 relative z-10">
          <div className="relative">
            <div className="w-14 h-14 bg-gradient-to-br from-white to-gray-100 rounded-2xl flex items-center justify-center shadow-2xl border border-white border-opacity-20">
              <img src={logo} alt="Logo" className="w-10 h-10 drop-shadow-lg" />
            </div>
            {/* Logo glow effect */}
            <div className="absolute inset-0 bg-white opacity-20 rounded-2xl blur-xl scale-110"></div>
          </div>
          <div className="ml-4">
            <span className="text-white text-2xl font-black tracking-wider drop-shadow-lg">PCS TECH</span>
            <div className="text-white text-xs opacity-75 font-medium tracking-wide">Admin Panel</div>
          </div>
        </div>
      </div>

      {/* Menu Section - This is now the scrollable part */}
      <div className="scrollbar-thin-yellow flex-1 px-4 pt-6 overflow-y-auto">
        
        {/* Dashboard */}
        <div className="mb-2">
          <div
            className={`group flex items-center px-4 py-3 rounded-2xl cursor-pointer transition-all duration-300 ${
              isActive('dashboard') 
                ? 'bg-[#101c3d] text-white shadow-lg relative overflow-hidden' 
                : 'text-[#101c3d] hover:bg-gray-50'
            }`}
            onClick={() => handleMenuClick('dashboard')}
          >
            {/* Active indicator curve */}
            {isActive('dashboard') && (
              <div className="absolute right-0 top-0 w-8 h-full bg-white rounded-l-full opacity-10"></div>
            )}
            
            <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all ${
              isActive('dashboard') 
                ? 'bg-white bg-opacity-20' 
                : 'bg-[#101c3d] bg-opacity-10 group-hover:bg-opacity-15'
            }`}>
              <FaTachometerAlt className="text-lg" />
            </div>
            <span className="ml-3 font-medium">Admin Dashboard</span>
          </div>
        </div>

        {/* Attendance Dropdown */}
        <div className="mb-2">
          <div
            className={`group flex items-center justify-between px-4 py-3 rounded-2xl cursor-pointer transition-all duration-300 ${
              activeDropdown === 'attendance' 
                ? 'bg-[#101c3d] text-white shadow-lg relative overflow-hidden' 
                : 'text-[#101c3d] hover:bg-gray-50'
            }`}
            onClick={() => toggleDropdown('attendance')}
          >
            {/* Active indicator curve */}
            {activeDropdown === 'attendance' && (
              <div className="absolute right-0 top-0 w-8 h-full bg-white rounded-l-full opacity-10"></div>
            )}
            
            <div className="flex items-center">
              <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all ${
                activeDropdown === 'attendance' 
                  ? 'bg-white bg-opacity-20' 
                  : 'bg-[#101c3d] bg-opacity-10 group-hover:bg-opacity-15'
              }`}>
                <FaCalendarCheck className="text-lg" />
              </div>
              <span className="ml-3 font-medium">Attendance</span>
            </div>
            
            <div className={`transition-transform duration-300 ${activeDropdown === 'attendance' ? 'rotate-180' : ''}`}>
              <FaChevronDown className="text-sm" />
            </div>
          </div>

          {/* Dropdown Items */}
          <div className={`overflow-hidden transition-all duration-300 ${
            activeDropdown === 'attendance' ? 'max-h-32 opacity-100 mt-2' : 'max-h-0 opacity-0'
          }`}>
            <div className="bg-gray-50 rounded-2xl p-2">
              <div
                onClick={() => handleMenuClick('attendance')}
                className={`flex items-center px-4 py-2 rounded-xl cursor-pointer transition-all duration-200 ${
                  isActive('attendance') 
                    ? 'bg-[#101c3d] text-white shadow-md' 
                    : 'text-[#101c3d] hover:bg-white hover:shadow-sm'
                }`}
              >
                <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                <span className="text-sm font-medium">Manage Attendance</span>
              </div>
            </div>
          </div>
        </div>

        {/* Employee Management Dropdown */}
        <div className="mb-2">
          <div
            className={`group flex items-center justify-between px-4 py-3 rounded-2xl cursor-pointer transition-all duration-300 ${
              activeDropdown === 'employee' 
                ? 'bg-[#101c3d] text-white shadow-lg relative overflow-hidden' 
                : 'text-[#101c3d] hover:bg-gray-50'
            }`}
            onClick={() => toggleDropdown('employee')}
          >
            {/* Active indicator curve */}
            {activeDropdown === 'employee' && (
              <div className="absolute right-0 top-0 w-8 h-full bg-white rounded-l-full opacity-10"></div>
            )}
            
            <div className="flex items-center">
              <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all ${
                activeDropdown === 'employee' 
                  ? 'bg-white bg-opacity-20' 
                  : 'bg-[#101c3d] bg-opacity-10 group-hover:bg-opacity-15'
              }`}>
                <FaUsers className="text-lg" />
              </div>
              <span className="ml-3 font-medium">Employee Management</span>
            </div>
            
            <div className={`transition-transform duration-300 ${activeDropdown === 'employee' ? 'rotate-180' : ''}`}>
              <FaChevronDown className="text-sm" />
            </div>
          </div>

          {/* Dropdown Items */}
          <div className={`overflow-hidden transition-all duration-300 ${
            activeDropdown === 'employee' ? 'max-h-40 opacity-100 mt-2' : 'max-h-0 opacity-0'
          }`}>
            <div className="bg-gray-50 rounded-2xl p-2 space-y-1">
              <div
                onClick={() => handleMenuClick('add-employee')}
                className={`flex items-center px-4 py-2 rounded-xl cursor-pointer transition-all duration-200 ${
                  isActive('add-employee') 
                    ? 'bg-[#101c3d] text-white shadow-md' 
                    : 'text-[#101c3d] hover:bg-white hover:shadow-sm'
                }`}
              >
                <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
                <span className="text-sm font-medium">Add Employee</span>
              </div>
              <div
                onClick={() => handleMenuClick('manage-employee')}
                className={`flex items-center px-4 py-2 rounded-xl cursor-pointer transition-all duration-200 ${
                  isActive('manage-employee') 
                    ? 'bg-[#101c3d] text-white shadow-md' 
                    : 'text-[#101c3d] hover:bg-white hover:shadow-sm'
                }`}
              >
                <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                <span className="text-sm font-medium">Manage Employees</span>
              </div>
            </div>
          </div>
        </div>

        {/* Salary Dropdown */}
        <div className="mb-2">
          <div
            className={`group flex items-center justify-between px-4 py-3 rounded-2xl cursor-pointer transition-all duration-300 ${
              activeDropdown === 'salary' 
                ? 'bg-[#101c3d] text-white shadow-lg relative overflow-hidden' 
                : 'text-[#101c3d] hover:bg-gray-50'
            }`}
            onClick={() => toggleDropdown('salary')}
          >
            {/* Active indicator curve */}
            {activeDropdown === 'salary' && (
              <div className="absolute right-0 top-0 w-8 h-full bg-white rounded-l-full opacity-10"></div>
            )}
            
            <div className="flex items-center">
              <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all ${
                activeDropdown === 'salary' 
                  ? 'bg-white bg-opacity-20' 
                  : 'bg-[#101c3d] bg-opacity-10 group-hover:bg-opacity-15'
              }`}>
                <FaMoneyBillWave className="text-lg" />
              </div>
              <span className="ml-3 font-medium">Salary Management</span>
            </div>
            
            <div className={`transition-transform duration-300 ${activeDropdown === 'salary' ? 'rotate-180' : ''}`}>
              <FaChevronDown className="text-sm" />
            </div>
          </div>

          {/* Dropdown Items */}
          <div className={`overflow-hidden transition-all duration-300 ${
            activeDropdown === 'salary' ? 'max-h-40 opacity-100 mt-2' : 'max-h-0 opacity-0'
          }`}>
            <div className="bg-gray-50 rounded-2xl p-2 space-y-1">
              <div
                onClick={() => handleMenuClick('add-salary')}
                className={`flex items-center px-4 py-2 rounded-xl cursor-pointer transition-all duration-200 ${
                  isActive('add-salary') 
                    ? 'bg-[#101c3d] text-white shadow-md' 
                    : 'text-[#101c3d] hover:bg-white hover:shadow-sm'
                }`}
              >
                <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
                <span className="text-sm font-medium">Add Salary</span>
              </div>
              <div
                onClick={() => handleMenuClick('manage-salary')}
                className={`flex items-center px-4 py-2 rounded-xl cursor-pointer transition-all duration-200 ${
                  isActive('manage-salary') 
                    ? 'bg-[#101c3d] text-white shadow-md' 
                    : 'text-[#101c3d] hover:bg-white hover:shadow-sm'
                }`}
              >
                <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                <span className="text-sm font-medium">Manage Salary</span>
              </div>
            </div>
          </div>
        </div>

        {/* Leave Request Dropdown */}
        <div className="mb-2">
          <div
            className={`group flex items-center justify-between px-4 py-3 rounded-2xl cursor-pointer transition-all duration-300 ${
              activeDropdown === 'leave' 
                ? 'bg-[#101c3d] text-white shadow-lg relative overflow-hidden' 
                : 'text-[#101c3d] hover:bg-gray-50'
            }`}
            onClick={() => toggleDropdown('leave')}
          >
            {/* Active indicator curve */}
            {activeDropdown === 'leave' && (
              <div className="absolute right-0 top-0 w-8 h-full bg-white rounded-l-full opacity-10"></div>
            )}
            
            <div className="flex items-center">
              <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all ${
                activeDropdown === 'leave' 
                  ? 'bg-white bg-opacity-20' 
                  : 'bg-[#101c3d] bg-opacity-10 group-hover:bg-opacity-15'
              }`}>
                <FaCalendarCheck className="text-lg" />
              </div>
              <span className="ml-3 font-medium">Leave Management</span>
            </div>
            
            <div className={`transition-transform duration-300 ${activeDropdown === 'leave' ? 'rotate-180' : ''}`}>
              <FaChevronDown className="text-sm" />
            </div>
          </div>

          {/* Dropdown Items */}
          <div className={`overflow-hidden transition-all duration-300 ${
            activeDropdown === 'leave' ? 'max-h-40 opacity-100 mt-2' : 'max-h-0 opacity-0'
          }`}>
            <div className="bg-gray-50 rounded-2xl p-2 space-y-1">
              <div
                onClick={() => handleMenuClick('leave-requests')}
                className={`flex items-center px-4 py-2 rounded-xl cursor-pointer transition-all duration-200 ${
                  isActive('leave-requests') 
                    ? 'bg-[#101c3d] text-white shadow-md' 
                    : 'text-[#101c3d] hover:bg-white hover:shadow-sm'
                }`}
              >
                <div className="w-2 h-2 bg-orange-400 rounded-full mr-3"></div>
                <span className="text-sm font-medium">New Requests</span>
              </div>
              <div
                onClick={() => handleMenuClick('all-leaves')}
                className={`flex items-center px-4 py-2 rounded-xl cursor-pointer transition-all duration-200 ${
                  isActive('all-leaves') 
                    ? 'bg-[#101c3d] text-white shadow-md' 
                    : 'text-[#101c3d] hover:bg-white hover:shadow-sm'
                }`}
              >
                <div className="w-2 h-2 bg-purple-400 rounded-full mr-3"></div>
                <span className="text-sm font-medium">All Leave Details</span>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Admin Profile Section */}
        <div className="mb-6">
          <div
            className={`group flex items-center px-4 py-3 rounded-2xl cursor-pointer transition-all duration-300 ${
              isActive('admin-profile') 
                ? 'bg-[#101c3d] text-white shadow-lg relative overflow-hidden' 
                : 'text-[#101c3d] hover:bg-gray-50'
            }`}
            onClick={() => handleMenuClick('admin-profile')}
          >
            {/* Active indicator curve */}
            {isActive('admin-profile') && (
              <div className="absolute right-0 top-0 w-8 h-full bg-white rounded-l-full opacity-10"></div>
            )}
            
            <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all ${
              isActive('admin-profile') 
                ? 'bg-white bg-opacity-20' 
                : 'bg-[#101c3d] bg-opacity-10 group-hover:bg-opacity-15'
            }`}>
              <FaCog className="text-lg" />
            </div>
            <span className="ml-3 font-medium">Admin Profile</span>
          </div>
        </div>

          {/* Enhanced Admin Calender */}
        <div className="mb-6">
          <div
            className={`group flex items-center px-4 py-3 rounded-2xl cursor-pointer transition-all duration-300 ${
              isActive('holidaycalendar') 
                ? 'bg-[#101c3d] text-white shadow-lg relative overflow-hidden' 
                : 'text-[#101c3d] hover:bg-gray-50'
            }`}
            onClick={() => handleMenuClick('holidaycalendar')}
          >
            {/* Active indicator curve */}
            {isActive('holidaycalendar') && (
              <div className="absolute right-0 top-0 w-8 h-full bg-white rounded-l-full opacity-10"></div>
            )}
            
            <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all ${
              isActive('holidaycalendar') 
                ? 'bg-white bg-opacity-20' 
                : 'bg-[#101c3d] bg-opacity-10 group-hover:bg-opacity-15'
            }`}>
              <FaCog className="text-lg" />
            </div>
            <span className="ml-3 font-medium">Calendar</span>
          </div>
        </div>

         <div className="mb-6">
          <div
            className={`group flex items-center px-4 py-3 rounded-2xl cursor-pointer transition-all duration-300 ${
              isActive('task-management') 
                ? 'bg-[#101c3d] text-white shadow-lg relative overflow-hidden' 
                : 'text-[#101c3d] hover:bg-gray-50'
            }`}
            onClick={() => handleMenuClick('task-management')}
          >
            {/* Active indicator curve */}
            {isActive('task-management') && (
              <div className="absolute right-0 top-0 w-8 h-full bg-white rounded-l-full opacity-10"></div>
            )}
            
            <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all ${
              isActive('task-management') 
                ? 'bg-white bg-opacity-20' 
                : 'bg-[#101c3d] bg-opacity-10 group-hover:bg-opacity-15'
            }`}>
              <FaCog className="text-lg" />
            </div>
            <span className="ml-3 font-medium">Task Management</span>
          </div>
        </div>
      </div>

      {/* Enhanced Logout Button */}
      <div className="p-4 border-t border-gray-100">
        <button 
          className="w-full bg-gradient-to-r from-red-500 to-red-600 text-white py-3 px-4 rounded-2xl font-semibold flex items-center justify-center hover:from-red-600 hover:to-red-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-[1.02]"
          onClick={() => navigate('/')}
        >
          <div className="w-8 h-8 bg-white bg-opacity-20 rounded-lg flex items-center justify-center mr-3">
            <FaSignOutAlt className="text-sm" />
          </div>
          Log Out
        </button>
      </div>
    </div>
  );
}