import React, { useState } from 'react';
import ToggleContent from './componentes/ToggleContent';
import PersonalInfo from './componentes/PersonalInfo';
import Education from './componentes/Education';
import Experiences from './componentes/Experiences';
import Projects from './componentes/Projects';
import NewEducation from './componentes/NewEducation';
import NewProject from './componentes/NewProject'; 
import './styles.css';

const CVRight = () => {
  // Datos para la experiencia laboral
  const experiencesData = [
    // ... (datos de experiencia laboral)
  ];

  // Datos para la educación
  const initialEducationData = [
    {
      institution: 'I.N.C.E.S',
      title: 'Curso en Repacion y Mantenimiento En PC',
      period: 'Febrero 2023 - Abril 2023',
    },
    {
      institution: 'I.C.P Simon Bolivar',
      title: 'Curso en Repacion y Mantenimiento En PC',
      period: 'Marzo 2019 - Mayo 2019',
    },
    {
      institution: 'La Iglesia De Jesuscris SUD',
      title: 'Curso Como Iniciar y Hacer Crecer mi Negocio',
      period: 'Septiembre 2022 - Noviembre 2022',
    },
    // Agrega más educación aquí si es necesario
  ];


  const [educationData, setEducationData] = useState(initialEducationData);

  const handleAddEducation = (newEducation) => {
    setEducationData([...educationData, newEducation]);
  };

  // Datos para proyectos realizados
  const initialProjectsData = [
    {
      title: 'INSURE - Web',
      descriptions: [
        'Diseño de una página Web utilizando CSS y HTML ',
        'Proyecto de un Curso Realizado desde Cero Con VSCode',
        // Agrega más descripciones aquí
      ],
      link: 'https://mini-proyecto.netlify.app',
    },
    {
      title: 'Protfolio - WEB Personal',
      descriptions: [
        'Diseño he Interfas Realizada con HTML y CSS',
        'Propuesta de Web Desarrollado En un entorno de Aprendizaje ',
        // Agrega más descripciones aquí
      ],
      link: 'https://josetucciportfolio.netlify.app',
    },
    {
      title: 'To Do App - Web',
      descriptions: [
        'Programa Realizado con HTML, CSS y JAVASCRIPT',
        'Proyecto Final del Primer Nivel del Curso de Programación diseño e interfaz realizado desde cero.',
        'Avances de Mejoramiento en el entorno Gráfico y el JAVASCRIPT',
        // Agrega más descripciones aquí
      ],
      link: 'https://todo-app.netlify.app',
    },
    // Agrega más proyectos aquí
  ];

  const [projectsData, setProjectsData] = useState(initialProjectsData);

  const handleAddProject = (newProject) => {
    setProjectsData([...projectsData, newProject]);
  };

  return (
    <div className='ContainerRight'>
      <PersonalInfo
        name='Jose C Tucci Peña'
        degree='Bachiller'
        description='Me considero una persona amable y cariñosa con los demás. Desde muy pequeño, me han interesado las computadoras y, desde que descubrí el mundo de la programación y el desarrollo de contenido, mi interés se ha enfocado más en eso. Me gustan los animes, los videojuegos y las películas de todo tipo. Espero que durante este tiempo que vamos a trabajar juntos, podamos crecer tanto en lo personal como en lo profesional. Con mucho gusto, espero que nuestra colaboración sea fructífera tanto para mí como para la empresa.'
      />

      <ToggleContent title={<h2>Experiencia Laboral</h2>}>
        {experiencesData.map((experience, index) => (
          <Experiences key={index} {...experience} />
        ))}
      </ToggleContent>

      <ToggleContent title={<h2>Educación</h2>}>
        {educationData.map((education, index) => (
          <Education key={index} {...education} />
        ))}
        {/* Componente para agregar nueva educación */}
        <NewEducation onAddEducation={handleAddEducation} />
      </ToggleContent>

      <ToggleContent title={<h2>Proyectos Realizados</h2>}>
        {projectsData.map((project, index) => (
          <Projects key={index} {...project} />
        ))}
        {/* Componente para agregar nuevo proyecto */}
        <NewProject onAddProject={handleAddProject} />
      </ToggleContent>
    </div>
  );
};

export default CVRight;