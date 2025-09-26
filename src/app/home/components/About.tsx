"use client";

import Image from "next/image";

export default function About() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-12 font-open-sans">
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
        </div>{" "}
        <aside className="p-4 rounded-lg">
            <Image src={"/images/about.jpg"} alt="About" width={500} height={500} className="rounded-xl"></Image>
        </aside>{" "}
      </div>{" "}
    </section>
  );
}
