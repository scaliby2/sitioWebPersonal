import React from "react";
import "../App.css";
const Start = () => {
  return (
    <section
      id="start"
      style={{
        backgroundImage: "url('/fondo.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
      className="bg-brown d-flex align-items-center justify-content-center min-vh-100 position-relative"
    >
      {/* Contenido principal */}
      <div className="container text-center">
        <h2 className="fw-bold text-center text-uppercase mb-2">
          Acerca de mi
        </h2>
        <h1 className="display-4 fw-bold">Hola, soy Jose de Jesus </h1>
        <p className="lead fs-4">
          Soy un desarrollador Full Stack con experiencia en el diseño,
          desarrollo e implementación de aplicaciones web. Tengo habilidades en
          tecnologías tanto de frontend como de backend, así como en la
          administración de bases de datos.
        </p>
        <div className="mt-4">
          <a className="btn btn-dark btn-lg" href="#projects">
            Proyectos
          </a>
        </div>
      </div>
    </section>
  );
};

export default Start;
