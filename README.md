# Bertin Venancio Rivas — Portfolio

Landing page personal de **Bertin Venancio Rivas** (BVR), Frontend & Mobile App Developer basado en Victoria de Durango, México.

Sitio en producción: **[landing-page.bvr-dev.com](https://landing-page.bvr-dev.com/)**

## Stack

- **React 19** con Vite 8
- **Vanilla CSS** (sin frameworks de estilos)
- **AOS** para animaciones on-scroll
- **Context API** para i18n (español / inglés)
- Desplegado en **Render**

## Características

- Diseño responsive con menú hamburger en móvil
- Modo oscuro por defecto con paleta glassmorphism
- i18n ES / EN con persistencia en `localStorage` y autodetección del idioma del navegador
- SEO optimizado: Open Graph, Twitter Cards, JSON-LD (Person), canonical
- Accesibilidad: skip-to-content, `aria-label`s, focus ring visible, soporte de `prefers-reduced-motion`
- Scroll spy en navegación y botón flotante "volver arriba"
- Descarga de CV en PDF

## Scripts

```bash
npm install      # instala dependencias
npm run dev      # servidor de desarrollo
npm run build    # build de producción (salida en /dist)
npm run preview  # previsualiza el build
npm run lint     # ejecuta ESLint
```

## Estructura

```
src/
├── components/       # Header, Hero, About, Projects, Contact, ScrollToTop
├── context/          # LanguageContext (i18n)
├── assets/           # imágenes locales
├── App.jsx
├── main.jsx
└── index.css         # estilos globales y variables CSS
public/
├── logo.png
├── favicon.svg
└── CV.pdf
```

## Licencia

Código: MIT. Contenido (textos, imágenes y CV): © Bertin Venancio Rivas — todos los derechos reservados.
