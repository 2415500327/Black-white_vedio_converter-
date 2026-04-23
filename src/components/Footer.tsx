import { Instagram, Facebook, Youtube, Linkedin } from "lucide-react";
import logoImage from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="py-12 bg-black text-white section-padding font-sans text-center">
      <div className="flex flex-col items-center justify-center gap-6">
        <a href="#home" className="mb-2">
          <img src={logoImage} alt="Tathastu Photography" className="h-[5rem] md:h-[6rem] w-auto object-contain" />
        </a>
        
        <div className="flex items-center gap-6">
          <a href="https://www.facebook.com/people/Tathastu-Photography/61576326264509/" target="_blank" rel="noopener noreferrer" className="hover:text-olive transition-colors" aria-label="Facebook"><Facebook size={20} /></a>
          <a href="https://www.instagram.com/tathastu_photography_dxb?igsh=bDdoMGZid29jc2dl" target="_blank" rel="noopener noreferrer" className="hover:text-olive transition-colors" aria-label="Instagram"><Instagram size={20} /></a>
          <a href="https://www.linkedin.com/in/tathastu-photography-144278369/" target="_blank" rel="noopener noreferrer" className="hover:text-olive transition-colors" aria-label="LinkedIn"><Linkedin size={20} /></a>
          <a href="https://www.youtube.com/@tathastuphotography" target="_blank" rel="noopener noreferrer" className="hover:text-olive transition-colors" aria-label="Youtube"><Youtube size={20} /></a>
        </div>
        
        <p className="text-sm text-gray-400 mt-6 tracking-wide">
          Copyright © {new Date().getFullYear()} Tathastu Photography - All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
