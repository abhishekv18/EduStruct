// import React, { useEffect } from "react";
// import LocomotiveScroll from "locomotive-scroll";
// import "locomotive-scroll/dist/locomotive-scroll.css";
// import Navbar from './Navbar';
// import Footer from './Footer';
// import { FaRobot, FaChartLine, FaSchool, FaCheckCircle } from "react-icons/fa";

// const Home = () => {
 

//   return (
//     <div>
//       <Navbar />
//       <div >
//         {/* Hero Section */}
//         <section className="h-[60vh] flex flex-col justify-center items-center bg-gradient-to-br from-indigo-900 via-purple-800 to-blue-700 text-white text-center relative overflow-hidden animate-fade-in">
//           <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-2 animate-bounce">EduStruct</h1>
//           <p className="text-2xl font-semibold md:text-lg max-w-xl px-4 animate-slide-up">
//           From Odd to Outstanding — One School at a Time.
//           </p>
//           <p className="mt-4 max-w-xl text-sm md:text-base text-gray-200">
//             Empowering rural and under-equipped schools with AI-driven assessments, actionable insights, and transparent reporting.
//           </p>
//         </section>

//         {/* Scroll Image with Locomotive */}
//         <section className="bg-white py-10">
//           <div className="max-w-5xl mx-auto px-4">
//             <img
//               src="\src\assets\image\ab.jpg"
//               alt="School Illustration"
//                data-scroll
//                data-scroll-speed="1"
//              className="rounded-xl shadow-1xl mx-auto hover:scale-105 transition-transform duration-500"
//             />
//           </div>
//         </section>
//         {/* Concept Description */}
//         <section className="bg-gradient-to-b from-gray-100 to-gray-200 py-20">
//           <div className="max-w-6xl mx-auto px-6">
//             <h2 className="text-4xl  font-bold text-center mb-12 text-gray-800">What is EduStruct?</h2>
//             <div className="grid md:grid-cols-2 gap-10">
//               <div className="flex items-start gap-4 bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300">
//                 <FaRobot className="text-4xl text-blue-600 animate-pulse" />
//                 <div>
//                   <h3 className="text-xl font-semibold mb-1">AI-Powered Classification</h3>
//                   <p className="text-gray-700">
//                     Our system uses intelligent algorithms to classify schools as either standard or odd based on grade configurations and infrastructure.
//                   </p>
//                 </div>
//               </div>

//               <div className="flex items-start gap-4 bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300">
//                 <FaChartLine className="text-4xl text-green-600 animate-pulse" />
//                 <div>
//                   <h3 className="text-xl font-semibold mb-1">Improvement Tracker</h3>
//                   <p className="text-gray-700">
//                     A dynamic dashboard helps track improvement areas and visualize the path to becoming a fully furnished school.
//                   </p>
//                 </div>
//               </div>

//               <div className="flex items-start gap-4 bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300">
//                 <FaCheckCircle className="text-4xl text-purple-600 animate-pulse" />
//                 <div>
//                   <h3 className="text-xl font-semibold mb-1">Sector-Based Suggestions</h3>
//                   <p className="text-gray-700">
//                     EduStruct provides actionable suggestions in infrastructure, academic levels, and facilities to help schools transition.
//                   </p>
//                 </div>
//               </div>

//               <div className="flex items-start gap-4 bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 mb-5">
//                 <FaSchool className="text-4xl text-orange-500 animate-pulse" />
//                 <div>
//                   <h3 className="text-xl font-semibold mb-1">Report Generation</h3>
//                   <p className="text-gray-700">
//                     Generate structured reports to share with officials for transparency, accountability, and funding assistance.
//                   </p>
//                 </div>
//               </div>
             

//             </div>
//           </div>
        
//         </section>
       
//       </div>
//       <Footer/>
//     </div>
//   );
// };

// export default Home;


import React, { useEffect } from "react";
import LocomotiveScroll from "locomotive-scroll";
import "locomotive-scroll/dist/locomotive-scroll.css";
import Navbar from './Navbar';
import Footer from './Footer';
import { FaRobot, FaChartLine, FaSchool, FaCheckCircle } from "react-icons/fa";

const Home = () => {
  useEffect(() => {
    const scroll = new LocomotiveScroll({
      el: document.querySelector("[data-scroll-container]"),
      smooth: true,
    });
    return () => scroll.destroy();
  }, []);

  return (
    <div data-scroll-container>
      <Navbar />
      <div >
        {/* Hero Section */}
        <section className="h-[80vh] flex flex-col justify-center items-center bg-gradient-to-br from-indigo-800 via-purple-700 to-pink-600 text-white text-center relative overflow-hidden px-4">
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-4 animate-bounce drop-shadow-lg">EduStruct</h1>
          <p className="text-lg md:text-2xl font-medium animate-slide-up max-w-2xl">
            From Odd to Outstanding — One School at a Time.
          </p>
          <p className="mt-4 max-w-xl text-sm md:text-base text-gray-200">
            Empowering rural and under-equipped schools with AI-driven assessments, actionable insights, and transparent reporting.
          </p>
        </section>

        {/* Scroll Image */}
        <section className="bg-white py-12">
          <div className="max-w-6xl mx-auto px-4">
            <img
              src="/src/assets/image/ab.jpg"
              alt="School Illustration"
              data-scroll
              data-scroll-speed="1.2"
              className="rounded-2xl shadow-2xl mx-auto transform hover:scale-105 transition-transform duration-500"
            />
          </div>
        </section>

        {/* What is EduStruct Section */}
        <section className="bg-gradient-to-b from-purple-100 via-indigo-100 to-pink-100 py-20">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">🚀 What is EduStruct?</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-10">
              {/* Feature Cards */}
              {[
                {
                  icon: <FaRobot className="text-4xl text-blue-600 animate-pulse" />,
                  title: "AI-Powered Classification",
                  desc: "Smartly categorizes schools based on grade configuration and infrastructure norms."
                },
                {
                  icon: <FaChartLine className="text-4xl text-green-600 animate-pulse" />,
                  title: "Improvement Tracker",
                  desc: "Real-time tracking of school upgrades and required changes."
                },
                {
                  icon: <FaCheckCircle className="text-4xl text-purple-600 animate-pulse" />,
                  title: "Tailored Suggestions",
                  desc: "Actionable insights for improvement in academics, buildings, and facilities."
                },
                {
                  icon: <FaSchool className="text-4xl text-orange-500 animate-pulse" />,
                  title: "PDF Report Generator",
                  desc: "Generate comprehensive school audit reports for official use."
                }
              ].map((feature, i) => (
                <div
                  key={i}
                  className="flex items-start gap-4 bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition duration-300 transform hover:scale-[1.02]"
                >
                  {feature.icon}
                  <div>
                    <h3 className="text-xl font-semibold mb-1">{feature.title}</h3>
                    <p className="text-gray-700">{feature.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
         
        </section>

      
      </div>
      <Footer/>
    </div>
  );
};

export default Home;
