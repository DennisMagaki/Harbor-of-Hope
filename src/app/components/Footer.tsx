"use client";

import Link from "next/link";
import { Facebook, Twitter, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-slate-900 to-slate-950 text-white font-open-sans mt-20">
      {/* Top Section */}
      <div className="max-w-7xl mx-auto px-6 py-16 grid gap-12 md:grid-cols-4 text-center md:text-left">
        
        {/* Brand / About */}
        <div>
          <h5 className="font-bold text-2xl tracking-tight">Harbor of Hope</h5>
          <p className="text-sm text-slate-300 mt-4 leading-relaxed max-w-xs mx-auto md:mx-0">
            Providing compassionate care and practical tools for lasting recovery. 
            Join us in making a difference.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h6 className="font-semibold text-lg mb-4 text-[#7FE0C8]">Quick Links</h6>
          <ul className="space-y-2 text-sm text-slate-300">
            {[
              { label: "Programs", href: "/programs" },
              { label: "Resources", href: "/resources" },
              { label: "Events", href: "/events" },
              { label: "Contact", href: "/contact" },
            ].map(({ label, href }) => (
              <li key={href}>
                <Link
                  href={href}
                  className="hover:text-white transition-colors duration-200 relative"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact & Social */}
        <div>
          <h6 className="font-semibold text-lg mb-4 text-[#7FE0C8]">Contact</h6>
          <p className="text-sm text-slate-300">Hotline: +254 748 960-028</p>
          <p className="text-sm text-slate-300 mt-1">Email: support@harborofhope.org</p>

          <div className="mt-6 flex justify-center md:justify-start gap-4">
            {[
              { Icon: Facebook, href: "#" },
              { Icon: Twitter, href: "#" },
              { Icon: Instagram, href: "#" },
            ].map(({ Icon, href }, i) => (
              <Link
                key={i}
                href={href}
                aria-label="Social Link"
                className="p-2 rounded-full bg-slate-800 hover:bg-[#0F4C81] transition-all transform hover:scale-110"
              >
                <Icon className="w-5 h-5" />
              </Link>
            ))}
          </div>
        </div>

        {/* Newsletter */}
        <div>
          <h6 className="font-semibold text-lg mb-4 text-[#7FE0C8]">Newsletter</h6>
          <p className="text-sm text-slate-300">
            Stay up to date with our latest news and programs.
          </p>
          <form className="mt-5 flex items-center bg-white/10 rounded-lg overflow-hidden max-w-sm mx-auto md:mx-0">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-grow px-4 py-2 text-slate-300 focus:outline-none text-sm"
              required
            />
            <button
              type="submit"
              className="bg-gradient-to-r from-[#7FE0C8] to-[#0F4C81] px-2 py-2 text-sm font-semibold text-white hover:brightness-95 transition"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between text-xs sm:text-sm text-slate-400 gap-4">
          <p>© {new Date().getFullYear()} Harbor of Hope. All rights reserved.</p>

          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-white transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
