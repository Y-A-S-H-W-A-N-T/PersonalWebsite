const MONTHS = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];

/** "2023-06" -> "Jun 2023" */
export function formatMonthYear(date: string): string {
  const [year, month] = date.split("-").map(Number);
  return `${MONTHS[month - 1]} ${year}`;
}

/** Returns "Jun 2023 - Present" or "Jun 2023 - Dec 2024" */
export function formatRange(start: string, end?: string): string {
  return `${formatMonthYear(start)} - ${end ? formatMonthYear(end) : "Present"}`;
}

/** Total months between two "YYYY-MM" dates (end defaults to now) */
export function monthsBetween(start: string, end?: string): number {
  const [sy, sm] = start.split("-").map(Number);
  let ey: number, em: number;
  if (end) {
    [ey, em] = end.split("-").map(Number);
  } else {
    const now = new Date();
    ey = now.getFullYear();
    em = now.getMonth() + 1;
  }
  return Math.max(1, (ey - sy) * 12 + (em - sm) + 1);
}

/** 20 -> "1 yr 8 mos", 5 -> "5 mos", 12 -> "1 yr" */
export function formatDuration(totalMonths: number): string {
  const years = Math.floor(totalMonths / 12);
  const months = totalMonths % 12;
  const parts: string[] = [];
  if (years) parts.push(`${years} yr${years > 1 ? "s" : ""}`);
  if (months) parts.push(`${months} mo${months > 1 ? "s" : ""}`);
  return parts.join(" ") || "1 mo";
}

/** Convenience: duration string between two dates */
export function getDuration(start: string, end?: string): string {
  return formatDuration(monthsBetween(start, end));
}