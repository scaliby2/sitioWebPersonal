import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Projects = () => {
    return (
        <section id="projects" className="container py-5 ">
            <div className="row align-items-center">
                <div className="col-md-6 text-center">
                    <img 
                        src="/dopefolio.png" 
                        alt="Project Preview" 
                        className="img-fluid"
                        style={{ maxWidth: '90%',marginTop:'20px' }}
                    />
                </div>

                <div className="col-md-6 text-center text-md-start" >
                    <h2 className="fw-bold">Dopefolio</h2>
                    <p>
                        Dopefolio is a successful Open-Source project that I created 
                        which has been featured on some of the biggest tech sites like 
                        CSS-Tricks, Hostinger, etc & used by thousands of developers globally.
                    </p>
                    <a href="#" className="btn btn-primary px-4 py-2 " >CASE STUDY</a>
                </div>
            </div>
            <div className="row align-items-center">
                <div className="col-md-6 text-center">
                    <img 
                        src="/dopefolio.png" 
                        alt="Project Preview" 
                        className="img-fluid"
                        style={{ maxWidth: '90%',marginTop:'20px'}}
                    />
                </div>

                <div className="mt-4 col-md-6 text-center text-md-start">
                    <h2 className="fw-bold">Dopefolio</h2>
                    <p>
                        Dopefolio is a successful Open-Source project that I created 
                        which has been featured on some of the biggest tech sites like 
                        CSS-Tricks, Hostinger, etc & used by thousands of developers globally.
                    </p>
                    <a href="#" className="btn btn-primary px-4 py-2">CASE STUDY</a>
                </div>
            </div>
            
            <div className="row align-items-center text-center ">
                <div className="col-md-6 text-center text-md-start">
                    <img 
                        src="/dopefolio.png" 
                        alt="Project Preview" 
                        className="img-fluid"
                        style={{ maxWidth: '90%',marginTop:'20px' }}
                    />
                </div>

                <div className="mt-4 col-md-6 text-center text-md-start">
                    <h2 className="fw-bold">Dopefolio</h2>
                    <p>
                        Dopefolio is a successful Open-Source project that I created 
                        which has been featured on some of the biggest tech sites like 
                        CSS-Tricks, Hostinger, etc & used by thousands of developers globally.
                    </p>
                    <a href="#" className=" btn btn-primary px-4 py-2">CASE STUDY</a>
                </div>
            </div>
        </section>
    );
}

export default Projects;
