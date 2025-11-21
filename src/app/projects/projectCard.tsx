"use client";

import { useEffect, useState } from "react";
import { Star, Code } from "lucide-react";
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
    <div className="bg-card-bg border border-border-bg  h-70">
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
      <div className="bg-custom-gray ">
        <p>Live Demo</p>
        <p>Code</p>
      </div>
    </div>
  );
}
