import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt
    className="xs:w-[250px] w-full"
    options={{
      max: 20,
      scale: 1,
      speed: 450,
      transition: true,
      easing: "cubic-bezier(.03,.98,.52,.99)",
      reset: true,
    }}
  >
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
      >
        <img
          src={icon}
          alt="web-development"
          className="w-16 h-16 object-contain"
        />

        <h3 className="text-white text-[20px] font-bold text-center">
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>About Me</h2>
      </motion.div>

      <div className=" text-secondary text-[17px] max-w-3xl leading-[30px]">
        🚀 Passionate MERN & Nextjs developer. <br />
        💡 Student at Central University of Haryana. <br />
        🌟 Open-source enthusiast and GDSC lead.
        <br />
        📚 Constantly learning and innovating in the ever-evolving tech world.
        <br />
      </div>
      <embed
        title="resume"
        // src="https://onedrive.live.com/embed?resid=2DBFA942CC4BE3DE%211425&authkey=!AGlO6I2GIEPwK40&em=2"
        src="https://drive.google.com/file/d/1HU83x1dAdo2GT2GE3BBhA0XDEOAuaZ-K/preview"
        type="application/pdf"
        width="550px"
        height="300px"
        className="absolute rounded-sm right-10 top-10"
      ></embed>
      <div className="mt-20 flex flex-wrap gap-10 justify-center">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
