// import React, { useState } from 'react';
// import Navbar from './Navbar';
// import Footer from './Footer';
//     const mockSchools = [
//         {
//             id: 1,
//             name: 'Green Valley School',
//             grades: '1-8',
//             classes: 12,
//             status: 'Fully Furnished',
//             infrastructure: {
//               toilets: true,
//               library: true,
//               playground: true,
//               boundaryWall: true,
//             },
//           },
//           {
//             id: 2,
//             name: 'Sunrise Public School',
//             grades: '1-12',
//             classes: 15,
//             status: 'Partially Equipped',
//             infrastructure: {
//               toilets: true,
//               library: true,
//               playground: false,
//               boundaryWall: true,
//             },
//           },
//           {
//             id: 3,
//             name: 'Hope Foundation School',
//             grades: '1-5',
//             classes: 8,
//             status: 'Needs Improvement',
//             infrastructure: {
//               toilets: false,
//               library: false,
//               playground: false,
//               boundaryWall: true,
//             },
//           },
//           {
//             id: 4,
//             name: 'Beta High School',
//             grades: '6-12',
//             classes: 10,
//             status: 'Partially Equipped',
//             infrastructure: {
//               toilets: true,
//               library: false,
//               playground: true,
//               boundaryWall: true,
//             },
//           },
//           {
//             id: 5,
//             name: 'Delta Middle School',
//             grades: '6-8',
//             classes: 6,
//             status: 'Needs Improvement',
//             infrastructure: {
//               toilets: false,
//               library: false,
//               playground: false,
//               boundaryWall: false,
//             },
//           },
//           {
//             id: 6,
//             name: 'Delhi Public School, R.K. Puram',
//             grades: '1-12',
//             classes: 20,
//             status: 'Fully Furnished',
//             infrastructure: {
//               toilets: true,
//               library: true,
//               playground: true,
//               boundaryWall: true,
//             },
//           },
//           {
//             id: 7,
//             name: 'The Doon School, Dehradun',
//             grades: '1-12',
//             classes: 15,
//             status: 'Fully Furnished',
//             infrastructure: {
//               toilets: true,
//               library: true,
//               playground: true,
//               boundaryWall: true,
//             },
//           },
//           {
//             id: 8,
//             name: 'La Martiniere College, Lucknow',
//             grades: '1-12',
//             classes: 18,
//             status: 'Fully Furnished',
//             infrastructure: {
//               toilets: true,
//               library: true,
//               playground: true,
//               boundaryWall: true,
//             },
//           },
//           {
//             id: 9,
//             name: 'St. Xavier\'s High School, Mumbai',
//             grades: '1-10',
//             classes: 14,
//             status: 'Fully Furnished',
//             infrastructure: {
//               toilets: true,
//               library: true,
//               playground: true,
//               boundaryWall: true,
//             },
//           },
//           {
//             id: 10,
//             name: 'Bishop Cotton Boys\' School, Bangalore',
//             grades: '1-12',
//             classes: 22,
//             status: 'Fully Furnished',
//             infrastructure: {
//               toilets: true,
//               library: true,
//               playground: true,
//               boundaryWall: true,
//             },
//           },
//           {
//             id: 11,
//             name: 'Modern School, Barakhamba Road, Delhi',
//             grades: '1-12',
//             classes: 20,
//             status: 'Fully Furnished',
//             infrastructure: {
//               toilets: true,
//               library: true,
//               playground: true,
//               boundaryWall: true,
//             },
//           },
//           {
//             id: 12,
//             name: 'Govt. Secondary School, Trilokpuri',
//             grades: '1-8',
//             classes: 10,
//             status: 'Partially Equipped',
//             infrastructure: {
//               toilets: true,
//               library: false,
//               playground: false,
//               boundaryWall: true,
//             },
//           },
//           {
//             id: 13,
//             name: 'Zila Parishad School, Latur',
//             grades: '1-5',
//             classes: 5,
//             status: 'Needs Improvement',
//             infrastructure: {
//               toilets: false,
//               library: false,
//               playground: false,
//               boundaryWall: false,
//             },
//           },
//           {
//             id: 14,
//             name: 'Govt. Middle School, Gaya',
//             grades: '6-8',
//             classes: 8,
//             status: 'Partially Equipped',
//             infrastructure: {
//               toilets: true,
//               library: true,
//               playground: false,
//               boundaryWall: true,
//             },
//           },
//           {
//             id: 15,
//             name: 'Primary School, Betul (M.P.)',
//             grades: '1-5',
//             classes: 6,
//             status: 'Needs Improvement',
//             infrastructure: {
//               toilets: false,
//               library: false,
//               playground: false,
//               boundaryWall: false,
//             },
//           },
//           {
//             id: 16,
//             name: 'Welham Girls\' School, Dehradun',
//             grades: '1-12',
//             classes: 15,
//             status: 'Fully Furnished',
//             infrastructure: {
//               toilets: true,
//               library: true,
//               playground: true,
//               boundaryWall: true,
//             },
//           },
//           {
//             id: 17,
//             name: 'Mayo College, Ajmer',
//             grades: '1-12',
//             classes: 18,
//             status: 'Fully Furnished',
//             infrastructure: {
//               toilets: true,
//               library: true,
//               playground: true,
//               boundaryWall: true,
//             },
//           },
//           {
//             id: 18,
//             name: 'Aditya Birla Public School, Jaipur',
//             grades: '1-12',
//             classes: 20,
//             status: 'Fully Furnished',
//             infrastructure: {
//               toilets: true,
//               library: true,
//               playground: true,
//               boundaryWall: true,
//             },
//           },
//           {
//             id: 19,
//             name: 'International School of Bangalore',
//             grades: '1-12',
//             classes: 25,
//             status: 'Fully Furnished',
//             infrastructure: {
//               toilets: true,
//               library: true,
//               playground: true,
//               boundaryWall: true,
//             },
//           },
//           {
//             id: 20,
//             name: 'Ryan International School, Noida',
//             grades: '1-12',
//             classes: 30,
//             status: 'Partially Equipped',
//             infrastructure: {
//               toilets: true,
//               library: true,
//               playground: false,
//               boundaryWall: true,
//             },
//           },
//           {
//             id: 21,
//             name: 'The Heritage School, Gurgaon',
//             grades: '1-12',
//             classes: 18,
//             status: 'Fully Furnished',
//             infrastructure: {
//               toilets: true,
//               library: true,
//               playground: true,
//               boundaryWall: true,
//             },
//           },
//           {
//             id: 22,
//             name: 'St. Joseph’s School, Kolkata',
//             grades: '1-10',
//             classes: 12,
//             status: 'Needs Improvement',
//             infrastructure: {
//               toilets: false,
//               library: false,
//               playground: false,
//               boundaryWall: true,
//             },
//           },
//           {
//             id: 23,
//             name: 'Cambridge School, Delhi',
//             grades: '1-12',
//             classes: 22,
//             status: 'Fully Furnished',
//             infrastructure: {
//               toilets: true,
//               library: true,
//               playground: true,
//               boundaryWall: true,
//             },
//           },
//           {
//             id: 24,
//             name: 'Sree Sankaracharya University of Sanskrit, Kalady',
//             grades: 'Undergraduate',
//             classes: 5,
//             status: 'Partially Equipped',
//             infrastructure: {
//               toilets: true,
//               library: false,
//               playground: false,
//               boundaryWall: true,
//             },
//           },
//           {
//             id: 25,
//             name: 'Sardar Patel Vidyalaya, Delhi',
//             grades: '1-12',
//             classes: 25,
//             status: 'Fully Furnished',
//             infrastructure: {
//               toilets: true,
//               library: true,
//               playground: true,
//               boundaryWall: true,
//             },
//           },
//           {
//             id: 26,
//             name: 'Bharatiya Vidya Bhavan, Mumbai',
//             grades: '1-12',
//             classes: 30,
//             status: 'Fully Furnished',
//             infrastructure: {
//               toilets: true,
//               library: true,
//               playground: true,
//               boundaryWall: true,
//             },
//           },
//           {
//             id: 27,
//             name: 'Kendriya Vidyalaya, Vasant Kunj',
//             grades: '1-12',
//             classes: 20,
//             status: 'Fully Furnished',
//             infrastructure: {
//               toilets: true,
//               library: true,
//               playground: true,
//               boundaryWall: true,
//             },
//           },
//           {
//             id: 28,
//             name: 'Shiv Nadar School, Gurgaon',
//             grades: '1-12',
//             classes: 18,
//             status: 'Fully Furnished',
//             infrastructure: {
//               toilets: true,
//               library: true,
//               playground: true,
//               boundaryWall: true,
//             },
//           },
//           {
//             id: 29,
//             name: 'DAV Public School, Chandigarh',
//             grades: '1-12',
//             classes: 20,
//             status: 'Partially Equipped',
//             infrastructure: {
//               toilets: true,
//               library: false,
//               playground: false,
//               boundaryWall: true,
//             },
//           },
//           {
//             id: 30,
//             name: 'Mount Litera Zee School, Mumbai',
//             grades: '1-12',
//             classes: 22,
//             status: 'Fully Furnished',
//             infrastructure: {
//               toilets: true,
//               library: true,
//               playground: true,
//               boundaryWall: true,
//             },
//           },
//           {
//             id: 31,
//             name: 'Bangalore International School',
//             grades: '1-12',
//             classes: 18,
//             status: 'Partially Equipped',
//             infrastructure: {
//               toilets: true,
//               library: false,
//               playground: false,
//               boundaryWall: true,
//             },
//           },
//           {
//             id: 32,
//             name: 'The Shri Ram School, Delhi',
//             grades: '1-12',
//             classes: 25,
//             status: 'Fully Furnished',
//             infrastructure: {
//               toilets: true,
//               library: true,
//               playground: true,
//               boundaryWall: true,
//             },
//           },
//           {
//             id: 33,
//             name: 'Billabong High International School, Mumbai',
//             grades: '1-12',
//             classes: 15,
//             status: 'Fully Furnished',
//             infrastructure: {
//               toilets: true,
//               library: true,
//               playground: true,
//               boundaryWall: true,
//             },
//           },
//           {
//             id: 34,
//             name: 'Aditya School of International Education, Mumbai',
//             grades: '1-12',
//             classes: 20,
//             status: 'Partially Equipped',
//             infrastructure: {
//               toilets: true,
//               library: false,
//               playground: true,
//               boundaryWall: true,
//             },
//           },
//   // Add more mock data here
// ];

// const CompareSchools = () => {
//   const [selected, setSelected] = useState([]);

//   const toggleSelect = (school) => {
//     if (selected.find((s) => s.id === school.id)) {
//       setSelected(selected.filter((s) => s.id !== school.id));
//     } else if (selected.length < 2) {
//       setSelected([...selected, school]);
//     }
//   };

//   return (
//     <div>
//         <Navbar/>
//  <div className="p-4 min-h-screen">
     
//      <h1 className="text-2xl font-bold mb-4 text-center">Compare Schools</h1>
//      <div className="grid grid-cols-2 gap-4">
//        {mockSchools.map((school) => (
//          <div
//            key={school.id}
//            onClick={() => toggleSelect(school)}
//            className={`p-4 border rounded cursor-pointer shadow hover:bg-indigo-50 ${
//              selected.find((s) => s.id === school.id) ? 'border-indigo-500' : ''
//            }`}
//          >
//            <h2 className="text-lg font-semibold">{school.name}</h2>
//            <p>Status: {school.status}</p>
//            <p>Grades: {school.grades}</p>
//            <p>Classes: {school.classes}</p>
//          </div>
//        ))}
//      </div>

//      {selected.length === 2 && (
//        <div className="mt-8 border-t pt-4">
//          <h2 className="text-xl font-bold text-center mb-4">Comparison</h2>
//          <div className="grid grid-cols-3 text-left gap-4 font-medium">
//            <div className="text-gray-600">Feature</div>
//            <div>{selected[0].name}</div>
//            <div>{selected[1].name}</div>

//            <div>Grades</div>
//            <div>{selected[0].grades}</div>
//            <div>{selected[1].grades}</div>

//            <div>Classes</div>
//            <div>{selected[0].classes}</div>
//            <div>{selected[1].classes}</div>

//            <div>Toilets</div>
//            <div>{selected[0].infrastructure.toilets ? '✅' : '❌'}</div>
//            <div>{selected[1].infrastructure.toilets ? '✅' : '❌'}</div>

//            <div>Library</div>
//            <div>{selected[0].infrastructure.library ? '✅' : '❌'}</div>
//            <div>{selected[1].infrastructure.library ? '✅' : '❌'}</div>

//            <div>Playground</div>
//            <div>{selected[0].infrastructure.playground ? '✅' : '❌'}</div>
//            <div>{selected[1].infrastructure.playground ? '✅' : '❌'}</div>

//            <div>Boundary Wall</div>
//            <div>{selected[0].infrastructure.boundaryWall ? '✅' : '❌'}</div>
//            <div>{selected[1].infrastructure.boundaryWall ? '✅' : '❌'}</div>
//          </div>
//        </div>
//      )}
//    </div>
//    <Footer/>
//     </div>
   
//   );
// };

// export default CompareSchools;



// import React, { useState } from 'react';
// import Navbar from './Navbar';
// import Footer from './Footer';

// const mockSchools = [
//     {
//         id: 1,
//         name: 'Green Valley School',
//         grades: '1-8',
//         classes: 12,
//         status: 'Fully Furnished',
//         infrastructure: {
//           toilets: true,
//           library: true,
//           playground: true,
//           boundaryWall: true,
//         },
//       },
//       {
//         id: 2,
//         name: 'Sunrise Public School',
//         grades: '1-12',
//         classes: 15,
//         status: 'Partially Equipped',
//         infrastructure: {
//           toilets: true,
//           library: true,
//           playground: false,
//           boundaryWall: true,
//         },
//       },
//       {
//         id: 3,
//         name: 'Hope Foundation School',
//         grades: '1-5',
//         classes: 8,
//         status: 'Needs Improvement',
//         infrastructure: {
//           toilets: false,
//           library: false,
//           playground: false,
//           boundaryWall: true,
//         },
//       },
//       {
//         id: 4,
//         name: 'Beta High School',
//         grades: '6-12',
//         classes: 10,
//         status: 'Partially Equipped',
//         infrastructure: {
//           toilets: true,
//           library: false,
//           playground: true,
//           boundaryWall: true,
//         },
//       },
//       {
//         id: 5,
//         name: 'Delta Middle School',
//         grades: '6-8',
//         classes: 6,
//         status: 'Needs Improvement',
//         infrastructure: {
//           toilets: false,
//           library: false,
//           playground: false,
//           boundaryWall: false,
//         },
//       },
//       {
//         id: 6,
//         name: 'Delhi Public School, R.K. Puram',
//         grades: '1-12',
//         classes: 20,
//         status: 'Fully Furnished',
//         infrastructure: {
//           toilets: true,
//           library: true,
//           playground: true,
//           boundaryWall: true,
//         },
//       },
//       {
//         id: 7,
//         name: 'The Doon School, Dehradun',
//         grades: '1-12',
//         classes: 15,
//         status: 'Fully Furnished',
//         infrastructure: {
//           toilets: true,
//           library: true,
//           playground: true,
//           boundaryWall: true,
//         },
//       },
//       {
//         id: 8,
//         name: 'La Martiniere College, Lucknow',
//         grades: '1-12',
//         classes: 18,
//         status: 'Fully Furnished',
//         infrastructure: {
//           toilets: true,
//           library: true,
//           playground: true,
//           boundaryWall: true,
//         },
//       },
//       {
//         id: 9,
//         name: 'St. Xavier\'s High School, Mumbai',
//         grades: '1-10',
//         classes: 14,
//         status: 'Fully Furnished',
//         infrastructure: {
//           toilets: true,
//           library: true,
//           playground: true,
//           boundaryWall: true,
//         },
//       },
//       {
//         id: 10,
//         name: 'Bishop Cotton Boys\' School, Bangalore',
//         grades: '1-12',
//         classes: 22,
//         status: 'Fully Furnished',
//         infrastructure: {
//           toilets: true,
//           library: true,
//           playground: true,
//           boundaryWall: true,
//         },
//       },
//       {
//         id: 11,
//         name: 'Modern School, Barakhamba Road, Delhi',
//         grades: '1-12',
//         classes: 20,
//         status: 'Fully Furnished',
//         infrastructure: {
//           toilets: true,
//           library: true,
//           playground: true,
//           boundaryWall: true,
//         },
//       },
//       {
//         id: 12,
//         name: 'Govt. Secondary School, Trilokpuri',
//         grades: '1-8',
//         classes: 10,
//         status: 'Partially Equipped',
//         infrastructure: {
//           toilets: true,
//           library: false,
//           playground: false,
//           boundaryWall: true,
//         },
//       },
//       {
//         id: 13,
//         name: 'Zila Parishad School, Latur',
//         grades: '1-5',
//         classes: 5,
//         status: 'Needs Improvement',
//         infrastructure: {
//           toilets: false,
//           library: false,
//           playground: false,
//           boundaryWall: false,
//         },
//       },
//       {
//         id: 14,
//         name: 'Govt. Middle School, Gaya',
//         grades: '6-8',
//         classes: 8,
//         status: 'Partially Equipped',
//         infrastructure: {
//           toilets: true,
//           library: true,
//           playground: false,
//           boundaryWall: true,
//         },
//       },
//       {
//         id: 15,
//         name: 'Primary School, Betul (M.P.)',
//         grades: '1-5',
//         classes: 6,
//         status: 'Needs Improvement',
//         infrastructure: {
//           toilets: false,
//           library: false,
//           playground: false,
//           boundaryWall: false,
//         },
//       },
//       {
//         id: 16,
//         name: 'Welham Girls\' School, Dehradun',
//         grades: '1-12',
//         classes: 15,
//         status: 'Fully Furnished',
//         infrastructure: {
//           toilets: true,
//           library: true,
//           playground: true,
//           boundaryWall: true,
//         },
//       },
//       {
//         id: 17,
//         name: 'Mayo College, Ajmer',
//         grades: '1-12',
//         classes: 18,
//         status: 'Fully Furnished',
//         infrastructure: {
//           toilets: true,
//           library: true,
//           playground: true,
//           boundaryWall: true,
//         },
//       },
//       {
//         id: 18,
//         name: 'Aditya Birla Public School, Jaipur',
//         grades: '1-12',
//         classes: 20,
//         status: 'Fully Furnished',
//         infrastructure: {
//           toilets: true,
//           library: true,
//           playground: true,
//           boundaryWall: true,
//         },
//       },
//       {
//         id: 19,
//         name: 'International School of Bangalore',
//         grades: '1-12',
//         classes: 25,
//         status: 'Fully Furnished',
//         infrastructure: {
//           toilets: true,
//           library: true,
//           playground: true,
//           boundaryWall: true,
//         },
//       },
//       {
//         id: 20,
//         name: 'Ryan International School, Noida',
//         grades: '1-12',
//         classes: 30,
//         status: 'Partially Equipped',
//         infrastructure: {
//           toilets: true,
//           library: true,
//           playground: false,
//           boundaryWall: true,
//         },
//       },
//       {
//         id: 21,
//         name: 'The Heritage School, Gurgaon',
//         grades: '1-12',
//         classes: 18,
//         status: 'Fully Furnished',
//         infrastructure: {
//           toilets: true,
//           library: true,
//           playground: true,
//           boundaryWall: true,
//         },
//       },
//       {
//         id: 22,
//         name: 'St. Joseph’s School, Kolkata',
//         grades: '1-10',
//         classes: 12,
//         status: 'Needs Improvement',
//         infrastructure: {
//           toilets: false,
//           library: false,
//           playground: false,
//           boundaryWall: true,
//         },
//       },
//       {
//         id: 23,
//         name: 'Cambridge School, Delhi',
//         grades: '1-12',
//         classes: 22,
//         status: 'Fully Furnished',
//         infrastructure: {
//           toilets: true,
//           library: true,
//           playground: true,
//           boundaryWall: true,
//         },
//       },
//       {
//         id: 24,
//         name: 'Sree Sankaracharya University of Sanskrit, Kalady',
//         grades: 'Undergraduate',
//         classes: 5,
//         status: 'Partially Equipped',
//         infrastructure: {
//           toilets: true,
//           library: false,
//           playground: false,
//           boundaryWall: true,
//         },
//       },
//       {
//         id: 25,
//         name: 'Sardar Patel Vidyalaya, Delhi',
//         grades: '1-12',
//         classes: 25,
//         status: 'Fully Furnished',
//         infrastructure: {
//           toilets: true,
//           library: true,
//           playground: true,
//           boundaryWall: true,
//         },
//       },
//       {
//         id: 26,
//         name: 'Bharatiya Vidya Bhavan, Mumbai',
//         grades: '1-12',
//         classes: 30,
//         status: 'Fully Furnished',
//         infrastructure: {
//           toilets: true,
//           library: true,
//           playground: true,
//           boundaryWall: true,
//         },
//       },
//       {
//         id: 27,
//         name: 'Kendriya Vidyalaya, Vasant Kunj',
//         grades: '1-12',
//         classes: 20,
//         status: 'Fully Furnished',
//         infrastructure: {
//           toilets: true,
//           library: true,
//           playground: true,
//           boundaryWall: true,
//         },
//       },
//       {
//         id: 28,
//         name: 'Shiv Nadar School, Gurgaon',
//         grades: '1-12',
//         classes: 18,
//         status: 'Fully Furnished',
//         infrastructure: {
//           toilets: true,
//           library: true,
//           playground: true,
//           boundaryWall: true,
//         },
//       },
//       {
//         id: 29,
//         name: 'DAV Public School, Chandigarh',
//         grades: '1-12',
//         classes: 20,
//         status: 'Partially Equipped',
//         infrastructure: {
//           toilets: true,
//           library: false,
//           playground: false,
//           boundaryWall: true,
//         },
//       },
//       {
//         id: 30,
//         name: 'Mount Litera Zee School, Mumbai',
//         grades: '1-12',
//         classes: 22,
//         status: 'Fully Furnished',
//         infrastructure: {
//           toilets: true,
//           library: true,
//           playground: true,
//           boundaryWall: true,
//         },
//       },
//       {
//         id: 31,
//         name: 'Bangalore International School',
//         grades: '1-12',
//         classes: 18,
//         status: 'Partially Equipped',
//         infrastructure: {
//           toilets: true,
//           library: false,
//           playground: false,
//           boundaryWall: true,
//         },
//       },
//       {
//         id: 32,
//         name: 'The Shri Ram School, Delhi',
//         grades: '1-12',
//         classes: 25,
//         status: 'Fully Furnished',
//         infrastructure: {
//           toilets: true,
//           library: true,
//           playground: true,
//           boundaryWall: true,
//         },
//       },
//       {
//         id: 33,
//         name: 'Billabong High International School, Mumbai',
//         grades: '1-12',
//         classes: 15,
//         status: 'Fully Furnished',
//         infrastructure: {
//           toilets: true,
//           library: true,
//           playground: true,
//           boundaryWall: true,
//         },
//       },
//       {
//         id: 34,
//         name: 'Aditya School of International Education, Mumbai',
//         grades: '1-12',
//         classes: 20,
//         status: 'Partially Equipped',
//         infrastructure: {
//           toilets: true,
//           library: false,
//           playground: true,
//           boundaryWall: true,
//         },
//       },
// // Add more mock data here
// ];

// const CompareSchools = () => {
//   const [selected, setSelected] = useState([]);
//   const [searchTerm, setSearchTerm] = useState('');
//   const [filter, setFilter] = useState({
//     library: false,
//     playground: false,
//     toilets: false,
//     boundaryWall: false,
//   });

//   const toggleSelect = (school) => {
//     if (selected.find((s) => s.id === school.id)) {
//       setSelected(selected.filter((s) => s.id !== school.id));
//     } else if (selected.length < 2) {
//       setSelected([...selected, school]);
//     }
//   };

//   const handleSearchChange = (event) => {
//     setSearchTerm(event.target.value);
//   };

//   const handleFilterChange = (e) => {
//     setFilter({
//       ...filter,
//       [e.target.name]: e.target.checked,
//     });
//   };

//   const filteredSchools = mockSchools
//     .filter((school) =>
//       school.name.toLowerCase().includes(searchTerm.toLowerCase())
//     )
//     .filter((school) => {
//       return (
//         (!filter.library || school.infrastructure.library) &&
//         (!filter.playground || school.infrastructure.playground) &&
//         (!filter.toilets || school.infrastructure.toilets) &&
//         (!filter.boundaryWall || school.infrastructure.boundaryWall)
//       );
//     });

//   return (
//     <div>
//       <Navbar />
//       <div className="p-4 min-h-screen bg-gray-100">
//         <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">Compare Schools</h1>
        
//         {/* Schools Grid */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
//           {mockSchools.map((school) => (
//             <div
//               key={school.id}
//               onClick={() => toggleSelect(school)}
//               className={`bg-white p-6 rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105 ${
//                 selected.find((s) => s.id === school.id) ? 'border-4 border-indigo-500' : ''
//               }`}
//             >
//               <h2 className="text-xl font-semibold text-gray-800 mb-4">{school.name}</h2>
//               <p className={`text-lg font-medium ${
//                 school.status === 'Fully Furnished' ? 'text-green-500' :
//                 school.status === 'Partially Equipped' ? 'text-yellow-500' : 'text-red-500'
//               }`}>
//                 Status: {school.status}
//               </p>
//               <p className="text-gray-600 mt-2">Grades: {school.grades}</p>
//               <p className="text-gray-600 mt-1">Classes: {school.classes}</p>
//             </div>
//           ))}
//         </div>

//         {/* Comparison Section */}
//         {selected.length === 2 && (
//           <div className="mt-12 border-t-2 border-gray-300 pt-6">
//             <h2 className="text-2xl font-bold text-center mb-6">Comparison</h2>
//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-left">
//               <div className="font-semibold text-gray-700">Feature</div>
//               <div className="font-semibold text-gray-700">{selected[0].name}</div>
//               <div className="font-semibold text-gray-700">{selected[1].name}</div>

//               <div className="text-gray-600">Grades</div>
//               <div className="text-gray-800">{selected[0].grades}</div>
//               <div className="text-gray-800">{selected[1].grades}</div>

//               <div className="text-gray-600">Classes</div>
//               <div className="text-gray-800">{selected[0].classes}</div>
//               <div className="text-gray-800">{selected[1].classes}</div>

//               <div className="text-gray-600">Toilets</div>
//               <div className={`text-lg ${selected[0].infrastructure.toilets ? 'text-green-500' : 'text-red-500'}`}>
//                 {selected[0].infrastructure.toilets ? '✅' : '❌'}
//               </div>
//               <div className={`text-lg ${selected[1].infrastructure.toilets ? 'text-green-500' : 'text-red-500'}`}>
//                 {selected[1].infrastructure.toilets ? '✅' : '❌'}
//               </div>

//               <div className="text-gray-600">Library</div>
//               <div className={`text-lg ${selected[0].infrastructure.library ? 'text-green-500' : 'text-red-500'}`}>
//                 {selected[0].infrastructure.library ? '✅' : '❌'}
//               </div>
//               <div className={`text-lg ${selected[1].infrastructure.library ? 'text-green-500' : 'text-red-500'}`}>
//                 {selected[1].infrastructure.library ? '✅' : '❌'}
//               </div>

//               <div className="text-gray-600">Playground</div>
//               <div className={`text-lg ${selected[0].infrastructure.playground ? 'text-green-500' : 'text-red-500'}`}>
//                 {selected[0].infrastructure.playground ? '✅' : '❌'}
//               </div>
//               <div className={`text-lg ${selected[1].infrastructure.playground ? 'text-green-500' : 'text-red-500'}`}>
//                 {selected[1].infrastructure.playground ? '✅' : '❌'}
//               </div>

//               <div className="text-gray-600">Boundary Wall</div>
//               <div className={`text-lg ${selected[0].infrastructure.boundaryWall ? 'text-green-500' : 'text-red-500'}`}>
//                 {selected[0].infrastructure.boundaryWall ? '✅' : '❌'}
//               </div>
//               <div className={`text-lg ${selected[1].infrastructure.boundaryWall ? 'text-green-500' : 'text-red-500'}`}>
//                 {selected[1].infrastructure.boundaryWall ? '✅' : '❌'}
//               </div>
//             </div>
//           </div>
//         )}
//       </div>
//       <Footer />
//     </div>
//   );
// };

// export default CompareSchools;



// import React, { useState } from 'react';
// import Navbar from './Navbar';
// import Footer from './Footer';
// const mockSchools = [
//     {
//         id: 1,
//         name: 'Green Valley School',
//         grades: '1-8',
//         classes: 12,
//         status: 'Fully Furnished',
//         infrastructure: {
//           toilets: true,
//           library: true,
//           playground: true,
//           boundaryWall: true,
//         },
//       },
//       {
//         id: 2,
//         name: 'Sunrise Public School',
//         grades: '1-12',
//         classes: 15,
//         status: 'Partially Equipped',
//         infrastructure: {
//           toilets: true,
//           library: true,
//           playground: false,
//           boundaryWall: true,
//         },
//       },
//       {
//         id: 3,
//         name: 'Hope Foundation School',
//         grades: '1-5',
//         classes: 8,
//         status: 'Needs Improvement',
//         infrastructure: {
//           toilets: false,
//           library: false,
//           playground: false,
//           boundaryWall: true,
//         },
//       },
//       {
//         id: 4,
//         name: 'Beta High School',
//         grades: '6-12',
//         classes: 10,
//         status: 'Partially Equipped',
//         infrastructure: {
//           toilets: true,
//           library: false,
//           playground: true,
//           boundaryWall: true,
//         },
//       },
//       {
//         id: 5,
//         name: 'Delta Middle School',
//         grades: '6-8',
//         classes: 6,
//         status: 'Needs Improvement',
//         infrastructure: {
//           toilets: false,
//           library: false,
//           playground: false,
//           boundaryWall: false,
//         },
//       },
//       {
//         id: 6,
//         name: 'Delhi Public School, R.K. Puram',
//         grades: '1-12',
//         classes: 20,
//         status: 'Fully Furnished',
//         infrastructure: {
//           toilets: true,
//           library: true,
//           playground: true,
//           boundaryWall: true,
//         },
//       },
//       {
//         id: 7,
//         name: 'The Doon School, Dehradun',
//         grades: '1-12',
//         classes: 15,
//         status: 'Fully Furnished',
//         infrastructure: {
//           toilets: true,
//           library: true,
//           playground: true,
//           boundaryWall: true,
//         },
//       },
//       {
//         id: 8,
//         name: 'La Martiniere College, Lucknow',
//         grades: '1-12',
//         classes: 18,
//         status: 'Fully Furnished',
//         infrastructure: {
//           toilets: true,
//           library: true,
//           playground: true,
//           boundaryWall: true,
//         },
//       },
//       {
//         id: 9,
//         name: 'St. Xavier\'s High School, Mumbai',
//         grades: '1-10',
//         classes: 14,
//         status: 'Fully Furnished',
//         infrastructure: {
//           toilets: true,
//           library: true,
//           playground: true,
//           boundaryWall: true,
//         },
//       },
//       {
//         id: 10,
//         name: 'Bishop Cotton Boys\' School, Bangalore',
//         grades: '1-12',
//         classes: 22,
//         status: 'Fully Furnished',
//         infrastructure: {
//           toilets: true,
//           library: true,
//           playground: true,
//           boundaryWall: true,
//         },
//       },
//       {
//         id: 11,
//         name: 'Modern School, Barakhamba Road, Delhi',
//         grades: '1-12',
//         classes: 20,
//         status: 'Fully Furnished',
//         infrastructure: {
//           toilets: true,
//           library: true,
//           playground: true,
//           boundaryWall: true,
//         },
//       },
//       {
//         id: 12,
//         name: 'Govt. Secondary School, Trilokpuri',
//         grades: '1-8',
//         classes: 10,
//         status: 'Partially Equipped',
//         infrastructure: {
//           toilets: true,
//           library: false,
//           playground: false,
//           boundaryWall: true,
//         },
//       },
//       {
//         id: 13,
//         name: 'Zila Parishad School, Latur',
//         grades: '1-5',
//         classes: 5,
//         status: 'Needs Improvement',
//         infrastructure: {
//           toilets: false,
//           library: false,
//           playground: false,
//           boundaryWall: false,
//         },
//       },
//       {
//         id: 14,
//         name: 'Govt. Middle School, Gaya',
//         grades: '6-8',
//         classes: 8,
//         status: 'Partially Equipped',
//         infrastructure: {
//           toilets: true,
//           library: true,
//           playground: false,
//           boundaryWall: true,
//         },
//       },
//       {
//         id: 15,
//         name: 'Primary School, Betul (M.P.)',
//         grades: '1-5',
//         classes: 6,
//         status: 'Needs Improvement',
//         infrastructure: {
//           toilets: false,
//           library: false,
//           playground: false,
//           boundaryWall: false,
//         },
//       },
//       {
//         id: 16,
//         name: 'Welham Girls\' School, Dehradun',
//         grades: '1-12',
//         classes: 15,
//         status: 'Fully Furnished',
//         infrastructure: {
//           toilets: true,
//           library: true,
//           playground: true,
//           boundaryWall: true,
//         },
//       },
//       {
//         id: 17,
//         name: 'Mayo College, Ajmer',
//         grades: '1-12',
//         classes: 18,
//         status: 'Fully Furnished',
//         infrastructure: {
//           toilets: true,
//           library: true,
//           playground: true,
//           boundaryWall: true,
//         },
//       },
//       {
//         id: 18,
//         name: 'Aditya Birla Public School, Jaipur',
//         grades: '1-12',
//         classes: 20,
//         status: 'Fully Furnished',
//         infrastructure: {
//           toilets: true,
//           library: true,
//           playground: true,
//           boundaryWall: true,
//         },
//       },
//       {
//         id: 19,
//         name: 'International School of Bangalore',
//         grades: '1-12',
//         classes: 25,
//         status: 'Fully Furnished',
//         infrastructure: {
//           toilets: true,
//           library: true,
//           playground: true,
//           boundaryWall: true,
//         },
//       },
//       {
//         id: 20,
//         name: 'Ryan International School, Noida',
//         grades: '1-12',
//         classes: 30,
//         status: 'Partially Equipped',
//         infrastructure: {
//           toilets: true,
//           library: true,
//           playground: false,
//           boundaryWall: true,
//         },
//       },
//       {
//         id: 21,
//         name: 'The Heritage School, Gurgaon',
//         grades: '1-12',
//         classes: 18,
//         status: 'Fully Furnished',
//         infrastructure: {
//           toilets: true,
//           library: true,
//           playground: true,
//           boundaryWall: true,
//         },
//       },
//       {
//         id: 22,
//         name: 'St. Joseph’s School, Kolkata',
//         grades: '1-10',
//         classes: 12,
//         status: 'Needs Improvement',
//         infrastructure: {
//           toilets: false,
//           library: false,
//           playground: false,
//           boundaryWall: true,
//         },
//       },
//       {
//         id: 23,
//         name: 'Cambridge School, Delhi',
//         grades: '1-12',
//         classes: 22,
//         status: 'Fully Furnished',
//         infrastructure: {
//           toilets: true,
//           library: true,
//           playground: true,
//           boundaryWall: true,
//         },
//       },
//       {
//         id: 24,
//         name: 'Sree Sankaracharya University of Sanskrit, Kalady',
//         grades: 'Undergraduate',
//         classes: 5,
//         status: 'Partially Equipped',
//         infrastructure: {
//           toilets: true,
//           library: false,
//           playground: false,
//           boundaryWall: true,
//         },
//       },
//       {
//         id: 25,
//         name: 'Sardar Patel Vidyalaya, Delhi',
//         grades: '1-12',
//         classes: 25,
//         status: 'Fully Furnished',
//         infrastructure: {
//           toilets: true,
//           library: true,
//           playground: true,
//           boundaryWall: true,
//         },
//       },
//       {
//         id: 26,
//         name: 'Bharatiya Vidya Bhavan, Mumbai',
//         grades: '1-12',
//         classes: 30,
//         status: 'Fully Furnished',
//         infrastructure: {
//           toilets: true,
//           library: true,
//           playground: true,
//           boundaryWall: true,
//         },
//       },
//       {
//         id: 27,
//         name: 'Kendriya Vidyalaya, Vasant Kunj',
//         grades: '1-12',
//         classes: 20,
//         status: 'Fully Furnished',
//         infrastructure: {
//           toilets: true,
//           library: true,
//           playground: true,
//           boundaryWall: true,
//         },
//       },
//       {
//         id: 28,
//         name: 'Shiv Nadar School, Gurgaon',
//         grades: '1-12',
//         classes: 18,
//         status: 'Fully Furnished',
//         infrastructure: {
//           toilets: true,
//           library: true,
//           playground: true,
//           boundaryWall: true,
//         },
//       },
//       {
//         id: 29,
//         name: 'DAV Public School, Chandigarh',
//         grades: '1-12',
//         classes: 20,
//         status: 'Partially Equipped',
//         infrastructure: {
//           toilets: true,
//           library: false,
//           playground: false,
//           boundaryWall: true,
//         },
//       },
//       {
//         id: 30,
//         name: 'Mount Litera Zee School, Mumbai',
//         grades: '1-12',
//         classes: 22,
//         status: 'Fully Furnished',
//         infrastructure: {
//           toilets: true,
//           library: true,
//           playground: true,
//           boundaryWall: true,
//         },
//       },
//       {
//         id: 31,
//         name: 'Bangalore International School',
//         grades: '1-12',
//         classes: 18,
//         status: 'Partially Equipped',
//         infrastructure: {
//           toilets: true,
//           library: false,
//           playground: false,
//           boundaryWall: true,
//         },
//       },
//       {
//         id: 32,
//         name: 'The Shri Ram School, Delhi',
//         grades: '1-12',
//         classes: 25,
//         status: 'Fully Furnished',
//         infrastructure: {
//           toilets: true,
//           library: true,
//           playground: true,
//           boundaryWall: true,
//         },
//       },
//       {
//         id: 33,
//         name: 'Billabong High International School, Mumbai',
//         grades: '1-12',
//         classes: 15,
//         status: 'Fully Furnished',
//         infrastructure: {
//           toilets: true,
//           library: true,
//           playground: true,
//           boundaryWall: true,
//         },
//       },
//       {
//         id: 34,
//         name: 'Aditya School of International Education, Mumbai',
//         grades: '1-12',
//         classes: 20,
//         status: 'Partially Equipped',
//         infrastructure: {
//           toilets: true,
//           library: false,
//           playground: true,
//           boundaryWall: true,
//         },
//       },
// // Add more mock data here
// ];

// const CompareSchools = () => {
//   const [selected, setSelected] = useState([]);
//   const [searchTerm, setSearchTerm] = useState('');
//   const [filter, setFilter] = useState({
//     library: false,
//     playground: false,
//     toilets: false,
//     boundaryWall: false,
//   });

//   const toggleSelect = (school) => {
//     if (selected.find((s) => s.id === school.id)) {
//       setSelected(selected.filter((s) => s.id !== school.id));
//     } else if (selected.length < 2) {
//       setSelected([...selected, school]);
//     }
//   };

//   const handleSearchChange = (event) => {
//     setSearchTerm(event.target.value);
//   };

//   const handleFilterChange = (e) => {
//     setFilter({
//       ...filter,
//       [e.target.name]: e.target.checked,
//     });
//   };

//   const filteredSchools = mockSchools
//     .filter((school) =>
//       school.name.toLowerCase().includes(searchTerm.toLowerCase())
//     )
//     .filter((school) => {
//       return (
//         (!filter.library || school.infrastructure.library) &&
//         (!filter.playground || school.infrastructure.playground) &&
//         (!filter.toilets || school.infrastructure.toilets) &&
//         (!filter.boundaryWall || school.infrastructure.boundaryWall)
//       );
//     });

//   return (
//     <div>
//       <Navbar />
//       <div className="p-4 min-h-screen bg-gray-100">
//         <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">Compare Schools</h1>

//         {/* Search and Filter Section */}
//         <div className="mb-6 flex flex-col md:flex-row justify-between items-center gap-4">
//           <input
//             type="text"
//             placeholder="Search schools by name..."
//             className="p-2 rounded border border-gray-300 w-full md:w-1/3"
//             value={searchTerm}
//             onChange={handleSearchChange}
//           />
//           <div className="flex gap-4 flex-wrap">
//             {['library', 'playground', 'toilets', 'boundaryWall'].map((key) => (
//               <label key={key} className="flex items-center gap-1 text-sm text-gray-700">
//                 <input
//                   type="checkbox"
//                   name={key}
//                   checked={filter[key]}
//                   onChange={handleFilterChange}
//                 />
//                 {key.charAt(0).toUpperCase() + key.slice(1)}
//               </label>
//             ))}
//           </div>
//         </div>

//         {/* Schools Grid */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
//           {filteredSchools.map((school) => (
//             <div
//               key={school.id}
//               onClick={() => toggleSelect(school)}
//               className={`bg-white p-6 rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105 ${
//                 selected.find((s) => s.id === school.id) ? 'border-4 border-indigo-500' : ''
//               }`}
//             >
//               <h2 className="text-xl font-semibold text-gray-800 mb-4">{school.name}</h2>
//               <p className={`text-lg font-medium ${
//                 school.status === 'Fully Furnished' ? 'text-green-500' :
//                 school.status === 'Partially Equipped' ? 'text-yellow-500' : 'text-red-500'
//               }`}>
//                 Status: {school.status}
//               </p>
//               <p className="text-gray-600 mt-2">Grades: {school.grades}</p>
//               <p className="text-gray-600 mt-1">Classes: {school.classes}</p>
//             </div>
//           ))}
//         </div>

//         {/* Comparison Section */}
//         {selected.length === 2 && (
//           <div className="mt-12 border-t-2 border-gray-300 pt-6">
//             <h2 className="text-2xl font-bold text-center mb-6">Comparison</h2>
//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-left">
//               <div className="font-semibold text-gray-700">Feature</div>
//               <div className="font-semibold text-gray-700">{selected[0].name}</div>
//               <div className="font-semibold text-gray-700">{selected[1].name}</div>

//               <div className="text-gray-600">Grades</div>
//               <div className="text-gray-800">{selected[0].grades}</div>
//               <div className="text-gray-800">{selected[1].grades}</div>

//               <div className="text-gray-600">Classes</div>
//               <div className="text-gray-800">{selected[0].classes}</div>
//               <div className="text-gray-800">{selected[1].classes}</div>

//               {['toilets', 'library', 'playground', 'boundaryWall'].map((feature) => (
//                 <React.Fragment key={feature}>
//                   <div className="text-gray-600 capitalize">{feature}</div>
//                   <div className={`text-lg ${selected[0].infrastructure[feature] ? 'text-green-500' : 'text-red-500'}`}>
//                     {selected[0].infrastructure[feature] ? '✅' : '❌'}
//                   </div>
//                   <div className={`text-lg ${selected[1].infrastructure[feature] ? 'text-green-500' : 'text-red-500'}`}>
//                     {selected[1].infrastructure[feature] ? '✅' : '❌'}
//                   </div>
//                 </React.Fragment>
//               ))}
//             </div>
//           </div>
//         )}
//       </div>
//       <Footer />
//     </div>
//   );
// };

// export default CompareSchools;
import React, { useState } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { CheckCircle, XCircle, School } from 'lucide-react';

const mockSchools = [
  {
      id: 1,
      name: 'Green Valley School',
      grades: '1-8',
      classes: 12,
      status: 'Fully Furnished',
      infrastructure: {
        toilets: true,
        library: true,
        playground: true,
        boundaryWall: true,
      },
    },
    {
      id: 2,
      name: 'Sunrise Public School',
      grades: '1-12',
      classes: 15,
      status: 'Partially Equipped',
      infrastructure: {
        toilets: true,
        library: true,
        playground: false,
        boundaryWall: true,
      },
    },
    {
      id: 3,
      name: 'Hope Foundation School',
      grades: '1-5',
      classes: 8,
      status: 'Needs Improvement',
      infrastructure: {
        toilets: false,
        library: false,
        playground: false,
        boundaryWall: true,
      },
    },
    {
      id: 4,
      name: 'Beta High School',
      grades: '6-12',
      classes: 10,
      status: 'Partially Equipped',
      infrastructure: {
        toilets: true,
        library: false,
        playground: true,
        boundaryWall: true,
      },
    },
    {
      id: 5,
      name: 'Delta Middle School',
      grades: '6-8',
      classes: 6,
      status: 'Needs Improvement',
      infrastructure: {
        toilets: false,
        library: false,
        playground: false,
        boundaryWall: false,
      },
    },
    {
      id: 6,
      name: 'Delhi Public School, R.K. Puram',
      grades: '1-12',
      classes: 20,
      status: 'Fully Furnished',
      infrastructure: {
        toilets: true,
        library: true,
        playground: true,
        boundaryWall: true,
      },
    },
    {
      id: 7,
      name: 'The Doon School, Dehradun',
      grades: '1-12',
      classes: 15,
      status: 'Fully Furnished',
      infrastructure: {
        toilets: true,
        library: true,
        playground: true,
        boundaryWall: true,
      },
    },
    {
      id: 8,
      name: 'La Martiniere College, Lucknow',
      grades: '1-12',
      classes: 18,
      status: 'Fully Furnished',
      infrastructure: {
        toilets: true,
        library: true,
        playground: true,
        boundaryWall: true,
      },
    },
    {
      id: 9,
      name: 'St. Xavier\'s High School, Mumbai',
      grades: '1-10',
      classes: 14,
      status: 'Fully Furnished',
      infrastructure: {
        toilets: true,
        library: true,
        playground: true,
        boundaryWall: true,
      },
    },
    {
      id: 10,
      name: 'Bishop Cotton Boys\' School, Bangalore',
      grades: '1-12',
      classes: 22,
      status: 'Fully Furnished',
      infrastructure: {
        toilets: true,
        library: true,
        playground: true,
        boundaryWall: true,
      },
    },
    {
      id: 11,
      name: 'Modern School, Barakhamba Road, Delhi',
      grades: '1-12',
      classes: 20,
      status: 'Fully Furnished',
      infrastructure: {
        toilets: true,
        library: true,
        playground: true,
        boundaryWall: true,
      },
    },
    {
      id: 12,
      name: 'Govt. Secondary School, Trilokpuri',
      grades: '1-8',
      classes: 10,
      status: 'Partially Equipped',
      infrastructure: {
        toilets: true,
        library: false,
        playground: false,
        boundaryWall: true,
      },
    },
    {
      id: 13,
      name: 'Zila Parishad School, Latur',
      grades: '1-5',
      classes: 5,
      status: 'Needs Improvement',
      infrastructure: {
        toilets: false,
        library: false,
        playground: false,
        boundaryWall: false,
      },
    },
    {
      id: 14,
      name: 'Govt. Middle School, Gaya',
      grades: '6-8',
      classes: 8,
      status: 'Partially Equipped',
      infrastructure: {
        toilets: true,
        library: true,
        playground: false,
        boundaryWall: true,
      },
    },
    {
      id: 15,
      name: 'Primary School, Betul (M.P.)',
      grades: '1-5',
      classes: 6,
      status: 'Needs Improvement',
      infrastructure: {
        toilets: false,
        library: false,
        playground: false,
        boundaryWall: false,
      },
    },
    {
      id: 16,
      name: 'Welham Girls\' School, Dehradun',
      grades: '1-12',
      classes: 15,
      status: 'Fully Furnished',
      infrastructure: {
        toilets: true,
        library: true,
        playground: true,
        boundaryWall: true,
      },
    },
    {
      id: 17,
      name: 'Mayo College, Ajmer',
      grades: '1-12',
      classes: 18,
      status: 'Fully Furnished',
      infrastructure: {
        toilets: true,
        library: true,
        playground: true,
        boundaryWall: true,
      },
    },
    {
      id: 18,
      name: 'Aditya Birla Public School, Jaipur',
      grades: '1-12',
      classes: 20,
      status: 'Fully Furnished',
      infrastructure: {
        toilets: true,
        library: true,
        playground: true,
        boundaryWall: true,
      },
    },
    {
      id: 19,
      name: 'International School of Bangalore',
      grades: '1-12',
      classes: 25,
      status: 'Fully Furnished',
      infrastructure: {
        toilets: true,
        library: true,
        playground: true,
        boundaryWall: true,
      },
    },
    {
      id: 20,
      name: 'Ryan International School, Noida',
      grades: '1-12',
      classes: 30,
      status: 'Partially Equipped',
      infrastructure: {
        toilets: true,
        library: true,
        playground: false,
        boundaryWall: true,
      },
    },
    {
      id: 21,
      name: 'The Heritage School, Gurgaon',
      grades: '1-12',
      classes: 18,
      status: 'Fully Furnished',
      infrastructure: {
        toilets: true,
        library: true,
        playground: true,
        boundaryWall: true,
      },
    },
    {
      id: 22,
      name: 'St. Joseph’s School, Kolkata',
      grades: '1-10',
      classes: 12,
      status: 'Needs Improvement',
      infrastructure: {
        toilets: false,
        library: false,
        playground: false,
        boundaryWall: true,
      },
    },
    {
      id: 23,
      name: 'Cambridge School, Delhi',
      grades: '1-12',
      classes: 22,
      status: 'Fully Furnished',
      infrastructure: {
        toilets: true,
        library: true,
        playground: true,
        boundaryWall: true,
      },
    },
    {
      id: 24,
      name: 'Sree Sankaracharya University of Sanskrit, Kalady',
      grades: 'Undergraduate',
      classes: 5,
      status: 'Partially Equipped',
      infrastructure: {
        toilets: true,
        library: false,
        playground: false,
        boundaryWall: true,
      },
    },
    {
      id: 25,
      name: 'Sardar Patel Vidyalaya, Delhi',
      grades: '1-12',
      classes: 25,
      status: 'Fully Furnished',
      infrastructure: {
        toilets: true,
        library: true,
        playground: true,
        boundaryWall: true,
      },
    },
    {
      id: 26,
      name: 'Bharatiya Vidya Bhavan, Mumbai',
      grades: '1-12',
      classes: 30,
      status: 'Fully Furnished',
      infrastructure: {
        toilets: true,
        library: true,
        playground: true,
        boundaryWall: true,
      },
    },
    {
      id: 27,
      name: 'Kendriya Vidyalaya, Vasant Kunj',
      grades: '1-12',
      classes: 20,
      status: 'Fully Furnished',
      infrastructure: {
        toilets: true,
        library: true,
        playground: true,
        boundaryWall: true,
      },
    },
    {
      id: 28,
      name: 'Shiv Nadar School, Gurgaon',
      grades: '1-12',
      classes: 18,
      status: 'Fully Furnished',
      infrastructure: {
        toilets: true,
        library: true,
        playground: true,
        boundaryWall: true,
      },
    },
    {
      id: 29,
      name: 'DAV Public School, Chandigarh',
      grades: '1-12',
      classes: 20,
      status: 'Partially Equipped',
      infrastructure: {
        toilets: true,
        library: false,
        playground: false,
        boundaryWall: true,
      },
    },
    {
      id: 30,
      name: 'Mount Litera Zee School, Mumbai',
      grades: '1-12',
      classes: 22,
      status: 'Fully Furnished',
      infrastructure: {
        toilets: true,
        library: true,
        playground: true,
        boundaryWall: true,
      },
    },
    {
      id: 31,
      name: 'Bangalore International School',
      grades: '1-12',
      classes: 18,
      status: 'Partially Equipped',
      infrastructure: {
        toilets: true,
        library: false,
        playground: false,
        boundaryWall: true,
      },
    },
    {
      id: 32,
      name: 'The Shri Ram School, Delhi',
      grades: '1-12',
      classes: 25,
      status: 'Fully Furnished',
      infrastructure: {
        toilets: true,
        library: true,
        playground: true,
        boundaryWall: true,
      },
    },
    {
      id: 33,
      name: 'Billabong High International School, Mumbai',
      grades: '1-12',
      classes: 15,
      status: 'Fully Furnished',
      infrastructure: {
        toilets: true,
        library: true,
        playground: true,
        boundaryWall: true,
      },
    },
    {
      id: 34,
      name: 'Aditya School of International Education, Mumbai',
      grades: '1-12',
      classes: 20,
      status: 'Partially Equipped',
      infrastructure: {
        toilets: true,
        library: false,
        playground: true,
        boundaryWall: true,
      },
    },
// Add more mock data here
];

const CompareSchools = () => {
  const [selected, setSelected] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filter, setFilter] = useState({
    library: false,
    playground: false,
    toilets: false,
    boundaryWall: false,
  });

  const toggleSelect = (school) => {
    if (selected.find((s) => s.id === school.id)) {
      setSelected(selected.filter((s) => s.id !== school.id));
    } else if (selected.length < 2) {
      setSelected([...selected, school]);
    }
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleFilterChange = (e) => {
    setFilter({
      ...filter,
      [e.target.name]: e.target.checked,
    });
  };

  const filteredSchools = mockSchools
    .filter((school) =>
      school.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .filter((school) => {
      return (
        (!filter.library || school.infrastructure.library) &&
        (!filter.playground || school.infrastructure.playground) &&
        (!filter.toilets || school.infrastructure.toilets) &&
        (!filter.boundaryWall || school.infrastructure.boundaryWall)
      );
    });

  return (
    <div>
      <Navbar />
      <div className="p-6 min-h-screen bg-gradient-to-br from-gray-100 to-gray-200">
        <h1 className="text-4xl font-bold text-center text-indigo-700 mb-10 tracking-wide">Compare Schools</h1>

        <div className="mb-10 flex flex-col md:flex-row justify-between items-center gap-4">
          <input
            type="text"
            placeholder="🔍 Search schools..."
            className="p-3 rounded-xl border border-gray-300 w-full md:w-1/3 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-400"
            value={searchTerm}
            onChange={handleSearchChange}
          />
          <div className="flex gap-4 flex-wrap">
            {['library', 'playground', 'toilets', 'boundaryWall'].map((key) => (
              <label
                key={key}
                className="flex items-center gap-2 px-3 py-2 rounded-full bg-white shadow-sm hover:shadow-md transition text-sm text-gray-700 cursor-pointer"
              >
                <input
                  type="checkbox"
                  name={key}
                  checked={filter[key]}
                  onChange={handleFilterChange}
                />
                {key.charAt(0).toUpperCase() + key.slice(1)}
              </label>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredSchools.map((school) => (
            <div
              key={school.id}
              onClick={() => toggleSelect(school)}
              className={`bg-white p-6 rounded-2xl shadow-xl border transition-transform duration-300 ease-in-out hover:scale-105 cursor-pointer hover:border-indigo-400 ${
                selected.find((s) => s.id === school.id) ? 'border-4 border-indigo-500' : ''
              }`}
            >
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-semibold text-gray-800 flex items-center gap-2">
                  <School className="text-indigo-500" size={20} /> {school.name}
                </h2>
              </div>
              <p
                className={`text-md font-medium ${
                  school.status === 'Fully Furnished' ? 'text-green-600' :
                  school.status === 'Partially Equipped' ? 'text-yellow-600' : 'text-red-600'
                }`}
              >
                {school.status}
              </p>
              <p className="text-gray-600 mt-2">Grades: {school.grades}</p>
              <p className="text-gray-600">Classes: {school.classes}</p>
            </div>
          ))}
        </div>

        {selected.length === 2 && (
          <div className="mt-16 border-t-2 border-gray-300 pt-10">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">Detailed Comparison</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-center">
              <div className="font-bold text-indigo-600 text-lg">Feature</div>
              <div className="font-bold text-gray-800 text-lg">{selected[0].name}</div>
              <div className="font-bold text-gray-800 text-lg">{selected[1].name}</div>

              <div className="text-gray-700">Grades</div>
              <div className="text-gray-600">{selected[0].grades}</div>
              <div className="text-gray-600">{selected[1].grades}</div>

              <div className="text-gray-700">Classes</div>
              <div className="text-gray-600">{selected[0].classes}</div>
              <div className="text-gray-600">{selected[1].classes}</div>

              {['toilets', 'library', 'playground', 'boundaryWall'].map((feature) => (
                <React.Fragment key={feature}>
                  <div className="capitalize text-gray-700">{feature}</div>
                  <div className="text-gray-600">
                    {selected[0].infrastructure[feature] ? (
                      <CheckCircle className="text-green-500 inline" />
                    ) : (
                      <XCircle className="text-red-500 inline" />
                    )}
                  </div>
                  <div className="text-gray-600">
                    {selected[1].infrastructure[feature] ? (
                      <CheckCircle className="text-green-500 inline" />
                    ) : (
                      <XCircle className="text-red-500 inline" />
                    )}
                  </div>
                </React.Fragment>
              ))}
            </div>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default CompareSchools;