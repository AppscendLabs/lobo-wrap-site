"use client";

import { motion } from "motion/react";
import { Sparkles, Car, Palette, Shield } from "lucide-react";

const services = [
  {
    icon: Car,
    title: "Full Vehicle Wraps",
    description:
      "Complete color changes and custom designs that transform your vehicle into a work of art.",
    features: ["Color Change", "Custom Graphics", "Paint Protection"],
  },
  {
    icon: Palette,
    title: "Custom Graphics",
    description:
      "Eye-catching decals, racing stripes, and unique designs tailored to your vision.",
    features: ["Logo Design", "Racing Stripes", "Decals & Stickers"],
  },
  {
    icon: Shield,
    title: "Paint Protection",
    description:
      "Clear protective film to keep your vehicle's paint looking pristine for years.",
    features: ["Clear Bra", "PPF Installation", "Scratch Protection"],
  },
  {
    icon: Sparkles,
    title: "Specialty Finishes",
    description:
      "Premium finishes including chrome, matte, satin, and textured wraps.",
    features: ["Chrome Wraps", "Matte Finish", "Carbon Fiber"],
  },
];

export function Services() {
  return (
    <section
      id="services"
      className="py-20 bg-[#E8DCC8] relative overflow-hidden"
    >
      <div
        className="absolute top-10 right-10 w-32 h-32 opacity-10"
        style={{
          backgroundImage: `repeating-conic-gradient(#000 0% 25%, transparent 0% 50%)`,
          backgroundSize: "20px 20px",
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
            className="text-5xl md:text-6xl mb-4"
            style={{
              fontFamily: "Bebas Neue, Impact, Arial Black, sans-serif",
              color: "#000",
              textShadow: "3px 3px 0 #D4A544",
              letterSpacing: "0.05em",
            }}
          >
            OUR SERVICES
          </h2>
          <div className="w-24 h-1 bg-[#D4A544] mx-auto" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="bg-black p-8 shadow-xl relative overflow-hidden group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#D4A544] to-transparent opacity-0 group-hover:opacity-20 transition-opacity duration-300" />

              <div className="relative z-10">
                <div className="w-16 h-16 bg-[#D4A544] flex items-center justify-center mb-6">
                  <service.icon className="w-8 h-8 text-black" />
                </div>

                <h3
                  className="text-2xl mb-4 text-[#E8DCC8] uppercase"
                  style={{
                    fontFamily: "Bebas Neue, Arial Black, sans-serif",
                    letterSpacing: "0.05em",
                  }}
                >
                  {service.title}
                </h3>

                <p
                  className="text-gray-300 mb-6 leading-relaxed"
                  style={{
                    fontFamily: "Oswald, Arial, sans-serif",
                    fontWeight: 300,
                  }}
                >
                  {service.description}
                </p>

                <ul className="space-y-2">
                  {service.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center text-[#E8DCC8]"
                    >
                      <svg
                        className="w-5 h-5 mr-2 text-[#D4A544]"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M13 2L3 14h8l-1 8 10-12h-8l1-8z" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
