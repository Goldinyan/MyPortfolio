"use client";

import { useRouter } from "next/navigation";

export default function Projects() {

    const router = useRouter(); 
    const stuff = ["./assets/pg1.png", "./assets/pg2.png", "./assets/pg3.png"];

  return (
    <div className="w-full   border-2  rounded-2xl bg-card-bg border-border-bg  ">
      <div className="flex flex-col p-5">
        <p className="text-white text-3xl">Projects</p>
        <p className="text-custom-gray-2 text-1 pt-1 ">
          Here are some of my recent works:
        </p>
      </div>
      <div
        className="flex flex-col gap-2 w-full p-3"
        style={{
          backgroundColor: "var(--background)",
          borderRadius: "var(--radius)",
        }}
      >
        <div className="fade-mask w-full ">
          <div className="scrolling-container">
            {stuff.map((item, i) => (
              <div
                key={i}
                className="inline-block rounded-xl  w-70   whitespace-nowrap"
              >
                <img
                  src={item}
                  alt="project image"
                  className=" object-cover rounded-2xl"
                />
              </div>
            ))}
            {stuff.map((item, i) => (
              <div
                key={i}
                className="inline-block  w-70  rounded-xl whitespace-nowrap"
              >
                <img
                  src={item}
                  alt="project image"
                  className=" object-cover rounded-2xl"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="flex items-center pb-8 justify-center">
        <div className="mx-auto flex absolute  items-center justify-center px-3 hover:scale-110 cursor-pointer transition-transform z-20 py-2 mb-4 bg-text-secondary  rounded-lg ">
          <p onClick={() => (
            router.push('/projects')
          )} className="font-medium">View All Projects</p>
        </div>
      </div>
    </div>
  );
}
