// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// import MainLayout from './components/MainLayout/MainLayout';
// import Dashboard from './components/Dashboard/Dashboard';
// import LoginForm from './components/Login/Login';

// function App() {
//   return (
//     <Router>
//       <Routes>
//                 <Route path="/" element={<LoginForm />} />

//         <Route path="/mainlayout" element={<MainLayout />} />
//        <Route path="/" element={<Dashboard />} />
//         <Route path="/" element={<MainLayout />} />
//         <Route path="/" element={<MainLayout />} />
//         <Route path="/" element={<MainLayout />} />
//         <Route path="/" element={<MainLayout />} />
//         <Route path="/" element={<MainLayout />} />

//         {/* Add more routes here if needed */}
//       </Routes>
//     </Router>
//   );
// }

// export default App;

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import LoginForm from './components/Login/Login';
import MainLayout from './components/MainLayout/MainLayout';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="/mainlayout/*" element={<MainLayout />} />
      </Routes>
    </Router>
  );
}

export default App;
