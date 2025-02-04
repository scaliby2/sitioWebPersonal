import React from 'react';

const About = () => {
    const skills = [
        "HTML", "CSS", "JavaScript", "React", "C#",
        "Java", "Python", "GIT", "Github", "Bootstrap",
        "SQL Server", "MongoDB", "ASP.NET"
    ];

    return (
        <section id="about" className="min-vh-100 d-flex align-items-center bg-light ">
            <div className="container">
                <h2 className="fw-bold text-center text-uppercase mb-2">About Me</h2>
                <div className="d-flex justify-content-center mb-4">
                    <div style={{ width: '50px', height: '4px', backgroundColor: '#6f42c1', borderRadius: '2px' }}></div>
                </div>
                <p className="text-center text-muted mb-5">
                    Here you will find more information about me, what I do, and my current skills mostly in terms of programming and technology
                </p>

                <div className="row align-items-start">
                    {/* Columna 1: Sobre Mí */}
                    <div className="col-md-6 mb-4">
                        <h3 className="fw-bold mb-3">Get to know me!</h3>
                        <p>
                            I'm a <strong>Frontend Focused Web Developer</strong> building and managing the Front-end of Websites and Web Applications that leads to the success of the overall product.
                            Check out some of my work in the <strong>Projects</strong> section.
                        </p>
                        <p>
                            I like sharing content related to <strong>Web Development</strong> to help the Dev Community. Feel free to connect with me on <a href="#" className="text-decoration-none text-primary fw-bold">LinkedIn</a> and <a href="#" className="text-decoration-none text-primary fw-bold">Instagram</a>.
                        </p>
                        <p>
                            I'm open to <strong>Job</strong> opportunities where I can contribute, learn, and grow.
                        </p>
                        <a  className="btn btn-primary rounded-3 px-4 py-2 mt-3" href="#contact" >Contact</a>
                    </div>

                    {/* Columna 2: My Skills */}
                    <div className="col-md-6">
                        <h3 className="fw-bold mb-3">My Skills</h3>
                        <div className="d-flex flex-wrap gap-2">
                            {skills.map((skill, index) => (
                                <span key={index} className="badge bg-light text-dark p-2 border rounded-3 shadow-sm">
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
