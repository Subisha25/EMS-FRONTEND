// // import React, { useState } from 'react';
// // import axios from 'axios';
// // import { useNavigate, useLocation, Navigate } from 'react-router-dom';
// // import { FiCamera } from 'react-icons/fi';
// // import { showSuccess, showError } from '../../utils/toast'; // ✅ adjust path

// // const EditProfilePage = () => {
// //   const navigate = useNavigate();
// //   const location = useLocation();
// //   const admin = location.state?.admin;

// //   const [formData, setFormData] = useState({
// //     id: admin?.id || '',
// //     name: admin?.name || '',
// //     email: admin?.email || '',
// //     phone: admin?.phone || '',
// //     location: admin?.location || '',
// //     office_opening_date: admin?.office_opening_date || '',
// //     role: admin?.role || '',
// //     password: '',
// //     existing_image: admin?.image || '',
// //     image: null,
// //   });

// //   const handleChange = (e) => {
// //     const { name, value, files } = e.target;
// //     if (name === 'image') {
// //       setFormData({ ...formData, image: files[0] });
// //     } else {
// //       setFormData({ ...formData, [name]: value });
// //     }
// //   };

// //   // const handleSubmit = async (e) => {
// //   //   e.preventDefault();

// //   //   try {
// //   //     const data = new FormData();
// //   //     for (let key in formData) {
// //   //       if (formData[key] !== null) {
// //   //         data.append(key, formData[key]);
// //   //       }
// //   //     }

// //   //     const res = await axios.post('http://localhost/EMS-backend/api/admin/update.php', data);
// //   //     if (res.data.status) {
// //   //       showSuccess('Profile updated successfully!');
// //   //       setTimeout(() => {
// //   //         navigate('/mainlayout/admin-profile');
// //   //       }, 1500); // Delay for toast
// //   //     } else {
// //   //       showError('Update failed: ' + res.data.message);
// //   //     }
// //   //   } catch (error) {
// //   //     console.error('Error updating:', error);
// //   //     showError('Something went wrong. Please try again.');
// //   //   }
// //   // };

// //   const handleSubmit = async (e) => {
// //   e.preventDefault();

// //   try {
// //     const data = new FormData();

// //     // Append all fields except image
// //     for (let key in formData) {
// //       if (key !== "image" && formData[key] !== null) {
// //         data.append(key, formData[key]);
// //       }
// //     }

// //     // Append image only if it's selected
// //     if (formData.image) {
// //       data.append("image", formData.image);
// //     } else {
// //       // Ensure image field is still included with existing value
// //       data.append("existing_image", formData.existing_image);
// //     }

// //     const res = await axios.post('http://localhost/EMS-backend/api/admin/update.php', data);
// //     // if (res.data.status) {
// //     //   showSuccess('Profile updated successfully!');
// //     //   setTimeout(() => {
// //     //     navigate('/mainlayout/admin-profile');
// //     //   }, 1500);
// //     // } 
// //     if (res.data.status) {
// //   showSuccess('Profile updated successfully!');
// //   // update image name if returned from backend
// //   if (!formData.image && res.data.image) {
// //     setFormData(prev => ({ ...prev, existing_image: res.data.image }));
// //   }
// //   setTimeout(() => {
// //     navigate('/mainlayout/admin-profile');
// //   }, 1500);
// // }else {
// //       showError('Update failed: ' + res.data.message);
// //     }
// //   } catch (error) {
// //     console.error('Error updating:', error);
// //     showError('Something went wrong. Please try again.');
// //   }
// // };


// //   if (!admin) {
// //     return <Navigate to="/" replace />;
// //   }

// //   return (
// //     <div className="min-h-screen flex justify-center items-center bg-gray-100 p-6">
// //       <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-lg w-full max-w-xl space-y-4">
// //         <h2 className="text-xl font-bold mb-4">Edit Profile</h2>

// //         <div className="flex flex-col items-center">
// //           <div className="relative group w-32 h-32 mb-4">


// //             <img
// //               src={
// //                 formData.image
// //                   ? URL.createObjectURL(formData.image)
// //                   : formData.existing_image
// //               }
// //               alt="Admin"
// //               className="w-full h-full object-cover rounded-full border"
// //             />
// //             <label htmlFor="imageUpload">
// //               <div className="absolute inset-0 bg-black bg-opacity-40 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 cursor-pointer transition">
// //                 <FiCamera className="text-white text-2xl" />
// //               </div>
// //             </label>
// //             <input
// //               type="file"
// //               id="imageUpload"
// //               name="image"
// //               accept="image/*"
// //               onChange={handleChange}
// //               className="hidden"
// //             />
// //           </div>
// //         </div>

// //         <input type="hidden" name="id" value={formData.id} />
// //         <input type="hidden" name="existing_image" value={formData.existing_image} />

// //         <input
// //           type="text"
// //           name="name"
// //           value={formData.name}
// //           onChange={handleChange}
// //           className="w-full border p-2"
// //           placeholder="Name"
// //           required
// //         />
// //         <input
// //           type="email"
// //           name="email"
// //           value={formData.email}
// //           onChange={handleChange}
// //           className="w-full border p-2"
// //           placeholder="Email"
// //           required
// //         />
// //         <input
// //           type="text"
// //           name="phone"
// //           value={formData.phone}
// //           onChange={handleChange}
// //           className="w-full border p-2"
// //           placeholder="Phone"
// //           required
// //         />
// //         <input
// //           type="text"
// //           name="location"
// //           value={formData.location}
// //           onChange={handleChange}
// //           className="w-full border p-2"
// //           placeholder="Location"
// //         />
// //         <input
// //           type="date"
// //           name="office_opening_date"
// //           value={formData.office_opening_date}
// //           onChange={handleChange}
// //           className="w-full border p-2"
// //         />
// //         <input
// //           type="text"
// //           name="role"
// //           value={formData.role}
// //           onChange={handleChange}
// //           className="w-full border p-2"
// //           placeholder="Role"
// //         />
// //         {/* <input
// //           type="password"
// //           name="password"
// //           value={formData.password}
// //           onChange={handleChange}
// //           className="w-full border p-2"
// //           placeholder="New Password (optional)"
// //         /> */}

// //         <button
// //           type="submit"
// //           className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
// //         >
// //           Update Profile
// //         </button>
// //       </form>
// //     </div>
// //   );
// // };

// // export default EditProfilePage;

// import React, { useState } from 'react';
// import axios from 'axios';
// import { useNavigate, useLocation, Navigate } from 'react-router-dom';
// import { FiCamera } from 'react-icons/fi';
// import { showSuccess, showError } from '../../utils/toast';
// import API from '../../../utils/api';

// const EditProfilePage = () => {
//   const navigate = useNavigate();
//   const location = useLocation();
//   const admin = location.state?.admin;

//   const [formData, setFormData] = useState({
//     id: admin?.id || '',
//     name: admin?.name || '',
//     email: admin?.email || '',
//     phone: admin?.phone || '',
//     location: admin?.location || '',
//     office_opening_date: admin?.office_opening_date || '',
//     role: admin?.role || '',
//     password: '',
//     existing_image: admin?.image || '',
//     image: null,
//   });

//   const handleChange = (e) => {
//     const { name, value, files } = e.target;
//     if (name === 'image') {
//       setFormData({ ...formData, image: files[0] });
//     } else {
//       setFormData({ ...formData, [name]: value });
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//       console.log("Form data being sent:", formData);

//     try {
//       const data = new FormData();
//      for (let key in formData) {
//   if (key !== "image") {
//     data.append(key, formData[key] ?? '');
//   }
// }

//       if (formData.image) {
//         data.append("image", formData.image);
//       } else {
//         data.append("existing_image", formData.existing_image);
//       }

//       const res = await API.post('api/admin/update.php', data);
//       if (res.data.status) {
//         showSuccess('Profile updated successfully!');
//         if (!formData.image && res.data.image) {
//           setFormData(prev => ({ ...prev, existing_image: res.data.image }));
//         }
//         setTimeout(() => {
//           navigate('/mainlayout/admin-profile');
//         }, 1500);
//       } else {
//         showError('Update failed: ' + res.data.message);
//       }
//     } catch (error) {
//       console.error('Error updating:', error);
//       showError('Something went wrong. Please try again.');
//     }
//   };

//   if (!admin) return <Navigate to="/" replace />;

//   return (
//     <div className="min-h-screen flex justify-center items-center  p-6">
//       <form
//         onSubmit={handleSubmit}
//         className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-xl bg-gradient-to-br from-blue-50 to-gray-100 space-y-6 transition-transform hover:-translate-y-1"
//       >
//         <h2 className="text-2xl font-bold text-gray-800 text-center">Edit Profile</h2>

//         {/* Profile Picture */}
//         <div className="flex flex-col items-center">
//           <div className="relative group w-32 h-32 mb-4">
//             <img
//               src={formData.image ? URL.createObjectURL(formData.image) : formData.existing_image}
//               alt="Admin"
//               className="w-full h-full object-cover rounded-full border-2 border-blue-400 shadow-md"
//             />
//             <label htmlFor="imageUpload">
//               <div className="absolute inset-0 bg-black bg-opacity-40 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 cursor-pointer transition">
//                 <FiCamera className="text-white text-2xl" />
//               </div>
//             </label>
//             <input
//               type="file"
//               id="imageUpload"
//               name="image"
//               accept="image/*"
//               onChange={handleChange}
//               className="hidden"
//             />
//           </div>
//         </div>

//         <input type="hidden" name="id" value={formData.id} />
//         <input type="hidden" name="existing_image" value={formData.existing_image} />

//         {/* Input Fields */}
//         <div className="grid grid-cols-1 gap-4">
//           <input
//             type="text"
//             name="name"
//             value={formData.name}
//             onChange={handleChange}
//             className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
//             placeholder="Name"
//             required
//           />
//           <input
//             type="email"
//             name="email"
//             value={formData.email}
//             onChange={handleChange}
//             className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
//             placeholder="Email"
//             required
//           />
//           <input
//             type="text"
//             name="phone"
//             value={formData.phone}
//             onChange={handleChange}
//             className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
//             placeholder="Phone"
//             required
//           />
//           <input
//             type="text"
//             name="location"
//             value={formData.location}
//             onChange={handleChange}
//             className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
//             placeholder="Location"
//           />
//           <input
//             type="date"
//             name="office_opening_date"
//             value={formData.office_opening_date}
//             onChange={handleChange}
//             className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
//           />
//           <input
//             type="text"
//             name="role"
//             value={formData.role}
//             onChange={handleChange}
//             className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
//             placeholder="Role"
//           />
//         </div>

//         {/* Submit Button */}
//         <button
//           type="submit"
//           className="w-full bg-[#101c3d] text-white font-semibold py-3 rounded-full shadow-lg hover:bg-blue-700 transition-all"
//         >
//           Update Profile
//         </button>
//       </form>
//     </div>
//   );
// };

// export default EditProfilePage;

import React, { useState } from 'react';
import { useNavigate, useLocation, Navigate } from 'react-router-dom';
import { FiCamera } from 'react-icons/fi';
import { showSuccess, showError } from '../../utils/toast';
import API from '../../../utils/api';

const EditProfilePage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const admin = location.state?.admin;

  const [formData, setFormData] = useState({
    id: admin?.id || '',
    name: admin?.name || '',
    email: admin?.email || '',
    phone: admin?.phone || '',
    location: admin?.location || '',
    office_opening_date: admin?.office_opening_date || '',
    role: admin?.role || '',
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
        if (key !== 'image') {
          data.append(key, formData[key] ?? '');
        }
      }
      if (formData.image) {
        data.append('image', formData.image);
      } else {
        data.append('existing_image', formData.existing_image);
      }

const res = await API.post('api/admin/update.php', data, {
  headers: {
    'Content-Type': 'multipart/form-data',
  },
});
      if (res.data.status) {
        showSuccess('Profile updated successfully!');
        if (!formData.image && res.data.image) {
          setFormData(prev => ({ ...prev, existing_image: res.data.image }));
        }
        setTimeout(() => {
          navigate('/mainlayout/admin-profile');
        }, 1500);
      } else {
        showError('Update failed: ' + res.data.message);
      }
    } catch (error) {
      console.error('Error updating:', error);
      showError('Something went wrong. Please try again.');
    }
  };

  if (!admin) return <Navigate to="/" replace />;

  return (
    <div className="min-h-screen flex justify-center items-center p-6">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-xl bg-gradient-to-br from-blue-50 to-gray-100 space-y-6 transition-transform hover:-translate-y-1"
      >
        <h2 className="text-2xl font-bold text-gray-800 text-center">Edit Profile</h2>

        {/* Profile Picture */}
        <div className="flex flex-col items-center">
          <div className="relative group w-32 h-32 mb-4">
            <img
              src={formData.image ? URL.createObjectURL(formData.image) : formData.existing_image}
              alt="Admin"
              className="w-full h-full object-cover rounded-full border-2 border-blue-400 shadow-md"
            />
            <label htmlFor="imageUpload">
              <div className="absolute inset-0 bg-black bg-opacity-40 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 cursor-pointer transition">
                <FiCamera className="text-white text-2xl" />
              </div>
            </label>
            <input
              type="file"
              id="imageUpload"
              name="image"
              accept="image/*"
              onChange={handleChange}
              className="hidden"
            />
          </div>
        </div>

        <input type="hidden" name="id" value={formData.id} />
        <input type="hidden" name="existing_image" value={formData.existing_image} />

        {/* Input Fields */}
        <div className="grid grid-cols-1 gap-4">
          <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Name" required
            className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400" />
          <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email" required
            className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400" />
          <input type="text" name="phone" value={formData.phone} onChange={handleChange} placeholder="Phone" required
            className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400" />
          <input type="text" name="location" value={formData.location} onChange={handleChange} placeholder="Location"
            className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400" />
          <input type="date" name="office_opening_date" value={formData.office_opening_date} onChange={handleChange}
            className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400" />
          <input type="text" name="role" value={formData.role} onChange={handleChange} placeholder="Role"
            className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400" />
        </div>

        {/* Submit Button */}
        <button type="submit" className="w-full bg-[#101c3d] text-white font-semibold py-3 rounded-full shadow-lg hover:bg-blue-700 transition-all">
          Update Profile
        </button>
      </form>
    </div>
  );
};

export default EditProfilePage;
