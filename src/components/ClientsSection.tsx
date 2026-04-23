import { motion } from "framer-motion";

// Import client logos from assets
import logo1 from "@/assets/cr-w-200-h-200.jpg";
import logo2 from "@/assets/cr-w-243-h-122.png";
import logo3 from "@/assets/cr-w-272-h-200.jpg";
import logo4 from "@/assets/cr-w-382-h-200.jpg";
import logo5 from "@/assets/cr-w-595-h-200.png";
import logo6 from "@/assets/cr-w-600-h-180.jpeg";
import logo7 from "@/assets/cr-w-600-h-200.png";
import logo8 from "@/assets/cr-w-800-h-200.jpg";

const clientLogos = [
  { id: 1, src: logo1, alt: "Client 1" },
  { id: 2, src: logo2, alt: "Client 2" },
  { id: 3, src: logo3, alt: "Client 3" },
  { id: 4, src: logo4, alt: "Client 4" },
  { id: 5, src: logo5, alt: "Client 5" },
  { id: 6, src: logo6, alt: "Client 6" },
  { id: 7, src: logo7, alt: "Client 7" },
  { id: 8, src: logo8, alt: "Client 8" },
];

const ClientsSection = () => {
  return (
    <section id="clients" className="py-24 bg-white overflow-hidden">
      {/* Left Aligned Banner Title */}
      <div className="mb-16 px-6 lg:px-16 w-full max-w-[1600px] mx-auto">
        <h2 className="font-display text-4xl text-[#111] tracking-widest uppercase mb-4">
          OUR CLIENTS
        </h2>
        <div className="w-full h-[1px] bg-gray-200"></div>
      </div>

      {/* Scrolling Marquee Row 1 (left to right) */}
      <div className="relative w-full mb-8 overflow-hidden">
        <div className="flex animate-marquee whitespace-nowrap items-center">
          {[...clientLogos, ...clientLogos, ...clientLogos].map((logo, i) => (
            <div
              key={`r1-${i}`}
              className="mx-6 md:mx-10 flex-shrink-0 w-[120px] md:w-[180px] h-[60px] md:h-[80px] flex items-center justify-center opacity-80 hover:opacity-100 transition-all duration-500"
            >
              <img
                src={logo.src}
                alt={logo.alt}
                className="max-w-full max-h-full object-contain"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Scrolling Marquee Row 2 (right to left) */}
      <div className="relative w-full overflow-hidden">
        <div className="flex animate-marquee-reverse whitespace-nowrap items-center">
          {[...clientLogos.slice().reverse(), ...clientLogos.slice().reverse(), ...clientLogos.slice().reverse()].map((logo, i) => (
            <div
              key={`r2-${i}`}
              className="mx-6 md:mx-10 flex-shrink-0 w-[120px] md:w-[180px] h-[60px] md:h-[80px] flex items-center justify-center opacity-80 hover:opacity-100 transition-all duration-500"
            >
              <img
                src={logo.src}
                alt={logo.alt}
                className="max-w-full max-h-full object-contain"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Stats Row */}
      <div className="mt-24 px-6 grid grid-cols-1 md:grid-cols-3 gap-12 text-center max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col items-center"
        >
          <h3 className="font-display text-5xl mb-3 text-[#111]">500+</h3>
          <p className="font-sans text-gray-500 uppercase tracking-widest text-sm">Happy Clients</p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          className="flex flex-col items-center"
        >
          <h3 className="font-display text-5xl mb-3 text-[#111]">10+</h3>
          <p className="font-sans text-gray-500 uppercase tracking-widest text-sm">Years Experience</p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="flex flex-col items-center"
        >
          <h3 className="font-display text-5xl mb-3 text-[#111]">50+</h3>
          <p className="font-sans text-gray-500 uppercase tracking-widest text-sm">Awards Won</p>
        </motion.div>
      </div>
    </section>
  );
};

export default ClientsSection;
