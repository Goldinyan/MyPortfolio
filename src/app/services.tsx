"use client";
import "./globals.css";

import { useState, useEffect } from "react";

export default function Servies() {
  const stuff = [
    "Hosting Guide",
    "Web Security",
    "Web Development",
    "Website Rework",
    "SEO Optimization",
    "Web Design",
  ];
  return (
    <div className="w-100 h-50 border-2 bg-card-bg border-border-bg rounded-2xl">
      <div className="flex flex-col p-5">
        <p className="text-white text-3xl">Services</p>
        <p className="text-custom-gray-2 text-[12px] ">
          My services are tailored to your needs and budget
        </p>
      </div>

      <div
        className="flex gap-2 w-85 p-3 flex-wrap mr-7.5 ml-7.5 mt-5 mb-5"
        style={{
          backgroundColor: "var(--background)",
          borderRadius: "var(--radius)",
        }}
      >
        <div className="overflow-hidden relative group w-full h-10 scroller-mask">
          <div className="overflow-hidden relative group w-full h-10">
            <div className="flex gap-8 animate-scroll whitespace-nowrap group-hover:[animation-play-state:paused]">
              {stuff.map((item, i) => (
                <span key={i} className="text-sm text-gray-600">
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      <div className="relative overflow-hidden h-12 bg-black group">
  {stuff.map((item, i) => (
    <div
      key={i}
      className="absolute top-0 marquee pause-on-hover whitespace-nowrap fade-mask"
      style={{ animationDelay: `${i * 2}s` }} // optional: versetzter Start
    >
      <div className="inline-block text-white text-lg bg-island-bg mr-10">
        {item}
      </div>
    </div>
  ))}
</div>

    </div>
  );
}
