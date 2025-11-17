"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { ArrowLeft, Check } from "lucide-react";

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

type TypeFilter = {
  demo: boolean;
  openSource: boolean;
};

const Tags: Tag[] = [
  "TypeScript",
  "Daisy",
  "Firebase",
  "MySQL",
  "Next.js",
  "Node.js",
  "ShadCN/UI",
  "Flowbite",
  "Tailwind",
];

const sortValues = ["Newest First", "A-Z", "Z-A"] as const;
type Sort = (typeof sortValues)[number];
type Projects = {
  title: string;
  feautured: boolean;
  tags: Tag[];
  des: string;
  date: Date;
  img: string;
  openSoure: boolean;
  hasDemo: boolean;
  sourceLink: string;
  demoLink: string;
};
export default function Home() {
  const [typeFilter, setTypeFilter] = useState<TypeFilter>({
    demo: false,
    openSource: false,
  });
  const [tagsFilter, setTagsFilter] = useState<Tag[]>([]);
  const [sort, setSort] = useState<Sort>("Newest First");
  const [filProjects, setFilProjects] = useState<Projects[]>([]);
  const projects: Projects[] = [
    {
      title: "Coding Kids Niederhein",
      feautured: false,
      tags: [
        "TypeScript",
        "Tailwind",
        "Firebase",
        "Next.js",
        "Node.js",
        "ShadCN/UI",
      ],
      des: "ds",
      date: new Date("2025-08-16"),
      img: "./assets/pg1.png",
      openSoure: false,
      hasDemo: true,
      sourceLink: "",
      demoLink: "",
    },
    {
      title: "Coding Kids Niederhein",
      feautured: false,
      tags: [
        "TypeScript",
        "Tailwind",
        "Firebase",
        "Next.js",
        "Node.js",
        "ShadCN/UI",
      ],
      des: "ds",
      date: new Date("2025-08-16"),
      img: "./assets/pg1.png",
      openSoure: false,
      hasDemo: true,
      sourceLink: "",
      demoLink: "",
    },
    {
      title: "Coding Kids Niederhein",
      feautured: false,
      tags: [
        "TypeScript",
        "Tailwind",
        "Firebase",
        "Next.js",
        "Node.js",
        "ShadCN/UI",
      ],
      des: "ds",
      date: new Date("2025-08-16"),
      img: "./assets/pg1.png",
      openSoure: false,
      hasDemo: true,
      sourceLink: "",
      demoLink: "",
    },
  ];

  const router = useRouter();

  const toggle = (tag: Tag) => {
    setTagsFilter((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    );
  };

  useEffect(() => {
    let sortedProjects = [...projects];

    sortedProjects = sortedProjects.sort((a, b) => {
      if (sort === "Newest First") {
        return b.date.getTime() - a.date.getTime();
      }
      if (sort === "A-Z") {
        return a.title.localeCompare(b.title);
      }
      if (sort === "Z-A") {
        return b.title.localeCompare(a.title);
      }
      return 0;
    });

    if (typeFilter.demo) {
      sortedProjects = sortedProjects.filter((project) => project.hasDemo);
    }

    if (typeFilter.openSource) {
      sortedProjects = sortedProjects.filter((project) => project.openSoure);
    }

    if (tagsFilter.length !== 0) {
      sortedProjects = sortedProjects.filter((project) =>
        tagsFilter.every((tag) => project.tags.includes(tag))
      );
    }

    setFilProjects(sortedProjects);
  }, [tagsFilter, sort, typeFilter]);

  return (
    <>
      <div className="w-full min-h-screen bg-bg-black overflow-x-hidden bg-top-splash">
        <div className="w-full pt-10  flex flex-col items-center justify-center ">
          <p className="text-text-third text-3xl font-bold">My Projects</p>
          <p className="text-text-primary text-center font-light text-sm pt-5 px-4">
            Here you can find a collection of my public/open-source projects.
            Feel free to explore and check them out!
          </p>
          <div
            onClick={() => router.push("/")}
            className="flex flex-row gap-2 text-black bg-text-secondary mt-4 px-3 py-2 font-medium rounded-lg "
          >
            <ArrowLeft />
            <p>Back to Home</p>
          </div>
        </div>

        <div className="mt-8 px-4">
          <p className="text-text-third font-semibold mb-2">Project Type</p>
          <div className="flex flex-col gap-2">
            <label className="flex items-center gap-2 cursor-pointer">
              <div
                onClick={() =>
                  setTypeFilter((prev) => ({ ...prev, demo: !prev.demo }))
                }
                className={`w-5 h-5 flex items-center justify-center border rounded-sm ${
                  typeFilter.demo
                    ? "bg-text-secondary text-black"
                    : "bg-bg-black border-border-bg"
                }`}
              >
                {typeFilter.demo && <Check className="" />}
              </div>
              <span className="text-text-primary text-sm">Has Demo</span>
            </label>

            <label className="flex items-center gap-2 cursor-pointer">
              <div
                onClick={() =>
                  setTypeFilter((prev) => ({
                    ...prev,
                    openSource: !prev.openSource,
                  }))
                }
                className={`w-5 h-5 flex items-center justify-center border rounded-sm ${
                  typeFilter.openSource
                    ? "bg-text-secondary text-black"
                    : "bg-bg-black border-border-bg"
                }`}
              >
                {typeFilter.openSource && <Check className="" />}
              </div>
              <span className="text-text-primary text-sm">Open Source</span>
            </label>
          </div>
        </div>

        <div>
          {Tags.map((tag) => (
            <div key={tag} className="" onClick={() => toggle(tag)}>
              <p
                className={` ${
                  tagsFilter.includes(tag) ? " bg-green-500" : "bg-island-bg"
                }`}
              >
                {tag}
              </p>
            </div>
          ))}
        </div>

        <div>
          <select
            defaultValue="Newest First"
            onChange={(e) => setSort(e.target.value as Sort)}
          >
            {sortValues.map((value) => (
              <option key={value} value={value}>
                {value}
              </option>
            ))}
          </select>
        </div>

        <div className="p-4">
              <div className="grid md:grid-cols-2 mx-10 gap-4">
            {filProjects.map((project, i) => {
                return(
                    <div className="bg-card-bg w-full border border-border-bg rounded-2xl" key={i}>
                        <img src={project.img} className="" />
                        <p>{project.title}</p>
                    </div>
                )
            })}
        </div> 
        </div>
      </div>
    </>
  );
}


 

