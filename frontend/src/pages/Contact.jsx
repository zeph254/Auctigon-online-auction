export default function Contact() {
    return (
      <div className="bg-gray-900 text-white">
        {/* Hero Section */}
        <section className="relative h-72 flex items-center justify-center bg-cover bg-center"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1521747116042-5a810fda9664')" }}>
          <div className="absolute inset-0 bg-black/50"></div>
          <h1 className="relative text-4xl font-bold">Contact Us</h1>
        </section>
  
        {/* Contact Info Section */}
        <section className="max-w-5xl mx-auto text-center py-12">
          <h2 className="text-3xl font-bold text-green-400 mb-4">Get In Touch</h2>
          <p className="text-gray-300 text-lg">Have questions? Reach out to us anytime!</p>
  
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
            <div className="bg-gray-800 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold">📍 Our Location</h3>
              <p className="text-gray-400">123 Auctigon Street, New York, NY</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold">📞 Call Us</h3>
              <p className="text-gray-400">+1 234 567 890</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold">📧 Email Us</h3>
              <p className="text-gray-400">support@auctigon.com</p>
            </div>
          </div>
        </section>
  
        {/* Contact Form */}
        <section className="max-w-4xl mx-auto py-12">
          <h2 className="text-3xl font-bold text-center text-green-400 mb-6">Send Us a Message</h2>
          <form className="bg-gray-800 p-8 rounded-lg shadow-lg">
            <div className="mb-4">
              <label className="block text-gray-400 text-sm font-semibold mb-2">Full Name</label>
              <input type="text" placeholder="Enter your name"
                className="w-full p-3 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-green-400" required />
            </div>
            <div className="mb-4">
              <label className="block text-gray-400 text-sm font-semibold mb-2">Email</label>
              <input type="email" placeholder="Enter your email"
                className="w-full p-3 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-green-400" required />
            </div>
            <div className="mb-4">
              <label className="block text-gray-400 text-sm font-semibold mb-2">Message</label>
              <textarea rows="4" placeholder="Write your message..."
                className="w-full p-3 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-green-400" required></textarea>
            </div>
            <button type="submit"
              className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-3 rounded transition">
              Send Message
            </button>
          </form>
        </section>
  
        {/* Map Section */}
        <section className="py-12">
          <h2 className="text-3xl font-bold text-center text-green-400 mb-6">Find Us Here</h2>
          <div className="max-w-5xl mx-auto">
          <iframe 
            className="w-full h-72 rounded-lg shadow-lg"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15955.091635744276!2d36.8219467!3d-1.2863895!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f173b15e4fd8d%3A0xf8e35a9bbf4603d6!2sNairobi%2C%20Kenya!5e0!3m2!1sen!2sus!4v1710264845248!5m2!1sen!2sus"
            allowFullScreen
            loading="lazy">
            </iframe>

          </div>
        </section>
  
        {/* Live Chat Button */}
        <button className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition">
          💬 Chat with Us
        </button>
      </div>
    );
  }
  