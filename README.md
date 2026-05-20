# Rusel Portes — Full-Stack Developer Portfolio

A premium, interactive personal portfolio website for **Rusel Portes**, built from scratch using modern web design principles. It features a dark glassmorphism aesthetic with glowing neon accents, custom interactive animations, and responsive layouts.

This project was built entirely using AI-assisted development, utilizing **Antigravity** to draft layouts, establish design systems, construct components, and verify builds.

---

## 🚀 Live Demo Features

- **✨ Constellation Particle Canvas**: A high-performance canvas element (`src/scripts/particles.js`) that spawns glowing cyan and violet particles which connect dynamically and gently drift away from the cursor.
- **📟 Typewriter Hero**: Cycles through personal traits (`I build web apps`, `I design APIs`, `I ship with AI-assisted dev`, etc.) with terminal style tag syntax and a custom CSS blinking cursor.
- **💎 Glassmorphic Card layouts**: Stat counters, timeline entries, project cards, and form containers use `backdrop-filter: blur(12px)` and semi-transparent borders to form layered glass overlays.
- **🔍 Dynamic Projects Filter**: Allows users to filter featured projects in real time (All, Full-Stack, AI, IoT) with fade and scale transition animations.
- **📈 Alternating Journey Timeline**: Chronologically structures Rusel's history as a BSIT student, freelancer, and creator, animated via the `IntersectionObserver` scroll reveal engine.
- **✉️ Interactive Contact Form**: A mock submit handler showing loaders, success statuses, and input field resets.

---

## 🛠️ Tech Stack & Directory Structure

- **Bundler & Build Tool**: [Vite](https://vite.dev/)
- **Logic**: Vanilla ES Modules JavaScript
- **Styles**: Custom CSS Properties (Variables) with BEM class structuring

```text
portfolio/
├── dist/                     # Production build outputs
├── public/
│   ├── favicon.svg           # Glowing R initial logo
│   └── avatar.svg            # Custom futuristic developer avatar
├── src/
│   ├── assets/               # High-res mock project screenshots
│   ├── scripts/              # Interaction scripts
│   │   ├── particles.js      # Particle canvas simulator
│   │   ├── typing.js         # Hero typing animation
│   │   ├── scroll.js         # Reveal-on-scroll logic
│   │   ├── nav.js            # Hamburger & active link highlighting
│   │   ├── projects.js       # Grid category filtering
│   │   └── contact.js        # Contact submit animations
│   ├── styles/               # Component and view stylesheets
│   └── main.js               # Entry point
├── index.html                # Structured HTML skeleton
├── package.json
└── vite.config.js            # Port config
```

---

## 🏃 Getting Started

### 📋 Prerequisites
Ensure you have [Node.js](https://nodejs.org/) installed.

### 📥 Installation
Clone the repository and install the development dependencies:
```bash
npm install
```

### 💻 Development Server
Run Vite's local dev server at `http://localhost:3000`:
```bash
npm run dev
```

### 📦 Production Build
Compile and bundle optimal assets for static deployments:
```bash
npm run build
```
Production build bundles will compile directly into `/dist`.
