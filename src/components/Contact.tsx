import { MapPin, Phone, Clock, Mail } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="py-20 bg-[#A5B88A]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-[#E8A94B] mb-4">Visit Us</h2>
          <p className="text-[#1E3A3A] max-w-2xl mx-auto">
            We'd love to serve you! Stop by our restaurant for an unforgettable Vietnamese dining experience.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 bg-[#E8A94B]/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-[#E8A94B]" />
                </div>
                <div>
                  <h3 className="mb-2 text-[#1E3A3A]">Location</h3>
                  <p className="text-[#1E3A3A]/70">
                    134 Hawthorne Rd<br />
                    Hawthorne QLD 4171
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#E8A94B]/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-[#E8A94B]" />
                </div>
                <div>
                  <h3 className="mb-2 text-[#1E3A3A]">Phone</h3>
                  <p className="text-[#1E3A3A]/70">
                    <a href="tel:0466634567" className="hover:text-[#E8A94B] transition-colors">
                      0466 634 567
                    </a>
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 bg-[#E8A94B]/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-[#E8A94B]" />
                </div>
                <div>
                  <h3 className="mb-2 text-[#1E3A3A]">Hours</h3>
                  <div className="text-[#1E3A3A]/70 space-y-1">
                    <p>Monday - Thursday: 11am - 9pm</p>
                    <p>Friday - Saturday: 11am - 10pm</p>
                    <p>Sunday: 12pm - 8pm</p>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#E8A94B]/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-[#E8A94B]" />
                </div>
                <div>
                  <h3 className="mb-2 text-[#1E3A3A]">Email</h3>
                  <p className="text-[#1E3A3A]/70">
                    <a href="mailto:Vieticonic2025@gmail.com" className="hover:text-[#E8A94B] transition-colors">
                      Vieticonic2025@gmail.com
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-md">
            <h3 className="mb-4 text-[#1E3A3A]">Get Directions</h3>
            <div className="aspect-video bg-neutral-200 rounded-lg flex items-center justify-center">
              <p className="text-neutral-500">Map placeholder</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}