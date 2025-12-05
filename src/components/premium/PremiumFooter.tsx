import { Facebook, Instagram, Mail, Phone, MapPin } from "lucide-react@0.487.0";

// Logo assets - replace with your actual Vercel domain
const logoFull = "https://your-vercel-domain.vercel.app/assets/viet-iconic-logo-full.png";
const builderLogo = "https://your-vercel-domain.vercel.app/assets/builder-logo.png";

export function PremiumFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#004323] text-white pt-12 sm:pt-16 pb-6 sm:pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-12 mb-8 sm:mb-12">
          {/* Logo & About */}
          <div className="lg:col-span-2">
            <img 
              src={logoFull} 
              alt="Viet Iconic"
              className="h-12 sm:h-16 w-auto mb-4 sm:mb-6 brightness-150 contrast-125"
            />
            <p className="text-sm sm:text-base text-white/80 leading-relaxed mb-4 sm:mb-6 max-w-md">
              Serving freshly crafted Bánh Mì, Phở, and traditional Vietnamese dishes 
              made with house-made sauces, fresh herbs, and locally sourced ingredients.
            </p>
            <div className="flex gap-3 sm:gap-4">
              <a
                href="https://www.facebook.com/p/Viet-Iconic-61579010473462/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 sm:w-12 sm:h-12 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center hover:bg-[var(--brand-gold)] transition-all duration-300 hover:scale-110"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4 sm:mb-6 text-base sm:text-lg">Quick Links</h4>
            <ul className="space-y-2 sm:space-y-3 text-sm sm:text-base text-white/80">
              <li>
                <a href="#home" className="hover:text-[var(--brand-gold)] transition-colors inline-block">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-[var(--brand-gold)] transition-colors inline-block">
                  About Us
                </a>
              </li>
              <li>
                <a href="#menu" className="hover:text-[var(--brand-gold)] transition-colors inline-block">
                  Our Menu
                </a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-[var(--brand-gold)] transition-colors inline-block">
                  Gallery
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-[var(--brand-gold)] transition-colors inline-block">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-semibold mb-4 sm:mb-6 text-base sm:text-lg">Contact Us</h4>
            <ul className="space-y-3 sm:space-y-4 text-sm sm:text-base text-white/80">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-[var(--brand-gold)] flex-shrink-0 mt-1" />
                <span>
                  134 Hawthorne Road<br />
                  Hawthorne QLD 4171
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-[var(--brand-gold)] flex-shrink-0" />
                <a href="tel:0466634567" className="hover:text-[var(--brand-gold)] transition-colors">
                  0466 634 567
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-[var(--brand-gold)] flex-shrink-0" />
                <a href="mailto:Vieticonic2025@gmail.com" className="hover:text-[var(--brand-gold)] transition-colors break-all">
                  Vieticonic2025@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-6 sm:pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-3 sm:gap-4 text-white/60 text-xs sm:text-sm">
            <p className="text-center md:text-left">&copy; {currentYear} Viet Iconic. All rights reserved.</p>
            <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-6">
              <p className="flex items-center justify-center gap-2 text-white text-sm sm:text-base font-medium uppercase tracking-wide">
                Built by
                <a 
                  href="#" 
                  className="inline-block hover:opacity-80 transition-opacity -translate-y-[2px]"
                >
                  <img 
                    src={builderLogo} 
                    alt="SixtyFour Studio" 
                    className="h-5 w-auto"
                  />
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}