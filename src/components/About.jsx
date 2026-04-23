import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import './About.css';

const About = () => {
  const { t } = useLanguage();
  const skills = t.about.skills;

  return (
    <section id="about" className="about section">
      <div className="container" data-aos="fade-up">
        <h2 className="section-title">
          <span className="accent"></span> {t.about.title}
        </h2>

        <div className="about-content">
          <div className="about-text glass-panel">
            <p>{t.about.p1}</p>
            <p>{t.about.p2}</p>
            <p>{t.about.p3}</p>

            <ul className="skills-list">
              {skills.map((skill, index) => (
                <li key={index} className="skill-item">
                  <span className="accent" aria-hidden="true">▹</span> {skill}
                </li>
              ))}
            </ul>
          </div>

          <div className="about-stats">
            <div className="stat-box glass-panel">
              <h3 className="stat-number accent">2+</h3>
              <p className="stat-label">{t.about.stat1}</p>
            </div>
            <div className="stat-box glass-panel">
              <h3 className="stat-number accent">2</h3>
              <p className="stat-label">{t.about.stat2}</p>
            </div>
            <div className="stat-box glass-panel">
              <h3 className="stat-number accent">21</h3>
              <p className="stat-label">{t.about.stat3}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
