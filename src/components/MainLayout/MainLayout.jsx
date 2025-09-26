import React from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Sidebar from '../Home/Sidebar';
import Topbar from '../Home/Topbar';
import AdminDashboard from '../Admin/AdminDashboard/AdminDashboard';
import AddEmployeeForm from '../AdminEmployeeManagement/AddEmployee/AddEmployee';
import EmployeeList from '../AdminEmployeeManagement/EmployeeList/EmployeeList';
import SalaryStatusForm from '../Admin/Salary/SalaryForm';
import ManageSalary from '../Admin/Salary/ManageSalary';
import AdminProfile from '../Admin/AdminProfile/AdminProfile';
import AdminEmployeeProfile from '../Admin/AdminEmployeeDetails/AdminEmployee';
import LeaveRequestTable from '../Admin/LeaveManagement/NewLeaveRequest';
import LeaveRequestDetails from '../Admin/LeaveManagement/LeaveRequestFrom';
import LeaveManagement from '../Admin/LeaveManagement/LeaveManagement';
import Attendance from '../Admin/Attendance/Attendance';
import EmployeeDashboard from '../Employees/EmployeeDashboard/EmployeeDashboard';
import PaySlip from '../Employees/EmployeeDashboard/PaySlip';
import EmployeeLeaveManagement from '../Employees/EmployeeDashboard/EmployeeLeaveManagement';
import EmployeeProfile from '../Employees/EmployeeDashboard/EmployeeProfile';
import EditProfilePage from '../Admin/AdminProfile/EditProfileModal';
import EmployeeAttendance from '../Employees/EmployeeDashboard/EmployeeAttendance';
import AdminEmployeeEdit from '../Admin/AdminEmployeeDetails/AdminEmployeeUpdate';
import PayslipDetails from '../Admin/Salary/SalaryDetails';
import LeaveStatus from '../Employees/EmployeeDashboard/LeaveStatus';
import EditEmployee from '../Employees/EmployeeDashboard/EditEmployee';
import ForgetPassword from '../ForgetPassword';
import TrashedEmployeeList from '../AdminEmployeeManagement/EmployeeList/TrashedEmployee';
import HolidayCalendar from '../Home/Calendar';
import TaskManagement from '../Admin/task/AdminTask';



export default function MainLayout() {
  return (
    <div className="flex h-screen overflow-hidden">
      <div className="fixed z-10">
        <Sidebar />
      </div>

      <div className="ml-[20%] flex-1 flex flex-col">
        <div className="sticky top-0 z-20">
          <Topbar />
        </div>

        <div className="flex-1 overflow-y-auto bg-white-50 p-12">
          <Routes>
            
            <Route path="dashboard" element={<AdminDashboard/>} />
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
            <Route path="employeedashboard" element={<EmployeeDashboard />} />
             <Route path="employeepayslip" element={<PaySlip />} />
             <Route path="employeeleavemanage" element={<EmployeeLeaveManagement />} />
             <Route path="employeeprofile" element={<EmployeeProfile />} />
             <Route path="edit-profile" element={<EditProfilePage />} />
             <Route path="employeeattendance" element={<EmployeeAttendance />} />
             <Route path="payslipdetails/:employeeId" element={<PayslipDetails/>} />
             <Route path="leavestatus" element={<LeaveStatus/>} />
             <Route path="editemployee" element={<EditEmployee/>} />
             <Route path="forgetpassword" element={<ForgetPassword/>} />
             <Route path="/unavailable-employee" element={<TrashedEmployeeList/>} />
             <Route path="/holidaycalendar" element={<HolidayCalendar/>} />
             <Route path="/task-management" element={<TaskManagement/>} />

<Route path="adminemployeeprofile/:emp_id" element={<AdminEmployeeProfile />} />
<Route path="admin/employee/:emp_id/edit" element={<AdminEmployeeEdit />} />

            <Route path="*" element={<div>Coming Soon...</div>} />
          </Routes>
        </div>
      </div>
    </div>
  );
}
