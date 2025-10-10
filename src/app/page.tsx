import './globals.css'
import Profile from './profile';
import Services from './services';

export default function Home() {
  return (
    <div className="w-full h-full bg-bg-black">
      <div className="w-full h-full  flex flex-col items-center  gap-5 justify-center">
        <div className="mt-10">
           <Profile />
        </div>
       
       <div className="mb-40">
           <Services />
        </div>
        


      </div>
    </div>
  );
}