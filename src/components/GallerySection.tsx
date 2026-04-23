import { useState, useCallback, useEffect, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

// Import distinct photo sets using static imports for reliable builds
// Photos By Tathastu originals (image.png series)
import img_main from "@/assets/rs-w-2046-m (1).jpeg";
import img1 from "@/assets/image.png";
import img2 from "@/assets/image copy.png";
import img3 from "@/assets/image copy 2.png";
import img4 from "@/assets/image copy 3.png";
import img5 from "@/assets/image copy 4.png";
import img6 from "@/assets/image copy 5.png";

// Square format photos (rs-w-1023-h-1023 series)
import sq1 from "@/assets/rs-w-1023-h-1023.jpeg";
import sq2 from "@/assets/rs-w-1023-h-1023 (1).jpeg";
import sq3 from "@/assets/rs-w-1023-h-1023 (2).jpeg";
import sq4 from "@/assets/rs-w-1023-h-1023 (3).jpeg";
import sq5 from "@/assets/rs-w-1023-h-1023 (4).jpeg";
import sq6 from "@/assets/rs-w-1023-h-1023 (5).jpeg";
import sq7 from "@/assets/rs-w-1023-h-1023 (6).jpeg";
import sq8 from "@/assets/rs-w-1023-h-1023 (7).jpeg";
import sq9 from "@/assets/rs-w-1023-h-1023 (8).jpeg";
import sq10 from "@/assets/rs-w-1023-h-1023 (9).jpeg";

// Portrait photos (rs-w-1023-h-1279 series - distinct ones not used in WeddingChapter)
import pt1 from "@/assets/rs-w-1023-h-1279.jpeg";
import pt2 from "@/assets/rs-w-1023-h-1279 (1).jpeg";
import pt3 from "@/assets/rs-w-1023-h-1279 (2).jpeg";
import pt4 from "@/assets/rs-w-1023-h-1279 (3).jpeg";
import pt5 from "@/assets/rs-w-1023-h-1279 (16).jpeg";
import pt6 from "@/assets/rs-w-1023-h-1279 (17).jpeg";
import pt7 from "@/assets/rs-w-1023-h-1279 (18).jpeg";
import pt8 from "@/assets/rs-w-1023-h-1279 (19).jpeg";
import pt9 from "@/assets/rs-w-1023-h-1279 (20).jpeg";
import pt10 from "@/assets/rs-w-1023-h-1279 (21).jpeg";
import pt11 from "@/assets/rs-w-1023-h-1279 (22).jpeg";
import pt12 from "@/assets/rs-w-1023-h-1279 (23).jpeg";
import pt13 from "@/assets/rs-w-1023-h-1279 (24).jpeg";
import pt14 from "@/assets/rs-w-1023-h-1279 (25).jpeg";
import pt15 from "@/assets/rs-w-1023-h-1279 (26).jpeg";
import pt16 from "@/assets/rs-w-1023-h-1279 (27).jpeg";
import pt17 from "@/assets/rs-w-1023-h-1279 (28).jpeg";

// Tall portrait (rs-w-1023-h-1364 series)
import tp1 from "@/assets/rs-w-1023-h-1364.jpeg";
import tp2 from "@/assets/rs-w-1023-h-1364 (1).jpeg";
import tp3 from "@/assets/rs-w-1023-h-1364 (2).jpeg";

// High-res portraits (rs-w-1160-h-1547)
import hr1 from "@/assets/rs-w-1160-h-1547.jpeg";
import hr2 from "@/assets/rs-w-1160-h-1547 (1).jpeg";
import hr3 from "@/assets/rs-w-1160-h-1547 (2).jpeg";

// Full-frame portraits (rs-w-984 series)
import ff1 from "@/assets/rs-w-984-h-1312.jpeg";
import ff2 from "@/assets/rs-w-984-h-1312 (1).jpeg";
import ff3 from "@/assets/rs-w-984-h-1312 (2).jpeg";
import ff4 from "@/assets/rs-w-984-h-984.jpg";
import ff5 from "@/assets/rs-w-984-h-1229.jpg";
import ff6 from "@/assets/rs-w-984-h-1230.jpg";
import ff7 from "@/assets/rs-w-984-h-1232.jpg";

// Wide hero shots
import wh1 from "@/assets/rs-w-1920-m (1).webp";
import wh2 from "@/assets/rs-w-1920-m (2).webp";
import wh3 from "@/assets/rs-w-1920-m (3).webp";
import wh4 from "@/assets/rs-w-1920-m (4).webp";
import wh5 from "@/assets/rs-w-1920-m (5).webp";

// Cropped full-frame (cr-t series)
import cf1 from "@/assets/cr-t-0--l-0--w-100--h-100-.jpeg";
import cf2 from "@/assets/cr-t-0--l-0--w-100--h-100- (1).jpeg";
import cf3 from "@/assets/cr-t-0--l-0--w-100--h-100- (2).jpeg";
import cf4 from "@/assets/cr-t-0--l-0--w-100--h-100- (3).jpeg";
import cf5 from "@/assets/cr-t-0--l-0--w-100--h-100- (4).jpeg";
import cf6 from "@/assets/cr-t-0--l-0--w-100--h-100- (5).jpeg";

// Additional unique shots
import au1 from "@/assets/rs-w-2046-m.jpeg";
import au2 from "@/assets/rs-w-1280-h-1707.jpg";
import au3 from "@/assets/rs-w-1023-h-1278.jpeg";
import au4 from "@/assets/rs-w-1023-h-1281.jpeg";
import au5 from "@/assets/gallery-event.jpg";
import au6 from "@/assets/gallery-portrait.jpg";
import au7 from "@/assets/gallery-food.jpg";
import au8 from "@/assets/960620772.jpeg";

const allPhotos = [
  img_main, img1, img2, img3, img4, img5, img6,
  sq1, sq2, sq3, sq4, sq5, sq6, sq7, sq8, sq9, sq10,
  pt1, pt2, pt3, pt4, pt5, pt6, pt7, pt8, pt9, pt10, pt11, pt12, pt13, pt14, pt15, pt16, pt17,
  tp1, tp2, tp3,
  hr1, hr2, hr3,
  ff1, ff2, ff3, ff4, ff5, ff6, ff7,
  wh1, wh2, wh3, wh4, wh5,
  cf1, cf2, cf3, cf4, cf5, cf6,
  au1, au2, au3, au4, au5, au6, au7, au8,
].map((src, i) => ({ id: i, src, alt: `Tathastu Photo ${i + 1}` }));

const GallerySection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [thumbPage, setThumbPage] = useState(0);
  const thumbsPerPage = 12;

  const totalPages = Math.ceil(allPhotos.length / thumbsPerPage);
  const visibleThumbs = useMemo(() => {
    const start = thumbPage * thumbsPerPage;
    return allPhotos.slice(start, start + thumbsPerPage);
  }, [thumbPage]);

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
      // Auto-scroll thumb page to show the active thumbnail
      setThumbPage(Math.floor(nextIndex / thumbsPerPage));
    } else {
      setCurrentIndex((prev) => {
        const next = (prev + newDirection + allPhotos.length) % allPhotos.length;
        setThumbPage(Math.floor(next / thumbsPerPage));
        return next;
      });
    }
  }, []);

  const onThumbClick = (index: number) => {
    if (index === currentIndex) return;
    const newDirection = index > currentIndex ? 1 : -1;
    paginate(newDirection, index);
  };

  // Auto sliding
  useEffect(() => {
    const timer = setInterval(() => {
      paginate(1);
    }, 4000);
    return () => clearInterval(timer);
  }, [paginate]);

  return (
    <section className="py-12 bg-[#F9F9F9] w-full min-h-[70vh] flex flex-col items-center">
      
      {/* Photo Counter */}
      <div className="mb-4 text-center">
        <span className="text-sm text-gray-500 font-display tracking-widest">
          {currentIndex + 1} / {allPhotos.length}
        </span>
      </div>

      {/* Main Large Image Container */}
      <div className="relative w-full max-w-[1400px] h-[50vh] md:h-[65vh] overflow-hidden flex items-center justify-center mb-6 px-4">
        
        {/* Previous Image Hint (Left) */}
        <div 
          className="absolute left-[-20%] lg:left-0 w-[40%] h-[90%] md:h-[100%] overflow-hidden hidden sm:block cursor-pointer transition-transform duration-500 hover:scale-[1.01]"
          onClick={() => paginate(-1)}
        >
          <img 
            src={allPhotos[(currentIndex - 1 + allPhotos.length) % allPhotos.length].src}
            alt="prev"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-white/60 transition-opacity duration-300 hover:bg-white/40"></div>
        </div>

        {/* Next Image Hint (Right) */}
        <div 
          className="absolute right-[-20%] lg:right-0 w-[40%] h-[90%] md:h-[100%] overflow-hidden hidden sm:block cursor-pointer transition-transform duration-500 hover:scale-[1.01]"
          onClick={() => paginate(1)}
        >
          <img 
            src={allPhotos[(currentIndex + 1) % allPhotos.length].src}
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
              src={allPhotos[currentIndex].src}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "tween", duration: 0.7, ease: [0.22, 1, 0.36, 1] },
                opacity: { duration: 0.5 }
              }}
              alt={allPhotos[currentIndex].alt}
              className="absolute w-full h-full object-contain bg-white"
            />
          </AnimatePresence>
        </div>
      </div>

      {/* Thumbnails Row with Nav Arrows */}
      <div className="flex items-center justify-center max-w-[1400px] mx-auto px-4 gap-2 md:gap-4">
        <button 
          onClick={() => setThumbPage((p) => Math.max(0, p - 1))}
          disabled={thumbPage === 0}
          className="w-10 h-10 flex-shrink-0 flex items-center justify-center rounded-full hover:bg-gray-200 transition-colors disabled:opacity-30"
        >
          <ChevronLeft className="text-gray-500" strokeWidth={1.5} />
        </button>
        
        <div className="flex items-center gap-2 md:gap-3 py-3 px-1">
          {visibleThumbs.map((photo) => {
            const isActive = photo.id === currentIndex;
            return (
              <button
                key={photo.id}
                onClick={() => onThumbClick(photo.id)}
                className={`relative overflow-hidden flex-shrink-0 transition-all duration-300 w-[50px] h-[50px] md:w-[70px] md:h-[70px] bg-white 
                  ${isActive 
                    ? "border-[3px] border-[#2d3e1b] p-[2px] opacity-100 scale-110 shadow-md" 
                    : "border border-gray-200 opacity-50 hover:opacity-100"
                  }`}
              >
                <img 
                  src={photo.src} 
                  alt={photo.alt}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </button>
            );
          })}
        </div>

        <button 
          onClick={() => setThumbPage((p) => Math.min(totalPages - 1, p + 1))}
          disabled={thumbPage >= totalPages - 1}
          className="w-10 h-10 flex-shrink-0 flex items-center justify-center rounded-full hover:bg-gray-200 transition-colors disabled:opacity-30"
        >
          <ChevronRight className="text-gray-500" strokeWidth={1.5} />
        </button>
      </div>

      {/* Thumb Page Indicator */}
      <div className="flex gap-1.5 mt-3">
        {Array.from({ length: totalPages }).map((_, i) => (
          <button
            key={i}
            onClick={() => setThumbPage(i)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              i === thumbPage ? "bg-[#2d3e1b] scale-125" : "bg-gray-300"
            }`}
          />
        ))}
      </div>

    </section>
  );
};

export default GallerySection;
