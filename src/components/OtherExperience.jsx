// @flow strict

import { BsPersonWorkspace } from "react-icons/bs";
import GlowCard from "./helper/glow-card";
import { leadershiproles, ohterExperiences } from "../constants";
import { SectionWrapper } from "../hoc";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";
import { styles } from "../styles";

function OtherExperience() {
  return (
    <div id="experience" className="relative w-full">
      <div className="pt-20 flex flex-col">
        <motion.div variants={textVariant()}>
          <p className={`${styles.sectionSubText} text-center`}>
            A glimpse of my contributions
          </p>
          <h2 className={`${styles.sectionHeadText} text-center`}>
            Leadership & Open Source
          </h2>
        </motion.div>
      </div>

      <img src="/section.svg" alt="Hero" className="absolute top-0 -z-10" />

      <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-3 lg:gap-3 justify-items-center">
        <div className="w-full">
          <div className="flex justify-center my-5 lg:py-8">
            <div className="flex  items-center">
              <span className="w-24 h-[2px] bg-[#1a1443]"></span>
              <span
                className={`${styles.sectionSubText} bg-[#1a1443] w-fit text-white p-2 text-xl rounded-md text-center`}
              >
                Open Source Contributions
              </span>
              <span className="w-24 h-[2px] bg-[#1a1443]"></span>
            </div>
          </div>
          <div className="flex flex-col gap-6 max-w-2xl p-3 w-full">
            {ohterExperiences.map((experience) => (
              <GlowCard
                key={experience.id}
                identifier={`experience-${experience.id}`}
              >
                <div className="p-3 relative">
                  <img
                    src="/blur-23.svg"
                    alt="Hero"
                    width={1080}
                    height={200}
                    className="absolute bottom-0 opacity-80"
                  />
                  <div className="flex justify-center">
                    <p className="text-xs sm:text-sm text-[#16f2b3]">
                      {experience.duration}
                    </p>
                  </div>
                  <div className="flex items-center gap-x-8 px-3 py-5">
                    <div className="text-violet-500  transition-all duration-300 hover:scale-125">
                      <BsPersonWorkspace size={36} />
                    </div>
                    <div>
                      <p className="text-base sm:text-xl mb-2 font-medium uppercase">
                        {experience.title}
                      </p>
                      <p className="text-sm sm:text-base">
                        {experience.company}
                      </p>
                    </div>
                  </div>
                </div>
              </GlowCard>
            ))}
          </div>
        </div>

        <div className="w-full">
          <div className="flex justify-center my-5 lg:py-8">
            <div className="flex  items-center">
              <span className="w-24 h-[2px] bg-[#1a1443]"></span>
              <span
                className={`${styles.sectionSubText} bg-[#1a1443] w-fit text-white p-2 text-xl rounded-md text-center`}
              >
                LeaderShip Roles
              </span>
              <span className="w-24 h-[2px] bg-[#1a1443]"></span>
            </div>
          </div>
          <div className="flex flex-col gap-6 max-w-2xl p-3 w-full">
            {leadershiproles.map((experience) => (
              <GlowCard
                key={experience.id}
                identifier={`leadership-${experience.id}`}
              >
                <div className="p-3 relative">
                  <img
                    src="/blur-23.svg"
                    alt="Hero"
                    width={1080}
                    height={200}
                    className="absolute bottom-0 opacity-80"
                  />
                  <div className="flex justify-center">
                    <p className="text-xs sm:text-sm text-[#16f2b3]">
                      {experience.duration}
                    </p>
                  </div>
                  <div className="flex items-center gap-x-8 px-3 py-5">
                    <div className="text-violet-500  transition-all duration-300 hover:scale-125">
                      <BsPersonWorkspace size={36} />
                    </div>
                    <div>
                      <p className="text-base sm:text-xl mb-2 font-medium uppercase">
                        {experience.title}
                      </p>
                      <p className="text-sm sm:text-base">
                        {experience.company}
                      </p>
                    </div>
                  </div>
                </div>
              </GlowCard>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default SectionWrapper(OtherExperience, "OtherExperience");
