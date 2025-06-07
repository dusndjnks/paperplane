import main from "../images/main photo.webp"
import { useSwipeable } from "react-swipeable";
import Layout from "../components/Layout"
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";



const images = [
  main,
  "https://images.pexels.com/photos/27043729/pexels-photo-27043729/free-photo-of-a-lotus-flower.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  "https://images.pexels.com/photos/10257984/pexels-photo-10257984.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
  "https://images.pexels.com/photos/15006261/pexels-photo-15006261/free-photo-of-grayscale-photo-of-a-bride-and-a-groom-smiling.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
  "https://images.pexels.com/photos/9210832/pexels-photo-9210832.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
];  

const image = [
  "https://images.pexels.com/photos/10257984/pexels-photo-10257984.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
  "https://images.pexels.com/photos/2507026/pexels-photo-2507026.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  "https://images.pexels.com/photos/15006261/pexels-photo-15006261/free-photo-of-grayscale-photo-of-a-bride-and-a-groom-smiling.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
  "https://images.pexels.com/photos/9210832/pexels-photo-9210832.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  "https://images.pexels.com/photos/9210832/pexels-photo-9210832.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
];


const Gallery = () => {

  
    const [currentIndex, setCurrentIndex] = useState(0);
    const nextSlide = () => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    };
    const prevSlide = () => {
      setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
    };
    const handlers = useSwipeable({
      onSwipedLeft: nextSlide,
      onSwipedRight: prevSlide,
      preventDefaultTouchmoveEvent: true,
      trackMouse: true,
    });
  
    useEffect(() => {
      const interval = setInterval(nextSlide, 4000);
      return () => clearInterval(interval);
    }, []);
  
  return (
    <Layout>
      <div>
          <div
            {...handlers}
            className="relative h-screen  w-full overflow-hidden bg-black"
          >
            <div className="relative h-full w-full">
              {image.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt={`Slide ${index}`}
                  className={`absolute inset-0 w-full h-full object-cover transition-all  brightness-50 duration-[1000ms] ease-in-out ${
                    index === currentIndex ? 'opacity-100 scale-100 z-10' : 'opacity-0 scale-105 z-0'
                  }`}
                  style={{ transitionProperty: 'opacity, transform' }}
                />
              ))}
            </div>
          <div className="absolute inset-0 flex items-center justify-center text-center z-20">
             <h1 className="text-white font-cormorant leading-tight
                   text-[52px] sm:text-[60px] md:text-[80px] lg:text-[100px] xl:text-[120px]">
                    Your precious moments
              </h1>
          </div>

          </div>
    </div>

     <div className=" px-5 md:px-12 xl:px-20">
  <div className="flex items-center justify-center pt-16 font-cormorant">
    <h1 className=" text-2xl sm:text-3xl md:text-4xl xl:text-6xl mb-3 text-center">
      Save The Date
    </h1>
  </div>
<div className="w-full overflow-hidden">
  <div className="flex animate-marquee">
    {[...images, ...images].map((src, i) => (
      <div
        key={i}
        className="flex-shrink-0 w-[260px] sm:w-[300px] md:w-[360px] lg:w-[370px] xl:w-[420px] mx-1 "
      >
        <img
          src={src}
          alt={`Slide ${i + 1}`}
          className="h-[310px] md:h-[360px] lg:h-[400px] xl:h-[530px] w-full object-cover shadow-lg"
        />
      </div>
    ))}
  </div>
</div>



  <div className="flex justify-end lg:py-8 py-2">
    <NavLink
      to="/save-the-date"
      className="text-sm sm:text-base md:text-lg lg:text-2xl font-cormorant text-gray-800 border border-gray-800 px-6 lg:px-16 py-2 rounded hover:bg-gray-800 hover:text-white transition"
    >
      View All
    </NavLink>
  </div>
</div>


   <div className=" px-5 md:px-12 xl:px-20">
  <div className="flex items-center justify-center pt-16 font-cormorant">
    <h1 className="text-2xl sm:text-3xl md:text-4xl xl:text-6xl mb-3 text-center">
      Engagement
    </h1>
  </div>

<div className="w-full overflow-hidden">
  <div className="flex animate-marquee-reverse">
    {[...images, ...images].map((src, i) => (
      <div
        key={i}
        className="flex-shrink-0 w-[260px] sm:w-[300px] md:w-[360px] lg:w-[370px] xl:w-[420px] mx-1"
      >
        <img
          src={src}
          alt={`Slide ${i + 1}`}
          className="h-[310px] md:h-[360px] lg:h-[400px] xl:h-[530px] w-full object-cover shadow-lg"
        />
      </div>
    ))}
  </div>
</div>




  <div className="flex justify-end lg:py-8 py-2">
    <NavLink
      to="/engagement"
      className="text-sm sm:text-base md:text-lg lg:text-2xl font-cormorant text-gray-800 border border-gray-800 px-6 lg:px-16 py-2 rounded hover:bg-gray-800 hover:text-white transition"
    >
      View All
    </NavLink>
  </div>
</div>

<div className="w-full px-4 md:px-10 lg:px-16">
  <div className="flex items-center justify-center pt-6 font-cormorant">
    <h1 className="text-2xl sm:text-3xl md:text-4xl xl:text-6xl text-center">
      Wedding
    </h1>
  </div>

<div className="w-full overflow-hidden">
  <div className="flex animate-marquee">
    {[...images, ...images].map((src, i) => (
      <div
        key={i}
        className="flex-shrink-0 w-[260px] sm:w-[300px] md:w-[360px] lg:w-[370px] xl:w-[420px] mx-1 "
      >
        <img
          src={src}
          alt={`Slide ${i + 1}`}
          className="h-[310px] md:h-[360px] lg:h-[400px] xl:h-[530px] w-full object-cover shadow-lg"
        />
      </div>
    ))}
  </div>
</div>


  <div className="flex justify-end  lg:py-8 py-2 mb-10">
    <NavLink
      to="/wedding"
      className="text-sm sm:text-base md:text-lg lg:text-2xl font-cormorant text-gray-800 border border-gray-800 px-6 lg:px-16 py-2 rounded hover:bg-gray-800 hover:text-white transition"
    >
      View All
    </NavLink>
  </div>
</div>


          
    </Layout>
  )
}

export default Gallery