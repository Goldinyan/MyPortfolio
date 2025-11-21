"use client";

import {Folder, Users, Star } from "lucide-react";
import { JSX } from "react";

const items: { title: string, des: string, icon: JSX.Element }[] = [
  {
    title: "Projects",
    des: "4",
    icon: <Folder className="h-5 w-5 text-text-secondary mr-2" />,
  },
  {
    title: "Clients",
    des: "1",
    icon: <Users className="h-5 w-5 text-text-secondary mr-2" />,
  },
  {
    title: "Yrs Expertise",
    des: "1",
    icon: <Star className="h-5 w-5 text-text-secondary mr-2" />,
  },
];

export default function LittleStuff() {
  return (
    <div className="w-full  ">
     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
  {items.map((item, index) => (
    <div
      key={index}
      className={`h-28 border-2 rounded-2xl bg-card-bg border-border-bg p-4 
        ${index === 2 ? "sm:col-span-2 lg:col-span-1 " : ""}`}
    >
      <div className="flex flex-col">
        <div className="flex flex-row pb-1 items-center justify-center">
          <p className="font-extrabold text-4xl bg-gradient-to-t from-gray-900 to-white bg-clip-text text-transparent">
            {item.des}
          </p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 100 100"
            className="w-10 h-10 scale-90 text-text-secondary fill-current rounded-2xl"
          >
            <rect x="32" y="10" width="18" height="60" rx="8" />
            <rect x="10" y="32" width="60" height="18" rx="8" />
          </svg>
        </div>
        <div className="flex flex-row bg-island-bg px-2 py-1 rounded-lg mx-auto items-center justify-center">
          {item.icon}
          <p className="text-text-primary font-regular text-sm">{item.title}</p>
        </div>
      </div>
    </div>
  ))}
</div>

    </div>
  );
}
