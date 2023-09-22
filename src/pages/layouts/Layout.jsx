import React from 'react'
import {Link } from "react-router-dom"
import logo from "../../assets/icons/getlinked-logo.svg"

const Layout = ({children}) => {
  return (
    <div>
        <header className="py-2 md:py-5  border-b border-b-[#ffffff2e] text-white translate-y-[-100%] animate-[slideDown_0.5s_0.3s_ease_forwards]">
        <nav className="container mx-auto flex justify-between items-center px-16">
          <div className="flex items-center">
                <Link to="#">
                <img className='w-28 h-12' src={logo} alt="GetLinked Ai Logo" />
                </Link>
          </div>
          <div className="flex justify-between items-center">
            <ul className="hidden md:flex items-center space-x-4 mr-40">
                <li className="pt-2 font-medium"><a href="#">Timeline</a></li>
                <li className="pt-2 font-medium"><a href="#">Overview</a></li>
                <li className="pt-2 font-medium"><a href="#">FAQs</a></li>
                <li className="pt-2 font-medium"><a href="#">Contact</a></li>
            </ul>
            <button className='px-5 py-2 bg-btnBgGrad rounded-[4px] hover:scale-95 hover:opacity-80'>Register</button> 
          </div>
        </nav>
      </header>
      <main>
        {children}
      </main>
    </div>
  )
}

export default Layout