import { Mail, Users, Briefcase, PartyPopper, Sparkles } from "lucide-react@0.487.0";

export function CateringSection() {
  return (
    <section className="py-24 bg-gradient-to-br from-[var(--brand-dark)] to-[var(--accent-moss)] text-white relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[var(--brand-gold)]/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[var(--accent-olive)]/10 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="w-20 h-20 mx-auto rounded-2xl bg-white/10 backdrop-blur-sm flex items-center justify-center">
            <Users className="w-10 h-10 text-[var(--brand-gold)]" />
          </div>

          <h2 className="text-4xl lg:text-5xl text-white" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
            Catering & Events
          </h2>

          <p className="text-lg text-white/90 leading-relaxed max-w-2xl mx-auto">
            Planning a special event, office lunch, or celebration? Let Viet Iconic bring 
            authentic Vietnamese flavors to your gathering. We offer customizable catering 
            packages with our signature dishes, fresh ingredients, and professional service.
          </p>

          <div className="flex flex-col sm:flex-row flex-wrap gap-4 justify-center pt-6">
            <a 
              href="mailto:Vieticonic2025@gmail.com?subject=Catering Inquiry"
              className="inline-flex items-center justify-center gap-2 bg-[var(--brand-gold)] hover:bg-[var(--brand-gold)]/90 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold shadow-xl transition-all duration-300 hover:scale-105 text-sm sm:text-base"
            >
              <Mail className="w-5 h-5" />
              <span>Enquire for Catering</span>
            </a>
            <a 
              href="tel:0466634567"
              className="inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold border-2 border-white/20 transition-all duration-300 hover:scale-105 text-sm sm:text-base"
            >
              <span>Call Us: 0466 634 567</span>
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 pt-12">
            {/* Office Lunches */}
            <div className="group bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 hover:shadow-2xl hover:border-[var(--brand-gold)]/50">
              <div className="w-14 h-14 sm:w-16 sm:h-16 mx-auto mb-5 rounded-xl bg-[var(--brand-gold)]/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Briefcase className="w-7 h-7 sm:w-8 sm:h-8 text-[var(--brand-gold)]" />
              </div>
              <h4 className="text-lg sm:text-xl font-semibold text-white mb-3">Office Lunches</h4>
              <p className="text-sm sm:text-base text-white/80">Perfect for team meetings and corporate events</p>
            </div>
            
            {/* Private Parties */}
            <div className="group bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 hover:shadow-2xl hover:border-[var(--brand-gold)]/50">
              <div className="w-14 h-14 sm:w-16 sm:h-16 mx-auto mb-5 rounded-xl bg-[var(--brand-gold)]/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <PartyPopper className="w-7 h-7 sm:w-8 sm:h-8 text-[var(--brand-gold)]" />
              </div>
              <h4 className="text-lg sm:text-xl font-semibold text-white mb-3">Private Parties</h4>
              <p className="text-sm sm:text-base text-white/80">Celebrate birthdays, anniversaries, and more</p>
            </div>
            
            {/* Special Events */}
            <div className="group bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 hover:shadow-2xl hover:border-[var(--brand-gold)]/50 sm:col-span-2 md:col-span-1">
              <div className="w-14 h-14 sm:w-16 sm:h-16 mx-auto mb-5 rounded-xl bg-[var(--brand-gold)]/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Sparkles className="w-7 h-7 sm:w-8 sm:h-8 text-[var(--brand-gold)]" />
              </div>
              <h4 className="text-lg sm:text-xl font-semibold text-white mb-3">Special Events</h4>
              <p className="text-sm sm:text-base text-white/80">Community gatherings</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}