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
    const interval = setInterval(nextSlide, 5000); // Slower cycle also feels smoother
    return () => clearInterval(interval);
  }, []);

  return (
    <Layout>
      {/* Hero Slider */}
      <div {...handlers} className="relative h-screen w-full overflow-hidden bg-black">
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Slide ${index}`}
            className={`absolute inset-0 w-full h-full object-cover brightness-50 transition-opacity duration-[1500ms] ease-in-out ${
              index === currentIndex
                ? "opacity-100 z-10"
                : "opacity-0 z-0 pointer-events-none"
            }`}
          />
        ))}

        <div className="absolute inset-0 flex items-center justify-center text-center z-20">
          <h1 className="text-white font-cormorant leading-tight text-[46px] sm:text-[60px] md:text-[80px] lg:text-[100px] xl:text-[110px]">
            Let’s capture your <br /> story together
          </h1>
        </div>
      </div>

      {/* Heading */}
      <div className="lg:mt-20 mt-6 mb-8 px-4">
        <h2 className="text-center font-cormorant text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
          Let’s talk
        </h2>
      </div>

      {/* Contact Form */}
      <ContactForm />
    </Layout>
  );
};

export default Contact;
