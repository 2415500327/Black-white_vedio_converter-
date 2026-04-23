import { motion } from "framer-motion";

const exhibitionVideos = [
  {
    id: 1,
    title: "Middle east energy show 2025 In Dubai",
    videoUrl: "https://player.vimeo.com/video/1101188300?h=bd374c2040&title=0&byline=0&portrait=0",
  },
  {
    id: 2,
    title: "Hotel Show 2025 in Dubai",
    videoUrl: "https://player.vimeo.com/video/1101192135?h=e8fc9107b4&title=0&byline=0&portrait=0",
  },
];

const ExhibitionVideos = () => {
  return (
    <section className="py-24 bg-white overflow-hidden">
      
      {/* Left Aligned Banner Title */}
      <div className="mb-20 px-6 lg:px-16 w-full max-w-[1600px] mx-auto">
        <h2 className="font-display text-4xl text-[#111] tracking-widest uppercase mb-4">
          EXHIBITION STANDS VIDEOGRAPHY
        </h2>
        <div className="w-full h-[1px] bg-gray-200"></div>
      </div>

      <div className="w-full max-w-[1400px] mx-auto px-6 lg:px-16 flex flex-col gap-24">
        {exhibitionVideos.map((item, index) => {
          // Determine layout direction (alternating rows)
          const isEven = index % 2 === 1;

          return (
            <div 
              key={item.id} 
              className={`flex flex-col gap-10 lg:gap-20 items-center justify-between ${
                isEven ? "lg:flex-row-reverse" : "lg:flex-row"
              }`}
            >
              {/* Video Embed */}
              <motion.div 
                initial={{ opacity: 0, x: isEven ? 50 : -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                className="w-full lg:w-1/2 aspect-video bg-gray-100 shadow-xl overflow-hidden rounded-sm"
              >
                <iframe
                  src={item.videoUrl}
                  className="w-full h-full"
                  frameBorder="0"
                  allow="autoplay; fullscreen; picture-in-picture"
                  allowFullScreen
                  title={item.title}
                ></iframe>
              </motion.div>

              {/* Text / Title */}
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                className="w-full lg:w-1/2 flex justify-center text-center lg:text-left lg:justify-start"
              >
                <h3 className="font-serif-menu text-3xl md:text-5xl lg:text-[54px] leading-tight text-[#111] max-w-xl">
                  {item.title}
                </h3>
              </motion.div>
            </div>
          );
        })}
      </div>

    </section>
  );
};

export default ExhibitionVideos;
