import { SiHyperskill } from "react-icons/si";
import { NavLink } from "react-router-dom";
import clsx from "clsx";
import { motion } from "motion/react";
import { SkillsDetail } from "../data/staticDataReactIcons";
const Skills = () => {
  return (
    <div>
      <span className="flex py-2 text-xl lg:text-3xl gap-2 items-center font-semibold uppercase border-iOrange border-b">
        <SiHyperskill />
        Skills
      </span>
      <div className="grid grid-cols-2 gap-2 mt-4 items-center justify-center">
        {SkillsDetail.map((skill, i) => (
          <motion.div
            key={i}
            className={clsx(
              "flex items-center gap-4 w-auto rounded-md p-2 border dark:border-black cursor-pointer duration-100 ease-out",
              skill.color
            )}
          >
            <div className="text-3xl sm:text-4xl lg:text-5xl">{skill.icon}</div>
            <p className="text-sm sm:text-lg lg:text-2xl">{skill.name}</p>
          </motion.div>
        ))}
      </div>
      <p className="ml-2 mt-4 text-sm">
        To see other technologies i have experience with{" "}
        <NavLink
          className="text-iOrange inline-block font-semibold"
          to="/tech-stack"
        >
          click here.
        </NavLink>
      </p>
    </div>
  );
};

export default Skills;
