# Rushikesh Malgan | Portfolio

Personal portfolio of Rushikesh Malgan: a freelance full-stack developer in Pune building LLM-powered products. Final-year Computer Engineering student at ViMEET (University of Mumbai, batch of 2027), open to SDE, Full Stack and AI Engineer roles.

**Live:** https://rushikesh-portfolio-virid.vercel.app
<!-- TODO: this URL returned Vercel DEPLOYMENT_NOT_FOUND on 2026-10-10. Redeploy or update the link. -->

## What's on the site

- **Hero** with a 3D desktop-PC scene
- **About**, **What I Do** and **Experience** (timeline)
- **Tech stack** as interactive 3D balls
- **Projects**: Codentry, Unpack, GDG ViMEET website, BroCode, Golazo, Sattava, Morya Bappa Mode
- **Achievements & Education**
- **Contact** form (EmailJS) with a 3D Earth, plus a light/dark theme toggle

## Tech stack

React 18, Vite 6, Tailwind CSS 3, Framer Motion, three.js with `@react-three/fiber` and `@react-three/drei`, React Router, EmailJS, ESLint 9.

## Run locally

Requires Node.js 18 or newer.

```bash
npm install
npm run dev      # dev server with HMR
npm run build    # production build into dist/
npm run preview  # serve the production build locally
npm run lint     # ESLint
```

### Contact form setup

The contact form sends email through [EmailJS](https://www.emailjs.com/). Copy `.env.example` to `.env.local` and fill in:

```
VITE_EMAILJS_SERVICE_ID=
VITE_EMAILJS_TEMPLATE_ID=
VITE_EMAILJS_PUBLIC_KEY=
```

Add the same three variables in Vercel under Project Settings → Environment Variables. Without them the form shows a message pointing visitors to the email address instead of failing silently.

## Updating the content

Almost all copy lives in [`src/constants/index.js`](src/constants/index.js):

| Export | Controls |
|---|---|
| `profile` | Name, email, GitHub, LinkedIn, resume link |
| `services`, `technologies` | "What I Do" cards and the 3D tech balls |
| `experiences` | Experience timeline |
| `projects` | Project cards (pitch, bullets, tags, GitHub and live links, screenshot) |
| `achievements`, `education` | Achievements and Education section |
| `testimonials` | Hidden until real quotes exist (see `App.jsx`) |

A few strings are written directly in components: the hero tagline in `Hero.jsx`, the bio in `AboutMe.jsx`, and the intro paragraphs in `About.jsx` and `Works.jsx`. Links and images set to `null` are simply not rendered.

## Project structure

```
src/
  components/      Section components; canvas/ holds the three.js scenes
  constants/       Content data (see above)
  context/         Light/dark theme
  hoc/             SectionWrapper (scroll-in animation + anchor ids)
  utils/motion.js  Framer Motion variants
  assets/          Images and tech icons
public/            3D models (desktop_pc, planet), logo, profile photo
```

## Deployment

Deployed on Vercel. The build command is `npm run build` and the output directory is `dist`.
