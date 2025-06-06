import { useState } from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Gallery", path: "/gallery" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header className="absolute top-8 left-0 w-full z-30">
      <div className="flex items-center justify-center px-6 py-4 bg-transparent relative">
        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-20 text-lg md:text-2xl lg:text-4xl font-cormorant uppercase">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) =>
                `transition duration-300 ${
                  isActive ? "text-white" : "text-black hover:text-white"
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </nav>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden absolute right-6 top-1/2 -translate-y-1/2">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="focus:outline-none text-white "
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
            >
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden flex flex-col items-center bg-black bg-opacity-80 py-6 space-y-6 text-xl font-cormorant uppercase">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                `transition duration-300 ${
                  isActive ? "text-white" : "text-white/80 hover:text-white"
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </div>
      )}
    </header>
  );
};

export default Header;
