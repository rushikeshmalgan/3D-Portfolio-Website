import { BrowserRouter } from "react-router-dom";

import {
  AboutMe,
  About,
  Contact,
  Experience,
  Feedbacks,
  Hero,
  Navbar,
  Tech,
  Works,
  StarsCanvas,
  Achievements,
} from "./components";
import MouseGlow from "./components/MouseGlow";
import SocialLinks from "./components/SocialLinks";

const App = () => {
  return (
    <BrowserRouter>
      <div
        className="relative z-0 overflow-x-hidden"
        style={{ background: "var(--bg-primary)" }}
      >
        {/* Mouse Glow Effect */}
        <MouseGlow />

        {/* Floating Contact Buttons */}
        <SocialLinks />

        {/* Hero section with background */}
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>

        {/* === SECTION ORDER ===
            1. About Me (photo + bio)
            2. What I Do (service cards)
            3. Work Experience (timeline)
            4. Tech Skills (3D balls)
            5. Projects (project cards)
            6. Testimonials
            7. Achievements + Education
            8. Contact + Stars
        */}
        <AboutMe />
        <About />
        <Experience />
        <Tech />
        <Works />
        <Feedbacks />
        <Achievements />

        <div className="relative z-0">
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
