"use client";

export default function Projects() {
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
                className="inline-block rounded-xl md:w-80 w-60   whitespace-nowrap"
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
                className="inline-block md:w-80 w-60  rounded-xl whitespace-nowrap"
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
      <div className="flex items-center justify-center">
        <div className="mx-auto flex absolute  items-center justify-center px-3 z-20 py-2 mb-4 bg-text-secondary w-40 rounded-lg ">
          <p className="font-semibold">View All Projects</p>
        </div>
      </div>
    </div>
  );
}
