import jose from "../../images/videos/jose.mp4"
import Layout from '../../components/Layout'
import { useState } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const TestimonialThird = () => {
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
                  <source src={jose} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
        
                <div className="absolute inset-0 flex items-center justify-center z-10">
                  <h1 className="text-white text-center font-cormorant text-3xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight px-4">
                    Swasika & Pream
                  </h1>
                </div>
              </div>
    </Layout>
  )
}

export default TestimonialThird