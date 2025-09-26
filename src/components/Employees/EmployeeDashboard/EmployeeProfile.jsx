// // // // // // import React, { useState, useRef } from 'react';
// // // // // // import {
// // // // // //   FaUserCircle, FaEdit, FaSave, FaTimes, FaIdBadge, FaUser, FaEnvelope, FaBuilding, FaPhone, FaMapMarkerAlt, FaGlobe, FaCity, FaBirthdayCake, FaCalendarCheck, FaHome
// // // // // // } from 'react-icons/fa';

// // // // // // const defaultProfile = {
// // // // // //   empId: 'EMP12345',
// // // // // //   firstName: 'John',
// // // // // //   lastName: 'Doe',
// // // // // //   email: 'john.doe@email.com',
// // // // // //   designation: 'Engineering',
// // // // // //   mobile: '+91 9876543210',
// // // // // //   state: 'Tamil Nadu',
// // // // // //   country: 'India',
// // // // // //   city: 'Chennai',
// // // // // //   dob: '1995-06-15',
// // // // // //   joining: '2021-01-10',
// // // // // //   address: '123, Main Street, Chennai',
// // // // // //   photo: '',
// // // // // // };

// // // // // // const fieldIcons = {
// // // // // //   empId: <FaIdBadge className="text-gray-400 text-lg" />,
// // // // // //   firstName: <FaUser className="text-gray-400 text-lg" />,
// // // // // //   lastName: <FaUser className="text-gray-400 text-lg" />,
// // // // // //   email: <FaEnvelope className="text-gray-400 text-lg" />,
// // // // // //   designation: <FaBuilding className="text-gray-400 text-lg" />,
// // // // // //   mobile: <FaPhone className="text-gray-400 text-lg" />,
// // // // // //   state: <FaMapMarkerAlt className="text-gray-400 text-lg" />,
// // // // // //   country: <FaGlobe className="text-gray-400 text-lg" />,
// // // // // //   city: <FaCity className="text-gray-400 text-lg" />,
// // // // // //   dob: <FaBirthdayCake className="text-gray-400 text-lg" />,
// // // // // //   joining: <FaCalendarCheck className="text-gray-400 text-lg" />,
// // // // // //   address: <FaHome className="text-gray-400 text-lg" />,
// // // // // // };

// // // // // // function EmployeeProfile() {
// // // // // //   const [profile, setProfile] = useState(defaultProfile);
// // // // // //   const [editMode, setEditMode] = useState(false);
// // // // // //   const [form, setForm] = useState(profile);
// // // // // //   const [photoPreview, setPhotoPreview] = useState('');
// // // // // //   const fileInputRef = useRef();

// // // // // //   const handleEdit = () => {
// // // // // //     setForm(profile);
// // // // // //     setPhotoPreview(profile.photo);
// // // // // //     setEditMode(true);
// // // // // //   };

// // // // // //   const handleCancel = () => {
// // // // // //     setEditMode(false);
// // // // // //     setPhotoPreview(profile.photo);
// // // // // //   };

// // // // // //   const handleChange = e => {
// // // // // //     const { name, value } = e.target;
// // // // // //     setForm({ ...form, [name]: value });
// // // // // //   };

// // // // // //   const handlePhotoChange = e => {
// // // // // //     const file = e.target.files[0];
// // // // // //     if (file) {
// // // // // //       const reader = new FileReader();
// // // // // //       reader.onload = ev => setPhotoPreview(ev.target.result);
// // // // // //       reader.readAsDataURL(file);
// // // // // //       setForm({ ...form, photo: file });
// // // // // //     }
// // // // // //   };

// // // // // //   const handleSave = e => {
// // // // // //     e.preventDefault();
// // // // // //     setProfile({ ...form, photo: photoPreview });
// // // // // //     setEditMode(false);
// // // // // //   };

// // // // // //   // Helper for input with icon
// // // // // //   const InputWithIcon = ({ icon, ...props }) => (
// // // // // //     <div className="relative flex items-center">
// // // // // //       <span className="absolute left-3">{icon}</span>
// // // // // //       <input
// // // // // //         {...props}
// // // // // //         className={`w-full border rounded-lg pl-10 pr-3 py-2 focus:ring-2 focus:ring-blue-300 focus:border-blue-400 transition shadow-sm ${props.disabled ? 'bg-gray-100' : 'bg-white'}`}
// // // // // //       />
// // // // // //     </div>
// // // // // //   );

// // // // // //   const TextareaWithIcon = ({ icon, ...props }) => (
// // // // // //     <div className="relative flex items-center">
// // // // // //       <span className="absolute left-3 top-3">{icon}</span>
// // // // // //       <textarea
// // // // // //         {...props}
// // // // // //         className={`w-full border rounded-lg pl-10 pr-3 py-2 focus:ring-2 focus:ring-blue-300 focus:border-blue-400 transition shadow-sm resize-none ${props.disabled ? 'bg-gray-100' : 'bg-white'}`}
// // // // // //       />
// // // // // //     </div>
// // // // // //   );

// // // // // //   return (
// // // // // //     <div className="bg-white rounded-2xl shadow-lg p-10 max-w-4xl mx-auto mt-8">
// // // // // //       <div className="flex items-center justify-between mb-8">
// // // // // //         <h2 className="text-3xl font-bold flex items-center gap-2 text-blue-900">
// // // // // //           <FaUserCircle className="text-blue-400" /> Employee Profile
// // // // // //         </h2>
// // // // // //         {!editMode ? (
// // // // // //           <button className="flex items-center gap-1 text-blue-600 hover:text-blue-800 font-semibold px-4 py-2 rounded-lg border border-blue-100 bg-blue-50 shadow-sm" onClick={handleEdit}>
// // // // // //             <FaEdit /> Edit
// // // // // //           </button>
// // // // // //         ) : (
// // // // // //           <div className="flex gap-2">
// // // // // //             <button className="flex items-center gap-1 text-green-600 hover:text-green-800 font-semibold px-4 py-2 rounded-lg border border-green-100 bg-green-50 shadow-sm" onClick={handleSave}>
// // // // // //               <FaSave /> Save
// // // // // //             </button>
// // // // // //             <button className="flex items-center gap-1 text-red-500 hover:text-red-700 font-semibold px-4 py-2 rounded-lg border border-red-100 bg-red-50 shadow-sm" onClick={handleCancel}>
// // // // // //               <FaTimes /> Cancel
// // // // // //             </button>
// // // // // //           </div>
// // // // // //         )}
// // // // // //       </div>
// // // // // //       <form className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-6" onSubmit={handleSave}>
// // // // // //         <div className="flex flex-col items-center md:items-start gap-4 col-span-2 md:col-span-1">
// // // // // //           <div className="relative">
// // // // // //             {photoPreview || profile.photo ? (
// // // // // //               <img
// // // // // //                 src={photoPreview || profile.photo}
// // // // // //                 alt="Profile"
// // // // // //                 className="w-32 h-32 rounded-full object-cover border-4 border-blue-200 shadow-md"
// // // // // //               />
// // // // // //             ) : (
// // // // // //               <FaUserCircle className="w-32 h-32 text-blue-200" />
// // // // // //             )}
// // // // // //             {editMode && (
// // // // // //               <button
// // // // // //                 type="button"
// // // // // //                 className="absolute bottom-2 right-2 bg-white border border-gray-300 rounded-full p-2 shadow hover:bg-gray-100"
// // // // // //                 onClick={() => fileInputRef.current.click()}
// // // // // //                 title="Change Photo"
// // // // // //               >
// // // // // //                 <FaEdit className="text-blue-500" />
// // // // // //               </button>
// // // // // //             )}
// // // // // //             <input
// // // // // //               type="file"
// // // // // //               accept="image/*"
// // // // // //               ref={fileInputRef}
// // // // // //               className="hidden"
// // // // // //               onChange={handlePhotoChange}
// // // // // //               disabled={!editMode}
// // // // // //             />
// // // // // //           </div>
// // // // // //         </div>
// // // // // //         <div className="grid grid-cols-1 gap-4 col-span-2 md:col-span-1">
// // // // // //           <label className="block font-semibold">Emp ID
// // // // // //             <InputWithIcon icon={fieldIcons.empId} type="text" name="empId" value={form.empId} readOnly disabled className="bg-gray-100" />
// // // // // //           </label>
// // // // // //           <label className="block font-semibold">First Name
// // // // // //             <InputWithIcon icon={fieldIcons.firstName} type="text" name="firstName" value={form.firstName} onChange={handleChange} disabled={!editMode} />
// // // // // //           </label>
// // // // // //           <label className="block font-semibold">Last Name
// // // // // //             <InputWithIcon icon={fieldIcons.lastName} type="text" name="lastName" value={form.lastName} onChange={handleChange} disabled={!editMode} />
// // // // // //           </label>
// // // // // //           <label className="block font-semibold">Email
// // // // // //             <InputWithIcon icon={fieldIcons.email} type="email" name="email" value={form.email} onChange={handleChange} disabled={!editMode} />
// // // // // //           </label>
// // // // // //           <label className="block font-semibold">designation
// // // // // //             <InputWithIcon icon={fieldIcons.designation} type="text" name="designation" value={form.designation} onChange={handleChange} disabled={!editMode} />
// // // // // //           </label>
// // // // // //           <label className="block font-semibold">Mobile No
// // // // // //             <InputWithIcon icon={fieldIcons.mobile} type="text" name="mobile" value={form.mobile} onChange={handleChange} disabled={!editMode} />
// // // // // //           </label>
// // // // // //           <label className="block font-semibold">State
// // // // // //             <InputWithIcon icon={fieldIcons.state} type="text" name="state" value={form.state} onChange={handleChange} disabled={!editMode} />
// // // // // //           </label>
// // // // // //           <label className="block font-semibold">Country
// // // // // //             <InputWithIcon icon={fieldIcons.country} type="text" name="country" value={form.country} onChange={handleChange} disabled={!editMode} />
// // // // // //           </label>
// // // // // //           <label className="block font-semibold">City
// // // // // //             <InputWithIcon icon={fieldIcons.city} type="text" name="city" value={form.city} onChange={handleChange} disabled={!editMode} />
// // // // // //           </label>
// // // // // //           <label className="block font-semibold">DOB
// // // // // //             <InputWithIcon icon={fieldIcons.dob} type="date" name="dob" value={form.dob} onChange={handleChange} disabled={!editMode} />
// // // // // //           </label>
// // // // // //           <label className="block font-semibold">Date of Joining
// // // // // //             <InputWithIcon icon={fieldIcons.joining} type="date" name="joining" value={form.joining} onChange={handleChange} disabled={!editMode} />
// // // // // //           </label>
// // // // // //           <label className="block font-semibold">Address
// // // // // //             <TextareaWithIcon icon={fieldIcons.address} name="address" value={form.address} onChange={handleChange} disabled={!editMode} rows={2} />
// // // // // //           </label>
// // // // // //         </div>
// // // // // //       </form>
// // // // // //     </div>
// // // // // //   );
// // // // // // }

// // // // // // export default EmployeeProfile; 


// // // // // import React, { useEffect, useState, useRef } from 'react';
// // // // // import {
// // // // //   FaUserCircle, FaEdit, FaSave, FaTimes, FaIdBadge, FaUser, FaEnvelope,
// // // // //   FaBuilding, FaPhone, FaMapMarkerAlt, FaGlobe, FaCity, FaBirthdayCake,
// // // // //   FaCalendarCheck, FaHome
// // // // // } from 'react-icons/fa';

// // // // // const API_BASE = 'http://localhost/EMS-backend/api/employee';

// // // // // const fieldIcons = {
// // // // //   emp_id: <FaIdBadge className="text-gray-400 text-lg" />,
// // // // //   first_name: <FaUser className="text-gray-400 text-lg" />,
// // // // //   last_name: <FaUser className="text-gray-400 text-lg" />,
// // // // //   email: <FaEnvelope className="text-gray-400 text-lg" />,
// // // // //   designation: <FaBuilding className="text-gray-400 text-lg" />,
// // // // //   mobile: <FaPhone className="text-gray-400 text-lg" />,
// // // // //   state: <FaMapMarkerAlt className="text-gray-400 text-lg" />,
// // // // //   country: <FaGlobe className="text-gray-400 text-lg" />,
// // // // //   city: <FaCity className="text-gray-400 text-lg" />,
// // // // //   dob: <FaBirthdayCake className="text-gray-400 text-lg" />,
// // // // //   doj: <FaCalendarCheck className="text-gray-400 text-lg" />,
// // // // //   address: <FaHome className="text-gray-400 text-lg" />,
// // // // // };

// // // // // const InputWithIcon = ({ icon, ...props }) => (
// // // // //   <div className="relative flex items-center">
// // // // //     <span className="absolute left-3">{icon}</span>
// // // // //     <input
// // // // //       {...props}
// // // // //       className={`w-full border rounded-lg pl-10 pr-3 py-2 focus:ring-2 focus:ring-blue-300 focus:border-blue-400 transition shadow-sm ${props.disabled ? 'bg-gray-100' : 'bg-white'}`}
// // // // //     />
// // // // //   </div>
// // // // // );

// // // // // const TextareaWithIcon = ({ icon, ...props }) => (
// // // // //   <div className="relative flex items-start">
// // // // //     <span className="absolute left-3 top-3">{icon}</span>
// // // // //     <textarea
// // // // //       {...props}
// // // // //       className={`w-full border rounded-lg pl-10 pr-3 py-2 focus:ring-2 focus:ring-blue-300 focus:border-blue-400 transition shadow-sm resize-none ${props.disabled ? 'bg-gray-100' : 'bg-white'}`}
// // // // //     />
// // // // //   </div>
// // // // // );

// // // // // export default function EmployeeProfile() {
// // // // //   const user = JSON.parse(sessionStorage.getItem('user'));
// // // // //   const emp_id = user?.emp_id || user?.id;
// // // // //   const [employee, setEmployee] = useState(null);
// // // // //   const [form, setForm] = useState(null);
// // // // //   const [editMode, setEditMode] = useState(false);
// // // // //   const [photoPreview, setPhotoPreview] = useState('');
// // // // //   const fileInputRef = useRef();

// // // // //   useEffect(() => {
// // // // //     if (!emp_id) return;
// // // // //     fetch(`${API_BASE}/get_one.php?emp_id=${emp_id}`)
// // // // //       .then(res => res.json())
// // // // //       .then(data => {
// // // // //         setEmployee(data);
// // // // //         setForm(data);
// // // // //         setPhotoPreview(data.photo ? `http://localhost/EMS-backend/uploads/${data.photo}` : '');
// // // // //       })
// // // // //       .catch(err => console.error('Error fetching profile:', err));
// // // // //   }, [emp_id]);

// // // // //   const handleEdit = () => setEditMode(true);

// // // // //   const handleCancel = () => {
// // // // //     setForm(employee);
// // // // //     setEditMode(false);
// // // // //     setPhotoPreview(employee.photo ? `http://localhost/EMS-backend/uploads/${employee.photo}` : '');
// // // // //   };

// // // // //   const handleChange = (e) => {
// // // // //     const { name, value } = e.target;
// // // // //     setForm(prev => ({ ...prev, [name]: value }));
// // // // //   };

// // // // //   const handlePhotoChange = (e) => {
// // // // //     const file = e.target.files[0];
// // // // //     if (file) {
// // // // //       const reader = new FileReader();
// // // // //       reader.onload = ev => setPhotoPreview(ev.target.result);
// // // // //       reader.readAsDataURL(file);
// // // // //       setForm(prev => ({ ...prev, photo: file }));
// // // // //     }
// // // // //   };

// // // // //   const handleSave = async (e) => {
// // // // //     e.preventDefault();

// // // // //     const formData = new FormData();
// // // // //     for (const key in form) {
// // // // //       if (key === 'photo' && typeof form[key] !== 'object') continue;
// // // // //       formData.append(key, form[key]);
// // // // //     }

// // // // //     formData.append('emp_id', form.emp_id);

// // // // //     try {
// // // // //       const res = await fetch(`${API_BASE}/update.php`, {
// // // // //         method: 'POST',
// // // // //         body: formData,
// // // // //       });

// // // // //       const result = await res.json();

// // // // //     if (result.status) {
// // // // //   setEmployee(form);
// // // // //   setEditMode(false);
// // // // //   alert('Profile updated successfully!');
// // // // // } else {
// // // // //   alert('Failed to update profile: ' + result.message);
// // // // // }

// // // // //     } catch (error) {
// // // // //       console.error('Update failed:', error);
// // // // //       alert('Error occurred while saving.');
// // // // //     }
// // // // //   };

// // // // //   if (!form) return <div className="text-center p-10">Loading profile...</div>;

// // // // //   return (
// // // // //     <div className="bg-white rounded-2xl shadow-lg p-10 max-w-5xl mx-auto mt-8 mb-10">
// // // // //       <div className="flex justify-between items-center mb-6">
// // // // //         <h2 className="text-3xl font-bold text-blue-900 flex items-center gap-2">
// // // // //           <FaUserCircle className="text-blue-400" /> Employee Profile
// // // // //         </h2>
// // // // //         <div className="text-lg text-gray-600 font-semibold flex items-center gap-2">
// // // // //           {fieldIcons.emp_id}
// // // // //           <span>{form.emp_id}</span>
// // // // //         </div>
// // // // //       </div>

// // // // //       <div className="flex flex-col md:flex-row items-center justify-between mb-10 gap-6">
// // // // //         <div className="relative">
// // // // //           {photoPreview ? (
// // // // //             <img
// // // // //               src={photoPreview}
// // // // //               alt="Profile"
// // // // //               className="w-32 h-32 rounded-full object-cover border-4 border-blue-200 shadow-md"
// // // // //               onError={(e) => { e.target.src = 'https://i.pravatar.cc/100'; }}
// // // // //             />
// // // // //           ) : (
// // // // //             <FaUserCircle className="w-32 h-32 text-blue-200" />
// // // // //           )}
// // // // //           {editMode && (
// // // // //             <button
// // // // //               type="button"
// // // // //               className="absolute bottom-2 right-2 bg-white border border-gray-300 rounded-full p-2 shadow hover:bg-gray-100"
// // // // //               onClick={() => fileInputRef.current.click()}
// // // // //               title="Change Photo"
// // // // //             >
// // // // //               <FaEdit className="text-blue-500" />
// // // // //             </button>
// // // // //           )}
// // // // //           <input
// // // // //             type="file"
// // // // //             accept="image/*"
// // // // //             ref={fileInputRef}
// // // // //             className="hidden"
// // // // //             onChange={handlePhotoChange}
// // // // //             disabled={!editMode}
// // // // //           />
// // // // //         </div>

// // // // //         <div className="text-center md:text-left">
// // // // //           <h3 className="text-2xl font-semibold text-blue-800">{form.first_name} {form.last_name}</h3>
// // // // //         </div>

// // // // //         {!editMode ? (
// // // // //           <button onClick={handleEdit} className="flex items-center gap-2 text-blue-600 hover:text-blue-800 font-semibold px-4 py-2 rounded-lg border border-blue-100 bg-blue-50 shadow-sm">
// // // // //             <FaEdit /> Edit
// // // // //           </button>
// // // // //         ) : (
// // // // //           <div className="flex gap-2">
// // // // //             <button onClick={handleSave} className="flex items-center gap-1 text-green-600 hover:text-green-800 font-semibold px-4 py-2 rounded-lg border border-green-100 bg-green-50 shadow-sm">
// // // // //               <FaSave /> Save
// // // // //             </button>
// // // // //             <button onClick={handleCancel} className="flex items-center gap-1 text-red-500 hover:text-red-700 font-semibold px-4 py-2 rounded-lg border border-red-100 bg-red-50 shadow-sm">
// // // // //               <FaTimes /> Cancel
// // // // //             </button>
// // // // //           </div>
// // // // //         )}
// // // // //       </div>

// // // // //       <form onSubmit={handleSave} className="grid grid-cols-1 md:grid-cols-2 gap-6">
// // // // //         <label className="block font-semibold">First Name
// // // // //           <InputWithIcon icon={fieldIcons.first_name} type="text" name="first_name" value={form.first_name} onChange={handleChange} disabled={!editMode} />
// // // // //         </label>
// // // // //         <label className="block font-semibold">Last Name
// // // // //           <InputWithIcon icon={fieldIcons.last_name} type="text" name="last_name" value={form.last_name} onChange={handleChange} disabled={!editMode} />
// // // // //         </label>
// // // // //         <label className="block font-semibold">Email
// // // // //           <InputWithIcon icon={fieldIcons.email} type="email" name="email" value={form.email} onChange={handleChange} disabled={!editMode} />
// // // // //         </label>
// // // // //         <label className="block font-semibold">Designation
// // // // //           <InputWithIcon icon={fieldIcons.designation} type="text" name="designation" value={form.designation} onChange={handleChange} disabled={!editMode} />
// // // // //         </label>
// // // // //         <label className="block font-semibold">Mobile
// // // // //           <InputWithIcon icon={fieldIcons.mobile} type="text" name="mobile" value={form.mobile} onChange={handleChange} disabled={!editMode} />
// // // // //         </label>
// // // // //         <label className="block font-semibold">State
// // // // //           <InputWithIcon icon={fieldIcons.state} type="text" name="state" value={form.state} onChange={handleChange} disabled={!editMode} />
// // // // //         </label>
// // // // //         <label className="block font-semibold">Country
// // // // //           <InputWithIcon icon={fieldIcons.country} type="text" name="country" value={form.country} onChange={handleChange} disabled={!editMode} />
// // // // //         </label>
// // // // //         <label className="block font-semibold">City
// // // // //           <InputWithIcon icon={fieldIcons.city} type="text" name="city" value={form.city} onChange={handleChange} disabled={!editMode} />
// // // // //         </label>
// // // // //         <label className="block font-semibold">DOB
// // // // //           <InputWithIcon icon={fieldIcons.dob} type="date" name="dob" value={form.dob} onChange={handleChange} disabled={!editMode} />
// // // // //         </label>
// // // // //         <label className="block font-semibold">Joining Date
// // // // //           <InputWithIcon icon={fieldIcons.doj} type="date" name="doj" value={form.doj} onChange={handleChange} disabled={!editMode} />
// // // // //         </label>
// // // // //         <label className="block font-semibold col-span-1 md:col-span-2">Address
// // // // //           <TextareaWithIcon icon={fieldIcons.address} name="address" value={form.address} onChange={handleChange} disabled={!editMode} rows={2} />
// // // // //         </label>
// // // // //       </form>
// // // // //     </div>
// // // // //   );
// // // // // }



// // // // // components/EmployeeProfile.jsx
// // // //   import React, { useEffect, useState } from 'react';
// // // //   import { useNavigate } from 'react-router-dom';
// // // //   import { FaUserCircle, FaEdit, FaIdBadge } from 'react-icons/fa';

// // // //   const API_BASE = 'http://localhost/EMS-backend/api/employee';

// // // //   const EmployeeProfile = () => {
// // // //     const user = JSON.parse(sessionStorage.getItem('user'));
// // // //     const emp_id = user?.emp_id || user?.id;
// // // //     const [employee, setEmployee] = useState(null);
// // // //     const navigate = useNavigate();

// // // //     useEffect(() => {
// // // //       if (!emp_id) return;
// // // //       fetch(`${API_BASE}/get_one.php?emp_id=${emp_id}`)
// // // //         .then(res => res.json())
// // // //         .then(data => setEmployee(data))
// // // //         .catch(err => console.error('Error fetching profile:', err));
// // // //     }, [emp_id]);

// // // //     if (!employee) return <div className="text-center p-10">Loading profile...</div>;

// // // //     return (
// // // //       <div className="bg-white rounded-2xl shadow-lg p-10 max-w-5xl mx-auto mt-8 mb-10">
// // // //         <div className="flex justify-between items-center mb-6">
// // // //           <h2 className="text-3xl font-bold text-blue-900 flex items-center gap-2">
// // // //             <FaUserCircle className="text-blue-400" /> Employee Profile
// // // //           </h2>
// // // //           <div className="text-lg text-gray-600 font-semibold flex items-center gap-2">
// // // //             <FaIdBadge className="text-gray-400 text-lg" />
// // // //             <span>{employee.emp_id}</span>
// // // //           </div>
// // // //         </div>

// // // //         <div className="flex flex-col md:flex-row items-center justify-between mb-10 gap-6">
// // // //           <div className="relative">
// // // //             <img
// // // //               src={employee.photo ? `http://localhost/EMS-backend/uploads/${employee.photo}` : 'https://i.pravatar.cc/100'}
// // // //               alt="Profile"
// // // //               className="w-32 h-32 rounded-full object-cover border-4 border-blue-200 shadow-md"
// // // //             />
// // // //           </div>

// // // //           <div className="text-center md:text-left">
// // // //             <h3 className="text-2xl font-semibold text-blue-800">
// // // //               {employee.first_name} {employee.last_name}
// // // //             </h3>
// // // //           </div>

// // // //           <button
// // // //             onClick={() => navigate('/mainlayout/editemployee', { state: { employee } })}
// // // //             className="flex items-center gap-2 text-blue-600 hover:text-blue-800 font-semibold px-4 py-2 rounded-lg border border-blue-100 bg-blue-50 shadow-sm"
// // // //           >
// // // //             <FaEdit /> Edit
// // // //           </button>
// // // //         </div>
// // // //       </div>
// // // //     );
// // // //   };

// // // //   export default EmployeeProfile;


// // // import React, { useEffect, useState } from 'react';
// // // import { useNavigate } from 'react-router-dom';
// // // import {
// // //   FaUserCircle, FaEdit, FaEnvelope, FaPhone, FaBuilding, FaMapMarkerAlt, FaCalendarCheck, FaIdBadge
// // // } from 'react-icons/fa';

// // // const API_BASE = 'http://localhost/EMS-backend/api/employee';

// // // const EmployeeProfile = () => {
// // //   const user = JSON.parse(sessionStorage.getItem('user'));
// // //   const emp_id = user?.emp_id || user?.id;
// // //   const [employee, setEmployee] = useState(null);
// // //   const navigate = useNavigate();

// // //   useEffect(() => {
// // //     if (!emp_id) return;
// // //     fetch(`${API_BASE}/get_one.php?emp_id=${emp_id}`)
// // //       .then(res => res.json())
// // //       .then(data => setEmployee(data))
// // //       .catch(err => console.error('Error fetching profile:', err));
// // //   }, [emp_id]);

// // //   if (!employee) return <div className="text-center py-20 text-xl font-medium">Loading profile...</div>;

// // //   return (
// // //     <div className="bg-white shadow-lg rounded-2xl max-w-4xl mx-auto mt-10 mb-10 p-8">
// // //       <div className="flex justify-between items-center mb-6">
// // //         <h2 className="text-3xl font-bold text-blue-800 flex items-center gap-2">
// // //           <FaUserCircle className="text-blue-500" /> Employee Profile
// // //         </h2>
// // //         <button
// // //           onClick={() => navigate('/mainlayout/editemployee', { state: { employee } })}
// // //           className="flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-lg hover:bg-blue-200 transition"
// // //         >
// // //           <FaEdit /> Edit
// // //         </button>
// // //       </div>

// // //       <div className="flex flex-col md:flex-row items-center gap-8">
// // //         <img
// // //           src={employee.photo ? `http://localhost/EMS-backend/uploads/${employee.photo}` : 'https://i.pravatar.cc/150'}
// // //           alt="Employee"
// // //           className="w-36 h-36 rounded-full object-cover border-4 border-blue-200 shadow"
// // //         />

// // //         <div className="w-full space-y-4">
// // //           <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
// // //             <Info label="Full Name" value={`${employee.first_name} ${employee.last_name}`} icon={<FaUserCircle />} />
// // //             <Info label="Employee ID" value={employee.emp_id} icon={<FaIdBadge />} />
// // //             <Info label="Designation" value={employee.designation} icon={<FaBuilding />} />
// // //             <Info label="Email" value={employee.email} icon={<FaEnvelope />} />
// // //             <Info label="Mobile" value={employee.mobile} icon={<FaPhone />} />
// // //             <Info label="Date of Joining" value={employee.doj} icon={<FaCalendarCheck />} />
// // //             <Info label="Address" value={employee.address || 'N/A'} icon={<FaMapMarkerAlt />} />
// // //           </div>
// // //         </div>
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // const Info = ({ label, value, icon }) => (
// // //   <div className="flex items-start gap-3 bg-gray-50 p-3 rounded-lg shadow-sm">
// // //     <div className="text-blue-500 mt-1">{icon}</div>
// // //     <div>
// // //       <p className="text-sm text-gray-600">{label}</p>
// // //       <p className="text-md font-semibold text-gray-800">{value}</p>
// // //     </div>
// // //   </div>
// // // );

// // // export default EmployeeProfile;

// // import React, { useEffect, useState } from 'react';
// // import { useNavigate } from 'react-router-dom';
// // import {
// //   FaUserCircle, FaEdit, FaEnvelope, FaPhone, FaBuilding, FaMapMarkerAlt, FaCalendarCheck, FaIdBadge,
// //   FaBirthdayCake, FaGlobe, FaCity, FaHome
// // } from 'react-icons/fa';

// // const API_BASE = 'http://localhost/EMS-backend/api/employee';

// // const EmployeeProfile = () => {
// //   const user = JSON.parse(sessionStorage.getItem('user'));
// //   const emp_id = user?.emp_id || user?.id;
// //   const [employee, setEmployee] = useState(null);
// //   const navigate = useNavigate();

// //   useEffect(() => {
// //     if (!emp_id) return;
// //     fetch(`${API_BASE}/get_one.php?emp_id=${emp_id}`)
// //       .then(res => res.json())
// //       .then(data => setEmployee(data))
// //       .catch(err => console.error('Error fetching profile:', err));
// //   }, [emp_id]);

// //   if (!employee) return <div className="text-center py-20 text-xl font-medium">Loading profile...</div>;

// //   return (
// //     <div className="bg-white shadow-lg rounded-2xl max-w-5xl mx-auto mt-10 mb-10 p-8">
// //       <div className="flex justify-between items-center mb-6">
// //         <h2 className="text-3xl font-bold text-blue-800 flex items-center gap-2">
// //           <FaUserCircle className="text-blue-500" /> Employee Profile
// //         </h2>
// //         <button
// //           onClick={() => navigate('/mainlayout/editemployee', { state: { employee } })}
// //           className="flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-lg hover:bg-blue-200 transition"
// //         >
// //           <FaEdit /> Edit
// //         </button>
// //       </div>

// //       <div className="flex flex-col md:flex-row items-center gap-8 mb-8">
// //         <img
// //           src={employee.photo ? `http://localhost/EMS-backend/uploads/${employee.photo}` : 'https://i.pravatar.cc/150'}
// //           alt="Employee"
// //           className="w-36 h-36 rounded-full object-cover border-4 border-blue-200 shadow"
// //         />

// //         <div className="text-center md:text-left">
// //           <h3 className="text-2xl font-semibold text-blue-800">
// //             {employee.first_name} {employee.last_name}
// //           </h3>
// //           <p className="text-gray-600 mt-1">{employee.designation}</p>
// //         </div>
// //       </div>

// //       {/* Grid of all employee info */}
// //       <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
// //         <Info label="Employee ID" value={employee.emp_id} icon={<FaIdBadge />} />
// //         <Info label="Email" value={employee.email} icon={<FaEnvelope />} />
// //         <Info label="Mobile" value={employee.mobile} icon={<FaPhone />} />
// //         <Info label="Date of Joining" value={employee.doj} icon={<FaCalendarCheck />} />
// //         <Info label="Date of Birth" value={employee.dob || 'N/A'} icon={<FaBirthdayCake />} />
// //         <Info label="Address" value={employee.address || 'N/A'} icon={<FaHome />} />
// //         <Info label="City" value={employee.city || 'N/A'} icon={<FaCity />} />
// //         <Info label="State" value={employee.state || 'N/A'} icon={<FaMapMarkerAlt />} />
// //         <Info label="Country" value={employee.country || 'N/A'} icon={<FaGlobe />} />
// //       </div>
// //     </div>
// //   );
// // };

// // const Info = ({ label, value, icon }) => (
// //   <div className="flex items-start gap-3 bg-gray-50 p-4 rounded-lg shadow-sm">
// //     <div className="text-blue-500 mt-1">{icon}</div>
// //     <div>
// //       <p className="text-sm text-gray-600">{label}</p>
// //       <p className="text-base font-semibold text-gray-800">{value}</p>
// //     </div>
// //   </div>
// // );

// // export default EmployeeProfile;


// // import React, { useEffect, useState } from "react";
// // import { useNavigate } from "react-router-dom";
// // import {
// //   FaEnvelope,
// //   FaPhone,
// //   FaBuilding,
// //   FaMapMarkerAlt,
// //   FaCalendarCheck,
// //   FaIdBadge,
// //   FaBirthdayCake,
// //   FaGlobe,
// //   FaCity,
// //   FaHome,
// // } from "react-icons/fa";

// // const API_BASE = "http://localhost/EMS-backend/api/employee";

// // const EmployeeProfile = () => {
// //   const user = JSON.parse(sessionStorage.getItem("user"));
// //   const emp_id = user?.emp_id || user?.id;
// //   const [employee, setEmployee] = useState(null);
// //   const navigate = useNavigate();

// //   useEffect(() => {
// //     if (!emp_id) return;
// //     fetch(`${API_BASE}/get_one.php?emp_id=${emp_id}`)
// //       .then((res) => res.json())
// //       .then((data) => setEmployee(data))
// //       .catch((err) => console.error("Error fetching profile:", err));
// //   }, [emp_id]);

// //   if (!employee)
// //     return (
// //       <div className="text-center py-20 text-xl font-medium">
// //         Loading profile...
// //       </div>
// //     );

// //   return (
// //     <div className="max-w-4xl mx-auto mt-10 mb-10 bg-white shadow-lg rounded-2xl overflow-hidden">
// //       {/* Top Banner with Gradient */}
// //       <div className="bg-gradient-to-r from-blue-500 to-purple-600 h-40 relative flex justify-center items-center">
// //         <div className="absolute -bottom-16">
// //           <img
// //             src={
// //               employee.photo
// //                 ? `http://localhost/EMS-backend/uploads/${employee.photo}`
// //                 : "https://i.pravatar.cc/150"
// //             }
// //             alt="Employee"
// //             className="w-32 h-32 rounded-full border-4 border-white shadow-lg object-cover"
// //           />
// //         </div>
// //       </div>

// //       {/* Profile Info */}
// //       <div className="pt-20 pb-8 text-center">
// //         <h2 className="text-2xl font-bold text-gray-800">
// //           {employee.first_name} {employee.last_name}
// //         </h2>
// //         <p className="text-gray-500 font-medium">{employee.emp_id}</p>

//         // <button
//         //   onClick={() =>
//         //     navigate("/mainlayout/editemployee", { state: { employee } })
//         //   }
//         //   className="mt-4 bg-green-500 text-white px-5 py-2 rounded-full shadow hover:bg-green-600 transition"
//         // >
//         //   Update Profile
//         // </button>
// //       </div>

// //       {/* Details Grid */}
// //       <div className="px-6 pb-10 grid grid-cols-1 sm:grid-cols-2 gap-5">
// //         <Info label="Email" value={employee.email} icon={<FaEnvelope />} />
// //         <Info label="Mobile No" value={employee.mobile} icon={<FaPhone />} />
// //         <Info
// //           label="Designation"
// //           value={employee.designation}
// //           icon={<FaBuilding />}
// //         />
// //         <Info
// //           label="Date of Birth"
// //           value={employee.dob || "N/A"}
// //           icon={<FaBirthdayCake />}
// //         />
// //         <Info
// //           label="Date of Joining"
// //           value={employee.doj}
// //           icon={<FaCalendarCheck />}
// //         />
// //         <Info label="Country" value={employee.country} icon={<FaGlobe />} />
// //         <Info label="State" value={employee.state} icon={<FaMapMarkerAlt />} />
// //         <Info label="City" value={employee.city} icon={<FaCity />} />
// //         <Info label="Address" value={employee.address} icon={<FaHome />} />
// //       </div>
// //     </div>
// //   );
// // }; 

// // const Info = ({ label, value, icon }) => (
// //   <div className="flex items-center gap-3 bg-gray-50 p-4 rounded-lg shadow-sm">
// //     <div className="text-blue-500 text-lg">{icon}</div>
// //     <div>
// //       <p className="text-sm text-gray-500">{label}</p>
// //       <p className="text-base font-semibold text-gray-800">{value}</p>
// //     </div>
// //   </div>
// // );

// // export default EmployeeProfile;

// import React, { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import {
//   FaEnvelope,
//   FaPhone,
//   FaBuilding,
//   FaMapMarkerAlt,
//   FaCalendarCheck,
//   FaBirthdayCake,
//   FaGlobe,
//   FaCity,
//   FaHome,
//   FaLock,
// } from "react-icons/fa";
// import ForgetPassword from "../../ForgetPassword";

// const API_BASE = "http://localhost/EMS-backend/api/employee";

// const EmployeeProfile = () => {
//   const user = JSON.parse(sessionStorage.getItem("user"));
//   const emp_id = user?.emp_id || user?.id;
//   const [employee, setEmployee] = useState(null);
//   const navigate = useNavigate();
//   const [showForget, setShowForget] = useState(false); // ✅ control popup

//   useEffect(() => {
//     if (!emp_id) return;
//     fetch(`${API_BASE}/get_one.php?emp_id=${emp_id}`)
//       .then((res) => res.json())
//       .then((data) => setEmployee(data))
//       .catch((err) => console.error("Error fetching profile:", err));
//   }, [emp_id]);

//   if (!employee)
//     return (
//       <div className="text-center py-20 text-xl font-medium">
//         Loading profile...
//       </div>
//     );

//   return (
//     <div className="max-w-4xl mx-auto mt-10 mb-10 bg-white shadow-lg rounded-2xl overflow-hidden">
//       {/* Top Banner with Gradient */}
//       <div className="bg-[#101c3d] h-40 relative flex justify-center items-center">

//         {/* Change Password link (top right corner) */}
//         <button
//           onClick={() => setShowForget(true)}
//           className="absolute top-4 right-4 flex items-center gap-2 text-white font-medium bg-black/20 px-4 py-2 rounded-full hover:bg-black/30 transition"
//         >
//           <FaLock className="text-sm" /> Change Password
//         </button>

//         {/* Profile Image */}
//         <div className="absolute -bottom-16">
//           <img
//             src={
//               employee.photo
//                 ? `http://localhost/EMS-backend/uploads/${employee.photo}`
//                 : "https://i.pravatar.cc/150"
//             }
//             alt="Employee"
//             className="w-32 h-32 rounded-full border-4 border-white shadow-lg object-cover"
//           />
//         </div>
//       </div>

//       {/* Profile Info */}
//       <div className="pt-20 pb-8 text-center">
//         <h2 className="text-2xl font-bold text-gray-800">
//           {employee.first_name} {employee.last_name}
//         </h2>
//         <p className="text-gray-500 font-medium">{employee.emp_id}</p>

//         <button

//           className="mt-4 bg-green-500 text-white px-5 py-2 rounded-full shadow hover:bg-green-600 transition"
//         >
//           Update Profile
//         </button>
//       </div>

//       {/* Details Grid */}
//       <div className="px-6 pb-10 grid grid-cols-1 sm:grid-cols-2 gap-5">
//         <Info label="Email" value={employee.email} icon={<FaEnvelope />} />
//         <Info label="Mobile No" value={employee.mobile} icon={<FaPhone />} />
//         <Info
//           label="Designation"
//           value={employee.designation}
//           icon={<FaBuilding />}
//         />
//         <Info
//           label="Date of Birth"
//           value={employee.dob || "N/A"}
//           icon={<FaBirthdayCake />}
//         />
//         <Info
//           label="Date of Joining"
//           value={employee.doj}
//           icon={<FaCalendarCheck />}
//         />
//         <Info label="Country" value={employee.country} icon={<FaGlobe />} />
//         <Info label="State" value={employee.state} icon={<FaMapMarkerAlt />} />
//         <Info label="City" value={employee.city} icon={<FaCity />} />
//         <Info label="Address" value={employee.address} icon={<FaHome />} />
//       </div>


//       {/* ✅ Popup Modal for Forget Password */}
//       {showForget && (
//         <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
//           <div className="relative bg-white rounded-2xl shadow-lg w-full max-w-lg p-6">
//             <button
//               onClick={() => setShowForget(false)}
//               className="absolute top-3 right-3 text-gray-600 hover:text-red-500"
//             >
//               ✕
//             </button>
//             <ForgetPassword />
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// const Info = ({ label, value, icon }) => (
//   <div className="flex items-center gap-3 bg-gray-50 p-4 rounded-lg shadow-sm">
//     <div className="text-blue-500 text-lg">{icon}</div>
//     <div>
//       <p className="text-sm text-gray-500">{label}</p>
//       <p className="text-base font-semibold text-gray-800">{value}</p>
//     </div>
//   </div>
// );

// export default EmployeeProfile;


import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  FaEnvelope,
  FaPhone,
  FaBuilding,
  FaMapMarkerAlt,
  FaCalendarCheck,
  FaBirthdayCake,
  FaGlobe,
  FaCity,
  FaHome,
  FaLock,
  FaEdit
} from "react-icons/fa";
import ForgetPassword from "../../ForgetPassword";
import API, { UPLOADS_BASE_URL } from "../../../utils/api";

const API_BASE = API;

const EmployeeProfile = () => {
  const user = JSON.parse(sessionStorage.getItem("user"));
  const emp_id = user?.emp_id || user?.id;
  const [employee, setEmployee] = useState(null);
  const navigate = useNavigate();
  const [showForget, setShowForget] = useState(false); // ✅ control popup

 useEffect(() => {
  if (!emp_id) return;

  const fetchEmployeeProfile = async () => {
    try {
      const { data } = await API.get(`api/employee/get_one.php?emp_id=${emp_id}`);
      setEmployee(data);
    } catch (err) {
      console.error("Error fetching profile:", err);
    }
  };

  fetchEmployeeProfile();
}, [emp_id]);

  if (!employee)
    return (
      <div className="text-center py-20 text-xl font-medium">
        Loading profile...
      </div>
    );

  return (
    <div className="bg-gray-50 min-h-screen p-6">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-3xl overflow-hidden border border-gray-200">

        {/* Top Banner with Gradient */}
        <div className="bg-gradient-to-r from-[#101c3d] to-[#1a2a54] h-48 relative flex justify-center">

          {/* Change Password link (top right corner) */}
          <button
            onClick={() => setShowForget(true)}
            className="absolute top-6 right-6 flex items-center gap-2 text-white font-medium bg-white/20 px-4 py-2 rounded-full hover:bg-white/30 transition-all duration-300 transform hover:scale-105"
          >
            <FaLock className="text-sm" /> Change Password
          </button>

          {/* Profile Image */}
          <div className="absolute -bottom-16">
            <img
              src={
                employee.photo
                  ? `${UPLOADS_BASE_URL}/${employee.photo}`
                  : "https://i.pravatar.cc/150"
              }
              alt="Employee"
              className="w-36 h-36 rounded-full border-4 border-white shadow-xl object-cover"
            />
          </div>
        </div>

        {/* Profile Info */}
        <div className="pt-24 pb-8 text-center px-6">
          <h2 className="text-3xl font-bold text-gray-800">
            {employee.first_name} {employee.last_name}
          </h2>
          <p className="text-gray-500 font-medium mt-1">{employee.emp_id}</p>

          <button
            onClick={() => navigate("/mainlayout/editemployee", { state: { employee } })}
            className="mt-6 flex items-center gap-2 mx-auto bg-blue-600 text-white px-6 py-2 rounded-full shadow-md hover:bg-blue-700 transition-all duration-300 transform hover:scale-105"
          >
            <FaEdit className="text-sm" /> Update Profile
          </button>
        </div>

        {/* Details Grid */}
        <div className="px-6 pb-12 grid grid-cols-1 md:grid-cols-2 gap-6">
          <InfoCard label="Email" value={employee.email} icon={<FaEnvelope />} />
          <InfoCard label="Mobile No" value={employee.mobile} icon={<FaPhone />} />
          <InfoCard
            label="Designation"
            value={employee.designation}
            icon={<FaBuilding />}
          />
          <InfoCard
            label="Date of Birth"
            value={employee.dob || "N/A"}
            icon={<FaBirthdayCake />}
          />
          <InfoCard
            label="Date of Joining"
            value={employee.doj}
            icon={<FaCalendarCheck />}
          />
          <InfoCard label="Country" value={employee.country} icon={<FaGlobe />} />
          <InfoCard label="State" value={employee.state} icon={<FaMapMarkerAlt />} />
          <InfoCard label="City" value={employee.city} icon={<FaCity />} />
          <InfoCard label="Address" value={employee.address} icon={<FaHome />} />
        </div>

        {/* ✅ Popup Modal for Forget Password */}
        {showForget && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 p-4">
            <div className="relative bg-white rounded-2xl shadow-lg w-full max-w-lg p-6">
              <button
                onClick={() => setShowForget(false)}
                className="absolute top-3 right-3 text-gray-600 hover:text-red-500 text-xl transition-colors"
              >
                ✕
              </button>
              <ForgetPassword />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

const InfoCard = ({ label, value, icon }) => (
  <div className="flex items-start gap-4 p-5 bg-blue-50 rounded-xl shadow-sm border border-gray-100">
    <div className="p-3 bg-blue-100 text-blue-800 rounded-full flex-shrink-0">
      {icon}
    </div>
    <div>
      <p className="text-xs font-medium text-gray-500">{label}</p>
      <p className="text-base font-semibold text-gray-800 mt-1">{value || 'N/A'}</p>
    </div>
  </div>
);

export default EmployeeProfile;