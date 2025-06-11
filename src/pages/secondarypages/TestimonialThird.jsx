import { useEffect, useState } from 'react';
import Layout from '../../components/Layout';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

import jose from "../../images/videos/jose.mp4";
import jose3 from "../../images/videos/jose3.mp4";
import jose2 from "../../images/couples/jose (1).jpg";
import jose8 from "../../images/couples/jose (2).jpg";
import jose4 from "../../images/couples/jose (3).jpg";
import jose5 from "../../images/couples/jose (4).jpg";
import jose7 from "../../images/couples/jose (6).jpg";
import jose91 from "../../images/couples/jose9 (1).jpg";
import jose92 from "../../images/couples/jose9 (2).jpg";
import jose93 from "../../images/couples/jose9 (3).jpg";
import jose94 from "../../images/couples/jose9 (4).jpg";
import jose95 from "../../images/couples/jose9 (5).jpg";
import jose9 from "../../images/couples/jose9.jpg";
import jose01 from "../../images/couples/jose0 (1).jpg";
import jose02 from "../../images/couples/jose0 (2).jpg";

const TestimonialThird = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <Layout>
      {/* Hero Section with Background Video */}
      <div className="relative h-[60vh] md:h-screen w-full overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover object-bottom brightness-75"
          onLoadedData={() => setLoaded(true)}
        >
          <source src={jose3} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <div className={`absolute inset-0 flex items-center justify-center z-10 transition-opacity duration-500 ${loaded ? 'opacity-100' : 'opacity-0'}`}>
          <h1 className="text-white text-center font-cormorant text-3xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight px-4">
            JOSE & SREELEKSHMI
          </h1>
        </div>
      </div>

      {/* Gallery Section */}
      <div className="space-y-12 px-6 md:px-12 lg:px-24 py-12 bg-white">
        {/* Top row - 2 landscape images */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[jose2, jose94, jose8, jose91].map((img, index) => (
            <div key={index} className="aspect-[16/9] overflow-hidden rounded-lg">
              <LazyLoadImage
                src={img}
                className="w-full h-full object-cover hover:scale-105 transition duration-300"
                alt={`Landscape ${index + 1}`}
                effect="blur"
                threshold={100}
              />
            </div>
          ))}
        </div>

        {/* Couple Highlight Section */}
        <div className="flex items-center justify-center px-6 my-20 md:my-16 lg:my-14 xl:my-20">
          <div className="bg-white border-2 border-gray-200 p-6 md:p-12 w-full max-w-[760px] text-center space-y-10 mx-auto py-10 font-cormorant">
            <hr className="border-t-4 border-gray-300" />
            <p
              className="text-2xl sm:text-3xl md:text-4xl lg:text-[36px] xl:text-[40px] text-gray-900 font-semibold"
              data-aos="fade-up"
            >
              Jose & Sreelekshmi
            </p>
            <p
              className="text-lg sm:text-xl md:text-2xl lg:text-[22px] xl:text-[24px] 2xl:text-[26px] leading-relaxed text-gray-800 px-3 sm:px-6 md:px-8 xl:px-12"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              Capturing the love story of <span className="font-semibold">Jose and Sreelekshmi</span> was nothing short of magical.
              Their bond radiated warmth, laughter, and a quiet sincerity that made every frame feel timeless.
              From the tender glances to the joyful celebration, their day was filled with heartfelt moments
              and genuine connection — a true honor to witness and preserve.
            </p>
            <hr className="border-t-4 border-gray-300" />
          </div>
        </div>

        {/* Video Section */}
        <div className="px-0 md:px-8 py-8 xl:w-4/5 xl:mx-auto">
          <div className="aspect-video w-full overflow-hidden rounded-xl bg-gray-100 shadow-lg">
            <video
              src={jose}
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Bottom row - 3 portrait images */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {[jose4, jose5, jose7, jose92, jose01, jose02].map((img, index) => (
            <div key={index} className="aspect-[2/3] overflow-hidden rounded-lg">
              <LazyLoadImage
                src={img}
                className="w-full h-full object-cover hover:scale-105 transition duration-300"
                alt={`Portrait ${index + 1}`}
                effect="blur"
                threshold={100}
              />
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default TestimonialThird;
