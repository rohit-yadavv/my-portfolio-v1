import { BrowserRouter } from "react-router-dom";

import { About, Contact, Fotter, Feedbacks, Hero, Navbar, Tech, Projects, StarsCanvas } from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary'>
        <Navbar />
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center relative z-[-2]'>
          <StarsCanvas />
          <Hero />
        </div>
        <About />
        <Tech />
                 
        <Projects />
        <Feedbacks />
        <div className='relative z-0'>
          <Contact />
          <StarsCanvas />
          <Fotter />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
