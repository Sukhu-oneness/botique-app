'use client';

import { useTheme } from 'next-themes';

export default function SignupPage() {
  const { theme } = useTheme(); // Dynamically get the current theme

  return (
    <div
      className={`flex items-center justify-center h-screen ${
        theme === 'dark' ? 'bg-gray-900' : 'bg-gray-100'
      }`}
    >
      <div
        className={`w-full max-w-md p-6 rounded-lg shadow-md ${
          theme === 'dark' ? 'bg-gray-800 text-gray-100' : 'bg-white text-gray-800'
        }`}
      >
        <h1 className="text-2xl font-bold text-center mb-6">Sign Up</h1>
        <form className="space-y-4">
          <div>
            <label
              htmlFor="name"
              className={`block text-sm font-medium mb-1 ${
                theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
              }`}
            >
              Full Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Enter your full name"
              className={`w-full px-4 py-2 border rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 text-sm ${
                theme === 'dark'
                  ? 'border-gray-600 bg-gray-700 text-gray-100'
                  : 'border-gray-300 bg-gray-50 text-gray-900'
              }`}
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className={`block text-sm font-medium mb-1 ${
                theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
              }`}
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              className={`w-full px-4 py-2 border rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 text-sm ${
                theme === 'dark'
                  ? 'border-gray-600 bg-gray-700 text-gray-100'
                  : 'border-gray-300 bg-gray-50 text-gray-900'
              }`}
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className={`block text-sm font-medium mb-1 ${
                theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
              }`}
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter your password"
              className={`w-full px-4 py-2 border rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 text-sm ${
                theme === 'dark'
                  ? 'border-gray-600 bg-gray-700 text-gray-100'
                  : 'border-gray-300 bg-gray-50 text-gray-900'
              }`}
            />
          </div>
          <div>
            <label
              htmlFor="confirm-password"
              className={`block text-sm font-medium mb-1 ${
                theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
              }`}
            >
              Confirm Password
            </label>
            <input
              type="password"
              id="confirm-password"
              name="confirm-password"
              placeholder="Confirm your password"
              className={`w-full px-4 py-2 border rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 text-sm ${
                theme === 'dark'
                  ? 'border-gray-600 bg-gray-700 text-gray-100'
                  : 'border-gray-300 bg-gray-50 text-gray-900'
              }`}
            />
          </div>
          <button
            type="submit"
            className={`w-full px-4 py-2 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 text-sm ${
              theme === 'dark'
                ? 'bg-blue-500 hover:bg-blue-600 focus:ring-offset-gray-900'
                : 'bg-blue-600 hover:bg-blue-700 focus:ring-offset-gray-100'
            }`}
          >
            Sign Up
          </button>
        </form>
        <p
          className={`mt-4 text-sm text-center ${
            theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
          }`}
        >
          Already have an account?{' '}
          <a
            href="/login"
            className={`hover:underline ${
              theme === 'dark' ? 'text-blue-400' : 'text-blue-500'
            }`}
          >
            Log in
          </a>
        </p>
      </div>
    </div>
  );
}
