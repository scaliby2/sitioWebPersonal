import React from "react";

const About = () => {
  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "C#",
    "Java",
    "Python",
    "GIT",
    "Github",
    "Bootstrap",
    "SQL Server",
    "MongoDB",
    "ASP.NET",
  ];

  return (
    <section
      id="about"
      className="min-vh-100 d-flex align-items-center bg-light "
    >
      <div className="container">
        <h2 className="fw-bold text-center text-uppercase mb-2">
          Acerca de mi
        </h2>
        <div className="d-flex justify-content-center mb-4">
          <div
            style={{
              width: "50px",
              height: "4px",
              backgroundColor: "#6f42c1",
              borderRadius: "2px",
            }}
          ></div>
        </div>
        <p className="text-center text-muted mb-5">
          Aquí encontrarás más información sobre mí, lo que hago y mis
          habilidades actuales, principalmente en términos de programación y
          tecnología.
        </p>

        <div className="row align-items-start">
          {/* Columna 1: Sobre Mí */}
          <div className="col-md-6 mb-4">
            <h3 className="fw-bold mb-3">¡Conóceme!</h3>
            <p>
              {" "}
              Soy un <strong>Desarrollador Full Stack</strong> con experiencia
              en la creación y gestión tanto del <strong>Frontend</strong> como
              del <strong>Backend</strong> de sitios web y aplicaciones web. Mi
              objetivo es construir soluciones completas que contribuyan al
              éxito general del producto. Echa un vistazo a algunos de mis
              proyectos en la sección de <strong>Proyectos</strong>.{" "}
            </p>

            <p>
              Estoy abierto a oportunidades de <strong>empleo</strong> donde
              pueda contribuir, aprender y crecer.
            </p>
            <a
              className="btn btn-dark rounded-3 px-4 py-2 mt-3"
              href="#contact"
            >
              Contactame
            </a>
            <a
              className="btn btn-dark rounded-3 px-4 py-2 mt-3 ms-3"
              href="/cv.pdf"
              download={"Jose de Jesus Monroy Dominguez"}
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="bi bi-file-earmark-text"></i> CV
            </a>
          </div>

          {/* Columna 2: My Skills */}
          <div className="col-md-6">
            <h3 className="fw-bold mb-3">My Skills</h3>
            <div className="d-flex flex-wrap gap-2">
              {skills.map((skill, index) => (
                <span
                  key={index}
                  className="badge bg-light text-dark p-2 border rounded-3 shadow-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
