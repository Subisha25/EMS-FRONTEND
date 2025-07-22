import React, { useState, useRef } from 'react';
import {
  FaUserCircle, FaEdit, FaSave, FaTimes, FaIdBadge, FaUser, FaEnvelope, FaBuilding, FaPhone, FaMapMarkerAlt, FaGlobe, FaCity, FaBirthdayCake, FaCalendarCheck, FaHome
} from 'react-icons/fa';

const defaultProfile = {
  empId: 'EMP12345',
  firstName: 'John',
  lastName: 'Doe',
  email: 'john.doe@email.com',
  department: 'Engineering',
  mobile: '+91 9876543210',
  state: 'Tamil Nadu',
  country: 'India',
  city: 'Chennai',
  dob: '1995-06-15',
  joining: '2021-01-10',
  address: '123, Main Street, Chennai',
  photo: '',
};

const fieldIcons = {
  empId: <FaIdBadge className="text-gray-400 text-lg" />,
  firstName: <FaUser className="text-gray-400 text-lg" />,
  lastName: <FaUser className="text-gray-400 text-lg" />,
  email: <FaEnvelope className="text-gray-400 text-lg" />,
  department: <FaBuilding className="text-gray-400 text-lg" />,
  mobile: <FaPhone className="text-gray-400 text-lg" />,
  state: <FaMapMarkerAlt className="text-gray-400 text-lg" />,
  country: <FaGlobe className="text-gray-400 text-lg" />,
  city: <FaCity className="text-gray-400 text-lg" />,
  dob: <FaBirthdayCake className="text-gray-400 text-lg" />,
  joining: <FaCalendarCheck className="text-gray-400 text-lg" />,
  address: <FaHome className="text-gray-400 text-lg" />,
};

function EmployeeProfile() {
  const [profile, setProfile] = useState(defaultProfile);
  const [editMode, setEditMode] = useState(false);
  const [form, setForm] = useState(profile);
  const [photoPreview, setPhotoPreview] = useState('');
  const fileInputRef = useRef();

  const handleEdit = () => {
    setForm(profile);
    setPhotoPreview(profile.photo);
    setEditMode(true);
  };

  const handleCancel = () => {
    setEditMode(false);
    setPhotoPreview(profile.photo);
  };

  const handleChange = e => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handlePhotoChange = e => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = ev => setPhotoPreview(ev.target.result);
      reader.readAsDataURL(file);
      setForm({ ...form, photo: file });
    }
  };

  const handleSave = e => {
    e.preventDefault();
    setProfile({ ...form, photo: photoPreview });
    setEditMode(false);
  };

  // Helper for input with icon
  const InputWithIcon = ({ icon, ...props }) => (
    <div className="relative flex items-center">
      <span className="absolute left-3">{icon}</span>
      <input
        {...props}
        className={`w-full border rounded-lg pl-10 pr-3 py-2 focus:ring-2 focus:ring-blue-300 focus:border-blue-400 transition shadow-sm ${props.disabled ? 'bg-gray-100' : 'bg-white'}`}
      />
    </div>
  );

  const TextareaWithIcon = ({ icon, ...props }) => (
    <div className="relative flex items-center">
      <span className="absolute left-3 top-3">{icon}</span>
      <textarea
        {...props}
        className={`w-full border rounded-lg pl-10 pr-3 py-2 focus:ring-2 focus:ring-blue-300 focus:border-blue-400 transition shadow-sm resize-none ${props.disabled ? 'bg-gray-100' : 'bg-white'}`}
      />
    </div>
  );

  return (
    <div className="bg-white rounded-2xl shadow-lg p-10 max-w-4xl mx-auto mt-8">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-3xl font-bold flex items-center gap-2 text-blue-900">
          <FaUserCircle className="text-blue-400" /> Employee Profile
        </h2>
        {!editMode ? (
          <button className="flex items-center gap-1 text-blue-600 hover:text-blue-800 font-semibold px-4 py-2 rounded-lg border border-blue-100 bg-blue-50 shadow-sm" onClick={handleEdit}>
            <FaEdit /> Edit
          </button>
        ) : (
          <div className="flex gap-2">
            <button className="flex items-center gap-1 text-green-600 hover:text-green-800 font-semibold px-4 py-2 rounded-lg border border-green-100 bg-green-50 shadow-sm" onClick={handleSave}>
              <FaSave /> Save
            </button>
            <button className="flex items-center gap-1 text-red-500 hover:text-red-700 font-semibold px-4 py-2 rounded-lg border border-red-100 bg-red-50 shadow-sm" onClick={handleCancel}>
              <FaTimes /> Cancel
            </button>
          </div>
        )}
      </div>
      <form className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-6" onSubmit={handleSave}>
        <div className="flex flex-col items-center md:items-start gap-4 col-span-2 md:col-span-1">
          <div className="relative">
            {photoPreview || profile.photo ? (
              <img
                src={photoPreview || profile.photo}
                alt="Profile"
                className="w-32 h-32 rounded-full object-cover border-4 border-blue-200 shadow-md"
              />
            ) : (
              <FaUserCircle className="w-32 h-32 text-blue-200" />
            )}
            {editMode && (
              <button
                type="button"
                className="absolute bottom-2 right-2 bg-white border border-gray-300 rounded-full p-2 shadow hover:bg-gray-100"
                onClick={() => fileInputRef.current.click()}
                title="Change Photo"
              >
                <FaEdit className="text-blue-500" />
              </button>
            )}
            <input
              type="file"
              accept="image/*"
              ref={fileInputRef}
              className="hidden"
              onChange={handlePhotoChange}
              disabled={!editMode}
            />
          </div>
        </div>
        <div className="grid grid-cols-1 gap-4 col-span-2 md:col-span-1">
          <label className="block font-semibold">Emp ID
            <InputWithIcon icon={fieldIcons.empId} type="text" name="empId" value={form.empId} readOnly disabled className="bg-gray-100" />
          </label>
          <label className="block font-semibold">First Name
            <InputWithIcon icon={fieldIcons.firstName} type="text" name="firstName" value={form.firstName} onChange={handleChange} disabled={!editMode} />
          </label>
          <label className="block font-semibold">Last Name
            <InputWithIcon icon={fieldIcons.lastName} type="text" name="lastName" value={form.lastName} onChange={handleChange} disabled={!editMode} />
          </label>
          <label className="block font-semibold">Email
            <InputWithIcon icon={fieldIcons.email} type="email" name="email" value={form.email} onChange={handleChange} disabled={!editMode} />
          </label>
          <label className="block font-semibold">Department
            <InputWithIcon icon={fieldIcons.department} type="text" name="department" value={form.department} onChange={handleChange} disabled={!editMode} />
          </label>
          <label className="block font-semibold">Mobile No
            <InputWithIcon icon={fieldIcons.mobile} type="text" name="mobile" value={form.mobile} onChange={handleChange} disabled={!editMode} />
          </label>
          <label className="block font-semibold">State
            <InputWithIcon icon={fieldIcons.state} type="text" name="state" value={form.state} onChange={handleChange} disabled={!editMode} />
          </label>
          <label className="block font-semibold">Country
            <InputWithIcon icon={fieldIcons.country} type="text" name="country" value={form.country} onChange={handleChange} disabled={!editMode} />
          </label>
          <label className="block font-semibold">City
            <InputWithIcon icon={fieldIcons.city} type="text" name="city" value={form.city} onChange={handleChange} disabled={!editMode} />
          </label>
          <label className="block font-semibold">DOB
            <InputWithIcon icon={fieldIcons.dob} type="date" name="dob" value={form.dob} onChange={handleChange} disabled={!editMode} />
          </label>
          <label className="block font-semibold">Date of Joining
            <InputWithIcon icon={fieldIcons.joining} type="date" name="joining" value={form.joining} onChange={handleChange} disabled={!editMode} />
          </label>
          <label className="block font-semibold">Address
            <TextareaWithIcon icon={fieldIcons.address} name="address" value={form.address} onChange={handleChange} disabled={!editMode} rows={2} />
          </label>
        </div>
      </form>
    </div>
  );
}

export default EmployeeProfile; 