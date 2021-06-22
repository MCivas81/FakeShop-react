import React from 'react';
import ActivityCard from './ActivityCard';

import './ActivitiesList.css';

function ActivitiesList({ activities }) {
  return (
    <div className='activities__container'>
      <div className='activities__wrapper'>
        {activities.map((activity) => {
          return <li key={activity.uuid}>{<ActivityCard activity={activity} />}</li>;
        })}
      </div>
    </div>
  );
}

export default ActivitiesList;
