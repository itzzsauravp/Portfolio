import { SiRedux } from "react-icons/si";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3 } from "react-icons/fa";
import { SiHyperskill } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io5";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaReact } from "react-icons/fa";
import Familiarity from "./Familiarity";
import { NavLink } from "react-router-dom";

const Skills = () => {
  const Skills = [
    { name: "HTML", icon: <FaHtml5 />, familiarity: 4 },
    { name: "CSS", icon: <FaCss3 />, familiarity: 4 },
    { name: "Javascript", icon: <IoLogoJavascript />, familiarity: 4 },
    { name: "React", icon: <FaReact />, familiarity: 3 },
    { name: "Tailwind", icon: <RiTailwindCssFill />, familiarity: 3 },
    { name: "Redux", icon: <SiRedux />, familiarity: 3 },
  ];
  return (
    <div className="mt-7">
      <span className="flex py-2 text-xl lg:text-3xl gap-2 items-center font-semibold uppercase border-iOrange border-b ">
        <SiHyperskill />
        Skills
      </span>
      <div className="flex flex-col items-center justify-center">
        {Skills.map((skill, i) => (
          <Familiarity key={i} skill={skill} />
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
