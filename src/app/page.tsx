import "./globals.css";
import Profile from "./profile";
import Services from "./services";
import LittleStuff from "./littleStuff";
import WorkTogether from "./workTogether";
import Projects from "./projects";
import WebTechStack from "./webTechStack";
import Testimonials from "./testimonials";
import OtherTechStack from "./otherTechStack";

export default function Home() {
  return (
    <div className="w-full min-h-screen bg-bg-black overflow-x-hidden">
      <div className="grid grid-cols-1  l:grid-cols-2 xl:grid-cols-3 p-4 mx-[2%]">
        <div>
          <div className="p-2 rounded-2xl">
            <Profile />
          </div>
          <div className="p-2 rounded-2xl">
            <Services />
          </div>
          <div className="p-2 rounded-2xl">
            <Projects />
          </div>
        </div>

        <div>
          <div className="p-2 rounded-2xl">
            <WebTechStack />
          </div>
          <div className="p-2 rounded-2xl">
            <LittleStuff />
          </div>
          <div className="p-2 rounded-2xl">
            <WorkTogether />
          </div>
        </div>

        <div>
          <div className="p-2 rounded-2xl">
              <OtherTechStack />
          </div>
          <div className="p-2 rounded-2xl">
            <Testimonials />
          </div>
          <div className="flex pt-5 flex-col items-center justify-center">
            <p className="text-text-primary">
              Made by{" "}
              <span className="text-text-secondary drop-shadow-[0_0_14px_rgba(88,101,242,0.8)]">
                Goldinyan
              </span>
            </p>
            <p className="text-text-primary">© 2025 All rights reserved</p>
          </div>
        </div>
      </div>
    </div>
  );
}
