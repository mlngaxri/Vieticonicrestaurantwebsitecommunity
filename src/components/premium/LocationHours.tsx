import { MapPin, Clock, Phone, Mail, Navigation } from "lucide-react@0.487.0";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import { GENERAL_HOURS, BRUNCH_HOURS, DINNER_HOURS, getStatus } from "./utils/hours";
import { useEffect, useState } from "react";
import { cn } from "../ui/utils";

export function LocationHours() {
  const [status, setStatus] = useState<{ status: string; message: string } | null>(null);
  
  useEffect(() => {
    setStatus(getStatus());
  }, []);

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
                    <h3 className="text-xl sm:text-2xl font-semibold text-[var(--brand-dark)] mb-2">
                      Opening Hours
                    </h3>
                    {status && (
                      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--bg-cream)] border border-[var(--brand-gold)]/30">
                        <span className={cn("w-2 h-2 rounded-full animate-pulse", 
                          status.status === "Open" ? "bg-emerald-500" : 
                          status.status.includes("Soon") ? "bg-amber-500" : "bg-red-500"
                        )} />
                        <span className="text-sm font-medium text-[var(--brand-dark)]">
                          {status.status === "Open" ? "Open Now" : status.status}
                        </span>
                      </div>
                    )}
                  </div>
                  
                  {/* Tabs for different schedules */}
                  <Tabs defaultValue="general" className="mt-6">
                    <TabsList className="grid w-full grid-cols-3 bg-[var(--bg-cream)] p-1 h-auto rounded-lg">
                      <TabsTrigger value="general" className="data-[state=active]:bg-white data-[state=active]:text-[var(--brand-gold)] data-[state=active]:shadow-sm py-2 text-xs sm:text-sm">General</TabsTrigger>
                      <TabsTrigger value="brunch" className="data-[state=active]:bg-white data-[state=active]:text-[var(--brand-gold)] data-[state=active]:shadow-sm py-2 text-xs sm:text-sm">Brunch</TabsTrigger>
                      <TabsTrigger value="dinner" className="data-[state=active]:bg-white data-[state=active]:text-[var(--brand-gold)] data-[state=active]:shadow-sm py-2 text-xs sm:text-sm">Dinner</TabsTrigger>
                    </TabsList>
                    
                    <TabsContent value="general" className="mt-4 animate-in fade-in-50 duration-300">
                      <ScheduleList hours={GENERAL_HOURS} />
                    </TabsContent>
                    <TabsContent value="brunch" className="mt-4 animate-in fade-in-50 duration-300">
                      <ScheduleList hours={BRUNCH_HOURS} />
                    </TabsContent>
                    <TabsContent value="dinner" className="mt-4 animate-in fade-in-50 duration-300">
                      <ScheduleList hours={DINNER_HOURS} />
                    </TabsContent>
                  </Tabs>
                  
                  <div className="mt-6 pt-6 border-t border-[var(--border)]">
                    {status && (
                      <p className="text-xs sm:text-sm text-[var(--brand-gold)] font-semibold">
                        ⏰ {status.message}
                      </p>
                    )}
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

function ScheduleList({ hours }: { hours: any[] }) {
  const today = new Date().getDay();
  const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  
  // Group by identical hours to save space (optional, but clean)
  // Actually user wants "Update this based on the day, automatically"
  // Let's show a concise list: 
  
  // Strategy: Group consecutive days with same hours
  const grouped = hours.reduce((acc: any[], curr) => {
    const last = acc[acc.length - 1];
    const timeStr = `${curr.open} - ${curr.close}`;
    
    if (last && last.timeStr === timeStr && last.endDayIndex === curr.day - 1) {
       last.endDayIndex = curr.day;
       last.days.push(curr.day);
    } else {
       // Handle wrapping (Sun -> Mon) if needed, but simpler to just list or group sequential
       // Since input is sorted by day 0..6, but week usually starts Mon in display or Sun? 
       // Let's just display distinct groups.
       // Actually, the user input has specific ranges.
       acc.push({
         startDayIndex: curr.day,
         endDayIndex: curr.day,
         days: [curr.day],
         timeStr,
         open: curr.open,
         close: curr.close
       });
    }
    return acc;
  }, []);

  return (
    <div className="space-y-2 sm:space-y-3 text-sm sm:text-base text-[var(--text-muted)]">
      {grouped.map((group: any, idx: number) => {
         const isTodayIncluded = group.days.includes(today);
         
         let dayLabel = "";
         if (group.days.length === 1) {
           dayLabel = dayNames[group.days[0]];
         } else if (group.days.length === 7) {
           dayLabel = "Every Day";
         } else {
            // Check if consecutive
            // Our grouping logic above only groups consecutive indices.
            // Note: Sunday is 0. If we want Mon-Sun ordering, we might need to sort.
            // The helper arrays are 0-6 (Sun-Sat).
            // Let's just use the first and last day name if > 1
            dayLabel = `${dayNames[group.startDayIndex]} – ${dayNames[group.endDayIndex]}`;
         }

         return (
          <div key={idx} className={cn("flex flex-col sm:flex-row sm:justify-between gap-1 sm:gap-2 p-2 rounded transition-colors", isTodayIncluded ? "bg-[var(--brand-gold)]/10 text-[var(--brand-dark)] font-medium" : "")}>
            <span className="flex-shrink-0">{dayLabel}</span>
            <span className={cn("font-semibold", isTodayIncluded ? "text-[var(--brand-dark)]" : "text-[var(--brand-dark)]")}>
              {formatTime(group.open)} – {formatTime(group.close)}
            </span>
          </div>
         );
      })}
    </div>
  );
}

function formatTime(timeStr: string) {
  const [h, m] = timeStr.split(":").map(Number);
  const ampm = h >= 12 ? "pm" : "am";
  const h12 = h % 12 || 12;
  return `${h12}${m > 0 ? `:${m.toString().padStart(2, "0")}` : ""} ${ampm}`;
}