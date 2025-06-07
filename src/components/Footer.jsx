import { NavLink } from "react-router-dom";
import logo from "../images/Logo Paper Plane (1).svg";
import { useState, useEffect } from "react";
import footer1 from "../images/footer/footer (1).jpg";
import footer2 from "../images/footer/footer (2).jpg";
import footer3 from "../images/footer/footer (3).jpg";
import footer4 from "../images/footer/footer (4).jpg";
import footer5 from "../images/footer/footer (5).jpg";

const Footer = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowTopBtn(window.scrollY > 150);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Array of footer images for different layouts
  const footerImages = [footer1, footer2, footer3, footer4, footer5];

  return (
    <div className="bg-gray-300">
      <div className="w-full mx-auto px-4 py-6 border-t border-gray-400">
  {/* Small screen: Hamburger & toggle */}
  <div className="flex items-center justify-between md:hidden">
    <button
      onClick={() => setMenuOpen(!menuOpen)}
      aria-label="Toggle footer menu"
      className="bg-black text-white px-4 py-2 rounded-md shadow hover:bg-gray-900 transition duration-300 font-cormorant text-lg sm:text-xl font-semibold"
    >
      Menu
    </button>

    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="bg-black text-white px-4 py-2 rounded-md shadow hover:bg-gray-900 transition duration-300 font-cormorant text-lg sm:text-xl font-semibold"
    >
      Back to Top
    </button>
  </div>

  {/* Menu Links for small screen */}
  {menuOpen && (
    <nav className="flex flex-col gap-4 mt-4 text-center text-gray-700 font-cormorant text-xl sm:text-2xl font-semibold md:hidden">
      {[
        { name: "Home", path: "/" },
        { name: "About", path: "/about" },
        { name: "Gallery", path: "/gallery" },
        { name: "Contact", path: "/contact" },
      ].map((link) => (
        <NavLink
          key={link.name}
          to={link.path}
          onClick={() => setMenuOpen(false)}
          className={({ isActive }) =>
            `relative transition duration-300 inline-block ${
              isActive
                ? "after:block after:absolute after:bottom-[-4px] after:left-1/2 after:-translate-x-1/2 after:h-[2px] after:w-12 after:bg-black"
                : "hover:after:block hover:after:absolute hover:after:bottom-[-4px] hover:after:left-1/2 hover:after:-translate-x-1/2 hover:after:h-[2px] hover:after:w-12 hover:after:bg-black"
            }`
          }
        >
          {link.name}
        </NavLink>
      ))}
    </nav>
  )}

  {/* Medium+ screens */}
  <div className="hidden md:flex items-center mt-6 relative max-w-[1440px] mx-auto px-4">
    <nav className="flex flex-wrap justify-center gap-10 text-gray-700 font-cormorant text-2xl font-semibold flex-1">
      {[
        { name: "Home", path: "/" },
        { name: "About", path: "/about" },
        { name: "Gallery", path: "/gallery" },
        { name: "Contact", path: "/contact" },
      ].map((link) => (
        <NavLink
          key={link.name}
          to={link.path}
          className={({ isActive }) =>
            `relative transition duration-300 inline-block ${
              isActive
                ? "after:block after:absolute after:bottom-[-4px] after:left-1/2 after:-translate-x-1/2 after:h-[2px] after:w-12 after:bg-black"
                : "hover:after:block hover:after:absolute hover:after:bottom-[-4px] hover:after:left-1/2 hover:after:-translate-x-1/2 hover:after:h-[2px] hover:after:w-12 hover:after:bg-black"
            }`
          }
        >
          {link.name}
        </NavLink>
      ))}
    </nav>

    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="bg-black text-white px-6 py-2 rounded-md shadow hover:bg-gray-900 transition duration-300 font-cormorant text-xl font-semibold absolute right-3 xl:right-28"
    >
      Back to Top
    </button>
  </div>
</div>


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
                className="bg-black/60 hover:bg-black/70 text-white text-2xl sm:text-3xl text-center font-cormorant mx-12 w-full py-4 rounded-md shadow-lg transition-all duration-300"
              >
                Check Our Instagram
              </a>
            </div>

            {/* Grid - Square Images */}
            <div className="grid grid-cols-2 gap-1 xs:gap-2 px-2 mx-auto relative z-0">
              {[footer1, footer2, footer3, footer4].map((img, index) => (
                <div key={index} className="aspect-square">
                  <img
                    src={img}
                    alt={`Footer image ${index + 1}`}
                    className="w-full h-full object-cover object-top transition-transform duration-300 hover:scale-105"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>

     
     {/* Medium Screens (md only) */}
<div className="hidden md:flex lg:hidden justify-center my-8">
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

      {/* Horizontal image layout */}
      <div className="flex gap-1 relative z-0 justify-center">
        {[footer1, footer2, footer3].map((img, index) => (
          <div key={index} className="w-[240px] h-[360px] flex-shrink-0">
            <img
              src={img}
              alt={`Footer image ${index + 1}`}
              className="w-full h-full object-cover object-top transition-transform duration-300 hover:scale-105"
            />
          </div>
        ))}
      </div>
    </div>
  </section>
</div>


      {/* Large & XL Screens */}
      <div className="hidden lg:flex justify-center">
        <section className="relative py-8">
          <div className="max-w-[1540px] mx-auto px-4 sm:px-6 lg:px-20 relative">
            {/* CTA Overlay */}
            <div className="absolute inset-0 z-10 flex items-center justify-center px-2">
              <a
                href="https://www.instagram.com/paperplanewedding"
                target="_blank"
                rel="noopener noreferrer"
                className="font-cormorant bg-black/60 hover:bg-black/70 text-white text-2xl lg:text-4xl text-center w-full max-w-[700px] py-5 rounded-md shadow-lg transition-all duration-300"
              >
                Check Our Instagram
              </a>
            </div>

            {/* Grid - 5 Tall Images */}
            <div className="grid grid-cols-5 gap-2 relative z-0">
              {footerImages.map((img, index) => (
                <div key={index}>
                  <img
                    src={img}
                    alt={`Footer image ${index + 1}`}
                    className="w-full xl:w-[240px] object-cover object-top hover:scale-105 transition-transform duration-300 h-[380px]"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>

      {/* Footer Logo + Tagline */}
      <div className="flex flex-col items-center justify-center px-4">
        <img src={logo} alt="Logo" className="w-[200px] sm:w-[280px] md:w-[300px]" />
        <h1 className="text-center pt-3 font-cormorant text-base sm:text-lg md:text-xl">
          Say yes to unforgettable, beautiful, lasting wedding photos!
        </h1>
      </div>

      {/* Footer Text */}
      <p className="text-center text-sm sm:text-base md:text-lg lg:text-[20px] font-cormorant text-gray-600 pb-3 pt-4 px-4 font-medium">
        Developed by <span className="font-semibold text-gray-700">Divegrid Pvt Ltd</span> | All Rights
        Reserved © 2025
      </p>
    </div>
  );
};

export default Footer;
