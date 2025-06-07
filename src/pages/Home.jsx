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
import rishi from "../images/2nd-photo-rishi-aishwrya-_1_-_1_.webp"
import pream from "../images/1st-photo-swasika-pream-_2_.webp"


const images = [
  main,
  "https://images.pexels.com/photos/5759215/pexels-photo-5759215.jpeg",
 "https://instagram.fcjb3-2.fna.fbcdn.net/v/t39.30808-6/421779287_18037634458726065_983376464591270904_n.jpg?stp=dst-jpg_e35_tt6&efg=eyJ2ZW5jb2RlX3RhZyI6IkZFRUQuaW1hZ2VfdXJsZ2VuLjE0NDB4OTkyLnNkci5mMzA4MDguZGVmYXVsdF9pbWFnZSJ9&_nc_ht=instagram.fcjb3-2.fna.fbcdn.net&_nc_cat=109&_nc_oc=Q6cZ2QGEL03uWbkrEMQY2TapaqED_i6y4PnM-a6NtVDc2VUVjxWz-1jVvhG34Wa5QAUJQdL8rEgCDhSTNw85wOUOKpZf&_nc_ohc=2pGtFiH0WR8Q7kNvwHEszSK&_nc_gid=W-6YLnkN85tz8RiAxMvo_g&edm=AP4sbd4AAAAA&ccb=7-5&ig_cache_key=MzI4Nzg5ODA4Mjg5Mjk1Mjc2NQ%3D%3D.3-ccb7-5&oh=00_AfNMF1c6REQRxFM0YI--5JLKKLClCBSjlJiR7aO1jq_5Cg&oe=6849B05A&_nc_sid=7a9f4b",
  "https://instagram.fcjb3-2.fna.fbcdn.net/v/t51.2885-15/474002154_18073310071726065_8746625963891873110_n.jpg?stp=dst-jpg_e35_tt6&efg=eyJ2ZW5jb2RlX3RhZyI6IkNBUk9VU0VMX0lURU0uaW1hZ2VfdXJsZ2VuLjE0NDB4OTYwLnNkci5mNzU3NjEuZGVmYXVsdF9pbWFnZSJ9&_nc_ht=instagram.fcjb3-2.fna.fbcdn.net&_nc_cat=109&_nc_oc=Q6cZ2QHsODikXC4ZP_RCHTNYc36uxJmB63aXDNBQK4r2Geo4Z0StSmDRulWa659lXTqDNE34tzaF9XEXpV_uUdlJ5i5k&_nc_ohc=CPvgAImufA8Q7kNvwGdSnF2&_nc_gid=-UnOLT4bM-yy4Trj9Herdw&edm=APoiHPcBAAAA&ccb=7-5&ig_cache_key=MzU0Njk2MzQyNjcwMDg0NzEyOA%3D%3D.3-ccb7-5&oh=00_AfP5qmXZDHUyE8jFeFfgG8p1qQn7l4GBU7Q1KVI-2y-GfA&oe=6849D5FE&_nc_sid=22de04",
  "https://instagram.fcjb3-3.fna.fbcdn.net/v/t51.29350-15/458486604_915396617280784_5313754220408095017_n.jpg?stp=dst-jpg_e35_tt6&efg=eyJ2ZW5jb2RlX3RhZyI6IkNBUk9VU0VMX0lURU0uaW1hZ2VfdXJsZ2VuLjE0NDB4OTYwLnNkci5mMjkzNTAuZGVmYXVsdF9pbWFnZSJ9&_nc_ht=instagram.fcjb3-3.fna.fbcdn.net&_nc_cat=104&_nc_oc=Q6cZ2QEEm--WEUcgzgye5IwYRzV9JsSwGhALJJPsU5b5pLRmF-p51eI2qjlfOLTn5rdc9TjlOtEDMhfe_Q_hEbCfpu7M&_nc_ohc=e9G4yaqqbAAQ7kNvwGtXL9o&_nc_gid=fZcrKIyx46UbUvoHOdgjeA&edm=APoiHPcBAAAA&ccb=7-5&ig_cache_key=MzQ1MDI1NDMxOTg2NDUzMjc2Ng%3D%3D.3-ccb7-5&oh=00_AfPGGy7F1E0DZX4driIBItMCeWHPuKmiufv0J3M6pj6Xvg&oe=6849BBC6&_nc_sid=22de04"
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
            className="relative h-screen w-full overflow-hidden bg-black"
          >
            <div className="relative h-full w-full">
              {images.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt={`Slide ${index}`}
                  className={`absolute inset-0 w-full h-full object-cover transition-all brightness-50 duration-[1000ms] ease-in-out ${
                    index === currentIndex ? 'opacity-100 scale-100 z-10' : 'opacity-0 scale-105 z-0'
                  }`}
                  style={{ transitionProperty: 'opacity, transform' }}
                />
              ))}
            </div>
          <div className="absolute inset-0 flex items-center justify-center text-center z-20">
  <img
    src={logo}
    alt="Logo"
    className="w-[290px] sm:w-[360px] md:w-[480px] lg:w-[548px] h-auto object-contain"
  />
</div>
          </div>

 <div className="flex items-center justify-center px-6 my-20 lg:my-10 md:my-16">
  <div className="bg-white border-2 border-gray-200 p-6 md:p-12 w-full max-w-[760px] relative text-center space-y-8 mx-auto py-8">
    <hr className="border-t-4 border-gray-400" />

    <div className="relative z-20 flex items-center justify-center" data-aos="fade-up">
      <img
        src={logo1}
        alt="Centered"
        className="w-48 md:w-64 lg:w-[180px] opacity-90 lg:pt-5"
      />
    </div>

    <p
      className="text-lg md:text-[22px] lg:text-[22px] xl:text-[26px] px-2 md:px-6 xl:px-9 font-semibold  leading-6 md:leading-8  lg:leading-9 font-cormorant text-gray-800 flex items-center mx-auto"
      data-aos="fade-up"
      data-aos-delay="200"
    >
      Paper Plane Wedding aims to craft heartfelt and visually stunning wedding films for couples embarking on their unique adventure of love, while guiding aspiring filmmakers to soar in their own creative journeys. From documenting intimate elopements in breathtaking landscapes to sharing our passion through inspiring workshops, Paper Plane Wedding caters to adventurous, free-spirited couples and fellow storytellers around the globe.
    </p>

    <hr className="border-t-4 border-gray-400" />
  </div>
</div>


<div className="h-full bg-[#f4f4f4] border px-4 sm:px-6 md:px-12 lg:px-24 py-10 lg:py-24   shadow-lg rounded-md md:my-12 space-y-20 mx-4 sm:mx-6 md:mx-12 lg:mx-20">
  {/* Block 1 */}
  <div className="flex flex-col md:flex-row items-center gap-10 justify-center max-w-[1340px] mx-auto">
    <img
      src="https://instagram.fcjb3-3.fna.fbcdn.net/v/t51.29350-15/422610351_882388843886896_482627537331775516_n.heic?stp=dst-jpg_e35_tt6&efg=eyJ2ZW5jb2RlX3RhZyI6IkNBUk9VU0VMX0lURU0uaW1hZ2VfdXJsZ2VuLjE0NDB4MTgwMC5zZHIuZjI5MzUwLmRlZmF1bHRfaW1hZ2UifQ&_nc_ht=instagram.fcjb3-3.fna.fbcdn.net&_nc_cat=104&_nc_oc=Q6cZ2QHtgbRnQn-CKQawRv6X8uVNy_UfDp2tKQGm8re2eZQxtVQMEa0FML-uu-XJYA1534C1PJXn9vLLl-Q21glL6nR9&_nc_ohc=AOPOqmd-btsQ7kNvwHgvEry&_nc_gid=gUI0LhzpXnYae-gFbjjTRQ&edm=APoiHPcBAAAA&ccb=7-5&ig_cache_key=MzI4ODQ2MjM1NDE4NjQ4NTc0MA%3D%3D.3-ccb7-5&oh=00_AfMC8aYP3QpOJljpIFf6jYGujuDtKC4rDCs4G9skEq3tCQ&oe=6849D148&_nc_sid=22de04"
      alt="Kiran and Anu"
      className="w-full md:w-1/2 aspect-square lg:w-[520px] rounded-md object-cover shadow-md"
    />
    <div className="w-full md:w-1/2 flex flex-col justify-center items-center text-center">
      <h2 className="text-[24px] sm:text-[30px] md:text-[36px] lg:text-[40px] font-cormorant uppercase font-semibold">
        swasika & pream
      </h2>
      <p className="text-[16px] sm:text-[18px] md:text-[20px] lg:text-[22px]  w-full sm:w-[260px] md:w-[340px] lg:w-[420px]  font-cormorant leading-relaxed pt-4 md:pt-10 pb-10">
        Paper Plane Wedding's work is breathtaking. They made us feel so comfortable, and the film and photos are incredibly personal and beautiful.
      </p>
      <NavLink
        to="/swasika&pream"
        className="
          bg-gray-600 text-white rounded-md hover:bg-gray-700 transition font-cormorant
          mx-auto
          w-full sm:w-[260px] md:w-[340px] lg:w-[400px]
          h-[44px] md:h-[58px] lg:h-[64px]
          text-[16px] sm:text-[18px] md:text-[20px] lg:text-[22px]
          flex items-center justify-center
        "
      >
        Explore their memories
      </NavLink>
    </div>
  </div>

  {/* Block 2 */}
  <div className="flex flex-col-reverse md:flex-row items-center gap-10 justify-center max-w-[1440px] mx-auto">
    <div className="w-full md:w-1/2 flex flex-col justify-center items-center text-center">
      <h2 className="text-[24px] sm:text-[30px] md:text-[36px] lg:text-[40px] font-cormorant uppercase font-semibold">
        rishi & aiswarya
      </h2>
      <p className="text-[16px] sm:text-[18px] md:text-[20px] lg:text-[22px]  w-full sm:w-[260px] md:w-[340px] lg:w-[420px]  font-cormorant leading-relaxed pt-4 md:pt-10 pb-10">
        We were blown away by Paper Plane Wedding! They made us feel so relaxed, and the photos and video perfectly captured our personalities and the joy of our day.
      </p>
      <NavLink
        to="/rishi&aiswarya"
        className="
          bg-gray-600 text-white rounded-md hover:bg-gray-700 transition font-cormorant
          mx-auto
          w-full sm:w-[260px] md:w-[340px] lg:w-[400px]
          h-[44px] md:h-[58px] lg:h-[64px]
          text-[16px] sm:text-[18px] md:text-[20px] lg:text-[22px]
          flex items-center justify-center
        "
      >
        Explore their memories
      </NavLink>
    </div>
    <img
      src="https://instagram.fcjb3-4.fna.fbcdn.net/v/t51.29350-15/458499090_1696014751228044_5823032497820993474_n.jpg?stp=dst-jpg_e35_tt6&efg=eyJ2ZW5jb2RlX3RhZyI6IkNBUk9VU0VMX0lURU0uaW1hZ2VfdXJsZ2VuLjE0NDB4MTgwMC5zZHIuZjI5MzUwLmRlZmF1bHRfaW1hZ2UifQ&_nc_ht=instagram.fcjb3-4.fna.fbcdn.net&_nc_cat=100&_nc_oc=Q6cZ2QHm9wB1pJV_S8s2Ov0UHTLCN_ekCX4OqDrKNIhVKV4AYzxumbZRpYXgr0lawxin4ztW_gcJ7nmTnTjVLeccUOPD&_nc_ohc=NVaesP84KhUQ7kNvwFOQklv&_nc_gid=JjSv7uiRJpKswbkiSGYhyQ&edm=APoiHPcBAAAA&ccb=7-5&ig_cache_key=MzQ1MTY3NTI4NTk4NjkyOTY2MQ%3D%3D.3-ccb7-5&oh=00_AfP6CGiqfZL937b5flmp62oYyL61FB_WskRedOcQzujTZQ&oe=6849DDEE&_nc_sid=22de04"
      alt="Kiran and Anu"
      className="w-full md:w-1/2 aspect-square lg:w-[520px] rounded-md object-cover shadow-md"
    />
  </div>
              
    <div className="flex flex-col md:flex-row items-center gap-10 justify-center max-w-[1340px] mx-auto">
    <img
      src={pream}
      alt="Kiran and Anu"
      className="w-full md:w-1/2 aspect-square lg:w-[520px] rounded-md object-cover shadow-md"
    />
    <div className="w-full md:w-1/2 flex flex-col justify-center items-center text-center">
      <h2 className="text-[24px] sm:text-[30px] md:text-[36px] lg:text-[40px] font-cormorant uppercase font-semibold">
        swasika & pream
      </h2>
      <p className="text-[16px] sm:text-[18px] md:text-[20px] lg:text-[22px]  w-full sm:w-[260px] md:w-[340px] lg:w-[420px]  font-cormorant leading-relaxed pt-4 md:pt-10 pb-10">
        Paper Plane Wedding's work is breathtaking. They made us feel so comfortable, and the film and photos are incredibly personal and beautiful.
      </p>
      <NavLink
        to="/swasika&pream"
        className="
          bg-gray-600 text-white rounded-md hover:bg-gray-700 transition font-cormorant
          mx-auto
          w-full sm:w-[260px] md:w-[340px] lg:w-[400px]
          h-[44px] md:h-[58px] lg:h-[64px]
          text-[16px] sm:text-[18px] md:text-[20px] lg:text-[22px]
          flex items-center justify-center
        "
      >
        Explore their memories
      </NavLink>
    </div>
  </div>

</div>

<div className="bg-[#1e1e1e] py-16 px-4 mt-20 md:mt-24 lg:mt-32">
  <h2 className="text-white text-center text-2xl md:text-3xl lg:text-[32px] font-serif mb-6 md:mb-8 lg:mb-10 leading-tight">
    Best Moments of their Life
  </h2>

<div className="flex flex-col md:flex-row justify-center items-center gap-8 max-w-[1300px] mx-auto w-full px-6">
  
  <NavLink
    to="/gallery"
    className="group relative rounded-md overflow-hidden shadow-md flex-shrink-0 w-full max-w-xs md:max-w-[280px] lg:max-w-[320px] h-[400px] sm:h-[400px] md:h-[420px] lg:h-[460px] transition-transform duration-300"
  >
    <img
      src="https://images.pexels.com/photos/30756162/pexels-photo-30756162/free-photo-of-romantic-black-and-white-wedding-portrait.jpeg"
      alt="Ashique & Asiya"
      className="w-full h-full object-cover rounded-md transform group-hover:scale-105 transition-transform duration-500 ease-in-out"
    />
    <div className="absolute left-0 right-0 bottom-0 top-1/2 flex flex-col items-center justify-center gap-3 bg-black bg-opacity-60 text-white text-center rounded-b-md
                    px-6 py-10
                    sm:px-8 sm:py-12
                    md:px-4 md:py-6">
      <h3 className="font-cormorant font-semibold leading-tight
                    text-lg sm:text-xl md:text-2xl lg:text-[24px]">
        Ashique & Asiya
      </h3>
      <p className="font-cormorant max-w-xs leading-relaxed
                   text-base sm:text-lg md:text-base lg:text-[18px]">
        Step into their world and explore the beautifully captured moments from their unforgettable wedding day.
      </p>
    </div>
  </NavLink>

  <NavLink
    to="/gallery"
    className="group relative rounded-md overflow-hidden shadow-md flex-shrink-0 w-full max-w-xs md:max-w-[280px] lg:max-w-[320px] h-[400px] sm:h-[400px] md:h-[420px] lg:h-[460px] transition-transform duration-300"
  >
    <img
      src="https://images.pexels.com/photos/28949501/pexels-photo-28949501/free-photo-of-tender-embrace-with-elegant-rose-bouquet.jpeg"
      alt="Anna’s Bride to be"
      className="w-full h-full object-cover rounded-md transform group-hover:scale-105 transition-transform duration-500 ease-in-out"
    />
    <div className="absolute left-0 right-0 bottom-0 top-1/2 flex flex-col items-center justify-center gap-3 bg-black bg-opacity-60 text-white text-center rounded-b-md
                    px-6 py-10
                    sm:px-8 sm:py-12
                    md:px-4 md:py-6">
      <h3 className="font-cormorant font-semibold leading-tight
                    text-lg sm:text-xl md:text-2xl lg:text-[24px]">
        Anna’s Bride to be
      </h3>
      <p className="font-cormorant max-w-xs leading-relaxed
                   text-base sm:text-lg md:text-base lg:text-[18px]">
        Explore candid captures as brides-to-be filled with love, anticipation, and wedding planning moments.
      </p>
    </div>
  </NavLink>

  <NavLink
    to="/gallery"
    className="group relative rounded-md overflow-hidden shadow-md flex-shrink-0 w-full max-w-xs md:max-w-[280px] lg:max-w-[320px] h-[400px] sm:h-[400px] md:h-[420px] lg:h-[460px] transition-transform duration-300"
  >
    <img
      src="https://images.pexels.com/photos/28949501/pexels-photo-28949501/free-photo-of-tender-embrace-with-elegant-rose-bouquet.jpeg"
      alt="Kiran & Anu"
      className="w-full h-full object-cover rounded-md transform group-hover:scale-105 transition-transform duration-500 ease-in-out"
    />
    <div className="absolute left-0 right-0 bottom-0 top-1/2 flex flex-col items-center justify-center gap-3 bg-black bg-opacity-60 text-white text-center rounded-b-md
                    px-6 py-10
                    sm:px-8 sm:py-12
                    md:px-4 md:py-6">
      <h3 className="font-cormorant font-semibold leading-tight
                    text-lg sm:text-xl md:text-2xl lg:text-[24px]">
        Kiran & Anu
      </h3>
      <p className="font-cormorant max-w-xs leading-relaxed
                   text-base sm:text-lg md:text-base lg:text-[18px]">
        Witness their love blossom in their enchanting pre-wedding moments.
      </p>
    </div>
  </NavLink>

</div>


</div>



   <div className="bg-[#f4f4f4] flex flex-col md:flex-row items-center justify-between md:px-24 xl:px-32 px-6 py-6 md:py-12 md:space-x-5 gap-5 rounded-md shadow-md overflow-hidden">
  <h3
    ref={leftRef}
    className={`text-xl md:text-3xl lg:text-[47px] xl:text-[59px] font-cormorant text-center md:text-left transition-all duration-1000 ease-in-out ${
      leftVisible ? 'translate-x-0 opacity-100' : '-translate-x-12 opacity-0'
    }`}
  >
    Let’s capture your story together
  </h3>
  <NavLink
    to="/contact"
    ref={rightRef}
    className={`bg-[#1A1A18] text-white px-6 py-2 rounded-md lg:text-[28px] xl:text-[36px] font-cormorant hover:bg-gray-800 transition-all duration-1000 ease-in-out ${
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