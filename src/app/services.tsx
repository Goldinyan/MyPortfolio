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
    <div className="w-full border-2 bg-card-bg border-border-bg rounded-2xl">
      <div className="flex flex-col p-5">
        <p className="text-white text-3xl">Services</p>
        <p className="text-custom-gray-2 text-1 pt-1 ">
          My services are tailored to your needs and budget
        </p>
      </div>

      <div
        className="flex  flex-col gap-4 w-full p-3 "
        style={{
          backgroundColor: "var(--background)",
          borderRadius: "var(--radius)",
        }}
      >
        <div className="fade-mask h-10 w-full">
          <div className="scrolling-container">
            {stuff.map((item, i) => (
              <div
                key={`original-${i}`}
                className="inline-block  bg-small-card-bg font-semibold text-text-secondary text-md  px-4 py-2 rounded-xl whitespace-nowrap"
              >
                {item}
              </div>
            ))}
            {stuff.map((item, i) => (
              <div
                key={`duplicate-${i}`}
                className="inline-block text-text-secondary text-md font-semibold bg-small-card-bg px-4 py-2 rounded-xl whitespace-nowrap"
              >
                {item}
              </div>
            ))}
          </div>
        </div>

        <div className="fade-mask h-10 w-full ">
          <div className="scrolling-container-reverse">
            {stuff.map((item, i) => (
              <div
                key={`reverse-original-${i}`}
                className="inline-block font-semibold text-text-secondary text-md bg-small-card-bg px-4 py-2 rounded-xl whitespace-nowrap"
              >
                {item}
              </div>
            ))}
            {stuff.map((item, i) => (
              <div
                key={`reverse-duplicate-${i}`}
                className="inline-block font-semibold text-text-secondary text-md bg-small-card-bg px-4 py-2 rounded-xl whitespace-nowrap"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
