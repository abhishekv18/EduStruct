// import React from "react";
// import Navbar from "./Navbar";
// import Footer from "./Footer";
// const Contact = () => {
//   return (
//  <div className="bg-gray-100">
//     <Navbar/>
//     <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100 py-12 px-6  items-center justify-center">
//   <div className="absolute inset-x-0 top-[-10rem] -z-10  overflow-hidden blur-3xl sm:top-[-20rem]" aria-hidden="true">
//   </div>
//   <div className="mx-auto max-w-2xl text-center">
//     <h2 className="text-4xl font-semibold tracking-tight text-balance text-gray-900 sm:text-5xl">Contact Us</h2>
//   </div>
//   <form action="#" method="POST" className="mx-auto mt-16 max-w-xl sm:mt-20">
//     <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
//       <div>
//         <label for="first-name" className="block text-sm/6 font-semibold text-gray-900">First name</label>
//         <div className="mt-2.5">
//         <input  type="text" name="text" id="text"  required className   ="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6 border-amber-950"/>
//         </div>
//       </div>
//       <div>
//         <label for="last-name" className="block text-sm/6 font-semibold text-gray-900">Last name</label>
//         <div className="mt-2.5">
//         <input  type="text" name="text" id="text"  required className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"/>
//         </div>
//       </div>
//       <div class="sm:col-span-2">
//         <label for="email" className="block text-sm/6 font-semibold text-gray-900">Email</label>
//                 <div className="mt-2.5">
//         <input  type="email" name="email" id="email"  required className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"/>
//         </div>
//       </div>
//       <div className="sm:col-span-2">
//         <label for="phone-number" className="block text-sm/6 font-semibold text-gray-900">Phone number</label>
//         <div className="mt-2.5">
//           <div className="flex rounded-md bg-white outline-1 -outline-offset-1 outline-gray-300 :outline-2 has-[input:focus-within]:-outline-offset-2 has-[input:focus-within]:outline-indigo-600">
            
//             <input  type="phone" name="number" id="number" autocomplete="number" required className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"/>
//             </div>
//         </div>
//       </div>
//       <div className="sm:col-span-2">
//         <label for="message" className="block text-sm/6 font-semibold text-gray-900">Message</label>
//         <div className="mt-2.5">
//           <textarea name="message" id="message" rows="4" className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"></textarea>
//         </div>
//       </div>
      
//     </div>
//     <div className="mt-10">
//       <button type="submit" className="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Let's talk</button>
//     </div>
//   </form>
// </div>
// <Footer/>
//  </div>
//   );
// };

// export default Contact;

import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_71n7p1f",     // <-- Replace with your actual EmailJS service ID
      "template_fexaucs",    // <-- Replace with your template ID
      form.current,
      "46QbDP4d8fZhoY_Tq"      // <-- Replace with your public key
    )
    .then(
      (result) => {
        alert("Message sent successfully!");
        form.current.reset(); // Optional: clear the form
      },
      (error) => {
        alert("Something went wrong. Please try again.");
        console.error(error.text);
      }
    );
  };

  return (
    <div className="bg-gray-100">
      <Navbar/>
      <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100 py-12 px-6 items-center justify-center">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">Contact Us</h2>
        </div>

        <form ref={form} onSubmit={sendEmail} className="mx-auto mt-16 max-w-xl sm:mt-20">
          <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
            <div>
              <label className="block text-sm font-semibold text-gray-900">First name</label>
              <input type="text" name="first_name" required className="mt-2.5 block w-full rounded-md px-3 py-1.5 border text-gray-900 focus:outline-indigo-600" />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-900">Last name</label>
              <input type="text" name="last_name" required className="mt-2.5 block w-full rounded-md px-3 py-1.5 border text-gray-900 focus:outline-indigo-600" />
            </div>
            <div className="sm:col-span-2">
              <label className="block text-sm font-semibold text-gray-900">Email</label>
              <input type="email" name="user_email" required className="mt-2.5 block w-full rounded-md px-3 py-1.5 border text-gray-900 focus:outline-indigo-600" />
            </div>
            <div className="sm:col-span-2">
              <label className="block text-sm font-semibold text-gray-900">Phone</label>
              <input type="text" name="phone" required className="mt-2.5 block w-full rounded-md px-3 py-1.5 border text-gray-900 focus:outline-indigo-600" />
            </div>
            <div className="sm:col-span-2">
              <label className="block text-sm font-semibold text-gray-900">Message</label>
              <textarea name="message" rows="4" required className="mt-2.5 block w-full rounded-md px-3 py-2 border text-gray-900 focus:outline-indigo-600"></textarea>
            </div>
          </div>
          <div className="mt-10">
            <button type="submit" className="w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-white font-semibold shadow hover:bg-indigo-500 cursor-pointer ">Let's talk</button>
          </div>
        </form>
      </div>
      <Footer/>
    </div>
  );
};

export default Contact;
