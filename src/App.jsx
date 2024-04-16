import { BrowserRouter } from "react-router-dom";
import {
  About,
  Contact,
  Fotter,
  Feedbacks,
  Hero,
  Navbar,
  Tech,
  Projects,
} from "./components";
import Experience from "./components/Experience";
import SocialLinks from "./components/SocialLinks";
import AnimatedCursor from "react-animated-cursor";

const App = () => {
  return (
    <BrowserRouter>
      <AnimatedCursor
        innerSize={15}
        outerSize={30}
        color="250, 101, 60"
        outerAlpha={0.5}
        innerScale={0.6}
        outerScale={2.5}
        clickables={[
          "a",
          'input[type="text"]',
          'input[type="email"]',
          'input[type="number"]',
          'input[type="submit"]',
          'input[type="image"]',
          "label[for]",
          "select",
          "textarea",
          "button",
          ".link",
        ]}
        hasBlendMode={true}
        outerStyle={{
          mixBlendMode: "exclusion",
        }}
        innerStyle={{
          backgroundColor: "var(--cursor-color)",
        }}
      />
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <SocialLinks />
          <Navbar />
          <Hero />
        </div>
        <About />
        <Tech />
        <Experience />
        <Projects />
        <Feedbacks />
        <div className="relative z-0">
          <Contact />
          <Fotter />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
