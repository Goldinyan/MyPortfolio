"use client";

import "./globals.css";
import { useState, useEffect } from "react";
import {
  Globe,
  Languages,
  Clock,
  Printer,
  User,
  GraduationCap,
  Gamepad,
} from "lucide-react";
import { Github, Mailbox, Mail, FileText, UserPlus, Omega } from "lucide-react";

export const traits = [
  { text: "German & English", icon: Languages },
  { text: "German", icon: Globe },
  { text: "UTC+2", icon: Clock },
  { text: "3D-Print Addict", icon: Printer },
  { text: "16y/o", icon: User },
  { text: "Student", icon: GraduationCap },
  { text: "Philosopher", icon: Omega },
];

export default function Profile() {
  return (
    <div className="w-full  border-2  rounded-2xl bg-card-bg border-border-bg  ">
      <div className="flex items-center gap-5">
        <img
          alt="Profile Picture"
          src="./bgFunny.jpg"
          className="h-25 rounded-2xl ml-[5%] mt-5 object-cover"
        />
        <div className="flex flex-col ">
          <p className="text-green-600 bg-green-950 text-center mt-3 hover:bg-island-bg rounded-2xl w-35 text-sm">
            Availabe To Work
          </p>
          <p className="text-2xl font-stardom text-text-secondary pt-1">
            Goldinyan xxX
          </p>
          <p className="text-text-primary break-normal font-medium w-40 sm:w-60 pt-1 text-xl-plus">
            I'm a{" "}
            <span className="text-text-secondary">Full Stack Developer</span>
          </p>
        </div>
      </div>

      <div className="flex gap-2 w-[90%] mx-auto mt-5 p-3 flex-wrap bg-small-card-bg rounded-2xl">
        {traits.map(({ text, icon: Icon }, index) => (
          <div
            key={index}
            className="flex items-center hover:scale-105 duration-200 w-full sm:w-auto  transition-transform bg-island-bg pr-4 gap-0.5 mx-1 p-1 rounded-[10]"
          >
            <Icon className=" h-4 text-accent text-text-secondary" />
            <p className="text-gray-400 ">{text}</p>
          </div>
        ))}
      </div>
      <div  className="w-full pb-4 mx-auto mt-5 items-center justify-center flex gap-5">
        <div    onClick={() => window.open("mailto:seifert.ansgar@gmail.com", "_blank")} className="w-[42.5%] h-10 hover:brightness-90 hover:scale-105 transition-transform cursor-pointer items-center rounded-2xl  gap-1 justify-center flex bg-text-secondary">
          <Mail className="h-5 " />
          <p>Hire me</p>
        </div>
        <div
          onClick={() => {
            window.open("https://github.com/Goldinyan", "_blank");
          }}
          className="w-[42.5%] h-10 items-center hover:brightness-90  hover:scale-105 transition-transform cursor-pointer rounded-2xl  gap-1 justify-center flex bg-custom-gray"
        >
          <Github className="h-5 text-white" />
          <p className="text-white">Github</p>
        </div>
      </div>
    </div>
  );
}
