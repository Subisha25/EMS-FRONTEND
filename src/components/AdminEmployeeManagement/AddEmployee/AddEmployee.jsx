// import axios from 'axios';
// import React, { useEffect, useState } from 'react';
// import { useForm } from 'react-hook-form';
// import { useNavigate } from 'react-router-dom';
// import { toast, ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import API from '../../../utils/api';
// import { CountryDropdown, RegionDropdown } from 'react-country-region-selector';
// import { City, Country, State } from 'country-state-city';


// const AddEmployeeForm = () => {
//   const {
//     register,
//     handleSubmit,
//     reset,
//     watch,
//     setValue,
//     formState: { errors },
//   } = useForm();

//   const navigate = useNavigate();
//    const [empId, setEmpId] = useState("");
//   const [country, setCountry] = useState('');
//   const [state, setState] = useState('');
//   const [city, setCity] = useState('');
//   const [statesList, setStatesList] = useState([]);
//   const [citiesList, setCitiesList] = useState([]);


  
//   useEffect(() => {
//     if (country) {
//       const states = State.getStatesOfCountry(country);
//       setStatesList(states);
//       setState(''); // reset state
//       setCitiesList([]); // reset cities
//       setCity('');
//     }
//   }, [country]);

//   useEffect(() => {
//     if (state) {
//       const cities = City.getCitiesOfState(country, state);
//       setCitiesList(cities);
//       setCity(''); // reset city
//     }
//   }, [state]);


//   const onSubmit = async (data) => {
//     if (data.password !== data.confirmPassword) {
//       toast.error('Passwords do not match');
//       return;
//     }

//     try {
//       const formData = new FormData();
//       formData.append('emp_id', empId);
//       formData.append('first_name', data.first_name);
//       formData.append('last_name', data.last_name);
//       formData.append('designation', data.designation);
//       formData.append('email', data.email);
//       formData.append('mobile', data.mobile);
//       formData.append('country', data.country);
//       formData.append('state', data.state);
//       formData.append('city', data.city);
//       formData.append('dob', data.dob);
//       formData.append('doj', data.doj);
//       formData.append('address', data.address);
//       formData.append('password', data.password);
//       formData.append('photo', data.photo[0]);

//      const response = await API.post("api/employee/add.php", formData, {
//   headers: {
//     "Content-Type": "multipart/form-data",
//   },
// });

//       const result = await response.data;

//       if (result.status) {
//         toast.success(result.message || 'Employee added successfully!');
//         setTimeout(() => {
//   navigate("/mainlayout/manage-employee");
// }, 1500);
//         reset();
//         } else {
//         toast.error(result.message || 'Failed to add employee.');
//       }
//     } catch (error) {
//       console.error('Error:', error);
//       toast.error('Something went wrong. Please try again.');
//     }
//   };

//    useEffect(() => {
//     API.get("api/employee/get_next_empid.php")
//       .then(res => {
//         setEmpId(res.data.next_emp_id);
//       })
//       .catch(err => console.error(err));
//   }, []);

//   return (
//     <div className="max-w-6xl mx-auto p-6 bg-white shadow-2xl rounded-2xl mt-10 mb-10">
//       <ToastContainer />
//       <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Add Employee</h2>
//       <form
//         className="grid grid-cols-1 md:grid-cols-2 gap-6"
//         onSubmit={handleSubmit(onSubmit)}
//         encType="multipart/form-data"
//       >
       
// {/* Emp ID */}
// {/* Emp ID */}
// <div>
//   <label className="block mb-1 font-medium text-gray-700">Emp ID</label>
//   <input
//     {...register('emp_id', {
//       validate: (value) => value && value.trim() !== '' || 'Employee ID is required'
//     })}
//     type="text"
//     value={empId}
//     onChange={(e) => {
//       setEmpId(e.target.value);
//       setValue('emp_id', e.target.value); // sync with react-hook-form
//     }}
//     className="w-full p-3 border rounded-lg"
//   />
//   {errors.emp_id && (
//     <p className="text-red-500 text-sm">{errors.emp_id.message}</p>
//   )}
// </div>




//         {/* First Name */}
//         <div>
//           <label className="block mb-1 font-medium text-gray-700">First Name</label>
//           <input {...register('first_name', { required: 'First name is required' })} type="text" className="w-full p-3 border rounded-lg" />
//           {errors.first_name && <p className="text-red-500 text-sm">{errors.first_name.message}</p>}
//         </div>

//         {/* Last Name */}
//         <div>
//           <label className="block mb-1 font-medium text-gray-700">Last Name</label>
//           <input {...register('last_name', { required: 'Last name is required' })} type="text" className="w-full p-3 border rounded-lg" />
//           {errors.last_name && <p className="text-red-500 text-sm">{errors.last_name.message}</p>}
//         </div>

//         {/* Designation */}
//         <div>
//           <label className="block mb-1 font-medium text-gray-700">Designation</label>
//           <select {...register('designation', { required: 'Designation is required' })} className="w-full p-3 border rounded-lg">
//             <option value="">--select--</option>
//             <option value="SoftwareDeveloper">Software Developer</option>
//           </select>
//           {errors.designation && <p className="text-red-500 text-sm">{errors.designation.message}</p>}
//         </div>

//         {/* Email */}
//         <div>
//           <label className="block mb-1 font-medium text-gray-700">Email ID</label>
//           <input {...register('email', { required: 'Email is required' })} type="email" className="w-full p-3 border rounded-lg" />
//           {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
//         </div>

//         {/* Mobile */}
//         <div>
//           <label className="block mb-1 font-medium text-gray-700">Mobile No</label>
//           <input
//             {...register('mobile', {
//               required: 'Mobile number is required',
//               pattern: {
//                 value: /^[0-9]{10}$/,
//                 message: 'Mobile number must be exactly 10 digits',
//               },
//             })}
//             type="text"
//             className="w-full p-3 border rounded-lg"
//           />
//           {errors.mobile && <p className="text-red-500 text-sm">{errors.mobile.message}</p>}
//         </div>

//       {/* Country */}
// <div>
//   <label className="block mb-1 font-medium text-gray-700">Country</label>
//   <select
//     {...register('country', { required: 'Country is required' })}
//     value={country}
//     onChange={(e) => {
//       setCountry(e.target.value);
//       setValue('country', e.target.value);
//     }}
//     className="w-full p-3 border rounded-lg"
//   >
//     <option value="">-- Select Country --</option>
//     {Country.getAllCountries().map((c) => (
//       <option key={c.isoCode} value={c.isoCode}>{c.name}</option>
//     ))}
//   </select>
//   {errors.country && <p className="text-red-500 text-sm">{errors.country.message}</p>}
// </div>

// {/* State */}
// <div>
//   <label className="block mb-1 font-medium text-gray-700">State</label>
//   <select
//     {...register('state', { required: 'State is required' })}
//     value={state}
//     onChange={(e) => {
//       setState(e.target.value);
//       setValue('state', e.target.value);
//     }}
//     className="w-full p-3 border rounded-lg"
//     disabled={!country}
//   >
//     <option value="">-- Select State --</option>
//     {statesList.map((s) => (
//       <option key={s.isoCode} value={s.isoCode}>{s.name}</option>
//     ))}
//   </select>
//   {errors.state && <p className="text-red-500 text-sm">{errors.state.message}</p>}
// </div>

// {/* City */}
// <div>
//   <label className="block mb-1 font-medium text-gray-700">City/District</label>
//   <select
//     {...register('city', { required: 'City is required' })}
//     value={city}
//     onChange={(e) => {
//       setCity(e.target.value);
//       setValue('city', e.target.value);
//     }}
//     className="w-full p-3 border rounded-lg"
//     disabled={!state}
//   >
//     <option value="">-- Select City/District --</option>
//     {citiesList.map((c) => (
//       <option key={c.name} value={c.name}>{c.name}</option>
//     ))}
//   </select>
//   {errors.city && <p className="text-red-500 text-sm">{errors.city.message}</p>}
// </div>


//        {/* DOB */}
// <div>
//   <label className="block mb-1 font-medium text-gray-700">DOB</label>
//   <input
//     {...register('dob', { required: 'Date of Birth is required' })}
//     type="date"
//     className="w-full p-3 border rounded-lg"
//   />
//   {errors.dob && <p className="text-red-500 text-sm">{errors.dob.message}</p>}
// </div>

// {/* DOJ */}
// <div>
//   <label className="block mb-1 font-medium text-gray-700">Date of Joining</label>
//   <input
//     {...register('doj', { required: 'Date of Joining is required' })}
//     type="date"
//     className="w-full p-3 border rounded-lg"
//   />
//   {errors.doj && <p className="text-red-500 text-sm">{errors.doj.message}</p>}
// </div>

// {/* Photo */}
// <div>
//   <label className="block mb-1 font-medium text-gray-700">Photo</label>
//   <input
//     {...register('photo', { required: 'Photo is required' })}
//     type="file"
//     className="w-full p-2 border rounded-lg"
//   />
//   {errors.photo && <p className="text-red-500 text-sm">{errors.photo.message}</p>}
// </div>

// {/* Address */}
// <div>
//   <label className="block mb-1 font-medium text-gray-700">Address</label>
//   <textarea
//     {...register('address', { required: 'Address is required' })}
//     className="w-full p-3 border rounded-lg"
//     rows="3"
//   />
//   {errors.address && <p className="text-red-500 text-sm">{errors.address.message}</p>}
// </div>


//         {/* Password */}
//         <div>
//           <label className="block mb-1 font-medium text-gray-700">Password</label>
//           <input
//             {...register('password', {
//               required: 'Password is required',
//               minLength: {
//                 value: 6,
//                 message: 'Password must be at least 6 characters',
//               },
//             })}
//             type="password"
//             className="w-full p-3 border rounded-lg"
//           />
//           {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}
//         </div>

//         {/* Confirm Password */}
//         <div>
//           <label className="block mb-1 font-medium text-gray-700">Confirm Password</label>
//           <input
//             {...register('confirmPassword', { required: 'Confirm Password is required' })}
//             type="password"
//             className="w-full p-3 border rounded-lg"
//           />
//           {errors.confirmPassword && <p className="text-red-500 text-sm">{errors.confirmPassword.message}</p>}
//         </div>

//         {/* Submit Button */}
//         <div className="md:col-span-2 text-center mt-6">
//           <button type="submit" className="bg-[#101c3d] hover:bg-blue-700 text-white px-20 py-3 rounded-lg">
//             Submit
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default AddEmployeeForm;

import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import API from '../../../utils/api';
import { CountryDropdown, RegionDropdown } from 'react-country-region-selector';
import { City, Country, State } from 'country-state-city';

const AddEmployeeForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    watch,
    setValue,
    clearErrors,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();
  const [empId, setEmpId] = useState("");
  const [country, setCountry] = useState('');
  const [state, setState] = useState('');
  const [city, setCity] = useState('');
  const [statesList, setStatesList] = useState([]);
  const [citiesList, setCitiesList] = useState([]);

  useEffect(() => {
    if (country) {
      const states = State.getStatesOfCountry(country);
      setStatesList(states);
      setState('');
      setCitiesList([]);
      setCity('');
    }
  }, [country]);

  useEffect(() => {
    if (state) {
      const cities = City.getCitiesOfState(country, state);
      setCitiesList(cities);
      setCity('');
    }
  }, [state]);

  const onSubmit = async (data) => {
    if (data.password !== data.confirmPassword) {
      toast.error('Passwords do not match');
      return;
    }

    try {
      const formData = new FormData();
      formData.append('emp_id', empId);
      formData.append('first_name', data.first_name);
      formData.append('last_name', data.last_name);
      formData.append('designation', data.designation);
      formData.append('email', data.email);
      formData.append('mobile', data.mobile);
      formData.append('country', country); // Use state value
      formData.append('state', state); // Use state value
      formData.append('city', city); // Use state value
      formData.append('dob', data.dob);
      formData.append('doj', data.doj);
      formData.append('address', data.address);
      formData.append('password', data.password);
      formData.append('photo', data.photo[0]);

      const response = await API.post("api/employee/add.php", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      const result = await response.data;

      if (result.status) {
        toast.success(result.message || 'Employee added successfully!');
        setTimeout(() => {
          navigate("/mainlayout/manage-employee");
        }, 1500);
        reset();
      } else {
        toast.error(result.message || 'Failed to add employee.');
      }
    } catch (error) {
      console.error('Error:', error);
      toast.error('Something went wrong. Please try again.');
    }
  };

  useEffect(() => {
    API.get("api/employee/get_next_empid.php")
      .then(res => {
        const empIdValue = res.data.next_emp_id;
        setEmpId(empIdValue);
        setValue('emp_id', empIdValue); // Set form value immediately
      })
      .catch(err => console.error(err));
  }, [setValue]);

  return (
    <div className="max-w-6xl mx-auto p-6 bg-white shadow-2xl rounded-2xl mt-10 mb-10">
      <ToastContainer />
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Add Employee</h2>
      <form
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
        onSubmit={handleSubmit(onSubmit)}
        encType="multipart/form-data"
      >
       
        {/* Emp ID - FIXED */}
        <div>
          <label className="block mb-1 font-medium text-gray-700">Emp ID</label>
          <input
            {...register('emp_id', {
              required: 'Employee ID is required',
              validate: (value) => {
                if (!value || value.trim() === '') {
                  return 'Employee ID is required';
                }
                return true;
              }
            })}
            type="text"
            value={empId}
            onChange={(e) => {
              const value = e.target.value;
              setEmpId(value);
              setValue('emp_id', value);
              if (value && value.trim() !== '') {
                clearErrors('emp_id'); // Clear error when field has value
              }
            }}
            className="w-full p-3 border rounded-lg"
          />
          {errors.emp_id && (
            <p className="text-red-500 text-sm">{errors.emp_id.message}</p>
          )}
        </div>

        {/* First Name */}
        <div>
          <label className="block mb-1 font-medium text-gray-700">First Name</label>
          <input 
            {...register('first_name', { required: 'First name is required' })} 
            type="text" 
            className="w-full p-3 border rounded-lg"
            onChange={(e) => {
              if (e.target.value.trim() !== '') {
                clearErrors('first_name');
              }
            }}
          />
          {errors.first_name && <p className="text-red-500 text-sm">{errors.first_name.message}</p>}
        </div>

        {/* Last Name */}
        <div>
          <label className="block mb-1 font-medium text-gray-700">Last Name</label>
          <input 
            {...register('last_name', { required: 'Last name is required' })} 
            type="text" 
            className="w-full p-3 border rounded-lg"
            onChange={(e) => {
              if (e.target.value.trim() !== '') {
                clearErrors('last_name');
              }
            }}
          />
          {errors.last_name && <p className="text-red-500 text-sm">{errors.last_name.message}</p>}
        </div>

        {/* Designation */}
        <div>
          <label className="block mb-1 font-medium text-gray-700">Designation</label>
          <select 
            {...register('designation', { required: 'Designation is required' })} 
            className="w-full p-3 border rounded-lg"
            onChange={(e) => {
              if (e.target.value !== '') {
                clearErrors('designation');
              }
            }}
          >
            <option value="">--select--</option>
            <option value="SoftwareDeveloper">Software Developer</option>
          </select>
          {errors.designation && <p className="text-red-500 text-sm">{errors.designation.message}</p>}
        </div>

        {/* Email */}
        <div>
          <label className="block mb-1 font-medium text-gray-700">Email ID</label>
          <input 
            {...register('email', { required: 'Email is required' })} 
            type="email" 
            className="w-full p-3 border rounded-lg"
            onChange={(e) => {
              if (e.target.value.trim() !== '') {
                clearErrors('email');
              }
            }}
          />
          {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
        </div>

        {/* Mobile */}
        <div>
          <label className="block mb-1 font-medium text-gray-700">Mobile No</label>
          <input
            {...register('mobile', {
              required: 'Mobile number is required',
              pattern: {
                value: /^[0-9]{10}$/,
                message: 'Mobile number must be exactly 10 digits',
              },
            })}
            type="text"
            className="w-full p-3 border rounded-lg"
            onChange={(e) => {
              if (e.target.value.trim() !== '') {
                clearErrors('mobile');
              }
            }}
          />
          {errors.mobile && <p className="text-red-500 text-sm">{errors.mobile.message}</p>}
        </div>

        {/* Country - FIXED */}
        <div>
          <label className="block mb-1 font-medium text-gray-700">Country</label>
          <select
            {...register('country', { required: 'Country is required' })}
            value={country}
            onChange={(e) => {
              const value = e.target.value;
              setCountry(value);
              setValue('country', value);
              if (value !== '') {
                clearErrors('country');
              }
            }}
            className="w-full p-3 border rounded-lg"
          >
            <option value="">-- Select Country --</option>
            {Country.getAllCountries().map((c) => (
              <option key={c.isoCode} value={c.isoCode}>{c.name}</option>
            ))}
          </select>
          {errors.country && <p className="text-red-500 text-sm">{errors.country.message}</p>}
        </div>

        {/* State - FIXED */}
        <div>
          <label className="block mb-1 font-medium text-gray-700">State</label>
          <select
            {...register('state', { required: 'State is required' })}
            value={state}
            onChange={(e) => {
              const value = e.target.value;
              setState(value);
              setValue('state', value);
              if (value !== '') {
                clearErrors('state');
              }
            }}
            className="w-full p-3 border rounded-lg"
            disabled={!country}
          >
            <option value="">-- Select State --</option>
            {statesList.map((s) => (
              <option key={s.isoCode} value={s.isoCode}>{s.name}</option>
            ))}
          </select>
          {errors.state && <p className="text-red-500 text-sm">{errors.state.message}</p>}
        </div>

        {/* City - FIXED */}
        <div>
          <label className="block mb-1 font-medium text-gray-700">City/District</label>
          <select
            {...register('city', { required: 'City is required' })}
            value={city}
            onChange={(e) => {
              const value = e.target.value;
              setCity(value);
              setValue('city', value);
              if (value !== '') {
                clearErrors('city');
              }
            }}
            className="w-full p-3 border rounded-lg"
            disabled={!state}
          >
            <option value="">-- Select City/District --</option>
            {citiesList.map((c) => (
              <option key={c.name} value={c.name}>{c.name}</option>
            ))}
          </select>
          {errors.city && <p className="text-red-500 text-sm">{errors.city.message}</p>}
        </div>

        {/* DOB - FIXED */}
        <div>
          <label className="block mb-1 font-medium text-gray-700">DOB</label>
          <input
            {...register('dob', { required: 'Date of Birth is required' })}
            type="date"
            className="w-full p-3 border rounded-lg"
            onChange={(e) => {
              if (e.target.value !== '') {
                clearErrors('dob');
              }
            }}
          />
          {errors.dob && <p className="text-red-500 text-sm">{errors.dob.message}</p>}
        </div>

        {/* DOJ - FIXED */}
        <div>
          <label className="block mb-1 font-medium text-gray-700">Date of Joining</label>
          <input
            {...register('doj', { required: 'Date of Joining is required' })}
            type="date"
            className="w-full p-3 border rounded-lg"
            onChange={(e) => {
              if (e.target.value !== '') {
                clearErrors('doj');
              }
            }}
          />
          {errors.doj && <p className="text-red-500 text-sm">{errors.doj.message}</p>}
        </div>

        {/* Photo - FIXED */}
        <div>
          <label className="block mb-1 font-medium text-gray-700">Photo</label>
          <input
            {...register('photo', { required: 'Photo is required' })}
            type="file"
            className="w-full p-2 border rounded-lg"
            onChange={(e) => {
              if (e.target.files && e.target.files.length > 0) {
                clearErrors('photo');
              }
            }}
          />
          {errors.photo && <p className="text-red-500 text-sm">{errors.photo.message}</p>}
        </div>

        {/* Address - FIXED */}
        <div>
          <label className="block mb-1 font-medium text-gray-700">Address</label>
          <textarea
            {...register('address', { required: 'Address is required' })}
            className="w-full p-3 border rounded-lg"
            rows="3"
            onChange={(e) => {
              if (e.target.value.trim() !== '') {
                clearErrors('address');
              }
            }}
          />
          {errors.address && <p className="text-red-500 text-sm">{errors.address.message}</p>}
        </div>

        {/* Password */}
        <div>
          <label className="block mb-1 font-medium text-gray-700">Password</label>
          <input
            {...register('password', {
              required: 'Password is required',
              minLength: {
                value: 6,
                message: 'Password must be at least 6 characters',
              },
            })}
            type="password"
            className="w-full p-3 border rounded-lg"
            onChange={(e) => {
              if (e.target.value.length >= 6) {
                clearErrors('password');
              }
            }}
          />
          {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}
        </div>

        {/* Confirm Password */}
        <div>
          <label className="block mb-1 font-medium text-gray-700">Confirm Password</label>
          <input
            {...register('confirmPassword', { required: 'Confirm Password is required' })}
            type="password"
            className="w-full p-3 border rounded-lg"
            onChange={(e) => {
              if (e.target.value !== '') {
                clearErrors('confirmPassword');
              }
            }}
          />
          {errors.confirmPassword && <p className="text-red-500 text-sm">{errors.confirmPassword.message}</p>}
        </div>

        {/* Submit Button */}
        <div className="md:col-span-2 text-center mt-6">
          <button type="submit" className="bg-[#101c3d] hover:bg-blue-700 text-white px-20 py-3 rounded-lg">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddEmployeeForm;