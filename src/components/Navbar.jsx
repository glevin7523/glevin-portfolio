// src/components/Navbar.jsx
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react"; // Ensure lucide-react is installed

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="fixed w-full top-0 z-50 bg-black shadow-md h-20 transition-all duration-300">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Portfolio Name */}
        <h1 className="text-2xl font-bold text-white">Glevin's Portfolio</h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6">
          <li>
            <Link to="/" className="text-white hover:text-blue-400">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="text-white hover:text-blue-400">
              About
            </Link>
          </li>
          <li>
            <Link to="/projects" className="text-white hover:text-blue-400">
              Projects
            </Link>
          </li>
          <li>
            <Link to="/skills" className="text-white hover:text-blue-400">
              Skills
            </Link>
          </li>
          <li>
            <Link to="/certifications" className="text-white hover:text-blue-400">
              Certifications
            </Link>
          </li>
          <li>
            <Link to="/contact" className="text-white hover:text-blue-400">
              Contact
            </Link>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden absolute top-20 left-0 w-full bg-black text-white py-4 z-40">
          <ul className="text-center space-y-4">
            <li>
              <Link to="/" onClick={() => setIsOpen(false)}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" onClick={() => setIsOpen(false)}>
                About
              </Link>
            </li>
            <li>
              <Link to="/projects" onClick={() => setIsOpen(false)}>
                Projects
              </Link>
            </li>
            <li>
              <Link to="/skills" onClick={() => setIsOpen(false)}>
                Skills
              </Link>
            </li>
            <li>
              <Link to="/certifications" onClick={() => setIsOpen(false)}>
                Certifications
              </Link>
            </li>
            <li>
              <Link to="/contact" onClick={() => setIsOpen(false)}>
                Contact
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
