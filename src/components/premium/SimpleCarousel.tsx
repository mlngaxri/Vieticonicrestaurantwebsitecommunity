import { useState, useRef, ReactNode, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react@0.487.0";

interface SimpleCarouselProps {
  children: ReactNode[];
  itemsPerView?: {
    mobile: number;
    tablet: number;
    desktop: number;
  };
}

export function SimpleCarousel({ children, itemsPerView = { mobile: 1, tablet: 2, desktop: 3 } }: SimpleCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsToShow, setItemsToShow] = useState(itemsPerView.desktop);
  const containerRef = useRef<HTMLDivElement>(null);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const [isDragging, setIsDragging] = useState(false);

  const totalItems = children.length;

  // Update items to show based on screen size
  useEffect(() => {
    const updateItemsToShow = () => {
      if (window.innerWidth < 768) {
        setItemsToShow(itemsPerView.mobile);
      } else if (window.innerWidth < 1024) {
        setItemsToShow(itemsPerView.tablet);
      } else {
        setItemsToShow(itemsPerView.desktop);
      }
    };

    updateItemsToShow();
    window.addEventListener("resize", updateItemsToShow);
    return () => window.removeEventListener("resize", updateItemsToShow);
  }, [itemsPerView.mobile, itemsPerView.tablet, itemsPerView.desktop]);

  // Reset index when items to show changes
  useEffect(() => {
    if (currentIndex >= totalItems) {
      setCurrentIndex(0);
    }
  }, [itemsToShow, currentIndex, totalItems]);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? totalItems - itemsToShow : prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prev) => {
      const maxIndex = totalItems - itemsToShow;
      return prev >= maxIndex ? 0 : prev + 1;
    });
  };

  // Touch handlers for swipe functionality
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
    setIsDragging(true);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!isDragging) return;
    
    const minSwipeDistance = 50;
    const distance = touchStart - touchEnd;
    
    if (distance > minSwipeDistance) {
      // Swiped left - go to next
      goToNext();
    } else if (distance < -minSwipeDistance) {
      // Swiped right - go to previous
      goToPrevious();
    }
    
    setIsDragging(false);
  };

  // Calculate how many dots to show - one dot per scrollable position
  const totalDots = totalItems - itemsToShow + 1;

  return (
    <div className="relative w-full">
      {/* Carousel Container */}
      <div 
        className="overflow-hidden" 
        ref={containerRef}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div
          className="flex transition-transform duration-500 ease-out"
          style={{
            transform: `translateX(-${currentIndex * (100 / itemsToShow)}%)`,
          }}
        >
          {children.map((child, index) => (
            <div
              key={index}
              className="flex-shrink-0 px-2"
              style={{
                width: `${100 / itemsToShow}%`,
              }}
            >
              {child}
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Buttons - Hidden on mobile */}
      <button
        onClick={goToPrevious}
        className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 lg:-translate-x-6 w-12 h-12 items-center justify-center rounded-full bg-white border-2 shadow-lg hover:bg-[var(--brand-gold)] hover:text-white transition-all z-10"
        style={{ borderColor: "rgb(179,133,62)", color: "rgb(179,133,62)" }}
        aria-label="Previous"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      <button
        onClick={goToNext}
        className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 lg:translate-x-6 w-12 h-12 items-center justify-center rounded-full bg-white border-2 shadow-lg hover:bg-[var(--brand-gold)] hover:text-white transition-all z-10"
        style={{ borderColor: "rgb(179,133,62)", color: "rgb(179,133,62)" }}
        aria-label="Next"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Dots Indicator - Visible on mobile */}
      <div className="flex justify-center gap-2 mt-8">
        {Array.from({ length: totalDots }).map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className="w-2 h-2 rounded-full transition-all"
            style={{
              backgroundColor: currentIndex === index ? "rgb(179,133,62)" : "rgba(179,133,62,0.3)",
              width: currentIndex === index ? "24px" : "8px",
            }}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}