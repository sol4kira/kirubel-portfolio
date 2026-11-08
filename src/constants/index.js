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
  ks_hospital_360,
  ks_hospital_720,
  ks_hospital_360_avif,
  ks_hospital_720_avif,
  promptbuddy_360,
  promptbuddy_720,
  promptbuddy_360_avif,
  promptbuddy_720_avif,
  solomon_building_materials_360,
  solomon_building_materials_720,
  solomon_building_materials_360_avif,
  solomon_building_materials_720_avif,
  solomonLogo,
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
      "Architected and deployed full-stack web applications backed by relational SQL databases.",
      "Covered multi-item sales, purchasing, supplier/customer credit tracking, and dynamic business reporting.",
    ],
  },
];

const companies = [
  {
    name: "Solomon Building Materials",
    role: "Freelance Client Work",
    date: "Oct 2026 - Present",
    logo: solomonLogo,
  },
];

const projects = [
  {
    name: "Solomon Building Materials",
    project_type: "Freelance Client Work",
    client: "Solomon Building Materials",
    client_logo: solomonLogo,
    description:
      "A freelance client website that presents the company's work and lists their products. Built with React.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
    ],
    image: solomon_building_materials_720,
    image_srcset: `${solomon_building_materials_360} 360w, ${solomon_building_materials_720} 720w`,
    image_avif_srcset: `${solomon_building_materials_360_avif} 360w, ${solomon_building_materials_720_avif} 720w`,
    image_width: 720,
    image_height: 460,
    live_demo_link: "https://solomon-building-material.vercel.app/",
    source_code_link: "https://github.com/sol4kira/solomon-building-material",
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
    image: ks_hospital_720,
    image_srcset: `${ks_hospital_360} 360w, ${ks_hospital_720} 720w`,
    image_avif_srcset: `${ks_hospital_360_avif} 360w, ${ks_hospital_720_avif} 720w`,
    image_width: 720,
    image_height: 460,
    source_code_link: "https://github.com/sol4kira/ks-hospital",
  },
  {
    name: "PromptBuddy",
    description:
      "A prompt workspace with an Express backend, templates API, and prompt library. History is powered by an LRU cache and trie.",
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
        name: "express",
        color: "pink-text-gradient",
      },
      {
        name: "api",
        color: "orange-text-gradient",
      },
    ],
    image: promptbuddy_720,
    image_srcset: `${promptbuddy_360} 360w, ${promptbuddy_720} 720w`,
    image_avif_srcset: `${promptbuddy_360_avif} 360w, ${promptbuddy_720_avif} 720w`,
    image_width: 720,
    image_height: 460,
    live_demo_link: "https://promptbuddy-eight.vercel.app",
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

export { services, technologies, experiences, companies, projects };
