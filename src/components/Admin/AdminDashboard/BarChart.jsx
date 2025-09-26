// // import React from 'react';
// // import { Calendar, TrendingUp, Users, DollarSign, Target, Award, BarChart3, Activity, Zap, Star, Globe, Heart } from 'lucide-react';

// // const TestTubeChart = () => {
// //   const monthsData = [
// //     { 
// //       month: 'JAN', 
// //       percentage: 25, 
// //       value: '25%', 
// //       color: 'bg-gradient-to-t from-yellow-500 to-yellow-400',
// //       tubeColor: 'bg-gray-200',
// //       icon: Calendar,
// //       title: 'JANUARY',
// //     },
// //     { 
// //       month: 'FEB', 
// //       percentage: 40, 
// //       value: '40%', 
// //       color: 'bg-gradient-to-t from-orange-500 to-orange-400',
// //       tubeColor: 'bg-gray-200',
// //       icon: TrendingUp,
// //       title: 'FEBRUARY',
// //     },
// //     { 
// //       month: 'MAR', 
// //       percentage: 50, 
// //       value: '50%', 
// //       color: 'bg-gradient-to-t from-purple-600 to-purple-500',
// //       tubeColor: 'bg-gray-200',
// //       icon: Users,
// //       title: 'MARCH',
// //     },
// //     { 
// //       month: 'APR', 
// //       percentage: 75, 
// //       value: '75%', 
// //       color: 'bg-gradient-to-t from-pink-600 to-pink-500',
// //       tubeColor: 'bg-gray-200',
// //       icon: DollarSign,
// //       title: 'APRIL',
// //     },
// //     { 
// //       month: 'MAY', 
// //       percentage: 60, 
// //       value: '60%', 
// //       color: 'bg-gradient-to-t from-cyan-500 to-cyan-400',
// //       tubeColor: 'bg-gray-200',
// //       icon: Target,
// //       title: 'MAY',
// //     },
// //     { 
// //       month: 'JUN', 
// //       percentage: 80, 
// //       value: '80%', 
// //       color: 'bg-gradient-to-t from-green-500 to-green-400',
// //       tubeColor: 'bg-gray-200',
// //       icon: Award,
// //       title: 'JUNE',
// //     },
// //     { 
// //       month: 'JUL', 
// //       percentage: 45, 
// //       value: '45%', 
// //       color: 'bg-gradient-to-t from-red-500 to-red-400',
// //       tubeColor: 'bg-gray-200',
// //       icon: BarChart3,
// //       title: 'JULY',
// //     },
// //     { 
// //       month: 'AUG', 
// //       percentage: 65, 
// //       value: '65%', 
// //       color: 'bg-gradient-to-t from-blue-500 to-blue-400',
// //       tubeColor: 'bg-gray-200',
// //       icon: Activity,
// //       title: 'AUGUST',
// //     },
// //     { 
// //       month: 'SEP', 
// //       percentage: 35, 
// //       value: '35%', 
// //       color: 'bg-gradient-to-t from-indigo-500 to-indigo-400',
// //       tubeColor: 'bg-gray-200',
// //       icon: Zap,
// //       title: 'SEPTEMBER',
// //     },
// //     { 
// //       month: 'OCT', 
// //       percentage: 85, 
// //       value: '85%', 
// //       color: 'bg-gradient-to-t from-emerald-500 to-emerald-400',
// //       tubeColor: 'bg-gray-200',
// //       icon: Star,
// //       title: 'OCTOBER',
// //     },
// //     { 
// //       month: 'NOV', 
// //       percentage: 70, 
// //       value: '70%', 
// //       color: 'bg-gradient-to-t from-violet-500 to-violet-400',
// //       tubeColor: 'bg-gray-200',
// //       icon: Globe,
// //       title: 'NOVEMBER',
// //     },
// //     { 
// //       month: 'DEC', 
// //       percentage: 90, 
// //       value: '90%', 
// //       color: 'bg-gradient-to-t from-rose-500 to-rose-400',
// //       tubeColor: 'bg-gray-200',
// //       icon: Heart,
// //       title: 'DECEMBER',
// //     }
// //   ];

// //   const maxHeight = 180;

// //   return (
// //     <div>
// //       <div >
// //         <h1 className="text-3xl font-bold text-gray-800 text-center mb-12">
// //           Monthly Performance Chart
// //         </h1>
        
// //         <div className="flex justify-center items-end  overflow-x-auto pb-4">
// //           {monthsData.map((item, index) => {
// //             const IconComponent = item.icon;
// //             const fillHeight = (item.percentage / 100) * maxHeight;
            
// //             return (
// //               <div key={index} className="flex flex-col items-center flex-shrink-0 ">
// //                 {/* Test Tube Container */}
// //                 <div className="relative mb-4">
// //                   {/* Test Tube Cap */}
// //                   <div className="w-10 h-3 bg-gray-300 rounded-t-lg border-2 border-gray-400 relative">
// //                     <div className="absolute top-0.5 left-1/2 transform -translate-x-1/2 w-4 h-0.5 bg-gray-400 rounded-full"></div>
// //                   </div>
                  
// //                   {/* Test Tube Body */}
// //                   <div 
// //                     className={`w-10 ${item.tubeColor} relative rounded-b-full border-l-2 border-r-2 border-b-2 border-gray-400 overflow-hidden shadow-lg`}
// //                     style={{ height: `${maxHeight}px` }}
// //                   >
// //                     {/* Filled Liquid */}
// //                     <div
// //                       className={`absolute bottom-0 left-0 right-0 ${item.color} rounded-b-full transition-all duration-1000 ease-out`}
// //                       style={{ height: `${fillHeight}px` }}
// //                     >
// //                       {/* Liquid shine effect */}
// //                       <div className="absolute left-1 top-2 w-2 h-full bg-white bg-opacity-20 rounded-full"></div>
                      
// //                       {/* Bubbles effect */}
// //                       <div className="absolute right-2 top-4 w-1 h-1 bg-white bg-opacity-40 rounded-full"></div>
// //                       <div className="absolute left-2 top-8 w-1 h-1 bg-white bg-opacity-30 rounded-full"></div>
                      
// //                       {/* Icon in liquid */}
// //                       <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2">
// //                         <div className="w-5 h-5 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
// //                           <IconComponent className="w-2.5 h-2.5 text-white" />
// //                         </div>
// //                       </div>
// //                     </div>
                    
// //                     {/* Glass reflection */}
// //                     <div className="absolute left-0 top-0 w-1 h-full bg-white bg-opacity-30 rounded-l-full"></div>
// //                   </div>
// //                 </div>
                
// //                 {/* Percentage Display */}
// //                 <div className="bg-white rounded-lg px-2 py-1.5 shadow-md mb-2 min-w-[50px] text-center">
// //                   <div className="text-sm font-bold text-gray-800">
// //                     {item.value}
// //                   </div>
// //                   <div className="text-xs text-gray-600 font-medium">
// //                     {item.month}
// //                   </div>
// //                 </div>
                
// //                 {/* Description */}
// //                 <div className="text-center max-w-[80px]">
// //                   <div className="text-xs font-semibold text-gray-700 mb-1">
// //                     {item.title}
// //                   </div>
// //                   <div className="text-xs text-gray-600 leading-tight">
// //                     {item.description}
// //                   </div>
// //                 </div>
// //               </div>
// //             );
// //           })}
// //         </div>
        
// //         <div className="mt-12 text-center">
// //           <div className="text-sm text-gray-600">
// //             Interactive 12-Month Test Tube Chart
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default TestTubeChart;

// import React from 'react';

// const TestTubeChart = () => {
//   const monthsData = [
//     { month: '2013', value: 2, frontColor: '#87CEEB', sideColor: '#4682B4', topColor: '#B0E0E6' },
//     { month: '2014', value: 3, frontColor: '#DDA0DD', sideColor: '#9370DB', topColor: '#E6E6FA' },
//     { month: '2015', value: 5, frontColor: '#87CEEB', sideColor: '#4682B4', topColor: '#B0E0E6' },
//     { month: '2016', value: 7, frontColor: '#20B2AA', sideColor: '#008B8B', topColor: '#AFEEEE' },
//     { month: '2017', value: 8, frontColor: '#87CEEB', sideColor: '#4682B4', topColor: '#B0E0E6' },
//     { month: '2018', value: 9, frontColor: '#DDA0DD', sideColor: '#9370DB', topColor: '#E6E6FA' },
//     { month: '2019', value: 10, frontColor: '#87CEEB', sideColor: '#4682B4', topColor: '#B0E0E6' },
//     { month: '2020', value: 11, frontColor: '#20B2AA', sideColor: '#008B8B', topColor: '#AFEEEE' },
//     { month: '2021', value: 12, frontColor: '#87CEEB', sideColor: '#4682B4', topColor: '#B0E0E6' },
//     { month: '2022', value: 17, frontColor: '#DDA0DD', sideColor: '#9370DB', topColor: '#E6E6FA' },
//     { month: '2023', value: 22, frontColor: '#87CEEB', sideColor: '#4682B4', topColor: '#B0E0E6' },
//     { month: '2024', value: 25, frontColor: '#20B2AA', sideColor: '#008B8B', topColor: '#AFEEEE' }
//   ];

//   const maxValue = 25;
//   const chartHeight = 300;
//   const barWidth = 40;
//   const barDepth = 30;

//   // Grid lines
//   const gridLines = [0, 5, 10, 15, 20, 25];

//   return (
//     <div className="min-h-screen bg-gray-200 py-12 px-4">
//       <div className="max-w-7xl mx-auto">
        
//         {/* Title */}
//         <div className="text-center mb-12">
//           <h1 className="text-xl text-gray-500 font-normal">
//             Iran internet users per 100 person
//           </h1>
//         </div>

//         {/* Chart Container */}
//         <div className="bg-white p-12 rounded-lg shadow-2xl">
//           <svg width="100%" height="450" viewBox="0 0 1000 450" className="overflow-visible">
            
//             {/* Grid Lines */}
//             {gridLines.map((value, index) => {
//               const y = 400 - (value / maxValue) * chartHeight;
//               return (
//                 <g key={index}>
//                   {/* Horizontal grid line */}
//                   <line
//                     x1="80"
//                     y1={y}
//                     x2="950"
//                     y2={y}
//                     stroke="#e5e7eb"
//                     strokeWidth="1"
//                   />
//                   {/* Y-axis label */}
//                   <text
//                     x="70"
//                     y={y + 4}
//                     fontSize="12"
//                     fill="#6b7280"
//                     textAnchor="end"
//                   >
//                     {value}
//                   </text>
//                 </g>
//               );
//             })}

//             {/* Y-axis */}
//             <line x1="80" y1="100" x2="80" y2="400" stroke="#374151" strokeWidth="2"/>
            
//             {/* X-axis */}
//             <line x1="80" y1="400" x2="950" y2="400" stroke="#374151" strokeWidth="2"/>

//             {/* 3D Bars */}
//             {monthsData.map((item, index) => {
//               const x = 100 + index * 70;
//               const barHeight = (item.value / maxValue) * chartHeight;
//               const y = 400 - barHeight;
              
//               return (
//                 <g key={index}>
                  
//                   {/* Bar Shadow on ground */}
//                   <polygon
//                     points={`${x + barDepth},400 ${x + barWidth + barDepth},400 ${x + barWidth + barDepth * 2},${400 - barDepth} ${x + barDepth * 2},${400 - barDepth}`}
//                     fill="rgba(0,0,0,0.1)"
//                   />
                  
//                   {/* Bar Front Face */}
//                   <rect
//                     x={x}
//                     y={y}
//                     width={barWidth}
//                     height={barHeight}
//                     fill={item.frontColor}
//                     stroke="rgba(255,255,255,0.3)"
//                     strokeWidth="1"
//                   />
                  
//                   {/* Bar Right Side Face */}
//                   <polygon
//                     points={`${x + barWidth},${y} ${x + barWidth + barDepth},${y - barDepth} ${x + barWidth + barDepth},${400 - barDepth} ${x + barWidth},400`}
//                     fill={item.sideColor}
//                     stroke="rgba(255,255,255,0.2)"
//                     strokeWidth="1"
//                   />
                  
//                   {/* Bar Top Face */}
//                   <polygon
//                     points={`${x},${y} ${x + barDepth},${y - barDepth} ${x + barWidth + barDepth},${y - barDepth} ${x + barWidth},${y}`}
//                     fill={item.topColor}
//                     stroke="rgba(255,255,255,0.4)"
//                     strokeWidth="1"
//                   />
                  
//                   {/* Front face highlight */}
//                   <rect
//                     x={x + 2}
//                     y={y + 2}
//                     width="4"
//                     height={barHeight - 4}
//                     fill="rgba(255,255,255,0.3)"
//                   />
                  
//                   {/* Month Label */}
//                   <text
//                     x={x + barWidth / 2}
//                     y="420"
//                     fontSize="12"
//                     fill="#374151"
//                     textAnchor="middle"
//                     fontWeight="500"
//                   >
//                     {item.month}
//                   </text>
//                 </g>
//               );
//             })}
//           </svg>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default TestTubeChart;

import React, { useEffect, useState } from "react";
import axios from "axios";
import API from "../../../utils/api";

const TestTubeChart = ({ emp_id }) => {
  const [monthsData, setMonthsData] = useState([]);
  const maxValue = 31; // Max days in a month
  const chartHeight = 300;
  const barWidth = 40;
  const barDepth = 30;
  const gridLines = [0, 5, 10, 15, 20, 25, 30];

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await API.post(
          "api/attendance/get_barchart.php",
          { emp_id }
        );

        if (response.data.status) {
          const presentCounts = response.data.data.present; // Array of 12 values
          const labels = response.data.data.labels;

          // Map to monthsData format
          const colors = [
            "#87CEEB", "#DDA0DD", "#87CEEB", "#20B2AA", "#87CEEB", "#DDA0DD",
            "#87CEEB", "#20B2AA", "#87CEEB", "#DDA0DD", "#87CEEB", "#20B2AA"
          ];

          const sideColors = [
            "#4682B4", "#9370DB", "#4682B4", "#008B8B", "#4682B4", "#9370DB",
            "#4682B4", "#008B8B", "#4682B4", "#9370DB", "#4682B4", "#008B8B"
          ];

          const topColors = [
            "#B0E0E6", "#E6E6FA", "#B0E0E6", "#AFEEEE", "#B0E0E6", "#E6E6FA",
            "#B0E0E6", "#AFEEEE", "#B0E0E6", "#E6E6FA", "#B0E0E6", "#AFEEEE"
          ];

          const data = labels.map((month, index) => ({
            month,
            value: presentCounts[index] || 0,
            frontColor: colors[index],
            sideColor: sideColors[index],
            topColor: topColors[index]
          }));

          setMonthsData(data);
        }
      } catch (error) {
        console.error("Error fetching chart data:", error);
      }
    };

    fetchData();
  }, [emp_id]);

  return (
    <div className="border-t border-gray-200">
      <div className="pt-8">
        <div className="text-center">
          <h1 className="text-xl text-blue-800 font-bold">
            Monthly Attendance
          </h1>
        </div>

        <div className="bg-white rounded-lg  overflow-x-auto">
          <svg width="100%" height="450" viewBox="0 0 1000 450" className="overflow-visible">
            {/* Grid Lines */}
            {gridLines.map((value, index) => {
              const y = 400 - (value / maxValue) * chartHeight;
              return (
                <g key={index}>
                  <line x1="80" y1={y} x2="950" y2={y} stroke="#e5e7eb" strokeWidth="1" />
                  <text x="70" y={y + 4} fontSize="12" fill="#6b7280" textAnchor="end">
                    {value}
                  </text>
                </g>
              );
            })}

            {/* Axes */}
            <line x1="80" y1="100" x2="80" y2="400" stroke="#374151" strokeWidth="2"/>
            <line x1="80" y1="400" x2="950" y2="400" stroke="#374151" strokeWidth="2"/>

            {/* Bars */}
            {monthsData.map((item, index) => {
              const x = 100 + index * 70;
              const barHeight = (item.value / maxValue) * chartHeight;
              const y = 400 - barHeight;

              return (
                <g key={index}>
                  <polygon
                    points={`${x + barDepth},400 ${x + barWidth + barDepth},400 ${x + barWidth + barDepth * 2},${400 - barDepth} ${x + barDepth * 2},${400 - barDepth}`}
                    fill="rgba(0,0,0,0.1)"
                  />
                  <rect x={x} y={y} width={barWidth} height={barHeight} fill={item.frontColor} stroke="rgba(255,255,255,0.3)" strokeWidth="1"/>
                  <polygon
                    points={`${x + barWidth},${y} ${x + barWidth + barDepth},${y - barDepth} ${x + barWidth + barDepth},${400 - barDepth} ${x + barWidth},400`}
                    fill={item.sideColor} stroke="rgba(255,255,255,0.2)" strokeWidth="1"
                  />
                  <polygon
                    points={`${x},${y} ${x + barDepth},${y - barDepth} ${x + barWidth + barDepth},${y - barDepth} ${x + barWidth},${y}`}
                    fill={item.topColor} stroke="rgba(255,255,255,0.4)" strokeWidth="1"
                  />
                  <rect x={x + 2} y={y + 2} width="4" height={barHeight - 4} fill="rgba(255,255,255,0.3)" />
                  <text x={x + barWidth / 2} y="420" fontSize="12" fill="#374151" textAnchor="middle" fontWeight="500">
                    {item.month}
                  </text>
                </g>
              );
            })}
          </svg>
        </div>
      </div>
    </div>
  );
};

export default TestTubeChart;
