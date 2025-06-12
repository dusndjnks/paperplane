import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import AOS from "aos";
import "aos/dist/aos.css";

// Replace these with actual Anoop images
import anoop1 from "../../images/gallery/anoop (1).jpg";
import anoop2 from "../../images/gallery/anoop (2).jpg";
import anoop3 from "../../images/gallery/anoop (3).jpg";
import anoop4 from "../../images/gallery/anoop (4).jpg";
import anoop5 from "../../images/gallery/anoop (5).jpg";
import anoop6 from "../../images/gallery/anoop (6).jpg";
import anoop7 from "../../images/gallery/anoop (7).jpg";
import anoop8 from "../../images/gallery/anoop (8).jpg";
import anoop9 from "../../images/gallery/anoop (9).jpg";
import anoop10 from "../../images/gallery/anoop (10).jpg";

const galleryImages = [anoop1, anoop2, anoop3, anoop4, anoop5, anoop6 , anoop7, anoop8, anoop9, anoop10];

const Anoop = () => {
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <div className="bg-white min-h-screen relative">
      {/* Page Header */}
      <div className="text-center pt-14 pb-10 px-4">
        <h1 className="text-4xl sm:text-5xl font-cormorant font-semibold text-gray-800">
          Anoop & Akshara
        </h1>
      </div>

      {/* Gallery Section */}
      <section className="px-4 sm:px-6 md:px-12 lg:px-20 pb-20">
        <h2 className="text-2xl sm:text-3xl font-cormorant font-medium text-gray-700 mb-10 text-center">
          Our Favorite Shots
        </h2>

        <div className="columns-1 sm:columns-2 gap-6 space-y-6">
          {galleryImages.map((src, index) => (
            <div
              key={index}
              className="w-full overflow-hidden rounded-lg"
              data-aos="fade-up"
            >
              <LazyLoadImage
                src={src}
                alt={`Anoop Image ${index + 1}`}
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

export default Anoop;
