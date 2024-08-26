import React, { useState } from 'react'
import bannerImage from "../assets/picccccccc.jpg"
const About = () => {
   const[data,setData]= useState({
        image:bannerImage,
        title:"Frontend Developer",
        para1:'>I am a passionate and skilled frontend developer with a strong foundation in building responsive   and interactive web applications With expertise in modern JavaScript frameworks such as React',
        para2:'I am a passionate and skilled frontend developer with a strong foundation in building responsive   and interactive web applications With expertise in modern JavaScript frameworks such as React',
      actionButton:{
        title:"Read More..",
        link: "/Read More",
      }
    });
    
  return (
    <div className="main-about   py-16 bg-gray-100">
       <h1 className="text-5xl pb-10 underline font-bold text-center">About me</h1>
       {/* content of About */}
       <div className="main-box flex items-center ">
         {/* left content */}
         <div className="about-img w-full flex justify-center">
         <img className="h-[300px] w-[300px] rounded-full shadow-lg" src={data.image}/>
         </div>
         {/* right content */}
         <div className="about-text w-full flex justify-center">
            <div className="w-2/3 space-y-5">
                <h1 className="text-5xl font-semibold">{data.title}</h1>
                <p>{data.para1}</p>
                <p>{data.para2}</p>
            <button className="px-3 py-2 text-2xl rounded-full shadow-lg bg-orange-500">{data.actionButton.title}</button>
            </div>
         </div>
       </div>
    </div>
  )
}

export default About
