import Layout from "../components/Layout"
import { useEffect, useState , useRef} from "react";
import logo from "../images/Logo Paper Plane.svg"
import logo1 from "../images/Logo Paper Plane (1).svg"
import { NavLink } from "react-router-dom";
import { useSwipeable } from "react-swipeable";
import main from "../images/main photo.webp"
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'swiper/css'
import 'swiper/css/navigation'


const images = [
  main,
  "https://images.pexels.com/photos/5759215/pexels-photo-5759215.jpeg",
 "https://images.pexels.com/photos/2507026/pexels-photo-2507026.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  "https://images.pexels.com/photos/15006261/pexels-photo-15006261/free-photo-of-grayscale-photo-of-a-bride-and-a-groom-smiling.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
  "https://images.pexels.com/photos/9210832/pexels-photo-9210832.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
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





  return (
   <Layout>


   <div
            {...handlers}
            className="relative h-screen 2xl:h-[1080px] w-full overflow-hidden bg-black"
          >
            <div className="relative h-full w-full">
              {images.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt={`Slide ${index}`}
                  className={`absolute inset-0 w-full h-full object-cover transition-all duration-[1000ms] ease-in-out ${
                    index === currentIndex ? 'opacity-100 scale-100 z-10' : 'opacity-0 scale-105 z-0'
                  }`}
                  style={{ transitionProperty: 'opacity, transform' }}
                />
              ))}
            </div>
          <div className="absolute inset-0 flex items-center justify-center text-center z-20">
             <h1 className="text-white font-cormorant leading-tight
                   text-[52px] sm:text-[60px] md:text-[80px] lg:text-[100px] xl:text-[140px]">
                    Let’s capture your <br /> story together
              </h1>
          </div>

          </div>
    <div className="min-h-screen flex items-center justify-center px-4 mt-16">
      <div className="bg-white border-2 border-gray-200 p-6 md:p-16 w-full max-w-[840px] md:w-[840px] md:h-[720px] h-auto relative text-center space-y-10">
        <hr className="border-t-4 border-gray-400" />
      <div  className="relative z-20 flex items-center justify-center"  data-aos="fade-up">
      <img src={logo1} alt="Centered" className="w-40 md:w-72 lg:w-[200px] opacity-90 lg:pt-14" />
    </div>

    <p  className="text-base md:text-[26px] lg:text-[32px] px-2 md:px-8 font-semibold lg:w-[728px] lg:h-[376px] lg:leading-8 font-cormorant text-gray-800 flex items-center"  data-aos="fade-up"  data-aos-delay="200">
      Paper Plane Wedding aims to craft heartfelt and visually stunning wedding films for couples embarking on their unique adventure of love, while guiding aspiring filmmakers to soar in their own creative journeys. From documenting intimate elopements in breathtaking landscapes to sharing our passion through inspiring workshops, Paper Plane Wedding caters to adventurous, free-spirited couples and fellow storytellers around the globe.
    </p>
        <hr className="border-t-4 border-gray-400 " />
      </div>
    </div> 



<div className="bg-[#f4f4f4] border border-black  max-w-[1499px] h-full md:m-28 px-6 sm:px-8 md:px-12 lg:px-20 py-12 lg:py-20 shadow-lg rounded-md m-4 space-y-16 lg:space-y-40">
          <div className="flex flex-col md:flex-row items-center gap-12 justify-center max-w-[1440px] mx-auto">
            <img
      src="https://images.pexels.com/photos/16632447/pexels-photo-16632447/free-photo-of-smiling-indian-bride-and-groom-in-traditional-costumes.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
      alt="Kiran and Anu"
      className="w-full md:w-[600px] lg:w-[720px] h-[360px] md:h-[600px] lg:h-[720px] rounded-md object-cover shadow-md"
    />
    <div className="flex flex-col justify-center items-center text-center max-w-[720px] h-full px-2 sm:px-4">
      <h2 className="text-[32px] sm:text-[36px] md:text-[40px] lg:text-[48px] font-cormorant font-semibold">
        KIRAN & ANU
      </h2>
      <p className="text-[20px] sm:text-[24px] md:text-[28px] lg:text-[32px] font-cormorant leading-relaxed pt-6 md:pt-8 pb-16 md:pb-28">
        We were blown away by Paper Plane Wedding! They made us feel so relaxed, and the photos and video perfectly captured our personalities and the joy of our day.
      </p>
      <button className="bg-gray-600 text-white rounded-md hover:bg-gray-700 transition font-cormorant w-full sm:w-[360px] md:w-[420px] lg:w-[560px] h-[60px] md:h-[70px] lg:h-[86px] text-[18px] sm:text-[20px] md:text-[22px] lg:text-[24px]">
        Explore their memories
      </button>
    </div>
  </div>
  <div className="flex flex-col-reverse md:flex-row items-center gap-12 justify-center max-w-[1440px] mx-auto">
    <div className="flex flex-col justify-center items-center text-center max-w-[720px] h-full px-2 sm:px-4">
      <h2 className="text-[32px] sm:text-[36px] md:text-[40px] lg:text-[48px] font-cormorant font-semibold">
        KIRAN & ANU
      </h2>
      <p className="text-[20px] sm:text-[24px] md:text-[28px] lg:text-[32px] font-cormorant leading-relaxed pt-6 md:pt-8 pb-16 md:pb-28">
        We were blown away by Paper Plane Wedding! They made us feel so relaxed, and the photos and video perfectly captured our personalities and the joy of our day.
      </p>
      <button className="bg-gray-600 text-white rounded-md hover:bg-gray-700 transition font-cormorant w-full sm:w-[360px] md:w-[420px] lg:w-[560px] h-[60px] md:h-[70px] lg:h-[86px] text-[18px] sm:text-[20px] md:text-[22px] lg:text-[24px]">
        Explore their memories
      </button>
    </div>
    <img
      src="https://images.pexels.com/photos/16632447/pexels-photo-16632447/free-photo-of-smiling-indian-bride-and-groom-in-traditional-costumes.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
      alt="Kiran and Anu"
      className="w-full md:w-[600px] lg:w-[720px] h-[360px] md:h-[600px] lg:h-[720px] rounded-md object-cover shadow-md"
    />
  </div>
</div>


  <div className="bg-[#1e1e1e] py-16 px-4 mt-28">
  <h2 className="text-white text-center text-2xl md:text-3xl lg:text-[48px] font-serif mb-6 md:mb-8 lg:mb-10 leading-tight">
    Best Moments of their Life
  </h2>
  <div className="flex flex-col md:flex-row justify-center gap-8 max-w-[1500px] mx-auto px-4">
    {[ 
      {
        title: "Ashique & Asiya",
        description:
          "Step into their world and explore the beautifully captured moments from their unforgettable wedding day.",
        image:
          "https://images.pexels.com/photos/30756162/pexels-photo-30756162/free-photo-of-romantic-black-and-white-wedding-portrait.jpeg",
      },
      {
        title: "Anna’s Bride to be",
        description:
          "Explore candid captures as brides-to-be filled with love, anticipation, and wedding planning moments.",
        image:
          "https://images.pexels.com/photos/28949501/pexels-photo-28949501/free-photo-of-tender-embrace-with-elegant-rose-bouquet.jpeg",
      },
      {
        title: "Kiran & Anu",
        description:
          "Witness their love blossom in their enchanting pre-wedding moments.",
        image:
          "https://images.pexels.com/photos/28949501/pexels-photo-28949501/free-photo-of-tender-embrace-with-elegant-rose-bouquet.jpeg",
      },
    ].map((item, index) => (
      <NavLink
        to="/gallery"
        key={index}
        className="group relative rounded-md overflow-hidden shadow-md w-full max-w-[460px] h-auto sm:h-[550px] md:h-[630px] transition-transform duration-300"
      >
        <img
          src={item.image}
          alt={item.title}
          className="w-full h-full object-cover rounded-md transform group-hover:scale-105 transition-transform duration-500 ease-in-out"
        />
        <div className="absolute left-0 right-0 bottom-0 top-1/2 bg-black bg-opacity-60 text-white text-center  flex flex-col items-center justify-between px-6 rounded-b-md py-10">
          <h3 className="text-3xl md:text-4xl lg:text-[40px] font-cormorant font-semibold leading-tight">
            {item.title}
          </h3>
          <p className="text-lg md:text-xl lg:text-[32px] font-cormorant  h-40 max-w-xs leading-relaxed">
            {item.description}
          </p>
        </div>
      </NavLink>
    ))}
  </div>
</div>

    <div className="bg-[#f4f4f4] flex flex-col md:flex-row items-center justify-between md:px-24 px-6 py-6 md:space-x-8 md:h-[240px] gap-5 rounded-md shadow-md overflow-hidden">
      <h3
        ref={leftRef}
        className={`text-xl md:text-3xl lg:text-[72px] font-cormorant text-center md:text-left transition-all duration-1000 ease-in-out ${
          leftVisible ? 'translate-x-0 opacity-100' : '-translate-x-12 opacity-0'
        }`}
      >
        Let’s capture your story together
      </h3>
      <NavLink
        to="/contact"
        ref={rightRef}
        className={`bg-[#1A1A18] text-white px-6 py-2 rounded-md lg:text-[36px] font-cormorant hover:bg-gray-800 transition-all duration-1000 ease-in-out ${
          rightVisible ? 'translate-x-0 opacity-100' : 'translate-x-12 opacity-0'
        }`}
      >
        Connect with us
      </NavLink>
    </div>

  <hr className="border-t-2 border-black" />
   </Layout>
   
  )
}



export default Home