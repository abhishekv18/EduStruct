import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { setLoading } from '../redux/authSlice'
const Signup = () => {

const navigate=useNavigate();
const dispatch=useDispatch();

  const [input,setInput]=useState({
   fullname:"",
   phoneNumber:"",
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
    const res=await axios.post('http://localhost:8000/api/user/register',input, {
      headers: { 'Content-Type': "application/json" },
        withCredentials: true, 
    });
    console.log(res);
   if(res.data.success){
    navigate("/login");
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
},[])
  return (
  
    <div>
          <Navbar/>
       {/* <div className='flex items-center justify-center max-w-7xl mx-auto'>
        <form  className='w-1/2 border border-gray-600 rounded-md p-4 my-10'>
          <h1 className='font-bold text-xl mb-5'>Login</h1> 
        
          <div className='my-2'>
            <label>Email</label>
          <input
          type="email"
          placeholder="xyz@gmail.com"
         
          name="email"
          
          />
          </div>
        
          <div className='my-2'>
            <label>Password</label>
          <input
          type="password"
          placeholder="****"
          
          name="password"
          
          />
          </div>

          <div className='flex items-center justify-between'>
          
      

          </div>
          
                <button type="submit" className="w-full my-4">Login</button>
                    
          
          <span>Don't have an account?<Link to='/signup' className='text-blue-600 text-sm'> Signup</Link></span>
        </form>
      </div> */}


<div class="flex min-h-screen flex-col bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100 justify-center px-6 py-12 lg:px-8">
  <div class="sm:mx-auto sm:w-full sm:max-w-sm">
   
    <h2 class="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900">Sign up to your account</h2>
  </div>

  <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
    <form class="space-y-6" onSubmit={handleSubmit}>
    <div>
        <label for="fullname" class="block text-sm/6 font-medium text-gray-900">Full Name:</label>
        <div class="mt-2">
       
        <input  type="text" name="fullname" value={input.fullname}  placeholder="xyz" onChange={handleChange} id="fullname" autocomplete="fullname" required class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"/>
     
          {/* <input type="email" name="email" id="email" autocomplete="email" required class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"> */}
        </div>
      </div>
      <div>
        <label for="phone" class="block text-sm/6 font-medium text-gray-900">Phone Number:</label>
        <div class="mt-2">
       
        <input  type="phone" name="phoneNumber" value={input.phone}  placeholder="9876543210" onChange={handleChange} id="phone" autocomplete="phone" required class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"/>
     
          {/* <input type="email" name="email" id="email" autocomplete="email" required class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"> */}
        </div>
      </div>
      <div>
        <label for="email" class="block text-sm/6 font-medium text-gray-900">Email address:</label>
        <div class="mt-2">
       
        <input  type="email" name="email" value={input.email}  placeholder="xyz@gmail.com" onChange={handleChange} id="email" autocomplete="email" required class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"/>
     
          {/* <input type="email" name="email" id="email" autocomplete="email" required class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"> */}
        </div>
      </div>

      <div>
        <div class="flex items-center justify-between">
          <label for="password" class="block text-sm/6 font-medium text-gray-900">Password</label>
        </div>
        <div class="mt-2">
        <input  type="password" name="password" value={input.password}  placeholder="****" onChange={handleChange} id="password"  required class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"/>
          {/* <input type="password" name="password" id="password" autocomplete="current-password" required class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"> */}
        </div>
      </div>

      <div>
        <button type="submit"  class="flex w-full justify-center rounded-md cursor-pointer bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Signup</button>
      </div>
    </form>

  </div>
</div>

<Footer />


    </div>
  )
}

export default Signup
