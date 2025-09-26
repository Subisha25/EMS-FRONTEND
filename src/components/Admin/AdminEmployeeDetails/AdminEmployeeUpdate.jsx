// // // import React, { useEffect, useState } from 'react';
// // // import { useParams, useNavigate } from 'react-router-dom';

// // // const API_BASE = 'http://localhost/EMS-backend/api/employee';

// // // const AdminEmployeeEdit = () => {
// // //   const { emp_id } = useParams();
// // //   const navigate = useNavigate();
// // //   const [employee, setEmployee] = useState(null);
// // //   const [file, setFile] = useState(null); // File state

// // //   const [form, setForm] = useState({
// // //     first_name: '',
// // //     last_name: '',
// // //     email: '',
// // //     mobile: '',
// // //     designation: '',
// // //     dob: '',
// // //     doj: '',
// // //     country: '',
// // //     state: '',
// // //     city: '',
// // //     address: '',
// // //   });

// // //   useEffect(() => {
// // //     fetch(`${API_BASE}/get_one.php?emp_id=${emp_id}`)
// // //       .then(res => res.json())
// // //       .then(data => {
// // //         setEmployee(data);
// // //         setForm({
// // //           first_name: data.first_name || '',
// // //           last_name: data.last_name || '',
// // //           email: data.email || '',
// // //           mobile: data.mobile || '',
// // //           designation: data.designation || '',
// // //           dob: data.dob || '',
// // //           doj: data.doj || '',
// // //           country: data.country || '',
// // //           state: data.state || '',
// // //           city: data.city || '',
// // //           address: data.address || '',
// // //         });
// // //       });
// // //   }, [emp_id]);

// // //   const handleChange = (e) => {
// // //     setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
// // //   };

// // //   const handleSubmit = (e) => {
// // //     e.preventDefault();

// // //     const formData = new FormData();
// // //     formData.append('id', employee.id);

// // //     Object.keys(form).forEach((key) => {
// // //       formData.append(key, form[key]);
// // //     });

// // //     if (file) {
// // //       formData.append('upload', file); // 'upload' should match PHP $_FILES key
// // //     }

// // //     fetch(`${API_BASE}/update.php`, {
// // //       method: 'POST',
// // //       body: formData,
// // //     })
// // //       .then(res => res.json())
// // //       .then(data => {
// // //         if (data.status) {
// // //           alert('Employee updated successfully!');
// // //           navigate(`/mainlayout/admin/employee/${emp_id}/edit`);
// // //         } else {
// // //           alert(data.message || 'Update failed.');
// // //         }
// // //       });
// // //   };

// // //   if (!employee) return <div className="text-center p-10">Loading...</div>;

// // //   return (
// // //     <div className="max-w-2xl mx-auto bg-white p-8 rounded-xl shadow-md mt-10 mb-10">
// // //       <h2 className="text-3xl font-bold mb-6 text-center">Edit Employee Details</h2>
// // //       <form onSubmit={handleSubmit} className="space-y-4" encType="multipart/form-data">
// // //         {/* First Row */}
// // //         <div className="flex gap-4">
// // //           <div className="w-1/2">
// // //             <label className="block mb-1">First Name</label>
// // //             <input type="text" name="first_name" value={form.first_name} onChange={handleChange} className="w-full border p-2 rounded" required />
// // //           </div>
// // //           <div className="w-1/2">
// // //             <label className="block mb-1">Last Name</label>
// // //             <input type="text" name="last_name" value={form.last_name} onChange={handleChange} className="w-full border p-2 rounded" required />
// // //           </div>
// // //         </div>

// // //         {/* Email & Mobile */}
// // //         <div className="flex gap-4">
// // //           <div className="w-1/2">
// // //             <label className="block mb-1">Email</label>
// // //             <input type="email" name="email" value={form.email} onChange={handleChange} className="w-full border p-2 rounded" required />
// // //           </div>
// // //           <div className="w-1/2">
// // //             <label className="block mb-1">Mobile</label>
// // //             <input type="text" name="mobile" value={form.mobile} onChange={handleChange} className="w-full border p-2 rounded" required />
// // //           </div>
// // //         </div>

// // //         {/* designation & DOB */}
// // //         <div className="flex gap-4">
// // //           <div className="w-1/2">
// // //             <label className="block mb-1">designation</label>
// // //             <input type="text" name="designation" value={form.designation} onChange={handleChange} className="w-full border p-2 rounded" />
// // //           </div>
// // //           <div className="w-1/2">
// // //             <label className="block mb-1">Date of Birth</label>
// // //             <input type="date" name="dob" value={form.dob} onChange={handleChange} className="w-full border p-2 rounded" />
// // //           </div>
// // //         </div>

// // //         {/* DOJ & Country */}
// // //         <div className="flex gap-4">
// // //           <div className="w-1/2">
// // //             <label className="block mb-1">Date of Joining</label>
// // //             <input type="date" name="doj" value={form.doj} onChange={handleChange} className="w-full border p-2 rounded" />
// // //           </div>
// // //           <div className="w-1/2">
// // //             <label className="block mb-1">Country</label>
// // //             <input type="text" name="country" value={form.country} onChange={handleChange} className="w-full border p-2 rounded" />
// // //           </div>
// // //         </div>

// // //         {/* State & City */}
// // //         <div className="flex gap-4">
// // //           <div className="w-1/2">
// // //             <label className="block mb-1">State</label>
// // //             <input type="text" name="state" value={form.state} onChange={handleChange} className="w-full border p-2 rounded" />
// // //           </div>
// // //           <div className="w-1/2">
// // //             <label className="block mb-1">City</label>
// // //             <input type="text" name="city" value={form.city} onChange={handleChange} className="w-full border p-2 rounded" />
// // //           </div>
// // //         </div>

// // //         {/* Address */}
// // //         <div>
// // //           <label className="block mb-1">Address</label>
// // //           <textarea name="address" value={form.address} onChange={handleChange} className="w-full border p-2 rounded" rows={3}></textarea>
// // //         </div>

// // //         {/* Upload */}
// // //         <div>
// // //           <label className="block mb-1">Upload File (Photo / Resume)</label>
// // //           <input
// // //             type="file"
// // //             accept="image/*,.pdf"
// // //             onChange={(e) => setFile(e.target.files[0])}
// // //             className="w-full border p-2 rounded"
// // //           />
// // //         </div>

// // //         {/* Submit */}
// // //         <button type="submit" className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 w-full">
// // //           Update Employee
// // //         </button>
// // //       </form>
// // //     </div>
// // //   );
// // // };

// // // export default AdminEmployeeEdit;










// // import React, { useEffect, useState } from 'react';
// // import { useParams, useNavigate } from 'react-router-dom';

// // const API_BASE = 'http://localhost/EMS-backend/api/employee';


// // const AdminEmployeeEdit = () => {
// //   const { emp_id } = useParams();
// //   const navigate = useNavigate();
// //   const [employee, setEmployee] = useState(null);
// //   const [selectedImage, setSelectedImage] = useState(null); // For preview

// //   const [form, setForm] = useState({
// //     first_name: '',
// //     last_name: '',
// //     email: '',
// //     mobile: '',
// //     designation: '',
// //     dob: '',
// //     doj: '',
// //     country: '',
// //     state: '',
// //     city: '',
// //     address: '',
// //     profile_img: '', // 👈 Add this

// //   });

// //   useEffect(() => {
// //     fetch(`${API_BASE}/get_one.php?emp_id=${emp_id}`)
// //       .then(res => res.json())
// //       .then(data => {
// //         setEmployee(data);
// //         setForm({
// //           first_name: data.first_name || '',
// //           last_name: data.last_name || '',
// //           email: data.email || '',
// //           mobile: data.mobile || '',
// //           designation: data.designation || '',
// //           dob: data.dob || '',
// //           doj: data.doj || '',
// //           country: data.country || '',
// //           state: data.state || '',
// //           city: data.city || '',
// //           address: data.address || '',
// //         });
// //       });
// //   }, [emp_id]);

// //   const handleChange = (e) => {
// //     setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
// //   };


// //   const handleSubmit = (e) => {
// //   e.preventDefault();
// //   const formData = new FormData();
// //   formData.append('id', employee.id);

// //   Object.keys(form).forEach((key) => {
// //     formData.append(key, form[key]);
// //   });

// //  if (selectedImage) {
// //   formData.append('upload', selectedImage); // ✅ Must match $_FILES['upload'] in PHP
// // }


// //   fetch(`${API_BASE}/update.php`, {
// //     method: 'POST',
// //     body: formData
// //   })
// //     .then(res => res.json())
// //     .then(data => {
// //       if (data.status) {
// //         alert('Employee updated successfully!');
// //         navigate(`/mainlayout/adminemployeeprofile/${emp_id}`);
// //       } else {
// //         alert(data.message || 'Update failed.');
// //       }
// //     });
// // };

// // //   const handleSubmit = (e) => {
// // //     e.preventDefault();

// // //     fetch(`${API_BASE}/update.php`, {
// // //       method: 'POST',
// // //       headers: { 'Content-Type': 'application/json' },
// // //       body: JSON.stringify({
// // //         id: employee.id,
// // //         ...form
// // //       })
// // //     })
// // //       .then(res => res.json())
// // //       .then(data => {
// // //         if (data.status) {
// // //           alert('Employee updated successfully!');
// // //           navigate(`/mainlayout/admin/employee/${emp_id}/edit`);
// // //         } else {
// // //           alert(data.message || 'Update failed.');
// // //         }
// // //       });
// // //   };

// //   if (!employee) return <div className="text-center p-10">Loading...</div>;

// //   return (
// //     <div className="max-w-2xl mx-auto bg-white p-8 rounded-xl shadow-md mt-10 mb-10">
// //       <h2 className="text-3xl font-bold mb-6 text-center">Edit Employee Details</h2>
// //       <form onSubmit={handleSubmit} className="space-y-4">

// //         <div className="flex justify-center mb-6">
// //   <div className="relative">
// //    <img
// //   src={
// //     selectedImage
// //       ? URL.createObjectURL(selectedImage)
// //       : employee?.photo
// //         ? `http://localhost/EMS-backend/uploads/${employee.photo}`
// //         : '/default-avatar.png'
// //   }
// //   alt="Profile"
// //   className="w-32 h-32 rounded-full object-cover border shadow"
// // />

// //     <label className="absolute bottom-0 right-0 bg-blue-600 p-2 rounded-full cursor-pointer hover:bg-blue-700">
// //       <input
// //         type="file"
// //         accept="image/*"
// //         className="hidden"
// //         onChange={(e) => {
// //           const file = e.target.files[0];
// //           if (file) setSelectedImage(file);
// //         }}
// //       />
// //       <svg className="text-white w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
// //         <path d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h3.586a1 1 0 00.707-.293l1.414-1.414a1 1 0 01.707-.293H16a2 2 0 002-2V5a2 2 0 00-2-2H4zm2 6a2 2 0 114 0 2 2 0 01-4 0z" />
// //       </svg>
// //     </label>
// //   </div>
// // </div>

// //         {/* First Row */}
// //         <div className="flex gap-4">
// //           <div className="w-1/2">
// //             <label className="block mb-1">First Name</label>
// //             <input type="text" name="first_name" value={form.first_name} onChange={handleChange} className="w-full border p-2 rounded" required />
// //           </div>
// //           <div className="w-1/2">
// //             <label className="block mb-1">Last Name</label>
// //             <input type="text" name="last_name" value={form.last_name} onChange={handleChange} className="w-full border p-2 rounded" required />
// //           </div>
// //         </div>

// //         {/* Email & Mobile */}
// //         <div className="flex gap-4">
// //           <div className="w-1/2">
// //             <label className="block mb-1">Email</label>
// //             <input type="email" name="email" value={form.email} onChange={handleChange} className="w-full border p-2 rounded" required />
// //           </div>
// //           <div className="w-1/2">
// //             <label className="block mb-1">Mobile</label>
// //             <input type="text" name="mobile" value={form.mobile} onChange={handleChange} className="w-full border p-2 rounded" required />
// //           </div>
// //         </div>

// //         {/* designation & DOB */}
// //         <div className="flex gap-4">
// //           <div className="w-1/2">
// //             <label className="block mb-1">designation</label>
// //             <input type="text" name="designation" value={form.designation} onChange={handleChange} className="w-full border p-2 rounded" />
// //           </div>
// //           <div className="w-1/2">
// //             <label className="block mb-1">Date of Birth</label>
// //             <input type="date" name="dob" value={form.dob} onChange={handleChange} className="w-full border p-2 rounded" />
// //           </div>
// //         </div>

// //         {/* DOJ & Country */}
// //         <div className="flex gap-4">
// //           <div className="w-1/2">
// //             <label className="block mb-1">Date of Joining</label>
// //             <input type="date" name="doj" value={form.doj} onChange={handleChange} className="w-full border p-2 rounded" />
// //           </div>
// //           <div className="w-1/2">
// //             <label className="block mb-1">Country</label>
// //             <input type="text" name="country" value={form.country} onChange={handleChange} className="w-full border p-2 rounded" />
// //           </div>
// //         </div>

// //         {/* State & City */}
// //         <div className="flex gap-4">
// //           <div className="w-1/2">
// //             <label className="block mb-1">State</label>
// //             <input type="text" name="state" value={form.state} onChange={handleChange} className="w-full border p-2 rounded" />
// //           </div>
// //           <div className="w-1/2">
// //             <label className="block mb-1">City</label>
// //             <input type="text" name="city" value={form.city} onChange={handleChange} className="w-full border p-2 rounded" />
// //           </div>
// //         </div>

// //         {/* Address */}
// //         <div>
// //           <label className="block mb-1">Address</label>
// //           <textarea name="address" value={form.address} onChange={handleChange} className="w-full border p-2 rounded" rows={3}></textarea>
// //         </div>

// //         {/* Submit */}
// //         <button type="submit" className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 w-full">
// //           Update Employee
// //         </button>
// //       </form>
// //     </div>
// //   );
// // };

// // export default AdminEmployeeEdit;

// import React, { useEffect, useState } from 'react';
// import { useParams, useNavigate } from 'react-router-dom';
// import { FaCamera } from 'react-icons/fa';

// const API_BASE = 'http://localhost/EMS-backend/api/employee';

// const AdminEmployeeEdit = () => {
//   const { emp_id } = useParams();
//   const navigate = useNavigate();
//   const [employee, setEmployee] = useState(null);
//   const [selectedImage, setSelectedImage] = useState(null);

//   const [form, setForm] = useState({
//     first_name: '',
//     last_name: '',
//     email: '',
//     mobile: '',
//     designation: '',
//     dob: '',
//     doj: '',
//     country: '',
//     state: '',
//     city: '',
//     address: '',
//     profile_img: '',
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
//           designation: data.designation || '',
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
//     Object.keys(form).forEach((key) => formData.append(key, form[key]));
//     if (selectedImage) formData.append('upload', selectedImage);

//     fetch(`${API_BASE}/update.php`, {
//       method: 'POST',
//       body: formData
//     })
//       .then(res => res.json())
//       .then(data => {
//         if (data.status) {
//           alert('Employee updated successfully!');
//           navigate(`/mainlayout/adminemployeeprofile/${emp_id}`);
//         } else {
//           alert(data.message || 'Update failed.');
//         }
//       });
//   };

//   if (!employee) return <div className="text-center p-10">Loading...</div>;

//   return (
//     <div className="max-w-3xl mx-auto mt-10 mb-10 bg-white shadow-lg rounded-xl overflow-hidden">
      
//       {/* Header */}
//       <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-6 text-center">
//         <h2 className="text-2xl md:text-3xl font-bold text-white">Edit Employee Details</h2>
//       </div>

//       <form onSubmit={handleSubmit} className="p-8 space-y-6">
        
//         {/* Profile Image Upload */}
//         <div className="flex justify-center">
//           <div className="relative group">
//             <img
//               src={
//                 selectedImage
//                   ? URL.createObjectURL(selectedImage)
//                   : employee?.photo
//                     ? `http://localhost/EMS-backend/uploads/${employee.photo}`
//                     : '/default-avatar.png'
//               }
//               alt="Profile"
//               className="w-32 h-32 rounded-full object-cover border-4 border-gray-200 shadow-lg transition-transform duration-300 group-hover:scale-105"
//             />
//             <label className="absolute bottom-0 right-0 bg-blue-600 p-3 rounded-full cursor-pointer hover:bg-blue-700 shadow-lg transition">
//               <input
//                 type="file"
//                 accept="image/*"
//                 className="hidden"
//                 onChange={(e) => {
//                   const file = e.target.files[0];
//                   if (file) setSelectedImage(file);
//                 }}
//               />
//               <FaCamera className="text-white" />
//             </label>
//           </div>
//         </div>

//         {/* Form Fields */}
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//           <InputField label="First Name" name="first_name" value={form.first_name} onChange={handleChange} required />
//           <InputField label="Last Name" name="last_name" value={form.last_name} onChange={handleChange} required />
//           <InputField type="email" label="Email" name="email" value={form.email} onChange={handleChange} required />
//           <InputField label="Mobile" name="mobile" value={form.mobile} onChange={handleChange} required />
//           <InputField label="Designation" name="designation" value={form.designation} onChange={handleChange} />
//           <InputField type="date" label="Date of Birth" name="dob" value={form.dob} onChange={handleChange} />
//           <InputField type="date" label="Date of Joining" name="doj" value={form.doj} onChange={handleChange} />
//           <InputField label="Country" name="country" value={form.country} onChange={handleChange} />
//           <InputField label="State" name="state" value={form.state} onChange={handleChange} />
//           <InputField label="City" name="city" value={form.city} onChange={handleChange} />
//         </div>

//         {/* Address */}
//         <div>
//           <label className="block text-gray-700 font-medium mb-1">Address</label>
//           <textarea
//             name="address"
//             value={form.address}
//             onChange={handleChange}
//             className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
//             rows={3}
//           ></textarea>
//         </div>

//         {/* Submit Button */}
//         <button
//           type="submit"
//           className="w-full py-3 bg-gradient-to-r from-green-500 to-green-600 text-white font-semibold rounded-lg shadow-md hover:from-green-600 hover:to-green-700 transition-all"
//         >
//           Update Employee
//         </button>
//       </form>
//     </div>
//   );
// };

// // Reusable Input Field Component
// const InputField = ({ label, name, value, onChange, type = 'text', required }) => (
//   <div>
//     <label className="block text-gray-700 font-medium mb-1">{label}</label>
//     <input
//       type={type}
//       name={name}
//       value={value}
//       onChange={onChange}
//       className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
//       required={required}
//     />
//   </div>
// );

// export default AdminEmployeeEdit;

import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { FaCamera } from 'react-icons/fa';
import { ToastContainer } from 'react-toastify'; // Add this
import 'react-toastify/dist/ReactToastify.css';
import { showSuccess, showError } from '../../utils/toast'; // ✅ adjust path
import API from '../../../utils/api';

// const API_BASE = API;

const AdminEmployeeEdit = () => {
  const { emp_id } = useParams();
  const navigate = useNavigate();
  const [employee, setEmployee] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);

  const [form, setForm] = useState({
    first_name: '',
    last_name: '',
    email: '',
    mobile: '',
    designation: '',
    dob: '',
    doj: '',
    country: '',
    state: '',
    city: '',
    address: '',
    profile_img: '',
  });

 useEffect(() => {
  const fetchEmployeeData = async () => {
    try {
      const { data } = await API.get(`api/employee/get_one.php?emp_id=${emp_id}`);

      setEmployee(data);
      setForm({
        first_name: data.first_name || '',
        last_name: data.last_name || '',
        email: data.email || '',
        mobile: data.mobile || '',
        designation: data.designation || '',
        dob: data.dob || '',
        doj: data.doj || '',
        country: data.country || '',
        state: data.state || '',
        city: data.city || '',
        address: data.address || '',
      });
    } catch (error) {
      console.error("Error fetching employee data:", error);
    }
  };

  if (emp_id) fetchEmployeeData();
}, [emp_id]);

  const handleChange = (e) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

 const handleSubmit = async (e) => {
  e.preventDefault();

  const formData = new FormData();
  formData.append("id", employee.id);
  Object.keys(form).forEach((key) => formData.append(key, form[key]));
  if (selectedImage) formData.append("upload", selectedImage);

  try {
    const { data } = await API.post("api/employee/update.php", formData, {
      headers: {
        "Content-Type": "multipart/form-data", // ✅ important for file upload
      },
    });

    if (data.status) {
      console.log("Update success triggered");
      showSuccess("Employee updated successfully!");
      setTimeout(() => {
        navigate(`/mainlayout/adminemployeeprofile/${emp_id}`);
      }, 2000);
    } else {
      showError(data.message || "Update failed.");
    }
  } catch (error) {
    console.error("Update error:", error);
    showError("Something went wrong. Please try again.");
  }
};

  if (!employee) return <div className="text-center p-10">Loading...</div>;

  return (
    <div className="max-w-3xl mx-auto mt-10 mb-10 bg-white shadow-lg rounded-xl overflow-hidden">
      
      {/* Header */}
      <div className="bg-[#101c3d] p-6 text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-white">Edit Employee Details</h2>
      </div>

      <form onSubmit={handleSubmit} className="p-8 space-y-6">
        
        {/* Profile Image Upload */}
        <div className="flex justify-center">
          <div className="relative group">
            <img
              src={
                selectedImage
                  ? URL.createObjectURL(selectedImage)
                  : employee?.photo
                    ? `http://localhost/EMS-backend/uploads/${employee.photo}`
                    : '/default-avatar.png'
              }
              alt="Profile"
              className="w-32 h-32 rounded-full object-cover border-4 border-gray-200 shadow-lg transition-transform duration-300 group-hover:scale-105"
            />
            <label className="absolute bottom-0 right-0 bg-blue-600 p-3 rounded-full cursor-pointer hover:bg-blue-700 shadow-lg transition">
              <input
                type="file"
                accept="image/*"
                className="hidden"
                onChange={(e) => {
                  const file = e.target.files[0];
                  if (file) setSelectedImage(file);
                }}
              />
              <FaCamera className="text-white" />
            </label>
          </div>
        </div>

        {/* Form Fields */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <InputField label="First Name" name="first_name" value={form.first_name} onChange={handleChange} required />
          <InputField label="Last Name" name="last_name" value={form.last_name} onChange={handleChange} required />
          <InputField type="email" label="Email" name="email" value={form.email} onChange={handleChange} required />
          <InputField label="Mobile" name="mobile" value={form.mobile} onChange={handleChange} required />
          <InputField label="Designation" name="designation" value={form.designation} onChange={handleChange} />
          <InputField type="date" label="Date of Birth" name="dob" value={form.dob} onChange={handleChange} />
          <InputField type="date" label="Date of Joining" name="doj" value={form.doj} onChange={handleChange} />
          <InputField label="Country" name="country" value={form.country} onChange={handleChange} />
          <InputField label="State" name="state" value={form.state} onChange={handleChange} />
          <InputField label="City" name="city" value={form.city} onChange={handleChange} />
        </div>

        {/* Address */}
        <div>
          <label className="block text-gray-700 font-medium mb-1">Address</label>
          <textarea
            name="address"
            value={form.address}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
            rows={3}
          ></textarea>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full py-3 bg-[#101c3d] text-white font-semibold rounded-lg shadow-md hover:from-green-600 hover:to-green-700 transition-all"
        >
          Update Employee
        </button>
      </form>
    </div>
  );
};

// Reusable Input Field Component
const InputField = ({ label, name, value, onChange, type = 'text', required }) => (
  <div>
    <label className="block text-gray-700 font-medium mb-1">{label}</label>
    <input
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
      required={required}
    />
  </div>
);

export default AdminEmployeeEdit;
