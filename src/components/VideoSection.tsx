import { motion } from "framer-motion";

const VideoSection = () => {
  return (
    <section className="py-16 md:py-24 bg-white section-padding">
      <div className="max-w-5xl mx-auto">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="mb-8 text-left"
        >
          <h2 className="font-display text-xl md:text-2xl text-black tracking-widest uppercase mb-4">
            EVENT HIGHLIGHTS DONE FOR CORRPORATE SHOW FOR RUIJIE REYEE
          </h2>
          <p className="text-gray-500 font-serif text-[15px] mb-8">
            Check out this great video
          </p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="relative aspect-video w-full"
        >
          <iframe 
            src="https://www.youtube.com/embed/GyfO01ZOy4A?si=p8k3I9x09M3M2I9_&amp;controls=1" 
            title="EVENT HIGHLIGHTS Video" 
            frameBorder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            referrerPolicy="strict-origin-when-cross-origin" 
            allowFullScreen
            className="w-full h-full shadow-lg"
          ></iframe>
        </motion.div>
      </div>
    </section>
  );
};

export default VideoSection;
