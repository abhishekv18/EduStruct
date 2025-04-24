import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import axios from "axios";
import { setUser } from "../redux/authSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { FiLogOut } from "react-icons/fi";
const Navbar = () => {
  const dispatch=useDispatch();
  const navigate=useNavigate();
  const logoutHandler = async () => {
    try {
        const res = await axios.get('http://localhost:8000/api/user/logout', { withCredentials: true });
        if (res.data.success) {
            dispatch(setUser(null));
            navigate("/");
           
        }
    } catch (error) {
        console.log(error);
       
    }
}
  const user=useSelector((state)=>state.auth.user);
  return (


<nav class="bg-gray-800 sticky top-0 z-50">
<div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
  <div class="relative flex h-16 items-center justify-between">
    <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
      <button type="button" class="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:ring-2 focus:ring-white focus:outline-hidden focus:ring-inset" aria-controls="mobile-menu" aria-expanded="false">
        <span class="absolute -inset-0.5"></span>
        <span class="sr-only">Open main menu</span>
       
        <svg class="block size-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon">
          <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
        </svg>
       
        <svg class="hidden size-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon">
          <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
        </svg>
      </button>
    </div>
    <div class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
      <div class="flex shrink-0 items-center">
        <Link to="/">
        <h1 className="text-2xl font-bold text-white">EduStruct</h1>
        </Link>
      </div>
      <div class="hidden sm:ml-6 sm:block">
        <div class="flex space-x-4">   
          
         
        { 
  user ? (
    <div className="flex items-center gap-2">
      <Link to="/impact" class="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white hover:scale-105 transition-all duration-300 ">About Us</Link>
      <Link to="/map" class="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white hover:scale-105 transition-all duration-300 ">School Map</Link>
      <Link to="/compare" class="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white hover:scale-105 transition-all duration-300">Compare Schools</Link>
      <Link to="/contact" class="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white hover:scale-105 transition-all duration-300">Contact Us</Link>
      <Link to="/tracker" class="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white hover:scale-105 transition-all duration-300">Improvement Tracker</Link>
      <Link to="/form" class="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white hover:scale-105 transition-all duration-300">Classification Form</Link>
      <Link to="/solution" class="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white hover:scale-105 transition-all duration-300">Solution</Link>
    </div>
  ) : (
    <>
      <Link to="/impact" class="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white hover:scale-105 transition-all duration-300">About Us</Link>
      <Link to="/map" class="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white hover:scale-105 transition-all duration-300">School Map</Link>
      <Link to="/compare" class="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white hover:scale-105 transition-all duration-300">Compare Schools</Link>
      <Link to="/contact" class="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white hover:scale-105 transition-all duration-300">Contact Us</Link>
    </>
  )
}
        </div>
      </div>
    </div>
     <div className='flex items-center gap-4'>
                 {
                  user ? (
                    <div className="flex items-center justify-center gap-2">
                      <p className="text-red-500  font-bold">👋{user.fullname}</p>
                      <button className="border-2 border-red-500 rounded-full p-1 text-xl"> <FiLogOut className="text-white cursor-pointer" onClick={logoutHandler}/>  </button>
                       {/* <FiLogOut className="text-white cursor-pointer" onClick={logoutHandler}/>        */}
                  {/* <button variant="link" className="text-white cursor-pointer" onClick={logoutHandler}>Logout</button> */}
                    </div>
                  ):
                  (
                    <>
                     <a href="/login"> <button variant="outline" className="hover:text-[#a63030]  text-white cursor-pointer border-1 border-white px-2 py-1 bg-transparent rounded-md hover:scale-105 transition-all duration-300">Login</button></a>
                     <a href="/signup"> <button  className=" hover:text-[#a63030] text-white cursor-pointer border-1 border-white  py-1 px-1 rounded-md bg-transparent hover:scale-105 transition-all duration-300">Signup</button> </a>
                    </>
                  )
                 }
                
                
               </div>
  </div>
</div>


<div class="sm:hidden" id="mobile-menu">
  <div class="space-y-1 px-2 pt-2 pb-3">
  { 
  user ? (
    <div>
      <Link to="/impact" class="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white">About Us</Link>
      <Link to="/map" class="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white">School Map</Link>
      <Link to="/compare" class="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white ">Compare Schools</Link>
      <Link to="/contact" class="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Contact Us</Link>
      <Link to="/tracker" class="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Improvement Tracker</Link>
      <Link to="/form" class="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Classification Form</Link>
      <Link to="/solution" class="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Solution</Link>
    </div>
  ) : (
    <>
      <Link to="/impact" class="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white">About Us</Link>
      <Link to="/map" class="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white">School Map</Link>
      <Link to="/compare" class="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Compare Schools</Link>
      <Link to="/contact" class="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Contact Us</Link>
    </>
  )
}
  </div>
</div>
</nav>

  );
};

export default Navbar;