import React from "react";
import Manuscript from "../components/Manuscript";

function ManuscriptScreens() {
    return (
    <>
    <div className="flex my-2 justify-end gap-1 mx-10">
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
        <div className="flex-grow flex items-center justify-center">
        <div className="flex-row ">
          <div className="">
            
            
            {/*Newly added Manuscripts */}
            <label className="flex justify-center font-bold text-2xl w-full lg:text-3xl lg:justify-start">NEWLY ADDED MANUSCRIPTS</label>
          </div> 
          
          <div className="flex-col justify-center items-center my-10">
            <Manuscript />
          </div>
        </div>
      </div>
      <div className="flex-grow flex items-center justify-center">
        <div className="flex-row ">
          <div className="">
            {/*Top Borrowed Manuscripts */}
            <label className="flex justify-center font-bold text-2xl w-full lg:text-3xl lg:justify-start">TOP BORROWED MANUSCRIPTS</label>
          </div> 
         
          <div className="flex-col justify-center items-center my-10">
            <Manuscript />
          </div>
        </div>
      </div>
      </>
        );
}

export default ManuscriptScreens;