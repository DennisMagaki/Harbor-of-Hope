"use client";

import Link from "next/link";
import { Facebook, Twitter, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white font-open-sans mt-16">
      {/* Top Section */}
      <div className="max-w-7xl mx-auto px-6 py-10 grid gap-10 md:grid-cols-3 text-center md:text-left">
        
        {/* Brand / About */}
        <div>
          <h5 className="font-semibold text-lg">Harbor of Hope</h5>
          <p className="text-sm text-slate-300 mt-2 leading-relaxed max-w-xs mx-auto md:mx-0">
            Providing compassionate care and practical tools for lasting recovery.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h6 className="font-medium text-lg">Quick Links</h6>
          <ul className="mt-4 space-y-2 text-sm text-slate-300">
            <li>
              <Link href="/programs" className="hover:text-white transition">
                Programs
              </Link>
            </li>
            <li>
              <Link href="/resources" className="hover:text-white transition">
                Resources
              </Link>
            </li>
            <li>
              <Link href="/events" className="hover:text-white transition">
                Events
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-white transition">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        
        <div>
          <h6 className="font-medium text-lg">Contact</h6>
          <p className="text-sm text-slate-300 mt-3">Hotline: +254 748 960-028</p>
          <p className="text-sm text-slate-300">Email: support@harborofhope.org</p>
          
          
          <div className="mt-5 flex justify-center md:justify-start gap-4">
            <Link
              aria-label="Facebook"
              href="#"
              className="p-2 rounded-full bg-slate-800 hover:bg-slate-700 transition"
            >
              <Facebook className="w-4 h-4" />
            </Link>
            <Link
              aria-label="Twitter"
              href="#"
              className="p-2 rounded-full bg-slate-800 hover:bg-slate-700 transition"
            >
              <Twitter className="w-4 h-4" />
            </Link>
            <Link
              aria-label="Instagram"
              href="#"
              className="p-2 rounded-full bg-slate-800 hover:bg-slate-700 transition"
            >
              <Instagram className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col md:flex-row items-center justify-between text-sm text-slate-400 gap-4">
          <p>© {new Date().getFullYear()} Harbor of Hope. All rights reserved.</p>

          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-white transition">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-white transition">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
