"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { ChevronDown } from "lucide-react";

export function Hero() {
  const scrollToServices = () => {
    document.getElementById("services")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen bg-white overflow-hidden flex items-center justify-center">
      <div className="absolute inset-0 bg-gradient-to-br from-white via-gray-50 to-white" />

      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `repeating-linear-gradient(45deg, #D4A544 0px, #D4A544 2px, transparent 2px, transparent 20px)`,
        }}
      />

      <motion.div
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#D4A544] rounded-full blur-3xl opacity-5"
        animate={{ scale: [1, 1.2, 1], x: [0, 50, 0], y: [0, 30, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#E8DCC8] rounded-full blur-3xl opacity-5"
        animate={{ scale: [1, 1.3, 1], x: [0, -30, 0], y: [0, -50, 0] }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      />

      <motion.div
        className="absolute top-20 left-10 text-[#D4A544] opacity-10"
        animate={{ rotate: [0, 10, 0], scale: [1, 1.1, 1] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      >
        <svg width="60" height="60" viewBox="0 0 24 24" fill="currentColor">
          <path d="M13 2L3 14h8l-1 8 10-12h-8l1-8z" />
        </svg>
      </motion.div>

      <motion.div
        className="absolute bottom-32 right-20 text-[#D4A544] opacity-10"
        animate={{ rotate: [0, -10, 0], scale: [1, 1.2, 1] }}
        transition={{
          duration: 2.5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.5,
        }}
      >
        <svg width="50" height="50" viewBox="0 0 24 24" fill="currentColor">
          <path d="M13 2L3 14h8l-1 8 10-12h-8l1-8z" />
        </svg>
      </motion.div>

      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-8"
        >
          <Image
            src="/images/74515287a27656aab47ef1336012a63beaace205.png"
            alt="Lobo Wraps Logo"
            width={256}
            height={256}
            className="mx-auto object-contain drop-shadow-xl"
            priority
          />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-6xl md:text-8xl mb-6 tracking-tight"
          style={{
            fontFamily: "Bebas Neue, Impact, Arial Black, sans-serif",
            color: "#000",
            textShadow: "4px 4px 0 #D4A544",
          }}
        >
          LOBO WRAPS
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-xl md:text-2xl text-gray-800 mb-8 max-w-2xl mx-auto"
          style={{ fontFamily: "Oswald, Arial, sans-serif" }}
        >
          Premium Vehicle Wraps & Custom Designs in Boise, Idaho
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <button
            onClick={scrollToServices}
            className="px-8 py-4 bg-black text-[#D4A544] uppercase tracking-wider hover:bg-[#D4A544] hover:text-black transition-all duration-300 shadow-lg hover:shadow-2xl hover:scale-105"
            style={{
              fontFamily: "Bebas Neue, Arial Black, sans-serif",
              fontSize: "1.1rem",
              letterSpacing: "0.1em",
            }}
          >
            View Services
          </button>
          <a
            href="#contact"
            className="px-8 py-4 border-2 border-black text-black uppercase tracking-wider hover:bg-black hover:text-[#D4A544] transition-all duration-300 shadow-lg"
            style={{
              fontFamily: "Bebas Neue, Arial Black, sans-serif",
              fontSize: "1.1rem",
              letterSpacing: "0.1em",
            }}
          >
            Get A Quote
          </a>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        <ChevronDown className="w-8 h-8 text-[#D4A544]" />
      </motion.div>
    </section>
  );
}
