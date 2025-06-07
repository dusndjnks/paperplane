import Layout from "../components/Layout"
import { useEffect, useState , useRef} from "react";
import logo from "../images/Logo Paper Plane.svg"
import logo1 from "../images/Logo Paper Plane (1).svg"
import { NavLink } from "react-router-dom";
import { useSwipeable } from "react-swipeable";
import main from "../images/main1.webp"
import main2 from "../images/main2.webp"
import main3 from "../images/main3.webp"  
import main4 from "../images/main4.webp"
import main5 from "../images/contact/contact1.webp"
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'swiper/css'
import 'swiper/css/navigation'
import rishi1 from "../images/rishi1.webp"
import pream1 from "../images/pream1.webp"
import jose1 from  "../images/jose1.webp"


const images = [
main,
main2,
main3,
main4,
main5
];

const image = [
  "https://images.pexels.com/photos/10257984/pexels-photo-10257984.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
  "https://images.pexels.com/photos/2507026/pexels-photo-2507026.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  "https://images.pexels.com/photos/15006261/pexels-photo-15006261/free-photo-of-grayscale-photo-of-a-bride-and-a-groom-smiling.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
  "https://images.pexels.com/photos/9210832/pexels-photo-9210832.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
];
  

const Home = () => {

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

  const leftRef = useRef();
  const rightRef = useRef();
  const [leftVisible, setLeftVisible] = useState(false);
  const [rightVisible, setRightVisible] = useState(false);

  useEffect(() => {
    const leftObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setLeftVisible(true);
          leftObserver.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    const rightObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setRightVisible(true);
          rightObserver.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (leftRef.current) leftObserver.observe(leftRef.current);
    if (rightRef.current) rightObserver.observe(rightRef.current);

    return () => {
      leftObserver.disconnect();
      rightObserver.disconnect();
    };
  }, []);

useEffect(() => {
  AOS.init({ once: true, duration: 1000 });
}, []); 

  const [index, setIndex] = useState(0);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);


  return (
   <Layout>

       {loading && (
        <div className="fixed inset-0 z-50 bg-white flex items-center justify-center">
          <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-black"></div>
        </div>
      )}

      <div className={`${loading ? "hidden" : "block"}`}>
        <section className="bg-[#f4f4f4] min-h-screen">
        
   <div
  {...handlers}
  className="relative w-full overflow-hidden bg-black h-[60vh] sm:h-screen"
>
  {/* Slide Track */}
  <div
    className="flex h-full transition-transform duration-[1500ms] ease-in-out"
    style={{ transform: `translateX(-${currentIndex * 100}%)` }}
  >
    {images.map((img, index) => (
      <div
        key={index}
        className="w-full h-full flex-shrink-0"
      >
        <img
          src={img}
          alt={`Slide ${index}`}
          className="w-full h-full object-cover brightness-75"
        />
      </div>
    ))}
  </div>

  {/* Overlay Logo */}
  <div className="absolute inset-0 z-20 flex items-center justify-center">
    <img
      src={logo}
      alt="Logo"
      className="w-[280px] sm:w-[360px] md:w-[460px] lg:w-[540px] xl:w-[600px] h-auto object-contain"
    />
  </div>
</div>


<div className="flex items-center justify-center px-6 my-20 md:my-16 lg:my-14 xl:my-20">
  <div className="bg-white border-2 border-gray-200 p-6 md:p-12 w-full max-w-[760px] text-center space-y-10 mx-auto py-10 font-cormorant">
    
    {/* Top Border */}
    <hr className="border-t-4 border-gray-300" />

    {/* Logo */}
    <div className="flex justify-center" data-aos="fade-up">
      <img
        src={logo1}
        alt="Paper Plane Logo"
        className="w-44 sm:w-52 md:w-64 lg:w-[180px] xl:w-[240px] opacity-90"
      />
    </div>

    {/* Description Text */}
    <p
      className="text-lg sm:text-xl md:text-2xl lg:text-[22px] xl:text-[24px] 2xl:text-[26px] leading-relaxed text-gray-800 px-3 sm:px-6 md:px-8 xl:px-12"
      data-aos="fade-up"
      data-aos-delay="200"
    >
      <span className="font-semibold">Paper Plane Wedding</span> aims to craft heartfelt and visually
      stunning wedding films for couples embarking on their unique adventure of love, while guiding
      aspiring filmmakers to soar in their own creative journeys. From documenting intimate elopements
      in breathtaking landscapes to sharing our passion through inspiring workshops, Paper Plane Wedding
      caters to adventurous, free-spirited couples and fellow storytellers around the globe.
    </p>

    {/* Bottom Border */}
    <hr className="border-t-4 border-gray-300" />
  </div>
</div>


<div className="bg-[#f4f4f4] border-2 border-gray-200 px-4 sm:px-6 md:px-12 lg:px-12 xl:px-8 py-10 lg:py-24 shadow-xl rounded-md md:my-12 space-y-20 mx-4 sm:mx-6 md:mx-12 lg:mx-10 xl:max-w-[1100px] xl:mx-auto ">

  <div className="flex flex-col md:flex-row items-center gap-10 justify-center max-w-[1340px] mx-auto">
    <img
      src={pream1}
      alt="Swasika and Pream"
      className="w-full md:w-1/2 aspect-square object-cover  rounded-lg shadow-lg max-h-[400px] md:max-h-none xl:max-w-[440px] xl:max-h-[440px]"
    />
    <div className="w-full md:w-1/2 flex flex-col justify-center items-center text-center px-4 md:px-8">
      <h2 className="text-lg sm:text-xl md:text-2xl lg:text-4xl xl:text-5xl font-cormorant uppercase font-semibold">
        Swasika & Pream
      </h2>
      <p className="text-sm sm:text-base md:text-[14px] lg:text-xl xl:text-2xl max-w-[420px] font-cormorant leading-relaxed pt-4 md:pt-6 pb-6">
        Paper Plane Wedding's work is breathtaking. They made us feel so comfortable, and the film and photos are incredibly personal and beautiful.
      </p>
      <NavLink
        to="/swasika&pream"
        className="bg-gray-600 text-white rounded-md hover:bg-gray-700 transition font-cormorant
          w-[180px] sm:w-[220px] md:w-[240px] lg:w-[300px] xl:w-[340px]
          h-[36px] sm:h-[44px] md:h-[46px] lg:h-[54px] xl:h-[60px]
          text-sm sm:text-base md:text-[14px] lg:text-lg xl:text-xl
          flex items-center justify-center mx-auto"
      >
        Explore their memories
      </NavLink>
    </div>
  </div>

  <div className="flex flex-col-reverse md:flex-row items-center gap-10 justify-center max-w-[1340px] mx-auto">
    <div className="w-full md:w-1/2 flex flex-col justify-center items-center text-center px-4 md:px-8">
      <h2 className="text-lg sm:text-xl md:text-2xl lg:text-4xl xl:text-5xl font-cormorant uppercase font-semibold">
        Rishi & Aiswarya
      </h2>
      <p className="text-sm sm:text-base md:text-[14px] lg:text-xl xl:text-2xl max-w-[420px] font-cormorant leading-relaxed pt-4 md:pt-6 pb-6">
        We were blown away by Paper Plane Wedding! They made us feel so relaxed, and the photos and video perfectly captured our personalities and the joy of our day.
      </p>
      <NavLink
        to="/rishi&aiswarya"
        className="bg-gray-600 text-white rounded-md hover:bg-gray-700 transition font-cormorant
          w-[180px] sm:w-[220px] md:w-[240px] lg:w-[300px] xl:w-[340px]
          h-[36px] sm:h-[44px] md:h-[46px] lg:h-[54px] xl:h-[60px]
          text-sm sm:text-base md:text-[14px] lg:text-lg xl:text-xl
          flex items-center justify-center mx-auto"
      >
        Explore their memories
      </NavLink>
    </div>
    <img
      src={rishi1}
      alt="Rishi and Aiswarya"
      className="w-full md:w-1/2 aspect-square object-cover sm:object-top rounded-lg shadow-lg max-h-[400px] md:max-h-none xl:max-w-[440px] xl:max-h-[440px]"
    />
  </div>
    
  <div className="flex flex-col md:flex-row items-center gap-10 justify-center max-w-[1340px] mx-auto">
    <img
      src={jose1}
      alt="Jose and Sreelekshmi"
      className="w-full md:w-1/2 aspect-square object-cover rounded-lg shadow-lg max-h-[400px] md:max-h-none xl:max-w-[440px] xl:max-h-[440px]"
    />
    <div className="w-full md:w-1/2 flex flex-col justify-center items-center text-center px-4 md:px-8">
      <h2 className="text-lg sm:text-xl md:text-2xl lg:text-4xl xl:text-5xl font-cormorant uppercase font-semibold">
        Jose & Sreelekshmi
      </h2>
      <p className="text-sm sm:text-base md:text-[14px] lg:text-xl xl:text-2xl max-w-[420px] font-cormorant leading-relaxed pt-4 md:pt-6 pb-6">
        Paper Plane Wedding exceeded all our expectations! They captured every special moment so naturally and beautifully. We felt completely at ease the entire time, and the final photos and film truly reflect the love and excitement of our wedding day.
      </p>
      <NavLink
        to="/swasika&pream"
        className="bg-gray-600 text-white rounded-md hover:bg-gray-700 transition font-cormorant
          w-[180px] sm:w-[220px] md:w-[240px] lg:w-[300px] xl:w-[340px]
          h-[36px] sm:h-[44px] md:h-[46px] lg:h-[54px] xl:h-[60px]
          text-sm sm:text-base md:text-[14px] lg:text-lg xl:text-xl
          flex items-center justify-center mx-auto"
      >
        Explore their memories
      </NavLink>
    </div>
  </div>
</div>




<div className="bg-[#1e1e1e] py-16 px-4 mt-28">
  <h2 className="text-white text-center text-2xl md:text-3xl lg:text-[48px] font-serif mb-6 md:mb-8 lg:mb-10 leading-tight">
    Best Moments of their Life
  </h2>

  <div className="flex flex-wrap md:flex-nowrap justify-center items-stretch gap-6 sm:gap-6 lg:gap-8 max-w-[1200px] mx-auto px-5 md:px-6 ">
    {[
      {
        title: "Ashique & Asiya",
        description: "Step into their world and explore the beautifully captured moments from their unforgettable wedding day.",
        image: "https://images.pexels.com/photos/30756162/pexels-photo-30756162/free-photo-of-romantic-black-and-white-wedding-portrait.jpeg",
      },
      {
        title: "Anna's Bride to be",
        description: "Explore candid captures as brides-to-be filled with love, anticipation, and wedding planning moments.",
        image: "https://images.pexels.com/photos/28949501/pexels-photo-28949501/free-photo-of-tender-embrace-with-elegant-rose-bouquet.jpeg",
      },
      {
        title: "Kiran & Anu",
        description: "Witness their love blossom in their enchanting pre-wedding moments.",
        image: "https://images.pexels.com/photos/30756162/pexels-photo-30756162/free-photo-of-romantic-black-and-white-wedding-portrait.jpeg",
      },
    ].map((item, index) => (
      <NavLink
        key={index}
        to="/gallery"
        className="group relative rounded-md overflow-hidden shadow-md transition-transform duration-300 aspect-[4/5] 
          w-full sm:w-[calc(50%-12px)] md:w-[calc(33.333%-16px)] max-w-[380px] md:max-w-[300px] lg:max-w-[340px]"
      >
        <img
          src={item.image}
          alt={item.title}
          className="w-full h-full object-cover rounded-md transform group-hover:scale-105 transition-transform duration-500 ease-in-out"
        />
        <div className="absolute inset-0 top-1/2 flex flex-col items-center justify-center gap-3 bg-black bg-opacity-60 text-white text-center px-4 py-6">
          <h3 className="font-cormorant font-semibold text-lg sm:text-xl md:text-[18px] lg:text-2xl">{item.title}</h3>
          <p className="font-cormorant text-sm sm:text-base md:text-sm lg:text-base max-w-xs">
            {item.description}
          </p>
        </div>
      </NavLink>
    ))}
  </div>
</div>

<div className="bg-[#f4f4f4] flex flex-col md:flex-row items-center justify-between md:px-24 xl:px-32 px-6 py-6 md:py-12 md:space-x-5 gap-5 rounded-md shadow-md overflow-hidden">
  <h3
    ref={leftRef}
    className={`text-xl md:text-3xl lg:text-[47px] xl:text-[53px] font-cormorant text-center md:text-left transition-all duration-1000 ease-in-out ${
      leftVisible ? 'translate-x-0 opacity-100' : '-translate-x-12 opacity-0'
    }`}
  >
    Let’s capture your story together
  </h3>
  <NavLink
    to="/contact"
    ref={rightRef}
    className={`bg-[#1A1A18] text-white px-6 py-2 rounded-md font-cormorant hover:bg-gray-800 transition-all duration-1000 ease-in-out ${
      rightVisible ? 'translate-x-0 opacity-100' : 'translate-x-12 opacity-0'
    } text-lg md:text-xl lg:text-2xl xl:text-3xl`}
  >
    Connect with us
  </NavLink>
</div>

  <hr className="border-t-2 border-black" />
        </section>
      </div>


   </Layout>
   
  )
}



export default Home