import { NavLink } from "react-router-dom";
import { useState } from "react";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Gallery", path: "/gallery" },
  { name: "About", path: "/about" },
  { name: "Contact", path: "/contact" },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header
      className="absolute top-0 left-0 w-full z-30"
      style={{
        background: "linear-gradient(to bottom, rgba(0,0,0,0.85), rgba(0,0,0,0))",
      }}
    >
      <div className="flex items-center justify-center px-6 pt-10 xl:pt-16 relative max-w-[1400px] mx-auto">
        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-20 text-lg md:text-lg lg:text-[25px] xl:text-[32px] font-cormorant uppercase items-center">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) =>
                `text-white transition duration-300 ${
                  isActive
                    ? "underline underline-offset-4"
                    : "hover:underline hover:underline-offset-4"
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}

          {/* Instagram Icon */}
          <a
            href="https://www.instagram.com/paperplanewedding" // Replace with your Insta URL
            target="_blank"
            rel="noopener noreferrer"
            className="ml-6 text-white hover:text-pink-500 transition"
            aria-label="Instagram"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-8 h-8"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M7.75 2h8.5A5.75 5.75 0 0122 7.75v8.5A5.75 5.75 0 0116.25 22h-8.5A5.75 5.75 0 012 16.25v-8.5A5.75 5.75 0 017.75 2zm0 1.5A4.25 4.25 0 003.5 7.75v8.5A4.25 4.25 0 007.75 20.5h8.5a4.25 4.25 0 004.25-4.25v-8.5a4.25 4.25 0 00-4.25-4.25h-8.5zM12 7a5 5 0 110 10 5 5 0 010-10zm0 1.5a3.5 3.5 0 100 7 3.5 3.5 0 000-7zm5.25-.5a1.25 1.25 0 110 2.5 1.25 1.25 0 010-2.5z" />
            </svg>
          </a>
        </nav>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden absolute right-6 top-1/2">
  <button
    onClick={() => setIsOpen(!isOpen)}
    className="focus:outline-none text-white"
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
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M6 18L18 6M6 6l12 12"
        />
      ) : (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M4 6h16M4 12h16M4 18h16"
        />
      )}
    </svg>
  </button>
</div>

      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden flex flex-col items-center bg-black bg-opacity-80 py-6 mt-8 space-y-6 text-xl font-cormorant uppercase">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                `text-white transition duration-300 ${
                  isActive
                    ? "underline underline-offset-4"
                    : "hover:underline hover:underline-offset-4"
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
