/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  darkMode: "class",
  mode: "jit",
  theme: {
    extend: {
      colors: {
        // ── Gold / Teal palette ─────────────────────────────────────
        gold:     "#D9CB92",   // primary accent  (headings, hovers)
        cream:    "#F5F3C0",   // light background
        teal:     "#2F9C95",   // secondary accent (cards, highlights)
        darkTeal: "#1F6363",   // deep accent / dark bg

        // ── Legacy tokens (kept for backward-compat) ─────────────────
        primary:    "#050816",
        secondary:  "#aaa6c3",
        tertiary:   "#151030",
        "black-100": "#100d25",
        "black-200": "#090325",
        "white-100": "#f3f3f3",
      },
      boxShadow: {
        card:      "0px 35px 120px -15px #1F6363",
        "card-lg": "0px 0px 40px 4px rgba(47,156,149,0.35)",
      },
      screens: {
        xs: "450px",
      },
      backgroundImage: {
        "hero-pattern": "url('/src/assets/herobg.png')",
      },
    },
  },
  plugins: [],
};