import React from 'react';
import ToggleContent from './ToggleContent';

const Lenguaje = (props) => {
  const { idiomas } = props;

  return (
    <div className='CVLeft'>
      <ToggleContent title={<h2>Idiomas</h2>}>
        <ul>
          {idiomas.map((idioma, index) => (
            <li key={index}>{idioma}</li>
          ))}
        </ul>
      </ToggleContent>
    </div>
  );
};

export default Lenguaje;
