import React from 'react';
import ToggleContent from './ToggleContent';

const Programas = (props) => {
  const { programas } = props;

  return (
    <div className='CVLeft'>
      <ToggleContent title={<h2>Programas</h2>}>
        <ul>
          {programas.map((programa, index) => (
            <li key={index}>{programa}</li>
          ))}
        </ul>
      </ToggleContent>
    </div>
  );
};

export default Programas;
