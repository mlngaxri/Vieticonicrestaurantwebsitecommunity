
export type DaySchedule = {
  day: number; // 0 = Sunday, 1 = Monday, etc.
  open: string; // "HH:mm" 24h format
  close: string; // "HH:mm" 24h format
};

export const GENERAL_HOURS: DaySchedule[] = [
  { day: 0, open: "10:00", close: "20:00" }, // Sunday
  { day: 1, open: "11:00", close: "20:00" }, // Monday
  { day: 2, open: "11:00", close: "20:00" }, // Tuesday
  { day: 3, open: "11:00", close: "20:00" }, // Wednesday
  { day: 4, open: "11:00", close: "20:00" }, // Thursday
  { day: 5, open: "10:00", close: "20:00" }, // Friday
  { day: 6, open: "10:00", close: "20:00" }, // Saturday
];

export const BRUNCH_HOURS: DaySchedule[] = [
  { day: 0, open: "10:00", close: "17:00" }, // Sunday
  { day: 1, open: "11:00", close: "17:00" }, // Monday
  { day: 2, open: "11:00", close: "17:00" }, // Tuesday
  { day: 3, open: "11:00", close: "17:00" }, // Wednesday
  { day: 4, open: "11:00", close: "17:00" }, // Thursday
  { day: 5, open: "10:00", close: "17:00" }, // Friday
  { day: 6, open: "10:00", close: "17:00" }, // Saturday
];

export const DINNER_HOURS: DaySchedule[] = [
  { day: 0, open: "17:00", close: "20:00" }, // Sunday
  { day: 1, open: "17:00", close: "20:00" }, // Monday
  { day: 2, open: "17:00", close: "20:00" }, // Tuesday
  { day: 3, open: "17:00", close: "20:00" }, // Wednesday
  { day: 4, open: "17:00", close: "20:00" }, // Thursday
  { day: 5, open: "17:00", close: "20:00" }, // Friday
  { day: 6, open: "17:00", close: "20:00" }, // Saturday
];

export function getStatus(now: Date = new Date()) {
  const day = now.getDay();
  const currentHours = now.getHours() + now.getMinutes() / 60;

  const schedule = GENERAL_HOURS.find((s) => s.day === day);
  if (!schedule) return { status: "Closed", message: "Closed today" };

  const [openH, openM] = schedule.open.split(":").map(Number);
  const [closeH, closeM] = schedule.close.split(":").map(Number);
  const openTime = openH + openM / 60;
  const closeTime = closeH + closeM / 60;

  if (currentHours < openTime) {
    // Before opening
    const diff = openTime - currentHours;
    if (diff <= 1) return { status: "Opening Soon", message: `Opens at ${formatTime(schedule.open)}` };
    return { status: "Closed", message: `Opens at ${formatTime(schedule.open)}` };
  } else if (currentHours >= openTime && currentHours < closeTime) {
    // Open
    const diff = closeTime - currentHours;
    if (diff <= 0.5) return { status: "Closing Soon", message: `Closes at ${formatTime(schedule.close)}` };
    return { status: "Open", message: `Open until ${formatTime(schedule.close)}` };
  } else {
    // Closed
    return { status: "Closed", message: "Closed for the day" };
  }
}

function formatTime(timeStr: string) {
  const [h, m] = timeStr.split(":").map(Number);
  const ampm = h >= 12 ? "pm" : "am";
  const h12 = h % 12 || 12;
  return `${h12}${m > 0 ? `:${m.toString().padStart(2, "0")}` : ""} ${ampm}`;
}
