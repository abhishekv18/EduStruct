import './App.css';
import Home from './components/Home';
import { createBrowserRouter, Router, RouterProvider } from 'react-router-dom';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Contact from './components/Contact';
import ClassificationForm from './components/Classification';
import ImprovementTracker from './components/Improvement';
import { useState } from 'react';
import Impact from './components/Impact'; 
import SchoolMap from './components/SchoolMap'; 
import CompareSchools from './components/CompareSchool';

import Solutions from './components/Solutions';
  function App() {
  const [schoolStatus, setSchoolStatus] = useState({
    toilets: false,
    library: false,
    playground: false,
    boundaryWall: false,
  });

  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/signup",
      element: <Signup />,
    },
    {
      path: "/contact",
      element: <Contact />,
    },
    {
      path: "/form",
      element: <ClassificationForm setStatus={setSchoolStatus} />,
    },
    {
      path: "/tracker",
      element: <ImprovementTracker status={schoolStatus} />,
    },
    {
      path: "/impact",
      element: <Impact />,
    },
    {
      path: "/map",
      element: <SchoolMap />,
    },  
    {
      path: "/compare",
      element: <CompareSchools />,
    },
    {
      path: "/solution",
      element: <Solutions />,
    },
   
  ]);

  return (
    <div>
      <RouterProvider router={appRouter} />
     
    </div>
  );
}

export default App;
