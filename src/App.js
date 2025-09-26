import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; // Optional: import styles

import LoginForm from './components/Login/Login';
import MainLayout from './components/MainLayout/MainLayout';
import { UserProvider } from '../src/components/Admin/context/UserContext';
import ProtectedRoute from './components/MainLayout/ProtectedRoute';
function App() {
  return (
    <Router>
      <ToastContainer />
      <UserProvider>

        <Routes>
          <Route path="/" element={<LoginForm />} />
          {/* <Route path="/mainlayout/*" element={<MainLayout />} /> */}
          <Route
  path="/mainlayout/*"
  element={
    <ProtectedRoute>
      <MainLayout />
    </ProtectedRoute>
  }
/>

        </Routes>
      </UserProvider>

    </Router>
  );
}

export default App;
