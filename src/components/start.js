import React from 'react';

const Start = () => {
    return (
        <section id="start" className="bg-brown d-flex align-items-center justify-content-center min-vh-100 position-relative">
           
            {/* Contenido principal */}
            <div className="container text-center">
            <h2 className="fw-bold text-center text-uppercase mb-2">Acerca de mi</h2>
                <h1 className="display-4 fw-bold">Hola, soy Jose de Jesus </h1>
                <p className="lead fs-4">
                Dopefolio is a successful Open-Source project that I created which has been featured on some of the biggest tech sites like CSS-Tricks, Hostinger, etc & used by thousands of developers globally.
                </p>
                <div className="mt-4">
                    <a className="btn btn-primary btn-lg" href="#projects">Proyectos</a>
                </div>
            </div>
        </section>
    );
}

export default Start;
