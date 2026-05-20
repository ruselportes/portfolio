/**
 * projects.js — Project card filtering.
 *
 * Filter buttons carry a `data-filter` attribute (all | fullstack | ai | iot).
 * Project cards carry a `data-category` attribute.
 * Clicking a filter button hides/shows cards with a smooth
 * opacity + scale transition.
 */

const TRANSITION_MS = 300; // matches CSS transition duration

/* ------------------------------------------------------------------ */
/*  Public API                                                        */
/* ------------------------------------------------------------------ */

export function initProjectFilters() {
  const filterButtons = document.querySelectorAll('[data-filter]');
  const projectCards = document.querySelectorAll('[data-category]');
  if (!filterButtons.length || !projectCards.length) return;

  for (const btn of filterButtons) {
    btn.addEventListener('click', () => {
      const filter = btn.dataset.filter;

      // Update active button
      for (const b of filterButtons) {
        b.classList.toggle('active', b === btn);
      }

      // Filter cards
      for (const card of projectCards) {
        const matches = filter === 'all' || card.dataset.category === filter;

        if (matches) {
          // Show card
          card.style.display = '';
          // Force reflow so the transition triggers after display change
          void card.offsetHeight;
          card.style.opacity = '1';
          card.style.transform = 'scale(1)';
        } else {
          // Animate out, then hide
          card.style.opacity = '0';
          card.style.transform = 'scale(0.9)';
          setTimeout(() => {
            // Only hide if still filtered out (user may have clicked again)
            if (
              card.style.opacity === '0' &&
              card.style.transform === 'scale(0.9)'
            ) {
              card.style.display = 'none';
            }
          }, TRANSITION_MS);
        }
      }
    });
  }
}
