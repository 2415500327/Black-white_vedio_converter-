import { motion } from "framer-motion";
import { MessageCircle, Instagram } from "lucide-react";

const ChatSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-3xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
        <motion.a
          href="https://wa.me/919545012856"
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="w-full sm:w-auto bg-[#25D366] text-white py-4 px-10 rounded-full flex items-center justify-center gap-3 text-[16px] font-semibold hover:opacity-90 hover:scale-105 transition-all duration-300 shadow-lg"
        >
          <MessageCircle size={22} className="fill-white" />
          Chat on WhatsApp
        </motion.a>

        <motion.a
          href="https://www.instagram.com/tathastu_photography_dxb?igsh=bDdoMGZid29jc2dl"
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="w-full sm:w-auto bg-gradient-to-r from-[#F58529] via-[#DD2A7B] to-[#8134AF] text-white py-4 px-10 rounded-full flex items-center justify-center gap-3 text-[16px] font-semibold hover:opacity-90 hover:scale-105 transition-all duration-300 shadow-lg"
        >
          <Instagram size={22} />
          Follow on Instagram
        </motion.a>
      </div>
    </section>
  );
};

export default ChatSection;
