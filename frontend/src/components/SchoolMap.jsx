import React, { useEffect, useRef } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import Navbar from './Navbar';  
import Footer from './Footer';
mapboxgl.accessToken = 'pk.eyJ1IjoiYWJoaXNoZWt2MTgiLCJhIjoiY205dG9xZ3F6MDE0NDJxc2NxYzZjdWIweCJ9.B39Ktze6T3DlROoyZe3weg'; // 🔁 Replace this with your actual token

const SchoolMap = () => {
  const mapContainer = useRef(null);

  const schoolData = [
    {
      name: 'Green Valley School',
      latitude: 28.7041,
      longitude: 77.1025,
      status: 'fully-furnished',
    },
    {
      name: 'Sunrise Public School',
      latitude: 19.076,
      longitude: 72.8777,
      status: 'partially-equipped',
    },
    {
      name: 'Hope Foundation School',
      latitude: 22.5726,
      longitude: 88.3639,
      status: 'needs-improvement',
    },
    { name: 'Beta High School', 
    latitude: 26.9124,
    longitude: 75.7873,
     status: 'partially-equipped' 
    },
    { name: 'Delta Middle School',
    latitude: 23.2599,
    longitude: 77.4766,
    status: 'needs-improvement'
    },
    {
        "name": "Delhi Public School, R.K. Puram",
        "latitude": 28.5535,
        "longitude": 77.1855,
        "status": "fully-furnished"
      },
      {
        "name": "The Doon School, Dehradun",
        "latitude": 30.3256,
        "longitude": 78.0417,
        "status": "fully-furnished"
      },
      {
        "name": "La Martiniere College, Lucknow",
        "latitude": 26.8486,
        "longitude": 80.9462,
        "status": "fully-furnished"
      },
      {
        "name": "St. Xavier's High School, Mumbai",
        "latitude": 18.9388,
        "longitude": 72.8354,
        "status": "fully-furnished"
      },
      {
        "name": "Bishop Cotton Boys' School, Bangalore",
        "latitude": 12.9716,
        "longitude": 77.5946,
        "status": "fully-furnished"
      },
      {
        "name": "Modern School, Barakhamba Road, Delhi",
        "latitude": 28.6304,
        "longitude": 77.2197,
        "status": "fully-furnished"
      },
      {
        name: "Delhi Public School, R.K. Puram",
        latitude: 28.5535,
        longitude: 77.1855,
        status: "fully-furnished"
      },
      {
        name: "The Doon School, Dehradun",
        latitude: 30.3256,
        longitude: 78.0417,
        status: "fully-furnished"
      },
      {
        name: "Govt. Secondary School, Trilokpuri",
        latitude: 28.6192,
        longitude: 77.2906,
        status: "partially-equipped"
      },
      {
        name: "La Martiniere College, Lucknow",
        latitude: 26.8486,
        longitude: 80.9462,
        status: "fully-furnished"
      },
      {
        name: "Zila Parishad School, Latur",
        latitude: 18.4088,
        longitude: 76.5604,
        status: "needs-improvement"
      },
      {
        name: "St. Xavier's High School, Mumbai",
        latitude: 18.9388,
        longitude: 72.8354,
        status: "fully-furnished"
      },
      {
        name: "Bishop Cotton Boys' School, Bangalore",
        latitude: 12.9716,
        longitude: 77.5946,
        status: "fully-furnished"
      },
      {
        name: "Govt. Middle School, Gaya",
        latitude: 24.7969,
        longitude: 85.0002,
        status: "partially-equipped"
      },
      {
        name: "Primary School, Betul (M.P.)",
        latitude: 21.9014,
        longitude: 77.9056,
        status: "needs-improvement"
      },
      {
        name: "Welham Girls' School, Dehradun",
        latitude: 30.3256,
        longitude: 78.0417,
        status: "fully-furnished"
      },
      {
        "name": "Mayo College, Ajmer",
        "latitude": 26.4499,
        "longitude": 74.6399,
        "status": "fully-furnished"
      },
      {
        "name": "Welham Girls' School, Dehradun",
        "latitude": 30.3256,
        "longitude": 78.0417,
        "status": "partially-equipped"
      }  ,


  ];

  useEffect(() => {
    const map = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [82.9739, 22.5958], // Center of India
      zoom: 4.5,
    });

    schoolData.forEach((school) => {
      const color =
        school.status === 'fully-furnished'
          ? 'green'
          : school.status === 'partially-equipped'
          ? 'yellow'
          : 'red';

      new mapboxgl.Marker({ color })
        .setLngLat([school.longitude, school.latitude])
        .setPopup(
          new mapboxgl.Popup().setHTML(
            `<h3>${school.name}</h3><p>Status: <strong>${school.status.replace('-', ' ')}</strong></p>`
          )
        )
        .addTo(map);
    });

    return () => map.remove();
  }, []);

  return (
    <div>
        <Navbar/>
 <div className='bg-blue-300'>
      <h2 className="text-2xl font-semibold mt-1 mb-3 text-center  justify-center items-center mx-auto">Interactive School Map</h2>
      <div ref={mapContainer} className="w-full h-[600px] rounded-xl shadow-lg" />
    </div>
    <Footer/>
    </div>
   
  );
};

export default SchoolMap;
