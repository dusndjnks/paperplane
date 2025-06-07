import logo from "../images/Logo Paper Plane (1).svg";

const Footer = () => {
  return (
    <div className="bg-gray-300">
      {/* Desktop Section */}
      <div className="hidden md:flex justify-center">
        <section className="relative py-16">
          <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-20">
            {/* Overlay CTA */}
            <div className="absolute inset-0 z-10 flex items-center justify-center px-4">
              <a
                href="https://www.instagram.com/paperplanewedding?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                target="_blank"
                rel="noopener noreferrer"
                className="font-cormorant bg-black/60 hover:bg-black/70 text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl text-center w-full max-w-[700px] py-5 rounded-md shadow-lg transition-all duration-300"
              >
                Check Our Instagram
              </a>
            </div>

            {/* Responsive Image Grid */}
            <div className="mt-6 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 px-2 md:px-0 relative z-0">
              {[...Array(5)].map((_, index) => (
                <div key={index} className="w-full">
                  <img
                    src={
                      index % 2 === 0
                        ? "https://images.pexels.com/photos/16632447/pexels-photo-16632447/free-photo-of-smiling-indian-bride-and-groom-in-traditional-costumes.jpeg"
                        : "https://images.pexels.com/photos/28949501/pexels-photo-28949501/free-photo-of-tender-embrace-with-elegant-rose-bouquet.jpeg"
                    }
                    alt={`Instagram image ${index + 1}`}
                    className="h-[400px] object-cover w-full hover:scale-105 transition-transform duration-300"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>

      {/* Mobile Section */}
      <div className="flex md:hidden">
        <section className="relative py-16">
          <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-20 relative">
            {/* Overlay CTA */}
            <div className="absolute inset-0 z-10 flex items-center justify-center px-4">
              <a
                href="https://www.instagram.com/paperplanewedding?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                target="_blank"
                rel="noopener noreferrer"
                className="bg-black/60 hover:bg-black/70 text-white text-lg sm:text-xl text-center font-serif w-full mx-6 max-w-[600px] py-4 rounded-md shadow-lg transition-all duration-300"
              >
                Check Our Instagram
              </a>
            </div>

            {/* 2x2 Grid */}
            <div className="grid grid-cols-2 gap-3 max-w-[700px] mx-auto relative z-0">
              {[...Array(4)].map((_, index) => (
                <div key={index} className="aspect-square">
                  <img
                    src={
                      index % 2 === 0
                        ? "https://images.pexels.com/photos/16632447/pexels-photo-16632447/free-photo-of-smiling-indian-bride-and-groom-in-traditional-costumes.jpeg"
                        : "https://images.pexels.com/photos/28949501/pexels-photo-28949501/free-photo-of-tender-embrace-with-elegant-rose-bouquet.jpeg"
                    }
                    alt={`Instagram photo ${index + 1}`}
                    className="w-full h-full object-cover rounded-md hover:scale-105 transition-transform duration-300"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>

      <div className="flex flex-col items-center justify-center px-4 py-8">
        <img
          src={logo}
          alt="Logo"
          className="w-[220px] sm:w-[300px] md:w-[360px] lg:w-[420px]"
        />

        <h1 className="lg:text-2xl pt-3 font-cormorant w-[220px] sm:w-[300px] md:w-[360px] lg:w-[420px] text-center">
          Say yes to unforgettable, beautiful, lasting wedding photos!
        </h1>
      </div>

      {/* Footer Text */}
      <p className="text-center text-base sm:text-lg md:text-xl lg:text-[22px] font-cormorant text-gray-600 py-6 px-4 font-medium">
        Developed by{" "}
        <span className="font-semibold text-gray-700">Divegrid Pvt Ltd</span> | All
        Rights Reserved © 2025
      </p>
    </div>
  );
};

export default Footer;
