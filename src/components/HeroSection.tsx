import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

import slide1 from "@/assets/rs-w-2560-h-1707 (1).jpg";
import slide2 from "@/assets/rs-w-2560-h-1707.jpg";
import slide3 from "@/assets/rs-w-2560-h-1441.jpg";
import slide4 from "@/assets/rs-w-3840-m (1).jpeg";
import slide5 from "@/assets/rs-w-3840-m.jpeg";
import slide6 from "@/assets/rs-w-1920-m.webp";

const slides = [slide1, slide2, slide3, slide4, slide5, slide6];

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(0);

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? "100%" : "-100%",
      opacity: 0,
      scale: 1.05
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        x: { type: "tween" as const, duration: 0.8, ease: "easeInOut" as const },
        opacity: { duration: 0.8 },
        scale: { duration: 6, ease: "linear" as const }
      }
    },
    exit: (direction: number) => ({
      x: direction < 0 ? "100%" : "-100%",
      opacity: 0,
      transition: {
        x: { type: "tween" as const, duration: 0.8, ease: "easeInOut" as const },
        opacity: { duration: 0.8 }
      }
    })
  };

  const paginate = useCallback((newDirection: number) => {
    setDirection(newDirection);
    setCurrentSlide((prev) => (prev + newDirection + slides.length) % slides.length);
  }, []);

  const goToSlide = (index: number) => {
    setDirection(index > currentSlide ? 1 : -1);
    setCurrentSlide(index);
  };

  // Auto-slide every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      paginate(1);
    }, 5000);
    return () => clearInterval(timer);
  }, [paginate]);

  return (
    <>
      <section id="home" className="relative w-full h-[calc(100vh-102px)] overflow-hidden group bg-gray-100">
        <AnimatePresence initial={false} custom={direction}>
          <motion.img
            key={currentSlide}
            src={slides[currentSlide]}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            alt={`Slide ${currentSlide + 1}`}
            className="absolute inset-0 w-full h-full object-contain"
          />
        </AnimatePresence>
        
        {/* Navigation Arrows */}
        <button 
          onClick={() => paginate(-1)}
          className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 bg-black/20 hover:bg-black/60 text-white p-3 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 z-10"
        >
          <ChevronLeft size={32} />
        </button>
        <button 
          onClick={() => paginate(1)}
          className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 bg-black/20 hover:bg-black/60 text-white p-3 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 z-10"
        >
          <ChevronRight size={32} />
        </button>

        {/* Navigation Dots */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3 z-10">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                index === currentSlide ? "bg-white scale-125" : "bg-white/40 hover:bg-white/80"
              }`}
            />
          ))}
        </div>
      </section>

      {/* Intro Text Section */}
      <section className="py-20 md:py-28 section-padding bg-white text-center flex flex-col items-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display text-3xl md:text-5xl text-black max-w-4xl tracking-widest leading-tight uppercase"
        >
          PRESERVING MEMORIES TO<br/>LIFELONG TREASURES
        </motion.h2>
        <motion.div 
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="w-16 h-[2px] bg-black my-8" 
        />
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-gray-600 font-sans text-base md:text-lg max-w-3xl leading-relaxed"
        >
          Tathastu Photography offers elegant, high-end photography services for weddings, corporate events, and fine portraits. Capturing life's most beautiful moments with exceptional artistry, precision, and soul.
        </motion.p>
      </section>
    </>
  );
};

export default HeroSection;
