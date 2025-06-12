import Layout from '../../components/Layout';
import { useState, useEffect } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import swasika from "../../images/videos/swasika.mp4";
import swasika0 from "../../images/videos/Swasika-prem-wedding-video-header-kerala-2024.mp4"

import swasika1 from "../../images/couples/swasika  (1).jpg";
import swasika2 from "../../images/couples/swasika  (2).jpg";
import swasika3 from "../../images/couples/swasika  (3).jpg";
import swasika4 from "../../images/couples/swasika  (4).jpg";
import swasika5 from "../../images/couples/swasika  (5).jpg";
import swasika6 from "../../images/couples/swasika  (6).jpg";
import swasika7 from "../../images/couples/swasika  (7).jpg";
import swasike8 from "../../images/couples/swasika  (8).jpg";


import pream1 from "../../images/couples/pream (1).jpg"
import pream2 from "../../images/couples/pream (2).jpg"
import pream3 from "../../images/couples/pream (3).jpg"
import pream4 from "../../images/couples/pream (4).jpg"
import pream5 from "../../images/couples/pream (5).jpg"
import pream6 from "../../images/couples/pream (6).jpg"
import pream7 from "../../images/couples/pream (7).jpg"
import pream8 from "../../images/couples/pream (8).jpg"
import pream9 from "../../images/couples/pream (9).jpg"
import pream10 from "../../images/couples/pream (10).jpg"
import pream11 from "../../images/couples/pream (11).jpg"
import pream12 from "../../images/couples/pream (12).jpg"
import pream13 from "../../images/couples/pream (13).jpg"



const TestimonialFirst = () => {
  const [fullscreenImage, setFullscreenImage] = useState(null);

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: 'ease-in-out',
    });
  }, []);

  const landscapeImages = [
  swasika1,
  swasike8,
  swasika6,
  swasika3,
  swasika7,
  swasika2,
  swasika4,
  swasika5
];

const portraitImages = [

  pream10,
  pream6,
  pream5,

  pream11,
  pream7,
  pream1,

  pream8,
  pream12,
  pream3,


  pream9,
  pream4,
  pream2,
  pream13,


];



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
          <source src={swasika} type="video/mp4" />
        </video>
        <div className="absolute inset-0 z-10 flex items-center justify-center text-center px-4">
          <h1 className="text-white font-cormorant leading-tight uppercase text-[42px] sm:text-[60px] md:text-[80px]">
            Swasika & Pream
          </h1>
        </div>
      </div>

      {/* Main Section */}
      <div className="min-h-screen bg-[#f9f7f6] px-4 sm:px-6 md:px-12 lg:px-20 py-12 space-y-24">

        {/* Top Landscape Images */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {landscapeImages.map((src, index) => (
            <div key={index} className="aspect-[16/9] overflow-hidden rounded-lg shadow-md" data-aos="zoom-in">
              <LazyLoadImage
                src={src}
                alt={`Landscape ${index + 1}`}
                className="w-full h-full object-cover hover:scale-105 transition duration-300 cursor-pointer"
                effect="blur"
                onClick={() => setFullscreenImage(src)}
              />
            </div>
          ))}
        </div>

        {/* About Section */}
        <div className="flex items-center justify-center px-6">
          <div className="bg-white border-2 border-gray-200 p-6 md:p-12 w-full max-w-[760px] text-center space-y-10 mx-auto py-10 font-cormorant">
            <hr className="border-t-4 border-gray-300" />
            <p
              className="text-2xl sm:text-3xl md:text-4xl lg:text-[36px] xl:text-[40px] text-gray-900 font-semibold"
              data-aos="fade-up"
            >
              Swasika & Pream
            </p>
            <p
              className="text-lg sm:text-xl md:text-2xl lg:text-[22px] xl:text-[24px] 2xl:text-[26px] leading-relaxed text-gray-800 px-3 sm:px-6 md:px-8 xl:px-12"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              Witnessing <span className="font-semibold">Swasika and Pream's</span> celebration was an experience filled with love, elegance, and sincere emotion. Their wedding day overflowed with genuine moments and stunning visuals. Every detail captured speaks of a timeless bond.
            </p>
            <hr className="border-t-4 border-gray-300" />
          </div>
        </div>

        {/* Center Video */}
        <div className="px-0 md:px-8 py-8 xl:w-4/5 xl:mx-auto">
          <div className="aspect-video w-full overflow-hidden rounded-xl bg-gray-100 shadow-lg" data-aos="fade-up">
            <video
              src={swasika0}
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
          {portraitImages.map((src, index) => (
            <div key={index} className="aspect-[2/3] overflow-hidden rounded-xl shadow-md" data-aos="fade-up">
              <LazyLoadImage
                src={src}
                alt={`Portrait ${index + 1}`}
                className="w-full h-full object-cover hover:scale-105 transition duration-300 cursor-pointer"
                effect="blur"
                onClick={() => setFullscreenImage(src)}
              />
            </div>
          ))}
        </div>

        {/* Fullscreen Image View */}
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

export default TestimonialFirst;
