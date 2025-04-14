'use client';

interface CalendarProps {
  calendarId?: string;
}

export default function Calendar({ calendarId }: CalendarProps) {
  const defaultCalendarId = 'c_1e935bdb15cd343bdb2eeae898b6f73b4f0abec8d6c2011831bbcd76cb5988d1@group.calendar.google.com';
  const finalCalendarId = calendarId || defaultCalendarId;
  
  return (
    <div className="calendar-wrapper aspect-video w-full">
      <iframe
        src={`https://calendar.google.com/calendar/embed?src=${encodeURIComponent(finalCalendarId)}&showTitle=0&showNav=1&showPrint=0&showTabs=1&showCalendars=0&showTz=0`}
        style={{ border: 0 }}
        width="100%"
        height="100%"
        frameBorder="0"
        scrolling="no"
      />
    </div>
  );
}