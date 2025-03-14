import { FaClock, FaCheckCircle, FaTimesCircle, FaArrowUp } from "react-icons/fa";
import { useState, useEffect } from "react";

const userBids = [
  {
    id: 1,
    name: "Vintage Rolex Watch",
    image: "https://source.unsplash.com/400x300/?watch",
    myBid: 1200,
    highestBid: 1250,
    endTime: new Date().getTime() + 60000 * 10, // 10 minutes left
  },
  {
    id: 2,
    name: "Classic Sports Car",
    image: "https://source.unsplash.com/400x300/?car",
    myBid: 25000,
    highestBid: 24500,
    endTime: new Date().getTime() + 60000 * 5, // 5 minutes left
  },
  {
    id: 3,
    name: "Antique Painting",
    image: "https://source.unsplash.com/400x300/?painting",
    myBid: 5000,
    highestBid: 5100,
    endTime: new Date().getTime() + 60000 * 8, // 8 minutes left
  },
];

export default function MyBids() {
  const [timeLeft, setTimeLeft] = useState({});

  useEffect(() => {
    const interval = setInterval(() => {
      const newTimes = {};
      userBids.forEach((bid) => {
        const timeRemaining = bid.endTime - new Date().getTime();
        newTimes[bid.id] = timeRemaining > 0 ? timeRemaining : 0;
      });
      setTimeLeft(newTimes);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-gray-900 text-white min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full h-80 bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: "url('https://source.unsplash.com/1600x900/?auction,bidding')" }}>
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        <div className="relative text-center px-6">
          <h1 className="text-5xl font-bold uppercase tracking-wide">My Bids</h1>
          <p className="text-lg mt-4 text-gray-300">Track your bids and stay ahead of the competition.</p>
        </div>
      </section>

      {/* Bidding Section */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-semibold mb-6">Your Active Bids</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {userBids.map((bid) => (
              <div key={bid.id} className="bg-gray-800 p-6 rounded-lg shadow-lg relative">
                <img src={bid.image} alt={bid.name} className="w-full h-52 object-cover rounded-lg mb-4" />
                <h3 className="text-2xl font-semibold">{bid.name}</h3>
                <p className="text-gray-400 mt-2 flex items-center">
                  Your Bid: <span className="ml-2 font-bold text-green-400">${bid.myBid}</span>
                </p>
                <p className="text-gray-400 mt-2 flex items-center">
                  Highest Bid: <span className="ml-2 font-bold text-yellow-400">${bid.highestBid}</span>
                </p>
                <p className="mt-2 flex items-center text-red-400">
                  <FaClock className="mr-2" /> Time Left: {timeLeft[bid.id] > 0 ?
                    new Date(timeLeft[bid.id]).toISOString().substr(14, 5) : "Auction Ended"}
                </p>

                {/* Winning/Losing Status */}
                {bid.myBid >= bid.highestBid ? (
                  <p className="mt-4 text-green-400 flex items-center">
                    <FaCheckCircle className="mr-2" /> You are currently winning!
                  </p>
                ) : (
                  <p className="mt-4 text-red-400 flex items-center">
                    <FaTimesCircle className="mr-2" /> You have been outbid!
                  </p>
                )}

                {/* Rebid Button */}
                <button
                  className="mt-4 bg-green-600 hover:bg-green-500 px-4 py-2 rounded w-full flex items-center justify-center"
                  disabled={timeLeft[bid.id] <= 0}
                >
                  <FaArrowUp className="mr-2" /> Increase Bid
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bidding Tips Section */}
      <section className="bg-gray-800 py-16 text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl font-bold mb-6">Bidding Tips</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 bg-gray-700 rounded-lg">
              <FaClock className="text-green-400 text-4xl mx-auto mb-4" />
              <h3 className="text-xl font-semibold">Bid Early</h3>
              <p className="text-gray-300">Placing an early bid gives you a competitive edge.</p>
            </div>
            <div className="p-6 bg-gray-700 rounded-lg">
              <FaArrowUp className="text-green-400 text-4xl mx-auto mb-4" />
              <h3 className="text-xl font-semibold">Increase Your Bid</h3>
              <p className="text-gray-300">Keep an eye on the highest bid and adjust accordingly.</p>
            </div>
            <div className="p-6 bg-gray-700 rounded-lg">
              <FaCheckCircle className="text-green-400 text-4xl mx-auto mb-4" />
              <h3 className="text-xl font-semibold">Win Smart</h3>
              <p className="text-gray-300">Use strategy and timing to secure your win.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 text-center">
        <h2 className="text-4xl font-bold mb-4">Want to Bid on More Items?</h2>
        <p className="text-gray-400">Explore new auctions and increase your chances of winning.</p>
        <div className="mt-6 flex justify-center space-x-4">
          <a href="/auction" className="bg-green-600 hover:bg-green-500 px-6 py-3 rounded-lg text-lg font-semibold">
            View Auctions
          </a>
          <a href="/profile" className="bg-gray-800 hover:bg-gray-700 px-6 py-3 rounded-lg text-lg font-semibold">
            View Profile
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-center py-6">
        <p className="text-gray-400">&copy; {new Date().getFullYear()} Auctigon. All rights reserved.</p>
      </footer>
    </div>
  );
}
