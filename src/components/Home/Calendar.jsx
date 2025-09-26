// // import React, { useState, useMemo } from 'react';
// // import { ChevronLeft, ChevronRight, Calendar as CalendarIcon, MapPin, Clock } from 'lucide-react';

// // const HolidayCalendar = () => {
// //   const [currentDate, setCurrentDate] = useState(new Date());
// //   const [selectedDate, setSelectedDate] = useState(null);

// //   // Government holidays for 2025 (Indian holidays)
// //   const governmentHolidays = {
// //     '2025-01-01': { name: 'New Year\'s Day', type: 'national' },
// //     '2025-01-14': { name: 'Makar Sankranti', type: 'festival' },
// //     '2025-01-26': { name: 'Republic Day', type: 'national' },
// //     '2025-02-26': { name: 'Maha Shivratri', type: 'festival' },
// //     '2025-03-13': { name: 'Holi', type: 'festival' },
// //     '2025-03-14': { name: 'Holi (Second Day)', type: 'festival' },
// //     '2025-04-10': { name: 'Ram Navami', type: 'festival' },
// //     '2025-04-14': { name: 'Ambedkar Jayanti', type: 'national' },
// //     '2025-04-18': { name: 'Good Friday', type: 'festival' },
// //     '2025-05-01': { name: 'Labour Day', type: 'national' },
// //     '2025-05-12': { name: 'Buddha Purnima', type: 'festival' },
// //     '2025-08-15': { name: 'Independence Day', type: 'national' },
// //     '2025-08-16': { name: 'Janmashtami', type: 'festival' },
// //     '2025-09-07': { name: 'Ganesh Chaturthi', type: 'festival' },
// //     '2025-10-02': { name: 'Gandhi Jayanti', type: 'national' },
// //     '2025-10-20': { name: 'Karva Chauth', type: 'festival' },
// //     '2025-11-01': { name: 'Diwali', type: 'festival' },
// //     '2025-11-15': { name: 'Guru Nanak Jayanti', type: 'festival' },
// //     '2025-12-25': { name: 'Christmas Day', type: 'national' }
// //   };

// //   // Function to get first Saturday of each month
// //   const getFirstSaturday = (year, month) => {
// //     const firstDay = new Date(year, month, 1);
// //     const dayOfWeek = firstDay.getDay();
// //     const firstSaturday = 1 + (6 - dayOfWeek + 7) % 7;
// //     return firstSaturday;
// //   };

// //   // Generate first Saturday holidays for current year
// //   const firstSaturdayHolidays = useMemo(() => {
// //     const year = currentDate.getFullYear();
// //     const holidays = {};
    
// //     for (let month = 0; month < 12; month++) {
// //       const firstSat = getFirstSaturday(year, month);
// //       const dateKey = `${year}-${String(month + 1).padStart(2, '0')}-${String(firstSat).padStart(2, '0')}`;
// //       holidays[dateKey] = { name: 'First Saturday Holiday', type: 'company' };
// //     }
    
// //     return holidays;
// //   }, [currentDate]);

// //   // Combine all holidays
// //   const allHolidays = { ...governmentHolidays, ...firstSaturdayHolidays };

// //   const monthNames = [
// //     'January', 'February', 'March', 'April', 'May', 'June',
// //     'July', 'August', 'September', 'October', 'November', 'December'
// //   ];

// //   const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

// //   const getDaysInMonth = (date) => {
// //     const year = date.getFullYear();
// //     const month = date.getMonth();
// //     const firstDay = new Date(year, month, 1);
// //     const lastDay = new Date(year, month + 1, 0);
// //     const daysInMonth = lastDay.getDate();
// //     const startingDayOfWeek = firstDay.getDay();

// //     const days = [];
    
// //     // Add empty cells for days before the first day of the month
// //     for (let i = 0; i < startingDayOfWeek; i++) {
// //       days.push(null);
// //     }
    
// //     // Add all days of the month
// //     for (let day = 1; day <= daysInMonth; day++) {
// //       days.push(day);
// //     }
    
// //     return days;
// //   };

// //   const formatDateKey = (year, month, day) => {
// //     return `${year}-${String(month + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
// //   };

// //   const navigateMonth = (direction) => {
// //     const newDate = new Date(currentDate);
// //     newDate.setMonth(newDate.getMonth() + direction);
// //     setCurrentDate(newDate);
// //     setSelectedDate(null);
// //   };

// //   const isToday = (day) => {
// //     const today = new Date();
// //     return day &&
// //       day === today.getDate() &&
// //       currentDate.getMonth() === today.getMonth() &&
// //       currentDate.getFullYear() === today.getFullYear();
// //   };

// //   const getHolidayInfo = (day) => {
// //     if (!day) return null;
// //     const dateKey = formatDateKey(currentDate.getFullYear(), currentDate.getMonth(), day);
// //     return allHolidays[dateKey] || null;
// //   };

// //   const getHolidayTypeColor = (type) => {
// //     switch (type) {
// //       case 'national': return 'bg-red-500 text-white';
// //       case 'festival': return 'bg-orange-500 text-white';
// //       case 'company': return 'bg-blue-500 text-white';
// //       default: return 'bg-gray-500 text-white';
// //     }
// //   };

// //   const days = getDaysInMonth(currentDate);
// //   const upcomingHolidays = Object.entries(allHolidays)
// //     .filter(([date]) => new Date(date) >= new Date())
// //     .sort(([a], [b]) => new Date(a) - new Date(b))
// //     .slice(0, 5);

// //   return (
// //     <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 p-6">
// //       <div className="max-w-7xl mx-auto">
// //         <div className="text-center mb-8">
// //           <h1 className="text-4xl font-bold text-gray-800 mb-2">Holiday Calendar</h1>
// //           <p className="text-gray-600">Employee Management System - Holiday Tracker</p>
// //         </div>

// //         <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
// //           {/* Main Calendar */}
// //           <div className="lg:col-span-3">
// //             <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
// //               {/* Calendar Header */}
// //               <div className="bg-gradient-to-r from-indigo-600 to-purple-600 px-6 py-4">
// //                 <div className="flex items-center justify-between">
// //                   <button
// //                     onClick={() => navigateMonth(-1)}
// //                     className="p-2 hover:bg-white hover:bg-opacity-20 rounded-lg transition-colors"
// //                   >
// //                     <ChevronLeft className="w-6 h-6 text-white" />
// //                   </button>
                  
// //                   <h2 className="text-2xl font-bold text-white">
// //                     {monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}
// //                   </h2>
                  
// //                   <button
// //                     onClick={() => navigateMonth(1)}
// //                     className="p-2 hover:bg-white hover:bg-opacity-20 rounded-lg transition-colors"
// //                   >
// //                     <ChevronRight className="w-6 h-6 text-white" />
// //                   </button>
// //                 </div>
// //               </div>

// //               {/* Day Names */}
// //               <div className="grid grid-cols-7 bg-gray-50 border-b">
// //                 {dayNames.map(day => (
// //                   <div key={day} className="p-4 text-center font-semibold text-gray-600">
// //                     {day}
// //                   </div>
// //                 ))}
// //               </div>

// //               {/* Calendar Grid */}
// //               <div className="grid grid-cols-7">
// //                 {days.map((day, index) => {
// //                   const holidayInfo = getHolidayInfo(day);
// //                   const isHoliday = holidayInfo !== null;
// //                   const todayClass = isToday(day) ? 'ring-2 ring-indigo-500 ring-offset-2' : '';
                  
// //                   return (
// //                     <div
// //                       key={index}
// //                       className={`min-h-[120px] border-r border-b border-gray-200 p-2 cursor-pointer hover:bg-gray-50 transition-colors ${todayClass}`}
// //                       onClick={() => day && setSelectedDate({day, holidayInfo})}
// //                     >
// //                       {day && (
// //                         <div className="h-full flex flex-col">
// //                           <div className={`text-lg font-semibold mb-2 ${isToday(day) ? 'text-indigo-600' : 'text-gray-800'}`}>
// //                             {day}
// //                           </div>
                          
// //                           {isHoliday && (
// //                             <div className={`text-xs px-2 py-1 rounded-full ${getHolidayTypeColor(holidayInfo.type)} flex-1 flex items-center justify-center text-center leading-tight`}>
// //                               {holidayInfo.name}
// //                             </div>
// //                           )}
// //                         </div>
// //                       )}
// //                     </div>
// //                   );
// //                 })}
// //               </div>
// //             </div>
// //           </div>

// //           {/* Sidebar */}
// //           <div className="space-y-6">
// //             {/* Legend */}
// //             <div className="bg-white rounded-2xl shadow-xl p-6">
// //               <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
// //                 <CalendarIcon className="w-5 h-5 mr-2" />
// //                 Holiday Types
// //               </h3>
// //               <div className="space-y-3">
// //                 <div className="flex items-center space-x-3">
// //                   <div className="w-4 h-4 bg-red-500 rounded"></div>
// //                   <span className="text-gray-700">National Holidays</span>
// //                 </div>
// //                 <div className="flex items-center space-x-3">
// //                   <div className="w-4 h-4 bg-orange-500 rounded"></div>
// //                   <span className="text-gray-700">Festival Holidays</span>
// //                 </div>
// //                 <div className="flex items-center space-x-3">
// //                   <div className="w-4 h-4 bg-blue-500 rounded"></div>
// //                   <span className="text-gray-700">Company Holidays</span>
// //                 </div>
// //               </div>
// //             </div>

// //             {/* Upcoming Holidays */}
// //             <div className="bg-white rounded-2xl shadow-xl p-6">
// //               <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
// //                 <Clock className="w-5 h-5 mr-2" />
// //                 Upcoming Holidays
// //               </h3>
// //               <div className="space-y-3">
// //                 {upcomingHolidays.map(([date, holiday]) => (
// //                   <div key={date} className="flex items-start space-x-3 p-3 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors">
// //                     <div className={`w-3 h-3 rounded-full ${getHolidayTypeColor(holiday.type).split(' ')[0]} mt-1`}></div>
// //                     <div className="flex-1">
// //                       <div className="font-medium text-gray-800">{holiday.name}</div>
// //                       <div className="text-sm text-gray-600">{new Date(date).toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</div>
// //                     </div>
// //                   </div>
// //                 ))}
// //               </div>
// //             </div>

// //             {/* Selected Date Info */}
// //             {selectedDate && (
// //               <div className="bg-white rounded-2xl shadow-xl p-6">
// //                 <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
// //                   <MapPin className="w-5 h-5 mr-2" />
// //                   Selected Date
// //                 </h3>
// //                 <div className="space-y-3">
// //                   <div className="text-lg font-semibold text-gray-800">
// //                     {monthNames[currentDate.getMonth()]} {selectedDate.day}, {currentDate.getFullYear()}
// //                   </div>
// //                   {selectedDate.holidayInfo ? (
// //                     <div className={`px-3 py-2 rounded-lg ${getHolidayTypeColor(selectedDate.holidayInfo.type)}`}>
// //                       <div className="font-medium">{selectedDate.holidayInfo.name}</div>
// //                       <div className="text-sm opacity-90 capitalize">{selectedDate.holidayInfo.type} Holiday</div>
// //                     </div>
// //                   ) : (
// //                     <div className="text-gray-600">Regular Working Day</div>
// //                   )}
// //                 </div>
// //               </div>
// //             )}
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default HolidayCalendar;

// import React, { useState, useMemo, useEffect } from 'react';
// import { ChevronLeft, ChevronRight, Calendar as CalendarIcon, Clock } from 'lucide-react';
// import Holidays from 'date-holidays';

// const HolidayCalendar = () => {
//   const [currentDate, setCurrentDate] = useState(new Date());
//   const [selectedDate, setSelectedDate] = useState(null);
  
//   const holidaysApi = useMemo(() => new Holidays('IN'), []); // Initialize Holidays for India

//   const governmentHolidays = useMemo(() => {
//     const year = currentDate.getFullYear();
//     const holidays = {};
//     holidaysApi.getHolidays(year).forEach(holiday => {
//       const dateKey = `${holiday.start.getFullYear()}-${String(holiday.start.getMonth() + 1).padStart(2, '0')}-${String(holiday.start.getDate()).padStart(2, '0')}`;
//       holidays[dateKey] = { name: holiday.name, type: 'government' };
//     });
//     return holidays;
//   }, [holidaysApi, currentDate]);

//   const getFirstSaturday = (year, month) => {
//     const firstDay = new Date(year, month, 1);
//     const dayOfWeek = firstDay.getDay(); // Sunday - 0, Saturday - 6
//     const firstSaturday = 1 + (dayOfWeek <= 6 ? (6 - dayOfWeek) : (6 + 7 - dayOfWeek));
//     return firstSaturday;
//   };

//   const firstSaturdayHolidays = useMemo(() => {
//     const year = currentDate.getFullYear();
//     const holidays = {};
//     for (let month = 0; month < 12; month++) {
//       const firstSat = getFirstSaturday(year, month);
//       const dateKey = `${year}-${String(month + 1).padStart(2, '0')}-${String(firstSat).padStart(2, '0')}`;
//       holidays[dateKey] = { name: 'First Saturday Holiday', type: 'company' };
//     }
//     return holidays;
//   }, [currentDate]);

//   const allHolidays = { ...governmentHolidays, ...firstSaturdayHolidays };

//   const monthNames = [
//     'January', 'February', 'March', 'April', 'May', 'June',
//     'July', 'August', 'September', 'October', 'November', 'December'
//   ];

//   const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

//   const getDaysInMonth = (date) => {
//     const year = date.getFullYear();
//     const month = date.getMonth();
//     const firstDay = new Date(year, month, 1);
//     const lastDay = new Date(year, month + 1, 0);
//     const daysInMonth = lastDay.getDate();
//     const startingDayOfWeek = firstDay.getDay();

//     const days = [];
//     for (let i = 0; i < startingDayOfWeek; i++) {
//       days.push(null);
//     }
//     for (let day = 1; day <= daysInMonth; day++) {
//       days.push(day);
//     }
//     return days;
//   };

//   const formatDateKey = (year, month, day) => {
//     return `${year}-${String(month + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
//   };

//   const navigateMonth = (direction) => {
//     const newDate = new Date(currentDate);
//     newDate.setMonth(newDate.getMonth() + direction);
//     setCurrentDate(newDate);
//     setSelectedDate(null);
//   };

//   const isToday = (day) => {
//     const today = new Date();
//     return day &&
//       day === today.getDate() &&
//       currentDate.getMonth() === today.getMonth() &&
//       currentDate.getFullYear() === today.getFullYear();
//   };

//   const getHolidayInfo = (day) => {
//     if (!day) return null;
//     const dateKey = formatDateKey(currentDate.getFullYear(), currentDate.getMonth(), day);
//     return allHolidays[dateKey] || null;
//   };

//   const days = getDaysInMonth(currentDate);
//   const currentMonthHolidays = useMemo(() => {
//     const year = currentDate.getFullYear();
//     const month = currentDate.getMonth() + 1;
//     return Object.entries(allHolidays)
//       .filter(([date]) => {
//         const holidayDate = new Date(date);
//         return holidayDate.getFullYear() === year && holidayDate.getMonth() + 1 === month;
//       })
//       .sort(([a], [b]) => new Date(a) - new Date(b));
//   }, [currentDate, allHolidays]);

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100 p-6 font-sans">
//       <div className="max-w-7xl mx-auto">
//         <div className="text-center mb-10">
//           <h1 className="text-4xl font-extrabold text-blue-800 mb-2 tracking-wide">Holiday Calendar</h1>
//           <p className="text-blue-500">Find your well-deserved breaks.</p>
//         </div>

//         <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
//           {/* Main Calendar */}
//           <div className="lg:col-span-3">
//             <div className="bg-white rounded-3xl shadow-2xl overflow-hidden transform transition-transform duration-300 hover:scale-105">
//               {/* Calendar Header */}
//               <div className="bg-blue-600 px-6 py-5 rounded-t-3xl">
//                 <div className="flex items-center justify-between">
//                   <button
//                     onClick={() => navigateMonth(-1)}
//                     className="p-2 hover:bg-white hover:bg-opacity-20 rounded-full transition-colors"
//                   >
//                     <ChevronLeft className="w-6 h-6 text-white" />
//                   </button>
//                   <h2 className="text-2xl font-bold text-white">
//                     {monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}
//                   </h2>
//                   <button
//                     onClick={() => navigateMonth(1)}
//                     className="p-2 hover:bg-white hover:bg-opacity-20 rounded-full transition-colors"
//                   >
//                     <ChevronRight className="w-6 h-6 text-white" />
//                   </button>
//                 </div>
//               </div>

//               {/* Day Names */}
//               <div className="grid grid-cols-7 bg-blue-50 border-b border-blue-200">
//                 {dayNames.map((day) => (
//                   <div key={day} className="p-4 text-center font-semibold text-blue-700">
//                     {day}
//                   </div>
//                 ))}
//               </div>

//               {/* Calendar Grid */}
//               <div className="grid grid-cols-7">
//                 {days.map((day, index) => {
//                   const holidayInfo = getHolidayInfo(day);
//                   const isHoliday = holidayInfo !== null;
//                   const isGovtHoliday = holidayInfo?.type === 'government';
                  
//                   // Check if the day is a Sunday
//                   const fullDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), day);
//                   const isSunday = day && fullDate.getDay() === 0;

//                   const todayClass = isToday(day) ? 'bg-blue-100 ring-2 ring-blue-500' : '';
//                   const sundayClass = isSunday ? 'bg-red-500 text-white' : '';
//                   const companyHolidayClass = isHoliday && holidayInfo.type === 'company' ? 'bg-blue-200 text-blue-800' : '';
//                   const govtHolidayClass = isGovtHoliday ? 'bg-red-500 text-white' : '';

//                   // Determine the correct background and text color based on precedence
//                   let cellClass = '';
//                   let dayTextClass = 'text-gray-800';
//                   let holidayTextClass = 'text-blue-800';

//                   if (isGovtHoliday || isSunday) {
//                     cellClass = 'bg-red-500 text-white';
//                     dayTextClass = 'text-white';
//                     holidayTextClass = 'text-white';
//                   } else if (isHoliday && holidayInfo.type === 'company') {
//                     cellClass = 'bg-blue-200 text-blue-800';
//                     dayTextClass = 'text-blue-800';
//                     holidayTextClass = 'text-blue-800';
//                   }

//                   if (isToday(day)) {
//                     cellClass += ' ring-2 ring-blue-500';
//                     dayTextClass = 'text-blue-800'; // Today's color
//                   }
                  
//                   return (
//                     <div
//                       key={index}
//                       className={`min-h-[100px] border border-gray-100 p-3 cursor-pointer hover:bg-blue-50 transition-colors duration-200 ${cellClass}`}
//                       onClick={() => day && setSelectedDate({ day, holidayInfo })}
//                     >
//                       {day && (
//                         <div className="h-full flex flex-col items-center">
//                           <div
//                             className={`text-2xl font-bold mb-2 ${dayTextClass}`}
//                           >
//                             {day}
//                           </div>
//                           {isHoliday && (
//                             <div className={`mt-1 text-xs font-medium ${holidayTextClass}`}>
//                               {holidayInfo.name}
//                             </div>
//                           )}
//                            {isSunday && !isHoliday && (
//                             <div className="mt-1 text-xs font-medium text-white">Sunday</div>
//                           )}
//                         </div>
//                       )}
//                     </div>
//                   );
//                 })}
//               </div>
//             </div>
//           </div>

//           {/* Sidebar */}
//           <div className="space-y-8">
//             {/* Upcoming Holidays */}
//             <div className="bg-white rounded-3xl shadow-2xl p-6 transform transition-transform duration-300 hover:scale-105">
//               <h3 className="text-2xl font-bold text-blue-800 mb-6 flex items-center">
//                 <Clock className="w-6 h-6 mr-2" />
//                 {monthNames[currentDate.getMonth()]} Holidays
//               </h3>
//               <div className="space-y-4">
//                 {currentMonthHolidays.length > 0 ? (
//                   currentMonthHolidays.map(([date, holiday]) => (
//                     <div
//                       key={date}
//                       className="flex items-start space-x-4 p-4 rounded-xl bg-blue-50 hover:bg-blue-100 transition-colors"
//                     >
//                       <div className={`w-2 h-2 rounded-full ${holiday.type === 'government' ? 'bg-red-500' : 'bg-blue-500'} mt-2`}></div>
//                       <div className="flex-1">
//                         <div className="font-semibold text-blue-900">{holiday.name}</div>
//                         <div className="text-sm text-blue-700 mt-1">
//                           {new Date(date).toLocaleDateString('en-US', {
//                             weekday: 'long',
//                             year: 'numeric',
//                             month: 'long',
//                             day: 'numeric',
//                           })}
//                         </div>
//                       </div>
//                     </div>
//                   ))
//                 ) : (
//                   <div className="text-gray-600 text-center">No holidays this month.</div>
//                 )}
//               </div>
//             </div>
//             {/* Selected Date Info */}
//             {selectedDate && (
//               <div className="bg-white rounded-3xl shadow-2xl p-6 transform transition-transform duration-300 hover:scale-105">
//                 <h3 className="text-2xl font-bold text-blue-800 mb-6 flex items-center">
//                   <CalendarIcon className="w-6 h-6 mr-2" />
//                   Selected Date
//                 </h3>
//                 <div className="space-y-4">
//                   <div className="text-xl font-bold text-blue-900">
//                     {monthNames[currentDate.getMonth()]} {selectedDate.day},{' '}
//                     {currentDate.getFullYear()}
//                   </div>
//                   {selectedDate.holidayInfo ? (
//                     <div className={`px-4 py-3 rounded-xl ${selectedDate.holidayInfo.type === 'government' ? 'bg-red-600' : 'bg-blue-600'} text-white`}>
//                       <div className="font-medium text-lg">{selectedDate.holidayInfo.name}</div>
//                     </div>
//                   ) : (
//                     <div className="text-gray-600">Regular Working Day</div>
//                   )}
//                 </div>
//               </div>
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default HolidayCalendar;

// Import necessary modules
// import React, { useState, useMemo } from 'react';
// import { ChevronLeft, ChevronRight, Calendar as CalendarIcon, Clock, MapPin } from 'lucide-react';

// const HolidayCalendar = () => {
//     const [currentDate, setCurrentDate] = useState(new Date());
//     const [selectedDate, setSelectedDate] = useState(null);

//     // Comprehensive list of Indian holidays with types
//     const indianHolidays = {
//         '2025-01-01': { name: "New Year's Day", type: 'government' },
//         '2025-01-15': { name: 'Pongal', type: 'festival' },
//         '2025-01-26': { name: 'Republic Day', type: 'government' },
//         '2025-02-26': { name: 'Maha Shivratri', type: 'festival' },
//         '2025-03-13': { name: 'Holi', type: 'festival' },
//         '2025-03-14': { name: 'Holi (Second Day)', type: 'festival' },
//         '2025-04-10': { name: 'Ram Navami', type: 'festival' },
//         '2025-04-14': { name: 'Ambedkar Jayanti', type: 'government' },
//         '2025-04-18': { name: 'Good Friday', type: 'festival' },
//         '2025-05-01': { name: 'Labour Day', type: 'government' },
//         '2025-05-12': { name: 'Buddha Purnima', type: 'festival' },
//         '2025-07-29': { name: 'Eid al-Adha', type: 'festival' },
//         '2025-08-15': { name: 'Independence Day', type: 'government' },
//         '2025-08-16': { name: 'Janmashtami', type: 'festival' },
//         '2025-08-29': { name: 'Onam', type: 'festival' },
//         '2025-09-07': { name: 'Ganesh Chaturthi', type: 'festival' },
//         '2025-10-02': { name: 'Gandhi Jayanti', type: 'government' },
//         '2025-10-20': { name: 'Karva Chauth', type: 'festival' },
//         '2025-11-01': { name: 'Diwali', type: 'festival' },
//         '2025-11-02': { name: 'Diwali (Second Day)', type: 'festival' },
//         '2025-11-15': { name: 'Guru Nanak Jayanti', type: 'festival' },
//         '2025-12-25': { name: 'Christmas Day', type: 'government' },
//     };

//     const getFirstSaturday = (year, month) => {
//         const firstDay = new Date(year, month, 1);
//         const dayOfWeek = firstDay.getDay(); // Sunday - 0, Saturday - 6
//         const firstSaturday = 1 + (dayOfWeek <= 6 ? (6 - dayOfWeek) : (6 + 7 - dayOfWeek));
//         return firstSaturday;
//     };

//     const firstSaturdayHolidays = useMemo(() => {
//         const year = currentDate.getFullYear();
//         const holidays = {};
//         for (let month = 0; month < 12; month++) {
//             const firstSat = getFirstSaturday(year, month);
//             const dateKey = `${year}-${String(month + 1).padStart(2, '0')}-${String(firstSat).padStart(2, '0')}`;
//             holidays[dateKey] = { name: 'First Saturday Holiday', type: 'company' };
//         }
//         return holidays;
//     }, [currentDate]);

//     const allHolidays = { ...indianHolidays, ...firstSaturdayHolidays };

//     const monthNames = [
//         'January', 'February', 'March', 'April', 'May', 'June',
//         'July', 'August', 'September', 'October', 'November', 'December'
//     ];

//     const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

//     const getDaysInMonth = (date) => {
//         const year = date.getFullYear();
//         const month = date.getMonth();
//         const firstDay = new Date(year, month, 1);
//         const lastDay = new Date(year, month + 1, 0);
//         const daysInMonth = lastDay.getDate();
//         const startingDayOfWeek = firstDay.getDay();

//         const days = [];
//         for (let i = 0; i < startingDayOfWeek; i++) {
//             days.push(null);
//         }
//         for (let day = 1; day <= daysInMonth; day++) {
//             days.push(day);
//         }
//         return days;
//     };

//     const formatDateKey = (year, month, day) => {
//         return `${year}-${String(month + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
//     };

//     const navigateMonth = (direction) => {
//         const newDate = new Date(currentDate);
//         newDate.setMonth(newDate.getMonth() + direction);
//         setCurrentDate(newDate);
//         setSelectedDate(null);
//     };

//     const isToday = (day) => {
//         const today = new Date();
//         return day &&
//             day === today.getDate() &&
//             currentDate.getMonth() === today.getMonth() &&
//             currentDate.getFullYear() === today.getFullYear();
//     };

//     const getHolidayInfo = (day) => {
//         if (!day) return null;
//         const dateKey = formatDateKey(currentDate.getFullYear(), currentDate.getMonth(), day);
//         return allHolidays[dateKey] || null;
//     };

//     const getHolidayTypeColor = (type) => {
//         switch (type) {
//             case 'government':
//                 return 'bg-red-500';
//             case 'festival':
//                 return 'bg-orange-500';
//             case 'company':
//                 return 'bg-blue-500';
//             default:
//                 return 'bg-gray-500';
//         }
//     };

//     const days = getDaysInMonth(currentDate);
//     const currentMonthHolidays = useMemo(() => {
//         const year = currentDate.getFullYear();
//         const month = currentDate.getMonth() + 1;
//         const holidays = Object.entries(allHolidays)
//             .filter(([date]) => {
//                 const holidayDate = new Date(date);
//                 return holidayDate.getFullYear() === year && holidayDate.getMonth() + 1 === month;
//             })
//             .sort(([a], [b]) => new Date(a) - new Date(b));

//         // Add Sundays to the list of holidays for the current month
//         const sundayDates = getDaysInMonth(currentDate)
//             .filter(day => day && new Date(year, month - 1, day).getDay() === 0)
//             .map(day => [formatDateKey(year, month - 1, day), { name: 'Sunday', type: 'sunday' }]);

//         return [...holidays, ...sundayDates];
//     }, [currentDate, allHolidays]);

//     return (
//         <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 p-6 font-sans">
//             <div className="max-w-7xl mx-auto">
//                 <div className="text-center mb-10">
//                     <h1 className="text-4xl font-extrabold text-gray-800 mb-2 tracking-wide">Holiday Calendar</h1>
//                     <p className="text-gray-600">Employee Management System - Holiday Tracker</p>
//                 </div>

//                 <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
//                     {/* Main Calendar */}
//                     <div className="lg:col-span-3">
//                         <div className="bg-white rounded-3xl shadow-2xl overflow-hidden transform transition-transform duration-300 hover:scale-105">
//                             {/* Calendar Header */}
//                             <div className="bg-gradient-to-r from-blue-600 to-indigo-600 px-6 py-5 rounded-t-3xl">
//                                 <div className="flex items-center justify-between">
//                                     <button
//                                         onClick={() => navigateMonth(-1)}
//                                         className="p-2 hover:bg-white hover:bg-opacity-20 rounded-full transition-colors"
//                                     >
//                                         <ChevronLeft className="w-6 h-6 text-white" />
//                                     </button>
//                                     <h2 className="text-2xl font-bold text-white">
//                                         {monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}
//                                     </h2>
//                                     <button
//                                         onClick={() => navigateMonth(1)}
//                                         className="p-2 hover:bg-white hover:bg-opacity-20 rounded-full transition-colors"
//                                     >
//                                         <ChevronRight className="w-6 h-6 text-white" />
//                                     </button>
//                                 </div>
//                             </div>

//                             {/* Day Names */}
//                             <div className="grid grid-cols-7 bg-blue-50 border-b border-blue-200">
//                                 {dayNames.map((day) => (
//                                     <div key={day} className="p-4 text-center font-semibold text-blue-700">
//                                         {day}
//                                     </div>
//                                 ))}
//                             </div>

//                             {/* Calendar Grid */}
//                             <div className="grid grid-cols-7">
//                                 {days.map((day, index) => {
//                                     const holidayInfo = getHolidayInfo(day);
//                                     const isHoliday = holidayInfo !== null;
//                                     const isGovtHoliday = holidayInfo?.type === 'government' || holidayInfo?.type === 'festival';
//                                     const fullDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), day);
//                                     const isSunday = day && fullDate.getDay() === 0;

//                                     // Determine the correct background and text color based on precedence
//                                     let cellClass = '';
//                                     let dayTextClass = 'text-gray-800';
//                                     let holidayTextClass = 'text-blue-800';

//                                     if (isGovtHoliday || isSunday) {
//                                         cellClass = 'bg-red-500 text-white';
//                                         dayTextClass = 'text-white';
//                                         holidayTextClass = 'text-white';
//                                     } else if (isHoliday && holidayInfo.type === 'company') {
//                                         cellClass = 'bg-blue-200 text-blue-800';
//                                         dayTextClass = 'text-blue-800';
//                                         holidayTextClass = 'text-blue-800';
//                                     }

//                                     if (isToday(day)) {
//                                         cellClass += ' ring-2 ring-blue-500';
//                                         dayTextClass = 'text-blue-800'; // Today's color
//                                     }

//                                     return (
//                                         <div
//                                             key={index}
//                                             className={`min-h-[100px] border border-gray-100 p-3 cursor-pointer hover:bg-blue-50 transition-colors duration-200 ${cellClass}`}
//                                             onClick={() => day && setSelectedDate({ day, holidayInfo, isSunday })}
//                                         >
//                                             {day && (
//                                                 <div className="h-full flex flex-col items-center">
//                                                     <div className={`text-2xl font-bold mb-2 ${dayTextClass}`}>
//                                                         {day}
//                                                     </div>
//                                                     {isHoliday && (
//                                                         <div className={`mt-1 text-xs font-medium ${holidayTextClass}`}>
//                                                             {holidayInfo.name}
//                                                         </div>
//                                                     )}
//                                                     {isSunday && !isHoliday && (
//                                                         <div className="mt-1 text-xs font-medium text-white">Sunday</div>
//                                                     )}
//                                                 </div>
//                                             )}
//                                         </div>
//                                     );
//                                 })}
//                             </div>
//                         </div>
//                     </div>

//                     {/* Sidebar */}
//                     <div className="space-y-8">
//                         {/* Legend */}
//                         <div className="bg-white rounded-3xl shadow-2xl p-6">
//                             <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
//                                 <CalendarIcon className="w-6 h-6 mr-2" />
//                                 Holiday Types
//                             </h3>
//                             <div className="space-y-4">
//                                 <div className="flex items-center space-x-3">
//                                     <div className="w-4 h-4 bg-red-500 rounded-full"></div>
//                                     <span className="text-gray-700">Government/Festival Holidays</span>
//                                 </div>
//                                 <div className="flex items-center space-x-3">
//                                     <div className="w-4 h-4 bg-blue-500 rounded-full"></div>
//                                     <span className="text-gray-700">Company Holidays</span>
//                                 </div>
//                             </div>
//                         </div>

//                         {/* Upcoming Holidays for the current month */}
//                         <div className="bg-white rounded-3xl shadow-2xl p-6 transform transition-transform duration-300 hover:scale-105">
//                             <h3 className="text-2xl font-bold text-blue-800 mb-6 flex items-center">
//                                 <Clock className="w-6 h-6 mr-2" />
//                                 {monthNames[currentDate.getMonth()]} Holidays
//                             </h3>
//                             <div className="space-y-4">
//                                 {currentMonthHolidays.length > 0 ? (
//                                     currentMonthHolidays.map(([date, holiday]) => (
//                                         <div
//                                             key={date}
//                                             className="flex items-start space-x-4 p-4 rounded-xl bg-blue-50 hover:bg-blue-100 transition-colors"
//                                         >
//                                             <div className={`w-2 h-2 rounded-full ${getHolidayTypeColor(holiday.type)} mt-2`}></div>
//                                             <div className="flex-1">
//                                                 <div className="font-semibold text-blue-900">{holiday.name}</div>
//                                                 <div className="text-sm text-blue-700 mt-1">
//                                                     {new Date(date).toLocaleDateString('en-US', {
//                                                         weekday: 'long',
//                                                         year: 'numeric',
//                                                         month: 'long',
//                                                         day: 'numeric',
//                                                     })}
//                                                 </div>
//                                             </div>
//                                         </div>
//                                     ))
//                                 ) : (
//                                     <div className="text-gray-600 text-center">No holidays this month.</div>
//                                 )}
//                             </div>
//                         </div>

//                         {/* Selected Date Info */}
//                         {selectedDate && (
//                             <div className="bg-white rounded-3xl shadow-2xl p-6 transform transition-transform duration-300 hover:scale-105">
//                                 <h3 className="text-2xl font-bold text-blue-800 mb-6 flex items-center">
//                                     <MapPin className="w-6 h-6 mr-2" />
//                                     Selected Date
//                                 </h3>
//                                 <div className="space-y-4">
//                                     <div className="text-xl font-bold text-blue-900">
//                                         {monthNames[currentDate.getMonth()]} {selectedDate.day}, {currentDate.getFullYear()}
//                                     </div>
//                                     {selectedDate.holidayInfo ? (
//                                         <div className={`px-4 py-3 rounded-xl ${getHolidayTypeColor(selectedDate.holidayInfo.type)} text-white`}>
//                                             <div className="font-medium text-lg">{selectedDate.holidayInfo.name}</div>
//                                         </div>
//                                     ) : (
//                                         <div className="text-gray-600">Regular Working Day</div>
//                                     )}
//                                 </div>
//                             </div>
//                         )}
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default HolidayCalendar;

import React, { useState, useMemo } from 'react';
import { ChevronLeft, ChevronRight, Calendar as CalendarIcon, Clock } from 'lucide-react';

const HolidayCalendar = () => {
    const [currentDate, setCurrentDate] = useState(new Date());
    const [selectedDate, setSelectedDate] = useState(null);

    // Comprehensive list of Indian holidays with types
    const indianHolidays = {
        '2025-01-01': { name: "New Year's Day", type: 'government' },
        '2025-01-15': { name: 'Pongal', type: 'festival' },
        '2025-01-26': { name: 'Republic Day', type: 'government' },
        '2025-02-26': { name: 'Maha Shivratri', type: 'festival' },
        '2025-03-13': { name: 'Holi', type: 'festival' },
        '2025-03-14': { name: 'Holi (Second Day)', type: 'festival' },
        '2025-04-10': { name: 'Ram Navami', type: 'festival' },
        '2025-04-14': { name: 'Ambedkar Jayanti', type: 'government' },
        '2025-04-18': { name: 'Good Friday', type: 'festival' },
        '2025-05-01': { name: 'Labour Day', type: 'government' },
        '2025-05-12': { name: 'Buddha Purnima', type: 'festival' },
        '2025-07-29': { name: 'Eid al-Adha', type: 'festival' },
        '2025-08-15': { name: 'Independence Day', type: 'government' },
        '2025-08-16': { name: 'Janmashtami', type: 'festival' },
        '2025-08-29': { name: 'Onam', type: 'festival' },
        '2025-09-07': { name: 'Ganesh Chaturthi', type: 'festival' },
        '2025-10-02': { name: 'Gandhi Jayanti', type: 'government' },
        '2025-10-20': { name: 'Karva Chauth', type: 'festival' },
        '2025-11-01': { name: 'Diwali', type: 'festival' },
        '2025-11-02': { name: 'Diwali (Second Day)', type: 'festival' },
        '2025-11-15': { name: 'Guru Nanak Jayanti', type: 'festival' },
        '2025-12-25': { name: 'Christmas Day', type: 'government' },
    };

    const getFirstSaturday = (year, month) => {
        const firstDay = new Date(year, month, 1);
        const dayOfWeek = firstDay.getDay(); // Sunday - 0, Saturday - 6
        const firstSaturday = 1 + (dayOfWeek <= 6 ? (6 - dayOfWeek) : (6 + 7 - dayOfWeek));
        return firstSaturday;
    };

    const firstSaturdayHolidays = useMemo(() => {
        const year = currentDate.getFullYear();
        const holidays = {};
        for (let month = 0; month < 12; month++) {
            const firstSat = getFirstSaturday(year, month);
            const dateKey = `${year}-${String(month + 1).padStart(2, '0')}-${String(firstSat).padStart(2, '0')}`;
            holidays[dateKey] = { name: 'First Saturday Holiday', type: 'company' };
        }
        return holidays;
    }, [currentDate]);

    const allHolidays = { ...indianHolidays, ...firstSaturdayHolidays };

    const monthNames = [
        'January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December'
    ];

    const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

    const getDaysInMonth = (date) => {
        const year = date.getFullYear();
        const month = date.getMonth();
        const firstDay = new Date(year, month, 1);
        const lastDay = new Date(year, month + 1, 0);
        const daysInMonth = lastDay.getDate();
        const startingDayOfWeek = firstDay.getDay();

        const days = [];
        for (let i = 0; i < startingDayOfWeek; i++) {
            days.push(null);
        }
        for (let day = 1; day <= daysInMonth; day++) {
            days.push(day);
        }
        return days;
    };

    const formatDateKey = (year, month, day) => {
        return `${year}-${String(month + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
    };

    const navigateMonth = (direction) => {
        const newDate = new Date(currentDate);
        newDate.setMonth(newDate.getMonth() + direction);
        setCurrentDate(newDate);
        setSelectedDate(null);
    };

    const isToday = (day) => {
        const today = new Date();
        return day &&
            day === today.getDate() &&
            currentDate.getMonth() === today.getMonth() &&
            currentDate.getFullYear() === today.getFullYear();
    };

    const getHolidayInfo = (day) => {
        if (!day) return null;
        const dateKey = formatDateKey(currentDate.getFullYear(), currentDate.getMonth(), day);
        return allHolidays[dateKey] || null;
    };

    const getHolidayTypeColor = (type) => {
        switch (type) {
            case 'government':
                return 'bg-red-500';
            case 'festival':
                return 'bg-orange-500';
            case 'company':
                return 'bg-blue-500';
            default:
                return 'bg-gray-500';
        }
    };

    const days = getDaysInMonth(currentDate);
    const currentMonthHolidays = useMemo(() => {
        const year = currentDate.getFullYear();
        const month = currentDate.getMonth() + 1;
        const holidays = Object.entries(allHolidays)
            .filter(([date]) => {
                const holidayDate = new Date(date);
                return holidayDate.getFullYear() === year && holidayDate.getMonth() + 1 === month;
            })
            .sort(([a], [b]) => new Date(a) - new Date(b));

        // Add Sundays to the list of holidays for the current month
        const sundayDates = getDaysInMonth(currentDate)
            .filter(day => day && new Date(year, month - 1, day).getDay() === 0)
            .map(day => [formatDateKey(year, month - 1, day), { name: 'Sunday', type: 'sunday' }]);

        return [...holidays, ...sundayDates];
    }, [currentDate, allHolidays]);

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 p-6 font-sans">
            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-10">
                    <h1 className="text-4xl font-extrabold text-gray-800 mb-2 tracking-wide">Holiday Calendar</h1>
                    <p className="text-gray-600">Employee Management System - Holiday Tracker</p>
                </div>

                {/* Main Calendar Section */}
                <div className="bg-white rounded-3xl shadow-2xl overflow-hidden transform transition-transform duration-300 hover:scale-105 mb-8">
                    {/* Calendar Header */}
                    <div className="bg-gradient-to-r from-blue-600 to-indigo-600 px-6 py-5 rounded-t-3xl">
                        <div className="flex items-center justify-between">
                            <button
                                onClick={() => navigateMonth(-1)}
                                className="p-2 hover:bg-white hover:bg-opacity-20 rounded-full transition-colors"
                            >
                                <ChevronLeft className="w-6 h-6 text-white" />
                            </button>
                            <h2 className="text-2xl font-bold text-white">
                                {monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}
                            </h2>
                            <button
                                onClick={() => navigateMonth(1)}
                                className="p-2 hover:bg-white hover:bg-opacity-20 rounded-full transition-colors"
                            >
                                <ChevronRight className="w-6 h-6 text-white" />
                            </button>
                        </div>
                    </div>

                    {/* Day Names */}
                    <div className="grid grid-cols-7 bg-blue-50 border-b border-blue-200">
                        {dayNames.map((day) => (
                            <div key={day} className="p-4 text-center font-semibold text-blue-700">
                                {day}
                            </div>
                        ))}
                    </div>

                    {/* Calendar Grid */}
                    <div className="grid grid-cols-7">
                        {days.map((day, index) => {
                            const holidayInfo = getHolidayInfo(day);
                            const isHoliday = holidayInfo !== null;
                            const isGovtHoliday = holidayInfo?.type === 'government' || holidayInfo?.type === 'festival';
                            const fullDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), day);
                            const isSunday = day && fullDate.getDay() === 0;

                            let cellClass = '';
                            let dayTextClass = 'text-gray-800';
                            let holidayTextClass = 'text-blue-800';

                            if (isGovtHoliday || isSunday) {
                                cellClass = 'bg-red-500 text-white';
                                dayTextClass = 'text-white';
                                holidayTextClass = 'text-white';
                            } else if (isHoliday && holidayInfo.type === 'company') {
                                cellClass = 'bg-blue-200 text-blue-800';
                                dayTextClass = 'text-blue-800';
                                holidayTextClass = 'text-blue-800';
                            }

                            if (isToday(day)) {
                                cellClass += ' ring-2 ring-blue-500';
                                dayTextClass = 'text-blue-800';
                            }

                            return (
                                <div
                                    key={index}
                                    className={`min-h-[100px] border border-gray-100 p-3 ${day ? 'cursor-pointer hover:bg-blue-50' : ''} transition-colors duration-200 ${cellClass}`}
                                    onClick={() => day && setSelectedDate({ day, holidayInfo, isSunday })}
                                >
                                    {day && (
                                        <div className="h-full flex flex-col items-center">
                                            <div className={`text-2xl font-bold mb-2 ${dayTextClass}`}>
                                                {day}
                                            </div>
                                            {isHoliday && (
                                                <div className={`mt-1 text-xs font-medium ${holidayTextClass}`}>
                                                    {holidayInfo.name}
                                                </div>
                                            )}
                                            {isSunday && !isHoliday && (
                                                <div className="mt-1 text-xs font-medium text-white">Sunday</div>
                                            )}
                                        </div>
                                    )}
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* Upcoming Holidays for the current month */}
                <div className="bg-white rounded-3xl shadow-2xl p-6 transform transition-transform duration-300 hover:scale-105">
                    <h3 className="text-2xl font-bold text-blue-800 mb-6 flex items-center">
                        <Clock className="w-6 h-6 mr-2" />
                        {monthNames[currentDate.getMonth()]} Holidays
                    </h3>
                    <div className="space-y-4">
                        {currentMonthHolidays.length > 0 ? (
                            currentMonthHolidays.map(([date, holiday]) => (
                                <div
                                    key={date}
                                    className="flex items-start space-x-4 p-4 rounded-xl bg-blue-50 hover:bg-blue-100 transition-colors"
                                >
                                    <div className={`w-2 h-2 rounded-full ${getHolidayTypeColor(holiday.type)} mt-2`}></div>
                                    <div className="flex-1">
                                        <div className="font-semibold text-blue-900">{holiday.name}</div>
                                        <div className="text-sm text-blue-700 mt-1">
                                            {new Date(date).toLocaleDateString('en-US', {
                                                weekday: 'long',
                                                year: 'numeric',
                                                month: 'long',
                                                day: 'numeric',
                                            })}
                                        </div>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <div className="text-gray-600 text-center">No holidays this month.</div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HolidayCalendar;