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
  StarsCanvas,
} from "./components";
import Experience from "./components/Experience";

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <Navbar />
        <Hero />
        <About />
        <Tech />
        <Experience />
        <Projects />
        <Feedbacks />
        <div className="relative z-0">
          <Contact />
          <StarsCanvas />
          <Fotter />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
