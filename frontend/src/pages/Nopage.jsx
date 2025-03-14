import { FaHome } from "react-icons/fa";

export default function NoPage() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-900 text-white">
      <img
        src="https://cdn.dribbble.com/users/285475/screenshots/2083086/dribbble_1.gif"
        alt="404 Not Found"
        className="w-96 h-auto"
      />
      <h2 className="text-4xl font-extrabold mt-4">Oops! Page Not Found.</h2>
      <p className="text-gray-400 mt-2">The page you are looking for doesn't exist or has been moved.</p>
      
      <a 
        href="/" 
        className="mt-6 px-6 py-3 bg-green-500 text-white rounded-lg flex items-center space-x-2 hover:bg-green-600 transition duration-300"
      >
        <FaHome className="text-lg" />
        <span>Return Home</span>
      </a>
    </div>
  );
}
