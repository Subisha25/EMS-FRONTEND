import React, { useEffect, useState } from 'react';
import axios from 'axios';
import EditProfileModal from './EditProfileModal';
import { useNavigate } from 'react-router-dom';

const AdminProfile = () => {
  const [admin, setAdmin] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [showEdit, setShowEdit] = useState(false);
  const navigate = useNavigate();

  const fetchAdmin = async () => {
    try {
      const res = await axios.get("http://localhost/EMS-backend/api/admin/get_all.php");
      if (res.data.status && res.data.admins.length > 0) {
        setAdmin(res.data.admins[0]);
      } else {
        setError("No admin data found");
      }
    } catch (err) {
      setError("Error fetching admin data");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAdmin();
  }, []);

  if (loading) return <div className="text-center p-10">Loading...</div>;
  if (error) return <div className="text-center p-10 text-red-500">{error}</div>;

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 flex justify-center items-center p-4">
      <div className="bg-white shadow-2xl rounded-2xl w-full max-w-md p-6">
        <div className="flex flex-col items-center text-center">
          {admin?.image && (
            <img src={admin.image} alt="Admin" className="w-28 h-28 rounded-full border-4 border-blue-300 shadow-md" />
          )}
          <h2 className="text-xl font-bold text-gray-800 mt-4">{admin.name}</h2>
          <p className="text-sm text-gray-500">{admin.email}</p>
        </div>

        <div className="mt-6 space-y-2 text-sm text-gray-600">
          <p><strong>Role:</strong> {admin.role || "Super Admin"}</p>
          <p><strong>Phone:</strong> {admin.phone}</p>
          <p><strong>Location:</strong> {admin.location || "N/A"}</p>
          <p><strong>Office Open Date:</strong> {admin.office_opening_date || "N/A"}</p>
        </div>

        <div className="flex flex-col gap-3 mt-6">
          <button
            className="bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-full transition-all"
            onClick={() => navigate('/mainlayout/edit-profile', { state: { admin } })}
          >
            Edit Profile
          </button>
          <button className="bg-yellow-500 hover:bg-yellow-600 text-white py-2 rounded-full transition-all">Change Password</button>
          {/* <button className="bg-red-500 hover:bg-red-600 text-white py-2 rounded-full transition-all">Logout</button> */}
       <button
  className="bg-red-500 hover:bg-red-600 text-white py-2 rounded-full transition-all"
  onClick={() => navigate('/')}
>  Logout</button>
        </div>
      </div>

      {showEdit && (
        <EditProfileModal
          admin={admin}
          onClose={() => setShowEdit(false)}
          onUpdate={fetchAdmin}
        />
      )}
    </div>
  );
};

export default AdminProfile;














