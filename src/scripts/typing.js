/**
 * typing.js — Typewriter effect for the hero heading.
 *
 * Cycles through a set of phrases, typing and deleting them with
 * configurable speeds. The blinking cursor is handled in CSS.
 */

const PHRASES = [
  'I build web apps',
  'I design APIs',
  'I create mobile experiences',
  'I automate with AI',
  'I ship with AI-assisted dev',
];

const TYPE_SPEED = 80;     // ms per character when typing
const DELETE_SPEED = 40;   // ms per character when deleting
const PAUSE_AFTER_TYPE = 2000;
const PAUSE_AFTER_DELETE = 500;

/**
 * Waits for the given number of milliseconds.
 * @param {number} ms
 * @returns {Promise<void>}
 */
function wait(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

/**
 * Runs the infinite typewriter loop.
 * @param {HTMLElement} el
 */
async function typewriterLoop(el) {
  let phraseIndex = 0;

  while (true) {
    const phrase = PHRASES[phraseIndex];

    // Type forward
    for (let i = 0; i <= phrase.length; i++) {
      el.textContent = phrase.slice(0, i);
      await wait(TYPE_SPEED);
    }

    await wait(PAUSE_AFTER_TYPE);

    // Delete backward
    for (let i = phrase.length; i >= 0; i--) {
      el.textContent = phrase.slice(0, i);
      await wait(DELETE_SPEED);
    }

    await wait(PAUSE_AFTER_DELETE);

    phraseIndex = (phraseIndex + 1) % PHRASES.length;
  }
}

/* ------------------------------------------------------------------ */
/*  Public API                                                        */
/* ------------------------------------------------------------------ */

export function initTyping() {
  const el = document.getElementById('typing-text');
  if (!el) return;

  typewriterLoop(el);
}
