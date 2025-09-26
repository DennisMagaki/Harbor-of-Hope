"use client";

const programs = [
  { title: "Detox & Recovery", desc: "Medically supervised detox and stabilization", href: "/programs/detox" },
  { title: "Counseling & Therapy", desc: "Individual and group counselling with licensed therapists", href: "/programs/counseling" },
  { title: "Family Support", desc: "Family therapy, education, and support groups", href: "/programs/family-support" },
  { title: "Skills & Reintegration", desc: "Vocational training & life skills for reintegration", href: "/programs/skills" },
];

export default function Programs() {
  return (
    <section id="programs" className="bg-slate-50 py-12 font-open-sans">
      <div className="max-w-7xl mx-auto px-6">
        <h3 className="text-2xl font-montserrat">Programs & Services</h3>
        <p className="text-slate-600 mt-1">
          We provide a continuum of care — from detox to aftercare — to support
          long-term recovery.
        </p>

        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {programs.map((p) => (
            <article key={p.title} className="p-5 bg-white rounded-2xl shadow-sm hover:shadow-md transition">
              <h4 className="font-semibold">{p.title}</h4>
              <p className="text-sm text-slate-500 mt-2">{p.desc}</p>
              <a href={p.href} className="mt-4 inline-block text-sm font-medium">
                Learn more →
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
