import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

 const onSubmit = async (data) => {
  try {
    const response = await fetch('http://localhost/EMS-backend/api/auth/login.php', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });

    const result = await response.json();

    if (result.status) {
      alert('Login successful');
      localStorage.setItem('user', JSON.stringify(result.user));
      localStorage.setItem('role', result.user.role);

    const userRole = result.user.role.trim().toLowerCase();

if (userRole === 'admin') {
  navigate('/mainlayout/dashboard');
} else {
  const employeeId = result.user.emp_id || result.user.id; // Adjust based on backend
navigate(`/mainlayout/employeedashboard/${employeeId}`);

}


    } else {
      alert(result.message || 'Login failed');
    }
  } catch (error) {
    console.error('Login error:', error);
    alert('Something went wrong. Please try again.');
  }
};


  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">Login</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
  <div className="mb-4">
    <label className="block text-gray-700 mb-1">Email</label>
    <input
      type="email"
      {...register('email', { required: 'Email is required' })}
      className="w-full px-4 py-2 border border-gray-300 rounded-md"
      placeholder="Enter your email"
    />
    {errors.email && <p className="text-red-600 text-sm">{errors.email.message}</p>}
  </div>

  <div className="mb-4">
    <label className="block text-gray-700 mb-1">Password</label>
    <input
      type="password"
      {...register('password', { required: 'Password is required' })}
      className="w-full px-4 py-2 border border-gray-300 rounded-md"
      placeholder="Enter your password"
    />
    {errors.password && <p className="text-red-600 text-sm">{errors.password.message}</p>}
  </div>

  <div className="mb-4">
    <label className="block text-gray-700 mb-1">Role</label>
    <select
      {...register('role', { required: 'Role is required' })}
      className="w-full px-4 py-2 border border-gray-300 rounded-md"
    >
      <option value="">Select Role</option>
      <option value="admin">Admin</option>
      <option value="employee">Employee</option>
    </select>
    {errors.role && <p className="text-red-600 text-sm">{errors.role.message}</p>}
  </div>

  <button
    type="submit"
    className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
  >
    Login
  </button>
</form>

      </div>
    </div>
  );
};

export default LoginForm;
