// import React, { useEffect, useState } from 'react';
// import { FaCheck, FaTimes } from 'react-icons/fa';
// import axios from 'axios';

// const Attendance = () => {
//   // const [month, setMonth] = useState(6); // July = 6 (0-indexed)
//   // const [year, setYear] = useState(2025);

//   const today = new Date();
// const [month, setMonth] = useState(today.getMonth());
// const [year, setYear] = useState(today.getFullYear());

//   const [dates, setDates] = useState([]);
//   const [attendanceData, setAttendanceData] = useState({});

//   useEffect(() => {
//     generateDates(year, month);
//     fetchAttendanceData();
//   }, [month, year]);

//   const generateDates = (y, m) => {
//     const temp = [];
//     const date = new Date(y, m, 1);
//     while (date.getMonth() === m) {
//       temp.push(new Date(date));
//       date.setDate(date.getDate() + 1);
//     }
//     setDates(temp);
//   };

//  const fetchAttendanceData = async () => {
//   try {
//     const response = await axios.post('http://localhost/ems-backend/api/attendance/get_attendance.php', {
//       month: month + 1, // JS month is 0-indexed
//       year: year
//     });

//     if (response.data.status) {
//       const structured = {};

//       response.data.data.forEach((entry) => {
//         const fullName = `${entry.first_name} ${entry.last_name}`;
//         const dateKey = entry.date;

//         if (!structured[fullName]) structured[fullName] = {};
//         if (dateKey) structured[fullName][dateKey] = entry.status;
//       });

//       setAttendanceData(structured);
//     } else {
//       setAttendanceData({});
//     }
//   } catch (error) {
//     console.error('Error fetching data:', error);
//     setAttendanceData({});
//   }
// };


//   const changeMonth = (increment) => {
//     let newMonth = month + increment;
//     let newYear = year;

//     if (newMonth > 11) {
//       newMonth = 0;
//       newYear++;
//     } else if (newMonth < 0) {
//       newMonth = 11;
//       newYear--;
//     }

//     setMonth(newMonth);
//     setYear(newYear);
//   };

//   return (
//     <div className=" w-full overflow-x-auto scrollbar-thin-navy">
//       {/* <div className="flex justify-between items-center mb-4">
//         <button onClick={() => changeMonth(-1)} className="bg-blue-200 px-3 py-1 rounded">Previous</button>
//         <h2 className="text-xl font-bold">
//           {new Date(year, month).toLocaleString('en-GB', { month: 'long', year: 'numeric' })}
//         </h2>
//         <button onClick={() => changeMonth(1)} className="bg-blue-200 px-3 py-1 rounded">Next</button>
//       </div> */}

//       <div className="flex justify-end items-center mb-4 gap-2 pr-4">
//   <select
//     value={month}
//     onChange={(e) => setMonth(Number(e.target.value))}
//     className="border border-gray-300 px-2 py-1 rounded"
//   >
//     {Array.from({ length: 12 }, (_, i) => (
//       <option key={i} value={i}>
//         {new Date(0, i).toLocaleString('en-GB', { month: 'long' })}
//       </option>
//     ))}
//   </select>

//   <select
//     value={year}
//     onChange={(e) => setYear(Number(e.target.value))}
//     className="border border-gray-300 px-2 py-1 rounded"
//   >
//     {Array.from({ length: 10 }, (_, i) => {
//       const y = new Date().getFullYear() - 5 + i;
//       return (
//         <option key={y} value={y}>
//           {y}
//         </option>
//       );
//     })}
//   </select>
// </div>


//       <div className="w-[100px] ">
//         <table className="border-collapse">
//           {/* <thead>
//             <tr className="bg-blue-100 text-sm">
//               <th className="px-4 py-2 border text-left font-semibold whitespace-nowrap">Employee Name</th>
//               {dates.map((date) => (
//                 <th key={date.toISOString()} className="px-3 py-2 border text-center whitespace-nowrap">
//                   {date.toLocaleDateString('en-GB', { day: '2-digit', month: 'short' })}
//                 </th>
//               ))}
//             </tr>
//           </thead>
//           <tbody>
//             {Object.keys(attendanceData).length > 0 ? (
//               Object.entries(attendanceData).map(([name, records], idx) => (
//                 <tr key={idx} className="even:bg-gray-50">
//                   <td className="px-4 py-2 border font-medium whitespace-nowrap">{name}</td>
//                   {dates.map((date) => {
// const key = date.toLocaleDateString('en-CA');
//                     const status = records[key];
//                     return (
//                       <td key={key} className="px-3 py-2 border text-center">
//                       {status && status.toLowerCase() === 'present' ? (
//   <FaCheck className="text-green-600 inline" />
// ) : status && status.toLowerCase() === 'absent' ? (
//   <FaTimes className="text-red-600 inline" />
// ) : (
//   '—'
// )}

//                       </td>
//                     );
//                   })}
//                 </tr>
//               ))
//             ) : (
//               <tr>
//                 <td colSpan={dates.length + 1} className="text-center py-4 text-gray-500">
//                   No attendance data available for this month.
//                 </td>
//               </tr>
//             )}
//           </tbody> */}

//           <thead>
//   <tr className="bg-blue-100 text-sm">
//     <th className="px-4 py-2 border text-left font-semibold whitespace-nowrap bg-blue-100 sticky left-0 z-10">
//       Employee Name
//     </th>
//     {dates.map((date) => (
//       <th key={date.toISOString()} className="px-3 py-2 border text-center whitespace-nowrap">
//         {date.toLocaleDateString('en-GB', { day: '2-digit', month: 'short' })}
//       </th>
//     ))}
//   </tr>
// </thead>
// <tbody>
//   {Object.keys(attendanceData).length > 0 ? (
//     Object.entries(attendanceData).map(([name, records], idx) => (
//       <tr key={idx} className="even:bg-gray-50">
//         <td className="px-4 py-2 border font-medium whitespace-nowrap bg-white sticky left-0 z-0">
//           {name}
//         </td>
//         {dates.map((date) => {
//           const key = date.toLocaleDateString('en-CA');
//           const status = records[key];
//           return (
//             <td key={key} className="px-3 py-2 border text-center">
//               {status && status.toLowerCase() === 'present' ? (
//                 <FaCheck className="text-green-600 inline" />
//               ) : status && status.toLowerCase() === 'absent' ? (
//                 <FaTimes className="text-red-600 inline" />
//               ) : (
//                 '—'
//               )}
//             </td>
//           );
//         })}
//       </tr>
//     ))
//   ) : (
//     <tr>
//       <td colSpan={dates.length + 1} className="text-center py-4 text-gray-500">
//         No attendance data available for this month.
//       </td>
//     </tr>
//   )}
// </tbody>

//         </table>
//       </div>
//     </div>
//   );
// };

// export default Attendance;


// import React, { useEffect, useState } from 'react';
// import { FaCheck, FaTimes } from 'react-icons/fa';
// import axios from 'axios';
// import DatePicker from 'react-datepicker';
// import 'react-datepicker/dist/react-datepicker.css';
// import { FaCalendarAlt } from 'react-icons/fa'; // Add this at the top with your imports

// const Attendance = () => {
//   const today = new Date();
//   const [selectedDate, setSelectedDate] = useState(today);
//   const [month, setMonth] = useState(today.getMonth());
//   const [year, setYear] = useState(today.getFullYear());

//   const [dates, setDates] = useState([]);
//   const [attendanceData, setAttendanceData] = useState({});

//   useEffect(() => {
//     generateDates(year, month);
//     fetchAttendanceData();
//   }, [month, year]);

//   const generateDates = (y, m) => {
//     const temp = [];
//     const date = new Date(y, m, 1);
//     while (date.getMonth() === m) {
//       temp.push(new Date(date));
//       date.setDate(date.getDate() + 1);
//     }
//     setDates(temp);
//   };

//   const fetchAttendanceData = async () => {
//     try {
//       const response = await axios.post(
//         'http://localhost/ems-backend/api/attendance/get_attendance.php',
//         {
//           month: month + 1,
//           year: year,
//         }
//       );

//       // if (response.data.status) {
//       //   const structured = {};

//       //   response.data.data.forEach((entry) => {
//       //     const fullName = `${entry.first_name} ${entry.last_name}`;
//       //     const dateKey = entry.date;

//       //     if (!structured[fullName]) structured[fullName] = {};
//       //     if (dateKey) structured[fullName][dateKey] = entry.status;
//       //   });

//       //   setAttendanceData(structured);
//       // } else {
//       //   setAttendanceData({});
//       // }
//       // Inside fetchAttendanceData()
// if (response.data.status) {
//   const structured = {};

//   response.data.data.forEach((entry) => {
//     const fullName = `${entry.first_name} ${entry.last_name}`;
//     const dateKey = entry.date;

//     if (!structured[fullName]) structured[fullName] = {};
//     if (dateKey) {
//       structured[fullName][dateKey] = {
//         status: entry.status,
//         time: entry.time // ✅ store time also
//       };
//     }
//   });

//   setAttendanceData(structured);
// } else {
//   setAttendanceData({});
// }

//     } catch (error) {
//       console.error('Error fetching data:', error);
//       setAttendanceData({});
//     }
//   };

//   const handleDateChange = (date) => {
//     setSelectedDate(date);
//     setMonth(date.getMonth());
//     setYear(date.getFullYear());
//   };

//   return (
//     <div>
//        {/* <div className="flex justify-end items-center mb-4 gap-2 pr-4">
//         <DatePicker
//           selected={selectedDate}
//           onChange={handleDateChange}
//           dateFormat="MMMM yyyy"
//           showMonthYearPicker
//           showFullMonthYearPicker
//           dropdownMode="select"
//           className="border px-3 py-2 rounded-md"
//         />
//       </div> */}

//       <div className="flex justify-end items-center mb-4 gap-2 pr-4">
//   <DatePicker
//     selected={selectedDate}
//     onChange={handleDateChange}
//     dateFormat="MMMM yyyy"
//     showMonthYearPicker
//     showFullMonthYearPicker
//     dropdownMode="select"
//     customInput={
//       <div className="relative w-[180px]">
//         <input
//           type="text"
//           value={selectedDate.toLocaleDateString('en-US', {
//             month: 'long',
//             year: 'numeric',
//           })}
//           readOnly
//           className="w-full border  px-3 py-2 rounded-md pr-10 cursor-pointer bg-white"
//         />
//         <FaCalendarAlt
//           className="absolute right-3 top-1/2 transform -translate-y-1/2 text-blue-800 pointer-events-none"
//         />
//       </div>
//     }
//   />
// </div>

//     <div className="w-full overflow-x-auto scrollbar-thin-navy">
     

//       <div className="w-[100px]">
//         <table className="border-collapse">
//           <thead>
//             <tr className="bg-blue-800 text-color-white text-sm">
//               <th className="px-4 py-2 border text-left text-white font-semibold whitespace-nowrap bg-blue-800 sticky left-0 z-10">
//                 Employee Name
//               </th>
//               {dates.map((date) => ( 
//                 <th
//                   key={date.toISOString()}
//                   className="px-3 py-2 border text-white text-center whitespace-nowrap"
//                 >
//                   {date.toLocaleDateString('en-GB', {
//                     day: '2-digit',
//                     month: 'short',
//                   })}
//                 </th>
//               ))}
//             </tr>
//           </thead>
//           <tbody>
//             {Object.keys(attendanceData).length > 0 ? (
//               Object.entries(attendanceData).map(([name, records], idx) => (
//                 <tr key={idx} className="even:bg-gray-50">
//                   <td className="px-4 py-2 border font-medium whitespace-nowrap bg-white sticky left-0 z-0">
//                     {name}
//                   </td>
//                   {dates.map((date) => {
//   const key = date.toLocaleDateString('en-CA');
//   const record = records[key];
//   const formattedTime = record?.time
//     ? new Date(`1970-01-01T${record.time}`).toLocaleTimeString('en-US', {
//         hour: '2-digit',
//         minute: '2-digit',
//         hour12: true
//       })
//     : null;

//   return (
//     <td key={key} className="px-3 py-2 border text-center">
//       {record && record.status?.toLowerCase() === 'present' ? (
//         <div className="flex flex-col items-center">
//           <FaCheck className="text-green-600" />
//           {formattedTime && (
//             <span className="text-xs text-gray-500 whitespace-nowrap">{formattedTime}</span>
//           )}
//         </div>
//       ) : record && record.status?.toLowerCase() === 'absent' ? (
//         <div className="flex flex-col items-center">
//           <FaTimes className="text-red-600" />
//           {formattedTime && (
//             <span className="text-xs text-gray-500 whitespace-nowrap">{formattedTime}</span>
//           )}
//         </div>
//       ) : (
//         '—'
//       )}
//     </td>
//   );
// })}

//                   {/* {dates.map((date) => {
//                     const key = date.toLocaleDateString('en-CA');
//                     const status = records[key];
//                     return (
//                       <td key={key} className="px-3 py-2 border text-center">
//                         {status && status.toLowerCase() === 'present' ? (
//                           <FaCheck className="text-green-600 inline" />
//                         ) : status && status.toLowerCase() === 'absent' ? (
//                           <FaTimes className="text-red-600 inline" />
//                         ) : (
//                           '—'
//                         )}
//                       </td>
//                     );
//                   })} */}
//                 </tr>
//               ))
//             ) : (
//               <tr>
//                 <td
//                   colSpan={dates.length + 1}
//                   className="text-center py-4 text-gray-500"
//                 >
//                   No attendance data available for this month.
//                 </td>
//               </tr>
//             )}
//           </tbody>
//         </table>
//       </div>
//     </div>
//     </div>
//   );
// };

// export default Attendance;

import React, { useEffect, useState } from 'react';
import { FaCheck, FaTimes } from 'react-icons/fa';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { FaCalendarAlt } from 'react-icons/fa'; // Add this at the top with your imports
import API from '../../../utils/api';

const Attendance = () => {
  const today = new Date();
  const [selectedDate, setSelectedDate] = useState(today);
  const [month, setMonth] = useState(today.getMonth());
  const [year, setYear] = useState(today.getFullYear());

  const [dates, setDates] = useState([]);
  const [attendanceData, setAttendanceData] = useState({});

  // ✅ Pagination states
  const [currentPage, setCurrentPage] = useState(1);
  const recordsPerPage = 10;

  useEffect(() => {
    generateDates(year, month);
    fetchAttendanceData();
  }, [month, year]);

  const generateDates = (y, m) => {
    const temp = [];
    const date = new Date(y, m, 1);
    while (date.getMonth() === m) {
      temp.push(new Date(date));
      date.setDate(date.getDate() + 1);
    }
    setDates(temp);
  };

  const fetchAttendanceData = async () => {
    try {
      const response = await API.post(
        'api/attendance/get_attendance.php',
        {
          month: month + 1,
          year: year,
        }
      );

      if (response.data.status) {
        const structured = {};
        response.data.data.forEach((entry) => {
          const fullName = `${entry.first_name} ${entry.last_name}`;
          const dateKey = entry.date;

          if (!structured[fullName]) structured[fullName] = {};
          if (dateKey) {
            structured[fullName][dateKey] = {
              status: entry.status,
              time: entry.time, // ✅ store time also
            };
          }
        });
        setAttendanceData(structured);
      } else {
        setAttendanceData({});
      }
    } catch (error) {
      console.error('Error fetching data:', error);
      setAttendanceData({});
    }
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);
    setMonth(date.getMonth());
    setYear(date.getFullYear());
    setCurrentPage(1); // reset to first page on month change
  };

  // ✅ Pagination logic
  const employeeEntries = Object.entries(attendanceData);
  const indexOfLastRecord = currentPage * recordsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
  const currentRecords = employeeEntries.slice(indexOfFirstRecord, indexOfLastRecord);
  const totalPages = Math.ceil(employeeEntries.length / recordsPerPage);

  return (
    <div>
      <div className="flex justify-end items-center mb-4 gap-2 pr-4">
        <DatePicker
          selected={selectedDate}
          onChange={handleDateChange}
          dateFormat="MMMM yyyy"
          showMonthYearPicker
          showFullMonthYearPicker
          dropdownMode="select"
          customInput={
            <div className="relative w-[180px]">
              <input
                type="text"
                value={selectedDate.toLocaleDateString('en-US', {
                  month: 'long',
                  year: 'numeric',
                })}
                readOnly
                className="w-full border  px-3 py-2 rounded-md pr-10 cursor-pointer bg-white"
              />
              <FaCalendarAlt
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-blue-800 pointer-events-none"
              />
            </div>
          }
        />
      </div>

      <div className="w-full overflow-x-auto scrollbar-thin-navy">
        <div className="w-[100px]">
          <table className="border-collapse">
            <thead>
              <tr className="bg-blue-800 text-sm">
                <th className="px-4 py-2 border text-left text-white font-semibold whitespace-nowrap bg-blue-800 sticky left-0 z-10">
                  Employee Name
                </th>
                {dates.map((date) => (
                  <th
                    key={date.toISOString()}
                    className="px-3 py-2 border text-white text-center whitespace-nowrap"
                  >
                    {date.toLocaleDateString('en-GB', {
                      day: '2-digit',
                      month: 'short',
                    })}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {employeeEntries.length > 0 ? (
                currentRecords.map(([name, records], idx) => (
                  <tr key={idx} className="even:bg-gray-50">
                    <td className="px-4 py-2 border font-medium whitespace-nowrap bg-white sticky left-0 z-0">
                      {name}
                    </td>
                    {dates.map((date) => {
                      const key = date.toLocaleDateString('en-CA');
                      const record = records[key];
                      const formattedTime = record?.time
                        ? new Date(`1970-01-01T${record.time}`).toLocaleTimeString('en-US', {
                            hour: '2-digit',
                            minute: '2-digit',
                            hour12: true,
                          })
                        : null;

                      return (
                        <td key={key} className="px-3 py-2 border text-center">
                          {record && record.status?.toLowerCase() === 'present' ? (
                            <div className="flex flex-col items-center">
                              <FaCheck className="text-green-600" />
                              {formattedTime && (
                                <span className="text-xs text-gray-500 whitespace-nowrap">
                                  {formattedTime}
                                </span>
                              )}
                            </div>
                          ) : record && record.status?.toLowerCase() === 'absent' ? (
                            <div className="flex flex-col items-center">
                              <FaTimes className="text-red-600" />
                           
                            </div>
                          ) : (
                            '—'
                          )}
                        </td>
                      );
                    })}
                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    colSpan={dates.length + 1}
                    className="text-center py-4 text-gray-500"
                  >
                    No attendance data available for this month.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* ✅ Pagination controls */}
      {employeeEntries.length > 0 && (
        <div className="flex justify-center items-center mt-4 gap-2">
          <button
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
            className="px-3 py-1 border rounded bg-blue-600 text-white disabled:opacity-50"
          >
            Prev
          </button>
          <span className="px-3 py-1 text-sm">
            Page {currentPage} of {totalPages}
          </span>
          <button
            onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
            disabled={currentPage === totalPages}
            className="px-3 py-1 border rounded bg-blue-600 text-white disabled:opacity-50"
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
};

export default Attendance;
