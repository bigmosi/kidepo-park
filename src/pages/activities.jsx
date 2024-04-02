import React from 'react';
import './activities.css';

const ActivitiesPage = ({ activities }) => {
  return (
    <div className="activities-container">
      <h1 className="activities-heading">Activities</h1>
      <ul className="activities-list">
        {activities.map((activity, index) => (
          <li key={index} className="activity-item">
            <span className="activity-index">{index + 1}.</span>
            <span className="activity-name">{activity}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ActivitiesPage;
