import { Star, Award, Users } from "lucide-react@0.487.0";

export function AboutSection() {
  return (
    <section id="about" className="py-16 sm:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center max-w-7xl mx-auto">
          
          {/* Text Content */}
          <div className="space-y-6 sm:space-y-8">
            <div>
              <p className="text-[var(--brand-gold)] uppercase tracking-wider text-xs sm:text-sm mb-3 sm:mb-4">
                Our Story
              </p>
              <h2 
                className="text-3xl sm:text-4xl lg:text-5xl mb-4 sm:mb-6" 
                style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
              >
                Bringing Vietnam's Heart to <span className="text-[var(--brand-gold)] italic">Hawthorne</span>
              </h2>
            </div>

            <div className="space-y-4 text-base sm:text-lg text-[var(--text-muted)] leading-relaxed">
              <p>
                Founded with a passion for authentic Vietnamese cuisine, Viet Iconic has become 
                Hawthorne's premier destination for modern Vietnamese dining. Our recipes have 
                been passed down through generations, each dish crafted with love and respect 
                for tradition.
              </p>
              
              <p>
                We believe in the power of food to bring people together. Every ingredient is 
                carefully selected, every sauce is made from scratch, and every dish is prepared 
                with the same care we'd use for our own families.
              </p>

              <p>
                Whether you're joining us for a quick lunch, a family dinner, or catering your 
                next event, we promise an experience that's both iconic and unforgettable.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 sm:gap-6 pt-6 sm:pt-8 border-t border-[var(--border)]">
              <div className="text-center">
                <div className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 mx-auto mb-2 sm:mb-3 rounded-xl bg-[var(--brand-gold)]/10">
                  <Star className="w-5 h-5 sm:w-6 sm:h-6 text-[var(--brand-gold)]" />
                </div>
                <p className="text-xl sm:text-2xl text-[var(--brand-dark)] mb-1">5</p>
                <p className="text-xs sm:text-sm text-[var(--text-muted)]">Star Average Rating</p>
              </div>
              
              <div className="text-center">
                <div className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 mx-auto mb-2 sm:mb-3 rounded-xl bg-[var(--brand-gold)]/10">
                  <Award className="w-5 h-5 sm:w-6 sm:h-6 text-[var(--brand-gold)]" />
                </div>
                <p className="text-xl sm:text-2xl text-[var(--brand-dark)] mb-1">50+</p>
                <p className="text-xs sm:text-sm text-[var(--text-muted)]">Menu Items</p>
              </div>
              
              <div className="text-center">
                <div className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 mx-auto mb-2 sm:mb-3 rounded-xl bg-[var(--brand-gold)]/10">
                  <Users className="w-5 h-5 sm:w-6 sm:h-6 text-[var(--brand-gold)]" />
                </div>
                <p className="text-xl sm:text-2xl text-[var(--brand-dark)] mb-1">1000+</p>
                <p className="text-xs sm:text-sm text-[var(--text-muted)]">Happy Customers</p>
              </div>
            </div>
          </div>

          {/* Image Placeholder */}
          <div className="relative">
            <div className="aspect-[4/5] rounded-3xl bg-gradient-to-br from-[var(--brand-dark)] to-[var(--brand-gold)]/40 overflow-hidden shadow-2xl">
              <div className="absolute inset-0 flex items-center justify-center p-12">
                <div className="text-center text-white/90 space-y-4">
                  <div className="text-6xl mb-4">🍜</div>
                  <p className="text-xl">
                    [Replace with restaurant interior photo showing warm ambiance, 
                    dining area, or chef preparing authentic Vietnamese dishes]
                  </p>
                  <p className="text-sm text-white/60">
                    Suggested: High-quality image of restaurant space or team
                  </p>
                </div>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-[var(--brand-gold)]/10 rounded-3xl -z-10"></div>
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-[var(--brand-dark)]/5 rounded-2xl -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
}