
//create a navbar component react js tailwind
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
function CStudentNavbar() {
  const navigate = useNavigate();

  const handleClearLocalStorage = () => {
    localStorage.clear();
    // You can also use localStorage.removeItem('key') to remove specific items from localStorage
  }

  const handleLogout = () => {
    handleClearLocalStorage();
    navigate("/login");
  }

  return (
    <div>
    <nav className="flex items-center justify-between flex-wrap bg-red-900 p-2 absolute w-full">
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        <img alt='logo' className="w-10 lg:10" src="src\assets\libraryLogo.png" />
        <span className="font-bold">Manuscript Library System</span>
      </div>
      <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
        <div className="hidden lg:flex lg:flex-grow">
        </div>
        <div className="flex flex-col lg:flex-row items-center lg:items-stretch">
          <a href="#" className="font-bold block mt-2 lg:mt-0 text-red-200 hover:text-white mr-4">
            Home
          </a>
          <a href="#" className="font-bold block mt-2 lg:mt-0 text-red-200 hover:text-white mr-4">
            News
          </a>
          <a href="#" className="font-bold block mt-2 lg:mt-0 text-red-200 hover:text-white mr-4">
            About
          </a>
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
          <div className="mx-2 lg:mx-4"></div>
          <button
            onClick={handleLogout}
            className="block text-xs lg:text-sm text-red-200 hover:text-white px-2 py-1 lg:px-3 lg:py-2 rounded-md bg-yellow-500 font-bold"
          >
            Logout
          </button>
        </div>
      </div>
    </nav>
  </div>
  
  )
}

export default CStudentNavbar;

