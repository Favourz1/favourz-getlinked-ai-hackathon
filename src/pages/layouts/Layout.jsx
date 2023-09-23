import {Link } from "react-router-dom"
import logo from "../../assets/icons/getlinked-logo.svg"
import callIcon from "../../assets/icons/call.svg"
import locationIcon from "../../assets/icons/location.svg"
import instagram from "../../assets/icons/instagram.svg"
import twitter from "../../assets/icons/twitter.svg"
import facebook from "../../assets/icons/facebook.svg"
import linkedin from "../../assets/icons/linkedin.svg"

const Layout = ({children, showFooter= true}) => {
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
                <li className="pt-2 font-medium "><a className="bg-gradient-to-r from-purple-600 via-pink-500 to-purple-600 text-transparent" href="#">Contact</a></li>
            </ul>
            <button className='px-5 py-2 bg-btnBgGrad rounded-[4px] hover:scale-95 hover:opacity-80'>Register</button> 
          </div>
        </nav>
      </header>
      <main>
        {children}
      </main>
      {showFooter && <footer className="relative bg-getlinkedPurple pt-8 pb-6">
        <div className="container mx-auto px-16">
          <div className="flex flex-wrap text-left lg:text-left">
            <div className="w-full lg:w-6/12 px-4">
              <Link to="#">
                      <img className="w-28 h-12" src={logo} alt="GetLinked Ai Logo" />
              </Link>
              <h5 className="text-sm mt-0 mb-2 text-blueGray-600">GetLinked Tech Hackathon is a technology innovation program established  by a group of organizations with the aim of showcasing young and talented individuals in the field of technology.</h5>
              <div className="mt-6 lg:mb-0 mb-6">
                <div className="text-xs flex">
                  Terms of use &nbsp;<span className="text-primaryPink">|</span>&nbsp; Privacy Policy
                </div>
              </div>
            </div>
            <div className="w-full lg:w-6/12 px-4">
              <div className="flex flex-wrap items-top mb-6 md:justify-around">
                <div className="w-full lg:w-4/12 px-4">
                  <span className="block uppercase text-primaryPink text-sm font-semibold mb-2">Useful Links</span>
                  <ul className="list-unstyled mb-2">
                    <li>
                      <a className="hover:underline hover:underline-offset-1 font-medium block pb-2 text-xs" href="">Overview</a>
                    </li>
                    <li>
                      <a className="hover:underline hover:underline-offset-1 font-medium block pb-2 text-xs" href="">Timeline</a>
                    </li>
                    <li>
                      <a className="hover:underline hover:underline-offset-1 font-medium block pb-2 text-xs" href="">Register</a>
                    </li>
                    <li>
                      <a className="hover:underline hover:underline-offset-1 font-medium block pb-2 text-xs" href="">Free Products</a>
                    </li>
                  </ul>
                  <div className="flex items-center space-x-5">
                    <p className="text-xs text-primaryPink whitespace-nowrap">Follow us</p>
                    <img src={instagram} alt="" />
                    <img src={twitter} alt="" />
                    <img src={facebook} alt="" />
                    <img src={linkedin} alt="" />
                  </div>
                </div>
                <div className="w-full lg:w-4/12 px-4">
                  <span className="block uppercase text-primaryPink text-sm font-semibold mb-2">Contact Us</span>
                  <ul className="list-unstyled">
                    <li>
                      <a className="flex items-center font-medium pb-2 text-xs" href=""><img className="mr-2" src={callIcon} alt="" />+234 6707653444</a>
                    </li>
                    <li>
                      <a className="flex items-center font-medium pb-2 text-xs" href=""><img className="mr-2" src={locationIcon} alt="" />27, Alara Street Yaba 100012 Lagos State</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap items-center md:justify-between justify-center pt-6">
            <div className="w-full md:w-4/12 px-4 mx-auto text-center">
              <div className="text-sm text-blueGray-500 font-medium py-1">
                All rights reserved. © <span id="get-current-year">getlinked Ltd.</span>
              </div>
            </div>
          </div>
        </div>
      </footer>}
    </div>
  )
}

export default Layout