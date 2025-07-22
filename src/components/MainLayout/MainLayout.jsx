// import React, { useState } from 'react';
// import Sidebar from '../Home/Sidebar';
// import Topbar from '../Home/Topbar';
// import Dashboard from '../Dashboard/Dashboard';
// import AddEmployeeForm from '../AdminEmployeeManagement/AddEmployee/AddEmployee';
// import EmployeeList from '../AdminEmployeeManagement/EmployeeList/EmployeeList';
// import SalaryStatusForm from '../Salary/SalaryForm';
// import ManageSalary from '../Salary/ManageSalary';
// import AdminProfile from '../AdminProfile/AdminProfile';
// import AdminEmployeeProfile from '../AdminEmployeeDetails/AdminEmployee';
// import LeaveRequestTable from '../LeaveManagement/NewLeaveRequest';
// import LeaveRequestDetails from '../LeaveManagement/LeaveRequestFrom';
// import LeaveManagement from '../LeaveManagement/LeaveManagement';

// export default function MainLayout() {
//   const [activeMenu, setActiveMenu] = useState('Dashboard');
//   const [selectedEmployee, setSelectedEmployee] = useState(null);

//   const handleViewOrEditEmployee = (employee) => {
//     setSelectedEmployee(employee);
//     setActiveMenu('adminemployeeprofile');
//   };

//   const renderContent = () => {
//     switch (activeMenu) {
//       case 'Dashboard':
//         return <Dashboard />;
//       case 'AddEmployee':
//         return <AddEmployeeForm />;
//       case 'ManageEmployee':
//         return <EmployeeList onViewOrEdit={handleViewOrEditEmployee} />;
//       case 'AddSalary':
//         return <SalaryStatusForm />;
//       case 'ManageSalary':
//         return <ManageSalary />;
//       case 'adminprofile':
//         return <AdminProfile />;
//       case 'adminemployeeprofile':
//         return <AdminEmployeeProfile employee={selectedEmployee} />;

//        case 'NewLeaveRequests':
//   return <LeaveRequestTable setActiveMenu={setActiveMenu} />;

//          case 'NewLeavedetails':
//         return <LeaveRequestDetails setActiveMenu={setActiveMenu}/>;
//           case 'AllLeaveDetails':
//         return <LeaveManagement />;
//       // default:
//         return <div className="p-6">Coming Soon...</div>;
//     }
//   };

//   return (
//     <div className="flex h-screen overflow-hidden">
//       <div className="fixed z-10">
//         <Sidebar activeMenu={activeMenu} setActiveMenu={setActiveMenu} />
//       </div>

//       <div className="ml-64 flex-1 flex flex-col">
//         <div className="sticky top-0 z-20">
//           <Topbar />
//         </div>

//         <div className="flex-1 overflow-y-auto bg-gray-50 p-6">
//           {renderContent()}
//         </div>
//       </div>
//     </div>
//   );
// }

import React from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';

import Sidebar from '../Home/Sidebar';
import Topbar from '../Home/Topbar';

import Dashboard from '../Dashboard/Dashboard';
import AddEmployeeForm from '../AdminEmployeeManagement/AddEmployee/AddEmployee';
import EmployeeList from '../AdminEmployeeManagement/EmployeeList/EmployeeList';
import SalaryStatusForm from '../Salary/SalaryForm';
import ManageSalary from '../Salary/ManageSalary';
import AdminProfile from '../AdminProfile/AdminProfile';
import AdminEmployeeProfile from '../AdminEmployeeDetails/AdminEmployee';
import LeaveRequestTable from '../LeaveManagement/NewLeaveRequest';
import LeaveRequestDetails from '../LeaveManagement/LeaveRequestFrom';
import LeaveManagement from '../LeaveManagement/LeaveManagement';
import Attendance from '../Attendance/Attendance';

export default function MainLayout() {
  return (
    <div className="flex h-screen overflow-hidden">
      <div className="fixed z-10">
        <Sidebar />
      </div>

      <div className="ml-64 flex-1 flex flex-col">
        <div className="sticky top-0 z-20">
          <Topbar />
        </div>

        <div className="flex-1 overflow-y-auto bg-gray-50 p-6">
          <Routes>
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="add-employee" element={<AddEmployeeForm />} />
            <Route path="manage-employee" element={<EmployeeList />} />
            <Route path="add-salary" element={<SalaryStatusForm />} />
            <Route path="manage-salary" element={<ManageSalary />} />
            <Route path="admin-profile" element={<AdminProfile />} />
            <Route path="employee-profile" element={<AdminEmployeeProfile />} />
            <Route path="leave-requests" element={<LeaveRequestTable />} />
            <Route path="leave-details" element={<LeaveRequestDetails />} />
            <Route path="all-leaves" element={<LeaveManagement />} />
            <Route path="attendance" element={<Attendance />} />

            <Route path="*" element={<div>Coming Soon...</div>} />
          </Routes>
        </div>
      </div>
    </div>
  );
}
