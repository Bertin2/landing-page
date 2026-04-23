import React, { createContext, useState, useContext, useEffect } from 'react';

const LanguageContext = createContext();

// eslint-disable-next-line react-refresh/only-export-components
export const useLanguage = () => useContext(LanguageContext);

const STORAGE_KEY = 'bvr_lang';

const translations = {
  es: {
    nav: {
      about: 'Sobre mí',
      experience: 'Experiencia',
      contact: 'Contacto',
      toggleAria: 'Cambiar idioma a inglés',
      menuAria: 'Menú principal'
    },
    hero: {
      subtitle: 'Hola, soy',
      title: 'Bertin Venancio Rivas',
      role: 'Frontend & Mobile App Developer',
      description: 'Ingeniero de software de Victoria de Durango, México. Me especializo en construir interfaces modernas y aplicaciones móviles de alto rendimiento (con React y Expo), cuidando siempre la experiencia de usuario y con gran interés en la Inteligencia Artificial.',
      btnPrimary: 'Ver mi Experiencia',
      btnOutline: 'Contactar',
      freelanceBadge: 'Disponible para proyectos freelance',
      downloadCV: 'Descargar CV',
      badge1: 'React',
      badge2: 'React Native',
      badge3: 'Expo',
      badge4: 'JavaScript',
      badge5: 'Frontend',
      badge6: 'UI/UX'
    },
    about: {
      title: '01. Sobre mí',
      p1: '¡Hola! Soy un Desarrollador apasionado por el frontend y el desarrollo móvil. Actualmente trabajo como Frontend Web Developer en el Gobierno del Estado de Durango.',
      p2: 'Me gradué de la Universidad Politécnica de Durango (UNIPOLI) y actualmente estoy cursando una Maestría en Inteligencia Artificial en la UNIR. Disfruto creando arquitecturas limpias, escalables y aprendiendo constantemente nuevas tecnologías.',
      p3: 'Aptitudes y tecnologías con las que he trabajado:',
      stat1: 'Años de Experiencia',
      stat2: 'Diplomados (IA y Soft Skills)',
      stat3: 'Aptitudes y Skills',
      skills: [
        'JavaScript', 'Node.js', 'React.js', 'Python',
        'Java', 'Spring Boot', 'MySQL', 'MongoDB',
        'Docker', 'Inteligencia Artificial', 'Material-UI', 'Angular'
      ]
    },
    experience: {
      title: '02. Mi Experiencia',
      viewProjectAria: 'Ver proyecto',
      viewCodeAria: 'Ver código fuente',
      jobs: [
        {
          id: 1,
          title: 'Programador Full Stack',
          date: 'Ene 2024 - Presente',
          description: 'Gobierno del Estado de Durango. Desarrollo y mantenimiento de sistemas estatales utilizando arquitecturas modernas y bases de datos relacionales.'
        },
        {
          id: 2,
          title: 'Frontend Web Developer',
          date: 'Mar 2023 - Ene 2024',
          description: 'Gobierno del Estado de Durango. Construcción de interfaces de usuario interactivas, integración con APIs RESTful y mejora de la experiencia de usuario.'
        },
        {
          id: 3,
          title: 'Programador Full Stack (Prácticas)',
          date: 'Ago 2022 - Dic 2022',
          description: 'Black Hole Information Technologies. Desarrollo de software colaborando en múltiples proyectos con metodologías ágiles en un entorno híbrido.'
        }
      ]
    },
    contact: {
      kicker: '03. ¿Qué sigue?',
      title: 'Ponte en contacto',
      desc: 'Actualmente estoy abierto a nuevas oportunidades. Ya sea que tengas una pregunta, quieras colaborar en un proyecto, o saludarme, ¡haré todo lo posible por responderte!',
      btn: 'Saludar',
      footer1: 'Construido con React & Vanilla CSS.',
      footer2: 'Diseñado y Desarrollado por Bertin Venancio Rivas',
      linkedinAria: 'Visitar perfil de LinkedIn',
      githubAria: 'Visitar perfil de GitHub',
      scrollTopAria: 'Volver al inicio'
    }
  },
  en: {
    nav: {
      about: 'About',
      experience: 'Experience',
      contact: 'Contact',
      toggleAria: 'Switch language to Spanish',
      menuAria: 'Main menu'
    },
    hero: {
      subtitle: "Hello, I'm",
      title: 'Bertin Venancio Rivas',
      role: 'Frontend & Mobile App Developer',
      description: 'Software Engineer based in Victoria de Durango, Mexico. I specialize in building modern web interfaces and high-performance mobile apps (using React and Expo), always focusing on the user experience and with a huge interest in Artificial Intelligence.',
      btnPrimary: 'View Experience',
      btnOutline: 'Contact Me',
      freelanceBadge: 'Available for freelance projects',
      downloadCV: 'Download CV',
      badge1: 'React',
      badge2: 'React Native',
      badge3: 'Expo',
      badge4: 'JavaScript',
      badge5: 'Frontend',
      badge6: 'UI/UX'
    },
    about: {
      title: '01. About Me',
      p1: "Hi! I'm a Developer passionate about frontend and mobile app development. I currently work as a Frontend Web Developer for the State Government of Durango.",
      p2: "I graduated from the Universidad Politécnica de Durango (UNIPOLI) and I'm currently pursuing a Master's degree in Artificial Intelligence at UNIR. I enjoy creating clean, scalable architectures and constantly learning new technologies.",
      p3: 'Skills and technologies I have worked with:',
      stat1: 'Years of Experience',
      stat2: 'Diplomas (AI & Soft Skills)',
      stat3: 'Skills & Aptitudes',
      skills: [
        'JavaScript', 'Node.js', 'React.js', 'Python',
        'Java', 'Spring Boot', 'MySQL', 'MongoDB',
        'Docker', 'Artificial Intelligence', 'Material-UI', 'Angular'
      ]
    },
    experience: {
      title: '02. My Experience',
      viewProjectAria: 'View project',
      viewCodeAria: 'View source code',
      jobs: [
        {
          id: 1,
          title: 'Full Stack Developer',
          date: 'Jan 2024 - Present',
          description: 'State Government of Durango. Development and maintenance of state systems using modern architectures and relational databases.'
        },
        {
          id: 2,
          title: 'Frontend Web Developer',
          date: 'Mar 2023 - Jan 2024',
          description: 'State Government of Durango. Building interactive user interfaces, integrating RESTful APIs, and improving the overall user experience.'
        },
        {
          id: 3,
          title: 'Full Stack Developer (Internship)',
          date: 'Aug 2022 - Dec 2022',
          description: 'Black Hole Information Technologies. Software development collaborating on multiple projects with agile methodologies in a hybrid environment.'
        }
      ]
    },
    contact: {
      kicker: "03. What's Next?",
      title: 'Get In Touch',
      desc: "I'm currently open to new opportunities. Whether you have a question, want to collaborate on a project, or just want to say hi, I'll try my best to get back to you!",
      btn: 'Say Hello',
      footer1: 'Built with React & Vanilla CSS.',
      footer2: 'Designed & Developed by Bertin Venancio Rivas',
      linkedinAria: 'Visit LinkedIn profile',
      githubAria: 'Visit GitHub profile',
      scrollTopAria: 'Back to top'
    }
  }
};

const getInitialLang = () => {
  if (typeof window === 'undefined') return 'es';
  try {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (stored === 'es' || stored === 'en') return stored;
  } catch { /* ignore storage errors */ }
  const browser = (navigator.language || 'es').toLowerCase();
  return browser.startsWith('en') ? 'en' : 'es';
};

export const LanguageProvider = ({ children }) => {
  const [lang, setLang] = useState(getInitialLang);
  const t = translations[lang];

  useEffect(() => {
    try {
      window.localStorage.setItem(STORAGE_KEY, lang);
    } catch { /* ignore storage errors */ }
    if (typeof document !== 'undefined') {
      document.documentElement.lang = lang;
    }
  }, [lang]);

  const toggleLanguage = () => {
    setLang(prev => (prev === 'es' ? 'en' : 'es'));
  };

  return (
    <LanguageContext.Provider value={{ lang, t, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};
