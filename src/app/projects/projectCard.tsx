"use client";

import { ExternalLink, Code, Star, Construction, ImageOff } from "lucide-react";

type Tag =
  | "TypeScript"
  | "MySQL"
  | "Next.js"
  | "Node.js"
  | "Firebase"
  | "ShadCN/UI"
  | "Tailwind"
  | "Flowbite"
  | "Daisy"
  | "C"
  | "SDL2";

interface Project {
  title: string;
  featured: boolean;
  tags: Tag[];
  description: string;
  date: Date;
  img: string;
  workingOn: boolean;
  openSource: boolean;
  hasDemo: boolean;
  sourceLink: string;
  demoLink: string;
}

const color: Record<Tag, { text: string }> = {
  TypeScript: { text: "text-blue-500" },
  MySQL: { text: "text-blue-200" },
  "Next.js": { text: "text-green-500" },
  "Node.js": { text: "text-white" },
  Firebase: { text: "text-black" },
  "ShadCN/UI": { text: "text-white" },
  Tailwind: { text: "text-sky-200" },
  Flowbite: { text: "text-white" },
  Daisy: { text: "text-white" },
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
    workingOn,
    openSource,
    hasDemo,
    sourceLink,
    demoLink,
  },
}: ProjectCardProps) {
  const goTo = (url: string) => {
    if (url !== "") {
      window.open(url, "_blank");
    } // öffnet in neuem Tab
  };

  return (
    <div className="bg-card-bg border group border-border-bg rounded-2xl">
      <div className="flex flex-col  ">
        <div className="flex items-center justify-center">
          {title !== "Coding Kids" && title !== "DevCache" ? (
            <div className="aspect-video border border-border-bg  w-full rounded-t-2xl overflow-hidden">
              <img
                src={img}
                className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-110"
                alt="Project Image"
              />{" "}
            </div>
          ) : (
            <div className="flex items-center justify-center h-60">
              <ImageOff
                className="text-white h-20 w-20 font-light"
                strokeWidth={1}
              />
            </div>
          )}
        </div>

        <div className="mx-5 pt-10 min-h-60 flex flex-col">
          <div className="flex flex-row justify-between">
            <p className="text-white text-lg">{title}</p>
            {featured ? (
              <div className="flex flex-row bg-text-secondary/30 px-2 rounded-xl border justify-center items-center border-text-secondary gap-3">
                <Star className="text-text-secondary h-5 w-5" />
                <p className="text-text-secondary ">Feautured</p>
              </div>
            ) : (
              ""
            )}
            {workingOn ? (
              <div className="flex flex-row bg-green-600/30 px-2 rounded-xl border justify-center items-center border-green-600 gap-3">
                <Construction className="text-green-600 h-4 w-4" />
                <p className="text-green-600 text-sm ">Bulding</p>
              </div>
            ) : (
              ""
            )}
          </div>
          <p className="text-text-primary text-sm font-light pt-4">
            {description}
          </p>

          <div className="flex flex-wrap gap-2 pt-5 pb-5">
            {tags.map((tag, idx) => {
              return (
                <div key={idx}>
                  <div
                    className={`text-text-primary hover:bg-card-bg px-2 rounded-lg text-sm bg-island-bg py-1 font-medium items-center flex justify-center `}
                  >
                    {tag}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="bg-border-bg/50 border  border-border-bg  pt-5 pb-5 flex flex-row w-full justify-around items-center rounded-b-2xl">
          <div
            onClick={() => goTo(demoLink)}
            className={`${hasDemo
                ? "bg-text-secondary cursor-pointer hover:scale-110"
                : "bg-text-secondary/40 cursor-not-allowed "
              } flex flex-row w-1/3 justify-center gap-5 transition-all rounded-lg h-10 items-center `}
          >
            <ExternalLink />
            <p>Demo</p>
          </div>
          <div
            onClick={() => goTo(sourceLink)}
            className={` ${openSource
                ? "bg-card-bg cursor-pointer hover:scale-110"
                : "bg-card-bg/20"
              } flex flex-row w-1/3 h-10  brightness-75 border border-border-bg transition-all  gap-5 rounded-lg items-center justify-center `}
          >
            <Code
              className={` ${openSource ? "text-white cursor-pointer" : "text-text-primary"}`}
            />
            <p
              className={` ${openSource ? "text-white cursor-pointer" : "text-text-primary cursor-not-allowed"}`}
            >
              Code
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
