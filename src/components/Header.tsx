import { Menu, X } from "lucide-react";
import { useState } from "react";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-[#8FA573] shadow-md z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <h1 className="text-[#E8A94B]">Viet Iconic</h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection("home")}
              className="text-[#1E3A3A] hover:text-[#E8A94B] transition-colors"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="text-[#1E3A3A] hover:text-[#E8A94B] transition-colors"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("menu")}
              className="text-[#1E3A3A] hover:text-[#E8A94B] transition-colors"
            >
              Menu
            </button>
            <button
              onClick={() => scrollToSection("gallery")}
              className="text-[#1E3A3A] hover:text-[#E8A94B] transition-colors"
            >
              Gallery
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-[#1E3A3A] hover:text-[#E8A94B] transition-colors"
            >
              Contact
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-[#1E3A3A]" />
            ) : (
              <Menu className="w-6 h-6 text-[#1E3A3A]" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 border-t border-[#1E3A3A]/20">
            <div className="flex flex-col gap-4">
              <button
                onClick={() => scrollToSection("home")}
                className="text-[#1E3A3A] hover:text-[#E8A94B] transition-colors text-left"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="text-[#1E3A3A] hover:text-[#E8A94B] transition-colors text-left"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("menu")}
                className="text-[#1E3A3A] hover:text-[#E8A94B] transition-colors text-left"
              >
                Menu
              </button>
              <button
                onClick={() => scrollToSection("gallery")}
                className="text-[#1E3A3A] hover:text-[#E8A94B] transition-colors text-left"
              >
                Gallery
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-[#1E3A3A] hover:text-[#E8A94B] transition-colors text-left"
              >
                Contact
              </button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}