"use client";

export default function Projects() {
  const stuff = ["./assets/pg1.png", "./assets/pg2.png", "./assets/pg3.png"];
  return (
    <div className="w-full  border-2  rounded-2xl bg-card-bg border-border-bg  ">
      <p>Projects</p>
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
              >
                <img src={item} alt="project image" className="h-30 object-cover rounded-2xl" />
              </div>
            ))}
            {stuff.map((item, i) => (
              <div
                key={`duplicate-${i}`}
                className="inline-block rounded-xl whitespace-nowrap"
              >
                <img src={item} alt="project image" className="h-30 object-cover rounded-2xl" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
