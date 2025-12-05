
import { useEffect, useState } from "react";
import { Clock, ChevronDown } from "lucide-react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "../ui/popover";
import { getStatus, GENERAL_HOURS, BRUNCH_HOURS, DINNER_HOURS } from "./utils/hours";
import { cn } from "../ui/utils";

export function OperatingStatus() {
  const [status, setStatus] = useState<{ status: string; message: string } | null>(null);
  
  useEffect(() => {
    setStatus(getStatus());
    const interval = setInterval(() => {
      setStatus(getStatus());
    }, 60000); // Update every minute
    return () => clearInterval(interval);
  }, []);

  if (!status) return null;

  const isHighAlert = status.status === "Closing Soon" || status.status === "Opening Soon";
  const isOpen = status.status === "Open";
  
  // Colors
  const dotColor = isOpen 
    ? "bg-emerald-500" 
    : isHighAlert 
      ? "bg-amber-500" 
      : "bg-red-500";

  const textColor = isOpen
    ? "text-emerald-700"
    : isHighAlert
      ? "text-amber-700"
      : "text-red-700";

  const borderColor = isOpen
    ? "border-emerald-200"
    : isHighAlert
      ? "border-amber-200"
      : "border-red-200";
      
  const bgColor = isOpen
    ? "bg-emerald-50"
    : isHighAlert
      ? "bg-amber-50"
      : "bg-red-50";

  return (
    <Popover>
      <PopoverTrigger asChild>
        <button 
          className={cn(
            "flex items-center gap-2 px-3 py-1.5 rounded-full border text-xs font-medium transition-all duration-300 hover:opacity-80",
            bgColor,
            borderColor,
            textColor
          )}
        >
          <span className={cn("w-2 h-2 rounded-full animate-pulse", dotColor)} />
          <span className="hidden sm:inline">{status.message}</span>
          <span className="sm:hidden">{status.status}</span>
          <ChevronDown className="w-3 h-3 opacity-50" />
        </button>
      </PopoverTrigger>
      <PopoverContent className="w-80 p-0 bg-white border border-[var(--brand-gold)]/20 shadow-xl rounded-xl overflow-hidden" align="end">
        <div className="bg-[var(--bg-cream)] p-4 border-b border-[var(--border)]">
          <div className="flex items-center gap-2 mb-1">
            <Clock className="w-4 h-4 text-[var(--brand-gold)]" />
            <h4 className="font-semibold text-[var(--brand-dark)]">Operating Hours</h4>
          </div>
          <p className="text-sm text-[var(--text-muted)]">Current status: <span className={cn("font-medium", textColor)}>{status.message}</span></p>
        </div>
        
        <div className="p-4 space-y-4 max-h-[60vh] overflow-y-auto">
          <div>
            <h5 className="text-xs font-bold text-[var(--brand-gold)] uppercase tracking-wider mb-2">General Hours</h5>
            <ScheduleList hours={GENERAL_HOURS} />
          </div>
          
          <div className="pt-4 border-t border-dashed border-[var(--border)]">
            <h5 className="text-xs font-bold text-[var(--brand-gold)] uppercase tracking-wider mb-2">Brunch</h5>
            <ScheduleList hours={BRUNCH_HOURS} />
          </div>

          <div className="pt-4 border-t border-dashed border-[var(--border)]">
            <h5 className="text-xs font-bold text-[var(--brand-gold)] uppercase tracking-wider mb-2">Dinner</h5>
            <ScheduleList hours={DINNER_HOURS} />
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
}

function ScheduleList({ hours }: { hours: any[] }) {
  const today = new Date().getDay();
  
  // Group days with same hours
  const grouped = hours.reduce((acc: any[], curr) => {
    const last = acc[acc.length - 1];
    const timeStr = `${curr.open} - ${curr.close}`;
    if (last && last.timeStr === timeStr && last.endDay === curr.day - 1) {
      last.endDay = curr.day;
      last.days.push(curr.day);
    } else {
      acc.push({ 
        startDay: curr.day, 
        endDay: curr.day, 
        days: [curr.day],
        timeStr, 
        open: curr.open, 
        close: curr.close 
      });
    }
    return acc;
  }, []);

  const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  return (
    <ul className="space-y-1 text-sm">
      {hours.map((h) => {
         const isToday = h.day === today;
         return (
           <li key={h.day} className={cn("flex justify-between py-0.5", isToday ? "font-bold text-[var(--brand-dark)] bg-[var(--brand-gold)]/10 -mx-2 px-2 rounded" : "text-[var(--text-muted)]")}>
             <span>{dayNames[h.day]}</span>
             <span>{formatTime(h.open)} – {formatTime(h.close)}</span>
           </li>
         )
      })}
    </ul>
  );
}

function formatTime(timeStr: string) {
  const [h, m] = timeStr.split(":").map(Number);
  const ampm = h >= 12 ? "pm" : "am";
  const h12 = h % 12 || 12;
  return `${h12}${m > 0 ? `:${m.toString().padStart(2, "0")}` : ""} ${ampm}`;
}
