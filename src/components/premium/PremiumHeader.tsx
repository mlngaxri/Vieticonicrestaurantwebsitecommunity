import { Phone, Menu, X } from "lucide-react@0.487.0";
import { useState } from "react";

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
      <div className="container mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
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
            
            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6 text-[var(--brand-dark)]" />
              ) : (
                <Menu className="w-6 h-6 text-[var(--brand-dark)]" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="lg:hidden py-6 border-t border-[var(--border)]">
            <div className="flex flex-col gap-4">
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
          </nav>
        )}
      </div>
    </header>
  );
}