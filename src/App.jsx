import { BrowserRouter } from "react-router-dom";
import Experience from "./components/Experience";
import SocialLinks from "./components/SocialLinks";
import AnimatedCursor from "react-animated-cursor";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Tech from "./components/Tech";
import Projects from "./components/Projects";
import Feedbacks from "./components/Feedbacks";
import Contact from "./components/Contact";
import OtherExperience from "./components/OtherExperience";

const App = () => {
  return (
    <BrowserRouter>
      <AnimatedCursor
        innerSize={15}
        outerSize={30}
        color="250, 101, 60"
        outerAlpha={0.3}
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
        <OtherExperience />
        <Projects />
        <Feedbacks />
        <Contact />
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
