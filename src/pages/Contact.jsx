import ContactForm from "../components/ContactForm";
import Layout from "../components/Layout";
import { useSwipeable } from "react-swipeable";
import { useEffect, useState, useCallback } from "react";
import contact1 from "../images/contact/contact1.webp";
import contact2 from "../images/contact/contact2.webp";

const images = [contact1, contact2];

const Contact = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showNotification, setShowNotification] = useState(false);

  // Optimize nextSlide with useCallback to avoid interval reset on re-renders
  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  }, []);

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
    if (images.length <= 1) return;

    const interval = setInterval(nextSlide, 4000);
    return () => clearInterval(interval);
  }, [nextSlide]);

  const handleSuccess = () => {
    setShowNotification(true);
    setTimeout(() => setShowNotification(false), 3000);
  };

  return (
    <Layout>
      {showNotification && (
        <div
          role="alert"
          className="fixed top-6 right-6 bg-green-600 text-white px-6 py-3 rounded shadow-lg z-50 transition-opacity duration-300 animate-fade-in"
        >
          ✅ Message sent successfully!
        </div>
      )}

      {/* Hero Slider */}
      <div
        {...handlers}
        className="relative w-full overflow-hidden bg-black h-[70vh] sm:h-screen"
      >
        <div className="relative h-full w-full">
          {images.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`Slide ${index}`}
              loading="lazy"
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

        {/* Heading overlay */}
        <div className="absolute inset-0 z-20 flex items-center justify-center px-4 text-center">
          <h1 className="text-white font-cormorant leading-tight text-[24px] sm:text-[32px] md:text-[46px] lg:text-[80px] xl:text-[100px]">
            Let’s capture your <br /> story together
          </h1>
        </div>
      </div>

      {/* Section Title */}
      <div className="mt-6 mb-8 px-4 lg:mt-20 lg:mb-24">
        <h2 className="text-center font-cormorant text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
          Let’s talk
        </h2>
      </div>

      {/* Contact Form */}
      <ContactForm onSuccess={handleSuccess} />
    </Layout>
  );
};

export default Contact;
