import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  const user = sessionStorage.getItem('user'); // Check if user is logged in

  if (!user) {
    // If no user, redirect to login
    return <Navigate to="/" replace />;
  }

  // If user exists, render the requested page
  return children;
};

export default ProtectedRoute;
