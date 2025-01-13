import React, { useState } from 'react';

const Login = () => {
  const [isLogin, setIsLogin] = useState(true); // Toggle between login and signup

  const toggleForm = () => {
    setIsLogin((prev) => !prev);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic
    if (isLogin) {
      console.log('Login form submitted');
    } else {
      console.log('Signup form submitted');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 bg-gradient-to-r from-gray-800 to-black">
      <div className="bg-yellow-300 p-8 rounded-lg shadow-lg w-96 transform transition-all duration-500 hover:scale-105 hover:shadow-2xl">
        <h2 className="text-2xl font-bold text-gray-800 text-center mb-6">
          {isLogin ? 'Login' : 'Sign Up'}
        </h2>
        <form onSubmit={handleSubmit}>
          {!isLogin && (
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full mt-1 p-2 border border-gray-300 rounded-lg"
                placeholder="Enter your name"
                required
              />
            </div>
          )}
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full mt-1 p-2 border border-gray-300 rounded-lg"
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full mt-1 p-2 border border-gray-300 rounded-lg"
              placeholder="Enter your password"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-300"
          >
            {isLogin ? 'Login' : 'Sign Up'}
          </button>
        </form>
        <p className="mt-4 text-sm text-center text-gray-600">
          {isLogin ? "Don't have an account?" : 'Already have an account?'}{' '}
          <button
            onClick={toggleForm}
            className="text-blue-500 font-medium hover:underline"
          >
            {isLogin ? 'Sign Up' : 'Login'}
          </button>
        </p>
      </div>
    </div>
  );
};

export default Login;
