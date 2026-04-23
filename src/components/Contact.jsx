import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import './Contact.css';

const currentYear = new Date().getFullYear();

const Contact = () => {
  const { t } = useLanguage();
  return (
    <section id="contact" className="contact section">
      <div className="container contact-container" data-aos="fade-up">
        <h2 className="contact-kicker accent">{t.contact.kicker}</h2>
        <h3 className="contact-title">{t.contact.title}</h3>
        <p className="contact-desc">
          {t.contact.desc}
        </p>
        <a
          href="mailto:bertinvenancio3526.321@gmail.com"
          className="btn btn-primary contact-btn"
        >
          {t.contact.btn}
        </a>

        <div className="social-links">
          <a
            href="https://www.linkedin.com/in/bvr-dev/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label={t.contact.linkedinAria}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              role="img"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
              focusable="false"
            >
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
              <rect x="2" y="9" width="4" height="12"></rect>
              <circle cx="4" cy="4" r="2"></circle>
            </svg>
          </a>
          <a
            href="https://github.com/bvr-dev"
            target="_blank"
            rel="noopener noreferrer"
            aria-label={t.contact.githubAria}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              role="img"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
              focusable="false"
            >
              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
            </svg>
          </a>
        </div>
      </div>

      <footer className="footer">
        <p>{t.contact.footer1}</p>
        <p className="footer-credits">© {currentYear} — {t.contact.footer2}</p>
      </footer>
    </section>
  );
};

export default Contact;
