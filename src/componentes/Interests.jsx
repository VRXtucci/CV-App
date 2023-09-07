import React from 'react';
import ToggleContent from './ToggleContent';

const Intereses = (props) => {
  const { intereses } = props;

  return (
    <div className='CVLeft'>
      <ToggleContent title={<h2>Intereses</h2>}>
        <ul>
          {intereses.map((interes, index) => (
            <li key={index}>{interes}</li>
          ))}
        </ul>
      </ToggleContent>
    </div>
  );
};

export default Intereses;
