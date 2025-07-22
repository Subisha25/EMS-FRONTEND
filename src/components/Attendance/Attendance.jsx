// import React, { useState } from 'react';

// const Attendance = () => {
//   // Sample employee attendance data
//   const employees = [
//     { id: 1, name: 'John Doe', date: '2025-07-20', status: 'Present' },
//     { id: 2, name: 'Jane Smith', date: '2025-07-20', status: 'Absent' },
//     { id: 3, name: 'Mark Allen', date: '2025-07-20', status: 'Present' },
//     { id: 4, name: 'Emma Brown', date: '2025-07-20', status: 'Present' },
//   ];

//   const [attendanceData, setAttendanceData] = useState(employees);

//   return (
//     <div className="container mx-auto p-6">
//       <h1 className="text-3xl font-bold mb-4">Employee Attendance</h1>

//       <div className="overflow-x-auto bg-white shadow-md rounded-lg">
//         <table className="min-w-full table-auto">
//           <thead>
//             <tr className="bg-gray-100">
//               <th className="px-4 py-2 text-left">Employee Name</th>
//               <th className="px-4 py-2 text-left">Date</th>
//               <th className="px-4 py-2 text-left">Status</th>
//             </tr>
//           </thead>
//           <tbody>
//             {attendanceData.map((employee) => (
//               <tr key={employee.id} className="border-b">
//                 <td className="px-4 py-2">{employee.name}</td>
//                 <td className="px-4 py-2">{employee.date}</td>
//                 <td className="px-4 py-2">{employee.status}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default Attendance;




import React, { useEffect, useState } from 'react';
import { FaCheck, FaTimes } from 'react-icons/fa';

const Attendance = () => {
  const sampleData = {
    Subisha: {
      '2025-07-01': 'Present',
      '2025-07-02': 'Present',
      '2025-07-03': 'Absent',
      '2025-07-04': 'Present',
      '2025-07-05': 'Present',
      '2025-07-12': 'Present',
      '2025-07-20': 'Absent',
    },
    Kumar: {
      '2025-07-01': 'Present',
      '2025-07-02': 'Absent',
      '2025-07-03': 'Present',
      '2025-07-10': 'Present',
      '2025-07-12': 'Present',
      '2025-07-15': 'Absent',
    },
  };

  const [dates, setDates] = useState([]);

  // Generate full month date range (July 1 to July 31)
  useEffect(() => {
    const startDate = new Date('2025-07-01');
    const endDate = new Date('2025-07-31');
    const tempDates = [];

    while (startDate <= endDate) {
      tempDates.push(new Date(startDate));
      startDate.setDate(startDate.getDate() + 1);
    }

    setDates(tempDates);
  }, []);

  return (
    <div className="p-4 w-full max-w-full overflow-x-auto">
      <h2 className="text-2xl font-bold mb-4">Monthly Attendance Report</h2>

      <div className="inline-block min-w-full overflow-x-auto rounded-lg border shadow">
        <table className="w-full table-auto border-collapse">
          <thead>
            <tr className="bg-blue-100 text-sm">
              <th className="px-4 py-2 border text-left font-semibold">Employee Name</th>
              {dates.map((date) => (
                <th
                  key={date}
                  className="px-3 py-2 border text-center whitespace-nowrap"
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
            {Object.entries(sampleData).map(([name, attendance], idx) => (
              <tr key={idx} className="even:bg-gray-50">
                <td className="px-4 py-2 border font-medium whitespace-nowrap">{name}</td>
                {dates.map((date) => {
                  const dateKey = date.toISOString().split('T')[0];
                  const status = attendance[dateKey];
                  return (
                    <td key={dateKey} className="px-3 py-2 border text-center">
                      {status === 'Present' ? (
                        <FaCheck className="text-green-600 inline" />
                      ) : status === 'Absent' ? (
                        <FaTimes className="text-red-600 inline" />
                      ) : (
                        '—'
                      )}
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Attendance;
