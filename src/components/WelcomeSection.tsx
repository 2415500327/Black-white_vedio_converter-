import { motion } from "framer-motion";
import { Facebook, Instagram, Linkedin, Youtube } from "lucide-react";
import logoImage from "@/assets/logo.png";

const WelcomeSection = () => {
  return (
    <section className="py-20 md:py-28 bg-white overflow-hidden">
      <div className="section-padding">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16 md:gap-24">
          
          {/* Logo Side */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex-1 w-full flex justify-center md:justify-end"
          >
            <img 
              src={logoImage} 
              alt="Tathastu Photography Logo" 
              className="w-full max-w-[500px] object-contain"
            />
          </motion.div>

          {/* Text & Socials Side */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="flex-1 w-full text-center flex flex-col items-center pb-8"
          >
            <h2 className="font-display text-4xl md:text-5xl lg:text-[45px] text-[#2c2c2c] tracking-wider uppercase leading-snug mb-8">
              WELCOME TO TATHASTU
              <br />
              <span className="block mt-1">PHOTOGRAPHY</span>
            </h2>
            
            <p className="font-serif-menu text-[#5a5a5a] text-lg leading-relaxed mb-12 max-w-[500px]">
              where we specialize in capturing life's most beautiful moments.
              Our experienced photographers use state-of-the-art equipment
              to produce stunning photographs of your family, special events,
              and more. Contact us today to schedule your session!
            </p>

            {/* Social Icons inside colored circles */}
            <div className="flex items-center gap-3">
              <a href="https://www.facebook.com/people/Tathastu-Photography/61576326264509/" target="_blank" rel="noopener noreferrer" className="w-[32px] h-[32px] rounded-full bg-[#1877F2] flex items-center justify-center text-white hover:opacity-90 transition-opacity" aria-label="Facebook">
                <Facebook size={16} className="fill-current stroke-none" />
              </a>
              <a href="https://www.instagram.com/tathastu_photography_dxb?igsh=bDdoMGZid29jc2dl" target="_blank" rel="noopener noreferrer" className="w-[32px] h-[32px] rounded-full bg-gradient-to-tr from-[#FFDC80] via-[#C13584] to-[#833AB4] flex items-center justify-center text-white hover:opacity-90 transition-opacity" aria-label="Instagram">
                <Instagram size={16} />
              </a>
              <a href="https://www.linkedin.com/in/tathastu-photography-144278369/" target="_blank" rel="noopener noreferrer" className="w-[32px] h-[32px] rounded-full bg-[#0A66C2] flex items-center justify-center text-white hover:opacity-90 transition-opacity" aria-label="LinkedIn">
                <Linkedin size={16} className="fill-current stroke-none" />
              </a>
              <a href="https://www.youtube.com/@tathastuphotography" target="_blank" rel="noopener noreferrer" className="w-[32px] h-[32px] rounded-full bg-[#FF0000] flex items-center justify-center text-white hover:opacity-90 transition-opacity whitespace-nowrap" aria-label="Youtube">
                <Youtube size={16} className="fill-current stroke-none" />
              </a>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default WelcomeSection;
