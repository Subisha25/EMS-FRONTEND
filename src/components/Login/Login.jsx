import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { showSuccess, showError } from '../utils/toast'; // ✅ adjust path if needed
import ForgetPassword from '../ForgetPassword';
import API from '../../utils/api';

const LoginForm = () => {
  const navigate = useNavigate();
  const [showForget, setShowForget] = useState(false); // ✅ control popup
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
const onSubmit = async (data) => {
  try {
    const response = await API.post("api/auth/login.php", data);
    const result = response.data;

    if (result.status) {
      showSuccess("Login successful!");
      sessionStorage.setItem("user", JSON.stringify(result.user));
      sessionStorage.setItem("role", result.user.role.trim().toLowerCase());

      const userRole = result.user.role.trim().toLowerCase();

      // ✅ Attendance marking only for employees
      if (userRole === "employee") {
        try {
          await API.post("api/attendance/attendance.php", {
            emp_id: result.user.emp_id,
            first_name: result.user.first_name,
            last_name: result.user.last_name,
          });
          console.log("Attendance marked for", result.user.first_name);
        } catch (err) {
          console.error("Attendance marking failed:", err);
        }
      }

      setTimeout(() => {
        if (userRole === "admin") {
          navigate("/mainlayout/dashboard");
        } else {
          navigate("/mainlayout/employeedashboard");
        }
      }, 1500);
    } else {
      showError(result.message || "Login failed!");
    }
  } catch (error) {
    console.error("Login error:", error);
    showError("Something went wrong. Please try again.");
  }
};


//  const onSubmit = async (data) => {
//   try {
//     const response = await API.post("api/auth/login.php", data); // ✅ automatic JSON
//     const result = response.data;

//     if (result.status) {
//       showSuccess("Login successful!");
//       sessionStorage.setItem("user", JSON.stringify(result.user));
//       sessionStorage.setItem("role", result.user.role.trim().toLowerCase());

//       const userRole = result.user.role.trim().toLowerCase();

//       setTimeout(() => {
//         if (userRole === "admin") {
//           navigate("/mainlayout/dashboard");
//         } else {
//           navigate("/mainlayout/employeedashboard");
//         }
//       }, 1500);
//     } else {
//       showError(result.message || "Login failed!");
//     }
//   } catch (error) {
//     console.error("Login error:", error);
//     showError("Something went wrong. Please try again.");
//   }
// };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-900 to-indigo-950 relative overflow-hidden">
      {/* Water drop background elements (simplified for Tailwind) */}
      <div className="absolute inset-0 z-0 opacity-30">
        <div className="absolute w-64 h-64 bg-blue-700 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob top-0 left-0"></div>
        <div className="absolute w-64 h-64 bg-indigo-700 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000 top-0 right-0"></div>
        <div className="absolute w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000 bottom-0 left-1/4"></div>
      </div>

      <div className="relative z-10 bg-gradient-to-br from-blue-800 to-indigo-800 p-8 rounded-2xl shadow-xl border border-blue-700 w-full max-w-md backdrop-filter backdrop-blur-md bg-opacity-70">
        <h2 className="text-3xl font-extrabold text-center mb-8 text-white drop-shadow-lg">
          Log In
        </h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-6">
            <label htmlFor="email" className="block text-blue-100 mb-2 font-medium">
              Email
            </label>
            <input
              id="email"
              type="email"
              {...register('email', {
                required: 'Email is required',
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: 'Enter a valid email address',
                },
              })}
              className="w-full px-5 py-3 border border-blue-600 rounded-lg bg-blue-900 text-white placeholder-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition duration-200 ease-in-out shadow-inner"
              placeholder="Enter your email"
            />
            {errors.email && <p className="text-red-300 text-sm mt-1">{errors.email.message}</p>}
          </div>

          <div className="mb-6">
            <label htmlFor="password" className="block text-blue-100 mb-2 font-medium">
              Password
            </label>
            <input
              id="password"
              type="password"
              {...register('password', {
                required: 'Password is required',
                minLength: {
                  value: 6,
                  message: 'Password must be at least 6 characters',
                },
              })}
              className="w-full px-5 py-3 border border-blue-600 rounded-lg bg-blue-900 text-white placeholder-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition duration-200 ease-in-out shadow-inner"
              placeholder="Enter your password"
            />
            {errors.password && <p className="text-red-300 text-sm mt-1">{errors.password.message}</p>}
          </div>

          <div className="mb-8">
            <label htmlFor="role" className="block text-blue-100 mb-2 font-medium">
              Role
            </label>
            <select
              id="role"
              {...register('role', { required: 'Role is required' })}
              className="w-full px-5 py-3 border border-blue-600 rounded-lg bg-blue-900 text-white focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition duration-200 ease-in-out shadow-inner appearance-none"
            >
              <option value="">Select Role</option>
              <option value="admin">Admin</option>
              <option value="employee">Employee</option>
            </select>
            {errors.role && <p className="text-red-300 text-sm mt-1">{errors.role.message}</p>}
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-blue-800 transition duration-300 ease-in-out font-bold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
          >
            Login
          </button>
        </form>

        {/* Forgot password link */}
        <p
          onClick={() => setShowForget(true)}
          className="text-blue-200 text-sm mt-6 text-center cursor-pointer hover:underline hover:text-blue-50 transition duration-200"
        >
          Forgot Password?
        </p>
      </div>

      {/* Popup Modal for Forget Password */}
      {showForget && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70 z-50 p-4">
          <div className="relative  rounded-3xl shadow-2xl w-full max-w-lg p-8 border border-blue-700">
            <button
              onClick={() => setShowForget(false)}
              className="absolute top-4 right-4 text-blue-200 hover:text-red-400 text-3xl font-bold transition duration-200"
            >
              &times;
            </button>
            <ForgetPassword />
          </div>
        </div>
      )}
    </div>
  );
};

export default LoginForm;