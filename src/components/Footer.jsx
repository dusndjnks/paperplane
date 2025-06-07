import logo from "../images/Logo Paper Plane (1).svg";
import { useState, useEffect } from "react";

const Footer = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showTopBtn, setShowTopBtn] = useState(false);

  // Show back to top button after scrollY > 150
  useEffect(() => {
    const handleScroll = () => {
      setShowTopBtn(window.scrollY > 150);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="bg-gray-300">
      <div className="w-full max-w-[1440px] mx-auto px-4 py-6 border-t border-gray-400">
        {/* Small screen: Hamburger & toggle */}
        <div className="flex items-center justify-between md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle footer menu"
            className="text-gray-700 hover:text-black focus:outline-none"
          >
            {/* Hamburger icon */}
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d={
                  menuOpen
                    ? "M6 18L18 6M6 6l12 12" // X icon when open
                    : "M4 6h16M4 12h16M4 18h16" // Hamburger lines when closed
                }
              ></path>
            </svg>
          </button>

          {/* Button always visible on small */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="bg-black text-white px-4 py-2 rounded-md shadow hover:bg-gray-900 transition duration-300 font-cormorant font-semibold"
          >
            Back to Top
          </button>
        </div>

        {/* Menu Links for small screen, toggle with state */}
        {menuOpen && (
          <nav className="flex flex-col gap-4 mt-4 text-center text-gray-700 font-cormorant text-lg font-medium md:hidden">
            <a href="#home" onClick={() => setMenuOpen(false)} className="hover:underline">
              Home
            </a>
            <a href="#about" onClick={() => setMenuOpen(false)} className="hover:underline">
              About
            </a>
            <a href="#gallery" onClick={() => setMenuOpen(false)} className="hover:underline">
              Gallery
            </a>
            <a href="#contact" onClick={() => setMenuOpen(false)} className="hover:underline">
              Contact
            </a>
          </nav>
        )}

        {/* Medium+ screens: regular horizontal menu + right side button */}
        <div className="hidden md:flex items-center mt-6 relative max-w-[1440px] mx-auto px-4">
          {/* Center the menu */}
          <nav className="flex flex-wrap justify-center gap-8 text-gray-700 font-cormorant text-lg md:text-xl font-medium flex-1">
            <a href="#home" className="hover:underline transition">
              Home
            </a>
            <a href="#about" className="hover:underline transition">
              About
            </a>
            <a href="#gallery" className="hover:underline transition">
              Gallery
            </a>
            <a href="#contact" className="hover:underline transition">
              Contact
            </a>
          </nav>

          {/* Position the button on the right */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="bg-black text-white px-6 py-2 rounded-md shadow hover:bg-gray-900 transition duration-300 font-cormorant text-lg font-semibold absolute right-0"
          >
            Back to Top
          </button>
        </div>
      </div>

      {/* Floating Back to Top Button for small screens */}
      {showTopBtn && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          aria-label="Scroll to top"
          className="fixed bottom-6 right-6 z-50 bg-black text-white p-3 rounded-full shadow-lg hover:bg-gray-900 transition duration-300 md:hidden"
          title="Back to Top"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7"></path>
          </svg>
        </button>
      )}

      {/* Mobile Section */}
      <div className="flex md:hidden">
        <section className="relative py-12 w-full">
          <div className="w-full px-4 sm:px-6 relative">
            {/* CTA Overlay */}
            <div className="absolute inset-0 z-10 flex items-center justify-center px-4">
              <a
                href="https://www.instagram.com/paperplanewedding"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-black/60 hover:bg-black/70 text-white text-lg sm:text-xl text-center font-serif w-full max-w-[600px] py-3 rounded-md shadow-lg transition-all duration-300"
              >
                Check Our Instagram
              </a>
            </div>

            {/* Grid - Square Images */}
            <div className="grid grid-cols-2 gap-3 px-2 mx-auto relative z-0">
              {[...Array(4)].map((_, index) => (
                <div key={index} className="aspect-square">
                  <img
                    src={
                      index % 2 === 0
                        ? "https://images.pexels.com/photos/16632447/pexels-photo-16632447/free-photo-of-smiling-indian-bride-and-groom-in-traditional-costumes.jpeg"
                        : "https://images.pexels.com/photos/28949501/pexels-photo-28949501/free-photo-of-tender-embrace-with-elegant-rose-bouquet.jpeg"
                    }
                    alt={`Instagram photo ${index + 1}`}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>

      {/* Medium Screens (md only) */}
      <div className="hidden md:flex lg:hidden justify-center">
        <section className="relative py-16 w-full">
          <div className="w-full max-w-[1200px] px-4 sm:px-6 relative mx-auto">
            {/* CTA Overlay on top of images */}
            <div className="absolute inset-0 z-10 flex items-center justify-center px-4">
              <a
                href="https://www.instagram.com/paperplanewedding"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-black/60 hover:bg-black/70 text-white text-2xl text-center font-serif w-full max-w-[600px] py-4 rounded-md shadow-lg transition-all duration-300"
              >
                Check Our Instagram
              </a>
            </div>

            {/* 2x2 Grid - Wide Landscape Images */}
            <div className="grid grid-cols-2 gap-4 relative z-0">
              {[...Array(4)].map((_, index) => (
                <div key={index}>
                  <img
                    src={
                      index % 2 === 0
                        ? "https://images.pexels.com/photos/16632447/pexels-photo-16632447/free-photo-of-smiling-indian-bride-and-groom-in-traditional-costumes.jpeg"
                        : "https://images.pexels.com/photos/28949501/pexels-photo-28949501/free-photo-of-tender-embrace-with-elegant-rose-bouquet.jpeg"
                    }
                    alt={`Instagram image ${index + 1}`}
                    className="w-full h-[260px] object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>

      {/* Large & XL Screens */}
      <div className="hidden lg:flex justify-center">
        <section className="relative py-12">
          <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-20 relative">
            {/* CTA Overlay */}
            <div className="absolute inset-0 z-10 flex items-center justify-center px-4">
              <a
                href="https://www.instagram.com/paperplanewedding"
                target="_blank"
                rel="noopener noreferrer"
                className="font-cormorant bg-black/60 hover:bg-black/70 text-white text-2xl lg:text-4xl text-center w-full max-w-[700px] py-5 rounded-md shadow-lg transition-all duration-300"
              >
                Check Our Instagram
              </a>
            </div>

            {/* Grid - 5 Tall Images (Smaller Height in XL) */}
            <div className="grid grid-cols-5 gap-4 relative z-0">
              {[...Array(5)].map((_, index) => (
                <div key={index}>
                  <img
                    src={
                      index % 2 === 0
                        ? "https://images.pexels.com/photos/16632447/pexels-photo-16632447/free-photo-of-smiling-indian-bride-and-groom-in-traditional-costumes.jpeg"
                        : "https://images.pexels.com/photos/28949501/pexels-photo-28949501/free-photo-of-tender-embrace-with-elegant-rose-bouquet.jpeg"
                    }
                    alt={`Instagram image ${index + 1}`}
                    className="w-full object-cover hover:scale-105 transition-transform duration-300 h-[400px] xl:h-[460px]"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>

      {/* Footer Logo + Tagline */}
      <div className="flex flex-col items-center justify-center px-4 py-6">
        <img
          src={logo}
          alt="Logo"
          className="w-[200px] sm:w-[280px] md:w-[340px] lg:w-[400px]"
        />
        <h1 className="text-center pt-3 font-cormorant text-base sm:text-lg md:text-xl lg:text-2xl max-w-[700px]">
          Say yes to unforgettable, beautiful, lasting wedding photos!
        </h1>
      </div>

      {/* Footer Text */}
      <p className="text-center text-sm sm:text-base md:text-lg lg:text-[20px] font-cormorant text-gray-600 py-6 px-4 font-medium">
        Developed by <span className="font-semibold text-gray-700">Divegrid Pvt Ltd</span> | All Rights Reserved © 2025
      </p>
    </div>
  );
};

export default Footer;
