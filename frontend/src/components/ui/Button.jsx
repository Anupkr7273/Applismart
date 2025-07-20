// frontend/src/components/ui/Button.jsx
import React from 'react';

const Button = ({ 
  children, 
  variant = "primary", 
  className = "", 
  ...props 
}) => {
  const baseStyles = "px-6 py-3 rounded-lg font-medium transition-all";
  const variants = {
    primary: "bg-indigo-600 hover:bg-indigo-700 text-white",
    secondary: "border border-indigo-600 text-indigo-600 hover:bg-indigo-50",
    amber: "bg-amber-500 hover:bg-amber-600 text-white"
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${className} hover-scale`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;