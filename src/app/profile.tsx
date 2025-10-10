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
import { Github, Mailbox, Mail, FileText, UserPlus } from "lucide-react";

export const traits = [
  { text: "German & English", icon: Languages },
  { text: "German", icon: Globe },
  { text: "UTC+2", icon: Clock },
  { text: "3D-Print Addict", icon: Printer },
  { text: "16y/o", icon: User },
  { text: "Student", icon: GraduationCap },
];

export default function Profile() {
  return (
    <div
      className="w-100 h-90 border-2 rounded-2xl bg-card-bg border-border-bg  "
      
    >
      <div className="flex items-center gap-[1vw]">
        <img
          alt="Profile Picture"
          src="./assets/bgFunny.jpg"
          className="h-25 rounded-2xl ml-7.5 mt-5 mr-2.5 object-cover"
        />
        <div className="flex flex-col">
          <p className="text-3xl text-text-secondary" >
            Goldinyan
          </p>
          <p className="text-white break-normal text-xl-plus">I'm a <span className="text-text-secondary">Full Stack Developer</span></p>
        </div>
      </div>

      <div
        className="flex gap-2 w-85 p-3 flex-wrap mr-7.5 ml-7.5 mt-5 mb-5 bg-small-card-bg rounded-2xl"
      >
        {traits.map(({ text, icon: Icon }, index) => (
          <div
            key={index}
            className="flex items-center bg-island-bg pr-4 gap-0.5 mx-1 p-1 rounded-[10]"
            
          >
            <Icon className=" h-4 text-accent text-text-secondary"  />
            <p className="text-gray-400 ">{text}</p>
          </div>
        ))}
      </div>
      <div className="w-85 ml-7.5 mr-7.5  items-center justify-center flex gap-5">
        <div className="w-40 h-10 items-center rounded-[10] gap-3 justify-center flex bg-text-secondary">
          <Mail className="h-5" />
          <p >Hire me</p>
        </div>
        <div className="w-40 h-10 items-center rounded-[10] gap-3 justify-center flex bg-custom-gray" >
          <Github className="h-5 text-white" />
          <p className="text-white">Github</p>
        </div>
      </div>
    </div>
  );
}