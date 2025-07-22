// import React from 'react';

// const AddEmployeeForm = () => {
//   return (
//     <div className="max-w-6xl mx-auto p-6 bg-white shadow-2xl rounded-2xl mt-10 mb-10">
//       <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Add Employee</h2>
//       <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
//         {/* Emp ID */}
//         <div>
//           <label className="block mb-1 font-medium text-gray-700">Emp ID</label>
//           <input type="text" placeholder="Enter your EmpId" className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
//         </div>

//         {/* First & Last Name */}
//         <div>
//           <label className="block mb-1 font-medium text-gray-700">First Name</label>
//           <input type="text" placeholder="Enter your First Name" className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
//         </div>
//         <div>
//           <label className="block mb-1 font-medium text-gray-700">Last Name</label>
//           <input type="text" placeholder="Enter your Last Name" className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
//         </div>

//         {/* Department */}
//         <div>
//           <label className="block mb-1 font-medium text-gray-700">Department</label>
//           <select className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
//             <option>--select--</option>
//             <option>HR</option>
//             <option>Development</option>
//             <option>Marketing</option>
//           </select>
//         </div>

//         {/* Email */}
//         <div>
//           <label className="block mb-1 font-medium text-gray-700">Email ID</label>
//           <input type="email" placeholder="Enter your Email ID" className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
//         </div>

//         {/* Mobile No */}
//         <div>
//           <label className="block mb-1 font-medium text-gray-700">Mobile No</label>
//           <input type="text" placeholder="Enter your Mobile No" className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
//         </div>

//         {/* Country */}
//         <div>
//           <label className="block mb-1 font-medium text-gray-700">Country</label>
//           <input type="text" placeholder="Enter your Country" className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
//         </div>

//         {/* State */}
//         <div>
//           <label className="block mb-1 font-medium text-gray-700">State</label>
//           <input type="text" placeholder="Enter your State" className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
//         </div>

//         {/* City */}
//         <div>
//           <label className="block mb-1 font-medium text-gray-700">City</label>
//           <input type="text" placeholder="Enter your City" className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
//         </div>

//         {/* DOB */}
//         <div>
//           <label className="block mb-1 font-medium text-gray-700">DOB</label>
//           <input type="date" className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
//         </div>

//         {/* DOJ */}
//         <div>
//           <label className="block mb-1 font-medium text-gray-700">Date of Joining</label>
//           <input type="date" className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
//         </div>

//         {/* Photo */}
//         <div>
//           <label className="block mb-1 font-medium text-gray-700">Photo</label>
//           <input type="file" className="w-full p-2 border rounded-lg" />
//         </div>

//         {/* Address */}
//         <div>
//           <label className="block mb-1 font-medium text-gray-700">Address</label>
//           <textarea placeholder="Enter your Address" rows="3" className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"></textarea>
//         </div>

//         {/* Password */}
//         <div>
//           <label className="block mb-1 font-medium text-gray-700">Password</label>
//           <input type="password" placeholder="Enter your Password" className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
//         </div>

//         {/* Confirm Password */}
//         <div>
//           <label className="block mb-1 font-medium text-gray-700">Confirm Password</label>
//           <input type="password" placeholder="Confirm Password" className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
//         </div>
//       </form>

//       {/* Submit Button */}
//       <div className="mt-8 text-center">
//         <button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-lg transition duration-300">
//           Submit
//         </button>
//       </div>
//     </div>
//   );
// };

// export default AddEmployeeForm;


import React from 'react';
import { useForm } from 'react-hook-form';

const AddEmployeeForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const formData = new FormData();
      formData.append('emp_id', data.emp_id);
      formData.append('first_name', data.first_name);
      formData.append('last_name', data.last_name);
      formData.append('department', data.department);
      formData.append('email', data.email);
      formData.append('mobile', data.mobile);
      formData.append('country', data.country);
      formData.append('state', data.state);
      formData.append('city', data.city);
      formData.append('dob', data.dob);
      formData.append('doj', data.doj);
      formData.append('address', data.address);
      formData.append('password', data.password);
      formData.append('photo', data.photo[0]); // file input

      const response = await fetch('http://localhost/EMS-backend/api/employee/add.php', {
  method: 'POST',
  body: formData,
});


      const result = await response.json();
      alert(result.message);

      if (result.status) reset();
    } catch (error) {
      console.error('Error:', error);
      alert('Something went wrong. Please try again.');
    }
  };

  return (
    <div className="max-w-6xl mx-auto p-6 bg-white shadow-2xl rounded-2xl mt-10 mb-10">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Add Employee</h2>
      <form
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
        onSubmit={handleSubmit(onSubmit)}
        encType="multipart/form-data"
      >
        {/* Emp ID */}
        <div>
          <label className="block mb-1 font-medium text-gray-700">Emp ID</label>
          <input {...register('emp_id', { required: true })} type="text" className="w-full p-3 border rounded-lg" />
        </div>

        {/* First & Last Name */}
        <div>
          <label className="block mb-1 font-medium text-gray-700">First Name</label>
          <input {...register('first_name', { required: true })} type="text" className="w-full p-3 border rounded-lg" />
        </div>
        <div>
          <label className="block mb-1 font-medium text-gray-700">Last Name</label>
          <input {...register('last_name', { required: true })} type="text" className="w-full p-3 border rounded-lg" />
        </div>

        {/* Department */}
        <div>
          <label className="block mb-1 font-medium text-gray-700">Department</label>
          <select {...register('department', { required: true })} className="w-full p-3 border rounded-lg">
            <option value="">--select--</option>
            <option value="HR">HR</option>
            <option value="Development">Development</option>
            <option value="Marketing">Marketing</option>
          </select>
        </div>

        {/* Email */}
        <div>
          <label className="block mb-1 font-medium text-gray-700">Email ID</label>
          <input {...register('email', { required: true })} type="email" className="w-full p-3 border rounded-lg" />
        </div>

        {/* Mobile */}
        <div>
          <label className="block mb-1 font-medium text-gray-700">Mobile No</label>
          <input {...register('mobile', { required: true })} type="text" className="w-full p-3 border rounded-lg" />
        </div>

        {/* Country */}
        <div>
          <label className="block mb-1 font-medium text-gray-700">Country</label>
          <input {...register('country', { required: true })} type="text" className="w-full p-3 border rounded-lg" />
        </div>

        {/* State */}
        <div>
          <label className="block mb-1 font-medium text-gray-700">State</label>
          <input {...register('state', { required: true })} type="text" className="w-full p-3 border rounded-lg" />
        </div>

        {/* City */}
        <div>
          <label className="block mb-1 font-medium text-gray-700">City</label>
          <input {...register('city', { required: true })} type="text" className="w-full p-3 border rounded-lg" />
        </div>

        {/* DOB */}
        <div>
          <label className="block mb-1 font-medium text-gray-700">DOB</label>
          <input {...register('dob', { required: true })} type="date" className="w-full p-3 border rounded-lg" />
        </div>

        {/* DOJ */}
        <div>
          <label className="block mb-1 font-medium text-gray-700">Date of Joining</label>
          <input {...register('doj', { required: true })} type="date" className="w-full p-3 border rounded-lg" />
        </div>

        {/* Photo */}
        <div>
          <label className="block mb-1 font-medium text-gray-700">Photo</label>
          <input {...register('photo', { required: true })} type="file" className="w-full p-2 border rounded-lg" />
        </div>

        {/* Address */}
        <div>
          <label className="block mb-1 font-medium text-gray-700">Address</label>
          <textarea {...register('address', { required: true })} className="w-full p-3 border rounded-lg" rows="3" />
        </div>

        {/* Password */}
        <div>
          <label className="block mb-1 font-medium text-gray-700">Password</label>
          <input {...register('password', { required: true })} type="password" className="w-full p-3 border rounded-lg" />
        </div>

        {/* Confirm Password */}
        <div>
          <label className="block mb-1 font-medium text-gray-700">Confirm Password</label>
          <input {...register('confirmPassword', { required: true })} type="password" className="w-full p-3 border rounded-lg" />
        </div>

        {/* Submit Button */}
        <div className="md:col-span-2 text-center mt-6">
          <button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddEmployeeForm;
