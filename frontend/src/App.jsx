// src/App.jsx
import React from 'react';
import AppRouter from './routes/AppRouter'; // Import the router

const App = () => {
  return (
    <div className="app">
      <AppRouter /> {/* Use the router component */}
    </div>
  );
};

export default App;