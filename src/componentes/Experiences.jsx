import React from 'react';
import '../styles.css'

const Experiences = ({ position, company, period, descriptions }) => {
  return (
    <div className='CVRight'>
      <h3>{position}</h3>
      <ul className='experiences-company'>
        <li>{company}</li>
        <li>{period}</li>
        <ul>
          {descriptions.map((description, index) => (
            <li key={index}>{description}</li>
          ))}
        </ul>
      </ul>
    </div>
  );
};

export default Experiences;
