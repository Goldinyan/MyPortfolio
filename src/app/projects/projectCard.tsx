"use client";

import { useEffect, useState } from "react";
import { ArrowUpRight, Code } from "lucide-react";


type Tag =
  | "TypeScript"
  | "MySQL"
  | "Next.js"
  | "Node.js"
  | "Firebase"
  | "ShadCN/UI"
  | "Tailwind"
  | "Flowbite"
  | "Daisy";

interface Project {
  title: string;
  featured: boolean;
  tags: Tag[];
  description: string;
  date: Date;
  img: string;
  openSource: boolean;
  hasDemo: boolean;
  sourceLink: string;
  demoLink: string;
}


const color: Record<Tag, string[]> = {
  "TypeScript": ["bg-blue-600", "text-white"],
  "MySQL": ["bg-orange-600", "text-white"],
  "Next.js": ["bg-black", "text-white"],
  "Node.js": ["bg-green-600", "text-white"],
  "Firebase": ["bg-yellow-500", "text-black"],
  "ShadCN/UI": ["bg-purple-600", "text-white"],
  "Tailwind": ["bg-sky-500", "text-white"],
  "Flowbite": ["bg-teal-500", "text-white"],
  "Daisy": ["bg-pink-500", "text-white"],
};


interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({
  project: {
    title,
    featured,
    tags,
    description,
    date,
    img,
    openSource,
    hasDemo,
    sourceLink,
    demoLink,
  },
}: ProjectCardProps) {
  return (
    <div className="bg-card-bg border group border-border-bg rounded-2xl">
      <div className="flex flex-col  ">
        
        <div className="aspect-video border border-border-bg  w-full rounded-t-2xl overflow-hidden">
          <img
            src={img}
            className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-110"
          />
        </div>

        <div className="mx-5 pt-5 h-30 flex flex-col">

          <p className="text-white text-lg">{title}</p>
          <p className="text-text-primary text-sm font-light">{description}</p>

          <div>
            {tags.map((tags, idx) => {

              return (
                <div key={idx}>

                </div>
              )
            })}
          </div>
        </div>

        <div className="bg-border-bg/50 border border-border-bg  h-20 flex flex-row w-full justify-around items-center rounded-b-2xl">
          <div
            className={`${
              hasDemo ? "bg-text-secondary " : "bg-text-secondary/40 "
            } flex flex-row w-1/3 justify-center gap-5 rounded-lg h-10 items-center `}
          >
            <ArrowUpRight />
            <p>Live Demo</p>
          </div>
          <div
            className={` ${
              openSource ? "bg-card-bg" : "bg-card-bg/20"
            } flex flex-row w-1/3 h-10  brightness-75 border border-border-bg gap-5 rounded-lg items-center justify-center `}
          >
            <Code
              className={` ${openSource ? "text-white" : "text-text-primary"}`}
            />
            <p
              className={` ${openSource ? "text-white" : "text-text-primary"}`}
            >
              Code
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
