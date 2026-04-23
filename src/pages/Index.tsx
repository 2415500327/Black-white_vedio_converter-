import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import WelcomeSection from "@/components/WelcomeSection";
import WeddingChapter from "@/components/WeddingChapter";
import ExhibitionStands from "@/components/ExhibitionStands";
import ExhibitionVideos from "@/components/ExhibitionVideos";
import AllInOneSolution from "@/components/AllInOneSolution";
import PhilosophySection from "@/components/PhilosophySection";
import ClientsSection from "@/components/ClientsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import ChatWidget from "@/components/ChatWidget";
import ChatSection from "@/components/ChatSection";

const Index = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: "-100%" }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: "100%" }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      <Navbar />
      <HeroSection />
      <ChatSection />
      <WelcomeSection />
      <WeddingChapter />
      <ExhibitionStands />
      <ExhibitionVideos />
      <AllInOneSolution />
      <PhilosophySection />
      <ClientsSection />
      <ContactSection />
      <Footer />
      <ChatWidget />
    </motion.div>
  );
};

export default Index;
