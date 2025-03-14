export default function About() {
    return (
      <div className="bg-gray-900 text-white">
        {/* Hero Section */}
        <section className="relative h-72 flex items-center justify-center bg-cover bg-center" 
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1563013544-824ae1b704d3')" }}>
          <div className="absolute inset-0 bg-black/50"></div>
          <h1 className="relative text-4xl font-bold">About Auctigon</h1>
        </section>
  
        {/* Introduction */}
        <section className="max-w-5xl mx-auto text-center py-12">
          <h2 className="text-3xl font-bold text-green-400 mb-4">Who We Are</h2>
          <p className="text-gray-300 text-lg">
            Auctigon is a next-gen online auction house that connects buyers and sellers from around the world.
            Whether you're bidding on rare collectibles or selling exclusive items, we provide a seamless auction experience.
          </p>
        </section>
  
        {/* Timeline Section */}
        <section className="max-w-5xl mx-auto py-12">
          <h2 className="text-3xl font-bold text-center text-green-400 mb-6">Our Journey</h2>
          <div className="relative border-l-4 border-green-500 pl-6 space-y-6">
            <div>
              <h3 className="text-xl font-semibold">🚀 2020 - Auctigon Was Founded</h3>
              <p className="text-gray-300">Started as a small project to revolutionize online auctions.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold">📈 2021 - First 1,000 Auctions</h3>
              <p className="text-gray-300">We hit a major milestone with over 1,000 successful auctions.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold">🌎 2023 - Global Expansion</h3>
              <p className="text-gray-300">Auctigon is now a global platform with thousands of users worldwide.</p>
            </div>
          </div>
        </section>
  
        {/* Testimonials */}
        <section className="bg-green-800 py-12">
          <h2 className="text-3xl font-bold text-center text-white mb-6">What Our Users Say</h2>
          <div className="flex justify-center space-x-8 max-w-4xl mx-auto">
            <div className="bg-white text-black p-6 rounded-lg shadow-md w-80">
              <p className="italic">"Auctigon helped me sell my rare collectibles easily!"</p>
              <h4 className="mt-4 font-bold">- Emily R.</h4>
            </div>
            <div className="bg-white text-black p-6 rounded-lg shadow-md w-80">
              <p className="italic">"The best online auction experience I've had!"</p>
              <h4 className="mt-4 font-bold">- James P.</h4>
            </div>
          </div>
        </section>
  
        {/* CTA Section */}
        <section className="text-center py-10 bg-green-700">
          <h2 className="text-2xl font-bold">Join Auctigon Today!</h2>
          <p className="text-gray-200">Start bidding or selling now and be part of the future of auctions.</p>
          <a href="/register" className="mt-4 inline-block px-6 py-3 bg-white text-green-700 rounded-lg font-semibold hover:bg-gray-200 transition">
            Get Started
          </a>
        </section>
      </div>
    );
  }
  