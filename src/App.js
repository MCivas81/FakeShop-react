import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  // API data logic
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    fetch('https://api.musement.com/api/v3/venues/164/activities?limit=60&offset=0')
      .then((response) => response.json())
      .then((data) => {
        setActivities(data);
      })
      .catch((error) => {
        console.log(error.message);
      });
  }, []);

  console.log(activities);

  return <div className='App'></div>;
}

export default App;
