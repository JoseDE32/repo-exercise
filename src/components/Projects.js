import React from 'react';
import ProjectCard from './ProjectCard'; 
import img1 from './images/capture-20231229-162611.jpg'; 
import img2 from './images/people-working-on-a-project.jpg'; 
import img3 from './images/project-and-process.jpg'; 
import img4 from './images/trabajo-por-proyectos3.jpg'; 

const Projects = () => {
  const projects = [
    { image: img1, title: 'Proyecto 1', description: 'Una aplicación web innovadora que revoluciona la forma en que las personas gestionan sus tareas diarias. Descubre cómo simplificar tu vida con nuestra plataforma intuitiva y fácil de usar.' },
    { image: img2, title: 'Proyecto 2', description: 'Un juego móvil adictivo que desafía tus habilidades estratégicas y te sumerge en un mundo de aventuras y misterios. Únete a la comunidad de jugadores y compite por la supremacía.' },
    { image: img3, title: 'Proyecto 3', description: 'Un software de análisis de datos avanzado que ayuda a las empresas a tomar decisiones informadas y optimizar sus operaciones. Descubre cómo transformar tus datos en conocimientos valiosos.' },
    { image: img4, title: 'Proyecto 4', description: 'Una plataforma de comercio electrónico revolucionaria que conecta a vendedores y compradores de manera inteligente y eficiente. Explora un nuevo enfoque para el comercio en línea y haz crecer tu negocio.' },
  ];

  return (
    <section className="projects-container">
      {projects.map((project, index) => (
        <ProjectCard key={index} image={project.image} title={project.title} description={project.description} />
      ))}
    </section>
  );
};

export default Projects;
