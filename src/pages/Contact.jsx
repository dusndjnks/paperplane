import ContactForm from "../components/ContactForm"
import Layout from "../components/Layout"
import main from "../images/main photo.webp"
import { useSwipeable } from "react-swipeable";
import { useEffect, useState } from "react";



const images = [
  main,
  "https://images.pexels.com/photos/27043729/pexels-photo-27043729/free-photo-of-a-lotus-flower.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  "https://images.pexels.com/photos/10257984/pexels-photo-10257984.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
  "https://images.pexels.com/photos/15006261/pexels-photo-15006261/free-photo-of-grayscale-photo-of-a-bride-and-a-groom-smiling.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
  "https://images.pexels.com/photos/9210832/pexels-photo-9210832.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
];

const Contact = () => {

  
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
             <h1 className="text-white font-cormorant leading-tight
                   text-[46px] sm:text-[60px] md:text-[80px] lg:text-[100px] xl:text-[110px]">
                    Let’s capture your <br /> story together
              </h1>
          </div>

          </div>
    </div>

  <div className="lg:mt-20 mt-6 mb-8 px-4">
  <h2 className="text-center font-cormorant text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
    Let’s talk
  </h2>
</div>


  <ContactForm/>

  


    </Layout>
  )
}

export default Contact