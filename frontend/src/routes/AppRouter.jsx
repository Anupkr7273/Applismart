// src/routes/AppRouter.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LandingPage from '../pages/LandingPage';
// import AuthPage from '../pages/AuthPage';

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      {/* <Route path="/auth" element={<AuthPage />} /> */}
      {/* You can add more routes here later */}
    </Routes>
  );
};

export default AppRouter;