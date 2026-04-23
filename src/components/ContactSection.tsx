import { useState } from "react";
import { motion } from "framer-motion";
import { MessageCircle, Phone, MapPin, Mail } from "lucide-react";

const ContactSection = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`New Inquiry from ${form.name}`);
    const body = encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\nMessage:\n${form.message}`);
    window.location.href = `mailto:dipanshumaheshwari73698@gmail.com?subject=${subject}&body=${body}`;
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="py-24 md:py-32 bg-white text-black border-t border-gray-100">
      <div className="section-padding">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-3xl md:text-4xl text-black tracking-widest uppercase inline-block relative after:content-[''] after:block after:w-12 after:h-[2px] after:bg-olive after:mx-auto after:mt-6"
          >
            CONTACT US
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-2 gap-16 max-w-6xl mx-auto">
          {/* Form */}
          <motion.form
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit}
            className="space-y-8"
          >
            <div>
              <input
                type="text"
                placeholder="Full Name *"
                required
                maxLength={100}
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full bg-transparent border-b border-gray-300 pb-3 text-[15px] placeholder:text-gray-400 focus:border-olive focus:outline-none transition-colors"
              />
            </div>
            <div>
              <input
                type="email"
                placeholder="Email Address *"
                required
                maxLength={255}
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full bg-transparent border-b border-gray-300 pb-3 text-[15px] placeholder:text-gray-400 focus:border-olive focus:outline-none transition-colors"
              />
            </div>
            <div>
              <textarea
                placeholder="Tell us about your event..."
                required
                maxLength={1000}
                rows={5}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full bg-transparent border-b border-gray-300 pb-3 text-[15px] placeholder:text-gray-400 focus:border-olive focus:outline-none transition-colors resize-none"
              />
            </div>
            <button
              type="submit"
              className="px-8 py-4 bg-olive text-white text-sm tracking-widest uppercase font-display hover:bg-black transition-all duration-300 w-full md:w-auto"
            >
              Send Message
            </button>
          </motion.form>

          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-10 flex flex-col justify-center"
          >
            <div className="flex items-start gap-4 text-gray-800">
              <Phone size={24} className="text-olive shrink-0" />
              <div>
                <p className="font-display tracking-widest uppercase text-sm mb-2">Phone</p>
                <p className="text-[15px] font-sans">+91 95450 12856</p>
              </div>
            </div>
            <div className="flex items-start gap-4 text-gray-800">
              <Mail size={24} className="text-olive shrink-0" />
              <div>
                <p className="font-display tracking-widest uppercase text-sm mb-2">Email</p>
                <p className="text-[15px] font-sans">hello@tathastuphotography.com</p>
              </div>
            </div>
            <div className="flex items-start gap-4 text-gray-800">
              <MapPin size={24} className="text-olive shrink-0" />
              <div>
                <p className="font-display tracking-widest uppercase text-sm mb-2">Studio</p>
                <p className="text-[15px] font-sans">Dubai, United Arab Emirates</p>
              </div>
            </div>
            <div className="pt-4">
              <a
                href="https://wa.me/919545012856"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-4 bg-[#25D366] text-white text-sm tracking-widest uppercase font-display hover:opacity-90 transition-opacity"
              >
                <MessageCircle size={20} />
                Chat on WhatsApp
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
