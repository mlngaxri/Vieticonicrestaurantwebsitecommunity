import { MapPin, Clock, Phone } from "lucide-react@0.487.0";

export function QuickInfoStrip() {
  return (
    <section className="py-6 bg-[var(--brand-dark)] text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {/* Address */}
          <div className="flex items-center gap-3">
            <MapPin className="w-5 h-5 text-[var(--brand-gold)] flex-shrink-0" />
            <div className="min-w-0">
              <p className="text-xs sm:text-sm text-white/70">Location</p>
              <p className="font-medium text-sm sm:text-base truncate">134 Hawthorne Road</p>
            </div>
          </div>

          {/* Hours */}
          <div className="flex items-center gap-3">
            <Clock className="w-5 h-5 text-[var(--brand-gold)] flex-shrink-0" />
            <div className="min-w-0">
              <p className="text-xs sm:text-sm text-white/70">Today</p>
              <p className="font-medium text-sm sm:text-base">Open · Closes 8pm</p>
            </div>
          </div>

          {/* Phone */}
          <div className="flex items-center gap-3">
            <Phone className="w-5 h-5 text-[var(--brand-gold)] flex-shrink-0" />
            <div className="min-w-0">
              <p className="text-xs sm:text-sm text-white/70">Call Us</p>
              <a href="tel:0466634567" className="font-medium text-sm sm:text-base hover:text-[var(--brand-gold)] transition-colors">
                0466 634 567
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}