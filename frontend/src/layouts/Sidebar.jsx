import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Sidebar = ({ isOpen }) => {
  const location = useLocation();
  
  // Navigation items
  const navigation = [
    { name: 'Dashboard', href: '/dashboard', icon: '📊' },
    { name: 'My Resumes', href: '/resumes', icon: '📝' },
    { name: 'AI Tools', href: '/ai-tools', icon: '🧠' },
    { name: 'Settings', href: '/settings', icon: '⚙️' },
  ];

  return (
    <>
      {/* Mobile overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-10 bg-gray-900 bg-opacity-50 lg:hidden" />
      )}
      
      {/* Sidebar */}
      <div className={`
        fixed inset-y-0 left-0 z-20 w-64 px-8 py-4 
        bg-white dark:bg-gray-800 
        border-r border-gray-200 dark:border-gray-700
        transform transition-transform duration-300 ease-in-out
        lg:translate-x-0 lg:static lg:inset-0
        ${isOpen ? 'translate-x-0' : '-translate-x-full'}
      `}>
        {/* Logo */}
        <div className="flex items-center justify-center mt-4">
          <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Applismart
          </div>
        </div>

        {/* Navigation */}
        <nav className="mt-12">
          {navigation.map((item) => {
            const isActive = location.pathname === item.href;
            return (
              <Link
                key={item.name}
                to={item.href}
                className={`
                  flex items-center px-6 py-3 mt-4 rounded-xl
                  transition-colors duration-300
                  ${isActive
                    ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg'
                    : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                  }
                `}
              >
                <span className="text-xl mr-4">{item.icon}</span>
                <span className="font-medium">{item.name}</span>
              </Link>
            );
          })}
        </nav>
      </div>
    </>
  );
};

export default Sidebar;