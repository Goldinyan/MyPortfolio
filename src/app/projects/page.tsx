"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { ArrowLeft, Check, Funnel, SlidersHorizontal, Cpu } from "lucide-react";

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
  const [selectOpen, setSelectOpen] = useState<boolean>(false);
  const [showFilter, setShowFilter] = useState<boolean>(false);
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
      <div className="w-full min-h-screen bg-bg-black bg-fixed overflow-x-hidden bg-top-splash">
        <div className="w-full pt-10 p-4  flex flex-col items-center justify-center ">
          <p className="text-text-third text-3xl font-bold">My Projects</p>
          <p className="text-text-primary w-[60%] text-center font-light text-sm pt-5 px-4">
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

        <div className="bg-bg-black mt-2 md:hidden flex-col flex w-[85%] mx-auto rounded-xl border-border-light border-1 ">
          <div
            onClick={() => setShowFilter((prev) => !prev)}
            className="w-[95%] bg-bg-black md:hidden p-2 hover:bg-island-bg  items-center justify-start mt-3 mb-3 flex mx-auto rounded-xl border-border-light border-1 "
          >
            <Funnel className="ml-2 mr-2 text-white w-4 h-4" />
            <p className="text-white">Filters</p>
            <p>{filProjects.length !== projects.length ? filProjects.length : ""}</p>
            <SlidersHorizontal className="ml-auto mr-2 text-white w-5 h-5" />
          </div>
          {showFilter && (
            <div className="mx-auto w-[90%]">
              <div className="mt-1 ">
                <div className="flex items-center gap-2 flex-row">
                  <Funnel className=" h-4 w-4 mb-2 text-text-primary" />
                  <p className="text-text-third font-medium text-sm mb-2">
                    Project Type
                  </p>
                </div>
                <div className="flex flex-col gap-2">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <div
                      onClick={() =>
                        setTypeFilter((prev) => ({ ...prev, demo: !prev.demo }))
                      }
                      className={`w-4 h-4 flex items-center border-text-secondary justify-center border rounded-full ${
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
                      className={`w-4 h-4 flex items-center border-text-secondary justify-center border rounded-full ${
                        typeFilter.openSource
                          ? "bg-text-secondary text-black"
                          : "bg-bg-black border-border-bg"
                      }`}
                    >
                      {typeFilter.openSource && <Check className="" />}
                    </div>
                    <span className="text-text-primary text-sm">
                      Open Source
                    </span>
                  </label>
                </div>
              </div>

              <div className="flex mt-4 items-center gap-2 flex-row">
                <Cpu className="text-text-primary h-4 w-4 " />
                <p className=" text-text-third font-medium text-sm ">Technologies</p>
              </div>

              <div className="mt-2 flex flex-wrap gap-2 text-text-primary  mx-auto">
                {Tags.map((tag) => (
                  <div key={tag} className="hover:brightness-90" onClick={() => toggle(tag)}>
                    <p
                      className={`text-sm px-2 rounded-lg font-medium ${
                        tagsFilter.includes(tag)
                          ? " bg-text-secondary text-black"
                          : "bg-island-bg"
                      }`}
                    >
                      {tag}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-4">
                <div
                  defaultValue="Newest First"
                  className="w-full px-3 py-2 rounded-lg bg-island-bg text-text-primary border border-border-bg focus:outline-none focus:ring-2 focus:ring-text-secondary hover:bg-opacity-80 transition-all"
                >
                  {selectOpen && <div>
                  {sortValues.map((value) => (
                    <div key={value} >
                      <p onClick={() => setSort(value)}>{value}</p>
                    </div>
                  ))}
                  </div>
                  }
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="p-4">
          <div className="grid md:grid-cols-2 mx-10 gap-4">
            {filProjects.map((project, i) => {
              return (
                <div
                  className="bg-card-bg w-full border border-border-bg rounded-2xl"
                  key={i}
                >
                  <img src={project.img} className="" />
                  <p>{project.title}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
