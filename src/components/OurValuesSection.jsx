import { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const values = [
  {
    title: "Quality",
    description:
      "Quality is at the heart of everything we do, from the storytelling in our films to the resources we offer. Every detail is crafted to deliver a rich and memorable experience.",
  },
  {
    title: "Creativity",
    description:
      "We approach every wedding with fresh eyes, using our creativity to turn genuine emotions into visually stunning films. Each project is designed to reflect your unique story and energy.",
  },
  {
    title: "Connection",
    description:
      "We believe real connection is key. By building trust and truly understanding our couples, we create a relaxed environment that brings out natural, heartfelt moments in every frame we capture.",
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
   <section className="bg-black text-white py-20 px-6 text-center font-cormorant flex flex-col justify-center items-center">
  <h2 className="text-4xl sm:text-5xl font-semibold mb-5 tracking-widest">
    OUR VALUES
  </h2>

  <p className="max-w-3xl mb-10 text-lg sm:text-xl leading-relaxed text-gray-300 px-2">
    At PaperPlane, our mission is to redefine the standard of quality in
    wedding filmmaking while fostering a community of learning and
    inspiration. Built on passion and purpose, our brand is guided by
    values that shape both our work and our relationships.
  </p>

  <div className="relative bg-white text-black rounded-xl py-10 shadow-lg
                  w-[260px] sm:w-[400px] md:w-[480px] lg:w-[520px] mx-auto">
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

  <div className="mt-20">
    <p className="uppercase tracking-widest text-white text-sm sm:text-lg mb-5">
      ARE WE THE TEAM FOR YOU?
    </p>
    <a
      href="#contact"
      className="inline-block bg-white text-black font-semibold px-12 py-4 rounded-md tracking-wide hover:bg-gray-200 transition text-base sm:text-lg"
    >
      CONNECT TODAY
    </a>
  </div>
</section>

  );
};

export default OurValuesSection;
