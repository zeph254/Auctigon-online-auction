import { useState } from "react";
import { FaEdit, FaSignOutAlt, FaGavel, FaCheckCircle, FaHourglassHalf, FaCamera } from "react-icons/fa";

export default function Profile() {
  const [user, setUser] = useState({
    name: "John Doe",
    username: "@johndoe",
    email: "johndoe@example.com",
    profilePic: "https://randomuser.me/api/portraits/men/85.jpg",
    totalBids: 24,
    wonAuctions: 5,
    activeBids: 3,
  });

  return (
    <div className="bg-gray-900 text-white min-h-screen flex flex-col items-center py-12">
      {/* Profile Header */}
      <div className="w-full max-w-4xl bg-gray-800 p-8 rounded-lg shadow-lg text-center">
        <div className="relative inline-block">
          <img
            src={user.profilePic}
            alt="Profile"
            className="w-32 h-32 rounded-full border-4 border-green-500 shadow-md"
          />
          <button
            className="absolute bottom-2 right-2 bg-gray-700 p-2 rounded-full hover:bg-green-600 transition"
          >
            <FaCamera className="text-white" />
          </button>
        </div>
        <h2 className="text-3xl font-bold mt-4">{user.name}</h2>
        <p className="text-gray-400">{user.username}</p>
        <p className="text-gray-400">{user.email}</p>

        {/* Profile Actions */}
        <div className="flex justify-center space-x-4 mt-6">
          <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded flex items-center">
            <FaEdit className="mr-2" /> Edit Profile
          </button>
          <button className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded flex items-center">
            <FaSignOutAlt className="mr-2" /> Logout
          </button>
        </div>
      </div>

      {/* Auction Stats */}
      <div className="w-full max-w-4xl mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg text-center">
          <FaGavel className="text-green-400 text-4xl mx-auto mb-4" />
          <h3 className="text-2xl font-semibold">{user.totalBids}</h3>
          <p className="text-gray-400">Total Bids</p>
        </div>
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg text-center">
          <FaCheckCircle className="text-green-400 text-4xl mx-auto mb-4" />
          <h3 className="text-2xl font-semibold">{user.wonAuctions}</h3>
          <p className="text-gray-400">Auctions Won</p>
        </div>
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg text-center">
          <FaHourglassHalf className="text-green-400 text-4xl mx-auto mb-4" />
          <h3 className="text-2xl font-semibold">{user.activeBids}</h3>
          <p className="text-gray-400">Active Bids</p>
        </div>
      </div>

      {/* CTA Buttons */}
      <div className="mt-10 flex space-x-4">
        <a href="/auction" className="bg-green-600 hover:bg-green-500 px-6 py-3 rounded-lg text-lg font-semibold">
          Browse Auctions
        </a>
        <a href="/mybids" className="bg-gray-800 hover:bg-gray-700 px-6 py-3 rounded-lg text-lg font-semibold">
          View My Bids
        </a>
      </div>

      {/* Footer */}
      <footer className="mt-10 text-gray-500 text-center">
        <p>&copy; {new Date().getFullYear()} Auctigon. All Rights Reserved.</p>
      </footer>
    </div>
  );
}
