"use client";

import { motion } from "motion/react";
import { Mail, Phone, MapPin, Instagram, Facebook } from "lucide-react";

export function Contact() {
  return (
    <section
      id="contact"
      className="py-20 bg-black relative overflow-hidden"
    >
      <motion.div
        className="absolute top-1/4 right-10 text-[#D4A544] opacity-10"
        animate={{ rotate: [0, 20, 0], scale: [1, 1.3, 1] }}
        transition={{ duration: 5, repeat: Infinity }}
      >
        <svg
          width="120"
          height="120"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M13 2L3 14h8l-1 8 10-12h-8l1-8z" />
        </svg>
      </motion.div>

      <div
        className="absolute bottom-0 right-0 w-96 h-96 opacity-5"
        style={{
          backgroundImage: `repeating-conic-gradient(#fff 0% 25%, transparent 0% 50%)`,
          backgroundSize: "40px 40px",
        }}
      />

      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2
            className="text-5xl md:text-6xl mb-4 text-[#E8DCC8]"
            style={{
              fontFamily: "Bebas Neue, Impact, Arial Black, sans-serif",
              textShadow: "3px 3px 0 #D4A544",
              letterSpacing: "0.05em",
            }}
          >
            GET IN TOUCH
          </h2>
          <div className="w-24 h-1 bg-[#D4A544] mx-auto mb-4" />
          <p
            className="text-gray-400 text-lg max-w-2xl mx-auto"
            style={{ fontFamily: "Oswald, Arial, sans-serif", fontWeight: 300 }}
          >
            Ready to transform your ride? Contact us today for a free quote!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3
                className="text-2xl text-[#E8DCC8] mb-6 uppercase"
                style={{ fontFamily: "Arial Black, sans-serif" }}
              >
                Contact Information
              </h3>

              <div className="space-y-6">
                <div className="flex items-start gap-4 group cursor-pointer">
                  <div className="w-12 h-12 bg-[#D4A544] flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <MapPin className="w-6 h-6 text-black" />
                  </div>
                  <div>
                    <div
                      className="text-[#E8DCC8] mb-1"
                      style={{ fontFamily: "Arial Black, sans-serif" }}
                    >
                      Location
                    </div>
                    <div className="text-gray-400">Boise, Idaho</div>
                  </div>
                </div>

                <div className="flex items-start gap-4 group cursor-pointer">
                  <div className="w-12 h-12 bg-[#D4A544] flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <Phone className="w-6 h-6 text-black" />
                  </div>
                  <div>
                    <div
                      className="text-[#E8DCC8] mb-1"
                      style={{ fontFamily: "Arial Black, sans-serif" }}
                    >
                      Phone
                    </div>
                    <a
                      href="tel:+12085551234"
                      className="text-gray-400 hover:text-[#D4A544] transition-colors"
                    >
                      (208) 555-1234
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 group cursor-pointer">
                  <div className="w-12 h-12 bg-[#D4A544] flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <Mail className="w-6 h-6 text-black" />
                  </div>
                  <div>
                    <div
                      className="text-[#E8DCC8] mb-1"
                      style={{ fontFamily: "Arial Black, sans-serif" }}
                    >
                      Email
                    </div>
                    <a
                      href="mailto:info@lobowraps.com"
                      className="text-gray-400 hover:text-[#D4A544] transition-colors"
                    >
                      info@lobowraps.com
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h4
                className="text-xl text-[#E8DCC8] mb-4 uppercase"
                style={{ fontFamily: "Arial Black, sans-serif" }}
              >
                Follow Us
              </h4>
              <div className="flex gap-4">
                <a
                  href="#"
                  className="w-12 h-12 bg-[#D4A544] flex items-center justify-center hover:bg-[#E8DCC8] transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="w-6 h-6 text-black" />
                </a>
                <a
                  href="#"
                  className="w-12 h-12 bg-[#D4A544] flex items-center justify-center hover:bg-[#E8DCC8] transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook className="w-6 h-6 text-black" />
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-[#1a1a1a] p-8 border-2 border-[#D4A544]"
          >
            <form className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-[#E8DCC8] mb-2 uppercase text-sm tracking-wider"
                >
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 bg-black border border-gray-700 text-[#E8DCC8] focus:border-[#D4A544] focus:outline-none transition-colors"
                  placeholder="Your Name"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-[#E8DCC8] mb-2 uppercase text-sm tracking-wider"
                >
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 bg-black border border-gray-700 text-[#E8DCC8] focus:border-[#D4A544] focus:outline-none transition-colors"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="block text-[#E8DCC8] mb-2 uppercase text-sm tracking-wider"
                >
                  Phone
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="w-full px-4 py-3 bg-black border border-gray-700 text-[#E8DCC8] focus:border-[#D4A544] focus:outline-none transition-colors"
                  placeholder="(208) 555-1234"
                />
              </div>

              <div>
                <label
                  htmlFor="service"
                  className="block text-[#E8DCC8] mb-2 uppercase text-sm tracking-wider"
                >
                  Service Interested In
                </label>
                <select
                  id="service"
                  name="service"
                  className="w-full px-4 py-3 bg-black border border-gray-700 text-[#E8DCC8] focus:border-[#D4A544] focus:outline-none transition-colors"
                >
                  <option value="">Select a service</option>
                  <option value="full-wrap">Full Vehicle Wrap</option>
                  <option value="graphics">Custom Graphics</option>
                  <option value="protection">Paint Protection</option>
                  <option value="specialty">Specialty Finishes</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-[#E8DCC8] mb-2 uppercase text-sm tracking-wider"
                >
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  className="w-full px-4 py-3 bg-black border border-gray-700 text-[#E8DCC8] focus:border-[#D4A544] focus:outline-none transition-colors resize-none"
                  placeholder="Tell us about your project..."
                />
              </div>

              <button
                type="submit"
                className="w-full px-8 py-4 bg-[#D4A544] text-black uppercase tracking-wider hover:bg-[#E8DCC8] transition-all duration-300 shadow-lg hover:shadow-2xl"
                style={{ fontFamily: "Arial Black, sans-serif" }}
              >
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
