import { MapPin, Clock, Phone, Mail, Navigation } from "lucide-react@0.487.0";

export function LocationHours() {
  return (
    <section id="contact" className="py-24 bg-[var(--bg-cream)]">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl mb-6" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
            Visit Us
          </h2>
          <p className="text-lg text-[var(--text-muted)] max-w-2xl mx-auto">
            We'd love to serve you at our Hawthorne location. 
            Drop by for dine-in or call ahead for takeaway.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Google Maps Embed */}
            <div className="relative order-2 lg:order-1">
              <div className="aspect-video rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl border border-[var(--brand-gold)]/20">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3540.2926758289!2d153.05710677615744!3d-27.466906876319775!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b915900411b71ef%3A0xe19af36a5316e6d0!2sViet%20Iconic!5e0!3m2!1sen!2sau!4v1733257600000!5m2!1sen!2sau"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Viet Iconic Location"
                />
              </div>

              <a
                href="https://www.google.com/maps/dir/?api=1&destination=-27.4669068,153.0592957"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center justify-center w-full sm:w-auto gap-2 bg-[var(--brand-gold)] hover:bg-[var(--brand-gold)]/90 text-white px-6 py-3 rounded-xl font-semibold shadow-lg transition-all duration-300 hover:scale-105"
              >
                <Navigation className="w-5 h-5" />
                <span>Get Directions</span>
              </a>
            </div>

            {/* Contact Info & Hours */}
            <div className="space-y-6 lg:space-y-8 order-1 lg:order-2">
              {/* Hours */}
              <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg">
                <div className="relative mb-6">
                  {/* Icon positioned to the right on mobile */}
                  <div className="absolute right-0 top-0 w-12 h-12 sm:w-14 sm:h-14 bg-[var(--brand-gold)]/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 sm:w-7 sm:h-7 text-[var(--brand-gold)]" />
                  </div>
                  
                  {/* Content flows with icon on the side */}
                  <div className="pr-16 sm:pr-20">
                    <h3 className="text-xl sm:text-2xl font-semibold text-[var(--brand-dark)] mb-4">
                      Opening Hours
                    </h3>
                  </div>
                  
                  {/* Hours list - flows below heading, can extend under icon */}
                  <div className="space-y-2 sm:space-y-3 text-sm sm:text-base text-[var(--text-muted)]">
                    <div className="flex flex-col sm:flex-row sm:justify-between gap-1 sm:gap-2">
                      <span className="flex-shrink-0">Monday – Thursday</span>
                      <span className="font-semibold text-[var(--brand-dark)]">11:00 AM – 8:00 PM</span>
                    </div>
                    <div className="flex flex-col sm:flex-row sm:justify-between gap-1 sm:gap-2">
                      <span className="flex-shrink-0">Friday – Saturday</span>
                      <span className="font-semibold text-[var(--brand-dark)]">11:00 AM – 9:00 PM</span>
                    </div>
                    <div className="flex flex-col sm:flex-row sm:justify-between gap-1 sm:gap-2">
                      <span className="flex-shrink-0">Sunday</span>
                      <span className="font-semibold text-[var(--brand-dark)]">12:00 PM – 8:00 PM</span>
                    </div>
                  </div>
                  
                  <div className="mt-6 pt-6 border-t border-[var(--border)]">
                    <p className="text-xs sm:text-sm text-[var(--brand-gold)] font-semibold">
                      ⏰ Open Today: 10:00 AM – 8:00 PM
                    </p>
                    <p className="text-xs text-[var(--text-muted)] mt-2">
                      * Hours may vary on public holidays. Call to confirm.
                    </p>
                  </div>
                </div>
              </div>

              {/* Contact Details */}
              <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 bg-[var(--accent-olive)]/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 sm:w-7 sm:h-7 text-[var(--accent-olive)]" />
                  </div>
                  <div className="min-w-0">
                    <h4 className="font-semibold text-[var(--brand-dark)] mb-2 text-sm sm:text-base">Address</h4>
                    <p className="text-sm sm:text-base text-[var(--text-muted)]">
                      134 Hawthorne Road<br />
                      Hawthorne QLD 4171<br />
                      Australia
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 bg-[var(--accent-olive)]/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 sm:w-7 sm:h-7 text-[var(--accent-olive)]" />
                  </div>
                  <div className="min-w-0">
                    <h4 className="font-semibold text-[var(--brand-dark)] mb-2 text-sm sm:text-base">Phone</h4>
                    <a 
                      href="tel:0466634567" 
                      className="text-sm sm:text-base text-[var(--text-muted)] hover:text-[var(--brand-gold)] transition-colors"
                    >
                      0466 634 567
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 bg-[var(--accent-olive)]/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 sm:w-7 sm:h-7 text-[var(--accent-olive)]" />
                  </div>
                  <div className="min-w-0">
                    <h4 className="font-semibold text-[var(--brand-dark)] mb-2 text-sm sm:text-base">Email</h4>
                    <a 
                      href="mailto:Vieticonic2025@gmail.com" 
                      className="text-sm sm:text-base text-[var(--text-muted)] hover:text-[var(--brand-gold)] transition-colors break-all"
                    >
                      Vieticonic2025@gmail.com
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}