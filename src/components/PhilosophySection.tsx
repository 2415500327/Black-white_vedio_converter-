import { motion } from "framer-motion";
import philosophyImage from "@/assets/philosophy.jpg";

const PhilosophySection = () => {
  return (
    <section id="philosophy" className="py-24 bg-white overflow-hidden">
      {/* Left Aligned Banner Title */}
      <div className="mb-16 px-6 lg:px-16 w-full max-w-[1600px] mx-auto">
        <h2 className="font-display text-4xl text-[#111] tracking-widest uppercase mb-4">
          OUR PHILOSOPHY
        </h2>
        <div className="w-full h-[1px] bg-gray-200"></div>
      </div>

      <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center max-w-[1400px] mx-auto px-6 lg:px-16">
        {/* Image */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="aspect-[4/5] overflow-hidden"
        >
          <img
            src={philosophyImage}
            alt="Philosophy - Photographer at work"
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </motion.div>

        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col justify-center"
        >
          <p className="font-serif-menu text-lg md:text-xl lg:text-[22px] leading-relaxed text-[#333] mb-8">
            At Tathastu Photography, we believe that photography is not just about taking pictures, but about capturing moments and emotions that will be cherished for a lifetime.
          </p>
          <p className="font-serif-menu text-lg md:text-xl lg:text-[22px] leading-relaxed text-[#333] mb-8">
            We strive to create unique and meaningful images that tell a story and evoke emotion.
          </p>
          <p className="font-serif-menu text-lg md:text-xl lg:text-[22px] leading-relaxed text-[#333]">
            Our goal is to provide a personalized photography experience that captures the essence of our clients and their special moments.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default PhilosophySection;
