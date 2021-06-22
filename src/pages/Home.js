import React from 'react';
import ActivitiesList from '../components/ActivitiesList';

function Home({ activities }) {
  return (
    <div>
      <ActivitiesList activities={activities} />
    </div>
  );
}

export default Home;
