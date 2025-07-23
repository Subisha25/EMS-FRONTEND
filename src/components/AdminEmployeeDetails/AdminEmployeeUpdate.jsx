// import React, { useEffect, useState } from 'react';
// import { useParams, useNavigate } from 'react-router-dom';

// const API_BASE = 'http://localhost/EMS-backend/api/employee';

// const AdminEmployeeEdit = () => {
//   const { emp_id } = useParams();
//   const navigate = useNavigate();
//   const [employee, setEmployee] = useState(null);
//   const [file, setFile] = useState(null); // File state

//   const [form, setForm] = useState({
//     first_name: '',
//     last_name: '',
//     email: '',
//     mobile: '',
//     department: '',
//     dob: '',
//     doj: '',
//     country: '',
//     state: '',
//     city: '',
//     address: '',
//   });

//   useEffect(() => {
//     fetch(`${API_BASE}/get_one.php?emp_id=${emp_id}`)
//       .then(res => res.json())
//       .then(data => {
//         setEmployee(data);
//         setForm({
//           first_name: data.first_name || '',
//           last_name: data.last_name || '',
//           email: data.email || '',
//           mobile: data.mobile || '',
//           department: data.department || '',
//           dob: data.dob || '',
//           doj: data.doj || '',
//           country: data.country || '',
//           state: data.state || '',
//           city: data.city || '',
//           address: data.address || '',
//         });
//       });
//   }, [emp_id]);

//   const handleChange = (e) => {
//     setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     const formData = new FormData();
//     formData.append('id', employee.id);

//     Object.keys(form).forEach((key) => {
//       formData.append(key, form[key]);
//     });

//     if (file) {
//       formData.append('upload', file); // 'upload' should match PHP $_FILES key
//     }

//     fetch(`${API_BASE}/update.php`, {
//       method: 'POST',
//       body: formData,
//     })
//       .then(res => res.json())
//       .then(data => {
//         if (data.status) {
//           alert('Employee updated successfully!');
//           navigate(`/mainlayout/admin/employee/${emp_id}/edit`);
//         } else {
//           alert(data.message || 'Update failed.');
//         }
//       });
//   };

//   if (!employee) return <div className="text-center p-10">Loading...</div>;

//   return (
//     <div className="max-w-2xl mx-auto bg-white p-8 rounded-xl shadow-md mt-10 mb-10">
//       <h2 className="text-3xl font-bold mb-6 text-center">Edit Employee Details</h2>
//       <form onSubmit={handleSubmit} className="space-y-4" encType="multipart/form-data">
//         {/* First Row */}
//         <div className="flex gap-4">
//           <div className="w-1/2">
//             <label className="block mb-1">First Name</label>
//             <input type="text" name="first_name" value={form.first_name} onChange={handleChange} className="w-full border p-2 rounded" required />
//           </div>
//           <div className="w-1/2">
//             <label className="block mb-1">Last Name</label>
//             <input type="text" name="last_name" value={form.last_name} onChange={handleChange} className="w-full border p-2 rounded" required />
//           </div>
//         </div>

//         {/* Email & Mobile */}
//         <div className="flex gap-4">
//           <div className="w-1/2">
//             <label className="block mb-1">Email</label>
//             <input type="email" name="email" value={form.email} onChange={handleChange} className="w-full border p-2 rounded" required />
//           </div>
//           <div className="w-1/2">
//             <label className="block mb-1">Mobile</label>
//             <input type="text" name="mobile" value={form.mobile} onChange={handleChange} className="w-full border p-2 rounded" required />
//           </div>
//         </div>

//         {/* Department & DOB */}
//         <div className="flex gap-4">
//           <div className="w-1/2">
//             <label className="block mb-1">Department</label>
//             <input type="text" name="department" value={form.department} onChange={handleChange} className="w-full border p-2 rounded" />
//           </div>
//           <div className="w-1/2">
//             <label className="block mb-1">Date of Birth</label>
//             <input type="date" name="dob" value={form.dob} onChange={handleChange} className="w-full border p-2 rounded" />
//           </div>
//         </div>

//         {/* DOJ & Country */}
//         <div className="flex gap-4">
//           <div className="w-1/2">
//             <label className="block mb-1">Date of Joining</label>
//             <input type="date" name="doj" value={form.doj} onChange={handleChange} className="w-full border p-2 rounded" />
//           </div>
//           <div className="w-1/2">
//             <label className="block mb-1">Country</label>
//             <input type="text" name="country" value={form.country} onChange={handleChange} className="w-full border p-2 rounded" />
//           </div>
//         </div>

//         {/* State & City */}
//         <div className="flex gap-4">
//           <div className="w-1/2">
//             <label className="block mb-1">State</label>
//             <input type="text" name="state" value={form.state} onChange={handleChange} className="w-full border p-2 rounded" />
//           </div>
//           <div className="w-1/2">
//             <label className="block mb-1">City</label>
//             <input type="text" name="city" value={form.city} onChange={handleChange} className="w-full border p-2 rounded" />
//           </div>
//         </div>

//         {/* Address */}
//         <div>
//           <label className="block mb-1">Address</label>
//           <textarea name="address" value={form.address} onChange={handleChange} className="w-full border p-2 rounded" rows={3}></textarea>
//         </div>

//         {/* Upload */}
//         <div>
//           <label className="block mb-1">Upload File (Photo / Resume)</label>
//           <input
//             type="file"
//             accept="image/*,.pdf"
//             onChange={(e) => setFile(e.target.files[0])}
//             className="w-full border p-2 rounded"
//           />
//         </div>

//         {/* Submit */}
//         <button type="submit" className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 w-full">
//           Update Employee
//         </button>
//       </form>
//     </div>
//   );
// };

// export default AdminEmployeeEdit;










import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const API_BASE = 'http://localhost/EMS-backend/api/employee';


const AdminEmployeeEdit = () => {
  const { emp_id } = useParams();
  const navigate = useNavigate();
  const [employee, setEmployee] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null); // For preview

  const [form, setForm] = useState({
    first_name: '',
    last_name: '',
    email: '',
    mobile: '',
    department: '',
    dob: '',
    doj: '',
    country: '',
    state: '',
    city: '',
    address: '',
    profile_img: '', // 👈 Add this

  });

  useEffect(() => {
    fetch(`${API_BASE}/get_one.php?emp_id=${emp_id}`)
      .then(res => res.json())
      .then(data => {
        setEmployee(data);
        setForm({
          first_name: data.first_name || '',
          last_name: data.last_name || '',
          email: data.email || '',
          mobile: data.mobile || '',
          department: data.department || '',
          dob: data.dob || '',
          doj: data.doj || '',
          country: data.country || '',
          state: data.state || '',
          city: data.city || '',
          address: data.address || '',
        });
      });
  }, [emp_id]);

  const handleChange = (e) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };


  const handleSubmit = (e) => {
  e.preventDefault();
  const formData = new FormData();
  formData.append('id', employee.id);

  Object.keys(form).forEach((key) => {
    formData.append(key, form[key]);
  });

 if (selectedImage) {
  formData.append('upload', selectedImage); // ✅ Must match $_FILES['upload'] in PHP
}


  fetch(`${API_BASE}/update.php`, {
    method: 'POST',
    body: formData
  })
    .then(res => res.json())
    .then(data => {
      if (data.status) {
        alert('Employee updated successfully!');
        navigate(`/mainlayout/adminemployeeprofile/${emp_id}`);
      } else {
        alert(data.message || 'Update failed.');
      }
    });
};

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     fetch(`${API_BASE}/update.php`, {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify({
//         id: employee.id,
//         ...form
//       })
//     })
//       .then(res => res.json())
//       .then(data => {
//         if (data.status) {
//           alert('Employee updated successfully!');
//           navigate(`/mainlayout/admin/employee/${emp_id}/edit`);
//         } else {
//           alert(data.message || 'Update failed.');
//         }
//       });
//   };

  if (!employee) return <div className="text-center p-10">Loading...</div>;

  return (
    <div className="max-w-2xl mx-auto bg-white p-8 rounded-xl shadow-md mt-10 mb-10">
      <h2 className="text-3xl font-bold mb-6 text-center">Edit Employee Details</h2>
      <form onSubmit={handleSubmit} className="space-y-4">

        <div className="flex justify-center mb-6">
  <div className="relative">
   <img
  src={
    selectedImage
      ? URL.createObjectURL(selectedImage)
      : employee?.photo
        ? `http://localhost/EMS-backend/uploads/${employee.photo}`
        : '/default-avatar.png'
  }
  alt="Profile"
  className="w-32 h-32 rounded-full object-cover border shadow"
/>

    <label className="absolute bottom-0 right-0 bg-blue-600 p-2 rounded-full cursor-pointer hover:bg-blue-700">
      <input
        type="file"
        accept="image/*"
        className="hidden"
        onChange={(e) => {
          const file = e.target.files[0];
          if (file) setSelectedImage(file);
        }}
      />
      <svg className="text-white w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
        <path d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h3.586a1 1 0 00.707-.293l1.414-1.414a1 1 0 01.707-.293H16a2 2 0 002-2V5a2 2 0 00-2-2H4zm2 6a2 2 0 114 0 2 2 0 01-4 0z" />
      </svg>
    </label>
  </div>
</div>

        {/* First Row */}
        <div className="flex gap-4">
          <div className="w-1/2">
            <label className="block mb-1">First Name</label>
            <input type="text" name="first_name" value={form.first_name} onChange={handleChange} className="w-full border p-2 rounded" required />
          </div>
          <div className="w-1/2">
            <label className="block mb-1">Last Name</label>
            <input type="text" name="last_name" value={form.last_name} onChange={handleChange} className="w-full border p-2 rounded" required />
          </div>
        </div>

        {/* Email & Mobile */}
        <div className="flex gap-4">
          <div className="w-1/2">
            <label className="block mb-1">Email</label>
            <input type="email" name="email" value={form.email} onChange={handleChange} className="w-full border p-2 rounded" required />
          </div>
          <div className="w-1/2">
            <label className="block mb-1">Mobile</label>
            <input type="text" name="mobile" value={form.mobile} onChange={handleChange} className="w-full border p-2 rounded" required />
          </div>
        </div>

        {/* Department & DOB */}
        <div className="flex gap-4">
          <div className="w-1/2">
            <label className="block mb-1">Department</label>
            <input type="text" name="department" value={form.department} onChange={handleChange} className="w-full border p-2 rounded" />
          </div>
          <div className="w-1/2">
            <label className="block mb-1">Date of Birth</label>
            <input type="date" name="dob" value={form.dob} onChange={handleChange} className="w-full border p-2 rounded" />
          </div>
        </div>

        {/* DOJ & Country */}
        <div className="flex gap-4">
          <div className="w-1/2">
            <label className="block mb-1">Date of Joining</label>
            <input type="date" name="doj" value={form.doj} onChange={handleChange} className="w-full border p-2 rounded" />
          </div>
          <div className="w-1/2">
            <label className="block mb-1">Country</label>
            <input type="text" name="country" value={form.country} onChange={handleChange} className="w-full border p-2 rounded" />
          </div>
        </div>

        {/* State & City */}
        <div className="flex gap-4">
          <div className="w-1/2">
            <label className="block mb-1">State</label>
            <input type="text" name="state" value={form.state} onChange={handleChange} className="w-full border p-2 rounded" />
          </div>
          <div className="w-1/2">
            <label className="block mb-1">City</label>
            <input type="text" name="city" value={form.city} onChange={handleChange} className="w-full border p-2 rounded" />
          </div>
        </div>

        {/* Address */}
        <div>
          <label className="block mb-1">Address</label>
          <textarea name="address" value={form.address} onChange={handleChange} className="w-full border p-2 rounded" rows={3}></textarea>
        </div>

        {/* Submit */}
        <button type="submit" className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 w-full">
          Update Employee
        </button>
      </form>
    </div>
  );
};

export default AdminEmployeeEdit;
