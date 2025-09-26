import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import { showSuccess, showError, showWarning } from "../../utils/toast";
import API from '../../../utils/api';

const SalaryStatusForm = () => {
  const [employees, setEmployees] = useState([]);
  const [form, setForm] = useState({
    employeeId: '',
    name: '',
    designation: '',
    doj: '',
    basicSalary: '',
    professionalTax: 0,
    incomeTax: 0,
    lop: 0,
    salaryMonth: '',
  });

  const navigate = useNavigate();

  useEffect(() => {
    const now = new Date();
    const currentMonth = now.toISOString().slice(0, 7);
    setForm((prev) => ({ ...prev, salaryMonth: currentMonth }));

    API
      .get('api/employee/get_all.php')
      .then((response) => {
        setEmployees(response.data);
      })
      .catch((error) => {
        console.error('Error fetching employee data:', error);
      });
  }, []);

const handleEmployeeSelect = (e) => {
  const selectedId = e.target.value;
  const selectedEmp = employees.find((emp) => emp.emp_id === selectedId);

  setForm((prevForm) => ({
    ...prevForm,
    employeeId: selectedEmp?.emp_id || '',         // store only ID
    name: `${selectedEmp?.first_name || ''} ${selectedEmp?.last_name || ''}`, // for your other readonly input
    designation: selectedEmp?.designation || '',
    doj: selectedEmp?.doj || '',
  }));
};


  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validation
    if (
      !form.employeeId ||
      !form.name.trim() ||
      !form.designation.trim() ||
      !form.doj ||
      !form.salaryMonth ||
      !form.basicSalary
    ) {
      showWarning("Please fill all the required fields before submitting.");
      return;
    }

    try {
      const response = await API.post(
        'api/payslip/create.php',
        form,
        { headers: { 'Content-Type': 'application/json' } }
      );

      if (response.data.status === 'success') {
        showSuccess('Payslip added successfully!');
        setTimeout(() => {
          navigate("/mainlayout/manage-salary");
        }, 2000); // Wait 2 seconds so toast is visible
      } else {
        showError('Failed to add payslip: ' + response.data.message);
      }
    } catch (error) {
      console.error('API Error:', error);
      showError('Something went wrong while submitting the payslip.');
    }
  };

 

  const basic = parseFloat(form.basicSalary) || 0;
  const totalEarnings = basic;
  const totalDeductions =
    (parseFloat(form.professionalTax) || 0) +
    (parseFloat(form.incomeTax) || 0) +
    (parseFloat(form.lop) || 0);
  const netPay = totalEarnings - totalDeductions;

  return (
    <div className="max-w-3xl mx-auto mt-10 bg-white shadow-xl rounded-xl border border-gray-200">
      <div className="bg-[#101c3d] text-white py-4 text-center text-2xl font-bold rounded-t-xl">
        Salary Slip Form
      </div>

      <form className="p-6 space-y-6" onSubmit={handleSubmit}>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block font-medium text-gray-800 mb-1">  Employee ID <span className="text-red-600">*</span>
</label>
     <select
  name="employeeId"
  value={form.employeeId}
  onChange={handleEmployeeSelect}
  className="w-full border px-4 py-2 rounded-lg focus:ring-yellow-400 focus:outline-none"
>
  <option value="">Select Employee</option>
  {employees.map((emp) => (
    <option key={emp.emp_id} value={emp.emp_id}>
      {emp.emp_id} - {emp.first_name} {emp.last_name}
    </option>
  ))}
</select>


          </div>

          <div>
            <label className="block font-medium text-gray-800 mb-1">Employee Name</label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Name"
              className="w-full border px-4 py-2 rounded-lg focus:ring-yellow-400 focus:outline-none"
              readOnly
            />
          </div>

          <div>
            <label className="block font-medium text-gray-800 mb-1">Designation</label>
            <input
              type="text"
              name="designation"
              value={form.designation}
              onChange={handleChange}
              placeholder="Designation"
              className="w-full border px-4 py-2 rounded-lg focus:ring-yellow-400 focus:outline-none"
              readOnly
            />
          </div>

          <div>
            <label className="block font-medium text-gray-800 mb-1">Date of Joining</label>
            <input
              type="date"
              name="doj"
              value={form.doj}
              onChange={handleChange}
              className="w-full border px-4 py-2 rounded-lg focus:ring-yellow-400 focus:outline-none"
            />
          </div>

          <div>
            <label className="block font-medium text-gray-800 mb-1">Salary Month</label>
            <input
              type="month"
              name="salaryMonth"
              value={form.salaryMonth}
              onChange={handleChange}
              className="w-full border px-4 py-2 rounded-lg focus:ring-yellow-400 focus:outline-none"
            />
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-[#101c3d] border-b pb-1 mb-3">Earnings</h3>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block font-medium text-gray-800 mb-1">Basic Salary<span className="text-red-600">*</span>
</label>
              <input
                type="number"
                name="basicSalary"
                value={form.basicSalary}
                onChange={handleChange}
                placeholder="5000"
                className="w-full border px-4 py-2 rounded-lg focus:ring-yellow-400 focus:outline-none"
              />
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-[#101c3d] border-b pb-1 mb-3">Deductions</h3>
          <div className="grid grid-cols-3 gap-4">
            <div>
              <label className="block font-medium text-gray-800 mb-1">Professional Tax</label>
              <input
                type="number"
                name="professionalTax"
                value={form.professionalTax}
                onChange={handleChange}
                className="w-full border px-4 py-2 rounded-lg focus:ring-yellow-400 focus:outline-none"
              />
            </div>

            <div>
              <label className="block font-medium text-gray-800 mb-1">Income Tax</label>
              <input
                type="number"
                name="incomeTax"
                value={form.incomeTax}
                onChange={handleChange}
                className="w-full border px-4 py-2 rounded-lg focus:ring-yellow-400 focus:outline-none"
              />
            </div>

            <div>
              <label className="block font-medium text-gray-800 mb-1">Loss of Pay</label>
              <input
                type="number"
                name="lop"
                value={form.lop}
                onChange={handleChange}
                className="w-full border px-4 py-2 rounded-lg focus:ring-yellow-400 focus:outline-none"
              />
            </div>
          </div>

          <div className="mt-4 text-right text-red-600 font-semibold">
            Total Deductions: ₹{totalDeductions.toFixed(2)}
          </div>
        </div>

        <div className="text-center mt-6">
          <p className="text-xl font-bold text-green-700">
            Net Pay: ₹{netPay.toFixed(2)}
          </p>
        </div>

        <div className="text-center mt-4">
          <button
            type="submit"
            className="bg-[#101c3d]  text-[#fff] font-bold px-10 py-2 rounded-lg transition duration-300"
          >
            Submit Payslip
          </button>
        </div>
      </form>
    </div>
  );
};

export default SalaryStatusForm;
