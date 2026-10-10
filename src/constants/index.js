import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  reactjs,
  nodejs,
  mongodb,
  git,
  java,
  nextjs,
  postgresql,
  firebase,
  claude,
  gemini,
} from "../assets";

// ─── Profile (shared by About, Contact, etc.) ─────────────────────────────────
const profile = {
  name: "Rushikesh Malgan",
  email: "malganrushikesh02@gmail.com",
  github: "https://github.com/rushikeshmalgan",
  linkedin: "https://www.linkedin.com/in/rushikesh-malgan-010756319/",
  // TODO: add a resume link, e.g. drop resume.pdf into /public and use "/resume.pdf".
  // The "Resume" button on the About section only renders when this is set.
  resumeUrl: null,
};

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
  { title: "Full-Stack Web Apps",    icon: web      },
  { title: "Backend & APIs",         icon: backend  },
  { title: "Mobile with React Native", icon: mobile },
  { title: "LLM Integration",        icon: creator  },
];

// ─── Technologies (Tech Ball section) ─────────────────────────────────────────
// Each ball is a 3D canvas with no visible label, so `name` also feeds the
// accessible label in Tech.jsx. React Native shares the React icon.
const technologies = [
  { name: "JavaScript",           icon: javascript },
  { name: "TypeScript",           icon: typescript },
  { name: "Java",                 icon: java       },
  { name: "React / React Native", icon: reactjs    },
  { name: "Next.js",              icon: nextjs     },
  { name: "Node.js / Express",    icon: nodejs     },
  { name: "PostgreSQL",           icon: postgresql },
  { name: "MongoDB",              icon: mongodb    },
  { name: "Firebase / Firestore", icon: firebase   },
  { name: "Claude API",           icon: claude     },
  { name: "Gemini API",           icon: gemini     },
  { name: "Git / GitHub",         icon: git        },
];

// ─── Experience (Vertical Timeline) ───────────────────────────────────────────
// `iconText` renders initials in the timeline bubble. Swap in an `icon` image
// (company logo) when you have one; Experience.jsx prefers `icon` if present.
const experiences = [
  {
    title: "Freelance Full-Stack Developer",
    company_name: "Freelance · Remote",
    iconText: "FL",
    iconBg: "#1F6363",
    date: "Apr 2025 – Present",
    // TODO: add client names or outcomes you can share publicly (no numbers unless real).
    points: [
      "Build full-stack web and mobile apps end to end, including LLM-powered features using the Claude and Gemini APIs.",
      "Node.js / Express backends with JWT authentication, bcrypt password hashing and role-based access control.",
      "React Native / Expo apps backed by Firebase and MongoDB.",
    ],
  },
  {
    title: "Intern",
    company_name: "Prodigy InfoTech",
    iconText: "PI",
    iconBg: "#1B726C",
    date: "Mar 2025 – Apr 2025",
    // TODO: add your internship track and 2-3 bullets on what you built or learned.
    // The card shows only the role, company and dates until this is filled in.
    points: [],
  },
];

// ─── Testimonials ──────────────────────────────────────────────────────────────
// Section is hidden in App.jsx until real quotes exist. Shape per entry:
// { testimonial, name, designation, company, image }
// TODO: add real quotes (with permission), then render <Feedbacks /> again in App.jsx.
const testimonials = [];

// ─── Projects ─────────────────────────────────────────────────────────────────
// Card fields: name, pitch (one line), highlights (2-3 bullets), tags,
// image (null → generated cover), source_code_link, live_link, in_development.
// Missing links/images are null and simply not rendered. TODO notes below say what to add.
const tagColors = ["green-text-gradient", "gold-text-gradient", "pink-text-gradient"];
const toTags = (...names) =>
  names.map((name, i) => ({ name, color: tagColors[i % tagColors.length] }));

const projects = [
  {
    name: "Codentry",
    pitch: "GitHub App that reviews pull requests automatically. My final-year project.",
    highlights: [
      "Differential ESLint and Semgrep analysis on every pull request.",
      "Webhook pipeline with HMAC-SHA256 verification and replay protection.",
      "90+ backend tests; Claude-based AI review is planned on top of the static analysis.",
    ],
    tags: toTags("Next.js", "TypeScript", "FastAPI", "PostgreSQL"),
    image: null, // TODO: add a screenshot or demo image
    source_code_link: "https://github.com/rushikeshmalgan/codentry",
    live_link: null, // TODO: add the deployed URL or GitHub App listing
    in_development: true,
  },
  {
    name: "Unpack",
    pitch: "Paste an Instagram reel link, get the verified links it points to: tools, repos, books, places.",
    highlights: [
      "Gemini extracts what the reel mentions; resolvers search GitHub, npm, Open Library, arXiv, OpenStreetMap and more.",
      "Only returns URLs found through retrieval, then checks each one is live, so there are no model-invented links.",
      "Nothing submitted is stored (no accounts, no database); rate-limited per IP; 300+ tests.",
    ],
    tags: toTags("Next.js", "TypeScript", "Gemini API", "Upstash Redis"),
    image: null, // TODO: add a screenshot
    source_code_link: "https://github.com/rushikeshmalgan/unpack",
    live_link: null, // TODO: add the deployed URL (the repo README has no live link)
  },
  {
    name: "GDG ViMEET Website",
    pitch: "Official website of the Google Developer Groups on Campus chapter at ViMEET.",
    highlights: [
      "Separate frontend and backend codebases with a database layer, set up for Vercel deployment.",
      // TODO: add an impact bullet (events or members it supports, features you built). The repo README is empty.
    ],
    tags: toTags("JavaScript", "Vercel"), // TODO: add the real stack (frontend framework, backend, database)
    image: null, // TODO: add a screenshot
    source_code_link: "https://github.com/rushikeshmalgan/GDG", // TODO: confirm "GDG" is the ViMEET site repo
    live_link: null, // TODO: add the live site URL
  },
  {
    name: "BroCode",
    pitch: "Terminal-based AI coding assistant that reads, edits and searches your codebase through Claude.",
    highlights: [
      "Six built-in tools (read, write, edit, bash, glob, grep) with y/n approval before any write or shell command.",
      "Agent loop chains up to 10 tool calls per turn, with streaming responses in the terminal UI.",
      "Persists sessions and feeds the model your CLAUDE.md and current git status each turn.",
    ],
    tags: toTags("Bun", "React 19", "TypeScript", "Claude API"),
    image: null, // TODO: add a terminal screenshot or GIF
    source_code_link: "https://github.com/rushikeshmalgan/BroCode",
    live_link: null,
  },
  {
    name: "Golazo",
    pitch: "Football app for Indian fans: community, tactics education and a tactical board.",
    // TODO: replace these three with specifics (what users can do, what you built).
    highlights: [
      "Community space for football fans in India.",
      "Tactics education, so fans can learn how teams set up and play.",
      "Built-in tactical board.",
    ],
    tags: [], // TODO: add the tech stack
    image: null, // TODO: add a screenshot
    source_code_link: null, // TODO: add the repo (not on your public GitHub profile)
    live_link: null, // TODO: add the live link or store listing
  },
  {
    name: "Sattava",
    pitch: "Mobile app that logs Indian meals from a photo and scores your diet.",
    highlights: [
      "Gemini Vision identifies up to 5 dishes per photo and estimates calories and macros.",
      "Built around Indian food: offline search, barcode lookup and a 0–100 diet score benchmarked against ICMR values.",
      "Firebase Auth (email, Google, phone) with token verification on an Express and MongoDB backend.",
    ],
    // TODO: your brief mentions a Python AI microservice, but the repo README says it was archived
    // in favour of the TypeScript backend. Add "Python" back here only if it is still part of the app.
    tags: toTags("Expo", "Firebase Auth", "Node.js", "Gemini API"),
    image: null, // TODO: add app screenshots
    source_code_link: "https://github.com/rushikeshmalgan/Sattava",
    live_link: null, // TODO: add the store / APK / demo link if one exists
  },
  {
    name: "Morya Bappa Mode",
    pitch: "Location-based game for Ganesh Chaturthi: find Ganpati pandals by actually going to them.",
    highlights: [
      "Pandals stay hidden until a server-verified GPS check-in reveals them.",
      "Interactive map with walking directions, daily quests, streaks, squads and leaderboards.",
      "Community pandal submissions with an admin moderation dashboard; no sign-up needed.",
    ],
    tags: toTags("Next.js", "TypeScript", "Prisma", "PostgreSQL"),
    image: null, // TODO: add a screenshot
    source_code_link: "https://github.com/rushikeshmalgan/Morya",
    live_link: null, // TODO: the repo README lists bappa-morya-bappa.vercel.app but it returned DEPLOYMENT_NOT_FOUND on 2026-10-10. Redeploy, then add the URL.
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
    institution: "ViMEET, University of Mumbai",
    date: "Aug 2023 – 2027 (expected)",
    icon: "🎓",
  },
];

export { profile, services, technologies, experiences, testimonials, projects, achievements, education };
