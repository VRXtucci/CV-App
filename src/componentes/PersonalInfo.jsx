import React from 'react';

const PersonalInfo = ({ name, degree, description }) => {
  return (
    <div className='personal-info'>
      <h1 className='personal-name'>{name}</h1>
      <h2 className='personal-degree'>{degree}</h2>
      <p className='personal-description'>{description}</p>
    </div>
  );
};

export default PersonalInfo;
