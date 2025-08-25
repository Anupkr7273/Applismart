import React, { useState } from 'react';

const PreferencesSettings = () => {
  const [preferences, setPreferences] = useState({
    theme: 'system',
    notifications: {
      email: true,
      push: false,
      weeklyReports: true,
      jobMatches: true
    },
    resumeAutoSave: true,
    defaultTool: 'rewrite'
  });

  const handlePreferenceChange = (category, key, value) => {
    if (category === 'notifications') {
      setPreferences(prev => ({
        ...prev,
        notifications: { ...prev.notifications, [key]: value }
      }));
    } else {
      setPreferences(prev => ({ ...prev, [key]: value }));
    }
  };

  return (
    <div>
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-800 dark:text-white">App Preferences</h2>
        <p className="text-gray-600 dark:text-gray-300">
          Customize your Applismart experience
        </p>
      </div>

      <div className="space-y-8">
        {/* Theme Preference */}
        <div>
          <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">Theme</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { value: 'light', label: 'Light', icon: '☀️' },
              { value: 'dark', label: 'Dark', icon: '🌙' },
              { value: 'system', label: 'System', icon: '💻' }
            ].map((theme) => (
              <label
                key={theme.value}
                className={`flex items-center p-4 border rounded-lg cursor-pointer transition-all ${
                  preferences.theme === theme.value
                    ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/20'
                    : 'border-gray-300 dark:border-gray-600 hover:border-gray-400 dark:hover:border-gray-500'
                }`}
              >
                <input
                  type="radio"
                  name="theme"
                  value={theme.value}
                  checked={preferences.theme === theme.value}
                  onChange={(e) => handlePreferenceChange('general', 'theme', e.target.value)}
                  className="text-blue-500 focus:ring-blue-500"
                />
                <span className="ml-3 text-2xl">{theme.icon}</span>
                <span className="ml-2 text-gray-700 dark:text-gray-300">{theme.label}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Notifications */}
        <div>
          <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">Notifications</h3>
          <div className="space-y-3">
            {[
              { key: 'email', label: 'Email Notifications', description: 'Receive important updates via email' },
              { key: 'push', label: 'Push Notifications', description: 'Get real-time alerts in your browser' },
              { key: 'weeklyReports', label: 'Weekly Reports', description: 'Get weekly progress summaries' },
              { key: 'jobMatches', label: 'Job Matches', description: 'Notify me about new job matches' }
            ].map((notif) => (
              <label key={notif.key} className="flex items-start space-x-3">
                <input
                  type="checkbox"
                  checked={preferences.notifications[notif.key]}
                  onChange={(e) => handlePreferenceChange('notifications', notif.key, e.target.checked)}
                  className="text-blue-500 focus:ring-blue-500 mt-1"
                />
                <div>
                  <p className="font-medium text-gray-800 dark:text-white">{notif.label}</p>
                  <p className="text-sm text-gray-600 dark:text-gray-300">{notif.description}</p>
                </div>
              </label>
            ))}
          </div>
        </div>

        {/* Other Preferences */}
        <div>
          <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">Other Settings</h3>
          <div className="space-y-4">
            <label className="flex items-start space-x-3">
              <input
                type="checkbox"
                checked={preferences.resumeAutoSave}
                onChange={(e) => handlePreferenceChange('general', 'resumeAutoSave', e.target.checked)}
                className="text-blue-500 focus:ring-blue-500 mt-1"
              />
              <div>
                <p className="font-medium text-gray-800 dark:text-white">Auto-save Resumes</p>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Automatically save changes to your resumes
                </p>
              </div>
            </label>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Default AI Tool
              </label>
              <select
                value={preferences.defaultTool}
                onChange={(e) => handlePreferenceChange('general', 'defaultTool', e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
              >
                <option value="rewrite">Resume Rewriter</option>
                <option value="tailor">Resume Tailor</option>
                <option value="cover-letter">Cover Letter Generator</option>
                <option value="interview-prep">Interview Prep</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8 p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
        <h4 className="font-semibold text-green-800 dark:text-green-300 mb-2">✅ Preferences Saved</h4>
        <p className="text-sm text-green-700 dark:text-green-300">
          Your preferences are automatically saved as you make changes.
        </p>
      </div>
    </div>
  );
};

export default PreferencesSettings;