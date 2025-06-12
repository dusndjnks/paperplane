import { NavLink } from 'react-router-dom';
import Layout from '../../components/Layout';
import { useState, useEffect } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import AOS from 'aos';
import 'aos/dist/aos.css';  

import save1 from "../../images/savethedate/img (1).webp";
import save2 from "../../images/savethedate/img (2).webp";
import save3 from "../../images/savethedate/img (3).webp";
import save4 from "../../images/savethedate/img (4).webp";
import save5 from "../../images/savethedate/img (5).webp";
import save6 from "../../images/savethedate/img (6).webp";
import save7 from "../../images/savethedate/img (7).webp";
import save8 from "../../images/savethedate/img (8).webp";
import save9 from "../../images/savethedate/img (9).webp";
import save10 from "../../images/savethedate/img (10).webp";
import save11 from "../../images/savethedate/img (11).webp";
import save12 from "../../images/savethedate/img (12).webp";
import save13 from "../../images/savethedate/img (13).webp";
import save14 from "../../images/savethedate/img (14).webp";
import save15 from "../../images/savethedate/img (15).webp";
import save16 from "../../images/savethedate/img (16).webp";
import save17 from "../../images/savethedate/img (17).webp";
import save18 from "../../images/savethedate/img (18).webp";
import save19 from "../../images/savethedate/img (19).webp";
import save20 from "../../images/savethedate/img (20).webp";
import save21 from "../../images/savethedate/img (21).webp";
import save22 from "../../images/savethedate/img (22).webp";
import save23 from "../../images/savethedate/img (23).webp";
import save24 from "../../images/savethedate/img (24).webp";
import save25 from "../../images/savethedate/img (25).webp";
import save26 from "../../images/savethedate/img (26).webp";
import save27 from "../../images/savethedate/img (27).webp";
import save28 from "../../images/savethedate/img (28).webp";

import main2 from "../../images/main2.webp";
const SaveTheDate = () => {
  const [fullscreenImage, setFullscreenImage] = useState(null);

  const images = [
save3, save4, save5, save6, save7, save8,
  save9, save10, save11, save12, save13, save14, save15, save16,
  save17, save18, save19, save20, save21, save22, save23, save24,
  save25, save26, save27, save28
  ];

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: 'ease-in-out',
    });
  }, []);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") setFullscreenImage(null);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <Layout>
      {/* Hero Section */}
      <div className="relative h-screen w-full">
        <img
          src={main2}
          alt="Hero"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-white font-cormorant leading-tight text-[42px] sm:text-[60px] md:text-[80px] lg:text-[100px]">
            Save The Date
          </h1>
        </div>
      </div>

 {/* Gallery Section */}
<div className="min-h-screen bg-[#f9f7f6] px-4 sm:px-6 md:px-12 lg:px-20 py-12">
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-4">
    {images.map((src, index) => (
      <div key={index} className="w-full overflow-hidden rounded-lg" data-aos="zoom-in">
        <LazyLoadImage
          src={src}
          effect="blur"
          alt={`Gallery ${index + 1}`}
          onClick={() => setFullscreenImage(src)}
          className="w-full h-full object-cover rounded-lg cursor-pointer shadow-lg transition-transform duration-700 hover:scale-105"
        />
      </div>
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

  {/* Zoom animation */}
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

export default SaveTheDate;
