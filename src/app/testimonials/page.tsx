"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { ArrowLeft, Check } from "lucide-react";
import { testimonials } from "../testimonials";

export default function Home() {
  const router = useRouter();

  return (
    <>
      <div className="w-full min-h-screen bg-bg-black overflow-x-hidden bg-top-splash">
        <div className="flex-col items-center justify-center">
          <div className="flex flex-col items-center justify-center">
            <p className="text-3xl lg:text-5xl pt-15 font-semibold text-gray-300">
              Testimonails
            </p>
            <p className="font-regular text-sm pt-3 text-center text-text-primary">
              Clients Opinions about me and my work.
            </p>
          </div>
          <div
            onClick={() => router.push("/")}
            className="flex flex-row gap-2 items-center justify-center text-black bg-text-secondary w-50 mt-8 mx-auto  px-3 py-2 font-medium rounded-lg "
          >
            <ArrowLeft />
            <p>Back to Home</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 l:grid-cols-3 pt-10 md:mx-20 l:mx-30 xl:w-[60%] xl:mx-auto">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="flex flex-col p-5 mx-2 my-2 bg-bg-black rounded-2xl border-2 border-border-bg hover:scale-105 transition-transform"
              >
                <div className="mt-auto flex flex-row justify-between items-center">
                  <div className="flex-col">
                    <p className="text-white font-medium">{testimonial.name}</p>
                    <p className="text-text-primary text-sm">
                      {testimonial.role}
                    </p>
                  </div>

                  <div className="flex">
                    {Array.from({ length: testimonial.star }).map((_, i) => (
                      <svg
                        key={i}
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="w-5 h-5 text-text-secondary"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 00.95.69h4.178c.969 0 1.371 1.24.588 1.81l-3.385 2.46a1 1 0 00-.364 1.118l1.287 3.966c.3.922-.755 1.688-1.54 1.118l-3.385-2.46a1 1 0 00-1.176 0l-3.385 2.46c-.785.57-1.84-.196-1.54-1.118l1.287-3.966a1 1 0 00-.364-1.118L2.045 9.394c-.783-.57-.38-1.81.588-1.81h4.178a1 1 0 00.95-.69l1.286-3.967z" />
                      </svg>
                    ))}
                    {Array.from({ length: 5 - testimonial.star }).map(
                      (_, i) => (
                        <svg
                          key={i}
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          className="w-5 h-5 text-white"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 00.95.69h4.178c.969 0 1.371 1.24.588 1.81l-3.385 2.46a1 1 0 00-.364 1.118l1.287 3.966c.3.922-.755 1.688-1.54 1.118l-3.385-2.46a1 1 0 00-1.176 0l-3.385 2.46c-.785.57-1.84-.196-1.54-1.118l1.287-3.966a1 1 0 00-.364-1.118L2.045 9.394c-.783-.57-.38-1.81.588-1.81h4.178a1 1 0 00.95-.69l1.286-3.967z" />
                        </svg>
                      )
                    )}
                  </div>
                </div>

                <p className="text-text-secondary text-sm italic mb-4 pt-2">
                  "{testimonial.feedback}"
                </p>
              </div>
            ))}
          </div>
          <div className="w-[70%] mx-auto pt-10">
                      <p className="text-text-primary font-extralight text-center  ">These Testimonials were NOT writing by me, no I could never, lol. </p>

          </div>
        </div>

      </div>
    </>
  );
}
