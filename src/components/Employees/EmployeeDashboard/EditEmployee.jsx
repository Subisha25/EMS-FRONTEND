import React, { useState, useRef } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import {
  FaSave, FaTimes, FaUser, FaEnvelope, FaBuilding, FaPhone,
  FaMapMarkerAlt, FaGlobe, FaCity, FaBirthdayCake, FaCalendarCheck, FaHome, FaCamera
} from 'react-icons/fa';

import { showSuccess, showError } from "../../utils/toast";
import API, { UPLOADS_BASE_URL } from '../../../utils/api';

// const API_BASE = API;

const fieldIcons = {
  first_name: <FaUser className="text-blue-800 text-lg" />,
  last_name: <FaUser className="text-blue-800 text-lg" />,
  email: <FaEnvelope className="text-blue-800 text-lg" />,
  designation: <FaBuilding className="text-blue-800 text-lg" />,
  mobile: <FaPhone className="text-blue-800 text-lg" />,
  state: <FaMapMarkerAlt className="text-blue-800 text-lg" />,
  country: <FaGlobe className="text-blue-800 text-lg" />,
  city: <FaCity className="text-blue-800 text-lg" />,
  dob: <FaBirthdayCake className="text-blue-800 text-lg" />,
  doj: <FaCalendarCheck className="text-blue-800 text-lg" />,
  address: <FaHome className="text-blue-800 text-lg" />,
};

const InputWithIcon = ({ icon, ...props }) => (
  <div className="relative flex items-center ">
    <span className="absolute left-3">{icon}</span>
    <input {...props} className="w-full border  rounded-lg pl-10 pr-3 py-2 focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition shadow-sm" />
  </div>
);

const TextareaWithIcon = ({ icon, ...props }) => (
  <div className="relative flex items-start">
    <span className="absolute left-3 top-3">{icon}</span>
    <textarea {...props} className="w-full border rounded-lg pl-10 pr-3 py-2 focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition shadow-sm resize-none" />
  </div>
);

const EditEmployee = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const [form, setForm] = useState(state?.employee || {});
  const [photoPreview, setPhotoPreview] = useState(
      state?.employee?.photo ? `${UPLOADS_BASE_URL}${state.employee.photo}` : ""

    // state?.employee?.photo ? `http://localhost/EMS-backend/uploads/${state.employee.photo}` : ''
  );
  const fileInputRef = useRef();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = ev => setPhotoPreview(ev.target.result);
      reader.readAsDataURL(file);
      setForm(prev => ({ ...prev, photo: file }));
    }
  };

 const handleSave = async (e) => {
  e.preventDefault();
  
  // Debug: Check if employee data exists
  console.log("Employee state:", state?.employee);
  console.log("Employee ID:", state?.employee?.id);
  
  if (!state?.employee?.id) {
    showError("Employee ID not found. Please refresh and try again.");
    return;
  }
  
  const formData = new FormData();

  // ✅ Add the employee ID first
  formData.append('id', state.employee.id);

  for (const key in form) {
    if (key === 'photo') {
      if (typeof form[key] === 'object') {
        formData.append('upload', form[key]); 
      }
      continue;
    }
    // ✅ Skip the id field to avoid duplication
    if (key === 'id') {
      continue;
    }
    formData.append(key, form[key]);
  }

  // Debug: Log what's being sent
  console.log("FormData contents:");
  for (let pair of formData.entries()) {
    console.log(pair[0] + ': ' + pair[1]);
  }

  try {
    const res = await API.post('api/employee/update.php', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    const result = await res.data;
    
    console.log("API Response:", result);
    
    if (result.status) {
      showSuccess("Profile updated successfully!");
      navigate('/mainlayout/employeeprofile');
    } else {
      showError("Failed to update profile: " + result.message);
    }
  } catch (error) {
    console.error('Update failed:', error);
    showError('Error occurred while saving.');
  }
};

  return (
    <div className="bg-white rounded-2xl shadow-xl max-w-4xl mx-auto my-10">
      {/* Header */}
      <div className="bg-gradient-to-r from-[#101c3d] to-[#1a2a54] text-white text-center rounded-t-2xl  py-5">
        <h2 className="text-2xl font-bold">Edit Employee Details</h2>
      </div>

      {/* Profile Image */}
      <div className="flex justify-center mt-[20px] bor">
        <div className="relative">
          <img
            src={photoPreview || 'https://i.pravatar.cc/100'}
            alt="Profile"
            className="w-32 h-32 rounded-full object-cover border-4 border-grey-200 shadow-lg"
            onError={(e) => { e.target.src = 'https://i.pravatar.cc/100'; }}
          />
          <button
            type="button"
            className="absolute bottom-2 right-2 bg-blue-500 text-white rounded-full p-2 shadow-lg hover:bg-blue-600"
            onClick={() => fileInputRef.current.click()}
            title="Change Photo"
          >
            <FaCamera />
          </button>
          <input
            type="file"
            accept="image/*"
            ref={fileInputRef}
            className="hidden"
            onChange={handlePhotoChange}
          />
        </div>
      </div>

      {/* Form */}
      <form onSubmit={handleSave} className="px-8 py-10 grid grid-cols-1 md:grid-cols-2 gap-6">
        <label className="block font-semibold">First Name
          <InputWithIcon icon={fieldIcons.first_name} type="text" name="first_name" value={form.first_name || ''} onChange={handleChange} />
        </label>
        <label className="block font-semibold ">Last Name
          <InputWithIcon icon={fieldIcons.last_name} type="text" name="last_name" value={form.last_name || ''} onChange={handleChange} />
        </label>
        <label className="block font-semibold">Email
          <InputWithIcon icon={fieldIcons.email} type="email" name="email" value={form.email || ''} onChange={handleChange} />
        </label>
        <label className="block font-semibold">Mobile
          <InputWithIcon icon={fieldIcons.mobile} type="text" name="mobile" value={form.mobile || ''} onChange={handleChange} />
        </label>
        <label className="block font-semibold">Designation
          <InputWithIcon icon={fieldIcons.designation} type="text" name="designation" value={form.designation || ''} onChange={handleChange} />
        </label>
        <label className="block font-semibold">Date of Birth
          <InputWithIcon icon={fieldIcons.dob} type="date" name="dob" value={form.dob || ''} onChange={handleChange} />
        </label>
        <label className="block font-semibold">Joining Date
          <InputWithIcon icon={fieldIcons.doj} type="date" name="doj" value={form.doj || ''} onChange={handleChange} />
        </label>
        <label className="block font-semibold">City
          <InputWithIcon icon={fieldIcons.city} type="text" name="city" value={form.city || ''} onChange={handleChange} />
        </label>
        <label className="block font-semibold">State
          <InputWithIcon icon={fieldIcons.state} type="text" name="state" value={form.state || ''} onChange={handleChange} />
        </label>
        <label className="block font-semibold">Country
          <InputWithIcon icon={fieldIcons.country} type="text" name="country" value={form.country || ''} onChange={handleChange} />
        </label>

        <label className="block font-semibold col-span-1 md:col-span-2">Address
          <TextareaWithIcon icon={fieldIcons.address} name="address" value={form.address || ''} onChange={handleChange} rows={3} />
        </label>

        {/* Buttons */}
        <div className="col-span-1 md:col-span-2 flex gap-4 justify-center mt-4">
          <button type="submit" className="flex items-center gap-2 text-white font-semibold px-6 py-2 rounded-lg bg-green-600 hover:bg-green-700 shadow">
            <FaSave /> Save
          </button>
          <button type="button" onClick={() => navigate('/mainlayout/employeeprofile')} className="flex items-center gap-2 text-white font-semibold px-6 py-2 rounded-lg bg-red-600 hover:bg-red-700 shadow">
            <FaTimes /> Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditEmployee;
