import { useState } from "react";
import { Link } from "react-router-dom";


export default function CustomNavbar() {
  const [show, setShow] = useState(false);

  return (
    <>
      {/* Navbar */}
      <nav className="bg-gradient-to-r from-gray-950 via-gray-900 to-gray-950 shadow-lg sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            {/* Brand */}
            <Link to="/" className="flex items-center text-green-300 font-bold text-xl">
              <img
                src="data:image/jpeg;base64,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"
                alt="Logo"
                className="logo-img"
              />
              Aucti<span className="text-gray-100">Gon</span>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center space-x-6">
              <Link to="/" className="text-green-300 hover:text-green-200 flex items-center transition duration-300">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mr-1"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                </svg>
                Home
              </Link>
              <Link to="/auction" className="text-green-300 hover:text-green-200 flex items-center transition duration-300">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mr-1"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                  <path
                    fillRule="evenodd"
                    d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z"
                    clipRule="evenodd"
                  />
                </svg>
                Auctions
              </Link>
              <Link to="/my-bids" className="text-green-300 hover:text-green-200 flex items-center transition duration-300">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mr-1"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4z" />
                  <path
                    fillRule="evenodd"
                    d="M18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z"
                    clipRule="evenodd"
                  />
                </svg>
                My Bids
              </Link>
              <Link to="/profile" className="text-green-300 hover:text-green-200 flex items-center transition duration-300">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mr-1"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                    clipRule="evenodd"
                  />
                </svg>
                Profile
              </Link>

              {/* Search Bar */}
              <div className="flex items-center ml-4">
                <input
                  type="search"
                  placeholder="Search auctions..."
                  className="px-3 py-2 rounded-l-md bg-gray-800 text-green-300 focus:outline-none focus:ring-2 focus:ring-green-300"
                />
                <button className="px-4 py-2 bg-green-500 text-gray-900 rounded-r-md hover:bg-green-600 transition duration-300">
                  Search
                </button>
              </div>

              {/* Auth Buttons */}
              <Link
                to="/login"
                className="px-4 py-2 border border-green-500 text-green-300 rounded-md hover:bg-green-500 hover:text-gray-900 transition duration-300"
              >
                Login
              </Link>
              <Link
                to="/register"
                className="px-4 py-2 bg-green-500 text-gray-900 rounded-md hover:bg-green-600 transition duration-300"
              >
                Sign Up
              </Link>
            </div>

            {/* Mobile Toggle Button */}
            <button
              onClick={() => setShow(!show)}
              className="lg:hidden flex items-center space-x-2 px-4 py-2 rounded-md bg-green-500 text-gray-900 shadow-md hover:bg-green-600 hover:shadow-lg transition duration-300"
            >
              <span className="text-sm font-semibold">Menu</span>
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Offcanvas Menu */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-75 z-50 transition-opacity duration-300 ${
          show ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setShow(false)}
      >
        <div
          className={`fixed top-0 right-0 h-full w-64 bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950 shadow-lg transform transition-transform duration-300 ${
            show ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex justify-between items-center p-4 border-b border-gray-800">
            <span className="text-green-300 font-bold text-xl">AuctiGon</span>
            <button
              onClick={() => setShow(false)}
              className="text-green-300 hover:text-green-200 focus:outline-none"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            </button>
          </div>
          <div className="p-4">
            <Link
              to="/"
              className="block text-green-300 hover:text-green-200 mb-4 transition duration-300"
              onClick={() => setShow(false)}
            >
              Home
            </Link>
            <Link
              to="/auction"
              className="block text-green-300 hover:text-green-200 mb-4 transition duration-300"
              onClick={() => setShow(false)}
            >
              Auctions
            </Link>
            <Link
              to="/my-bids"
              className="block text-green-300 hover:text-green-200 mb-4 transition duration-300"
              onClick={() => setShow(false)}
            >
              My Bids
            </Link>
            <Link
              to="/profile"
              className="block text-green-300 hover:text-green-200 mb-4 transition duration-300"
              onClick={() => setShow(false)}
            >
              Profile
            </Link>
            <div className="mt-6">
              <Link
                to="/login"
                className="block w-full px-4 py-2 border  border-green-500 text-green-300 text-center rounded-md hover:bg-green-500 hover:text-gray-900 mb-3 transition duration-300"
                onClick={() => setShow(false)}
              >
                Login
              </Link>
              <Link
                to="/register"
                className="block w-full px-4 py-2 bg-green-500 text-gray-900 text-center rounded-md hover:bg-green-600 transition duration-300"
                onClick={() => setShow(false)}
              >
                Sign Up
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}