import React, { useState } from 'react';

const Register = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== repeatPassword) {
      alert("Passwords do not match!");
      return;
    }
    console.log('Username:', username, 'Email:', email, 'Password:', password);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-green-900 to-green-800">
      <div className="bg-green-800 rounded-2xl shadow-2xl p-8 max-w-md w-full text-white transform transition-all duration-500 hover:scale-105">
        <h2 className="text-3xl font-bold text-center mb-8 text-green-300">Sign Up</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <input
              type="text"
              placeholder="Enter your username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full p-4 border-2 border-green-600 bg-green-700 text-white rounded-lg focus:outline-none focus:border-green-400 focus:ring-2 focus:ring-green-400 transition-all"
              required
            />
          </div>
          <div>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-4 border-2 border-green-600 bg-green-700 text-white rounded-lg focus:outline-none focus:border-green-400 focus:ring-2 focus:ring-green-400 transition-all"
              required
            />
          </div>
          <div>
            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-4 border-2 border-green-600 bg-green-700 text-white rounded-lg focus:outline-none focus:border-green-400 focus:ring-2 focus:ring-green-400 transition-all"
              required
            />
          </div>
          <div>
            <input
              type="password"
              placeholder="Repeat your password"
              value={repeatPassword}
              onChange={(e) => setRepeatPassword(e.target.value)}
              className="w-full p-4 border-2 border-green-600 bg-green-700 text-white rounded-lg focus:outline-none focus:border-green-400 focus:ring-2 focus:ring-green-400 transition-all"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-green-600 to-green-500 text-white p-4 rounded-lg font-semibold hover:from-green-500 hover:to-green-400 transition-all duration-300 transform hover:scale-105"
          >
            Sign Up
          </button>
        </form>
        <p className="text-center mt-6 text-green-200">
          Already a member?{' '}
          <a href="/login" className="text-green-400 hover:underline hover:text-green-300 transition-all">
            Login Now
          </a>
        </p>
      </div>
    </div>
  );
};

export default Register;