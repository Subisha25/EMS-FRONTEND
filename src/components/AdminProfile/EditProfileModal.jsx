
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useLocation, Navigate } from 'react-router-dom';

const EditProfilePage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const admin = location.state?.admin; // Passed from AdminProfile

  const [formData, setFormData] = useState({
    id: admin?.id || '',
    name: admin?.name || '',
    email: admin?.email || '',
    phone: admin?.phone || '',
    location: admin?.location || '',
    office_opening_date: admin?.office_opening_date || '',
    role: admin?.role || '',
    password: '',
    existing_image: admin?.image || '',
    image: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'image') {
      setFormData({ ...formData, image: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const data = new FormData();
      for (let key in formData) {
        if (formData[key] !== null) {
          data.append(key, formData[key]);
        }
      }

      const res = await axios.post('http://localhost/EMS-backend/api/admin/update.php', data);
      if (res.data.status) {
        alert('Profile updated successfully');
        navigate('/mainlayout/admin-profile'); // Redirect back after update
      } else {
        alert('Update failed: ' + res.data.message);
      }
    } catch (error) {
      console.error('Error updating:', error);
      alert('Something went wrong');
    }
  };

  // ✅ Safe guard: if admin is missing, redirect immediately
  if (!admin) {
    return <Navigate to="/" replace />;
  }

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100 p-6">
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-lg w-full max-w-xl space-y-4">
        <h2 className="text-xl font-bold mb-4">Edit Profile</h2>
        <input type="hidden" name="id" value={formData.id} />
        <input type="hidden" name="existing_image" value={formData.existing_image} />

        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="w-full border p-2"
          placeholder="Name"
          required
        />
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="w-full border p-2"
          placeholder="Email"
          required
        />
        <input
          type="text"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          className="w-full border p-2"
          placeholder="Phone"
          required
        />
        <input
          type="text"
          name="location"
          value={formData.location}
          onChange={handleChange}
          className="w-full border p-2"
          placeholder="Location"
        />
        <input
          type="date"
          name="office_opening_date"
          value={formData.office_opening_date}
          onChange={handleChange}
          className="w-full border p-2"
        />
        <input
          type="text"
          name="role"
          value={formData.role}
          onChange={handleChange}
          className="w-full border p-2"
          placeholder="Role"
        />
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          className="w-full border p-2"
          placeholder="New Password (optional)"
        />
        <input
          type="file"
          name="image"
          accept="image/*"
          onChange={handleChange}
          className="w-full"
        />

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
        >
          Update Profile
        </button>
      </form>
    </div>
  );
};

export default EditProfilePage;







