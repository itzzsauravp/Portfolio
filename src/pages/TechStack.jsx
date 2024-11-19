import {
  FaJs,
  FaPython,
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaNode,
  FaGitSquare,
  FaYarn,
} from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiExpress, SiAxios, SiVite, SiNpm, SiNodemon } from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";
const TechStack = () => {
  const TechStackDetails = [
    {
      category: "Languages",
      items: [
        { name: "Javascript", icon: <FaJs /> },
        { name: "Python", icon: <FaPython /> },
        { name: "HTML", icon: <FaHtml5 /> },
        { name: "CSS", icon: <FaCss3Alt /> },
      ],
    },
    {
      category: "Frameworks & Libraries",
      items: [
        { name: "React", icon: <FaReact /> },
        { name: "Tailwind", icon: <RiTailwindCssFill /> },
        { name: "Express", icon: <SiExpress /> },
        { name: "Axios", icon: <SiAxios /> },
      ],
    },
    {
      category: "Run Time",
      items: [
        {
          name: "NodeJs",
          icon: <FaNode />,
        },
      ],
    },
    {
      category: "Tools/Other Platforms",
      items: [
        { name: "Git", icon: <FaGitSquare /> },
        { name: "Vite", icon: <SiVite /> },
        { name: "Npm", icon: <SiNpm /> },
        { name: "Yarn", icon: <FaYarn /> },
        { name: "Nodemon", icon: <SiNodemon /> },
        { name: "Postgresql", icon: <BiLogoPostgresql /> },
      ],
    },
  ];
  return (
    <div className="w-full md:w-[85%] lg:w-[65%] xl:w-[50%] 2xl:w-[35%] m-auto dark:text-black">
      <h1 className="text-4xl uppercase mt-12">Tech Stack</h1>
      <p className="italic text-slate-500 mt-2">
        Technologies I&apos;ve worked with across various projects
      </p>
      {TechStackDetails.map((obj, i) => (
        <div key={i} className="mt-6">
          <h1 className="text-2xl text-iOrange">{obj.category}</h1>
          <div className="grid grid-cols-2 gap-2 mt-2 flex-wrap">
            {obj.items.map((tech, i) => (
              <div
                key={i}
                className="flex items-center gap-4 w-auto rounded-md p-2 border dark:border-black cursor-pointer hover:bg-iOrange duration-100 ease-out"
              >
                <div className="text-5xl">{tech.icon}</div>
                <p>{tech.name}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default TechStack;
