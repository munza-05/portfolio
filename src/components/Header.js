import React, { useState } from 'react'

const Header = () => {
   const[logoName,setlogoName] =useState("Munaza Nasir");
 const[menuLinks, setmenuLinks] =  useState([
    {
        title:"Home",
        link:"/home",
        id:'1',
    },
    {
        title:"About",
        link:"/about",
        id:'2',
    },
    {
        title:"Skills",
        link:"/skills",
        id:'3',
    },
    {
        title:"Portfolio",
        link:"/portfolio",
        id:'4',
    },
    {
        title:"Contact",
        link:"/contact",
        id:'5',
    },
]);
 
const [actionButton, setactionButton]=useState(
    {
        title:"Hire me",
        link:"/hire-me",
    },
);
  return (
   <>
  <div className="main flex flex-col md:flex-row justify-between items-center border bg-gray-100 h-auto md:h-20 px-4 md:px-16 py-4 md:py-0">
  <div className="logo mb-4 md:mb-0">
    <h1 className="text-xl md:text-2xl font-bold">{logoName}</h1>
  </div>
  <div className="links flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6 mb-4 md:mb-0">

    {menuLinks.map((link)=>( 
        <a href={link.link} key={link.id} className="hover:text-orange-600">{link.title}</a>))}
  </div>
  <div className="btns">
    <a  href={actionButton.link} className="bg-orange-500 rounded-full px-4 py-2 text-lg">{actionButton.title}</a>
  </div>
</div>

   </>
  )
}

export default Header
