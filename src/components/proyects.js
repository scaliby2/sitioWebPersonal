import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const projects = [
  {
    title: "Encriptador Reto Alura Latam",
    description:
      "Este proyecto no solo refuerza conceptos de programación, sino que también introduce a los estudiantes en prácticas de desarrollo web, manejo de cadenas de texto y creación de algoritmos básicos de encriptación. Además, fomenta la creatividad al permitir a los participantes diseñar y personalizar su propia interfaz de usuario.",
    image: `${process.env.PUBLIC_URL}/alura.png`,
    link: "https://github.com/scaliby2/encriptador_react",
    page: "https://scaliby2.github.io/encriptador_react/",
  },
  {
    title: "Sistema de Recursos Humanos",
    description:
      "El Sistema de Recursos Humanos es una aplicación web diseñada para gestionar de manera eficiente la información de los empleados dentro de una empresa. Proporciona funcionalidades clave como la visualización, edición, eliminación y registro de empleados, permitiendo a los administradores mantener actualizada la base de datos de personal.",
    image: `${process.env.PUBLIC_URL}/srh.png`,
    link: "https://github.com/scaliby2/sistema-de-recursos-humanos-web",
    
  },
  {
    title: "Plantilla para Portafolio",
    description:
      "Demostrar mis habilidades en programación a través de proyectos y soluciones desarrolladas, evidenciando mi capacidad para analizar problemas, diseñar soluciones eficientes e implementar código de calidad en diversos lenguajes y tecnologías.",
    image: `${process.env.PUBLIC_URL}/portafolio.png`,
    link: "https://github.com/scaliby2/sitioWebPersonal",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="container py-5">
      {projects.map((project, index) => (
        <div
          className="row align-items-center mb-5"
          key={index}
          style={{ textAlign: "left" }}
        >
          {/* Alterna el orden en cada fila */}
          <div
            className={`col-md-6 ${
              index % 2 === 0 ? "order-md-1" : "order-md-2"
            }`}
          >
            <img
              src={project.image}
              alt="Project Preview"
              className="img-fluid"
              style={{ maxWidth: "90%", marginTop: "20px" }}
            />
          </div>

          <div
            className={`col-md-6 ${
              index % 2 === 0 ? "order-md-2" : "order-md-1"
            }`}
          >
            <h2 className="fw-bold">{project.title}</h2>
            <p>{project.description}</p>
            <a href={project.link} className="btn btn-dark px-4 py-2">
              Link del proyecto
            </a>
            {project.page && (
              <a href={project.page} className="btn btn-dark px-4 py-2 ms-3">
                Ver en tiempo real
              </a>
            )}
          </div>
        </div>
      ))}
    </section>
  );
};

export default Projects;
