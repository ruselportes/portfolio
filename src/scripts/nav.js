/**
 * nav.js — Navigation behaviour.
 *
 * • Hamburger toggle (mobile menu)
 * • Smooth-scroll to sections with 70px navbar offset
 * • Active-section highlighting on scroll
 * • Opaque navbar background after 50px scroll
 */

const NAVBAR_OFFSET = 70;
const SCROLL_THRESHOLD = 50;

/* ------------------------------------------------------------------ */
/*  Hamburger menu                                                    */
/* ------------------------------------------------------------------ */

function setupHamburger() {
  const hamburger = document.querySelector('.navbar__hamburger');
  const drawer = document.querySelector('.navbar__drawer');
  const overlay = document.querySelector('.navbar__drawer-overlay');
  if (!hamburger || !drawer || !overlay) return;

  function openMenu() {
    hamburger.classList.add('active');
    drawer.classList.add('open');
    overlay.classList.add('open');
  }

  function closeMenu() {
    hamburger.classList.remove('active');
    drawer.classList.remove('open');
    overlay.classList.remove('open');
  }

  hamburger.addEventListener('click', () => {
    if (drawer.classList.contains('open')) {
      closeMenu();
    } else {
      openMenu();
    }
  });

  overlay.addEventListener('click', closeMenu);

  // Close menu when any nav link inside drawer is clicked (mobile)
  const drawerLinks = drawer.querySelectorAll('.navbar__link');
  for (const link of drawerLinks) {
    link.addEventListener('click', closeMenu);
  }
}

/* ------------------------------------------------------------------ */
/*  Smooth scroll                                                     */
/* ------------------------------------------------------------------ */

function setupSmoothScroll() {
  const navLinks = document.querySelectorAll('.navbar__link');

  for (const link of navLinks) {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = link.getAttribute('href');
      const target = document.querySelector(targetId);
      if (!target) return;

      const top = target.getBoundingClientRect().top + window.scrollY - NAVBAR_OFFSET;
      window.scrollTo({ top, behavior: 'smooth' });
    });
  }
}

/* ------------------------------------------------------------------ */
/*  Active section highlighting                                       */
/* ------------------------------------------------------------------ */

function setupActiveHighlight() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.navbar__link');
  if (!sections.length || !navLinks.length) return;

  function onScroll() {
    const scrollY = window.scrollY + NAVBAR_OFFSET + 1;

    let currentId = '';
    for (const section of sections) {
      if (section.offsetTop <= scrollY) {
        currentId = section.id;
      }
    }

    for (const link of navLinks) {
      link.classList.toggle(
        'active',
        link.getAttribute('href') === `#${currentId}`,
      );
    }
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll(); // initialise on load
}

/* ------------------------------------------------------------------ */
/*  Navbar background on scroll                                       */
/* ------------------------------------------------------------------ */

function setupNavbarBackground() {
  const navbar = document.querySelector('.navbar');
  if (!navbar) return;

  function onScroll() {
    navbar.classList.toggle('scrolled', window.scrollY > SCROLL_THRESHOLD);
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
}

/* ------------------------------------------------------------------ */
/*  Public API                                                        */
/* ------------------------------------------------------------------ */

export function initNav() {
  setupHamburger();
  setupSmoothScroll();
  setupActiveHighlight();
  setupNavbarBackground();
}
