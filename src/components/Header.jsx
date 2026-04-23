import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import './Header.css';

const SECTIONS = ['about', 'experience', 'contact'];

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [logoError, setLogoError] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const { lang, t, toggleLanguage } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Scroll spy
      let current = 'home';
      for (const id of SECTIONS) {
        const el = document.getElementById(id);
        if (el) {
          const top = el.getBoundingClientRect().top;
          if (top <= 120) current = id;
        }
      }
      setActiveSection(current);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <div className="container header-container">
        <a href="#home" className="logo" onClick={closeMenu} aria-label="Bertin Venancio Rivas — Inicio">
          {!logoError ? (
            <img
              src="/logo.png"
              alt="BVR Logo"
              className="logo-img"
              onError={() => setLogoError(true)}
            />
          ) : (
            <span>BVR<span>.</span></span>
          )}
        </a>

        <button
          type="button"
          className={`menu-toggle ${menuOpen ? 'open' : ''}`}
          aria-label={t.nav.menuAria}
          aria-expanded={menuOpen}
          aria-controls="main-nav"
          onClick={() => setMenuOpen(o => !o)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <nav
          id="main-nav"
          className={`nav-links ${menuOpen ? 'open' : ''}`}
          aria-label={t.nav.menuAria}
        >
          <a href="#about" onClick={closeMenu} className={activeSection === 'about' ? 'active' : ''}>{t.nav.about}</a>
          <a href="#experience" onClick={closeMenu} className={activeSection === 'experience' ? 'active' : ''}>{t.nav.experience}</a>
          <a href="#contact" onClick={closeMenu} className={activeSection === 'contact' ? 'active' : ''}>{t.nav.contact}</a>
          <button
            type="button"
            className="btn btn-outline lang-toggle"
            onClick={toggleLanguage}
            aria-label={t.nav.toggleAria}
          >
            {lang === 'es' ? 'EN' : 'ES'}
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
