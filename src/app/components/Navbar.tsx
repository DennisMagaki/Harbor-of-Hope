"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const pathname = usePathname();
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);


  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10); 
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (pathname === "/") return null;

  const navLinks = [
    { label: "Programs", href: "/programs" },
    { label: "Stories", href: "/stories" },
    { label: "Events", href: "/events" },
    { label: "Resources", href: "/resources" },
    { label: "Get Help", href: "/donate", variant: "primary" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 border-b h-16 sm:h-20 md:h-24 w-full font-open-sans transition-all duration-300 ${
        isScrolled
          ? "bg-white/70 backdrop-blur-md border-slate-200 shadow-sm"
          : "bg-transparent border-transparent text-white"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-full flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center group">
          <Image
            src={isScrolled ? "/images/logo.png" : "/images/logo-inverse.png"}
            alt="Harbor of Hope logo"
            width={180}
            height={60}
            priority
            className="h-12 sm:h-14 md:h-16 w-auto object-contain transition-transform duration-200 group-hover:scale-105"
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map(({ label, href, variant }) =>
            variant === "primary" ? (
              <Link
                key={href}
                href={href}
                className="ml-3 inline-block rounded-full px-5 py-2 text-white font-semibold shadow 
                  bg-gradient-to-r from-[#7FE0C8] to-[#0F4C81] 
                  bg-[length:200%_200%] bg-[position:0%_50%] 
                  transition-all duration-500 ease-out 
                  hover:bg-[position:100%_50%] hover:scale-105"
              >
                {label}
              </Link>
            ) : (
              <Link
                key={href}
                href={href}
                className="relative hover:text-[#0F4C81] transition-colors 
                  after:absolute after:left-0 after:bottom-0 
                  after:h-[2px] after:w-0 after:bg-[#0F4C81] 
                  after:transition-all after:duration-300 hover:after:w-full"
              >
                {label}
              </Link>
            )
          )}
        </nav>

        {/* Mobile toggle button */}
        <div className="md:hidden flex-shrink-0 ml-2">
          <button
            aria-label="Open menu"
            onClick={() => setShowMobileMenu(!showMobileMenu)}
            className="p-2 rounded-md border text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#0F4C81]"
          >
            {showMobileMenu ? (
              // Close Icon
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              // Hamburger Icon
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu with scale animation */}
      <div
        className={`fixed top-16 left-0 right-0 bg-white/70 md:hidden origin-top transition-transform duration-300 ease-in-out ${
          showMobileMenu
            ? "scale-y-100 opacity-100"
            : "scale-y-0 opacity-0 pointer-events-none"
        }`}
      >
        <div className="px-4 sm:px-6 py-4 space-y-3">
          {navLinks.map(({ label, href, variant }) =>
            variant === "primary" ? (
              <Link
                key={href}
                href={href}
                className="block w-full text-center px-4 py-3 rounded-full 
                  font-semibold text-white 
                  bg-gradient-to-r from-[#7FE0C8] to-[#0F4C81] 
                  transition-all duration-300 ease-out 
                  hover:brightness-95 active:scale-95"
              >
                {label}
              </Link>
            ) : (
              <Link
                key={href}
                href={href}
                className="block text-center py-2 hover:text-[#0F4C81] transition-colors"
              >
                {label}
              </Link>
            )
          )}
        </div>
      </div>
    </header>
  );
}
