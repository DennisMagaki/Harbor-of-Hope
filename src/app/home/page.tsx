"use client";

import Hero from "./components/Hero";
import About from "./components/About";
import Programs from "./components/Programs";
import Stories from "./components/Stories";
import EventsResources from "./components/EventsResources";
import CTA from "./components/CTA";
import Contact from "./components/Contact";

export default function HarborOfHopeHome() {
  return (
      <main>
        <Hero />
        <About />
        <Programs />
        <Stories />
        <EventsResources />
        <CTA />
        <Contact />
      </main>
  );
}
