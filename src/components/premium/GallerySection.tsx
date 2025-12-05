import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react@0.487.0";

const galleryItems = [
  { alt: "Authentic Vietnamese Pho" },
  { alt: "Fresh Banh Mi Sandwich" },
  { alt: "Fresh Spring Rolls" },
  { alt: "Restaurant Interior" },
  { alt: "Vietnamese Iced Coffee" },
  { alt: "Bun Bowl" },
];

export function GallerySection() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 320;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="gallery" className="py-24 bg-[var(--bg)] overflow-hidden">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl mb-6" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
            Gallery
          </h2>
          <p className="text-lg text-[var(--text-muted)] max-w-2xl mx-auto">
            A visual journey through our dishes and dining experience.
          </p>
        </div>

        <div className="relative max-w-7xl mx-auto">
          {/* Scroll Buttons - Hidden on mobile */}
          <button
            onClick={() => scroll('left')}
            className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 lg:-translate-x-6 z-10 w-12 h-12 bg-white shadow-xl rounded-full items-center justify-center hover:bg-[var(--brand-gold)] hover:text-white transition-all duration-300"
            aria-label="Scroll left"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={() => scroll('right')}
            className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 lg:translate-x-6 z-10 w-12 h-12 bg-white shadow-xl rounded-full items-center justify-center hover:bg-[var(--brand-gold)] hover:text-white transition-all duration-300"
            aria-label="Scroll right"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Horizontal Scrolling Gallery */}
          <div
            ref={scrollRef}
            className="flex gap-4 sm:gap-6 overflow-x-auto scrollbar-hide scroll-smooth pb-8 px-4 sm:px-0 -mx-4 sm:mx-0"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {galleryItems.map((item, idx) => (
              <div
                key={idx}
                className="flex-shrink-0 w-64 sm:w-72 md:w-80 group"
              >
                <div className="relative overflow-hidden rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 aspect-[3/4] bg-white border border-[var(--border)] flex flex-col items-center justify-center p-6 sm:p-8 text-center">
                  <div className="w-16 h-16 mb-4 rounded-full bg-[var(--bg-cream)] flex items-center justify-center text-2xl">
                    📷
                  </div>
                  <h4 className="font-serif text-base sm:text-lg text-[var(--brand-dark)] mb-2">{item.alt}</h4>
                  <p className="text-xs sm:text-sm text-[var(--text-muted)] opacity-60">Image coming soon</p>
                  
                  {/* Decorative corner */}
                  <div className="absolute top-0 right-0 w-16 h-16 bg-[var(--brand-gold)]/10 rounded-bl-full -mr-8 -mt-8"></div>
                  <div className="absolute bottom-0 left-0 w-16 h-16 bg-[var(--brand-dark)]/5 rounded-tr-full -ml-8 -mb-8"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
}