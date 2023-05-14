

import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import StudentNavbar from "../components/StudentNavbar";
import ManuscriptScreens from "../screens/ManuscriptsScreen";
function StudentPage(userData){
//get userCredential from local storage and transfer the data to userData

  return (
    <div className="bg-white dark:bg-stone-900 text-stone-900 dark:text-stone-300 min-h-screen font-inter overflow-auto">
    <div className="max-w-5xl w-11/12 mx-auto"></div>
    <div className="relative">
      <div className="z-20 absolute w-full">
        <StudentNavbar  className="z-99 absolute" userData={userData.userData}/>
      </div>
      <div className="absolute flex-row z-10 w-full md:top-56 top-24 ">
        <div className=" flex justify-center ">
        <img  className="w-20 sm:w-40 md:w-52 " src="/static/images/liceo.png"></img>
        </div>
        <label className="flex justify-center"><h1 className="text-white text-2xl font-bold sm:text-4xl lg:text-7xl">SEARCH MANUSCRIPTS</h1></label>
      </div>
      <div className="flex flex-col h-screen ">
        <div className="mt-1 sm:mt-5 md:mt-10 lg:mt-14"></div>
        <div className="flex items-center justify-center w-full bg-slate-600 h-5/6">
          <img src={"/static/images/LiceoBG.jpg"} className="object-cover w-full h-full blur-sm" alt="background" />
        </div>
        <div className="flex flex-col items-center justify-center relative bottom-14 lg:bottom-64">
          <input type="text" placeholder="Search" className="py-2 w-full max-w-md border-2 border-gray-400 rounded-md mb-4" />
          <button className="bg-red-500 text-white font-bold py-2 px-4 rounded-md">
            Search
          </button>
        </div>
          <ManuscriptScreens/>
      </div>
    </div>
  </div>

  );
}

export default StudentPage;

