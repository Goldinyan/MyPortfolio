"use client";

import { Clock, Globe, Languages, Printer } from "lucide-react";

export default function TechStack() {
  const items: { text: string; pic: string }[] = [
    { text: "Next", pic: "next-js.svg" },
    { text: "Tailwind", pic: "./assets/tailwindLogo.png" },
    { text: "ShadCN/UI", pic: "./assets/shadCN.png" },
    { text: "Flowbite", pic: "./assets/flowbite-logo.png" },
    { text: "Daisy", pic: "./assets/daisyUI.png" },
    { text: "Node", pic: "./assets/node-logo.png" },
  ];
  return (
    <div className="w-full  border-2  rounded-2xl bg-card-bg border-border-bg  ">
      <div className="flex flex-col p-5">
        <p className="text-white text-3xl">My Tech Stack</p>
        <p className="text-custom-gray-2 text-1 pt-1 "></p>
      </div>
      <div className="flex flex-col gap-4">
        {items.map((item) => {
          return (
            <div className="flex items-center justify-between mx-4 p-2 rounded-xl bg-small-card-bg">
              <div className="flex items-center">
                <img
                  src={item.pic}
                  className={`w-10 h-10 text-text-secondary bg-island-bg p-1 rounded-xl border-border-bg border-1
                ${item.pic === "./assets/tailwindLogo.png" ? "w-15" : ""}`}
                ></img>
                <p className="ml-2 text-text-secondary">{item.text}</p>
              </div>
              <p>D</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
