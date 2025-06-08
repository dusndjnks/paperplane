import { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import img from "../images/aboutvalue.jpeg"

const values = [
  {
    title: "Quality",
    description:
      "Excellence defines our work, from cinematic storytelling to educational materials. We meticulously craft each element to ensure a profound and lasting impression.",
  },
  {
    title: "Creativity",
    description:
      "Every wedding receives our unique vision, transforming authentic moments into breathtaking films. We tailor each project to embody your distinctive love story and spirit.",
  },
  {
    title: "Connection",
    description:
      "Authentic relationships are fundamental. Through trust and deep understanding, we foster a comfortable atmosphere that reveals genuine, emotional moments in every shot.",
  },
];

const OurValuesSection = () => {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => setCurrent((prev) => (prev + 1) % values.length);
  const prevSlide = () =>
    setCurrent((prev) => (prev - 1 + values.length) % values.length);

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
 <section className="relative text-white py-10 md:py-20 px-6 text-center font-cormorant flex flex-col justify-center items-center min-h-screen">
  {/* Dark Overlay - Increased to 80% opacity for darker effect */}
  <div className="absolute inset-0 bg-black/80 -z-20"></div>
  
  {/* Background Image */}
  <div
    className="absolute inset-0 bg-center bg-cover bg-right -z-30"
    style={{
      backgroundImage:
        `url(${img})`,
      backgroundAttachment: "fixed",
    }}
  ></div>

  <h2 className="text-4xl sm:text-5xl font-semibold mb-5 tracking-widest">
    OUR VALUES
  </h2>

  <p className="max-w-3xl mb-10 text-lg sm:text-xl leading-relaxed text-gray-200 px-2">
    At PaperPlane, our mission is to redefine the standard of quality in
    wedding filmmaking while fostering a community of learning and
    inspiration. Built on passion and purpose, our brand is guided by
    values that shape both our work and our relationships.
  </p>

  <div
    className="relative bg-white/90 text-black rounded-xl py-10 shadow-lg
                w-[260px] sm:w-[400px] md:w-[480px] lg:w-[520px] mx-auto
                backdrop-blur-sm" // subtle blur for modern glass effect
  >
    {/* Left Arrow */}
    <button
      onClick={prevSlide}
      aria-label="Previous slide"
      className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-[120%] bg-white text-black rounded-full p-3 shadow hover:bg-gray-100 transition-all"
      style={{ minWidth: "44px", minHeight: "44px" }}
    >
      <FaChevronLeft size={20} />
    </button>

    {/* Content Container */}
    <div className="text-center px-6 sm:px-8">
      <h3 className="text-2xl sm:text-3xl font-bold italic mb-6">
        {values[current].title}
      </h3>
      <p className="text-base sm:text-lg md:text-xl leading-relaxed">
        {values[current].description}
      </p>
    </div>

    {/* Right Arrow */}
    <button
      onClick={nextSlide}
      aria-label="Next slide"
      className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-[120%] bg-white text-black rounded-full p-3 shadow hover:bg-gray-100 transition-all"
      style={{ minWidth: "44px", minHeight: "44px" }}
    >
      <FaChevronRight size={20} />
    </button>
  </div>

  <div className="mt-5 md:mt-20">
    <p className="uppercase tracking-widest text-white/90 text-sm sm:text-lg mb-5">
      ARE WE THE TEAM FOR YOU?
    </p>
    <NavLink
      to="/contact"
      className="inline-block bg-white text-black font-semibold px-12 py-4 rounded-md tracking-wide hover:bg-gray-200 transition text-base sm:text-lg"
    >
      CONNECT TODAY
    </NavLink>
  </div>
</section>



  );
};

export default OurValuesSection;
