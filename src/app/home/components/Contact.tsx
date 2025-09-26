"use client";

export default function Contact() {
  return (
    <section
      id="contact"
      className="max-w-7xl mx-auto px-6 py-12 font-open-sans"
    >
      <div className="grid md:grid-cols-1 gap-8">
        <div>
          <h3 className="text-2xl font-montserrat">Contact & Help</h3>
          <p className="text-slate-600 mt-2">
            If you or a loved one needs immediate help, please call our hotline:{" "}
            <span className="font-semibold">+254 748 960-028</span> or our
            email: {""}
            <span className="font-semibold">support@harborofhope.org</span>
          </p>

          <form className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
            {/* Full Name */}
            <div className="flex flex-col">
              <label className="mb-2 text-sm font-medium text-slate-700">
                Full name
              </label>
              <input
                className="p-3 rounded-xl border border-slate-300 bg-white shadow-sm 
                 focus:border-[#0F4C81] focus:ring-2 focus:ring-[#7FE0C8]/50 
                 transition outline-none"
                placeholder="Your name"
              />
            </div>

            {/* Phone or Email */}
            <div className="flex flex-col">
              <label className="mb-2 text-sm font-medium text-slate-700">
                Phone or Email
              </label>
              <input
                className="p-3 rounded-xl border border-slate-300 bg-white shadow-sm 
                 focus:border-[#0F4C81] focus:ring-2 focus:ring-[#7FE0C8]/50 
                 transition outline-none"
                placeholder="Phone or email"
              />
            </div>

            {/* Message (full width) */}
            <div className="flex flex-col md:col-span-2">
              <label className="mb-2 text-sm font-medium text-slate-700">
                How can we help?
              </label>
              <textarea
                rows={5}
                className="p-3 rounded-xl border border-slate-300 bg-white shadow-sm 
                 focus:border-[#0F4C81] focus:ring-2 focus:ring-[#7FE0C8]/50 
                 transition outline-none resize-none"
                placeholder="A short message"
              />
            </div>

            {/* Action Buttons (full width) */}
            <div className="flex flex-wrap items-center gap-4 md:col-span-2">
              <button
                type="submit"
                className="w-full md:w-auto px-6 py-3 rounded-full font-semibold text-[#0F4C81] 
                 bg-[#7FE0C8] 
                 shadow hover:brightness-95 hover:scale-105 transition"
              >
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
