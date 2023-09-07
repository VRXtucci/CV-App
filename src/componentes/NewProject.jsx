import React, { useState } from 'react';
import '../styles.css';

const NewProject = ({ onAddProject }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [link, setLink] = useState('');

  const handleAddProject = () => {
    if (title && description) {
      const newProject = {
        title,
        description: [description], // Convertimos la descripción en un arreglo, como se hace en el componente Projects original.
        link,
      };
      onAddProject(newProject);
      setTitle('');
      setDescription('');
      setLink('');
    }
  };

  return (
    <div className='new-project'>
      <input
        type='text'
        placeholder='Title'
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type='text'
        placeholder='Description'
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <input
        type='text'
        placeholder='Link'
        value={link}
        onChange={(e) => setLink(e.target.value)}
      />
      <button onClick={handleAddProject}>Add Project</button>
    </div>
  );
};

export default NewProject;
