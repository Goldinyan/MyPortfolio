"use client";

export default function Projects() {
  const stuff = ["./assets/pg1.png", "./assets/pg2.png", "./assets/pg3.png"];
  return (
    <div className="w-full h-80  border-2  rounded-2xl bg-card-bg border-border-bg  ">
      <div className="flex flex-col p-5">
        <p className="text-white text-3xl">Projects</p>
        <p className="text-custom-gray-2 text-1 pt-1 ">
          Here are some of my recent works:
        </p>
      </div>
      <div
        className="flex flex-col gap-4 w-full p-3"
        style={{
          backgroundColor: "var(--background)",
          borderRadius: "var(--radius)",
        }}
      >
        <div className="fade-mask w-full">
          <div className="scrolling-container">
            {stuff.map((item, i) => (
              <div
                key={`original-${i}`}
                className="inline-block rounded-xl whitespace-nowrap"
                style={{ width: 256 }}
              >
                <img src={item} alt="project image" className="h-40 w-64 object-cover rounded-2xl" loading="eager" width={256} height={160} />
              </div>
            ))}
            {stuff.map((item, i) => (
              <div
                key={`duplicate-${i}`}
                className="inline-block rounded-xl whitespace-nowrap"
                style={{ width: 256 }}
              >
                <img src={item} alt="project image" className="h-40 w-64 object-cover rounded-2xl" loading="eager" width={256} height={160} />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center">
      <div className="mx-auto flex absolute  items-center justify-center px-3 py-2 mb-4 bg-text-secondary w-1/4 rounded-lg ">
        <p className="font-semibold">View All Projects</p>
      </div>
      </div>
    </div>
  );
}
