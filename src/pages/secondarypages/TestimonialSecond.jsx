import Layout from '../../components/Layout';
import { useState, useEffect } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import AOS from 'aos';
import 'aos/dist/aos.css';

import rishi from "../../images/videos/rishi1.mp4";

import rishi1 from "../../images/couples/rishi0 (1).jpg";
import rishi2 from "../../images/couples/rishi0 (2).jpg";
import rishi3 from "../../images/couples/rishi0 (3).jpg";
import rishi4 from "../../images/couples/rishi0 (4).jpg";
import rishi5 from "../../images/couples/rishi0 (5).jpg";
import rishi6 from "../../images/couples/rishi0 (6).jpg";
import rishi7 from "../../images/couples/rishi0 (7).jpg";
import rishi8 from "../../images/couples/rishi0 (8).jpg";
import rishi9 from "../../images/couples/rishi0 (9).jpg";
import rishi10 from "../../images/couples/rishi0 (10).jpg";
import rishi11 from "../../images/couples/rishi0 (11).jpg";
import rishi12 from "../../images/couples/rishi0 (12).jpg";
import rishi13 from "../../images/couples/rishi0 (13).jpg";
import rishi19 from "../../images/couples/rishi10.webp"
const TestimonialSecond = () => {
  const [fullscreenImage, setFullscreenImage] = useState(null);

  const landscapeImages = [rishi5, rishi1, rishi10, rishi7];
  const portraitImages = [rishi12, rishi8, rishi9, rishi10 , rishi4 , rishi6];

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: 'ease-in-out',
    });
  }, []);

  return (
    <Layout>
      {/* Hero Section */}
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

        <div className="absolute inset-0 z-10 flex items-center justify-center text-center px-4">
          <h1 className="text-white font-cormorant leading-tight uppercase text-[42px] sm:text-[60px] md:text-[80px]">
            Rishi & Aiswarya
          </h1>
        </div>
      </div>

      {/* Main Content */}
      <div className="min-h-screen bg-[#f9f7f6] px-4 sm:px-6 md:px-12 lg:px-20 py-12 space-y-24">

        {/* Landscape Images */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {landscapeImages.map((img, index) => (
            <div key={index} className="aspect-[16/9] overflow-hidden rounded-lg shadow-md" data-aos="zoom-in">
              <LazyLoadImage
                src={img}
                alt={`Landscape ${index + 1}`}
                className="w-full h-full object-cover hover:scale-105 transition duration-300 cursor-pointer"
                effect="blur"
                onClick={() => setFullscreenImage(img)}
              />
            </div>
          ))}
        </div>

        {/* About Section */}
        <div className="flex items-center justify-center px-6">
          <div className="bg-white border-2 border-gray-200 p-6 md:p-12 w-full max-w-[760px] text-center space-y-10 mx-auto py-10 font-cormorant">
            <hr className="border-t-4 border-gray-300" />
            <p className="text-2xl sm:text-3xl md:text-4xl lg:text-[36px] xl:text-[40px] text-gray-900 font-semibold" data-aos="fade-up">
              Rishi & Aiswarya
            </p>
            <p className="text-lg sm:text-xl md:text-2xl lg:text-[22px] xl:text-[24px] 2xl:text-[26px] leading-relaxed text-gray-800 px-3 sm:px-6 md:px-8 xl:px-12" data-aos="fade-up" data-aos-delay="200">
              Celebrating the love of <span className="font-semibold">Rishi and Aiswarya</span> was a joy-filled experience.
              Their journey together radiated affection, trust, and a deep connection that translated into stunning visual moments.
              Every image captured a chapter of their story — timeless, elegant, and full of heart.
            </p>
            <hr className="border-t-4 border-gray-300" />
          </div>
        </div>

        {/* Center Video */}
        <div className="px-0 md:px-8 py-8 xl:w-4/5 xl:mx-auto">
          <div className="aspect-video w-full overflow-hidden rounded-xl bg-gray-100 shadow-lg" data-aos="fade-up">
            <video
              src={rishi}
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Portrait Images */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {portraitImages.map((img, index) => (
            <div key={index} className="aspect-[2/3] overflow-hidden rounded-xl shadow-md" data-aos="fade-up">
              <LazyLoadImage
                src={img}
                alt={`Portrait ${index + 1}`}
                className="w-full h-full object-cover hover:scale-105 transition duration-300"
                effect="blur"
                onClick={() => setFullscreenImage(img)}
              />
            </div>
          ))}
        </div>

        {/* Fullscreen Preview */}
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

        {/* ZoomIn Animation */}
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
