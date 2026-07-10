import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { styles } from "../styles";
import { navLinks } from "../constants";
import { logo, menu, close } from "../assets";
import { useTheme } from "../context/ThemeContext";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      style={{ background: scrolled ? "var(--nav-bg)" : "transparent" }}
      className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 backdrop-blur-sm transition-all duration-300`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        {/* Logo / Name */}
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img src={logo} alt="logo" className="w-9 h-9 object-contain" />
          <p
            className="text-[18px] font-bold cursor-pointer flex"
            style={{ color: "var(--accent-primary)" }}
          >
            Rushikesh&nbsp;
            <span className="sm:block hidden" style={{ color: "var(--text-primary)" }}>
              | Portfolio
            </span>
          </p>
        </Link>

        {/* Desktop nav links + theme toggle */}
        <div className="hidden sm:flex items-center gap-8">
          <ul className="list-none flex flex-row gap-8">
            {navLinks.map((nav) => (
              <li
                key={nav.id}
                className="text-[16px] font-medium cursor-pointer transition-colors duration-200 relative group"
                style={{
                  color: active === nav.title ? "var(--accent-primary)" : "var(--text-muted)",
                }}
                onClick={() => setActive(nav.title)}
              >
                <a href={`#${nav.id}`} style={{ color: "inherit" }}>
                  {nav.title}
                </a>
                {/* Underline indicator */}
                <span
                  className="absolute -bottom-1 left-0 h-[2px] rounded-full transition-all duration-300"
                  style={{
                    width: active === nav.title ? "100%" : "0%",
                    background: "var(--accent-primary)",
                  }}
                />
              </li>
            ))}
          </ul>

          {/* Sun / Moon toggle */}
          <button
            id="theme-toggle-btn"
            className="theme-toggle"
            onClick={toggleTheme}
            aria-label="Toggle light/dark mode"
            title={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
          >
            {theme === "dark" ? "☀️" : "🌙"}
          </button>
        </div>

        {/* Mobile menu */}
        <div className="sm:hidden flex flex-1 justify-end items-center gap-3">
          {/* Mobile theme toggle */}
          <button
            className="theme-toggle"
            onClick={toggleTheme}
            aria-label="Toggle theme"
          >
            {theme === "dark" ? "☀️" : "🌙"}
          </button>

          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px] object-contain cursor-pointer"
            style={{ filter: "var(--text-primary)" }}
            onClick={() => setToggle(!toggle)}
          />

          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 absolute top-20 right-0 mx-4 my-2 min-w-[160px] z-10 rounded-xl`}
            style={{
              background: "var(--bg-card)",
              border: "1px solid var(--border-glow)",
            }}
          >
            <ul className="list-none flex justify-end items-start flex-1 flex-col gap-4">
              {navLinks.map((nav) => (
                <li
                  key={nav.id}
                  className="font-medium cursor-pointer text-[16px] transition-colors duration-200"
                  style={{
                    color: active === nav.title ? "var(--accent-primary)" : "var(--text-muted)",
                  }}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(nav.title);
                  }}
                >
                  <a href={`#${nav.id}`} style={{ color: "inherit" }}>
                    {nav.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;