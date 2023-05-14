import React from "react";
import CStudentNavbar from "../components/copyNav";
import Manuscript from "../components/Manuscript";
import LiceoBG from '../assets/LiceoBG.jpg';

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
              <img src="src\assets\LiceoBG.jpg" className="object-cover w-full h-full blur-sm" alt="background" />
            </div>
            <div className="flex flex-col items-center justify-center relative bottom-20 lg:bottom-64">
              <input type="text" placeholder="Search" className="py-2 w-full max-w-md border-2 border-gray-400 rounded-md mb-4" />
              <button className="bg-red-500 text-white font-bold py-2 px-4 rounded-md">
                Search
              </button>
            </div>
            <div className="flex-grow flex items-center justify-center">
              <div className="flex-row ">
                <div className="">
                  <label className="font-bold text-3xl ">NEWLY ADDED MANUSCRIPTS</label>
                </div> 
                <div className="flex my-2 justify-end gap-1">
                    <div>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 hover:border-2 ">
  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" />
</svg>
                    </div>
                    <div className="font-bold border-r-2 border-gray-700"></div>
                    <div>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 hover:border-2 ">
  <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zM3.75 12h.007v.008H3.75V12zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm-.375 5.25h.007v.008H3.75v-.008zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
</svg>

                    </div>
                        </div> 
                <div className="flex justify-center items-center my-10">
                  <Manuscript  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
	

       );
}

export default PlayGround;