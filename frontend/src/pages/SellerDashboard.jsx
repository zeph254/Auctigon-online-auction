import { useState } from "react";
import { FaGavel, FaChartBar, FaPlus, FaEdit, FaTrash, FaShoppingCart } from "react-icons/fa";

export default function SellerDashboard() {
  const [auctions, setAuctions] = useState([
    { id: 1, name: "Rare Coin Collection", status: "Active", bids: 5, highestBid: "$500" },
    { id: 2, name: "Luxury Handbag", status: "Sold", bids: 10, highestBid: "$1200" },
  ]);

  const deleteAuction = (auctionId) => {
    setAuctions(auctions.filter(auction => auction.id !== auctionId));
  };

  return (
    <div className="bg-gray-900 min-h-screen p-8 text-white">
      {/* Title */}
      <h1 className="text-4xl font-bold text-green-500 text-center mb-6">Seller Dashboard</h1>

      {/* Seller Features Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Manage Listings */}
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
            <FaGavel /> Manage Your Auctions
          </h2>
          <ul>
            {auctions.map(auction => (
              <li key={auction.id} className="flex justify-between bg-gray-700 p-3 rounded-lg mb-2">
                <span>{auction.name} ({auction.status})</span>
                <div>
                  <button className="text-blue-400 hover:text-blue-500 mr-2">
                    <FaEdit />
                  </button>
                  <button className="text-red-400 hover:text-red-500" onClick={() => deleteAuction(auction.id)}>
                    <FaTrash />
                  </button>
                </div>
              </li>
            ))}
          </ul>
          <button className="bg-green-600 hover:bg-green-700 w-full py-2 mt-4 rounded-lg flex items-center justify-center gap-2">
            <FaPlus /> Add Auction
          </button>
        </div>

        {/* Sales Analytics */}
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
            <FaChartBar /> Sales Analytics
          </h2>
          <p className="text-lg">Total Items Sold: <span className="font-bold">8</span></p>
          <p className="text-lg">Total Revenue: <span className="font-bold">$5,000</span></p>
          <p className="text-lg">Highest Bid Received: <span className="font-bold">$2,500</span></p>
        </div>

        {/* Bidding Activity */}
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
            <FaShoppingCart /> Bidding Activity
          </h2>
          <ul>
            <li className="bg-gray-700 p-3 rounded-lg mb-2">Bid of <span className="font-bold">$750</span> placed on <span className="font-bold">Vintage Watch</span></li>
            <li className="bg-gray-700 p-3 rounded-lg mb-2">Bid of <span className="font-bold">$1,200</span> placed on <span className="font-bold">Classic Painting</span></li>
          </ul>
        </div>
      </div>
    </div>
  );
}
