import React from "react";
import { motion } from "framer-motion";
import { SectionWrapper } from "../hoc";
import { fadeIn } from "../utils/motion";
import { technologies } from "../constants";



const Tech = () => {
  return (
    <div className='mt-20 flex flex-wrap gap-10 ' >
        <motion.div
          variants={fadeIn("right", "spring")}
          className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
        >
          <div
            options={{
              max: 45,
              scale: 1,
              speed: 450,
            }}
            className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
          >
              <h3 className='text-white text-[30px] py-2 font-bold text-center'>
          Skills
        </h3>
            < div className="technologies w-full flex flex-row justify-center flex-wrap">
              {technologies.map((technology) => (
                <div className="outer_circle">
                  <div>
                    <img className='sm:w-20 w-20 ' style={{ margin: '10px', padding: '10px' }} src={technology.icon} />
                  </div>
                </div>

              ))}

            </div>
          </div>
        </motion.div>
    </div >
  )

}
export default SectionWrapper(Tech, "skills");
