
const Footer = () => {
  return (
    <div>

     <div className=" hidden md:flex">
  <section className="relative py-12">
    <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-20">

      {/* Overlay CTA */}
      <div className="absolute inset-0 z-10 flex items-center justify-center px-4">
        <a
          href="https://www.instagram.com/paperplanewedding?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
          target="_blank"
          rel="noopener noreferrer"
          className="bg-black/60 hover:bg-black/70 text-white text-lg sm:text-2xl md:text-4xl lg:text-5xl text-center font-serif w-full max-w-[850px] py-4 md:py-10 rounded-md shadow-lg transition-all duration-300"
        >
          Check Our Instagram
        </a>
      </div>

      {/* Image Grid */}
      <div className="mt-4 md:mt-0 flex md:grid md:grid-cols-5 gap-2 overflow-x-auto md:overflow-visible px-1 sm:px-2 md:px-0">
        {[...Array(5)].map((_, index) => (
          <div key={index} className="flex-shrink-0 md:shrink md:w-auto w-3/4 sm:w-1/2">
            <img
              src={
                index % 2 === 0
                  ? "https://images.pexels.com/photos/16632447/pexels-photo-16632447/free-photo-of-smiling-indian-bride-and-groom-in-traditional-costumes.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  : "https://images.pexels.com/photos/28949501/pexels-photo-28949501/free-photo-of-tender-embrace-with-elegant-rose-bouquet.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              }
              className="h-48 sm:h-64 md:h-[500px] object-cover w-full hover:scale-105 transition-transform duration-300"
            />
          </div>
        ))}
      </div>
    </div>
  </section>
</div>

<div className="flex md:hidden">
  <section className="relative py-12">
    <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-20 relative">

      {/* Overlay CTA */}
      <div className="absolute inset-0 z-10 flex items-center justify-center px-4">
        <a
          href="https://www.instagram.com/paperplanewedding?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
          target="_blank"
          rel="noopener noreferrer"
          className="bg-black/60 hover:bg-black/70 text-white text-lg sm:text-2xl md:text-4xl lg:text-5xl text-center font-serif w-full mx-6 max-w-[600px] py-4 md:py-10 rounded-md shadow-lg transition-all duration-300"
        >
          Check Our Instagram
        </a>
      </div>

      {/* 2x2 Grid */}
      <div className="grid grid-cols-2 gap-2 md:gap-4 max-w-[700px] mx-auto relative z-0">
        {[...Array(4)].map((_, index) => (
          <div key={index} className="aspect-square">
            <img
              src={
                index % 2 === 0
                  ? "https://images.pexels.com/photos/16632447/pexels-photo-16632447/free-photo-of-smiling-indian-bride-and-groom-in-traditional-costumes.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  : "https://images.pexels.com/photos/28949501/pexels-photo-28949501/free-photo-of-tender-embrace-with-elegant-rose-bouquet.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
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


       <p className="text-center text-base sm:text-lg md:text-xl lg:text-[24px] font-cormorant text-gray-600 my-4 md:my-6 lg:my-8 font-medium px-4">
  Developed by <span className="font-semibold text-gray-700">Divegrid Pvt Ltd</span> | All Rights Reserved © 2025
</p>

    </div>
  )
}

export default Footer