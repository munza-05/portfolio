import React from 'react'
import bannerBackground from "../assets/banner_wallpaper.svg";
const Expertise = () => {
  return (
    <div>
    <div className="main-expertise " >
        <h1 className="text-5xl font-bold text-center  underline">My Expertise</h1>
      <div className="exp-content items-center flex my-16 " style={{
      backgroundImage: `url(${bannerBackground})`,
      backgroundSize: "cover",
    }} >
        {/* expertise text content */}
       <div className="flex justify-center text-white my-5">
        <div className="w-2/3 text-center space-y-4">
        <h1 className="text-3xl font-bold">I love these technologies</h1>
        <p>I am a passionate and skilled frontend developer with a strong foundation in building responsive   and interactive web applications With expertise in modern JavaScript frameworks such as React</p>
          <button className="bg-orange-500 rounded-full shadow-lg px-3 py-2 text-2xl">Check</button>
          </div>
       </div>
       {/* expertise skills  */}
       <div className="flex justify-center " >
         <div className="skills justify-center w-2/3 h-fit flex space-x-3  flex-wrap">
          <p className="bg-slate-300 rounded-full px-3 py-2 mt-3 hover:bg-orange-500 cursor-pointer  w-fit">HTML5</p>
          <p className="bg-slate-300 rounded-full px-3 py-2 mt-3 hover:bg-orange-500 cursor-pointer w-fit">CSS</p>
          <p className="bg-slate-300 rounded-full px-3 py-2 mt-3 hover:bg-orange-500 cursor-pointer w-fit">Tailwind CSS</p>
          <p className="bg-slate-300 rounded-full px-3 py-2 mt-3 hover:bg-orange-500 cursor-pointer w-fit">JavaScript</p>
          <p className="bg-slate-300 rounded-full px-3 py-2 mt-3 hover:bg-orange-500 cursor-pointer w-fit">ES6</p>
          <p className="bg-slate-300 rounded-full px-3 py-2 mt-3 hover:bg-orange-500 cursor-pointer w-fit">React Js</p>
          <p className="bg-slate-300 rounded-full px-3 py-2 mt-3 hover:bg-orange-500 cursor-pointer w-fit">Ethical Hacking</p>
          <p className="bg-slate-300 rounded-full px-3 py-2 mt-3 hover:bg-orange-500 cursor-pointer w-fit">Cyber Security</p>
          <p className="bg-slate-300 rounded-full px-3 py-2 mt-3 hover:bg-orange-500 cursor-pointer w-fit">ES6</p>
          <p className="bg-slate-300 rounded-full px-3 py-2 mt-3 hover:bg-orange-500 cursor-pointer w-fit">React Js</p>
          <p className="bg-slate-300 rounded-full px-3 py-2 mt-3 hover:bg-orange-500 cursor-pointer w-fit">Ethical Hacking</p>
          <p className="bg-slate-300 rounded-full px-3 py-2 mt-3 hover:bg-orange-500 cursor-pointer w-fit">Cyber Security</p>
          <p className="bg-slate-300 rounded-full px-3 py-2 mt-3 hover:bg-orange-500 cursor-pointer  w-fit">HTML5</p>
          <p className="bg-slate-300 rounded-full px-3 py-2 mt-3 hover:bg-orange-500 cursor-pointer w-fit">CSS</p>
          <p className="bg-slate-300 rounded-full px-3 py-2 mt-3 hover:bg-orange-500 cursor-pointer w-fit">Tailwind CSS</p>
          <p className="bg-slate-300 rounded-full px-3 py-2 mt-3 hover:bg-orange-500 cursor-pointer w-fit">JavaScript</p>
         </div>
       </div>
      </div>
    </div>
    </div>
  )
}

export default Expertise
