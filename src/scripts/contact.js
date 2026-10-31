/**
 * contact.js — Contact form submission.
 *
 * The site is static (GitHub Pages), so the form opens the visitor's
 * email client with a pre-filled message addressed to me.
 */

const EMAIL = 'ruselportes21@gmail.com';

export function initContactForm() {
  const form = document.getElementById('contactForm');
  const statusBox = document.getElementById('contactStatus');

  if (!form || !statusBox) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const data = new FormData(form);
    const name = data.get('name').trim();
    const email = data.get('email').trim();
    const message = data.get('message').trim();

    const subject = `Portfolio inquiry from ${name}`;
    const body = `${message}\n\n${name}\n${email}`;
    window.location.href =
      `mailto:${EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    statusBox.textContent = `Your email app should open now. If it doesn't, email me at ${EMAIL}.`;
    statusBox.className = 'contact__status success show';
  });
}
