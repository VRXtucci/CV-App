import React from 'react';
import ToggleContent from './ToggleContent';

const Habilidades = (props) => {
  const { habilidades } = props;

  return (
    <div className='CVLeft'>
      <ToggleContent title={<h2>Habilidades</h2>}>
        <ul>
          {habilidades.map((habilidad, index) => (
            <li key={index}>{habilidad}</li>
          ))}
        </ul>
      </ToggleContent>
    </div>
  );
};

export default Habilidades;
