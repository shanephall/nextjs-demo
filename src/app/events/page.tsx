'use client';

import Container from "@/app/_components/container";
import Calendar from "@/app/_components/calendar";

export default function Events() {
  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_CALENDAR_API_KEY || '';
  const calendarId = process.env.NEXT_PUBLIC_GOOGLE_CALENDAR_ID || '';

  return (
    <main>
      <Container>
        <div className="py-16">
          <h1 className="text-4xl font-bold mb-8">Community Events</h1>
          <p className="text-lg mb-8">
            Stay up to date with all HCF events and community activities. Click on any event for more details.
          </p>
          <div className="bg-white rounded-lg shadow-lg p-6">
            <Calendar apiKey={apiKey} calendarId={calendarId} />
          </div>
        </div>
      </Container>
    </main>
  );
}