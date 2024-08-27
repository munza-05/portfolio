import React from 'react'
 import bannerImage from "../assets/picccccccc.jpg"
 import bannerBackground from "../assets/banner_wallpaper.svg";
const Banner = () => {
    
    
  return (
    <div className="main-banner flex items-center"  style={{
      backgroundImage: `url(${bannerBackground})`,
      backgroundSize: "cover",
    }}>
      <div  className="  ban-text w-full flex justify-center text-white py-10 "  >
        <div className="w-2/3  ms-10"  >
        <h3 className=" mt-3 text-2xl font-semibold">Hi, I am</h3>
        <h1 className="mt-3 text-5xl font-bold">Munaza Nasir</h1>
        <h2 className="mt-2 text-2xl">And I am a frontend developer</h2>
        <p className="mt-3">I am a passionate and skilled frontend developer with a strong foundation in building responsive  
            and interactive web applications With expertise in modern JavaScript frameworks such as React </p>
            <div className="icon-container flex space-x-5">
             <a className="w-14 h-14 rounded-full justify-center items-center flex bg-gray-950 text-white  px-2 py-2 text-4xl ">
             <i class="fa-brands fa-facebook"></i>
             </a>
             <a className="w-14 h-14 rounded-full justify-center items-center flex   bg-gray-950 text-white  px-2 py-2 text-4xl ">
             <i class="fa-brands fa-square-instagram"></i>
             </a>
             <a className="w-14 h-14 rounded-full justify-center items-center flex  bg-gray-950 text-white  px-2 py-2 text-4xl">
             <i class="fa-brands fa-whatsapp"></i>
             </a>
             <a className="w-14 h-14 rounded-full justify-center items-center flex  bg-gray-950 text-white  px-2 py-2 text-4xl ">
             <i class="fa-brands fa-linkedin"></i>
             </a>
            </div>
          <a href="/contact"  className=" mt-5 inline-block px-5 py-3 bg-orange-500 shadow-lg rounded-full ">Contact Me</a>
      </div>
      </div>
      <div className="ban-img  w-full flex justify-center ">
        <img className="h-[300px] w-[300px] rounded-full shadow-lg my-2" src={bannerImage}/>
      </div>
    </div>
  )
}

export default Banner
