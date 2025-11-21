"use client";
import { ArrowUpRight } from "lucide-react";

export default function OtherTechStack() {
  const items: { text: string; pic: React.ReactNode; link?: string }[] = [
    {
      text: "Swift",
      pic: (
       <img
          width="40"
          height="40"
          src="./swift.png"
          alt="react"
        />
      ),
      link: "https://nextjs.org/",
    },
    {
        text: "Java",
        pic: (
       <img
          width="40"
          height="40"
          src="./java.png"
          alt="react"
        />
      ),
      link: "https://nextjs.org/",
    },
     {
        text: "C#",
        pic: (
       <img
          width="40"
          height="40"
          src="./csharp.png"
          alt="react"
        />
      ),
      link: "https://nextjs.org/",
    },
     {
        text: "Go",
        pic: (
        <img
          width="40"
          height="40"
          src="./go.png"
          alt="react"
        />
      ),
      link: "https://nextjs.org/",
    }
  ];
  return (
    <div className="w-full  border-2  rounded-2xl bg-card-bg border-border-bg  ">
      <div className="flex flex-col p-5">
        <p className="text-white text-3xl">Beyond the Web</p>
        <p className="text-custom-gray-2 text-1 pt-1 ">
          Technologies I explore outside the web stack


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

                <ArrowUpRight className="h-10 w-10 group-hover:scale-125 duration-200 transition-transform text-text-secondary p-1 rounded-xl bg-neutral-900 border-border-bg border-2" />
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}
