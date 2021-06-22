import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Header from './components/Header';

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

  return (
    <Router>
      <div className='App'>
        <Header />
        <Switch>
          <Route exact path='/'>
            <Home activities={activities} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
