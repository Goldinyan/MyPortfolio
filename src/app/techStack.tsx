"use client";

import { ArrowUpRight } from "lucide-react";

export default function TechStack() {
  const items: { text: string; pic: string; link?: string }[] = [
    { text: "Next", pic: "next-js.svg", link: "https://nextjs.org/" },
    {
      text: "Tailwind",
      pic: "./assets/tailwindLogo.png",
      link: "https://tailwindcss.com/",
    },
    {
      text: "ShadCN/UI",
      pic: "./assets/shadCN.png",
      link: "https://ui.shadcn.com/",
    },
    {
      text: "Flowbite",
      pic: "./assets/flowbite-logo.png",
      link: "https://flowbite.com/",
    },
    {
      text: "Daisy",
      pic: "./assets/daisyUI.png",
      link: "https://daisyui.com/",
    },
    {
      text: "Node",
      pic: "./assets/node-logo.png",
      link: "https://nodejs.org/",
    },
  ];
  return (
    <div className="w-full  border-2  rounded-2xl bg-card-bg border-border-bg  ">
      <div className="flex flex-col p-5">
        <p className="text-white text-3xl">My Tech Stack</p>
        <p className="text-custom-gray-2 text-1 pt-1 ">
          Here are some of the technologies I work with:
        </p>
      </div>
      <div className="flex flex-col gap-4 pb-10">
        {items.map((item) => {
          return (
            <div key={item.text} className="flex items-center justify-between mx-4 p-2 rounded-xl bg-small-card-bg">
              <button
                onClick={() => {
                  if (item.link) {
                    window.open(item.link, "_blank");
                  }
                }}
                className="w-full flex items-center justify-between"
              >
                <div className="flex items-center">
                  <img
                    src={item.pic}
                    className="w-10 h-10 object-contain p-1 rounded-xl bg-neutral-900 border-border-bg border-2"
                  />

                  <p className="ml-2 text-white font-lg">{item.text}</p>
                </div>
                <ArrowUpRight className="h-10 w-10 hover:scale-110 duration-200 transition-transform text-text-secondary p-1 rounded-xl bg-neutral-900 border-border-bg border-2" />
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}
