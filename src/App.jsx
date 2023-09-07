import React from 'react';
import CVLeft from './CVLeft';
import CVRight from './CVRight';
import './styles.css'



const App = () => {
  return (
    <div className='CVContainer'>
      <CVLeft />
      <CVRight/>
    </div>
  );
};

export default App;
