import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, User, Instagram, ChevronDown } from "lucide-react";

const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-6 right-6 md:bottom-8 md:right-8 z-50 w-16 h-16 bg-[#212503] rounded-full flex items-center justify-center shadow-2xl transition-transform hover:scale-105 ${isOpen ? 'scale-0' : 'scale-100'}`}
        aria-label="Open Chat"
      >
        <MessageCircle size={32} className="text-white" />
        <span className="absolute -top-1 -right-1 bg-red-600 text-white text-xs font-bold px-2 py-0.5 rounded-full">
          1
        </span>
      </button>

      {/* Chat Popup */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="fixed bottom-6 right-4 left-4 sm:left-auto sm:right-6 md:bottom-8 md:right-8 z-50 sm:w-[350px] bg-gray-50 rounded-2xl shadow-2xl overflow-hidden flex flex-col font-sans border border-gray-200"
          >
            {/* Header */}
            <div className="bg-[#212503] relative pt-6 pb-8 px-6 text-center text-white">
              <button 
                onClick={() => setIsOpen(false)}
                className="absolute top-4 right-4 text-white/80 hover:text-white transition-colors"
                aria-label="Close Chat"
              >
                <ChevronDown size={24} />
              </button>
              <h3 className="text-[15px] font-medium tracking-wide mb-6">Contact Us</h3>
              
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-[#F4D3C4] rounded-full flex items-center justify-center">
                  <User size={36} className="text-[#C05D3A] fill-current" />
                </div>
              </div>
              
              <p className="text-[13px] text-white/90 font-medium">We'll respond as soon as we can.</p>
            </div>

            {/* Body */}
            <div className="p-4 flex-1 flex flex-col min-h-[300px]">
              
              {/* Message Card */}
              <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100 mb-6">
                <h4 className="text-[11px] text-gray-500 font-medium mb-3">Recent Conversations</h4>
                <div className="flex gap-3">
                  <div className="w-8 h-8 bg-[#F4D3C4] rounded-full flex items-center justify-center shrink-0 mt-0.5">
                    <User size={18} className="text-[#C05D3A] fill-current" />
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-[13px] font-bold text-gray-900">Tathastu Photography</span>
                      <span className="text-[11px] text-gray-500">1:14 PM</span>
                    </div>
                    <p className="text-[13px] text-gray-800 leading-snug">Let me know if you have any questions!</p>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col gap-3 mt-auto mb-4">
                <a 
                  href="https://wa.me/919545012856" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-[#25D366] text-white py-3.5 px-6 rounded-full flex items-center justify-center gap-2 text-[15px] font-medium hover:opacity-90 transition-opacity shadow-sm"
                >
                  <MessageCircle size={20} className="fill-white" />
                  Chat on WhatsApp
                </a>
                <a 
                  href="https://www.instagram.com/tathastu_photography_dxb?igsh=bDdoMGZid29jc2dl" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-gradient-to-r from-[#F58529] via-[#DD2A7B] to-[#8134AF] text-white py-3.5 px-6 rounded-full flex items-center justify-center gap-2 text-[15px] font-medium hover:opacity-90 transition-opacity shadow-sm"
                >
                  <Instagram size={20} />
                  Follow on Instagram
                </a>
              </div>
            </div>

            {/* Bottom Bar */}
            <div className="bg-white p-4 border-t border-gray-100 flex justify-center">
              <a 
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="bg-[#212503] text-white py-3 px-8 rounded-full text-sm font-medium hover:bg-black transition-colors w-full text-center max-w-[200px]"
              >
                Send a Message
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ChatWidget;
