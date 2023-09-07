import React from 'react';
import '../styles.css'

const Projects = ({ title, descriptions, link }) => {
  return (
    <div className='CVRight'>
      <h3>{title}</h3>
      <ul className='projects-description'>
        {descriptions.map((description, index) => (
          <li key={index}>{description}</li>
        ))}
      </ul>
      {link && (
        <a href={link} target='_blank' rel='noopener noreferrer' className='projects-link'>
          View project
        </a>
      )}
    </div>
  );
};

export default Projects;
