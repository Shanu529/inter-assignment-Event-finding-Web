import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full bg-black border-b border-gray-800 text-lg shadow-md fixed top-0 left-0 z-50">
      <div className="flex items-center justify-between px-6 py-4 max-w-7xl mx-auto">
        <Link to="/" className="flex items-center gap-2 group">
          <h2 className="font-extrabold text-xl text-cyan-400 tracking-wide group-hover:text-cyan-300 transition-all duration-300">
            Eventify
          </h2>
        </Link>

        <div className="hidden md:flex gap-4 items-center">
          <Link
            to="/create"
            className="px-4 py-2 bg-cyan-90text-gray-300 hover:text-white border border-gray-700 hover:border-cyan-500 text-white font-medium rounded-xl shadow-md hover:shadow-cyan-500/30 transition-all duration-300"
          >
            Create Event
          </Link>

          <button className="px-4 py-2 text-gray-300 hover:text-white border border-gray-700 hover:border-cyan-500 rounded-xl transition-all duration-300">
            Sign In
          </button>

          <button className="px-4 py-2 bg-linear-to-br bordertext-gray-300 hover:text-white border border-gray-700 hover:border-cyan-500 text-white font-semibold rounded-xl shadow-md hover:shadow-cyan-400/30 transition-all duration-300">
            Sign Up
          </button>
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-gray-300 hover:text-cyan-400 transition-all duration-300"
        >
          {isOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden bg-gray-900 border-t border-gray-800 flex flex-col items-center gap-3 py-4 animate-slideDown">
          <Link
            to="/create"
            onClick={() => setIsOpen(false)}
            className="w-10/12 text-center px-4 py-2 bg-cyan-600 hover:bg-cyan-500 text-white font-medium rounded-xl shadow-md hover:shadow-cyan-500/30 transition-all duration-300"
          >
            Create Event
          </Link>

          <button
            onClick={() => setIsOpen(false)}
            className="w-10/12 text-center px-4 py-2 text-gray-300 hover:text-white border border-gray-700 hover:border-cyan-500 rounded-xl transition-all duration-300"
          >
            Sign In
          </button>

          <button
            onClick={() => setIsOpen(false)}
            className="w-10/12 text-center px-4 py-2 bg-linear-to-br from-cyan-600 to-blue-500 hover:from-cyan-500 hover:to-blue-400 text-white font-semibold rounded-xl shadow-md hover:shadow-cyan-400/30 transition-all duration-300"
          >
            Sign Up
          </button>
        </div>
      )}
    </nav>
  );
}
