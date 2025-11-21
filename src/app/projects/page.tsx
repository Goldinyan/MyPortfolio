"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import {
  ArrowLeft,
  Check,
  Funnel,
  SlidersHorizontal,
  Cpu,
  ArrowUpNarrowWide,
  ArrowBigDown,
  ArrowDown,
  ChartNoAxesColumn,
  RotateCcw,
  X,
} from "lucide-react";
import ProjectCard from "./projectCard";
import useMediaQuery from "../mediaQuery";

type Tag = typeof Tags[number];


type TypeFilter = {
  demo: boolean;
  openSource: boolean;
};

export const Tags = [
  "TypeScript",
  "Daisy",
  "Firebase",
  "MySQL",
  "Next.js",
  "Node.js",
  "ShadCN/UI",
  "Flowbite",
  "Tailwind",
] as const;

const sortValues = ["Newest First", "A-Z", "Z-A"] as const;
type Sort = (typeof sortValues)[number];
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
  demoLink: string
}
export default function Home() {
  const [selectOpen, setSelectOpen] = useState<boolean>(false);
  const [showFilter, setShowFilter] = useState<boolean>(false);
  const [typeFilter, setTypeFilter] = useState<TypeFilter>({
    demo: false,
    openSource: false,
  });
  const [tagsFilter, setTagsFilter] = useState<Tag[]>([]);
  const [sort, setSort] = useState<Sort>("Newest First");
  const [filProjects, setFilProjects] = useState<Project[]>([]);
  const projects: Project[] = [
    {
      title: "Coding Kids Niederhein",
      featured: false,
      tags: [
        "TypeScript",
        "Tailwind",
        "Firebase",
        "Next.js",
        "Node.js",
        "ShadCN/UI",
      ],
      description: "ds",
      date: new Date("2025-08-16"),
      img: "./pg1.png",
      openSource: false,
      hasDemo: true,
      sourceLink: "",
      demoLink: "",
    },
    {
      title: "Coding Kids Niederhein",
      featured: false,
      tags: [
        "TypeScript",
        "Tailwind",
        "Firebase",
        "MySQL",
        "ShadCN/UI"
      ],
      description: "ds",
      date: new Date("2024-11-13"),
      img: "./pg2.png",
      openSource: true,
      hasDemo: false,
      sourceLink: "",
      demoLink: "",
    },
    {
      title: "Coding Kids Niederhein",
      featured: false,
      tags: [
        "TypeScript",
        "Tailwind",
        "ShadCN/UI",
        "Flowbite"
      ],
      description: "ds",
      date: new Date("2025-05-02"),
      img: "./pg3.png",
      openSource: true,
      hasDemo: true,
      sourceLink: "",
      demoLink: "",
    },
  ];
  const isMdUp = useMediaQuery("(min-width: 768px)");

  useEffect(() => {
    setShowFilter(true);
  }, [isMdUp]);

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
      sortedProjects = sortedProjects.filter((project) => project.openSource);
    }

    if (tagsFilter.length !== 0) {
      sortedProjects = sortedProjects.filter((project) =>
        tagsFilter.every((tag) => project.tags.includes(tag))
      );
    }

    setFilProjects(sortedProjects);
  }, [tagsFilter, sort, typeFilter]);

  const checkFilters = () => {
    return typeFilter.demo || typeFilter.openSource || tagsFilter.length > 0;
  };

  const resetFilter = () => {
    setTypeFilter({ demo: false, openSource: false });
    setTagsFilter([]);
  };

  return (
    <>
      <div className="w-full min-h-screen  bg-bg-black bg-fixed overflow-x-hidden bg-top-splash">
        <div className="w-full pt-10 p-4 l:pt-20 md:pt-15  flex flex-col items-center justify-center ">
          <p className="text-text-third text-3xl font-bold l:text-5xl md:text-4xl">My Projects</p>
          <p className="text-text-primary l:text-md md:text-sm2 sm:w-130 text-center font-light text-sm pt-5 px-4">
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

        <div className="bg-bg-black max-w-350 mt-6 flex flex-col l:h-48  w-[85%] mx-auto rounded-xl border-border-light border-1">
          <div
            onClick={() => setShowFilter((prev) => !prev)}
            className="w-[95%] bg-bg-black md:hidden p-2 hover:bg-island-bg  items-center justify-start mt-3 mb-3 flex mx-auto rounded-xl border-border-light border-1 "
          >
            <Funnel className="ml-2 mr-2 text-white w-4 h-4" />
            <p className="text-white">Filters</p>
            <p>
              {filProjects.length !== projects.length ? filProjects.length : ""}
            </p>
            <SlidersHorizontal className="ml-auto mr-2 text-white w-5 h-5" />
          </div>
          {showFilter && (
            <div className="mx-auto w-[95%] gap-5 grid grid-cols-1 md:grid-cols-2 l:grid-cols-4">
             
              {/* <div className="flex md:flex-row gap-3"> */}
                <div className="ml-1 max-w-100   ">
                  <div className="mt-4 flex items-center gap-2 flex-row">
                    <Funnel className=" h-4 w-4 mb-2 text-text-primary" />
                    <p className="text-text-third font-medium text-sm mb-2">
                      Project Type
                    </p>
                  </div>
                  <div className="flex flex-col gap-4 mt-2">
                    <label className="flex items-center gap-2 cursor-pointer">
                      <div
                        onClick={() =>
                          setTypeFilter((prev) => ({
                            ...prev,
                            demo: !prev.demo,
                          }))
                        }
                        className={`w-4 h-4 flex items-center border-text-secondary justify-center border rounded-full ${
                          typeFilter.demo
                            ? "bg-text-secondary text-black"
                            : "bg-bg-black border-border-bg"
                        }`}
                      >
                        {typeFilter.demo && <Check className="" />}
                      </div>
                      <span className="text-text-primary text-sm">
                        Has Demo
                      </span>
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

                <div className="max-w-120 pb-3 ">
                  <div className="flex  ml-1 mt-4 items-center gap-2 flex-row">
                    <Cpu className="text-text-primary h-4 w-4 " />
                    <p className=" text-text-third font-medium text-sm ">
                      Technologies
                    </p>
                  </div>

                  <div className="mt-2 ml-1 flex flex-wrap gap-2 text-text-primary  mx-auto">
                    {Tags.map((tag) => (
                      <div
                        key={tag}
                        className="hover:brightness-90"
                        onClick={() => toggle(tag)}
                      >
                        <p
                          className={`text-sm px-2 py-1  rounded-lg font-medium ${
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
                </div>
              {/* </div> */}

              {/* <div className="flex md:flex-row gap-3 "> */}
                <div className="max-w-120 ">
                  <div className="flex l:mt-4 items-center gap-2 flex-row">
                    <ArrowUpNarrowWide className="text-text-primary h-4 w-4 " />
                    <p className=" text-text-third font-medium text-sm ">
                      Sort By
                    </p>
                  </div>

                  <div className="mt-4">
                    <div className="relative bg-bg-black  p-3 items-center justify-start mt-3 mb-3 flex mx-auto rounded-xl border-border-light border-1">
                      <div
                        className="flex flex-row justify-between w-full cursor-pointer"
                        onClick={() => setSelectOpen(!selectOpen)}
                      >
                        <p className="text-white text-xs">{sort}</p>
                        <ArrowDown className="text-text-primary h-4 w-4 ml-1" />
                      </div>

                      <div
                        className={`absolute left-0 top-full mt-2 w-full bg-bg-black rounded-xl border border-border-light
      transition-all duration-300 ease-out
      ${
        selectOpen
          ? "opacity-100 scale-y-100"
          : "opacity-0 scale-y-0 pointer-events-none"
      }`}
                      >
                        {sortValues.map((value) => (
                          <div
                            key={value}
                            className="px-3 py-2 rounded-xl cursor-pointer flex items-center hover:bg-island-bg"
                            onClick={() => {
                              setSort(value);
                              setSelectOpen(false);
                            }}
                          >
                            {sort === value ? (
                              <Check className="mr-2 h-4 w-4 text-text-secondary" />
                            ) : (
                              <div className="mr-2 w-4 h-4" />
                            )}
                            <p className="text-white text-sm">{value}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="max-w-120 ">
                  <div className="flex ml-1 l:mt-4  items-center gap-2 flex-row">
                    <ChartNoAxesColumn className="text-text-primary h-4 w-4 " />
                    <p className=" text-text-third font-medium text-sm ">
                      Results
                    </p>
                  </div>

                  <div className="flex flex-col gap-2">
                    <div className="mt-2">
                      <p className="text-text-primary text-sm">
                        Showing {filProjects.length} of {projects.length}{" "}
                        projects
                      </p>
                    </div>
                    <div>
                      <div className="mt-1 ml-1 flex flex-wrap gap-2 text-text-primary  mx-auto">
                        {tagsFilter.map((tag) => (
                          <div
                            key={tag}
                            className="hover:brightness-90 items-center rounded-lg px-2 py-1 flex flex-row bg-dark-bg border-1 border-border-bg"
                            onClick={() =>
                              setTagsFilter((prev) =>
                                prev.filter((t) => t !== tag)
                              )
                            }
                          >
                            <p
                              className={`text-sm px-2 rounded-lg font-medium `}
                            >
                              {tag}
                            </p>
                            <X className="text-text-primary h-4 w-4 " />
                          </div>
                        ))}
                      </div>
                    </div>
                    <div
                      onClick={() => resetFilter()}
                      className={`${
                        checkFilters()
                          ? " border-border-light cursor-pointer"
                          : "border-border-bg  cursor-not-allowed"
                      } w-full  gap-3  justify-center  p-2  items-center  mb-3 flex mx-auto rounded-xl  border-1 `}
                    >
                      <RotateCcw
                        className={`${
                          checkFilters() ? "text-white" : "text-text-primary"
                        } h-4 w-4 `}
                      />

                      <p
                        className={`${
                          checkFilters() ? "text-white" : "text-text-primary"
                        } `}
                      >
                        Reset All Filters
                      </p>
                    </div>
                  </div>
                </div>
              
              
            </div>
          )}
        </div>

        <div className="mt-5">
          <div className="grid md:grid-cols-2 x:grid-cols-3 w-[85%] max-w-350 mx-auto gap-4">
            {filProjects.map((project, i) => {
              return (
                <div
                  className="w-full md:max-w-140 lg:max-w-170"
                  key={i}
                >
                  <ProjectCard project={project} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
