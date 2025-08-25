// frontend/src/components/layout/Header.jsx
import React from 'react';
import { Link } from 'react-router-dom'; 
import Button from '../components/ui/Button';

const Header = () => (
  <header className="container mx-auto flex justify-between items-center py-4 px-6">
    <div className="flex items-center gap-3">
      <img 
        src="\assets\logo.png" 
        alt="AppliSmart" 
        className="h-8" 
      />
    </div>

    <nav className="hidden md:flex gap-8">
      {['Home', 'Why Us?', 'Services', 'Contact'].map((item) => (
        <a 
          key={item} 
          href="#" 
          className="text-gray-700 hover:text-indigo-600 transition-colors font-medium"
        >
          {item}
        </a>
      ))}
    </nav>
      <div className="flex gap-3">
      <Link to="/auth">
        <Button variant="secondary" className="px-4 py-2">
          Log in
        </Button>
      </Link>

      <Button variant="primary" className="px-4 py-2">
        Register
      </Button>
    </div>
  </header>
);

export default Header;