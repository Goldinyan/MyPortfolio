"use client";

import { HeartHandshake, Github, Mail } from "lucide-react";
import { ReactTyped } from "react-typed";

export default function WorkTogether() {
  const items: { text: string; icon: React.ReactNode }[] = [
    {
      text: "Contact me via Mail",
      icon: <Mail className="h-5" style={{ color: "#5865F2" }} />,
    },
    {
      text: "Check out my Github",
      icon: <Github className="h-5" style={{ color: "#5865F2" }} />,
    },
    {
      text: "Message me on Discord",
      icon: (
        <img src={"discord.svg"} className="h-5" style={{ color: "#5865F2" }} />
      ),
    },
  ];

  return (
    <div className="w-full  border-2  rounded-2xl bg-card-bg border-border-bg  ">
      <div className="flex flex-col items-center justify-center">
        <div className="flex flex-col p-5 ">
          <HeartHandshake className="w-25 h-25 bg-bg-black p-3 rounded-full border border-border-bg text-text-secondary mb-2" />
        </div>

        <div className="flex flex-col justify-center items-center p-5 pt-0">
          <p className="text-white font-bold text-xl">Lets Work Together</p>
          <p className="font-medium text-text-primary">
            and make your ideas come to{" "}
            <ReactTyped
              strings={["life", "reality"]}
              typeSpeed={60}
              backSpeed={70}
              loop
              className=" font-medium text-text-secondary"
            />
          </p>
          <div>
            {items.map((item, index) => (
              <div key={index} className="w-60 mt-4 mb-2">
                <button
                  onClick={() => {
                    if (item.text.includes("Mail")) {
                      window.location.href = "mailto:someone@example.com";
                    }
                  }}
                >
                  {item.icon} {item.text}
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
