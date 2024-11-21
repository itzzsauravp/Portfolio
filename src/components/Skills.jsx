import { SiRedux } from "react-icons/si";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3 } from "react-icons/fa";
import { SiHyperskill } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io5";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaReact } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import clsx from "clsx";
import { motion } from "motion/react";
const Skills = () => {
  const Skills = [
    {
      name: "HTML",
      icon: <FaHtml5 />,
      color: "hover:bg-[#E54C21]/20",
    },
    { name: "CSS", icon: <FaCss3 />, color: "hover:bg-[#0B74B8]/20" },
    {
      name: "Javascript",
      icon: <IoLogoJavascript />,
      color: "hover:bg-[#FFDF00]/20",
    },
    { name: "React", icon: <FaReact />, color: "hover:bg-[#5ADAFD]/20" },
    {
      name: "Tailwind",
      icon: <RiTailwindCssFill />,
      color: "hover:bg-[#38BDF8]/20",
    },
    { name: "Redux", icon: <SiRedux />, color: "hover:bg-[#7749BD]/20" },
  ];

  return (
    <div className="mt-7">
      <span className="flex py-2 text-xl lg:text-3xl gap-2 items-center font-semibold uppercase border-iOrange border-b">
        <SiHyperskill />
        Skills
      </span>
      <div className="grid grid-cols-2 gap-2 mt-4 items-center justify-center">
        {Skills.map((skill, i) => (
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
