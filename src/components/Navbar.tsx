import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import Logo from "./Logo";

const Navbar: React.FC = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const navLinks = [
    { name: "Home", href: "#" },
    { name: "About Us", href: "#" },
    { name: "Program", href: "#" },
    { name: "Membership", href: "#" },
    { name: "Testimonials", href: "#" },
  ];

  return (
    <nav className="bg-Aslin m-0 p-0">
      <div className="lg:w-[80%] mx-auto flex items-center justify-between px-6 py-7">
        <Logo />

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-7">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-normal text-white hover:text-red-500 transition duration-200"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#"
            className="px-5 py-2 bg-[#FD2331] text-sm font-medium text-white rounded-lg hover:bg-red-600 transition duration-200"
          >
            Sign Up
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden px-2 py-1 sm:px-4 sm:py-2 border-2 border-white text-white bg-transparent rounded-lg"
          onClick={() => setOpenMenu(!openMenu)}
        >
          {openMenu ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {openMenu && (
        <div className="md:hidden bg-aslin p-4 pl-8 space-y-4 border-gray-600 border-y-[1px]">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="block text-sm font-bold text-white hover:text-red-500 hover:bg-gray-700 transition duration-200 px-4 rounded"
            >
              {link.name}
            </a>
          ))}
          <div className="flex items-center">
            <a
              href="#"
              className="px-5 py-2 bg-[#FD2331] text-sm font-medium text-white rounded-lg hover:bg-red-600 transition duration-200 transform translate-x-3"
            >
              Sign Up
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
