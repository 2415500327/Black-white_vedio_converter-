import { motion } from "framer-motion";
import { Play } from "lucide-react";
import galleryEvent from "@/assets/gallery-event.jpg";

const events = [
  { title: "WEDDING CINEMATOGRAPHY", description: "Timeless wedding cinematography capturing the true essence." },
  { title: "CORPORATE FILMS", description: "Professional event documentation and brand storytelling." },
  { title: "EXHIBITION HIGHLIGHTS", description: "Dynamic coverage of cultural and corporate exhibitions." },
  { title: "PRE-WEDDING STORIES", description: "Cinematic love stories crafted with passion." },
];

const EventsSection = () => {
  return (
    <section id="events" className="py-24 bg-white text-black">
      <div className="section-padding">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-3xl md:text-4xl text-black tracking-widest uppercase inline-block relative after:content-[''] after:block after:w-12 after:h-[2px] after:bg-olive after:mx-auto after:mt-6"
          >
            OUR CINEMATOGRAPHY
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-center max-w-6xl mx-auto mt-12">
          {/* Video Placeholder */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative aspect-video overflow-hidden group cursor-pointer"
          >
            <img
              src={galleryEvent}
              alt="Event videography showcase"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/30 flex items-center justify-center group-hover:bg-black/40 transition-colors duration-500">
              <div className="w-20 h-20 rounded-full border border-white flex items-center justify-center group-hover:bg-white group-hover:text-black text-white transition-all duration-300">
                <Play size={32} className="ml-2" />
              </div>
            </div>
          </motion.div>

          {/* Event list */}
          <div className="space-y-8">
            {events.map((event, i) => (
              <motion.div
                key={event.title}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="border-b border-gray-200 pb-6"
              >
                <h3 className="font-display text-xl mb-2 tracking-wider">{event.title}</h3>
                <p className="text-gray-500 font-sans text-[15px]">{event.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventsSection;
