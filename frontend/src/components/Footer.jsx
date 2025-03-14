import { FaFacebookF, FaTwitter, FaInstagram, FaGithub } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-green-900 text-white py-8 mt-10">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Logo & Copyright */}
          <div className="text-center md:text-left mb-4 md:mb-0">
            <h2 className="text-2xl font-bold text-green-300">Auction House</h2>
            <p className="text-sm text-green-400">&copy; {new Date().getFullYear()} All rights reserved.</p>
          </div>

          {/* Navigation Links */}
          <ul className="flex space-x-6 text-green-300">
            <li><a href="/" className="hover:text-green-200 transition-all">Home</a></li>
            <li><a href="/about" className="hover:text-green-200 transition-all">About</a></li>
            <li><a href="/contact" className="hover:text-green-200 transition-all">Contact</a></li>
            <li><a href="/terms" className="hover:text-green-200 transition-all">Sell with us</a></li>
          </ul>

          {/* Social Media Links */}
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="text-green-300 hover:text-green-200 transition-all text-lg">
              <FaFacebookF />
            </a>
            <a href="#" className="text-green-300 hover:text-green-200 transition-all text-lg">
              <FaTwitter />
            </a>
            <a href="#" className="text-green-300 hover:text-green-200 transition-all text-lg">
              <FaInstagram />
            </a>
            <a href="#" className="text-green-300 hover:text-green-200 transition-all text-lg">
              <FaGithub />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
