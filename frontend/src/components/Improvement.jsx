// import React from "react";
// import { motion } from "framer-motion";
// import { CheckCircle, AlertTriangle, Library, Ruler, Fence, Landmark } from "lucide-react";
// import Navbar from "./Navbar";
// import Footer from "./Footer";  
// import jsPDF from 'jspdf';

// const sectors = [
//   { key: "toilets", label: "Separate Toilets", icon: <Ruler /> },
//   { key: "library", label: "Library", icon: <Library /> },
//   { key: "playground", label: "Playground", icon: <Landmark /> },
//   { key: "boundaryWall", label: "Boundary Wall", icon: <Fence /> },
// ];

// const ImprovementTracker = ({ status }) => {
//   const sectorStatus = status || {
//     toilets: false,
//     library: true,
//     playground: false,
//     boundaryWall: false,
//   };

//   const getTip = (key) => {
//     const tips = {
//       toilets: "Ensure gender-separated toilet facilities are in place.",
//       library: "Establish a basic library with age-appropriate books.",
//       playground: "Provide outdoor space for student recreation.",
//       boundaryWall: "Secure the premises with a boundary wall.",
//     };
//     return tips[key];
//   };
//   // const generatePDF = () => {
//   //   const doc = new jsPDF();
//   //   doc.setFontSize(16);
//   //   doc.text("📋 EduStruct School Report", 20, 20);
  
//   //   let y = 40;
  
//   //   doc.setFontSize(12);
//   //   Object.entries(sectorStatus).forEach(([key, value]) => {
//   //     if (["toilets", "library", "playground", "boundaryWall"].includes(key)) {
//   //       const label = sectors.find((s) => s.key === key)?.label || key;
//   //       doc.text(`${label}: ${value ? "✅ Present" : "❌ Missing"}`, 20, y);
//   //       y += 10;
//   //     }
//   //   });
  
//   //   if (sectorStatus.recommendations?.length) {
//   //     doc.setFontSize(14);
//   //     doc.text("🔧 Suggestions:", 20, y + 10);
//   //     y += 20;
//   //     sectorStatus.recommendations.forEach((tip, index) => {
//   //       doc.setFontSize(12);
//   //       doc.text(`${index + 1}. ${tip}`, 20, y);
//   //       y += 10;
//   //     });
//   //   }
  
//   //   doc.save("edustruct-school-report.pdf");
//   // };
//   // const generatePDF = () => {
//   //   // Position and size

//   //   const doc = new jsPDF();
//   //   const logo = "https://path_to_logo_image.png"; // replace with actual logo URL or image path
  
//   //   // Adding logo to the header (if you have one)
//   //   if (logo) {
//   //     doc.addImage(logo, 'PNG', 10, 10, 30, 30);
//   //   }
  
//   //   // Set header title
//   //   doc.setFontSize(18);
//   //   doc.setTextColor(50, 50, 50); // dark grey color
//   //   doc.text("📋 EduStruct School Report", 50, 20);
  
//   //   // Add line separator after title
//   //   doc.setDrawColor(0, 0, 0); // black color for line
//   //   doc.line(10, 30, 200, 30); // Draw line under title
  
//   //   // Title Section for school status
//   //   let y = 40;
//   //   doc.setFontSize(14);
//   //   doc.setTextColor(30, 45, 255); // Blue color for titles
//   //   doc.text("📊 School Status", 20, y);
//   //   y += 10;
  
//   //   // Loop through sectors and add status to the PDF
//   //   Object.entries(sectorStatus).forEach(([key, value]) => {
//   //     if (["toilets", "library", "playground", "boundaryWall"].includes(key)) {
//   //       const label = sectors.find((s) => s.key === key)?.label || key;
//   //       doc.setFontSize(12);
//   //       doc.setTextColor(value ? 0 : 255, value ? 153 : 0, 0); // Green for true, Red for false
//   //       doc.text(`${label}: ${value ? "✅ Present" : "❌ Missing"}`, 20, y);
//   //       y += 10;
//   //     }
//   //   });
  
//   //   // Suggestions Section
//   //   if (sectorStatus.recommendations?.length) {
//   //     doc.setFontSize(14);
//   //     doc.setTextColor(255, 69, 0); // Orange color for suggestions title
//   //     doc.text("🔧 Suggestions:", 20, y + 10);
//   //     y += 20;
  
//   //     // Add suggestions with bullet points
//   //     doc.setFontSize(12);
//   //     doc.setTextColor(0, 0, 0); // Black text for the suggestions
//   //     sectorStatus.recommendations.forEach((tip, index) => {
//   //       doc.text(`• ${tip}`, 20, y);
//   //       y += 8;
//   //     });
//   //   }
  
//   //   // Footer with date and page number
//   //   doc.setFontSize(10);
//   //   doc.setTextColor(100, 100, 100); // Grey color for footer
//   //   const date = new Date().toLocaleDateString();
//   //   doc.text(`Report generated on: ${date}`, 20, doc.internal.pageSize.height - 20);
//   //   doc.text(`Page ${doc.internal.getNumberOfPages()}`, doc.internal.pageSize.width - 40, doc.internal.pageSize.height - 20);
  
//   //   // Add a border around the content area for better structure
//   //   doc.rect(10, 30, 190, y - 40); // x, y, width, height
  
//   //   // Save the PDF file
//   //   doc.save("edustruct-school-report.pdf");
//   // };
  
//   const generatePDF = () => {
//     const doc = new jsPDF();
    
//     // Add logo to the header (if you have one)
//    // const logo = "https://path_to_logo_image.png"; // replace with actual logo URL or image path
//    // if (logo) {
//    //   doc.addImage(logo, 'PNG', 10, 10, 30, 30); // Adjust x, y, width, height as needed
//    // }
  
//     // Set header title
//     doc.setFontSize(18);
//     doc.setTextColor(50, 50, 50); // dark grey color
//     doc.text("📋 EduStruct School Report", 50, 20);
  
//     // Add line separator after title
//     doc.setDrawColor(0, 0, 0); // black color for line
//     doc.line(10, 30, 200, 30); // Draw line under title
  
//     // Title Section for school status
//     let y = 40;
//     doc.setFontSize(14);
//     doc.setTextColor(30, 45, 255); // Blue color for titles
//     doc.text("📊 School Status", 20, y);
//     y += 10;
  
//     // Loop through sectors and add status to the PDF
//     Object.entries(sectorStatus).forEach(([key, value]) => {
//       if (["toilets", "library", "playground", "boundaryWall"].includes(key)) {
//         const label = sectors.find((s) => s.key === key)?.label || key;
//         doc.setFontSize(12);
//         doc.setTextColor(value ? 0 : 255, value ? 153 : 0, 0); // Green for true, Red for false
//         doc.text(`${label}: ${value ? "✅ Present" : "❌ Missing"}`, 20, y);
//         y += 10;
//       }
//     });
  
//     // Suggestions Section
//     if (sectorStatus.recommendations?.length) {
//       doc.setFontSize(14);
//       doc.setTextColor(255, 69, 0); // Orange color for suggestions title
//       doc.text("🔧 Suggestions:", 20, y + 10);
//       y += 20;
  
//       // Add suggestions with bullet points
//       doc.setFontSize(12);
//       doc.setTextColor(0, 0, 0); // Black text for the suggestions
//       sectorStatus.recommendations.forEach((tip, index) => {
//         doc.text(`• ${tip}`, 20, y);
//         y += 8;
//       });
//     }
  
//     // Footer with date and page number
//     doc.setFontSize(10);
//     doc.setTextColor(100, 100, 100); // Grey color for footer
//     const date = new Date().toLocaleDateString();
//     doc.text(`Report generated on: ${date}`, 20, doc.internal.pageSize.height - 20);
//     doc.text(`Page ${doc.internal.getNumberOfPages()}`, doc.internal.pageSize.width - 40, doc.internal.pageSize.height - 20);
  
//     // Add a border around the content area for better structure
//     doc.rect(10, 30, 190, y - 40); // x, y, width, height
  
//     // Save the PDF file
//     doc.save("edustruct-school-report.pdf");
//   };
  
//   return (
//     <div>
//         <Navbar/>
//  <section className="py-20 bg-gray-100 px-6" id="tracker">
//       <div className="max-w-6xl mx-auto">
//         <h2 className="text-4xl font-bold text-center mb-12">📊 Improvement Tracker</h2>
//         <div className="grid md:grid-cols-2 gap-8">
//           {sectors.map(({ key, label, icon }) => {
//             const isComplete = sectorStatus[key];
//             return (
//               <motion.div
//                 key={key}
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.4 }}
//                 className={`rounded-xl shadow-md p-6 border-l-8 ${
//                   isComplete ? "border-green-500 bg-white" : "border-red-500 bg-red-50"
//                 }`}
//               >
//                 <div className="flex items-center gap-4 mb-4">
//                   <div className="text-blue-700">{icon}</div>
//                   <h3 className="text-xl font-semibold">{label}</h3>
//                   <div className="ml-auto">
//                     {isComplete ? (
//                       <CheckCircle className="text-green-600" />
//                     ) : (
//                       <AlertTriangle className="text-red-600" />
//                     )}
//                   </div>
//                 </div>

//                 {/* Progress bar */}
//                 <div className="w-full bg-gray-300 rounded-full h-3 mb-3">
//                   <motion.div
//                     className={`h-3 rounded-full ${
//                       isComplete ? "bg-green-500 w-full" : "bg-red-500 w-2/5"
//                     }`}
//                     initial={{ width: 0 }}
//                     animate={{ width: isComplete ? "100%" : "40%" }}
//                     transition={{ duration: 1 }}
//                   />
//                 </div>

//                 {/* Tips */}
//                 {!isComplete && (
//                   <p className="text-sm text-gray-700">{getTip(key)}</p>
//                 )}
//               </motion.div>
//             );
//           })}
//         </div>
//         <div className="text-center mt-10">
//   <button
//     onClick={generatePDF}
//     className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-lg shadow-md cursor-pointer "
//   >
//     📥 Download PDF Report
//   </button>
// </div>

//       </div>
//     </section>
//     <Footer/>
//     </div>
   
//   );
// };

// export default ImprovementTracker;
//  import React, { useState } from "react";
// import { motion } from "framer-motion";
// import { CheckCircle, AlertTriangle, Library, Ruler, Fence, Landmark } from "lucide-react";
// import Navbar from "./Navbar";
// import Footer from "./Footer";
// import jsPDF from 'jspdf';

// const sectors = [
//   { key: "toilets", label: "Separate Toilets", icon: <Ruler /> },
//   { key: "library", label: "Library", icon: <Library /> },
//   { key: "playground", label: "Playground", icon: <Landmark /> },
//   { key: "boundaryWall", label: "Boundary Wall", icon: <Fence /> },
// ];

// const governmentNorms = {
//   gradesOffered: { min: 1, max: 5 }, // Grades 1–5 for Primary
//   totalStudents: 30, // Minimum students
//   teacherStudentRatio: 30, // 1:30 ratio
//   classrooms: "min", // Classrooms should be >= Grades Offered
//   toilets: true, // Both boys' and girls' toilets required
//   drinkingWater: true,
//   electricity: true,
//   boundaryWall: true,
// };

// const ImprovementTracker = ({ status }) => {
//   const [formData, setFormData] = useState({
//     gradesOffered: 5,
//     totalStudents: 40, // Updated minimum students
//     teacherStudentRatio: 30,
//     classrooms: 6,
//     toilets: true,
//     drinkingWater: true,
//     electricity: true,
//     boundaryWall: true,
//   });

//   const sectorStatus = status || {
//     toilets: formData.toilets,
//     library: true, // Assume library is always available
//     playground: false, // Assume playground needs improvement
//     boundaryWall: formData.boundaryWall,
//   };

//   const compareWithNorms = (field, value) => {
//     switch (field) {
//       case "gradesOffered":
//         return value >= governmentNorms.gradesOffered.min && value <= governmentNorms.gradesOffered.max;
//       case "totalStudents":
//         return value >= governmentNorms.totalStudents; // Compare against updated total students
//       case "teacherStudentRatio":
//         return value <= governmentNorms.teacherStudentRatio;
//       case "classrooms":
//         return value >= formData.gradesOffered;
//       case "toilets":
//       case "drinkingWater":
//       case "electricity":
//       case "boundaryWall":
//         return value === governmentNorms[field];
//       default:
//         return false;
//     }
//   };

//   const getTip = (key) => {
//     const tips = {
//       toilets: "Ensure gender-separated toilet facilities are in place.",
//       library: "Establish a basic library with age-appropriate books.",
//       playground: "Provide outdoor space for student recreation.",
//       boundaryWall: "Secure the premises with a boundary wall.",
//     };
//     return tips[key];
//   };

//   const generatePDF = () => {
//     const doc = new jsPDF();

//     // Set header title
//     doc.setFontSize(18);
//     doc.setTextColor(50, 50, 50); // dark grey color
//     doc.text("📋 EduStruct School Report", 50, 20);

//     // Add line separator after title
//     doc.setDrawColor(0, 0, 0); // black color for line
//     doc.line(10, 30, 200, 30); // Draw line under title

//     // Title Section for school status
//     let y = 40;
//     doc.setFontSize(14);
//     doc.setTextColor(30, 45, 255); // Blue color for titles
//     doc.text("📊 School Status", 20, y);
//     y += 10;

//     // Loop through form data and compare with norms
//     Object.entries(formData).forEach(([key, value]) => {
//       const isComplete = compareWithNorms(key, value);
//       const label = key.charAt(0).toUpperCase() + key.slice(1).replace(/([A-Z])/g, ' $1');
//       doc.setFontSize(12);
//       doc.setTextColor(isComplete ? 0 : 255, isComplete ? 153 : 0, 0); // Green for true, Red for false
//       doc.text(`${label}: ${isComplete ? "✅ Meets Norm" : "❌ Needs Improvement"}`, 20, y);
//       y += 10;
//     });

//     // Suggestions Section
//     doc.setFontSize(14);
//     doc.setTextColor(255, 69, 0); // Orange color for suggestions title
//     doc.text("🔧 Suggestions:", 20, y + 10);
//     y += 20;

//     // Add suggestions with bullet points
//     doc.setFontSize(12);
//     doc.setTextColor(0, 0, 0); // Black text for the suggestions
//     Object.entries(formData).forEach(([key, value]) => {
//       if (!compareWithNorms(key, value)) {
//         const tip = getTip(key);
//         doc.text(`• ${tip}`, 20, y);
//         y += 8;
//       }
//     });

//     // Footer with date and page number
//     doc.setFontSize(10);
//     doc.setTextColor(100, 100, 100); // Grey color for footer
//     const date = new Date().toLocaleDateString();
//     doc.text(`Report generated on: ${date}`, 20, doc.internal.pageSize.height - 20);
//     doc.text(`Page ${doc.internal.getNumberOfPages()}`, doc.internal.pageSize.width - 40, doc.internal.pageSize.height - 20);

//     // Add a border around the content area for better structure
//     doc.rect(10, 30, 190, y - 40); // x, y, width, height

//     // Save the PDF file
//     doc.save("edustruct-school-report.pdf");
//   };

//   return (
//     <div>
//       <Navbar />
//       <section className="py-20 bg-gray-100 px-6" id="tracker">
//         <div className="max-w-6xl mx-auto">
//           <h2 className="text-4xl font-bold text-center mb-12">📊 Improvement Tracker</h2>
//           <div className="grid md:grid-cols-2 gap-8">
//             {sectors.map(({ key, label, icon }) => {
//               const isComplete = sectorStatus[key];
//               return (
//                 <motion.div
//                   key={key}
//                   initial={{ opacity: 0, y: 20 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   transition={{ duration: 0.4 }}
//                   className={`rounded-xl shadow-md p-6 border-l-8 ${isComplete ? "border-green-500 bg-white" : "border-red-500 bg-red-50"}`}
//                 >
//                   <div className="flex items-center gap-4 mb-4">
//                     <div className="text-blue-700">{icon}</div>
//                     <h3 className="text-xl font-semibold">{label}</h3>
//                     <div className="ml-auto">
//                       {isComplete ? <CheckCircle className="text-green-600" /> : <AlertTriangle className="text-red-600" />}
//                     </div>
//                   </div>

//                   {/* Progress bar */}
//                   <div className="w-full bg-gray-300 rounded-full h-3 mb-3">
//                     <motion.div
//                       className={`h-3 rounded-full ${isComplete ? "bg-green-500 w-full" : "bg-red-500 w-2/5"}`}
//                       initial={{ width: 0 }}
//                       animate={{ width: isComplete ? "100%" : "40%" }}
//                       transition={{ duration: 1 }}
//                     />
//                   </div>

//                   {/* Tips */}
//                   {!isComplete && <p className="text-sm text-gray-700">{getTip(key)}</p>}
//                 </motion.div>
//               );
//             })}
//           </div>
//           <div className="text-center mt-10">
//             <button
//               onClick={generatePDF}
//               className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-lg shadow-md cursor-pointer"
//             >
//               📥 Download PDF Report
//             </button>
//           </div>
//         </div>
//       </section>
//       <Footer />
//     </div>
//   );
// };

// export default ImprovementTracker;
// import React, { useState } from "react";
// import { motion } from "framer-motion";
// import { CheckCircle, AlertTriangle, Library, Ruler, Fence, Landmark, Droplets, Flashlight, Users } from "lucide-react";
// import Navbar from "./Navbar";
// import Footer from "./Footer";
// import jsPDF from 'jspdf';

// const sectors = [
//   { key: "toilets", label: "Separate Toilets", icon: <Ruler /> },
//   { key: "drinkingWater", label: "Drinking Water", icon: <Droplets /> },
//   { key: "electricity", label: "Electricity", icon: <Flashlight /> },
//   { key: "library", label: "Library", icon: <Library /> },
//   { key: "playground", label: "Playground", icon: <Landmark /> },
//   { key: "boundaryWall", label: "Boundary Wall", icon: <Fence /> },
//   { key: "teacherStudentRatio", label: "Teacher-Student Ratio", icon: <Users /> },
// ];

// const governmentNorms = {
//   gradesOffered: { min: 1, max: 5 },
//   totalStudents: 30,
//   teacherStudentRatio: 30,
//   classrooms: "min",
//   toilets: true,
//   drinkingWater: true,
//   electricity: true,
//   boundaryWall: true,
// };

// const ImprovementTracker = ({ status }) => {
//   const [formData, setFormData] = useState({
//     gradesOffered: 5,
//     totalStudents: 40,
//     teacherStudentRatio: 30,
//     classrooms: 6,
//     toilets: true,
//     drinkingWater: true,
//     electricity: true,
//     boundaryWall: true,
//   });

//   const compareWithNorms = (field, value) => {
//     switch (field) {
//       case "gradesOffered":
//         return value >= governmentNorms.gradesOffered.min && value <= governmentNorms.gradesOffered.max;
//       case "totalStudents":
//         return value >= governmentNorms.totalStudents;
//       case "teacherStudentRatio":
//         return value <= governmentNorms.teacherStudentRatio;
//       case "classrooms":
//         return value >= formData.gradesOffered;
//       case "toilets":
//       case "drinkingWater":
//       case "electricity":
//       case "boundaryWall":
//         return value === governmentNorms[field];
//       default:
//         return false;
//     }
//   };

//   const sectorStatus = status || {
//     toilets: compareWithNorms("toilets", formData.toilets),
//     drinkingWater: compareWithNorms("drinkingWater", formData.drinkingWater),
//     electricity: compareWithNorms("electricity", formData.electricity),
//     library: true,
//     playground: false,
//     boundaryWall: compareWithNorms("boundaryWall", formData.boundaryWall),
//     teacherStudentRatio: compareWithNorms("teacherStudentRatio", formData.teacherStudentRatio),
//   };

//   const getTip = (key) => {
//     const tips = {
//       toilets: "Ensure gender-separated toilet facilities are in place.",
//       drinkingWater: "Install a clean drinking water source.",
//       electricity: "Ensure consistent electricity supply.",
//       library: "Establish a basic library with age-appropriate books.",
//       playground: "Provide outdoor space for student recreation.",
//       boundaryWall: "Secure the premises with a boundary wall.",
//       teacherStudentRatio: "Recruit additional teachers to maintain the 1:30 ratio.",
//     };
//     return tips[key];
//   };

//   const generatePDF = () => {
//     const doc = new jsPDF();

//     doc.setFontSize(18);
//     doc.setTextColor(50, 50, 50);
//     doc.text("📋 EduStruct School Report", 50, 20);

//     doc.setDrawColor(0, 0, 0);
//     doc.line(10, 30, 200, 30);

//     let y = 40;
//     doc.setFontSize(14);
//     doc.setTextColor(30, 45, 255);
//     doc.text("📊 School Status", 20, y);
//     y += 10;

//     Object.entries(formData).forEach(([key, value]) => {
//       const isComplete = compareWithNorms(key, value);
//       const label = key.charAt(0).toUpperCase() + key.slice(1).replace(/([A-Z])/g, ' $1');
//       const comparisonText = isComplete ? "✅ Meets Norm" : "❌ Needs Improvement";
//       const comparisonDetail = isComplete ? '' : ` (Required: ${
//         key === "gradesOffered" ? `${governmentNorms.gradesOffered.min}-${governmentNorms.gradesOffered.max}` :
//         key === "teacherStudentRatio" ? `<= ${governmentNorms.teacherStudentRatio}` :
//         key === "classrooms" ? `>= ${formData.gradesOffered}` :
//         typeof governmentNorms[key] === "boolean" ? "Yes" :
//         governmentNorms[key]
//       })`;

//       doc.setFontSize(12);
//       doc.setTextColor(isComplete ? 0 : 255, isComplete ? 153 : 0, 0);
//       doc.text(`${label}: ${comparisonText}${comparisonDetail}`, 20, y);
//       y += 10;
//     });

//     doc.setFontSize(14);
//     doc.setTextColor(255, 69, 0);
//     doc.text("🔧 Suggestions:", 20, y + 10);
//     y += 20;

//     doc.setFontSize(12);
//     doc.setTextColor(0, 0, 0);
//     Object.entries(formData).forEach(([key, value]) => {
//       if (!compareWithNorms(key, value)) {
//         const tip = getTip(key);
//         if (tip) {
//           doc.text(`• ${tip}`, 20, y);
//           y += 8;
//         }
//       }
//     });

//     doc.setFontSize(10);
//     doc.setTextColor(100, 100, 100);
//     const date = new Date().toLocaleDateString();
//     doc.text(`Report generated on: ${date}`, 20, doc.internal.pageSize.height - 20);
//     doc.text(`Page ${doc.internal.getNumberOfPages()}`, doc.internal.pageSize.width - 40, doc.internal.pageSize.height - 20);

//     doc.rect(10, 30, 190, y - 40);

//     doc.save("edustruct-school-report.pdf");
//   };

//   return (
//     <div>
//       <Navbar />
//       <section className="py-20 bg-gray-100 px-6" id="tracker">
//         <div className="max-w-6xl mx-auto">
//           <h2 className="text-4xl font-bold text-center mb-12">📊 Improvement Tracker</h2>
//           <div className="grid md:grid-cols-2 gap-8">
//             {sectors.map(({ key, label, icon }) => {
//               const isComplete = sectorStatus[key];
//               return (
//                 <motion.div
//                   key={key}
//                   initial={{ opacity: 0, y: 20 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   transition={{ duration: 0.4 }}
//                   className={`rounded-xl shadow-md p-6 border-l-8 ${isComplete ? "border-green-500 bg-white" : "border-red-500 bg-red-50"}`}
//                 >
//                   <div className="flex items-center gap-4 mb-4">
//                     <div className="text-blue-700">{icon}</div>
//                     <h3 className="text-xl font-semibold">{label}</h3>
//                     <div className="ml-auto">
//                       {isComplete ? <CheckCircle className="text-green-600" /> : <AlertTriangle className="text-red-600" />}
//                     </div>
//                   </div>

//                   <div className="w-full bg-gray-300 rounded-full h-3 mb-3">
//                     <motion.div
//                       className={`h-3 rounded-full ${isComplete ? "bg-green-500 w-full" : "bg-red-500 w-2/5"}`}
//                       initial={{ width: 0 }}
//                       animate={{ width: isComplete ? "100%" : "40%" }}
//                       transition={{ duration: 1 }}
//                     />
//                   </div>

//                   {!isComplete && <p className="text-sm text-gray-700">{getTip(key)}</p>}
//                 </motion.div>
//               );
//             })}
//           </div>
//           <div className="text-center mt-10">
//             <button
//               onClick={generatePDF}
//               className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-lg shadow-md cursor-pointer"
//             >
//               📅 Download PDF Report
//             </button>
//           </div>
//         </div>
//       </section>
//       <Footer />
//     </div>
//   );
// };

// export default ImprovementTracker;
import React, { useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle, AlertTriangle, Library, Ruler, Fence, Landmark, Droplets, Flashlight, Users } from "lucide-react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import jsPDF from 'jspdf';

const sectors = [
  { key: "toilets", label: "Separate Toilets", icon: <Ruler /> },
  { key: "drinkingWater", label: "Drinking Water", icon: <Droplets /> },
  { key: "electricity", label: "Electricity", icon: <Flashlight /> },
 // { key: "library", label: "Library", icon: <Library /> },
 
  { key: "boundaryWall", label: "Boundary Wall", icon: <Fence /> },
  { key: "teacherStudentRatio", label: "Teacher-Student Ratio", icon: <Users /> },
  { key: "playground", label: "Playground", icon: <Landmark /> }
];

const governmentNorms = {
  gradesOffered: { min: 1, max: 5 },
  totalStudents: 30,
  teacherStudentRatio: 30,
  classrooms: "min",
  toilets: true,
  drinkingWater: true,
  electricity: true,
  boundaryWall: true,
};

const ImprovementTracker = ({ status }) => {
  const [formData, setFormData] = useState({
    gradesOffered: 0,
    totalStudents: 0,
    teacherStudentRatio: 0,
    classrooms: 0,
    toilets: false,
    drinkingWater: false,
    electricity: false,
    boundaryWall: false,
  });

  const compareWithNorms = (field, value) => {
    switch (field) {
      case "gradesOffered":
        return value >= governmentNorms.gradesOffered.min && value <= governmentNorms.gradesOffered.max;
      case "totalStudents":
        return value >= governmentNorms.totalStudents;
      case "teacherStudentRatio":
        return value <= governmentNorms.teacherStudentRatio;
      case "classrooms":
        return value >= formData.gradesOffered;
      case "toilets":
      case "drinkingWater":
      case "electricity":
      case "boundaryWall":
        return value === governmentNorms[field];
      default:
        return false;
    }
  };

  const sectorStatus = status || {
    toilets: compareWithNorms("toilets", formData.toilets),
    drinkingWater: compareWithNorms("drinkingWater", formData.drinkingWater),
    electricity: compareWithNorms("electricity", formData.electricity),
   // library: true,
    playground: false,
    boundaryWall: compareWithNorms("boundaryWall", formData.boundaryWall),
    teacherStudentRatio: compareWithNorms("teacherStudentRatio", formData.teacherStudentRatio),
  };

  const getTip = (key) => {
    const tips = {
      toilets: "Ensure gender-separated toilet facilities are in place.",
      drinkingWater: "Install a clean drinking water source.",
      electricity: "Ensure consistent electricity supply.",
    //  library: "Establish a basic library with age-appropriate books.",
      playground: "Provide outdoor space for student recreation.",
      boundaryWall: "Secure the premises with a boundary wall.",
      teacherStudentRatio: "Recruit additional teachers to maintain the 1:30 ratio.",
    };
    return tips[key];
  };

  const generatePDF = () => {
    const doc = new jsPDF();

    doc.setFontSize(18);
    doc.setTextColor(50, 50, 50);
    doc.text("📋 EduStruct School Report", 50, 20);

    doc.setDrawColor(0, 0, 0);
    doc.line(10, 30, 200, 30);

    let y = 40;
    doc.setFontSize(14);
    doc.setTextColor(30, 45, 255);
    doc.text("📊 School Status", 20, y);
    y += 10;

    Object.entries(formData).forEach(([key, value]) => {
      const isComplete = compareWithNorms(key, value);
      const label = key.charAt(0).toUpperCase() + key.slice(1).replace(/([A-Z])/g, ' $1');
      const comparisonText = isComplete ? "✅ Meets Norm" : "❌ Needs Improvement";
      const comparisonDetail = isComplete ? '' : ` (Required: ${
        key === "gradesOffered" ? `${governmentNorms.gradesOffered.min}-${governmentNorms.gradesOffered.max}` :
        key === "teacherStudentRatio" ? `<= ${governmentNorms.teacherStudentRatio}` :
        key === "classrooms" ? `>= ${formData.gradesOffered}` :
        typeof governmentNorms[key] === "boolean" ? "Yes" :
        governmentNorms[key]
      })`;

      doc.setFontSize(12);
      doc.setTextColor(isComplete ? 0 : 255, isComplete ? 153 : 0, 0);
      doc.text(`${label}: ${comparisonText}${comparisonDetail}`, 20, y);
      y += 10;
    });

    doc.setFontSize(14);
    doc.setTextColor(255, 69, 0);
    doc.text("🔧 Suggestions:", 20, y + 10);
    y += 20;

    doc.setFontSize(12);
    doc.setTextColor(0, 0, 0);
    Object.entries(formData).forEach(([key, value]) => {
      if (!compareWithNorms(key, value)) {
        const tip = getTip(key);
        if (tip) {
          doc.text(`• ${tip}`, 20, y);
          y += 8;
        }
      }
    });

    doc.setFontSize(10);
    doc.setTextColor(100, 100, 100);
    const date = new Date().toLocaleDateString();
    doc.text(`Report generated on: ${date}`, 20, doc.internal.pageSize.height - 20);
    doc.text(`Page ${doc.internal.getNumberOfPages()}`, doc.internal.pageSize.width - 40, doc.internal.pageSize.height - 20);

    doc.rect(10, 30, 190, y - 40);

    doc.save("edustruct-school-report.pdf");
  };

  return (
    <div>
      <Navbar />
      <section className="py-20 bg-gray-100 px-6" id="tracker">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">📊 Improvement Tracker</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {sectors.map(({ key, label, icon }) => {
              const isComplete = sectorStatus[key];
              return (
                <motion.div
                  key={key}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                  className={`rounded-xl shadow-md p-6 border-l-8 ${isComplete ? "border-green-500 bg-white" : "border-red-500 bg-red-50"}`}
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="text-blue-700">{icon}</div>
                    <h3 className="text-xl font-semibold">{label}</h3>
                    <div className="ml-auto">
                      {isComplete ? <CheckCircle className="text-green-600" /> : <AlertTriangle className="text-red-600" />}
                    </div>
                  </div>

                  <div className="w-full bg-gray-300 rounded-full h-3 mb-3">
                    <motion.div
                      className={`h-3 rounded-full ${isComplete ? "bg-green-500 w-full" : "bg-red-500 w-2/5"}`}
                      initial={{ width: 0 }}
                      animate={{ width: isComplete ? "100%" : "40%" }}
                      transition={{ duration: 1 }}
                    />
                  </div>

                  {!isComplete && <p className="text-sm text-gray-700">{getTip(key)}</p>}
                </motion.div>
              );
            })}
          </div>
          <div className="text-center mt-10">
            <button
              onClick={generatePDF}
              className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-lg shadow-md cursor-pointer"
            >
              📅 Download PDF Report
            </button>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default ImprovementTracker;
