import { Phone, Menu, X } from "lucide-react@0.487.0";
import { useState } from "react";
import { motion } from "motion/react";
import { OperatingStatus } from "./OperatingStatus";

// Logo from imgur
const logoFull = "https://i.imgur.com/fxQsKb9.png";
const logoIcon = "https://i.imgur.com/fxQsKb9.png";

export function PremiumHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-lg shadow-sm z-50 border-b border-[var(--border)]">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <div className="flex items-center">
            <img 
              src={logoFull} 
              alt="Viet Iconic"
              className="h-12 w-auto hidden md:block"
            />
            <img 
              src={logoIcon} 
              alt="Viet Iconic"
              className="h-10 w-auto md:hidden"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            <button
              onClick={() => scrollToSection("home")}
              className="text-[var(--text)] hover:text-[var(--brand-gold)] transition-colors"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="text-[var(--text)] hover:text-[var(--brand-gold)] transition-colors"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("menu")}
              className="text-[var(--text)] hover:text-[var(--brand-gold)] transition-colors"
            >
              Menu
            </button>
            <button
              onClick={() => scrollToSection("gallery")}
              className="text-[var(--text)] hover:text-[var(--brand-gold)] transition-colors"
            >
              Gallery
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-[var(--text)] hover:text-[var(--brand-gold)] transition-colors"
            >
              Contact
            </button>
          </nav>

          {/* CTA Buttons */}
          <div className="flex items-center gap-4">
            <div className="hidden xl:block">
              <OperatingStatus />
            </div>

            <a 
              href="tel:0466634567"
              className="hidden md:flex items-center gap-2 text-[var(--brand-dark)] hover:text-[var(--brand-gold)] transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span>0466 634 567</span>
            </a>
            <a 
              href="tel:0466634567" 
              className="btn-primary hidden md:block hover:no-underline"
            >
              Order Now
            </a>
            
            {/* Mobile Menu Button - Animated Hamburger */}
            <button
              className="lg:hidden p-2 relative w-10 h-10 flex items-center justify-center"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              <div className="w-6 h-5 flex flex-col justify-between">
                <motion.span
                  className="w-full h-0.5 bg-[var(--brand-dark)] block"
                  animate={isMenuOpen ? {
                    rotate: 45,
                    y: 9,
                  } : {
                    rotate: 0,
                    y: 0,
                  }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                />
                <motion.span
                  className="w-full h-0.5 bg-[var(--brand-dark)] block"
                  animate={isMenuOpen ? {
                    opacity: 0,
                  } : {
                    opacity: 1,
                  }}
                  transition={{ duration: 0.2 }}
                />
                <motion.span
                  className="w-full h-0.5 bg-[var(--brand-dark)] block"
                  animate={isMenuOpen ? {
                    rotate: -45,
                    y: -9,
                  } : {
                    rotate: 0,
                    y: 0,
                  }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                />
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <motion.nav
          initial={false}
          animate={isMenuOpen ? {
            height: "auto",
            opacity: 1,
          } : {
            height: 0,
            opacity: 0,
          }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="lg:hidden overflow-hidden border-t border-[var(--border)]"
        >
          <div className="flex flex-col gap-4 py-6">
            <button
              onClick={() => scrollToSection("home")}
              className="text-[var(--text)] hover:text-[var(--brand-gold)] transition-colors text-left py-2"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="text-[var(--text)] hover:text-[var(--brand-gold)] transition-colors text-left py-2"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("menu")}
              className="text-[var(--text)] hover:text-[var(--brand-gold)] transition-colors text-left py-2"
            >
              Menu
            </button>
            <button
              onClick={() => scrollToSection("gallery")}
              className="text-[var(--text)] hover:text-[var(--brand-gold)] transition-colors text-left py-2"
            >
              Gallery
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-[var(--text)] hover:text-[var(--brand-gold)] transition-colors text-left py-2"
            >
              Contact
            </button>
            <div className="py-2 flex justify-start">
              <OperatingStatus />
            </div>
            <a 
              href="tel:0466634567"
              className="flex items-center gap-2 text-[var(--brand-dark)] py-2"
            >
              <Phone className="w-4 h-4" />
              <span>0466 634 567</span>
            </a>
            <a 
              href="tel:0466634567" 
              className="btn-primary mt-2 block text-center hover:no-underline"
            >
              Order Now
            </a>
          </div>
        </motion.nav>
      </div>
    </header>
  );
}