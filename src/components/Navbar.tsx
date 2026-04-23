import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import logoImage from "@/assets/logo.png";

const navLinks = [
  { label: "Home", href: "/", isRoute: true },
  { label: "Photos By Tathastu", href: "/photos", isRoute: true },
  { label: "Contact Us", href: "/#contact", isRoute: false },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <div className="bg-black text-white py-2 text-center text-xs tracking-widest font-display flex items-center justify-center gap-2 relative z-[60]">
        <Phone size={12} />
        <span>BOOK US ON +91 95450 12856</span>
      </div>
      <nav
        className={`sticky top-0 z-50 h-[70px] flex items-center justify-between section-padding transition-all duration-500 bg-white border-b ${
          scrolled ? "shadow-sm border-gray-100" : "border-transparent"
        }`}
      >
        {/* Links (Left on desktop) */}
        <ul className="hidden lg:flex items-center gap-8 flex-1 pl-4">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.href;
            
            return (
              <li key={link.href}>
                {link.isRoute ? (
                  <Link
                    to={link.href}
                    className={`font-serif-menu text-[17px] text-[#222] hover:text-olive transition-colors duration-300 ${
                      isActive ? "border-b-[1.5px] border-[#222] pb-1" : "pb-1"
                    }`}
                  >
                    {link.label}
                  </Link>
                ) : (
                  <a
                    href={link.href}
                    className="font-serif-menu text-[17px] text-[#222] hover:text-olive transition-colors duration-300 pb-1"
                  >
                    {link.label}
                  </a>
                )}
              </li>
            );
          })}
        </ul>

        {/* Logo (Center) */}
        <div className="flex-1 flex justify-start lg:justify-center">
          <a href="#home" className="flex items-center">
            <img src={logoImage} alt="Tathastu Photography" className="h-[3.5rem] md:h-[3.5rem] w-auto object-contain" />
          </a>
        </div>

        {/* Right action button */}
        <div className="hidden lg:flex flex-1 justify-end">
          <a href="#contact" className="bg-olive text-white px-6 py-3 text-xs tracking-wider font-display uppercase hover:bg-black transition-colors">
            Book Your Session Now
          </a>
        </div>

        {/* Mobile toggle */}
        <div className="flex items-center lg:hidden">
            <button
            className="text-foreground z-[60] relative"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
            >
            {mobileOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, x: "100%" }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: "100%" }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="fixed inset-0 top-[32px] bg-white z-50 flex flex-col items-center justify-center min-h-screen"
            >
              <ul className="flex flex-col items-center gap-8 text-center px-4 w-full">
                {navLinks.map((link, i) => (
                  <motion.li
                    key={link.href}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.06 }}
                  >
                    {link.isRoute ? (
                      <Link
                        to={link.href}
                        onClick={() => setMobileOpen(false)}
                        className="font-serif-menu italic text-3xl text-foreground"
                      >
                        {link.label}
                      </Link>
                    ) : (
                      <a
                        href={link.href}
                        onClick={() => setMobileOpen(false)}
                        className="font-serif-menu italic text-3xl text-foreground"
                      >
                        {link.label}
                      </a>
                    )}
                  </motion.li>
                ))}
                <motion.li
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: navLinks.length * 0.06 }}
                  className="mt-8"
                >
                  <a 
                    href="#contact" 
                    onClick={() => setMobileOpen(false)}
                    className="bg-olive text-white px-8 py-4 text-sm tracking-wider font-display uppercase inline-block"
                  >
                    Book Your Session Now
                  </a>
                </motion.li>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
};

export default Navbar;
