import React, { useState } from 'react';
import '../styles.css';

const NewEducation = ({ onAddEducation }) => {
  const [institution, setInstitution] = useState('');
  const [title, setTitle] = useState('');
  const [period, setPeriod] = useState('');

  const handleAddEducation = () => {
    if (institution && title && period) {
      const newEducation = {
        institution,
        title,
        period,
      };
      onAddEducation(newEducation);
      setInstitution('');
      setTitle('');
      setPeriod('');
    }
  };

  return (
    <div className='new-education'>
      <input
        type='text'
        placeholder='Institution'
        value={institution}
        onChange={(e) => setInstitution(e.target.value)}
      />
      <input
        type='text'
        placeholder='Title'
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type='text'
        placeholder='Period'
        value={period}
        onChange={(e) => setPeriod(e.target.value)}
      />
      <button onClick={handleAddEducation}>Add Education</button>
    </div>
  );
};

export default NewEducation;
