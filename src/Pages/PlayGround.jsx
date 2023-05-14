import React from "react";
import CStudentNavbar from "../components/copyNav";
import Manuscript from "../components/Manuscript";
import ManuscriptScreens from "../screens/ManuscriptsScreen";
function PlayGround() {
    return (
        <div className="bg-white dark:bg-stone-900 text-stone-900 dark:text-stone-300 min-h-screen font-inter">
        <div className="max-w-5xl w-11/12 mx-auto"></div>
        <div className="relative">
          <div className="z-10 absolute w-full">
             {/* <StudentNavbar userData={userData.userData}/> */}
             <CStudentNavbar/>
          </div>
          <div className="flex flex-col h-screen overflow-auto">
            <div className="mt-14"></div>
            <div className="flex items-center justify-center w-full bg-slate-600 h-5/6">
              <img src={"/static/images/LiceoBG.jpg"} className="object-cover w-full h-full blur-sm" alt="background" />
            </div>
            <div className="flex flex-col items-center justify-center relative bottom-20 lg:bottom-64">
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

export default PlayGround;