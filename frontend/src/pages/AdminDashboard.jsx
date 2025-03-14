import { useState } from "react";
import { FaGavel, FaUserShield, FaChartLine, FaPlus, FaTrash, FaEdit, FaUsers } from "react-icons/fa";

export default function AdminDashboard() {
  const [items, setItems] = useState([
    { id: 1, name: "Vintage Watch", status: "Active" },
    { id: 2, name: "Antique Vase", status: "Pending" },
  ]);

  const [users, setUsers] = useState([
    { id: 1, name: "John Doe", role: "User" },
    { id: 2, name: "Jane Smith", role: "Seller" },
  ]);

  const promoteToSeller = (userId) => {
    setUsers(users.map(user => user.id === userId ? { ...user, role: "Seller" } : user));
  };

  const deleteItem = (itemId) => {
    setItems(items.filter(item => item.id !== itemId));
  };

  return (
    <div className="bg-gray-900 min-h-screen p-8 text-white">
      {/* Title */}
      <h1 className="text-4xl font-bold text-green-500 text-center mb-6">Admin Dashboard</h1>

      {/* Admin Features Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Manage Auction Items */}
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
            <FaGavel /> Manage Auction Items
          </h2>
          <ul>
            {items.map(item => (
              <li key={item.id} className="flex justify-between bg-gray-700 p-3 rounded-lg mb-2">
                <span>{item.name} ({item.status})</span>
                <div>
                  <button className="text-blue-400 hover:text-blue-500 mr-2">
                    <FaEdit />
                  </button>
                  <button className="text-red-400 hover:text-red-500" onClick={() => deleteItem(item.id)}>
                    <FaTrash />
                  </button>
                </div>
              </li>
            ))}
          </ul>
          <button className="bg-green-600 hover:bg-green-700 w-full py-2 mt-4 rounded-lg flex items-center justify-center gap-2">
            <FaPlus /> Add Item
          </button>
        </div>

        {/* Promote Users to Sellers */}
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
            <FaUserShield /> Promote Users to Sellers
          </h2>
          <ul>
            {users.map(user => (
              <li key={user.id} className="flex justify-between bg-gray-700 p-3 rounded-lg mb-2">
                <span>{user.name} ({user.role})</span>
                {user.role === "User" && (
                  <button
                    className="bg-green-600 hover:bg-green-700 px-4 py-1 rounded-lg"
                    onClick={() => promoteToSeller(user.id)}
                  >
                    Promote
                  </button>
                )}
              </li>
            ))}
          </ul>
        </div>

        {/* Analytics */}
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
            <FaChartLine /> Analytics Overview
          </h2>
          <p className="text-lg">Total Users: <span className="font-bold">250</span></p>
          <p className="text-lg">Total Sellers: <span className="font-bold">40</span></p>
          <p className="text-lg">Total Bids: <span className="font-bold">1,320</span></p>
          <p className="text-lg">Total Revenue: <span className="font-bold">$25,000</span></p>
        </div>
      </div>

      {/* Recent Activities */}
      <div className="mt-10 bg-gray-800 p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
          <FaUsers /> Recent Activities
        </h2>
        <ul>
          <li className="bg-gray-700 p-3 rounded-lg mb-2">User <span className="font-bold">Alice</span> placed a bid on <span className="font-bold">Classic Car</span></li>
          <li className="bg-gray-700 p-3 rounded-lg mb-2">Admin promoted <span className="font-bold">Bob</span> to seller</li>
          <li className="bg-gray-700 p-3 rounded-lg mb-2">New item <span className="font-bold">Rare Painting</span> added to auction</li>
        </ul>
      </div>
    </div>
  );
}
