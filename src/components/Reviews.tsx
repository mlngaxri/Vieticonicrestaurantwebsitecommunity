import { useState, useEffect } from "react";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const reviews = [
  {
    name: "Sarah Chen",
    rating: 5,
    date: "2 weeks ago",
    text: "Absolutely amazing! The pho was incredibly flavorful and authentic. The broth was rich and aromatic, and the portions were generous. This is hands down the best Vietnamese restaurant in the area.",
    avatar: "SC",
    image: "https://images.unsplash.com/photo-1701480253822-1842236c9a97?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaG8lMjBzb3VwJTIwYm93bHxlbnwxfHx8fDE3NjQ1NTg2Nzd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    name: "Michael Torres",
    rating: 5,
    date: "1 month ago",
    text: "I've been coming here for years and the quality never disappoints. The banh mi is perfect - crispy bread, fresh vegetables, and perfectly seasoned meat. The staff is always friendly and welcoming.",
    avatar: "MT",
    image: "https://images.unsplash.com/photo-1599719455360-ff0be7c4dd06?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYW5oJTIwbWklMjBzYW5kd2ljaHxlbnwxfHx8fDE3NjQ1MDk4MTZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    name: "Emily Nguyen",
    rating: 5,
    date: "3 weeks ago",
    text: "As a Vietnamese person, I can say this place serves authentic food that reminds me of home. The spring rolls are fresh and delicious, and the peanut sauce is perfection. Highly recommend!",
    avatar: "EN",
    image: "https://images.unsplash.com/photo-1594020293008-5f99f60bd4d7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aWV0bmFtZXNlJTIwc3VtbWVyJTIwcm9sbHN8ZW58MXx8fHwxNzY0NTU4Njc3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    name: "James Wilson",
    rating: 4,
    date: "2 months ago",
    text: "Great atmosphere and delicious food. The bun bo hue had just the right amount of spice. Service was quick and the prices are very reasonable. Will definitely be back!",
    avatar: "JW",
    image: "https://images.unsplash.com/photo-1745817078506-bfc70df458b5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aWV0bmFtZXNlJTIwYnVuJTIwYm93bHxlbnwxfHx8fDE3NjQ1NTg2Nzh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    name: "Lisa Park",
    rating: 5,
    date: "1 week ago",
    text: "Best pho in town! The broth is so flavorful and you can tell everything is made fresh. The restaurant is clean and cozy. This has become my go-to spot for Vietnamese food.",
    avatar: "LP",
    image: "https://images.unsplash.com/photo-1471922597728-92f81bfe2445?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aWV0bmFtZXNlJTIwY29mZmVlfGVufDF8fHx8MTc2NDU1NTMzMnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    name: "David Rodriguez",
    rating: 5,
    date: "3 weeks ago",
    text: "Incredible experience! Every dish we tried was delicious. The com tam was perfectly cooked and the portions were huge. Can't wait to come back and try more items on the menu.",
    avatar: "DR",
    image: "https://images.unsplash.com/photo-1763703544688-2ac7839b0659?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aWV0bmFtZXNlJTIwZnJpZWQlMjByaWNlfGVufDF8fHx8MTc2NDU1MTM3M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
];

export function Reviews() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slidesToShow, setSlidesToShow] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setSlidesToShow(1);
      } else if (window.innerWidth < 1024) {
        setSlidesToShow(2);
      } else {
        setSlidesToShow(3);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % reviews.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % reviews.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  const getVisibleReviews = () => {
    const visible = [];
    for (let i = 0; i < slidesToShow; i++) {
      visible.push(reviews[(currentIndex + i) % reviews.length]);
    }
    return visible;
  };

  return (
    <section className="py-20 bg-[#A5B88A]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-[#E8A94B] mb-4">What Our Customers Say</h2>
          <p className="text-[#1E3A3A] max-w-2xl mx-auto">
            Don't just take our word for it - hear from our satisfied customers.
          </p>
        </div>

        <div className="max-w-7xl mx-auto relative">
          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 lg:-translate-x-12 z-10 w-12 h-12 bg-white shadow-lg rounded-full flex items-center justify-center hover:bg-[#E8A94B] hover:text-white transition-colors"
            aria-label="Previous review"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 lg:translate-x-12 z-10 w-12 h-12 bg-white shadow-lg rounded-full flex items-center justify-center hover:bg-[#E8A94B] hover:text-white transition-colors"
            aria-label="Next review"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Reviews Grid */}
          <div className="overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {getVisibleReviews().map((review, idx) => (
                <div
                  key={`${review.name}-${idx}`}
                  className="bg-white rounded-lg p-6 transition-all duration-500 shadow-md"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-[#8FA573] rounded-full flex items-center justify-center text-white flex-shrink-0">
                      {review.avatar}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="truncate text-[#1E3A3A]">{review.name}</h4>
                      <p className="text-[#1E3A3A]/60">{review.date}</p>
                    </div>
                  </div>

                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${
                          i < review.rating
                            ? "fill-[#E8A94B] text-[#E8A94B]"
                            : "fill-neutral-300 text-neutral-300"
                        }`}
                      />
                    ))}
                  </div>

                  <div className="relative">
                    <Quote className="absolute -top-2 -left-2 w-8 h-8 text-[#8FA573]/30" />
                    <p className="text-[#1E3A3A]/80 pl-6">{review.text}</p>
                  </div>

                  <div className="mt-4">
                    <ImageWithFallback
                      src={review.image}
                      alt={`Review image for ${review.name}`}
                      className="w-full h-40 object-cover rounded-lg"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {reviews.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`w-2 h-2 rounded-full transition-all ${
                  idx === currentIndex
                    ? "bg-[#E8A94B] w-8"
                    : "bg-white/60 hover:bg-white"
                }`}
                aria-label={`Go to review ${idx + 1}`}
              />
            ))}
          </div>
        </div>

        <div className="text-center mt-12">
          <a
            href="https://www.google.com/search?q=Viet"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-[#E8A94B] hover:text-[#D69A3C] transition-colors"
          >
            <span>Read more reviews on Google</span>
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M7 10l5 5 5-5z" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}