import React from 'react';
import ToggleContent from './ToggleContent';
import User from '../images/User.webp';
import '../styles.css'


const Perfil = (props) => {
  const { direccion, correo, telefono, permiso,  } = props;

  return (
    <div className='CVLeft'>
      <ToggleContent title={<h2>Perfil</h2>}>
      <div className='containerImg'>
      <img src={User} alt="Foto de perfil" />
      </div>
      <h3>Dirección:</h3>
      <p>{direccion}</p>
      <h3>Teléfono:</h3>
      <p>{telefono}</p>
      <h3>Correo electrónico:</h3>
      <p>{correo}</p>
      </ToggleContent>
    </div>
  );
};

export default Perfil;
