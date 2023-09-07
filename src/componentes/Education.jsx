import React from 'react';
import '../styles.css'

const Education = ({ institution, title, period }) => {
  return (
    <div className='CVRight'>
      <h3>{institution}</h3>
      <ul className='education-title'>
        <li>{title}</li>
      </ul>
      <ul className='education-period'>
        <li>{period}</li>
      </ul>
    </div>
  );
};

export default Education;
