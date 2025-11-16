import './globals.css'
import Profile from './profile'
import Services from './services'
import LittleStuff from './littleStuff'
import WorkTogether from './workTogether';
import Projects from './projects';
import TechStack from './techStack';

export default function Home() {
  return (
    <div className="w-full h-full bg-bg-black overflow-y-hidden overflow-x-hidden">
      <div className="w-full h-full grid gap-4 grid-cols-1 lg:grid-cols-2 p-4">

        <div className="w-full p-2 rounded-2xl">
           <Profile />
        </div>
       
       <div className="w-full p-2 rounded-2xl">
           <Services />
        </div>

       <div className="w-full p-2 rounded-2xl">
           <Projects />
        </div>
        
       <div className='w-full p-2 rounded-2xl'>
        <TechStack />
       </div>
        
        <div className="w-full p-2 rounded-2xl">
          <LittleStuff />
        </div>
        <div className="w-full p-2 rounded-2xl">
           <WorkTogether />
        </div>




      </div>
    </div>
  );
}