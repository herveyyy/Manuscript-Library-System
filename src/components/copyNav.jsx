


import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
function CStudentNavbar() {
  const navigate = useNavigate();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  }
  const handleClearLocalStorage = () => {
    localStorage.clear();
    // You can also use localStorage.removeItem('key') to remove specific items from localStorage
  }

  const handleLogout = () => {
    handleClearLocalStorage();
    navigate("/login");
  }

  return (
    <div className="flex">
  <nav className="flex items-center justify-between flex-wrap bg-red-900 p-2 absolute w-full">
    <div className="flex items-center flex-shrink-0 text-white mr-6">
      <img alt='logo' className="w-10 lg:10" src={"static/images/libraryLogo.png"} />
      <span className="font-bold">Manuscript Library System</span>
    </div>
    <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
      <div className="hidden lg:flex lg:flex-grow">
      </div>
      <div className="flex flex-col lg:flex-row justify-start lg:items-stretch">
        <div className="lg:hidden absolute top-4 right-4">
          <button
            onClick={toggleDropdown}
            className="flex items-center px-3 py-2 border rounded text-red-200 border-red-300 hover:text-white hover:border-white"
          >
            <svg className="w-3 h-3 fill-current" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 3h20v2H0V3zm0 7h20v2H0V10zm0 7h20v2H0v-2z" />
            </svg>
          </button>
        </div>
        <div className={`lg:flex ${isDropdownOpen ? 'block' : 'hidden'}`} style={{ minWidth: '200px' }}>
          <div className="lg:flex ">
          <a href="#" className="font-bold block py-2 mt-2 lg:mt-0 lg:border-b-0 text-white hover:text-white mr-4">
            Home
          </a>
          <a href="#" className="font-bold block py-2 lg:mt-0 text-white hover:text-white mr-4">
            News
          </a>
          <a href="#" className="font-bold block py-2 lg:mt-0 text-white hover:text-white  mr-4 ">
            About
          </a>
          <div className="font-bold block py-2 lg:mt-0 text-white hover:text-white mr-4 ">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 hover:cursor-pointer hover:border-2">
  <path stroke-linecap="round" stroke-linejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z" />
</svg>
</div>
          </div>
          <div className="flex justify-end">
          <div className="flex items-center flex-shrink-0 text-white ml-4 lg:ml-6">
            <img className="rounded-full h-8 lg:h-10 w-8 lg:w-10 mr-2" src={''} alt="Profile" />
            <div className="flex flex-col">
              <a href="#" className="block text-xs text-red-200 hover:text-white mr-1 lg:mr-2">
                {"HERVEY"}
              </a>
              <a href="#" className="block text-xs text-red-200 hover:text-white mr-1 lg:mr-2">
                {"HEHE@gmail.com"}
              </a>
            </div>
            </div>
          </div>
          <div className="mx-2 lg:mx-4"></div>
          <button
            onClick={handleLogout}
            className="block text-xs lg:text-sm text-red-200 hover:text-white px-2 py-1 lg:px-3 lg:py-2 rounded-md bg-yellow-500 font-bold"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  </nav>
</div>
  
  )
}

export default CStudentNavbar;

