import React from 'react'
import { Mail, Phone, MapPin, ArrowRight } from 'lucide-react';
import { NavLink } from 'react-router-dom'
import './Footer.css'


export const Footer = () => {
  return (
    <div >
    <footer className="bg-[#2e3192] text-white py-16 px-8 font-sans relative">
      <div className=" max-w-7xl mx-auto flex flex-col md:flex-row">

        <div className='center-left'>
         <div className='cms-moving cms-moving-3'>

        </div>
        </div>
       

        {/* About Us Section */}
        <div className="space-y-6 md:w-[35%]">
          <h3 className="text-xl font-bold text-white">About Us</h3>
          <p className="text-sm leading-relaxed opacity-90">
            Specialist in <br />
            School Transportation & Staff Transportation
          </p>
          <div className="space-y-4 text-sm ">
            <div className="flex items-start gap-3">
              <Mail size={18} className="mt-0.5" />
              <a href="mailto:info@arabfalcondubai.ae" className="hover:underline text-white">info@arabfalcondubai.ae</a>
            </div>
            <div className="flex items-start gap-3">
              <Phone size={18} className="mt-0.5" />
              <span>04 3976492, 04 3976490</span>
            </div>
            <div className="flex items-start gap-3">
              <MapPin size={18} className="mt-0.5" />
              <span>Al Khabaisi - Dubai - United Arab Emirates</span>
            </div>
          </div>
        </div>

        {/* Quick Links Section */}
        <div className="space-y-6 md:w-[18%] ">
          <h3 className="text-xl font-bold text-white">Quick Links</h3>
           <ul className="flex justify-between flex-col gap-3 footer-nav">
                <li>
                  <NavLink to="/" className="nav-link">
                    Home
                  </NavLink>
                </li>

                <li>
                  <NavLink to="/about" className="nav-link">
                    About
                  </NavLink>
                </li>

                <li>
                  <NavLink to="/services" className="nav-link">
                    Services
                  </NavLink>
                </li>

                <li>
                  <NavLink to="/contact" className="nav-link">
                    Contact
                  </NavLink>
                </li>
              </ul>
        </div>

        {/* Services Section */}
        <div className="space-y-6 md:w-[18%] ">
          <h3 className="text-xl font-bold  text-white">Services</h3>
       <ul className="flex justify-between flex-col gap-3">
                <li>
                  <NavLink to="/" className="nav-link">
                    School Transportation
                  </NavLink>
                </li>

                <li>
                  <NavLink to="/about" className="nav-link">
                    Staff Transportation
                  </NavLink>
                </li>

                <li>
                  <NavLink to="/services" className="nav-link">
                    Hotel Transportation
                  </NavLink>
                </li>

                <li>
                  <NavLink to="/contact" className="nav-link">
                    Passenger Transportation
                  </NavLink>
                </li>
              </ul>
        </div>

        {/* Newsletter Section */}
        <div className="space-y-6 md:w-[18%]  text-white">
          <h3 className="text-xl font-bold  text-white">Newsletter</h3>
          <p className="text-sm leading-relaxed opacity-90">
            Sign up for industry alerts, deals, news and insights from Rapido company.
          </p>
          <div className="flex items-stretch bg-[#0a0e27] p-1 rounded-sm">
            <input
              type="email"
              placeholder="Email address"
              className="bg-transparent border-none text-white px-4 py-3 w-full focus:ring-0 outline-none text-sm"
            />
            <button className="bg-white text-[#2e3192] px-4 flex items-center justify-center transition-hover hover:bg-gray-200">
              <ArrowRight size={20} />
            </button>
          </div>
        </div>

      </div>   
    </footer>
       <div className='flex justify-between justify-center'>
        <div className='md:max-w-[1320px] flex justify-between w-full pt-5'>
          <div>
            <p>©2025 Arab Falcon Bus Rental LLC, All Rights Reserved. </p>
          </div>
          <div>
            <a href="#">
              Back To Top
            </a>
          </div>
        </div>    
      </div>
      </div>
  )
}
