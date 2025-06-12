{/* Gallery Section */}
<div className="min-h-screen bg-[#f9f7f6] px-4 sm:px-6 md:px-12 lg:px-20 py-12">
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6">
    {images.map((src, index) => (
      <LazyLoadImage
        key={index}
        src={src}
        effect="blur"
        alt={`Gallery ${index + 1}`}
        onClick={() => setFullscreenImage(src)}
        className="w-full rounded-lg cursor-pointer shadow-lg transition-transform duration-700 hover:scale-105 object-cover"
        data-aos="zoom-in"
      />
    ))}
  </div>

  {/* Fullscreen View */}
  {fullscreenImage && (
    <div
      onClick={() => setFullscreenImage(null)}
      className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
    >
      <img
        src={fullscreenImage}
        alt="Fullscreen"
        className="max-w-full max-h-full rounded-xl animate-zoomIn"
        onClick={(e) => e.stopPropagation()}
      />
    </div>
  )}

  <style>{`
    @keyframes zoomIn {
      0% { opacity: 0; transform: scale(0.8); }
      100% { opacity: 1; transform: scale(1); }
    }
    .animate-zoomIn {
      animation: zoomIn 0.3s ease forwards;
    }
  `}</style>
</div>
