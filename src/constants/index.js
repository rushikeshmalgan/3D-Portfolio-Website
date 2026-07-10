import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  nodejs,
  mongodb,
  git,
  docker,
  meta,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

// ─── Navigation ────────────────────────────────────────────────────────────────
export const navLinks = [
  { id: "about",    title: "About"      },
  { id: "services", title: "What I Do"  },
  { id: "work",     title: "Experience" },
  { id: "projects", title: "Projects"   },
  { id: "contact",  title: "Contact"    },
];

// ─── Services (About cards) ────────────────────────────────────────────────────
const services = [
  { title: "Full Stack Developer",    icon: web      },
  { title: "Backend Engineer",        icon: backend  },
  { title: "React Native / Mobile",   icon: mobile   },
  { title: "AI Integration Expert",   icon: creator  },
];

// ─── Technologies (Tech Ball section) ─────────────────────────────────────────
// Uses existing assets where available; text-only entries for extras
const technologies = [
  { name: "HTML 5",        icon: html        },
  { name: "CSS 3",         icon: css         },
  { name: "JavaScript",    icon: javascript  },
  { name: "TypeScript",    icon: typescript  },
  { name: "React.js",      icon: reactjs     },
  { name: "Node.js",       icon: nodejs      },
  { name: "MongoDB",       icon: mongodb     },
  { name: "Three JS",      icon: threejs     },
  { name: "Git / GitHub",  icon: git         },
  { name: "Docker",        icon: docker      },
];

// ─── Experience (Vertical Timeline) ───────────────────────────────────────────
const experiences = [
  {
    title: "Freelance Full Stack Developer — MERN & Mobile",
    company_name: "Remote",
    icon: meta,           // reusing available asset
    iconBg: "#1F6363",
    date: "Apr 2025 – Present",
    points: [
      "Delivered 5+ full-stack applications end-to-end for clients spanning health-tech, fashion-AI, and interior design verticals.",
      "Architected scalable backend systems using Node.js, Express.js, JWT authentication, bcrypt hashing, and role-based access control (RBAC).",
      "Built and shipped React Native / Expo mobile apps with real-time AI integrations (Google Gemini, Replicate API).",
      "Maintained 100% on-time delivery rate, >99% uptime across all deployed applications on Vercel and cloud platforms.",
    ],
  },
];

// ─── Testimonials ──────────────────────────────────────────────────────────────
const testimonials = [
  {
    testimonial:
      "His presentation at Vision 2024 left a lasting impression. The project was solid, and his explanation made it shine.",
    name: "Event Judge",
    designation: "Tech Jury",
    company: "Vision 2024",
    image: "https://randomuser.me/api/portraits/men/22.jpg",
  },
  {
    testimonial:
      "His enthusiasm for building with MERN and AI is infectious. Definitely someone to watch out for.",
    name: "Senior Peer",
    designation: "Mentor",
    company: "Tech Club",
    image: "https://randomuser.me/api/portraits/men/18.jpg",
  },
  {
    testimonial:
      "He doesn't just dream of amazing projects — he actually ships them, on time, production-ready.",
    name: "Hackathon Teammate",
    designation: "Fellow Coder",
    company: "DevHack 2024",
    image: "https://randomuser.me/api/portraits/women/45.jpg",
  },
];

// ─── Projects ─────────────────────────────────────────────────────────────────
const projects = [
  {
    name: "Sattava — AI-Powered Health & Nutrition Tracker",
    description:
      "Full-stack health-tech platform for 100+ active users. Integrates Gemini Vision, FatSecret API, and Generative AI for real-time food scanning and nutrition tracking. 15+ REST endpoints handling 10K+ daily requests at 99.2% uptime. Cut API response time from 4.2 s → 1.1 s via Redis caching.",
    tags: [
      { name: "React Native", color: "blue-text-gradient"  },
      { name: "Node.js",      color: "green-text-gradient" },
      { name: "Firebase",     color: "gold-text-gradient"  },
      { name: "Google AI",    color: "pink-text-gradient"  },
    ],
    image: carrent,
    source_code_link: null,   // set to your repo URL once public
    live_link: null,
  },
  {
    name: "Virtual Fashion Stylist",
    description:
      "AI-powered virtual try-on product overlaying outfits in real time using Computer Vision. Won 1st place among 25 teams at Vision 2024 Exhibition. Built with React Native, Java (Spring Boot), and Python CV pipeline.",
    tags: [
      { name: "Computer Vision", color: "blue-text-gradient"  },
      { name: "React Native",    color: "green-text-gradient" },
      { name: "Spring Boot",     color: "gold-text-gradient"  },
      { name: "Python",          color: "pink-text-gradient"  },
    ],
    image: jobit,
    source_code_link: null,
    in_development: true,
  },
  {
    name: "DECO AI Room Designer",
    description:
      "3-stage image pipeline transforming room photos into 5+ themed design variations using the Replicate API. 6+ REST endpoints with async job tracking, file uploads up to 50 MB. Built with React.js, Node.js, Express.js, and MongoDB.",
    tags: [
      { name: "React.js",     color: "blue-text-gradient"  },
      { name: "Node.js",      color: "green-text-gradient" },
      { name: "MongoDB",      color: "gold-text-gradient"  },
      { name: "Replicate AI", color: "pink-text-gradient"  },
    ],
    image: tripguide,
    source_code_link: null,
    live_link: null,
  },
];

// ─── Achievements / Leadership ─────────────────────────────────────────────────
const achievements = [
  {
    title: "GDG — Content & Media Head",
    subtitle: "Google Developer Groups · 2025–2026",
    icon: "🌐",
    color: "#2F9C95",
  },
  {
    title: "E-Cell — Media Co-Head",
    subtitle: "Entrepreneurship Cell · 2026–Present",
    icon: "🚀",
    color: "#D9CB92",
  },
  {
    title: "Vision 2024 — 1st Place",
    subtitle: "Winner among 25 teams · Exhibition",
    icon: "🏆",
    color: "#D9CB92",
  },
  {
    title: "Rajya Puraskar",
    subtitle: "State Award · Bharat Scouts & Guides",
    icon: "🎖️",
    color: "#2F9C95",
  },
];

// ─── Education ─────────────────────────────────────────────────────────────────
const education = [
  {
    degree: "Bachelor of Engineering — Computer Engineering",
    institution: "University of Mumbai",
    date: "Aug 2023 – Present",
    cgpa: "7.54 / 10",
    icon: "🎓",
  },
];

export { services, technologies, experiences, testimonials, projects, achievements, education };