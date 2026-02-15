import { Instagram, Facebook, Mail, MapPin, Phone } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#0a0a0a] border-t-2 border-[#D4A544]">
      <div className="container mx-auto px-4 py-12 max-w-7xl">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3
              className="text-3xl mb-4 text-[#E8DCC8]"
              style={{
                fontFamily: "Bebas Neue, Impact, Arial Black, sans-serif",
                letterSpacing: "0.05em",
              }}
            >
              LOBO WRAPS
            </h3>
            <p
              className="text-gray-400 mb-4 leading-relaxed"
              style={{ fontFamily: "Oswald, Arial, sans-serif", fontWeight: 300 }}
            >
              Boise&apos;s premier destination for premium vehicle wraps and
              custom automotive design.
            </p>
            <div className="flex gap-3">
              <a
                href="#"
                className="w-10 h-10 bg-[#D4A544] flex items-center justify-center hover:bg-[#E8DCC8] transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5 text-black" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-[#D4A544] flex items-center justify-center hover:bg-[#E8DCC8] transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5 text-black" />
              </a>
            </div>
          </div>

          <div>
            <h4
              className="text-xl text-[#E8DCC8] mb-4 uppercase"
              style={{ fontFamily: "Arial Black, sans-serif" }}
            >
              Quick Links
            </h4>
            <ul className="space-y-2">
              {["Services", "Gallery", "About", "Contact"].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="text-gray-400 hover:text-[#D4A544] transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4
              className="text-xl text-[#E8DCC8] mb-4 uppercase"
              style={{ fontFamily: "Arial Black, sans-serif" }}
            >
              Contact Info
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-gray-400">
                <MapPin className="w-5 h-5 text-[#D4A544] flex-shrink-0 mt-0.5" />
                <span>Boise, Idaho</span>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-[#D4A544] flex-shrink-0 mt-0.5" />
                <a
                  href="tel:+12085551234"
                  className="text-gray-400 hover:text-[#D4A544] transition-colors"
                >
                  (208) 555-1234
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-[#D4A544] flex-shrink-0 mt-0.5" />
                <a
                  href="mailto:info@lobowraps.com"
                  className="text-gray-400 hover:text-[#D4A544] transition-colors"
                >
                  info@lobowraps.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-800 text-center text-gray-500 text-sm">
          <p>
            &copy; {new Date().getFullYear()} Lobo Wraps. All rights reserved. |
            Boise, Idaho
          </p>
        </div>
      </div>
    </footer>
  );
}
