import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './styles.css'

createRoot(document.getElementById('root')).render(<App />)

// assign CSS variable for background images using data-bg attribute
function setSectionBackgrounds() {
  requestAnimationFrame(() => {
    document.querySelectorAll('.section-bg').forEach(el => {
      const url = el.getAttribute('data-bg');
      if (url) el.style.setProperty('--bg-url', `url('${url}')`);
    });
  });
}

setSectionBackgrounds();
window.addEventListener('load', setSectionBackgrounds);
window.addEventListener('resize', setSectionBackgrounds);
