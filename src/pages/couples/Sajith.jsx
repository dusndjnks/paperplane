import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import AOS from "aos";
import "aos/dist/aos.css";

// Replace with your actual images for Sajith's gallery
import sajith1 from "../../images/gallery/sajith (1).jpg";
import sajith2 from "../../images/gallery/sajith (2).jpg";
import sajith3 from "../../images/gallery/sajith (3).jpg";
import sajith4 from "../../images/gallery/sajith (4).jpg";
import sajith5 from "../../images/gallery/sajith (5).jpg";
import sajith6 from "../../images/gallery/sajith (6).jpg";

const galleryImages = [sajith1, sajith2, sajith3, sajith4, sajith5, sajith6];

const Sajith = () => {
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <div className="bg-white min-h-screen relative">
      {/* Page Header */}
      <div className="text-center pt-14 pb-10 px-4">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-cormorant font-semibold text-gray-800">
          Sajith & Keerthy
        </h1>
      </div>

      {/* Gallery Section */}
      <section className="px-4 sm:px-6 md:px-12 lg:px-20 pb-20">
        <h2 className="text-2xl sm:text-3xl font-cormorant font-medium text-gray-700 mb-10 text-center">
          Our Favorite Shots
        </h2>

        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          {galleryImages.map((src, index) => (
            <div
              key={index}
              className="w-full overflow-hidden rounded-lg"
              data-aos="fade-up"
            >
              <LazyLoadImage
                src={src}
                alt={`Sajith Image ${index + 1}`}
                effect="blur"
                className="w-full h-auto object-cover rounded-md transition duration-300 ease-in-out hover:scale-[1.02]"
              />
            </div>
          ))}
        </div>
      </section>

      {/* Go Back Button */}
      <button
        onClick={() => navigate(-1)}
        className="fixed bottom-6 right-6 bg-gray-800 text-white px-5 py-2 rounded shadow-lg hover:bg-gray-700 transition font-cormorant text-base sm:text-lg"
      >
        ← Go Back
      </button>
    </div>
  );
};

export default Sajith;
