import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import './Projects.css';

const Projects = () => {
  const { t } = useLanguage();
  const projectsData = [
    {
      id: 1,
      title: t.experience.jobs[0].title,
      date: t.experience.jobs[0].date,
      description: t.experience.jobs[0].description,
      tech: ['Node.js', 'MySQL', 'Express.js', 'React']
    },
    {
      id: 2,
      title: t.experience.jobs[1].title,
      date: t.experience.jobs[1].date,
      description: t.experience.jobs[1].description,
      tech: ['React.js', 'Material-UI', 'JavaScript', 'APIs']
    },
    {
      id: 3,
      title: t.experience.jobs[2].title,
      date: t.experience.jobs[2].date,
      description: t.experience.jobs[2].description,
      tech: ['Java', 'Spring Boot', 'Maven', 'Angular']
    }
  ];

  return (
    <section id="experience" className="projects section">
      <div className="container" data-aos="fade-up">
        <h2 className="section-title">
          <span className="accent"></span> {t.experience.title}
        </h2>

        <div className="projects-grid">
          {projectsData.map((project, index) => (
            <article
              key={project.id}
              className="project-card glass-panel"
              data-aos="fade-up"
              data-aos-delay={index * 150}
            >
              <div className="project-header">
                <div className="folder-icon" aria-hidden="true">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    role="img"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="feather feather-folder"
                    focusable="false"
                  >
                    <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
                  </svg>
                </div>
              </div>
              <h3 className="project-title">{project.title}</h3>
              <span className="project-date">{project.date}</span>
              <div className="project-description">
                <p>{project.description}</p>
              </div>
              <ul className="project-tech-list" aria-label="Technologies">
                {project.tech.map((tech, i) => (
                  <li key={i}>{tech}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
