"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "motion/react";

const galleryImages = [
  {
    url: "https://images.unsplash.com/photo-1759295199382-aa4f1bc50db2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXIlMjB3cmFwJTIwdmlueWwlMjBjdXN0b218ZW58MXx8fHwxNzcxMTA5NjI5fDA&ixlib=rb-4.1.0&q=80&w=1080",
    title: "Custom Vinyl Wrap",
    category: "Full Wrap",
  },
  {
    url: "https://images.unsplash.com/photo-1768024175225-67845a60b550?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBjYXIlMjB3cmFwJTIwbWF0dGUlMjBibGFja3xlbnwxfHx8fDE3NzExMDk2MzB8MA&ixlib=rb-4.1.0&q=80&w=1080",
    title: "Matte Black Luxury",
    category: "Color Change",
  },
  {
    url: "https://images.unsplash.com/photo-1761756580776-3ca2ea321831?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjdXN0b20lMjB2ZWhpY2xlJTIwZ3JhcGhpY3N8ZW58MXx8fHwxNzcxMTA5NjMwfDA&ixlib=rb-4.1.0&q=80&w=1080",
    title: "Vehicle Graphics",
    category: "Custom Design",
  },
  {
    url: "https://images.unsplash.com/photo-1768313990605-2ddd9cfa7ee5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaHJvbWUlMjBjYXIlMjB3cmFwfGVufDF8fHx8MTc3MTEwOTYzMHww&ixlib=rb-4.1.0&q=80&w=1080",
    title: "Chrome Finish",
    category: "Specialty",
  },
  {
    url: "https://images.unsplash.com/photo-1755026824535-4f657a673e59?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcG9ydHMlMjBjYXIlMjBjdXN0b20lMjBwYWludHxlbnwxfHx8fDE3NzExMDk2MzF8MA&ixlib=rb-4.1.0&q=80&w=1080",
    title: "Sports Car Custom",
    category: "Performance",
  },
  {
    url: "https://images.unsplash.com/photo-1761934658038-d0e6792378b1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXIlMjBkZXRhaWxpbmclMjBwcm9mZXNzaW9uYWx8ZW58MXx8fHwxNzcxMTA5NjMxfDA&ixlib=rb-4.1.0&q=80&w=1080",
    title: "Professional Detail",
    category: "Paint Protection",
  },
];

function GalleryImage({
  src,
  alt,
  className,
}: {
  src: string;
  alt: string;
  className?: string;
}) {
  const [didError, setDidError] = useState(false);

  if (didError) {
    return (
      <div
        className={`bg-gray-800 flex items-center justify-center ${className ?? ""}`}
      >
        <span className="text-gray-500 text-sm">Image unavailable</span>
      </div>
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      fill
      className={className}
      onError={() => setDidError(true)}
      unoptimized
    />
  );
}

export function Gallery() {
  return (
    <section id="gallery" className="py-20 bg-black relative">
      <motion.div
        className="absolute top-20 left-1/4 text-[#D4A544] opacity-10"
        animate={{ rotate: [0, 15, 0], scale: [1, 1.2, 1] }}
        transition={{ duration: 4, repeat: Infinity }}
      >
        <svg
          width="100"
          height="100"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M13 2L3 14h8l-1 8 10-12h-8l1-8z" />
        </svg>
      </motion.div>

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
            OUR WORK
          </h2>
          <div className="w-24 h-1 bg-[#D4A544] mx-auto mb-4" />
          <p
            className="text-gray-400 text-lg max-w-2xl mx-auto"
            style={{ fontFamily: "Oswald, Arial, sans-serif", fontWeight: 300 }}
          >
            Explore our portfolio of premium wraps and custom designs
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <motion.div
              key={image.title}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
              className="relative group overflow-hidden aspect-[4/3] cursor-pointer"
            >
              <GalleryImage
                src={image.url}
                alt={image.title}
                className="object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-end p-6">
                <div>
                  <span
                    className="inline-block px-3 py-1 bg-[#D4A544] text-black text-sm mb-2 uppercase"
                    style={{ fontFamily: "Arial Black, sans-serif" }}
                  >
                    {image.category}
                  </span>
                  <h3
                    className="text-[#E8DCC8] text-xl"
                    style={{ fontFamily: "Arial Black, sans-serif" }}
                  >
                    {image.title}
                  </h3>
                </div>
              </div>

              <div
                className="absolute top-0 right-0 w-16 h-16 opacity-30"
                style={{
                  backgroundImage: `repeating-conic-gradient(#D4A544 0% 25%, transparent 0% 50%)`,
                  backgroundSize: "10px 10px",
                }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
