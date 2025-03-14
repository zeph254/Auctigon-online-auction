import React from "react";

const Login = () => {
  return (
    <div className="flex h-screen">
      {/* Left Side - Background Image */}
      <div
        className="w-1/2 bg-cover bg-center bg-no-repeat relative"
        style={{
          backgroundImage:
            "url('https://nypost.com/wp-content/uploads/sites/2/2019/04/190413-salvatore-mundi.jpg?quality=75&strip=all')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div> {/* Dark overlay */}
      </div>

      {/* Right Side - Login Form */}
      <div className="w-1/2 flex items-center justify-center bg-green-900">
        <form className="bg-green-800 bg-opacity-90 backdrop-blur-md p-8 rounded-lg shadow-2xl w-96 text-white transition-all duration-300 ease-in-out transform hover:scale-105">
          <h2 className="text-2xl font-bold mb-6 text-green-200 text-center">
            Welcome Back!
          </h2>
          <div className="mb-4">
            <label
              className="block text-green-200 text-sm font-semibold mb-2"
              htmlFor="username"
            >
              Username or Email Address
            </label>
            <input
              type="text"
              id="username"
              placeholder="Enter your username or email"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-100 bg-green-700 leading-tight focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent transition-all duration-300 ease-in-out"
              required
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-green-200 text-sm font-semibold mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-100 bg-green-700 leading-tight focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent transition-all duration-300 ease-in-out"
              required
            />
          </div>
          <div className="flex items-center justify-between mb-4">
            <div>
              <input
                type="checkbox"
                className="mr-2 leading-tight accent-green-400"
              />
              <span className="text-sm text-green-200">Remember Me</span>
            </div>
            <a
              href="#"
              className="text-sm text-green-400 hover:underline hover:text-green-300 transition-all duration-300"
            >
              Forgot Password?
            </a>
          </div>
          <button
            type="submit"
            className="bg-green-600 hover:bg-green-500 text-white font-semibold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full mb-4 transition-all duration-300 ease-in-out"
          >
            Log In
          </button>
          <p className="text-center text-green-200 text-sm">
            Don't have an account?{" "}
            <a
              href="/register"
              className="text-green-400 hover:underline hover:text-green-300 transition-all duration-300"
            >
              Register Here
            </a>
          </p>
          <div className="mt-6 text-center">
            <a
              href="/"
              className="text-sm text-green-400 hover:underline hover:text-green-300 transition-all duration-300"
            >
              &lt; Back to Home
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
