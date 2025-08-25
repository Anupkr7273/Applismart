import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const SettingsLayout = ({ children }) => {
  const location = useLocation();
  
  const settingsSections = [
    {
      name: 'Profile',
      href: '/settings/profile',
      icon: '👤',
      description: 'Personal information'
    },
    {
      name: 'Preferences',
      href: '/settings/preferences', 
      icon: '⚙️',
      description: 'App settings'
    },
    {
      name: 'Security',
      href: '/settings/security',
      icon: '🔒',
      description: 'Password & security'
    },
    {
      name: 'Subscription',
      href: '/settings/subscription',
      icon: '💎',
      description: 'Billing & plan'
    }
  ];

  return (
    <div>
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800 dark:text-white">Settings</h1>
        <p className="text-gray-600 dark:text-gray-300 mt-2">
          Manage your account preferences and settings
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mb-8">
        {settingsSections.map((section) => {
          const isActive = location.pathname === section.href;
          return (
            <Link
              key={section.name}
              to={section.href}
              className={`p-4 rounded-2xl border transition-all duration-300 ${
                isActive
                  ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg border-transparent'
                  : 'bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 hover:shadow-md hover:border-blue-200 dark:hover:border-blue-800'
              }`}
            >
              <div className="text-center">
                <div className="text-3xl mb-2">{section.icon}</div>
                <h3 className={`font-semibold ${isActive ? 'text-white' : 'text-gray-800 dark:text-white'}`}>
                  {section.name}
                </h3>
                <p className={`text-sm mt-1 ${isActive ? 'text-blue-100' : 'text-gray-600 dark:text-gray-300'}`}>
                  {section.description}
                </p>
              </div>
            </Link>
          );
        })}
      </div>

      {/* Settings Content */}
      <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-100 dark:border-gray-700">
        {children}
      </div>
    </div>
  );
};

export default SettingsLayout;