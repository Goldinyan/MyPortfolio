"use client";
import { ArrowUpRight } from "lucide-react";

export default function WebTechStack() {
  const items: { text: string; pic: React.ReactNode; link?: string }[] = [
    {
      text: "Next",
      pic: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 48 48"
          width="48px"
          height="48px"
        >
          <path
            fill="#a7c7ff"
            d="M18.974,31.5c0,0.828-0.671,1.5-1.5,1.5s-1.5-0.672-1.5-1.5v-14c0-0.653,0.423-1.231,1.045-1.43 c0.625-0.198,1.302,0.03,1.679,0.563l16.777,23.704C40.617,36.709,44,30.735,44,24c0-11-9-20-20-20S4,13,4,24s9,20,20,20 c3.192,0,6.206-0.777,8.89-2.122L18.974,22.216V31.5z M28.974,16.5c0-0.828,0.671-1.5,1.5-1.5s1.5,0.672,1.5,1.5v13.84l-3-4.227 V16.5z"
          />
        </svg>
      ),
      link: "https://nextjs.org/",
    },
    {
      text: "Tailwind",
      pic: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 48 48"
          width="48px"
          height="48px"
        >
          <path
            fill="#a7c7ff"
            d="M24,9.604c-6.4,0-10.4,3.199-12,9.597c2.4-3.199,5.2-4.398,8.4-3.599 c1.826,0.456,3.131,1.781,4.576,3.247C27.328,21.236,30.051,24,36,24c6.4,0,10.4-3.199,12-9.598c-2.4,3.199-5.2,4.399-8.4,3.6 c-1.825-0.456-3.13-1.781-4.575-3.247C32.672,12.367,29.948,9.604,24,9.604L24,9.604z M12,24c-6.4,0-10.4,3.199-12,9.598 c2.4-3.199,5.2-4.399,8.4-3.599c1.825,0.457,3.13,1.781,4.575,3.246c2.353,2.388,5.077,5.152,11.025,5.152 c6.4,0,10.4-3.199,12-9.598c-2.4,3.199-5.2,4.399-8.4,3.599c-1.826-0.456-3.131-1.781-4.576-3.246C20.672,26.764,17.949,24,12,24 L12,24z"
          />
        </svg>
      ),
      link: "https://tailwindcss.com/",
    },
    {
      text: "TypeScript",
      pic: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 48 48"
          width="48px"
          height="48px"
        >
          <rect width="36" height="36" x="6" y="6" fill="#a7c7ff" />
          <polygon
            fill="#000000"
            points="27.49,22 14.227,22 14.227,25.264 18.984,25.264 18.984,40 22.753,40 22.753,25.264 27.49,25.264"
          />
          <path
            fill="#000000"
            d="M39.194,26.084c0,0-1.787-1.192-3.807-1.192s-2.747,0.96-2.747,1.986 c0,2.648,7.381,2.383,7.381,7.712c0,8.209-11.254,4.568-11.254,4.568V35.22c0,0,2.152,1.622,4.733,1.622s2.483-1.688,2.483-1.92 c0-2.449-7.315-2.449-7.315-7.878c0-7.381,10.658-4.469,10.658-4.469L39.194,26.084z"
          />
        </svg>
      ),
      link: "https://ui.shadcn.com/",
    },
    {
      text: "Node",
      pic: (
        <img
          width="40"
          height="40"
          src="./node.png"
          alt="react"
        />
      ),
      link: "https://nodejs.org/",
    },
    {
      text: "React",
      pic: (
        <img
          width="40"
          height="40"
          src="./react.png"
          alt="react"
        />
      ),
      link: "",
    },
    {
      text: "Firebase",
      pic: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 48 48"
          width="48px"
          height="48px"
        >
          <path
            fill="var(--color-text-secondary)"
            d="M8,37L23.234,8.436c0.321-0.602,1.189-0.591,1.494,0.02L30,19L8,37z"
          />

          <path
            fill="#7fa3e0"
            d="M8,36.992l5.546-34.199c0.145-0.895,1.347-1.089,1.767-0.285L26,22.992L8,36.992z"
          />

          <path
            fill="#cbd9ff"
            d="M8.008 36.986L8.208 36.829 25.737 22.488 20.793 13.012z"
          />

          <path
            fill="#8795b8"
            d="M8,37l26.666-25.713c0.559-0.539,1.492-0.221,1.606,0.547L40,37l-15,8.743 c-0.609,0.342-1.352,0.342-1.961,0L8,37z"
          />
        </svg>
      ),

      link: "",
    },
  ];
  return (
    <div className="w-full  border-2  rounded-2xl bg-card-bg border-border-bg  ">
      <div className="flex flex-col p-5">
        <p className="text-white text-3xl">My Web Tech Stack</p>
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

                <ArrowUpRight className="h-10 w-10 group-hover:scale-125 duration-200 transition-transform text-text-secondary p-1 rounded-xl bg-neutral-900 border-border-bg border-2" />
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}
