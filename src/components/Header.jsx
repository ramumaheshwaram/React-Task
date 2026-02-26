import React from 'react'
import { NavLink } from 'react-router-dom'
import '../../src/index.css'
import './Header.css'
import { useState } from 'react'
import { useLocation } from 'react-router-dom'

export const Header = () => {
  const location = useLocation();

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCompany, setIsCompany] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const isHome = location.pathname === "/";

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  }

  return (
    <header  >
      <div className='header-container shadow-3xl'>
        <div className='bg-primary h-11 w-full flex top-header '>
          <div className='bg-primary max-w-[1320px] mx-auto flex justify-between p-4 w-full items-center'>
            <div className='flex justify-between gap-10 '>
              <a href="https://maps.google.com/maps?q=%20Al%20Khabaisi%20-%20Dubai%20&t=m&z=14&iwloc=near" className='flex gap-3 items-center text-white  '>
                <img src="svgviewer-png-output (3).png" alt="location" className=' w-[14px] h-auto ' />
                <span className=' text-[13px] location'>Location: Al Khabaisi - Dubai</span>
              </a>
              <a href="mailto:info@arabfalcondubai.ae" className='flex gap-3 items-center text-white '>
                <img src="svgviewer-png-output (1) (1).png" alt="location" className=' w-[14px] h-auto ' />
                <span className=' text-[13px] mail'>Email: info@arabfalcondubai.ae</span>
              </a>
            </div>
            <div className='flex justify-center'>
              <a href="tel:043976492,043976490" className='flex gap-3 items-center text-white '>
                <img src="svgviewer-png-output (2) (1).png" alt="location" className=' w-[14px] h-auto ' />
                <span className=' text-[13px] phone'>Phone: 04 3976492, 04 3976490</span>
              </a>
            </div>
          </div>
        </div>
        <div className={`main-header bg-transprent  w-full pl-13 flex justify-start items-center gap-10 h-28 z-10 max-md:h-20
         ${isHome ? "header-home" : "header-inner"} `}>
          <div className='max-sm-w-full'>
            <a href="/">
              <img
                src={isHome ? "/logo.png" : "/logo.png"}
                alt="logo"
                className="w-50 sm-w-10 h-auto"
              />
            </a>

          </div>
          <div className='w-full '>
            <nav className="w-full max-[100%] flex justify-center  max-[1240px]:hidden ">
              <ul className="flex justify-between">
                <li>
                  <NavLink
                    to="/"
                    className={`nav-link ${!isHome ? "nav-dark" : ""}`}
                  >
                    Home
                  </NavLink>
                </li>

                <li
                  className="relative"
                  onMouseEnter={() => setIsCompany(true)}
                  onMouseLeave={() => setIsCompany(false)}
                >
                  <span className={`nav-link font-semibold text-base1 block cursor-pointer ${!isHome ? "nav-dark" : ""}`}>
                    Company ▾
                  </span>

                  {isCompany && (
                    <ul className="absolute left-0  bg-white shadow-lg min-w-[180px] ">
                      <li className="px-4 py-2 hover:bg-gray-100">
                        <NavLink to="/about">About Us</NavLink>
                      </li>
                      <li className="px-4 py-2 hover:bg-gray-100">
                        <NavLink to="/safety">Safety</NavLink>
                      </li>
                      <li className="px-4 py-2 hover:bg-gray-100">
                        <NavLink to="/careers">Careers</NavLink>
                      </li>
                    </ul>
                  )}
                </li>
                <li
                  className="relative"
                  onMouseEnter={() => setIsServicesOpen(true)}
                  onMouseLeave={() => setIsServicesOpen(false)}
                >
                  <span className={`nav-link font-semibold text-base1 block cursor-pointer ${!isHome ? "nav-dark" : ""}`}>
                    Services ▾
                  </span>

                  {isServicesOpen && (
                    <ul className="absolute left-0 bg-white shadow-lg min-w-[180px] z-50">
                      <li className="px-4 py-2 hover:bg-gray-100">
                        <NavLink to="/school-transportation">School Transportation</NavLink>
                      </li>
                      <li className="px-4 py-2 hover:bg-gray-100">
                        <a href="staff.html">Staff Transportation</a>
                      </li>
                      <li className="px-4 py-2 hover:bg-gray-100">
                        <a href="hotel.html">Hotel Transportation</a>
                      </li>
                      <li className="px-4 py-2 hover:bg-gray-100">
                        <a href="passenger.html">Passenger Transportation</a>
                      </li>
                    </ul>
                  )}
                </li>

                <li>
                  <NavLink to="/contact" className={`nav-link ${!isHome ? "nav-dark" : ""}`}>
                    Contact
                  </NavLink>
                </li>
              </ul>


            </nav>
          </div>
          {/* Hamburger / Close Button */}
          <div className="hidden max-[1240px]:flex ml-auto justify-end items-center p-4 bg-primary w-[120px] top-0 mt-[-40px]">
            <button
              onClick={toggleMenu}
              className="text-white text-2xl bg-primary border-none cursor-pointer"
            >
              {isMenuOpen ? "✖" : "☰"}
            </button>
          </div>

          {/* Mobile Menu */}
          <div
            className={` md:display-none
                           fixed bottom-0 left-0 w-full bg-white text-white
                            transform transition-transform duration-300 ease-in-out
                            max-[1240px]:block
                             ${isMenuOpen ? "translate-y-0" : "translate-y-full"}
                           `}
          >
            <ul className="flex flex-col gap-5 p-6 text-sm">
              <li className='hero-li'>
                <NavLink
                  href="/"
                  onClick={() => setIsMenuOpen(false)}
                  className="hover:text-gray-300"
                >
                  Home
                </NavLink>
                <li
                  className="relative"
                  onMouseEnter={() => setIsCompany(true)}
                  onMouseLeave={() => setIsCompany(false)}
                >
                  <span className={`nav-link font-semibold text-base1 block cursor-pointer ${!isHome ? "nav-dark" : ""}`}>
                    Company ▾
                  </span>

                  {isCompany && (
                    <ul className="absolute left-0  bg-white shadow-lg min-w-[180px] ">
                      <li className="px-4 py-2 hover:bg-gray-100">
                        <NavLink to="/about"
                          onClick={() => setIsMenuOpen(false)}
                        >About Us</NavLink>
                      </li>
                      <li className="px-4 py-2 hover:bg-gray-100">
                        <NavLink to="/safety"
                          onClick={() => setIsMenuOpen(false)}
                        >Safety</NavLink>
                      </li>
                      <li className="px-4 py-2 hover:bg-gray-100">
                        <NavLink to="/careers"
                          onClick={() => setIsMenuOpen(false)}>Careers</NavLink>
                      </li>
                    </ul>
                  )}
                </li>
              </li>
            </ul>
          </div>

        </div>
      </div>



    </header >
  )
}
