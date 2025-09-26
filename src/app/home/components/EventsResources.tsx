"use client";

const events = [
  { date: "Oct 12, 2025", title: "Family Healing Workshop" },
  { date: "Nov 05, 2025", title: "Community Awareness Walk" },
  { date: "Dec 20, 2025", title: "Recovery Celebration" },
];

export default function EventsResources() {
  return (
    <section id="events" className="bg-gradient-to-b from-sky-50 to-white py-12 font-open-sans">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-8">
        <div>
          <h3 className="text-2xl font-montserrat">Upcoming Events</h3>
          <ul className="mt-4 space-y-3">
            {events.map((e) => (
              <li key={e.title} className="p-4 bg-white rounded-lg border">
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-sm text-slate-500">{e.date}</p>
                    <p className="font-semibold">{e.title}</p>
                  </div>
                  <a href="/events" className="text-sm">Register →</a>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-2xl font-montserrat">Resources</h3>
          <p className="mt-2 text-slate-600 text-sm">
            Articles, downloadable guides for families, crisis numbers and
            helpful links.
          </p>
          <ul className="mt-4 space-y-3">
            <li className="p-3 bg-white rounded-lg border flex justify-between items-center">
              <div>
                <p className="font-medium">Guide: Supporting a Loved One</p>
                <p className="text-xs text-slate-500">Downloadable PDF for families</p>
              </div>
              <a href="/resources/guide.pdf" className="text-sm">Download</a>
            </li>
            <li className="p-3 bg-white rounded-lg border flex justify-between items-center">
              <div>
                <p className="font-medium">Crisis Hotline List</p>
                <p className="text-xs text-slate-500">Local & national numbers</p>
              </div>
              <a href="/resources" className="text-sm">View</a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
