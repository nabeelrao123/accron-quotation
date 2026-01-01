import { useState } from "react";
import logo from '../assets/logo.png'
import profilepic from '../assets/profilepic.png'
const Navbar = (props) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  console.log(props.menuItems)
  return (
    <nav className="relative bg-white">
      <div className="mx-auto max-w-[95%] px-1 sm:px-3  xl:px-6">
        <div className="relative flex h-16 items-center justify-between">

          {/* Mobile menu button */}
          <div className="absolute inset-y-0 left-0 flex items-center lg:hidden">
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="inline-flex items-center justify-center rounded-md p-2
               text-[#737A91]  hover:text-[#737A91] focus:outline-none"
            >
              {!mobileOpen ? (
                <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
              ) : (
                <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>

          {/* Logo + Links */}
          <div className="flex flex-1 items-start justify-start px-11 lg:px-0 sm:items-stretch sm:justify-start">
            <div className="flex items-center">
              <img
                className="h-8 w-auto"
                // src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=500"
                alt="Logo"
                src={logo}
              />
              {/* <span className="ml-3 hidden text-xl font-semibold text-white sm:block">Brand</span> */}
            </div>

            {/* Desktop Menu */}
            <div className="hidden lg:ml-8 lg:flex items-center  md:space-x-4 xl:space-x-6 ">

              {props?.menuItems.map((cval,index) => {
                return (<>
                  <a key={index} className={`${cval.label == 'Find Jobs' ?
                   "py-2 font-ngh text-base font-bold text-[#0154AA]   leading-[1] tracking-[0%] hover:text-[#0154AA] " : 
                   "py-2 md:text-sm xl:text-[15px] hover:text-[#0154AA] font-normal text-[#737A91] font-ngh  leading-[1] tracking-[0%]"}`}
                    href="#"
                  >
                    {cval.label}
                  </a>
                </>)
              })
            }

            </div>
          </div>

          {/* Right section */}
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto xl:ml-6 sm:pr-0">

            {/* Desktop Search - Shows on medium screens and above */}
            <div className="hidden xl:block xl:mr-4 ">
              <div className="relative">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                  <svg className="h-4 w-4 text-[#737A91]" fill="none" stroke="currentColor" 
                  strokeWidth="1.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                  </svg>
                </div>
                <input
                  type="search"
                  className="block w-40 lg:w-56 rounded-md font-nhg 
                  font-normal border-0 bg-[#F6F9FF] py-1.5 pl-10 pr-3 
                  text-white placeholder:text-[#737A91] focus:bg-white/10 focus:ring-2 focus:ring-inset focus:ring-white sm:text-sm sm:leading-6"
                  placeholder="Search"
                />
              </div>
            </div>

            {/* Tablet Search - Simplified search icon/button */}
           <div className="block xl:hidden mr-3">
              <button
                onClick={() => setSearchOpen(!searchOpen)}
                className="inline-flex items-center justify-center rounded-md p-2 text-[#737A91]
                  hover:text-[#737A91] focus:outline-none"
              >
                <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                </svg>
              </button>
            </div>

            {/* Mobile Search Toggle Button - Only on small screens */}
            {/* <button
              onClick={() => setSearchOpen(!searchOpen)}
              className="sm:hidden inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-white/5 hover:text-white focus:outline-none"
            >
              <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
              </svg>
            </button> */}

            {/* Apply Now Button - Hidden on small screens, shown on medium and up */}
            <button className="hidden md:inline-flex items-center rounded-md
             bg-[#0154AA] font-ngh px-4 py-2 text-sm font-normal
              text-white shadow-sm hover:bg-indigo-500 
              focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 mr-3 lg:mr-4">
              Resume Builder
            </button>





            {/* Tablet Apply Button - Smaller on tablet screens */}
            <button className="hidden sm:inline-flex md:hidden items-center rounded-md bg-[#0154AA] px-3 py-1.5
             text-sm font-ngh font-normal text-white 
             shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 mr-3">
              Resume Builder
            </button>

            {/* Profile Dropdown */}
            <div className="relative">
              <button
                // onClick={() => setProfileOpen(!profileOpen)}
                className="flex rounded-full focus:outline-none"
              >
                <img
                  className="h-8 w-8 rounded-full"
                  // src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e"
                  alt="profile"
                  src={profilepic}
                />
              </button>

              {/* {profileOpen && (
                <div className="absolute right-0 z-10 mt-2 w-48 rounded-md bg-white py-1 shadow-lg">
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    Your Profile
                  </a>
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    Settings
                  </a>
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    Sign out
                  </a>
                </div>
              )} */}
            </div>
          </div>
        </div>
      </div>

      {/* Tablet Search Bar - Shows when search is toggled on tablet */}
      {searchOpen && (
        <div className="block xl:hidden px-4 pt-3 pb-3 border-t border-gray-700">
          <div className="relative">
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
              <svg className="h-4 w-4 text-gray-400" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
              </svg>
            </div>
            <input
              type="search"
              className="block w-full font-nhg font-normal rounded-md border-0 bg-[#F6F9FF] py-2 pl-10 pr-3 text-[#737A91] placeholder:[#737A91] focus:bg-white/10 focus:ring-2 focus:ring-inset focus:ring-white sm:text-sm"
              placeholder="Search"
              autoFocus
            />
          </div>
        </div>
      )}

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden px-2 pt-2 pb-3 space-y-1 border-t border-gray-700">
                {['Find Jobs', 'Top Companies', 'Job Tracker', 'My Calender', 'Documents', 'Messages', 'Notifications'].map((cval,index) => {
                return (<>
                  <a key={index}  className={`${cval == 'Find Jobs' ?
                   " block  text-[15px] rounded-md  px-3 py-2 font-bold text-[#0154AA] font-ngh  leading-[1] tracking-[0%] hover:text-[#0154AA]"
                    : " block py-2 rounded-md  px-3 text-[15px] font-normal hover:text-[#0154AA] text-[#737A91] font-ngh  leading-[1] tracking-[0%]"}`}
                    href="#"
                  >
                    {cval}
                  </a>
                </>)
              })
              }
          
          
          
          
          
          
          
          
          
          {/* <a className="block rounded-md bg-gray-900 px-3 py-2 text-base font-medium text-white" href="#">
            Dashboard
          </a>
          <a className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-white/5 hover:text-white" href="#">
            Team
          </a>
          <a className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-white/5 hover:text-white" href="#">
            Projects
          </a>
          <a className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-white/5 hover:text-white" href="#">
            Calendar
          </a> */}


          {/* Mobile Apply Now Button - In menu for small screens */}
          <button className="w-full mt-4 inline-flex items-center justify-center
           rounded-md bg-[#0154AA] font-ngh  px-4 py-2.5 text-sm font-normal text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
         Resume Builder
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;


