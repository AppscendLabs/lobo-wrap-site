"use client";

import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "#services", label: "Services" },
  { href: "#gallery", label: "Gallery" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
    setIsMobileMenuOpen(false);
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-black/95 backdrop-blur-sm shadow-lg"
          : "bg-white/95 backdrop-blur-sm shadow-md"
      }`}
    >
      <nav className="container mx-auto px-4 py-4 max-w-7xl">
        <div className="flex items-center justify-between">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className={`text-2xl md:text-3xl transition-colors ${
              isScrolled
                ? "text-[#E8DCC8] hover:text-[#D4A544]"
                : "text-black hover:text-[#D4A544]"
            }`}
            style={{
              fontFamily: "Bebas Neue, Impact, Arial Black, sans-serif",
              letterSpacing: "0.05em",
            }}
          >
            LOBO WRAPS
          </button>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollToSection(link.href)}
                className={`transition-colors uppercase tracking-wider relative group ${
                  isScrolled
                    ? "text-[#E8DCC8] hover:text-[#D4A544]"
                    : "text-black hover:text-[#D4A544]"
                }`}
                style={{ fontFamily: "Oswald, Arial, sans-serif", fontWeight: 500 }}
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#D4A544] group-hover:w-full transition-all duration-300" />
              </button>
            ))}
            <button
              onClick={() => scrollToSection("#contact")}
              className="px-6 py-2 bg-[#D4A544] text-black uppercase tracking-wider hover:bg-black hover:text-[#D4A544] transition-all duration-300"
              style={{
                fontFamily: "Bebas Neue, Arial Black, sans-serif",
                fontSize: "1rem",
                letterSpacing: "0.1em",
              }}
            >
              Get Quote
            </button>
          </div>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`md:hidden transition-colors ${
              isScrolled
                ? "text-[#E8DCC8] hover:text-[#D4A544]"
                : "text-black hover:text-[#D4A544]"
            }`}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden mt-4 pb-4 border-t border-[#D4A544]/30"
          >
            <div className="flex flex-col gap-4 mt-4">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => scrollToSection(link.href)}
                  className={`transition-colors uppercase tracking-wider text-left py-2 ${
                    isScrolled
                      ? "text-[#E8DCC8] hover:text-[#D4A544]"
                      : "text-black hover:text-[#D4A544]"
                  }`}
                  style={{ fontFamily: "Arial, sans-serif" }}
                >
                  {link.label}
                </button>
              ))}
              <button
                onClick={() => scrollToSection("#contact")}
                className="px-6 py-3 bg-[#D4A544] text-black uppercase tracking-wider hover:bg-black hover:text-[#D4A544] transition-all duration-300 text-center"
                style={{ fontFamily: "Arial Black, sans-serif" }}
              >
                Get Quote
              </button>
            </div>
          </motion.div>
        )}
      </nav>
    </motion.header>
  );
}
