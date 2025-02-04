import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Skills = () => {
    const skills = [
        "HTML", "CSS", "JavaScript", "React", "C#",
        "Java", "Python", "GIT", "Github", "Boostrap",
        "SQL Server", "Mongodb", "ASP.NET"
    ];
    return (
        <section id="skills" className="text-center">            
            <h2 className="fw-bold mb-4">My Skills</h2>
            <div className="d-flex flex-wrap gap-2 justify-content-center">
                {skills.map((skill, index) => (
                    <span key={index} className="badge bg-light text-dark p-3 border">
                        {skill}
                    </span>
                ))}
            </div>
        </section>
    );
}

export default Skills;
