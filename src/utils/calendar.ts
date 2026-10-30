import { Festival } from '../types';

export function downloadIcsFile(festival: Festival) {
  // Approximate date for calendar event
  const currentYear = new Date().getFullYear();
  const monthStr = festival.solarMonth.toString().padStart(2, '0');
  const startDate = `${currentYear}${monthStr}15T080000Z`;
  const endDate = `${currentYear}${monthStr}16T180000Z`;

  const icsContent = [
    'BEGIN:VCALENDAR',
    'VERSION:2.0',
    'PRODID:-//Ban Do Le Hoi//VN',
    'CALSCALE:GREGORIAN',
    'METHOD:PUBLISH',
    'BEGIN:VEVENT',
    `UID:festival-${festival.id}-${currentYear}@bando-lehoi.vn`,
    `DTSTAMP:${startDate}`,
    `DTSTART:${startDate}`,
    `DTEND:${endDate}`,
    `SUMMARY:${festival.name} - ${festival.province}`,
    `DESCRIPTION:${festival.shortDescription}\\nThời gian: ${festival.lunarDate} (${festival.solarPeriod})\\nĐịa điểm: ${festival.address}`,
    `LOCATION:${festival.address}`,
    'STATUS:CONFIRMED',
    'END:VEVENT',
    'END:VCALENDAR'
  ].join('\r\n');

  const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.setAttribute('download', `${festival.id}-le-hoi.ics`);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}

export function getGoogleCalendarUrl(festival: Festival): string {
  const currentYear = new Date().getFullYear();
  const monthStr = festival.solarMonth.toString().padStart(2, '0');
  const start = `${currentYear}${monthStr}15T080000`;
  const end = `${currentYear}${monthStr}16T180000`;
  const title = encodeURIComponent(festival.name);
  const details = encodeURIComponent(`${festival.shortDescription}\n\nÂm lịch: ${festival.lunarDate}\nDương lịch: ${festival.solarPeriod}\nĐịa điểm: ${festival.address}`);
  const location = encodeURIComponent(festival.address);
  return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&dates=${start}/${end}&details=${details}&location=${location}`;
}
