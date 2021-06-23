import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Header from './components/Header';
import ModalSidebar from './components/ModalSidebar';

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

  // Modal logic
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    if (isModalOpen) {
      document.body.style.height = `100vh`;
      document.body.style.overflow = `hidden`;
    } else {
      document.body.style.height = ``;
      document.body.style.overflow = ``;
    }
  }, [isModalOpen]);

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <Router>
      <div className='App'>
        <Header onWishlistClick={() => setIsModalOpen(true)} />
        <ModalSidebar isModalOpen={isModalOpen} closeModal={closeModal}></ModalSidebar>
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
