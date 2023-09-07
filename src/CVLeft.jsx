import React, { useState } from 'react';
import AgregarHabilidad from './componentes/AddSkills';
import Perfil from './componentes/Profile';
import Habilidades from './componentes/Skills';
import Intereses from './componentes/Interests';
import Lenguaje from './componentes/Languege';
import Programas from './componentes/Programs';
import './styles.css'


const CVLeft = () => {
  const habilidadesData = ['HTML', 'CSS', 'Javascript'];
  const interesesData = ['Video Juegos', 'La Musica', 'Programar', 'Dibujar', 'Las Peliculas'];
  const lenguajeData = ['Español', 'Inglés'];
  const programasData = ['Photoshop', 'Illustrator', 'Offimatica', 'Zoom'];

  const [habilidades, setHabilidades] = useState(habilidadesData);

  const agregarHabilidad = (nuevaHabilidad) => {
    setHabilidades((prevHabilidades) => [...prevHabilidades, nuevaHabilidad]);
  };

  return (
    <div className='ContainerLeft'>
      <Perfil
        foto="ruta/de/la/foto.jpg"
        direccion="Urb Carabobo Calle 03 Vrda 05 Casa #10"
        correo="tucci.jose023@gmail.com"
        telefono="+58 412-1772750"
      />
      <Habilidades habilidades={habilidades} />
      <AgregarHabilidad onAgregarHabilidad={agregarHabilidad} />
      <Intereses intereses={interesesData} />
      <Lenguaje idiomas={lenguajeData} />
      <Programas programas={programasData} />
    </div>
  );
};

export default CVLeft;
