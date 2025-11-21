"use client";

import { HeartHandshake, Github, Mail } from "lucide-react";
import { ReactTyped } from "react-typed";

export default function WorkTogether() {
  const items: { text: string; icon: React.ReactNode }[] = [
    {
      text: "Contact me via Email",
      icon: <Mail className="h-5" style={{ color: "#a7c7ff" }} />,
    },
    {
      text: "Check out my Github",
      icon: <Github className="h-5" style={{ color: "#a7c7ff" }} />,
    },
  ];

  return (
    <div className="w-full  border-2  rounded-2xl bg-card-bg border-border-bg  ">
      <div className="flex flex-col items-center justify-center">
        <div className="flex flex-col p-5 ">
          <HeartHandshake className="w-25 h-25 hover:rotate-45 transition-all duration-300 bg-bg-black p-3 rounded-full border border-border-bg text-text-secondary mb-2" />
        </div>

        <div className="flex flex-col justify-center items-center p-4 pt-0">
          <p className="text-white font-bold text-xl">Lets Work Together</p>
          <p className="font-medium text-text-primary">
            and make your ideas come to{" "}
            <ReactTyped
              strings={["life", "reality", "existence", "creation", "code", "products"]}
              typeSpeed={60}
              backSpeed={70}
              loop
              className=" font-medium text-text-secondary"
            />
          </p>
          <div className="flex gap-4">
            {items.map((item, index) => (
              <div
                key={index}
                className="mt-4 mb-2 group  bg-bg-black px-4 py-2 hover:bg-gray-900 border border-border-bg rounded-xl hover:scale-105 transition-transform"
              >
                <button
                  onClick={() => {
                    if (item.text.includes("Email")) {
                      window.location.href =
                        "mailto:seifert.ansgar@example.com";
                    } else {
                      window.location.href = "https://github.com/Goldinyan"
                    }
                  }}
                  className="relative flex flex-col items-center "
                >
                  {item.icon}

                  <p className="absolute -top-14 text-sm text-white w-50  bg-bg-black px-4 py-2 border border-border-bg rounded-xl duration-300   opacity-0 group-hover:opacity-100 transition-all">
                    {item.text}
                  </p>
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
