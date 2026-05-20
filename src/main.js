/**
 * main.js — Application entry point.
 *
 * Imports all stylesheets and initialises every interactive module
 * once the DOM is ready.
 */

/* ---- Styles ---- */
import './styles/index.css';
import './styles/nav.css';
import './styles/hero.css';
import './styles/about.css';
import './styles/skills.css';
import './styles/projects.css';
import './styles/timeline.css';
import './styles/contact.css';

/* ---- Modules ---- */
import { initParticles } from './scripts/particles.js';
import { initTyping } from './scripts/typing.js';
import { initScrollAnimations } from './scripts/scroll.js';
import { initNav } from './scripts/nav.js';
import { initProjectFilters } from './scripts/projects.js';
import { initContactForm } from './scripts/contact.js';

/* ---- Bootstrap ---- */
document.addEventListener('DOMContentLoaded', () => {
  initParticles();
  initTyping();
  initScrollAnimations();
  initNav();
  initProjectFilters();
  initContactForm();
});
