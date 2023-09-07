import React, { useState } from 'react';

const AgregarHabilidad = (props) => {
  const { onAgregarHabilidad } = props;
  const [nuevaHabilidad, setNuevaHabilidad] = useState('');

  const handleChange = (event) => {
    setNuevaHabilidad(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (nuevaHabilidad.trim() !== '') {
      onAgregarHabilidad(nuevaHabilidad);
      setNuevaHabilidad('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className='agregar-habilidad'>
      <input
        type='text'
        value={nuevaHabilidad}
        onChange={handleChange}
        placeholder='Agregar nueva habilidad'
      />
      <button type='submit'>Agregar</button>
    </form>
  );
};

export default AgregarHabilidad;
