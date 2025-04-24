 import React, { useState } from "react";
import { useNavigate } from "react-router-dom";  // Import useNavigate
import Navbar from "./Navbar";
import Footer from "./Footer";
import { getSuggestions } from "./getSugessation";

const ClassificationForm = ({ setStatus }) => {
  const [formData, setFormData] = useState({
    grades: "",
    classrooms: "",
    totalStudents: "",
    teacherStudentRatio: "",
    toilets: false,
    drinkingWater: false,
    electricity: false,
    boundaryWall: false,
  });

  const [result, setResult] = useState(null);

  const navigate = useNavigate();  // Initialize the navigate function

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const newForm = {
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    };

    setFormData(newForm);

    // Only update status for checkbox fields
    if (["toilets", "drinkingWater", "electricity", "boundaryWall"].includes(name)) {
      setStatus({
        toilets: newForm.toilets,
        drinkingWater: newForm.drinkingWater,
        electricity: newForm.electricity,
        boundaryWall: newForm.boundaryWall,
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const norms = {
      grades: 5, // Minimum Grades (1–5)
      totalStudents: 30, // Minimum students
      teacherStudentRatio: 30, // Minimum ratio of 1:30
      classrooms: formData.grades, // At least as many classrooms as grades
      toilets: true, // Both toilets must be available
      drinkingWater: true, // Drinking water must be available
      electricity: true, // Electricity must be available
      boundaryWall: true, // Boundary wall must be available
    };

    const isValid = 
      parseInt(formData.grades) >= norms.grades &&
      parseInt(formData.totalStudents) >= norms.totalStudents &&
      parseInt(formData.teacherStudentRatio) <= norms.teacherStudentRatio &&
      parseInt(formData.classrooms) >= parseInt(formData.grades) &&
      formData.toilets &&
      formData.drinkingWater &&
      formData.electricity &&
      formData.boundaryWall;

    const classification = isValid ? "Fully Furnished School" : "Odd Structured School";

    setResult(classification);

    // Provide suggestions
    const recommendations = getSuggestions(formData);
  
    setStatus({
      ...formData,
      recommendations,
    });

    navigate('/tracker');
  };

  // Check if the form is valid (non-empty fields and checkboxes)
  const isFormValid = 
    formData.grades && formData.classrooms && formData.totalStudents && formData.teacherStudentRatio;

  return (
    <div>
      <Navbar />
      <section className="py-16 bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100 " id="classification">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-3xl font-semibold mb-6 text-center">Classify Your School</h2>

          <div className="grid gap-4">
            <input
              type="number"
              name="grades"
              placeholder="Number of Grades"
              className="p-3 border rounded"
              value={formData.grades}
              onChange={handleChange}
            />
            <input
              type="number"
              name="classrooms"
              placeholder="Number of Classrooms"
              className="p-3 border rounded"
              value={formData.classrooms}
              onChange={handleChange}
            />
            <input
              type="number"
              name="totalStudents"
              placeholder="Total Number of Students"
              className="p-3 border rounded"
              value={formData.totalStudents}
              onChange={handleChange}
            />
            <input
              type="number"
              name="teacherStudentRatio"
              placeholder="Teacher-Student Ratio"
              className="p-3 border rounded"
              value={formData.teacherStudentRatio}
              onChange={handleChange}
            />

            {["toilets", "drinkingWater", "electricity", "boundaryWall"].map((field) => (
              <label className="flex items-center gap-2" key={field}>
                <input
                  type="checkbox"
                  name={field}
                  checked={formData[field]}
                  onChange={handleChange}
                />
                {field.charAt(0).toUpperCase() + field.slice(1).replace(/([A-Z])/g, " $1")}
              </label>
            ))}

            <button
              onClick={handleSubmit}
              className={`${
                isFormValid ? "bg-blue-700" : "bg-gray-400 cursor-not-allowed"
              } text-white px-6 py-3 mt-4 rounded hover:bg-blue-800 cursor-pointer`}
              disabled={!isFormValid} // Disable button if form is not valid
            >
              Analyze School
            </button>

            {result && (
              <div className="mt-6 text-xl text-center font-bold text-blue-800">
                Classification: {result}
              </div>
            )}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default ClassificationForm;
