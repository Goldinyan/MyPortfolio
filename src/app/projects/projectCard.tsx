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
    <div className="bg-card-bg border border-border-bg rounded-2xl">
      {/* <img src={img} alt={title} className="rounded-lg mb-2" />
      <p className="text-lg font-bold">{title}</p>
      <p className="text-sm text-text-primary">{description}</p>
      <div className="flex flex-wrap gap-2 mt-2">
        {tags.map((tag) => (
          <span key={tag} className="px-2 py-1 text-xs rounded bg-island-bg">
            {tag}
          </span>
        ))}

      </div> */}
      <div className="flex flex-col divide-y divide-border-bg">
        <div className="h-20"></div>

        <div className="h-30"></div>

        <div className="bg-border-bg/50  h-20 flex flex-row w-full justify-around items-center rounded-b-2xl">
          <div className={`${hasDemo ? "bg-text-secondary " : "bg-text-secondary/40 "} flex flex-row w-1/3 justify-center gap-5 rounded-lg h-10 items-center `}> 
            <ArrowUpRight />
            <p>Live Demo</p>
          </div>
          <div className={` ${openSource ? "bg-card-bg" : "bg-card-bg/20"} flex flex-row w-1/3 h-10  brightness-75 border border-border-bg gap-5 rounded-lg items-center justify-center `}>
            <Code className={` ${openSource ? "text-white" : "text-text-primary"}`}/>
            <p className={` ${openSource ? "text-white" : "text-text-primary"}`}>Code</p>
          </div>
          
        </div>
      </div>
    </div>
  );
}
