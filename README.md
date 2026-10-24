# 🌌 Kirubel Solomon — 3D Interactive Portfolio

<div align="center">

  [![React](https://img.shields.io/badge/React-18.2.0-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://reactjs.org/)
  [![Three.js](https://img.shields.io/badge/Three.js-0.155.0-black?style=for-the-badge&logo=three.js&logoColor=white)](https://threejs.org/)
  [![Vite](https://img.shields.io/badge/Vite-4.4.5-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
  [![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-3.3.3-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
  [![Framer Motion](https://img.shields.io/badge/Framer_Motion-10.15.0-black?style=for-the-badge&logo=framer&logoColor=blue)](https://www.framer.com/motion/)
  [![License](https://img.shields.io/badge/License-MIT-yellow?style=for-the-badge)](./LICENSE)

  <p align="center">
    A modern, interactive 3D developer portfolio showcasing full-stack web applications, relational databases, and dynamic user interfaces. Built with <b>React 18</b>, <b>Three.js</b>, <b>React Three Fiber</b>, and <b>Tailwind CSS</b>.
  </p>

  <p align="center">
    <a href="https://github.com/sol4kira/kirubel-portfolio"><strong>Explore Repository »</strong></a>
    ·
    <a href="#-getting-started"><strong>Quick Start</strong></a>
    ·
    <a href="#-featured-projects"><strong>View Projects</strong></a>
  </p>
</div>

---

## 🌟 Key Features

- **🎮 Interactive 3D Canvas Scenes**:
  - **Hero Desktop PC**: Fully rendered 3D retro computer setup powered by `@react-three/fiber` and `@react-three/drei` with orbit controls and shadows.
  - **Dynamic 3D Skill Decal Balls**: Interactive icosahedron spheres representing core technologies. Features smooth **rotation on focus/hover** with smart auto-alignment to always settle forward-facing.
  - **3D Earth Scene**: Auto-rotating planetary globe in the contact section.
  - **Celestial Starfield**: Floating 3D particle constellation backdrop utilizing `maath` spherical distribution.
- **💼 Comprehensive Project Showcases**:
  - Highlighted flagship work with real-world screenshots, technology tags, and direct links to GitHub repositories.
- **📄 Downloadable & Viewable Resume**:
  - **In-Browser PDF**: Direct viewing in native browser PDF reader at `/Kirubel_Solomon_Resume.pdf`.
  - **Responsive Web Resume**: Dedicated printable HTML view at `/resume.html` with print stylesheets and download actions.
- **📬 Dynamic Contact Form**:
  - Configurable with **EmailJS** environment variables alongside an automatic `mailto:` client fallback.
- **📱 Fully Responsive Design**:
  - Fluid mobile navigation drawer and optimized 3D canvas framerates for smooth 60 FPS performance on all devices.

---

## 🛠️ Tech Stack

### Frontend & 3D Graphics
- **Framework**: [React 18](https://react.dev/)
- **Bundler**: [Vite](https://vitejs.dev/)
- **3D Rendering**: [Three.js](https://threejs.org/), [@react-three/fiber](https://docs.pmnd.rs/react-three-fiber), [@react-three/drei](https://github.com/pmndrs/drei)
- **Math & Utilities**: [maath](https://github.com/pmndrs/maath)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) & PostCSS
- **Interactive UI**: [React Parallax Tilt](https://github.com/mkosir/react-parallax-tilt), [React Vertical Timeline](https://github.com/stephane-monnot/react-vertical-timeline)

### Backend & Integrations
- **Contact Handling**: [@emailjs/browser](https://www.emailjs.com/) with Vite environment variables
- **Routing**: [React Router DOM](https://reactrouter.com/)

---

## 🚀 Featured Projects

### 1. [STM Shop Management System](https://github.com/sol4kira/stm_shop)
A production-ready retail and inventory management system designed for a family business.
- **Stack**: React (Vite), Node.js, Express, MySQL
- **Key Modules**: 6+ REST API endpoint layers (Products, Sales, Purchases, Credits, Suppliers, Customers) backed by a 13-table relational SQL database, multi-item checkout, and analytics reporting with date-range filters.

### 2. [KS Hospital](https://github.com/sol4kira/ks-hospital)
A modern healthcare and hospital information portal engineered from scratch.
- **Stack**: Semantic HTML5, Modern CSS3, Vanilla JavaScript
- **Key Focus**: Clean, accessible front-end architecture, patient-centric consultation booking, and emergency care overviews without external framework overhead.

### 3. [PromptBuddy](https://github.com/sol4kira/promptBuddy-)
A study prompt assistance and prompt-saving web application.
- **Stack**: Vanilla JavaScript, Node.js Core HTTP Module
- **Key Focus**: Custom request routing, static file delivery, and a persistent `POST /save-prompt` endpoint written from scratch to master server fundamentals.

---

## 📂 Project Structure

```text
kirubel-portfolio/
├── public/
│   ├── Kirubel_Solomon_Resume.pdf  # Downloadable & viewable PDF resume
│   ├── resume.html                 # Printable web resume page
│   ├── desktop_pc/                 # 3D GLTF computer model
│   └── planet/                     # 3D GLTF planet model
├── src/
│   ├── assets/                     # Project screenshots, tech icons, logos
│   │   ├── tech/                   # SVGs (MySQL, MongoDB, Express, etc.)
│   │   ├── stm_shop.png
│   │   ├── ks_hospital.png
│   │   └── promptbuddy.png
│   ├── components/
│   │   ├── canvas/                 # Computers, Ball, Earth, Stars canvases
│   │   ├── Hero.jsx                # Introduction with 3D PC & resume CTA
│   │   ├── Navbar.jsx              # Responsive header navigation
│   │   ├── About.jsx               # Personal bio & developer services
│   │   ├── Experience.jsx          # Milestones timeline
│   │   ├── Tech.jsx                # Interactive 3D skill balls
│   │   ├── Works.jsx               # Project cards with GitHub links
│   │   └── Contact.jsx             # Contact form with 3D Earth
│   ├── constants/
│   │   └── index.js                # Single source of truth for portfolio data
│   ├── hoc/                        # Section wrapper higher-order component
│   ├── utils/                      # Motion transition helpers
│   ├── App.jsx                     # Root application container
│   └── main.jsx                    # Application entry point
├── .env.example                    # Template for EmailJS credentials
├── package.json
└── vite.config.js
```

---

## 💻 Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) (version `18.x` or higher recommended)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/sol4kira/kirubel-portfolio.git
   cd kirubel-portfolio
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Configure Environment Variables** (Optional, for contact form):
   Create a `.env` file in the root directory based on `.env.example`:
   ```bash
   cp .env.example .env
   ```
   Add your [EmailJS](https://www.emailjs.com/) credentials:
   ```env
   VITE_APP_EMAILJS_SERVICE_ID=your_service_id
   VITE_APP_EMAILJS_TEMPLATE_ID=your_template_id
   VITE_APP_EMAILJS_PUBLIC_KEY=your_public_key
   ```
   *(Note: If omitted, the contact form automatically falls back to opening the visitor's default email client).*

4. **Start the local development server**:
   ```bash
   npm run dev
   ```
   Open [Kirubel Portfolio](https://kirubel-portfolio-topaz.vercel.app/) in your browser to view the application.

5. **Build for Production**:
   ```bash
   npm run build
   ```
   To preview the production build locally:
   ```bash
   npm run preview
   ```

---

## 📬 Contact & Connect

**Kirubel Solomon** — *Full-Stack Developer*

- 📧 Email: [kirubelsolomon2005@gmail.com](mailto:kirubelsolomon2005@gmail.com)
- 🐙 GitHub: [@sol4kira](https://github.com/sol4kira)
- 📍 Location: Addis Abeba, Ethiopia
- 📄 Resume: [View Online](/Kirubel_Solomon_Resume.pdf)

---

## 📜 License

This project is licensed under the [MIT License](./LICENSE) — feel free to explore, learn, and adapt the code for your own portfolio.
