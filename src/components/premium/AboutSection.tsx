import { Star, Calendar } from "lucide-react@0.487.0";

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
            <div className="grid grid-cols-2 gap-4 sm:gap-6 pt-6 sm:pt-8 border-t border-[var(--border)]">
              <div className="text-center">
                <div className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 mx-auto mb-2 sm:mb-3 rounded-xl bg-[var(--brand-gold)]/10">
                  <Star className="w-5 h-5 sm:w-6 sm:h-6 text-[var(--brand-gold)]" />
                </div>
                <p className="text-xl sm:text-2xl text-[var(--brand-dark)] mb-1">5</p>
                <p className="text-xs sm:text-sm text-[var(--text-muted)]">Star Average Rating</p>
              </div>

              <div className="text-center">
                <div className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 mx-auto mb-2 sm:mb-3 rounded-xl bg-[var(--brand-gold)]/10">
                  <Calendar className="w-5 h-5 sm:w-6 sm:h-6 text-[var(--brand-gold)]" />
                </div>
                <p className="text-xl sm:text-2xl text-[var(--brand-dark)] mb-1">2025</p>
                <p className="text-xs sm:text-sm text-[var(--text-muted)]">Established</p>
              </div>
            </div>
          </div>

          {/* Image Placeholder */}
          <div className="relative">
            <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1762015669851-4098e655ec87?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aWV0bmFtZXNlJTIwcmVzdGF1cmFudCUyMGludGVyaW9yJTIwbW9kZXJufGVufDF8fHx8MTc2NDkwODQ1N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" 
                alt="Viet Iconic Interior" 
                className="w-full h-full object-cover"
              />
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