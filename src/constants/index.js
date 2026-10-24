import {
  backend,
  web,
  javascript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs2,
  git,
  hilcoe,
  vuejs,
  mysql,
  mongodb,
  express,
  fullstack,
  database,
  stm_shop,
  ks_hospital,
  promptbuddy,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "journey",
    title: "Journey",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "FullStack Developer",
    icon: fullstack,
  },
  {
    title: "Frontend Developer",
    icon: web,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Database Design",
    icon: database,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs2,
  },
  {
    name: "Express JS",
    icon: express,
  },
  {
    name: "MySQL",
    icon: mysql,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Git",
    icon: git,
  },
  {
    name: "Vue JS",
    icon: vuejs,
  },
];

const experiences = [
  {
    title: "Education",
    icon: hilcoe,
    iconBg: "#383E56",
    date: "Feb 2024 - Present",
    points: [
      "3rd year Computer Science student at Hilcoe School of Computer Science.",
      "Expected time of finish: Jun 2028",
    ],
  },
  {
    title: "FrontEnd",
    icon: web,
    iconBg: "#383E56",
    date: "Nov 2025 - Present",
    points: [
      "Done my first real frontend project back in Nov 2025 and still love to watch how far I have come with what I can do.",
      "Built responsive web layouts, forms, and client interfaces with semantic HTML, CSS, JavaScript, and React.",
    ],
  },
  {
    title: "Backend",
    icon: backend,
    iconBg: "#383E56",
    date: "Dec 2025 - Present",
    points: [
      "Transitioned into backend engineering using Node.js and Express to handle form data, APIs, and business logic.",
      "Engineered RESTful services, custom routing, and secure data pipelines.",
    ],
  },
  {
    title: "Full-Stack",
    icon: fullstack,
    iconBg: "#E6DEDD",
    date: "April 2026 - Present",
    points: [
      "Architected and deployed STM Shop, a full-stack inventory and retail management system with a 13-table relational SQL database.",
      "Covered multi-item sales, purchasing, supplier/customer credit tracking, and dynamic business reporting.",
    ],
  },
];

const projects = [
  {
    name: "STM Shop Management System",
    description:
      "A production-ready full-stack shop and inventory management system designed for a family retail business. Features 6+ API endpoint modules (Products, Sales, Purchases, Credits, Suppliers, Customers) with transactional integrity, React/Vite front-end, multi-item checkout, and joined SQL analytics reporting.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "nodejs",
        color: "green-text-gradient",
      },
      {
        name: "express",
        color: "pink-text-gradient",
      },
      {
        name: "mysql",
        color: "orange-text-gradient",
      },
    ],
    image: stm_shop,
    source_code_link: "https://github.com/sol4kira/stm_shop",
  },
  {
    name: "KS Hospital",
    description:
      "A modern, responsive healthcare and hospital portal engineered from the ground up using pure semantic HTML5, CSS3, and vanilla JavaScript. Features a clean, accessible layout highlighting departments, patient services, and consultation booking without external framework dependencies.",
    tags: [
      {
        name: "html5",
        color: "orange-text-gradient",
      },
      {
        name: "css3",
        color: "blue-text-gradient",
      },
      {
        name: "javascript",
        color: "green-text-gradient",
      },
      {
        name: "responsive",
        color: "pink-text-gradient",
      },
    ],
    image: ks_hospital,
    source_code_link: "https://github.com/sol4kira/ks-hospital",
  },
  {
    name: "PromptBuddy",
    description:
      "A study prompt assistance and generation web application featuring a vanilla JavaScript frontend and a custom Node.js server crafted directly on the core HTTP module (no external frameworks). Implements native request routing, static file delivery, and a persistent POST /save-prompt endpoint.",
    tags: [
      {
        name: "javascript",
        color: "blue-text-gradient",
      },
      {
        name: "nodejs",
        color: "green-text-gradient",
      },
      {
        name: "http-core",
        color: "pink-text-gradient",
      },
      {
        name: "api",
        color: "orange-text-gradient",
      },
    ],
    image: promptbuddy,
    source_code_link: "https://github.com/sol4kira/promptBuddy-",
  },
];

export const personalInfo = {
  name: "Kirubel Solomon",
  role: "Full-Stack Developer",
  email: "kirubelsolomon2005@gmail.com",
  phone: "+251925056866",
  location: "Addis Abeba, Ethiopia",
  github: "https://github.com/sol4kira",
  linkedin: "https://linkedin.com/",
  resume: "/Kirubel_Solomon_Resume.pdf",
  resumeHtml: "/resume.html",
};

export { services, technologies, experiences, projects };
