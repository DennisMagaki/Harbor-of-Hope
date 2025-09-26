"use client";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative h-[100vh] flex items-center">
      <div className="absolute inset-0">
        <Image
          src="/images/home-hero-1.jpg"
          alt="Harbor of Hope Hero"
          fill
          priority
          className="object-cover"
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Text Section */}
        <div className="space-y-6 text-white">
          <h2 className="text-4xl md:text-5xl font-montserrat leading-tight drop-shadow-md">
            <span className="text-[#7FE0C8] font-bold">Harbor of Hope:</span> A safe refuge for recovery and rebuilding lives.
          </h2>
          <p className="text-lg text-slate-200 max-w-xl font-open-sans drop-shadow">
            Harbor of Hope offers compassionate, evidence-based care and a
            supportive community to guide people through recovery,
            reintegration, and a renewed life.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-4 font-open-sans">
            <Link
              href="/contact"
              className="px-7 py-3 rounded-full font-semibold text-white 
               bg-gradient-to-r from-[#0F4C81] to-[#7FE0C8] 
               shadow-md hover:shadow-lg hover:scale-105 
               transition-transform duration-300 ease-out"
            >
              Get Help Now
            </Link>

            <Link
              href="#programs"
              className="px-7 py-3 rounded-full font-semibold text-slate-700 
               bg-white/95 border border-slate-200 
               shadow-md hover:bg-white hover:text-black 
               hover:shadow-lg hover:scale-105 
               transition-transform duration-300 ease-out"
            >
              Learn More
            </Link>

            <Link
              href="/donate"
              className="px-7 py-3 rounded-full font-semibold text-black 
               bg-[#C2B280] shadow-md hover:shadow-lg 
               hover:scale-105 transition-transform 
               duration-300 ease-out"
            >
              Support Us
            </Link>
          </div>

          {/* Contact Info */}
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-lg font-open-sans">
            <div className="p-4 bg-white/20 backdrop-blur-sm rounded-xl shadow">
              <p className="text-sm text-slate-200">Hotline</p>
              <p className="font-semibold text-white">+254 748 960-028</p>
            </div>
            <div className="p-4 bg-white/20 backdrop-blur-sm rounded-xl shadow">
              <p className="text-sm text-slate-200">Email</p>
              <p className="font-semibold text-white">
                support@harborofhope.org
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
