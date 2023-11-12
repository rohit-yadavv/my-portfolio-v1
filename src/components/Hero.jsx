import { Typewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";
import { styles } from "../styles";
import ParticlesBackground from "../components/Particles/ParticlesBackground";

const Hero = () => {
  return (
    <section className={`relative w-full mx-auto`} style={{ height: "100vh" }}>
      <ParticlesBackground />
      <div
        className={`h-[60%] items-center justify-center w-full absolute inset-0 top-[120px] max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5 justify-start`}
      >
        {/* <div className="hidden  flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915EFF]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div> */}

        <div style={{ paddingTop: "25px" }}>
          <h1
            className={`${styles.heroHeadText} text-center font-extralight sm:font-extrabold  text-white`}
          >
            Hi, I'm{" "}
            <span className="text-center hidden sm:inline text-[#915EFF]">
              ROHIT
            </span>
          </h1>
          <span className=" text-center block sm:hidden text-[#915EFF] text-[80px] font-extrabold">
            ROHIT
          </span>
          <p
            className={`${styles.heroSubText} text-center font-light text-[25px] mt-2 text-white-100`}
          >
            <Typewriter
              words={[
                "MERN Developer",
                "Nextjs Developer",
                "Open Source Enthusiast",
                "Student",
                "TECH Enthusiast",
              ]}
              cursor
              loop={10}
              cursorStyle="|"
              cursorBlinking="false"
              typeSpeed={60}
              deleteSpeed={20}
              delaySpeed={1400}
            />
            {/* <br className="sm:block hidden" />
            interfaces and web applications */}
          </p>
          <p className="text-center font-extralight text-[25px] mt-2 text-white-100">
            Welcome To my Portfolio
          </p>
        </div>
      </div>

      <div className="absolute xs:bottom-10 bottom-12 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
