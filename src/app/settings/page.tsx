// pages/settings/page.tsx
'use client'; // This marks the component as a Client Component

import React, { useState } from 'react';

const Settings = () => {
  const [username, setUsername] = useState('Anasbilal');
  const [email, setEmail] = useState('anasbial2020@gmail.com');
  const [notifications, setNotifications] = useState(true);
  const [darkMode, setDarkMode] = useState(false);

  // Handle form submission
  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    // Implement save functionality (e.g., API call)
    console.log('Settings saved:', { username, email, notifications, darkMode });
    alert('Settings saved successfully!');
  };

  return (
    <div className="min-h-screen bg-yellow-400 flex flex-col items-center p-8">
      <h1 className="text-3xl font-bold mb-6">Settings Page</h1>

      <form onSubmit={handleSave} className="bg-white shadow-md rounded-lg p-6 w-full max-w-lg">
        {/* Profile Information */}
        <div className="mb-4">
          <label className="block text-gray-700 mb-2" htmlFor="username">
            Username
          </label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 mb-2" htmlFor="email">
            Email
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Account Settings */}
        <div className="mb-4">
          <h2 className="text-lg font-semibold mb-2">Account Settings</h2>
          <div className="flex items-center">
            <input
              type="checkbox"
              id="notifications"
              checked={notifications}
              onChange={(e) => setNotifications(e.target.checked)}
              className="mr-2"
            />
            <label htmlFor="notifications" className="text-gray-700">
              Enable Notifications
            </label>
          </div>
          <div className="flex items-center mt-2">
            <input
              type="checkbox"
              id="darkMode"
              checked={darkMode}
              onChange={(e) => setDarkMode(e.target.checked)}
              className="mr-2"
            />
            <label htmlFor="darkMode" className="text-gray-700">
              Dark Mode
            </label>
          </div>
        </div>

        {/* Save Button */}
        <div className="flex justify-end">
          <button
            type="submit"
            className="bg-blue-600 text-white rounded-md px-4 py-2 hover:bg-blue-700 transition duration-200"
          >
            Save Settings
          </button>
        </div>
      </form>
    </div>
  );
};

export default Settings;