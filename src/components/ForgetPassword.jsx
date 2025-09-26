import React, { useState } from "react";
import { showSuccess, showError, showWarning } from "../components/utils/toast"; 
import { useNavigate } from "react-router-dom";
import API from "../utils/api";

const ForgetPassword = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    email: "",
    otp: "",
    role: "employee",
    newPassword: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const validateStep = () => {
    let tempErrors = {};
    if (step === 1) {
      if (!formData.email) tempErrors.email = "Email is required";
      else if (!/\S+@\S+\.\S+/.test(formData.email))
        tempErrors.email = "Invalid email format";
    } else if (step === 2) {
      if (!formData.otp) tempErrors.otp = "OTP is required";
      else if (!/^\d{4,6}$/.test(formData.otp))
        tempErrors.otp = "OTP must be 4-6 digits";
    } else if (step === 3) {
      if (!formData.newPassword)
        tempErrors.newPassword = "New password is required";
      else if (formData.newPassword.length < 6)
        tempErrors.newPassword = "Password must be at least 6 characters";
      if (formData.newPassword !== formData.confirmPassword)
        tempErrors.confirmPassword = "Passwords do not match";
    }
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

 const handleNext = async (e) => {
  e.preventDefault();
  if (!validateStep()) return;

  setLoading(true);

  try {
    let data;

    if (step === 1) {
      // 1️⃣ Request Reset → send OTP
      const res = await API.post("/api/forgetpassword/request_reset.php", {
        email: formData.email,
        role: formData.role,
      });
      data = res.data;

      if (data.status) {
        showSuccess("✅ OTP sent to your email!");
        setStep(2);
      } else {
        showError("❌ " + data.message);
      }

    } else if (step === 2) {
      // 2️⃣ Verify OTP
      const res = await API.post("/api/forgetpassword/verify_otp.php", {
        email: formData.email,
        role: formData.role,
        otp: formData.otp,
      });
      data = res.data;

      if (data.status) {
        showSuccess("✅ OTP verified!");
        setStep(3);
      } else {
        showError("❌ " + data.message);
      }

    } else if (step === 3) {
      // 3️⃣ Reset Password
      const res = await API.post("/api/forgetpassword/reset_password.php", {
        email: formData.email,
        role: formData.role,
        new_password: formData.newPassword,
        confirm_password: formData.confirmPassword,
      });
      data = res.data;

      if (data.status) {
        showSuccess("🎉 Password reset successful!");
        setStep(1);
        setFormData({
          email: "",
          otp: "",
          role: "employee",
          newPassword: "",
          confirmPassword: "",
        });

        setTimeout(() => {
          navigate("/"); // redirect to homepage
        }, 1000);
      } else {
        showError("❌ " + data.message);
      }
    }

  } catch (err) {
    showWarning("⚠️ Server error: " + err.message);
  } finally {
    setLoading(false);
  }
};

  return (
    <div className="flex items-center justify-center min-h-screen-full p-4">
      <div className="bg-gradient-to-br from-blue-800 to-indigo-800 p-8 rounded-3xl shadow-2xl w-full max-w-md backdrop-filter backdrop-blur-md bg-opacity-70 border border-blue-700 transition-all transform scale-100 animate-slide-in">
        <h2 className="text-3xl font-extrabold text-center text-white drop-shadow-lg mb-8">
          Forget Password
        </h2>

        <form onSubmit={handleNext} className="space-y-6">
          {step === 1 && (
            <>
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-5 py-3 border border-blue-600 rounded-lg bg-blue-900 text-white placeholder-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition duration-200 ease-in-out shadow-inner"
              />
              {errors.email && (
                <p className="text-red-300 text-sm mt-1">{errors.email}</p>
              )}

              <select
                name="role"
                value={formData.role}
                onChange={handleChange}
                className="w-full px-5 py-3 border border-blue-600 rounded-lg bg-blue-900 text-white focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition duration-200 ease-in-out shadow-inner appearance-none"
              >
                                <option value="employee">Select Role</option>

                <option value="employee">Employee</option>
                <option value="admin">Admin</option>
              </select>
            </>
          )}

          {step === 2 && (
            <>
              <input
                type="text"
                name="otp"
                placeholder="Enter OTP"
                value={formData.otp}
                onChange={handleChange}
                className="w-full px-5 py-3 border border-blue-600 rounded-lg bg-blue-900 text-white placeholder-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition duration-200 ease-in-out shadow-inner"
              />
              {errors.otp && (
                <p className="text-red-300 text-sm mt-1">{errors.otp}</p>
              )}
            </>
          )}

          {step === 3 && (
            <>
              <input
                type="password"
                name="newPassword"
                placeholder="Enter New Password"
                value={formData.newPassword}
                onChange={handleChange}
                className="w-full px-5 py-3 border border-blue-600 rounded-lg bg-blue-900 text-white placeholder-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition duration-200 ease-in-out shadow-inner"
              />
              {errors.newPassword && (
                <p className="text-red-300 text-sm mt-1">
                  {errors.newPassword}
                </p>
              )}

              <input
                type="password"
                name="confirmPassword"
                placeholder="Confirm New Password"
                value={formData.confirmPassword}
                onChange={handleChange}
                className="w-full px-5 py-3 border border-blue-600 rounded-lg bg-blue-900 text-white placeholder-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition duration-200 ease-in-out shadow-inner"
              />
              {errors.confirmPassword && (
                <p className="text-red-300 text-sm mt-1">
                  {errors.confirmPassword}
                </p>
              )}
            </>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 rounded-lg bg-blue-600 text-white font-bold text-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-blue-800 transition duration-300 ease-in-out shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 disabled:bg-gray-500 disabled:shadow-none disabled:transform-none"
          >
            {loading
              ? "Processing..."
              : step < 3
              ? "Next"
              : "Reset Password"}
          </button>
        </form>

        {/* Step Indicators */}
        <div className="flex justify-center mt-6 space-x-2">
          {[1, 2, 3].map((s) => (
            <div
              key={s}
              className={`w-3 h-3 rounded-full ${
                step >= s ? "bg-blue-300" : "bg-blue-900"
              } border border-blue-500`}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ForgetPassword;