import { useEffect } from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import GallerySection from "@/components/GallerySection";
import Footer from "@/components/Footer";
import ChatWidget from "@/components/ChatWidget";

const Photos = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, x: "100%" }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: "-100%" }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="min-h-screen bg-white"
    >
      <Navbar />
      <div className="pt-4">
        <GallerySection />
      </div>
      <Footer />
      <ChatWidget />
    </motion.div>
  );
};

export default Photos;
