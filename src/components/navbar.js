import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Función para alternar la navbar
  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  // Función para cerrar la navbar cuando se hace clic en un enlace
  const closeNavbar = () => {
    setIsOpen(false);
  };

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary fixed-top">
      <div className="container-fluid">
        {/* Contenedor para la imagen y el nombre */}
        <div className="d-flex align-items-center">
          <img
            src={`${process.env.PUBLIC_URL}/perfil.jpg`}
            alt="Jose de Jesus Monroy"
            className="rounded-circle"
            style={{
              width: "40px",
              height: "40px",
              marginRight: "10px",
              background: "white",
              boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
            }}
          />
          <span style={{ color: "black", fontWeight: "bold" }}>
            {" "}
            Jose de Jesus Monroy Dominguez
          </span>
        </div>

        {/* Botón de menú hamburguesa */}
        <button
          className="navbar-toggler"
          type="button"
          onClick={toggleNavbar}
          aria-expanded={isOpen}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Menú colapsable */}
        <div
          className={`collapse navbar-collapse ${isOpen ? "show" : ""}`}
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav ms-auto text-end">
            <li className="nav-item">
              <a
                className="nav-link d-block"
                href="#start"
                onClick={closeNavbar}
                style={{ color: "black", fontWeight: "bold" }}
              >
                INICIO
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link d-block"
                href="#about"
                onClick={closeNavbar}
                style={{ color: "black", fontWeight: "bold" }}
              >
                ACERCA DE MI
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link d-block"
                href="#projects"
                onClick={closeNavbar}
                style={{ color: "black", fontWeight: "bold" }}
              >
                PROYECTOS
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link d-block"
                href="#contact"
                onClick={closeNavbar}
                style={{ color: "black", fontWeight: "bold" }}
              >
                CONTACTAME
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
