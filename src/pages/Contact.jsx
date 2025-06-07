import ContactForm from "../components/ContactForm";
import Layout from "../components/Layout";
import { useSwipeable } from "react-swipeable";
import { useEffect, useState } from "react";
import contact1 from "../images/contact/contact1.webp";
import contact2 from "../images/contact/contact2.webp";

const images = [contact1, contact2];

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
    <div
  {...handlers}
  className="relative w-full overflow-hidden bg-black h-[70vh] sm:h-screen "
>
  {/* Slide Images */}
  <div className="relative h-full w-full">
    {images.map((img, index) => (
      <img
        key={index}
        src={img}
        alt={`Slide ${index}`}
        className={`absolute inset-0 w-full h-full object-cover brightness-75 transform transition-all duration-[1000ms] ease-in-out ${
          index === currentIndex
            ? "opacity-100 scale-100 z-10"
            : "opacity-0 scale-105 z-0 pointer-events-none"
        }`}
        style={{
          willChange: "opacity, transform",
          transitionProperty: "opacity, transform",
        }}
      />
    ))}
  </div>

  {/* Text Overlay */}
  <div className="absolute inset-0 z-20 flex items-center justify-center px-4 text-center">
    <h1 className="text-white font-cormorant leading-tight text-[24px] sm:text-[32px] md:text-[46px] lg:text-[80px] xl:text-[100px]">
      Let’s capture your <br /> story together
    </h1>
  </div>
</div>


      {/* Heading */}
      <div className="lg:mt-20 mt-6 mb-8 px-4">
        <h2 className="text-center font-cormorant text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
          Let’s talk
        </h2>
      </div>

      {/* Contact Form */}
      <ContactForm />
    </Layout>
  );
};

export default Contact;
  