import { FaGavel, FaSearch, FaRegClock } from "react-icons/fa";

export default function Home() {
  return (
    <div className="bg-gray-900 text-white">
      {/* Hero Section */}
      <section className="relative w-full h-screen bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: "url('https://source.unsplash.com/1600x900/?auction,art')" }}>
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative text-center px-6">
          <h1 className="text-5xl font-bold uppercase tracking-wide">Welcome to Auctigon</h1>
          <p className="text-lg mt-4 text-gray-300">Bid on exclusive items and collectibles worldwide.</p>
          <div className="mt-6 flex justify-center space-x-4">
            <a href="/auctions" className="bg-green-600 hover:bg-green-500 px-6 py-3 rounded-lg text-lg font-semibold">
              Start Bidding
            </a>
            <a href="/sell" className="bg-gray-800 hover:bg-gray-700 px-6 py-3 rounded-lg text-lg font-semibold">
              Sell an Item
            </a>
          </div>
        </div>
      </section>

      {/* Live Auctions */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-8">Live Auctions</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {["Classic Car", "Rare Watch", "Antique Painting"].map((item, index) => (
              <div key={index} className="bg-gray-800 p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold">{item}</h3>
                <p className="text-gray-400 mt-2">Current bid: ${Math.floor(Math.random() * 5000) + 1000}</p>
                <button className="mt-4 bg-green-600 hover:bg-green-500 px-4 py-2 rounded">
                  Place Bid
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="bg-gray-800 py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-8">Browse Categories</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {["Art", "Jewelry", "Cars", "Real Estate"].map((category, index) => (
              <div key={index} className="bg-gray-700 p-6 rounded-lg">
                <h3 className="text-lg font-semibold">{category}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-8">How Auctigon Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 bg-gray-800 rounded-lg">
              <FaSearch className="text-green-400 text-4xl mx-auto mb-4" />
              <h3 className="text-xl font-semibold">Find Unique Items</h3>
              <p className="text-gray-400 mt-2">Explore thousands of exclusive auctions.</p>
            </div>
            <div className="p-6 bg-gray-800 rounded-lg">
              <FaGavel className="text-green-400 text-4xl mx-auto mb-4" />
              <h3 className="text-xl font-semibold">Place Your Bid</h3>
              <p className="text-gray-400 mt-2">Bid in real-time and win amazing deals.</p>
            </div>
            <div className="p-6 bg-gray-800 rounded-lg">
              <FaRegClock className="text-green-400 text-4xl mx-auto mb-4" />
              <h3 className="text-xl font-semibold">Win & Receive</h3>
              <p className="text-gray-400 mt-2">Win the auction and get your item delivered.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-gray-900 py-16">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-8">What Our Users Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 bg-gray-800 rounded-lg">
              <p className="text-gray-300">
                "Auctigon helped me sell my rare collectibles at amazing prices!"
              </p>
              <span className="block text-green-400 mt-4">- John D.</span>
            </div>
            <div className="p-6 bg-gray-800 rounded-lg">
              <p className="text-gray-300">
                "The bidding experience is smooth, and I got a fantastic deal on an antique watch."
              </p>
              <span className="block text-green-400 mt-4">- Sarah W.</span>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 text-center">
        <h2 className="text-4xl font-bold mb-4">Ready to Get Started?</h2>
        <p className="text-gray-400">Join Auctigon today and start bidding or selling.</p>
        <div className="mt-6 flex justify-center space-x-4">
          <a href="/auctions" className="bg-green-600 hover:bg-green-500 px-6 py-3 rounded-lg text-lg font-semibold">
            Explore Auctions
          </a>
          <a href="/sell" className="bg-gray-800 hover:bg-gray-700 px-6 py-3 rounded-lg text-lg font-semibold">
            Sell an Item
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
