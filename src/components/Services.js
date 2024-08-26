import React from 'react'

const Services = () => {
  return (
    <div className="main-serv py-14">
        <h1 className="text-5xl font-bold underline text-center">My Services</h1>
        <div className="serv-boxes flex space-x-3 mt-10">
         <div className=" cursor-pointer hover:bg-slate-100 serv1 space-y-4 shadow-lg rounded-xl bg-slate-200 p-5 text-center">
         <i class=" text-5xl fa-brands fa-react " ></i>
           <h1 className="text-4xl">Web Development</h1>
           <p>I am a passionate and skilled frontend developer with a strong foundation in building responsive   and interactive web applications With expertise in modern JavaScript frameworks such as React</p>
            <button  className="text-2xl rounded-full shadow-lg bg-orange-500 px-3 py-2">Check</button>
         </div>
         <div className="cursor-pointer hover:bg-slate-100 serv1 space-y-4 shadow-lg rounded-xl bg-slate-200 p-5 text-center">
         <i class=" text-5xl fa-brands fa-react " ></i>
           <h1 className="text-4xl">Web Development</h1>
           <p>I am a passionate and skilled frontend developer with a strong foundation in building responsive   and interactive web applications With expertise in modern JavaScript frameworks such as React</p>
            <button  className="text-2xl rounded-full shadow-lg bg-orange-500 px-3 py-2">Check</button>
         </div>
         <div className="cursor-pointer hover:bg-slate-100 serv1 space-y-4 shadow-lg rounded-xl bg-slate-200 p-5 text-center">
         <i class=" text-5xl fa-brands fa-react " ></i>
           <h1 className="text-4xl">Web Development</h1>
           <p>I am a passionate and skilled frontend developer with a strong foundation in building responsive   and interactive web applications With expertise in modern JavaScript frameworks such as React</p>
            <button  className="text-2xl rounded-full shadow-lg bg-orange-500 px-3 py-2">Check</button>
         </div>
        </div>
      
    </div>
  )
}

export default Services
