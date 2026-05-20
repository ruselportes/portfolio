/**
 * particles.js — Canvas particle animation for the hero section.
 *
 * Creates ~80 drifting particles in cyan / violet with constellation
 * connecting lines and gentle mouse-repulsion.
 */

const PARTICLE_COUNT = 80;
const LINK_DISTANCE = 120;
const MOUSE_RADIUS = 100;
const MOUSE_FORCE = 0.6;

/** @type {HTMLCanvasElement | null} */
let canvas = null;
/** @type {CanvasRenderingContext2D | null} */
let ctx = null;
let particles = [];
let animationId = 0;

const mouse = { x: -9999, y: -9999 };

/* ------------------------------------------------------------------ */
/*  Palette                                                           */
/* ------------------------------------------------------------------ */

const COLORS = [
  { r: 0, g: 229, b: 255 },   // #00e5ff  cyan
  { r: 124, g: 77, b: 255 },  // #7c4dff  violet
];

function randomColor() {
  return COLORS[Math.floor(Math.random() * COLORS.length)];
}

/* ------------------------------------------------------------------ */
/*  Particle class                                                    */
/* ------------------------------------------------------------------ */

class Particle {
  constructor(w, h) {
    this.reset(w, h);
  }

  reset(w, h) {
    this.x = Math.random() * w;
    this.y = Math.random() * h;
    this.radius = Math.random() * 2 + 1;
    this.baseAlpha = Math.random() * 0.4 + 0.1; // 0.1 – 0.5
    const speed = Math.random() * 0.4 + 0.1;
    const angle = Math.random() * Math.PI * 2;
    this.vx = Math.cos(angle) * speed;
    this.vy = Math.sin(angle) * speed;
    const c = randomColor();
    this.r = c.r;
    this.g = c.g;
    this.b = c.b;
  }

  update(w, h) {
    // Mouse repulsion
    const dx = this.x - mouse.x;
    const dy = this.y - mouse.y;
    const dist = Math.sqrt(dx * dx + dy * dy);
    if (dist < MOUSE_RADIUS && dist > 0) {
      const force = (MOUSE_RADIUS - dist) / MOUSE_RADIUS * MOUSE_FORCE;
      this.vx += (dx / dist) * force;
      this.vy += (dy / dist) * force;
    }

    // Dampen velocity so repulsion doesn't accumulate forever
    this.vx *= 0.99;
    this.vy *= 0.99;

    this.x += this.vx;
    this.y += this.vy;

    // Wrap around edges
    if (this.x < -10) this.x = w + 10;
    if (this.x > w + 10) this.x = -10;
    if (this.y < -10) this.y = h + 10;
    if (this.y > h + 10) this.y = -10;
  }

  draw() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(${this.r},${this.g},${this.b},${this.baseAlpha})`;
    ctx.fill();
  }
}

/* ------------------------------------------------------------------ */
/*  Drawing helpers                                                   */
/* ------------------------------------------------------------------ */

function drawLinks() {
  for (let i = 0; i < particles.length; i++) {
    for (let j = i + 1; j < particles.length; j++) {
      const a = particles[i];
      const b = particles[j];
      const dx = a.x - b.x;
      const dy = a.y - b.y;
      const dist = Math.sqrt(dx * dx + dy * dy);

      if (dist < LINK_DISTANCE) {
        const alpha = (1 - dist / LINK_DISTANCE) * 0.15;
        ctx.beginPath();
        ctx.moveTo(a.x, a.y);
        ctx.lineTo(b.x, b.y);
        ctx.strokeStyle = `rgba(0,229,255,${alpha})`;
        ctx.lineWidth = 0.5;
        ctx.stroke();
      }
    }
  }
}

/* ------------------------------------------------------------------ */
/*  Animation loop                                                    */
/* ------------------------------------------------------------------ */

function animate() {
  const w = canvas.width;
  const h = canvas.height;

  ctx.clearRect(0, 0, w, h);

  for (const p of particles) {
    p.update(w, h);
    p.draw();
  }

  drawLinks();
  animationId = requestAnimationFrame(animate);
}

/* ------------------------------------------------------------------ */
/*  Resize handler                                                    */
/* ------------------------------------------------------------------ */

function resize() {
  if (!canvas) return;
  const parent = canvas.parentElement;
  canvas.width = parent.offsetWidth;
  canvas.height = parent.offsetHeight;
}

/* ------------------------------------------------------------------ */
/*  Public API                                                        */
/* ------------------------------------------------------------------ */

export function initParticles() {
  canvas = document.getElementById('hero-canvas');
  if (!canvas) return;

  ctx = canvas.getContext('2d');
  resize();

  // Create particles
  particles = Array.from(
    { length: PARTICLE_COUNT },
    () => new Particle(canvas.width, canvas.height),
  );

  // Event listeners
  window.addEventListener('resize', resize);

  canvas.addEventListener('mousemove', (e) => {
    const rect = canvas.getBoundingClientRect();
    mouse.x = e.clientX - rect.left;
    mouse.y = e.clientY - rect.top;
  });

  canvas.addEventListener('mouseleave', () => {
    mouse.x = -9999;
    mouse.y = -9999;
  });

  animate();
}
