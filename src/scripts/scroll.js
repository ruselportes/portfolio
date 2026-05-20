/**
 * scroll.js — Scroll-triggered reveal animations.
 *
 * Uses IntersectionObserver to add a `visible` class when
 * `.animate-on-scroll` elements enter the viewport.
 * Supports staggered delays via `data-delay`.
 */

const THRESHOLD = 0.15;

/* ------------------------------------------------------------------ */
/*  Public API                                                        */
/* ------------------------------------------------------------------ */

export function initScrollAnimations() {
  const targets = document.querySelectorAll('.animate-on-scroll');
  if (!targets.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;

        const el = entry.target;

        // Apply optional staggered delay
        const delay = el.dataset.delay;
        if (delay) {
          el.style.transitionDelay = delay;
        }

        el.classList.add('visible');

        // Animate only once
        observer.unobserve(el);
      }
    },
    { threshold: THRESHOLD },
  );

  for (const el of targets) {
    observer.observe(el);
  }
}
