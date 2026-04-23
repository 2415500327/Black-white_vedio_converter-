import { useState, useCallback, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

import img1 from "@/assets/rs-w-1023-h-1279 (4).jpeg";
import img2 from "@/assets/rs-w-1023-h-1279 (5).jpeg";
import img3 from "@/assets/rs-w-1023-h-1279 (6).jpeg";
import img4 from "@/assets/rs-w-1023-h-1279 (7).jpeg";
import img5 from "@/assets/rs-w-1023-h-1279 (8).jpeg";
import img6 from "@/assets/rs-w-1023-h-1279 (9).jpeg";
import img7 from "@/assets/rs-w-1023-h-1279 (10).jpeg";
import img8 from "@/assets/rs-w-1023-h-1279 (11).jpeg";
import img9 from "@/assets/rs-w-1023-h-1279 (12).jpeg";
import img10 from "@/assets/rs-w-1023-h-1279 (13).jpeg";
import img11 from "@/assets/rs-w-1023-h-1279 (14).jpeg";
import img12 from "@/assets/rs-w-1023-h-1279 (15).jpeg";

const weddingPhotos = [
  { id: 1, src: img1, alt: "Elegant Wedding 1" },
  { id: 2, src: img2, alt: "Elegant Wedding 2" },
  { id: 3, src: img3, alt: "Elegant Wedding 3" },
  { id: 4, src: img4, alt: "Elegant Wedding 4" },
  { id: 5, src: img5, alt: "Elegant Wedding 5" },
  { id: 6, src: img6, alt: "Elegant Wedding 6" },
  { id: 7, src: img7, alt: "Elegant Wedding 7" },
  { id: 8, src: img8, alt: "Elegant Wedding 8" },
  { id: 9, src: img9, alt: "Elegant Wedding 9" },
  { id: 10, src: img10, alt: "Elegant Wedding 10" },
  { id: 11, src: img11, alt: "Elegant Wedding 11" },
  { id: 12, src: img12, alt: "Elegant Wedding 12" },
];

const WeddingChapter = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  };

  const paginate = useCallback((newDirection: number, nextIndex?: number) => {
    setDirection(newDirection);
    if (nextIndex !== undefined) {
      setCurrentIndex(nextIndex);
    } else {
      setCurrentIndex((prev) => (prev + newDirection + weddingPhotos.length) % weddingPhotos.length);
    }
  }, []);

  const onThumbClick = (index: number) => {
    if (index === currentIndex) return;
    const newDirection = index > currentIndex ? 1 : -1;
    paginate(newDirection, index);
  };

  // Optional: Auto sliding
  useEffect(() => {
    const timer = setInterval(() => {
      paginate(1);
    }, 4500);
    return () => clearInterval(timer);
  }, [paginate]);

  return (
    <section className="py-24 bg-white overflow-hidden pb-32">
      
      {/* Left Aligned Banner Title */}
      <div className="mb-12 px-6 lg:px-16 w-full max-w-[1600px] mx-auto">
        <h2 className="font-display text-4xl text-[#111] tracking-widest uppercase mb-4">
          THE WEDDING CHAPTER
        </h2>
        <div className="w-full h-[1px] bg-gray-200"></div>
      </div>

      <div className="relative w-full max-w-[1600px] h-[55vh] md:h-[70vh] flex items-center justify-center mb-12 px-4 mx-auto">
        
        {/* Previous Image Hint (Left with white 60% overlay) */}
        <div 
          className="absolute left-[-20%] lg:left-0 w-[40%] h-[90%] md:h-[100%] overflow-hidden hidden sm:block cursor-pointer transition-transform duration-500 hover:scale-[1.01]"
          onClick={() => paginate(-1)}
        >
          <img 
            src={weddingPhotos[(currentIndex - 1 + weddingPhotos.length) % weddingPhotos.length].src}
            alt="prev"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-white/60 transition-opacity duration-300 hover:bg-white/40"></div>
        </div>

        {/* Next Image Hint (Right with white 60% overlay) */}
        <div 
          className="absolute right-[-20%] lg:right-0 w-[40%] h-[90%] md:h-[100%] overflow-hidden hidden sm:block cursor-pointer transition-transform duration-500 hover:scale-[1.01]"
          onClick={() => paginate(1)}
        >
          <img 
            src={weddingPhotos[(currentIndex + 1) % weddingPhotos.length].src}
            alt="next"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-white/60 transition-opacity duration-300 hover:bg-white/40"></div>
        </div>

        {/* Active Center Image */}
        <div className="relative w-[95%] sm:w-[50%] md:w-[45%] lg:w-[35%] h-full z-10 mx-auto shadow-2xl bg-white flex items-center justify-center overflow-hidden border border-gray-100">
          <AnimatePresence initial={false} custom={direction}>
            <motion.img
              key={currentIndex}
              src={weddingPhotos[currentIndex].src}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "tween", duration: 0.7, ease: [0.22, 1, 0.36, 1] },
                opacity: { duration: 0.5 }
              }}
              alt={weddingPhotos[currentIndex].alt}
              className="absolute w-full h-full object-cover bg-white"
            />
          </AnimatePresence>
        </div>
      </div>

      {/* Thumbnails Row with Nav Arrows */}
      <div className="flex items-center justify-center max-w-[1400px] mx-auto px-4 gap-2 md:gap-6">
        <button 
          onClick={() => paginate(-1)}
          className="w-10 h-10 flex-shrink-0 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors"
        >
          <ChevronLeft className="text-gray-500" strokeWidth={1.5} />
        </button>
        
        <div className="flex items-center gap-2 md:gap-3 overflow-x-auto py-3 px-1 scroll-smooth no-scrollbar max-w-full">
          {weddingPhotos.map((photo, index) => {
            const isActive = index === currentIndex;
            return (
              <button
                key={photo.id}
                onClick={() => onThumbClick(index)}
                className={`relative overflow-hidden flex-shrink-0 transition-all duration-300 w-[60px] h-[60px] md:w-[85px] md:h-[85px] bg-white 
                  ${isActive 
                    ? "border-[3px] border-[#2d3e1b] p-[2px] opacity-100 scale-105 shadow-md" 
                    : "border border-gray-200 opacity-50 hover:opacity-100"
                  }`}
              >
                <img 
                  src={photo.src} 
                  alt={photo.alt}
                  className="w-full h-full object-cover"
                />
              </button>
            );
          })}
        </div>

        <button 
          onClick={() => paginate(1)}
          className="w-10 h-10 flex-shrink-0 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors"
        >
          <ChevronRight className="text-gray-500" strokeWidth={1.5} />
        </button>
      </div>
    </section>
  );
};

export default WeddingChapter;
