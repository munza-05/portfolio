import React from 'react'

const Footer = () => {
  return (
    <div className="main-footer bg-gray-200 flex justify-between px-72">
     <div>
        <p>@2023 Munaza Nasir <span>All rights reserved</span></p>
        </div> 

     <div className="space-x-5">
        <a href="/about " className="hover:underline hover:text-blue-900">About</a>
        <a href="/privacy" className="hover:underline hover:text-blue-900">privacy Policy</a>
        <a href="/licensing" className="hover:underline hover:text-blue-900">Licensing</a>
        <a href="/contact" className="hover:underline hover:text-blue-900">Contact</a>
     </div>
    </div>
  )
}

export default Footer
