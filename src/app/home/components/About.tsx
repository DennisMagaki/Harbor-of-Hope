"use client";

import Image from "next/image";
import Link from "next/link";

export default function About() {
  return (
    <section id="about" className="max-w-7xl mx-auto px-6 py-12 font-open-sans scroll-mt-16 sm:scroll-mt-20 md:scroll-mt-24">
      {" "}
      <div className="grid md:grid-cols-3 gap-8 items-center">
        {" "}
        <div className="md:col-span-2">
          {" "}
          <h3 className="text-2xl font-montserrat">
            About Harbor of Hope
          </h3>{" "}
          <p className="mt-3 text-slate-600">
            Our mission is to provide hope and practical guidance to individuals
            and families seeking recovery. We blend medical care, therapy,
            skills training and community support into individualized programs
            that meet people where they are.
          </p>{" "}
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {" "}
            <div className="p-4 rounded-lg bg-slate-50">
              {" "}
              <h4 className="font-semibold">Mission</h4>{" "}
              <p className="text-sm text-slate-500 mt-1">
                Compassionate care and sustainable recovery.
              </p>{" "}
            </div>{" "}
            <div className="p-4 rounded-lg bg-slate-50">
              {" "}
              <h4 className="font-semibold">Vision</h4>{" "}
              <p className="text-sm text-slate-500 mt-1">
                A community where people are supported to rebuild meaningful
                lives.
              </p>{" "}
            </div>{" "}
          </div>{" "}
          <div className="text-center md:text-left">
            <p className="mt-7 text-slate-600 text-lg font-medium">
              Interested in working with us?
            </p>
            <Link
              href="/contact"
              className="inline-block mt-4 px-8 py-3 rounded-full font-semibold text-white 
      bg-[#0F4C81] 
      shadow-md hover:shadow-xl hover:scale-105 
      transition-all duration-300 ease-out"
            >
              Join our Community
            </Link>
          </div>
        </div>{" "}
        <aside className="p-4 rounded-lg">
          <Image
            src={"/images/about.jpg"}
            alt="About"
            width={500}
            height={500}
            className="rounded-xl"
          ></Image>
        </aside>{" "}
      </div>{" "}
    </section>
  );
}
