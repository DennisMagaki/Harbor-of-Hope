"use client";

export default function CTA() {
  return (
    <section className="py-8">
      <div className="max-w-7xl mx-auto px-6 bg-gradient-to-r from-sky-100 to-emerald-50 p-6 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-4 font-open-sans">
        <div>
          <h4 className="text-xl font-montserrat">Support our work</h4>
          <p className="text-slate-600 mt-1">
            Your gift helps keep services accessible to people who need them
            most.
          </p>
        </div>
        <div className="flex gap-3">
          <a href="/donate" className="px-5 py-3 rounded-full bg-[#0F4C81] text-white font-semibold">
            Donate
          </a>
          <a href="/volunteer" className="px-5 py-3 rounded-full border">Volunteer</a>
        </div>
      </div>
    </section>
  );
}
