import Layout from '../../components/Layout';
import { useState } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import swasika from "../../images/videos/swasika.mp4"

// Example images array — replace with your actual imports or URLs
const images = [
  '/gallery/img1.jpg',
  '/gallery/img2.jpg',
  '/gallery/img3.jpg',
  // Add more as needed
];

const TestimonialFirst = () => {
  const [fullscreenImage, setFullscreenImage] = useState(null);

  return (
    <Layout>
      {/* Hero Section with Background Video */}
      <div className="relative h-[60vh] md:h-screen w-full overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover brightness-75"
        >
          <source src={swasika} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <div className="absolute inset-0 flex items-center justify-center z-10">
          <h1 className="text-white text-center font-cormorant text-3xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight px-4">
            Swasika & Pream
          </h1>
        </div>
      </div>

      {/* Gallery Section */}
      <div className="min-h-screen bg-[#f9f7f6] px-4 sm:px-6 md:px-12 lg:px-20 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
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

        {/* Fullscreen View */}
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

        {/* Fullscreen animation style */}
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

export default TestimonialFirst;
