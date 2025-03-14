import React, { useState } from "react";
import { FaUser, FaEnvelope, FaLock } from "react-icons/fa";

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== repeatPassword) {
      alert("Passwords do not match!");
      return;
    }
    console.log("Username:", username, "Email:", email, "Password:", password);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-green-900 to-green-700 px-4">
      <div className="bg-white/10 backdrop-blur-lg shadow-lg rounded-2xl p-8 max-w-md w-full text-white transform transition-all duration-500 hover:scale-105 border border-white/20">
        <h2 className="text-3xl font-bold text-center mb-6 text-green-300">Create an Account</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Username Input */}
          <div className="relative">
            <FaUser className="absolute left-4 top-4 text-green-400" />
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full pl-12 p-4 bg-transparent border-2 border-white/20 text-white rounded-lg focus:outline-none focus:border-green-400 focus:ring-2 focus:ring-green-400 transition-all"
              required
            />
          </div>

          {/* Email Input */}
          <div className="relative">
            <FaEnvelope className="absolute left-4 top-4 text-green-400" />
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full pl-12 p-4 bg-transparent border-2 border-white/20 text-white rounded-lg focus:outline-none focus:border-green-400 focus:ring-2 focus:ring-green-400 transition-all"
              required
            />
          </div>

          {/* Password Input */}
          <div className="relative">
            <FaLock className="absolute left-4 top-4 text-green-400" />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full pl-12 p-4 bg-transparent border-2 border-white/20 text-white rounded-lg focus:outline-none focus:border-green-400 focus:ring-2 focus:ring-green-400 transition-all"
              required
            />
          </div>

          {/* Repeat Password Input */}
          <div className="relative">
            <FaLock className="absolute left-4 top-4 text-green-400" />
            <input
              type="password"
              placeholder="Repeat Password"
              value={repeatPassword}
              onChange={(e) => setRepeatPassword(e.target.value)}
              className="w-full pl-12 p-4 bg-transparent border-2 border-white/20 text-white rounded-lg focus:outline-none focus:border-green-400 focus:ring-2 focus:ring-green-400 transition-all"
              required
            />
          </div>

          {/* Sign Up Button */}
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-green-500 to-green-400 text-white p-4 rounded-lg font-semibold hover:from-green-400 hover:to-green-300 transition-all duration-300 transform hover:scale-105 shadow-md"
          >
            Sign Up
          </button>
        </form>

        {/* Login Redirect */}
        <p className="text-center mt-6 text-green-200">
          Already have an account?{" "}
          <a
            href="/login"
            className="text-green-400 hover:underline hover:text-green-300 transition-all"
          >
            Login Here
          </a>
        </p>
      </div>
    </div>
  );
};

export default Register;
