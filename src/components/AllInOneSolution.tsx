import { motion } from "framer-motion";

// Import 24 diverse photos for the mosaic grid
import p1 from "@/assets/- (1).jpeg";
import p2 from "@/assets/- (2).jpeg";
import p3 from "@/assets/- (3).jpeg";
import p4 from "@/assets/- (4).jpeg";
import p5 from "@/assets/- (5).jpeg";
import p6 from "@/assets/- (6).jpeg";
import p7 from "@/assets/- (7).jpeg";
import p8 from "@/assets/- (8).jpeg";
import p9 from "@/assets/- (9).jpeg";
import p10 from "@/assets/- (10).jpeg";
import p11 from "@/assets/- (11).jpeg";
import p12 from "@/assets/- (12).jpeg";
import p13 from "@/assets/- (13).jpeg";
import p14 from "@/assets/- (14).jpeg";
import p15 from "@/assets/- (15).jpeg";
import p16 from "@/assets/- (16).jpeg";
import p17 from "@/assets/- (17).jpeg";
import p18 from "@/assets/- (18).jpeg";
import p19 from "@/assets/- (19).jpeg";
import p20 from "@/assets/- (20).jpeg";
import p21 from "@/assets/- (21).jpeg";
import p22 from "@/assets/- (22).jpeg";
import p23 from "@/assets/- (23).jpeg";
import p24 from "@/assets/- (24).jpeg";

import logo from "@/assets/logo.png";

const allPhotos = [
  p1, p2, p3, p4, p5, p6,
  p7, p8, p9, p10, p11, p12,
  p13, p14, p15, p16, p17, p18,
  p19, p20, p21, p22, p23, p24,
];

const AllInOneSolution = () => {
  return (
    <section className="py-24 bg-[#f5f0e8] overflow-hidden">
      {/* Section Title */}
      <div className="text-center mb-16 px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-display text-3xl md:text-4xl text-[#111] tracking-widest uppercase"
        >
          All in one solution at one roof
        </motion.h2>
      </div>

      {/* Mosaic Grid with Center Logo */}
      <div className="relative w-full max-w-[1600px] mx-auto px-2 sm:px-4">
        <div className="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-8 gap-[3px] sm:gap-1">
          {allPhotos.map((src, index) => {
            // Calculate the center position for the logo overlay
            // For an 8-col grid with 24 photos (3 rows), center is around items 10-13
            const isCenterArea = index >= 10 && index <= 13;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ delay: index * 0.03, duration: 0.4 }}
                className={`relative aspect-square overflow-hidden group ${
                  isCenterArea ? "hidden lg:block" : ""
                }`}
              >
                <img
                  src={src}
                  alt={`Photography ${index + 1}`}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
              </motion.div>
            );
          })}
        </div>

        {/* Center Logo Circle Overlay */}
        <motion.div
          initial={{ opacity: 0, scale: 0.7 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20"
        >
          <div className="w-[140px] h-[140px] sm:w-[180px] sm:h-[180px] md:w-[220px] md:h-[220px] lg:w-[260px] lg:h-[260px] rounded-full bg-white shadow-2xl border-[4px] border-[#c5a55a] flex items-center justify-center p-4 sm:p-6">
            <img
              src={logo}
              alt="Tathastu Photography"
              className="w-full h-full object-contain"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AllInOneSolution;
