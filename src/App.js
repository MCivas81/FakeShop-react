import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Cart from './pages/Cart';
import Header from './components/Header';
import ModalSidebar from './components/ModalSidebar';
import Wishlist from './components/Wishlist';

function App() {
  // API data logic
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    fetch('https://api.musement.com/api/v3/venues/164/activities?limit=72&offset=0')
      .then((response) => response.json())
      .then((data) => {
        setActivities(data);
      })
      .catch((error) => {
        console.log(error.message);
      });
  }, []);

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

  // Wishlist logic
  const [wishlist, setWishlist] = useState([]);

  const isInWishlist = (activity) => {
    return activity != null && wishlist.find((act) => act.uuid === activity.uuid) != null;
  };

  const addToWishlist = (activity) => {
    return setWishlist([...wishlist, activity]);
  };

  const removeFromWishlist = (activityId) => {
    setWishlist(wishlist.filter((activity) => activity.uuid !== activityId));
  };

  const clearWishlist = () => {
    setWishlist([]);
  };

  // Cart logic
  const [cart, setCart] = useState([]);

  const cartTotal = cart.reduce(
    (total, activity) => total + activity.retail_price.value * activity.quantity,
    0
  );
  function isInCart(activity) {
    return activity != null && cart.find((act) => act.uuid === activity.uuid) != null;
  }
  function addToCart(activity) {
    setCart([...cart, { ...activity, quantity: 1 }]);
  }
  function removeFromCart(activityId) {
    setCart(cart.filter((activity) => activity.uuid !== activityId));
  }
  function setProductQuantity(activityId, quantity) {
    setCart(
      cart.map((activity) => (activity.uuid === activityId ? { ...activity, quantity } : activity))
    );
  }

  // Get current activities
  const [currentPage, setCurrentPage] = useState(1);
  const [activitiesPerPage] = useState(6);

  const indexOfLastActivity = currentPage * activitiesPerPage;
  const indexOfFirstActivity = indexOfLastActivity - activitiesPerPage;
  const currentActivities = activities.slice(indexOfFirstActivity, indexOfLastActivity);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  const goToPreviousPage = () => setCurrentPage((pageNumber) => pageNumber - 1);
  const goToNextPage = () => setCurrentPage((pageNumber) => pageNumber + 1);

  const [pageLimit] = useState(4);

  return (
    <Router>
      <div className='App'>
        <Header
          wishlist={wishlist}
          onWishlistClick={() => setIsModalOpen(true)}
          cartSize={cart.length}
          cartTotal={cartTotal}
        />
        <ModalSidebar
          isModalOpen={isModalOpen}
          closeModal={closeModal}
          wishlist={wishlist}
          clearWishlist={clearWishlist}>
          <Wishlist wishlist={wishlist} removeFromWishlist={removeFromWishlist} />
        </ModalSidebar>
        <Switch>
          <Route exact path='/'>
            <Home
              activities={currentActivities}
              isInWishlist={isInWishlist}
              addToWishlist={addToWishlist}
              removeFromWishlist={removeFromWishlist}
              addToCart={addToCart}
              removeFromCart={removeFromCart}
              isInCart={isInCart}
              activitiesPerPage={activitiesPerPage}
              totalActivities={activities.length}
              paginate={paginate}
              currentPage={currentPage}
              goToPreviousPage={goToPreviousPage}
              goToNextPage={goToNextPage}
              pageLimit={pageLimit}
            />
          </Route>
          <Route path='/cart'>
            <Cart
              activitiesInCart={cart}
              totalPrice={cartTotal}
              removeFromCart={removeFromCart}
              setProductQuantity={setProductQuantity}
            />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
