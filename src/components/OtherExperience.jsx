// @flow strict

import { BsPersonWorkspace } from "react-icons/bs";
import GlowCard from "./helper/glow-card";
import { leadershiproles, ohterExperiences } from "../constants";

function OtherExperience() {
  return (
    <div id="experience" className="relative">
      <img src="/section.svg" alt="Hero" className="absolute top-0 -z-10" />

      <div className="py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 lg:gap-3 justify-items-center">
          <div>
            <div className="flex justify-center my-5 lg:py-8">
              <div className="flex  items-center">
                <span className="w-24 h-[2px] bg-[#1a1443]"></span>
                <span className="bg-[#1a1443] w-fit text-white p-2 px-5 text-xl rounded-md text-center">
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

          <div>
            <div className="flex justify-center my-5 lg:py-8">
              <div className="flex  items-center">
                <span className="w-24 h-[2px] bg-[#1a1443]"></span>
                <span className="bg-[#1a1443] w-fit text-white p-2 px-5 text-xl rounded-md text-center">
                  LeaderShip Roles
                </span>
                <span className="w-24 h-[2px] bg-[#1a1443]"></span>
              </div>
            </div>
            <div className="flex flex-col gap-6 max-w-2xl p-3 w-full">
              {leadershiproles.map((experience) => (
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
        </div>
      </div>
    </div>
  );
}

export default OtherExperience;
