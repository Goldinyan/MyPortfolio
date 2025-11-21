"use client";
import { ArrowUpRight } from "lucide-react";
import NextLogo from "@/public/assets/next-js.svg";
import { Icon } from "@iconify/react";

export default function TechStack() {
  const items: { text: string; pic: React.ReactNode; link?: string }[] = [
    {
      text: "Next",
      pic: (
        <svg
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-8 h-8 text-text-secondary"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10s-4.477 10-10 10m4-14h-1.35v4H16zM9.346 9.71l6.059 7.828l1.054-.809L9.683 8H8v7.997h1.346z"></path>
        </svg>
      ),
      link: "https://nextjs.org/",
    },
    {
      text: "Tailwind",
      pic: "./assets/tailwindLogo.png",
      link: "https://tailwindcss.com/",
    },
    {
      text: "TypeScript",
      pic: "./assets/shadCN.png",
      link: "https://ui.shadcn.com/",
    },
    {
      text: "Node",
      pic: "./assets/node-logo.png",
      link: "https://nodejs.org/",
    },
    {
      text: "React",
      pic: "",
      link: "",
    },
    {
      text: "Firebase",
      pic: "",
      link: "",
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
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pb-10">
        {items.map((item) => {
          return (
            <div
              key={item.text}
              className="flex group items-center justify-between mx-4 p-2 rounded-xl bg-small-card-bg"
            >
              <button
                onClick={() => {
                  if (item.link) {
                    window.open(item.link, "_blank");
                  }
                }}
                className="w-full flex items-center justify-between"
              >
                <div className="flex items-center">
                  {item.pic}
                  <p className="ml-2 text-white font-lg">{item.text}</p>
                </div>

                <ArrowUpRight className="h-10 w-10 group-hover:scale-110 duration-200 transition-transform text-text-secondary p-1 rounded-xl bg-neutral-900 border-border-bg border-2" />
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}
