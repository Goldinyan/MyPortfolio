"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { ArrowLeft, Check } from "lucide-react";
import { testimonials } from "../testimonials";

export default function Home() {
  return (
    <>
      <div className="w-full min-h-screen bg-bg-black overflow-x-hidden bg-top-splash">
        
        {testimonials.map((test) => (
          <div key={test.name}></div>
        ))}
      </div>
    </>
  );
}
