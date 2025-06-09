import jose from "../../images/videos/jose.mp4";
import jose3 from "../../images/videos/jose3.mp4";
import Layout from '../../components/Layout';
import { useState } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import jose2 from "../../images/couples/jose (1).jpg"
import jose8 from "../../images/couples/jose (2).jpg"
import jose4 from "../../images/couples/jose (3).jpg"
import jose5 from "../../images/couples/jose (4).jpg"
import jose7 from "../../images/couples/jose (6).jpg"

const TestimonialThird = () => {
  const [loaded, setLoaded] = useState(false);

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
            Swasika & Pream
          </h1>
        </div>
      </div>

      {/* Gallery Section */}
      <div className="space-y-12 px-6 md:px-12 lg:px-24 py-12 bg-white">
        {/* Top row - 2 landscape images */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            jose2,
            jose8,
          ].map((img, index) => (
            <div key={index} className="aspect-[16/9] overflow-hidden rounded-lg">
              <LazyLoadImage
                src={`${img}?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80`}
                className="w-full h-full object-cover hover:scale-105 transition duration-300"
                alt={`Landscape ${index + 1}`}
                effect="blur"
                threshold={100}
              />
            </div>
          ))}
        </div>

        {/* Video section - slightly smaller on xl screens */}
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

        {/* Bottom row - 3 tall portrait images */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {[
           jose4,
           jose5,
            jose7,
          ].map((img, index) => (
            <div key={index} className="aspect-[2/3] overflow-hidden rounded-lg">
              <LazyLoadImage
                src={`${img}?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80`}
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