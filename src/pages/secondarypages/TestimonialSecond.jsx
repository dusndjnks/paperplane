import Layout from '../../components/Layout';
import { useState, useEffect } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import AOS from 'aos';
import 'aos/dist/aos.css';
import rishi from "../../images/videos/rishi1.mp4"

const TestimonialSecond = () => {
  const [fullscreenImage, setFullscreenImage] = useState(null);

  const images = [
    "https://images.pexels.com/photos/10257984/pexels-photo-10257984.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    "https://images.pexels.com/photos/2507026/pexels-photo-2507026.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    "https://images.pexels.com/photos/15006261/pexels-photo-15006261/free-photo-of-grayscale-photo-of-a-bride-and-a-groom-smiling.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    "https://images.pexels.com/photos/9210832/pexels-photo-9210832.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    "https://images.pexels.com/photos/9210832/pexels-photo-9210832.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  ];

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: 'ease-in-out',
    });
  }, []);

  return (
    <Layout>
      {/* Hero Section with Background Video */}
      <div className="relative h-[60vh] sm:h-[70vh] md:h-screen w-full overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover brightness-75"
        >
          <source src={rishi} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Overlay Title */}
        <div className="absolute inset-0 z-10 flex items-center justify-center text-center px-4">
          <h1 className="text-white font-cormorant leading-tight uppercase text-[42px] sm:text-[60px] md:text-[80px]  ">
            Rishi & Aiswarya
          </h1>
        </div>
      </div>

      {/* Gallery Section */}
      <div className="min-h-screen bg-[#f9f7f6] px-4 sm:px-6 md:px-12 lg:px-20 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {images.map((src, index) => (
            <LazyLoadImage
              key={index}
              src={src}
              effect="blur"
              alt={`Gallery ${index + 1}`}
              onClick={() => setFullscreenImage(src)}
              className="w-full rounded-lg cursor-pointer break-inside-avoid-column shadow-lg transition-transform duration-700 hover:scale-105"
              data-aos="zoom-in"
            />
          ))}
        </div>

        {/* Fullscreen Image Preview */}
        {fullscreenImage && (
          <div
            onClick={() => setFullscreenImage(null)}
            className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
          >
            <img
              src={fullscreenImage}
              alt="Fullscreen"
              className="max-w-full max-h-full rounded-xl animate-zoomIn"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        )}

        <style>{`
          @keyframes zoomIn {
            0% { opacity: 0; transform: scale(0.8); }
            100% { opacity: 1; transform: scale(1); }
          }
          .animate-zoomIn {
            animation: zoomIn 0.3s ease forwards;
          }
        `}</style>
      </div>
    </Layout>
  );
};

export default TestimonialSecond;
