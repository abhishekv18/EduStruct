import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { useState } from 'react'  
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { setLoading, setUser } from '../redux/authSlice'
const Login = () => {

const navigate=useNavigate();
const dispatch=useDispatch();
  const [input,setInput]=useState({
    email:"",
    password:""
   });
 
 const user=useSelector((state)=>state.auth.user);
   const handleChange=(e)=>{
     setInput({...input,[e.target.name]:e.target.value});
   }
 
const handleSubmit=async(e)=>{
  e.preventDefault();
  try {
    dispatch(setLoading(true));
    const res=await axios.post("http://localhost:8000/api/user/login",input, {
      headers: { 'Content-Type': "application/json" },
        withCredentials: true, 
    });
   // console.log(res);
   if(res.data.success){
    dispatch(setUser(res.data.user));
    navigate("/");
   }
  } catch (error) {
    console.log(error);
  }
  dispatch(setLoading(false));
 // console.log(input);

}
useEffect(()=>{
  if(user){
    navigate("/");
  }
},[]);

  return (
  
    <div>
          <Navbar/>
   


<div class="flex min-h-screen bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100 flex-col justify-center px-5 py-10 lg:px-7">
  <div class="sm:mx-auto sm:w-full sm:max-w-sm">
   
    <h2 class="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900">Login to your account</h2>
  </div>

  <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
    <form onSubmit={handleSubmit} class="space-y-6" >
      <div>
        <label for="email" class="block text-sm/6 font-medium text-gray-900">Email address:</label>
        <div class="mt-2">
       
        <input  type="email" value={input.email} onChange={handleChange} name="email" id="email"   placeholder="xyz@gmmail.com" required class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"/>
     
          {/* <input type="email" name="email" id="email" autocomplete="email" required class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"> */}
        </div>
      </div>

      <div>
        <div class="flex items-center justify-between">
          <label for="password" class="block text-sm/6 font-medium text-gray-900">Password</label>
          <div class="text-sm">
            <a href="#" class="font-semibold text-indigo-600 hover:text-indigo-500">Forgot password?</a>
          </div>
        </div>
        <div class="mt-2">
        <input  type="password" value={input.password} onChange={handleChange} name="password"  placeholder="****" id="password"  required class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"/>
          {/* <input type="password" name="password" id="password" autocomplete="current-password" required class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"> */}
        </div>
      </div>

      <div>
        <button type="submit"  class="flex w-full justify-center rounded-md cursor-pointer bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Login</button>
      </div>
    </form>

  </div>
</div>
<div >

</div>
<Footer />
    </div>
  )
}

export default Login