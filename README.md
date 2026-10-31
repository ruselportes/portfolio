# Rusel Portes — Full-Stack Developer Portfolio

Personal portfolio website for **Rusel Portes**, built from scratch with Vite and vanilla JavaScript. It uses a calm dark theme with a single blue accent, responsive layouts, and light motion.

---

## 🚀 Features

- **🎨 Theme layer**: `src/styles/theme.css` is loaded last and sets the colors, typography, and flat card styles on top of the base stylesheets.
- **✨ Particle Canvas**: A subtle canvas background in the hero (`src/scripts/particles.js`); hidden for visitors who prefer reduced motion.
- **🖼️ Optimized images**: Project screenshots and the avatar are served as WebP.
- **🔍 Dynamic Projects Filter**: Allows users to filter featured projects in real time (All, Full-Stack, AI, IoT) with fade and scale transition animations.
- **📈 Alternating Journey Timeline**: Chronologically structures Rusel's history as a BSIT student, freelancer, and creator, animated via the `IntersectionObserver` scroll reveal engine.
- **✉️ Contact Form**: Opens the visitor's email client with a pre-filled message (the site is static, so there is no backend).

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
