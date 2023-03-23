

function Login() {
    return (
    <div className ="relative h-screen overflow-hidden bg-black">
       <img className="absolute z-0 object-cover w-full h-full blur-sm" src="src\assets\libraryBG.jpg"/>
        <img className="fixed z-20 left-12 top-4 w-36" src="src\assets\libraryLogo.png"/>
        {/**Login Form */}
        <div className="container relative z-10 flex flex-col items-center w-[50vh] py-14 mx-auto top-28 border-gray-900 bg-red-900 rounded-lg md:my-32 shadow-2xl">
       <div className=" flex flex-col items-center">
       <img className="w-32 my-6" src="src\assets\liceo.png"/>
       <button className="px-16 py-2 rounded-md bg-yellow-500 my-5 mb-14"><img className="w-6" src="src\assets\google.svg"></img></button>
       <p className=" text-slate-200 text-lg">Use your university email to login.</p>
       </div>
        </div>
        <div className="absolute inset-0 bg-black opacity-25">
        </div>
     
        <div className=" text-center fixed bottom-0 w-full">
      <div className="pt-3 border-1 justify-center -py-2 bg-red-900">
      <p className="text-xs pb-2 opacity-50 text-white">
                &copy; {new Date().getFullYear()} Liceo de Cagayan University.
                 All rights reserved.
            </p>
        </div>
       
        </div>
        
    </div>  );
}
export default Login;