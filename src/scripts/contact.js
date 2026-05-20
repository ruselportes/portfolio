/**
 * contact.js — Contact form interaction.
 *
 * Implements a mock submission flow showing a loading spinner
 * and displaying a success/error message on completion.
 */

export function initContactForm() {
  const form = document.getElementById('contactForm');
  const submitBtn = document.getElementById('contact-submit');
  const statusBox = document.getElementById('contactStatus');

  if (!form || !submitBtn || !statusBox) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    // Reset status
    statusBox.textContent = '';
    statusBox.className = 'contact__status';

    // Enter loading state
    submitBtn.classList.add('loading');

    // Simulate API request (e.g. Formspree or custom backend)
    setTimeout(() => {
      // Exit loading state
      submitBtn.classList.remove('loading');

      // Show success state
      submitBtn.classList.add('success');
      
      statusBox.textContent = 'Message sent successfully! I will get back to you soon.';
      statusBox.className = 'contact__status success show';

      // Reset form fields
      form.reset();

      // Reset success button state after 3 seconds
      setTimeout(() => {
        submitBtn.classList.remove('success');
      }, 3000);

    }, 1500);
  });
}
