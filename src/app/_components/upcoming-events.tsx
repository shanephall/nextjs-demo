'use client';

export default function UpcomingEvents() {
  const calendarId = 'c_1e935bdb15cd343bdb2eeae898b6f73b4f0abec8d6c2011831bbcd76cb5988d1@group.calendar.google.com';
  
  return (
    <div className="upcoming-events-wrapper" style={{ height: '400px' }}>
      <iframe
        src={`https://calendar.google.com/calendar/embed?src=${encodeURIComponent(calendarId)}&showTitle=0&showNav=0&showPrint=0&showTabs=0&showCalendars=0&showTz=0&mode=AGENDA`}
        style={{ border: 0 }}
        width="100%"
        height="100%"
        frameBorder="0"
        scrolling="no"
      />
    </div>
  );
}