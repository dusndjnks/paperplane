import { LazyLoadImage } from "react-lazy-load-image-component";
import { NavLink } from "react-router-dom";
import "react-lazy-load-image-component/src/effects/blur.css";

import kavya from "../images/gallery/kavya.jpg";
import uk from "../images/gallery/uk (7).jpg";
import muslim from "../images/gallery/muslim.jpg";
import christain from "../images/gallery/christain.jpg";
import bride from "../images/gallery/1 (7).jpg";
import wedding from "../images/gallery/wedding.jpg";
import sajith from "../images/gallery/3LC-1.jpg";
import monu from "../images/gallery/IMG_0329 copy (1).jpg"
import gokul from "../images/gallery/GD7.jpg"
import anoop from "../images/gallery/_F9T3231 copy (1).jpg"


const SimpleImageGrid = () => {
  const title = "Couples Gallery";

  return (
    <section className="bg-white py-12 px-4 sm:px-6 md:px-12 lg:px-20 xl:px-32 2xl:px-48">
      <div className="flex items-center justify-center mb-8">
        <h2 className="text-3xl sm:text-4xl font-cormorant font-semibold text-gray-800 mb-8">
          {title}
        </h2>
      </div>

      {/* Change starts here */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

        <NavLink to="/kavya">
          <div className="relative overflow-hidden rounded-lg shadow-md group aspect-[3/2] cursor-pointer">
            <LazyLoadImage
              src={kavya}
              alt="Divin & Kavya"
              effect="blur"
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-black via-black/70 to-transparent flex items-end justify-center text-white font-cormorant text-xl sm:text-2xl md:text-[28px] px-3 pb-3">
              Divin & Kavya
            </div>
          </div>
        </NavLink>

        <NavLink to="/uk">
          <div className="relative overflow-hidden rounded-lg shadow-md group aspect-[3/2] cursor-pointer">
            <LazyLoadImage
              src={uk}
              alt="Divin & Kavya"
              effect="blur"
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-black via-black/70 to-transparent flex items-end justify-center text-white font-cormorant text-xl sm:text-2xl md:text-[28px] px-3 pb-3">
              Anandu & Anjali
            </div>
          </div>
        </NavLink>

        <NavLink to="/sajith">
          <div className="relative overflow-hidden rounded-lg shadow-md group aspect-[3/2] cursor-pointer">
            <LazyLoadImage
              src={sajith}
              alt="Divin & Kavya"
              effect="blur"
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-black via-black/70 to-transparent flex items-end justify-center text-white font-cormorant text-xl sm:text-2xl md:text-[28px] px-3 pb-3">
              Sajith & Keerthy
            </div>
          </div>
        </NavLink>

        <NavLink to="/monu">
          <div className="relative overflow-hidden rounded-lg shadow-md group aspect-[3/2] cursor-pointer">
            <LazyLoadImage
              src={monu}
              alt="Monu & Mervin"
              effect="blur"
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-black via-black/70 to-transparent flex items-end justify-center text-white font-cormorant text-xl sm:text-2xl md:text-[28px] px-3 pb-3">
              Monu & Mervin
            </div>
          </div>
        </NavLink>


        <NavLink to="/divya">
          <div className="relative overflow-hidden rounded-lg shadow-md group aspect-[3/2] cursor-pointer">
            <LazyLoadImage
              src={gokul}
              alt="Monu & Mervin"
              effect="blur"
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-black via-black/70 to-transparent flex items-end justify-center text-white font-cormorant text-xl sm:text-2xl md:text-[28px] px-3 pb-3">
              Gokul & Divya
            </div>
          </div>
        </NavLink>

        <NavLink to="/anoop">
          <div className="relative overflow-hidden rounded-lg shadow-md group aspect-[3/2] cursor-pointer">
            <LazyLoadImage
              src={anoop}
              alt="Monu & Mervin"
              effect="blur"
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-black via-black/70 to-transparent flex items-end justify-center text-white font-cormorant text-xl sm:text-2xl md:text-[28px] px-3 pb-3">
              Anoop & Akshara
            </div>
          </div>
        </NavLink>

        <NavLink to="/muslim">
          <div className="relative overflow-hidden rounded-lg shadow-md group aspect-[3/2] cursor-pointer">
            <LazyLoadImage
              src={muslim}
              alt="Muslim Wedding"
              effect="blur"
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-black via-black/70 to-transparent flex items-end justify-center text-white font-cormorant text-xl sm:text-2xl md:text-[28px] px-3 pb-3">
              Muslim Wedding
            </div>
          </div>
        </NavLink>

        <NavLink to="/christain">
          <div className="relative overflow-hidden rounded-lg shadow-md group aspect-[3/2] cursor-pointer">
            <LazyLoadImage
              src={christain}
              alt="Christain Wedding"
              effect="blur"
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-black via-black/70 to-transparent flex items-end justify-center text-white font-cormorant text-xl sm:text-2xl md:text-[28px] px-3 pb-3">
              Christain Wedding
            </div>
          </div>
        </NavLink>

        <NavLink to="/bride">
          <div className="relative overflow-hidden rounded-lg shadow-md group aspect-[3/2] cursor-pointer">
            <LazyLoadImage
              src={bride}
              alt="Bride To Be"
              effect="blur"
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-black via-black/70 to-transparent flex items-end justify-center text-white font-cormorant text-xl sm:text-2xl md:text-[28px] px-3 pb-3">
              Bride To Be
            </div>
          </div>
        </NavLink>

        <NavLink to="/wedding">
          <div className="relative overflow-hidden rounded-lg shadow-md group aspect-[3/2] cursor-pointer">
            <LazyLoadImage
              src={wedding}
              alt="Wedding Reception"
              effect="blur"
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-black via-black/70 to-transparent flex items-end justify-center text-white font-cormorant text-xl sm:text-2xl md:text-[28px] px-3 pb-3">
              Wedding Reception
            </div>
          </div>
        </NavLink>

      </div>
    </section>
  );
};

export default SimpleImageGrid;
