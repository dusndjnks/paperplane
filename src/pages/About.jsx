import Layout from "../components/Layout"
import { useSwipeable } from "react-swipeable";
import { useEffect, useState } from "react";
import creator from "../images/screator.jpg"
import main1 from "../images/main1.webp"
import main2 from "../images/main3.webp"
import main3 from "../images/main4.webp"
import OurValuesSection from "../components/OurValuesSection";




const About = () => {

  
const images = [
 main2,
 main1, 
 main3
];

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
        
        <div className="relative w-full overflow-hidden bg-black h-[70vh] sm:h-screen" {...handlers}>
  {/* Background Images with Fade Transition */}
  <div className="relative h-full w-full">
    {images.map((img, index) => (
      <img
        key={index}
        src={img}
        alt={`Slide ${index}`}
        className={`absolute inset-0 w-full h-full object-cover brightness-75 transition-all duration-[1000ms] ease-in-out
          ${index === currentIndex ? 'opacity-100 scale-100 z-10' : 'opacity-0 scale-105 z-0'}`}
        style={{ transitionProperty: 'opacity, transform' }}
      />
    ))}
  </div>

  {/* Centered Title Overlay */}
  <div className="absolute inset-0 flex items-center justify-center text-center z-20">
    <h1 className="text-white font-cormorant leading-tight px-4
      text-[40px] sm:text-[60px] md:text-[80px] lg:text-[90px] xl:text-[120px]">
      About Us
    </h1>
  </div>
</div>


    <section className="bg-[#fefefe] text-[#1e1e1e] py-20 px-6 md:px-16 font-cormorant">
  <div className="max-w-5xl mx-auto text-center space-y-8">
    <h2 className="text-4xl md:text-6xl font-semibold mb-6 tracking-wide">Who Are We</h2>
    <p className="text-xl md:text-2xl leading-relaxed max-w-3xl mx-auto">
      Since 2013, <span className="font-bold">PaperPlane</span> has been flying high—led by our visionary founder{" "}
      <span className="italic">Mohammed Shafeek Hussain</span>. What started as a dream in Palakkad has now blossomed
      into a full-fledged adventure across <span className="font-semibold">Kerala, Tamil Nadu</span>, and{" "}
      <span className="font-semibold">Karnataka</span>.
    </p>
    <p className="text-xl md:text-2xl leading-relaxed max-w-3xl mx-auto">
      From emotional <span className="underline decoration-dotted decoration-2 underline-offset-4">weddings</span> to playful{" "}
      <span className="underline decoration-dotted decoration-2 underline-offset-4">save-the-date</span> shoots, heartfelt{" "}
      <span className="underline decoration-dotted decoration-2 underline-offset-4">engagements</span> to cinematic{" "}
      <span className="underline decoration-dotted decoration-2 underline-offset-4">films</span>—we capture it all with style and soul. Every frame tells your story, the <em>PaperPlane</em> way.
    </p>
    <p className="text-xl md:text-2xl leading-relaxed max-w-3xl mx-auto">
      We don’t just shoot moments—we create magic that has earned us glowing{" "}
      <span className="text-yellow-500 font-bold tracking-wide">★★★★★</span> reviews.
    </p>
  </div>
</section>

<section className="flex items-center justify-center px-4 pb-6 lg:pb-24">
  <div className="bg-[#fefefe] border-2 border-gray-300 p-8 md:p-16 w-full max-w-[1100px] mx-auto relative text-center font-cormorant text-[#1e1e1e]">
    
    <hr className="border-t-4 border-gray-400 mb-10" />

    <div className="relative z-20 flex flex-col md:flex-row items-stretch justify-center space-y-10 md:space-y-0 md:space-x-16">
      <div className="w-full md:w-1/3 flex-shrink-0 md:px-0">
        <img
          src={creator}
          alt="Mohammed Shafeek Hussain"
          className="rounded-lg shadow-lg mx-auto w-full h-64 sm:h-80 md:h-[380px] object-cover"
        />
      </div>
      <div className="w-full md:w-2/3 space-y-6 text-left flex flex-col justify-center md:px-0">
        <h3 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-3">Meet the Visionary</h3>
        <p className="text-base sm:text-lg md:text-xl leading-relaxed">
          <span className="font-bold">Mohammed Shafeek Hussain</span>, the creative force behind <span className="font-bold">PaperPlane</span>, has been capturing love stories since 2013. Based in Palakkad, his lens has traveled across Kerala, Tamil Nadu, and Karnataka, turning moments into timeless memories.
        </p>
        <p className="text-base sm:text-lg md:text-xl leading-relaxed">
          With a passion for storytelling, Shafeek specializes in weddings, save-the-date shoots, engagements, and cinematic films. His dedication and artistry have earned PaperPlane a reputation for excellence and a trail of 5-star reviews.
        </p>
        <p className="text-base sm:text-lg md:text-xl leading-relaxed">
          Connect with Shafeek on Instagram:{" "}
          <a
            href="https://www.instagram.com/shafeekaaliofficial?igsh=bjNkZnIxc2hwODkx"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline font-semibold"
          >
            @shafeekaaliofficial
          </a>
        </p>
      </div>
    </div>

    <hr className="border-t-4 border-gray-400 mt-14" />
  </div>
</section>

    <OurValuesSection/>


   </Layout>
  )
}

export default About