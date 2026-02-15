"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { MapPin, Clock, Award, Users } from "lucide-react";

const stats = [
  { icon: Award, label: "Years Experience", value: "10+" },
  { icon: Users, label: "Happy Clients", value: "500+" },
  { icon: Clock, label: "Projects Completed", value: "1000+" },
  { icon: MapPin, label: "Boise Location", value: "Local" },
];

export function About() {
  return (
    <section
      id="about"
      className="py-20 bg-[#E8DCC8] relative overflow-hidden"
    >
      <div
        className="absolute bottom-0 left-0 w-64 h-64 opacity-5"
        style={{
          backgroundImage: `repeating-conic-gradient(#000 0% 25%, transparent 0% 50%)`,
          backgroundSize: "30px 30px",
        }}
      />

      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2
              className="text-5xl md:text-6xl mb-6"
              style={{
                fontFamily: "Bebas Neue, Impact, Arial Black, sans-serif",
                color: "#000",
                textShadow: "3px 3px 0 #D4A544",
                letterSpacing: "0.05em",
              }}
            >
              ABOUT US
            </h2>
            <div className="w-24 h-1 bg-[#D4A544] mb-8" />

            <div
              className="space-y-4 text-gray-800 leading-relaxed"
              style={{ fontFamily: "Oswald, Arial, sans-serif", fontWeight: 300 }}
            >
              <p className="text-lg">
                <strong className="text-black" style={{ fontWeight: 600 }}>
                  Lobo Wraps
                </strong>{" "}
                is Boise, Idaho&apos;s premier destination for premium vehicle
                wraps and custom automotive design. We specialize in
                transforming ordinary vehicles into extraordinary works of art.
              </p>

              <p className="text-lg">
                Our team of skilled professionals brings years of experience and
                passion to every project. Whether you&apos;re looking for a
                complete color change, custom graphics, or paint protection, we
                deliver exceptional quality and attention to detail.
              </p>

              <p className="text-lg">
                Using only the highest quality materials and cutting-edge
                techniques, we ensure every wrap not only looks stunning but also
                protects your investment for years to come.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 mt-12">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-black p-6 text-center"
                >
                  <stat.icon className="w-8 h-8 text-[#D4A544] mx-auto mb-3" />
                  <div
                    className="text-3xl text-[#E8DCC8] mb-1"
                    style={{ fontFamily: "Arial Black, sans-serif" }}
                  >
                    {stat.value}
                  </div>
                  <div className="text-gray-400 text-sm uppercase tracking-wider">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative">
              <Image
                src="/images/9ad380001970e78723083365f8e2acc7c3b87ffb.png"
                alt="Lobo Wraps Branding"
                width={600}
                height={600}
                className="w-full h-auto shadow-2xl"
              />

              <motion.div
                className="absolute -bottom-6 -right-6 text-[#D4A544]"
                animate={{ rotate: [0, -10, 0], scale: [1, 1.1, 1] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <svg
                  width="80"
                  height="80"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M13 2L3 14h8l-1 8 10-12h-8l1-8z" />
                </svg>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
