"use client";

export default function Stories() {
  return (
    <section id="stories" className="max-w-7xl mx-auto px-6 py-12 font-open-sans scroll-mt-16 sm:scroll-mt-20 md:scroll-mt-24">
      <h3 className="text-2xl font-montserrat">Stories of Hope</h3>
      <p className="text-slate-600 mt-1">
        Real people. Real recovery. Hear from members of our community.
      </p>

      <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
        {[1, 2, 3].map((i) => (
          <blockquote key={i} className="p-6 bg-white rounded-2xl shadow-sm">
            <p className="text-slate-700">
              “Harbor of Hope gave me the support and tools I needed to rebuild
              my life — the team listened and walked with me every step.”
            </p>
            <footer className="mt-4 text-sm text-slate-500">— Harbor of Hope Graduate</footer>
          </blockquote>
        ))}
      </div>
    </section>
  );
}
