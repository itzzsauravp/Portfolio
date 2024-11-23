import {
  FaYoutube,
  FaSpotify,
  FaSteam,
  FaDiscord,
  FaLinkedin,
  FaGithub,
  FaHome,
  FaReact,
  FaCss3,
  FaHtml5,
  FaPython,
  FaNode,
  FaGitSquare,
  FaJs,
} from "react-icons/fa";
import {
  SiValorant,
  SiRedux,
  SiMysql,
  SiPostman,
  SiExpress,
  SiAxios,
  SiVite,
  SiPnpm,
} from "react-icons/si";
import { GrTechnology } from "react-icons/gr";
import { RiTailwindCssFill } from "react-icons/ri";
import { TbBrandFramerMotion } from "react-icons/tb";
import { FaJava } from "react-icons/fa6";
import { BiLogoPostgresql } from "react-icons/bi";
export const HobbiesList = [
  {
    name: "steam",
    icon: <FaSteam />,
    link: "https://steamcommunity.com/id/fnrr2k3/",
  },
  {
    name: "tracker.gg",
    icon: <SiValorant />,
    link: "https://tracker.gg/valorant/profile/riot/fnrr%230523/overview",
  },
  {
    name: "spotify",
    icon: <FaSpotify />,
    link: "https://open.spotify.com/user/40fhpq2ksh6dpa5lh3bekikc9?si=52284d91aec34db7",
  },
  {
    name: "fnrr",
    icon: <FaYoutube />,
    link: "https://www.youtube.com/@fnrr2k3",
  },
];

export const SOCIALS = [
  {
    name: "fnrrwastaken",
    icon: <FaDiscord />,
    link: "https://discord.gg/BPWVQuJe",
  },
  {
    name: "itzzsauravp",
    icon: <FaLinkedin />,
    link: "https://www.linkedin.com/in/itzzsauravp/",
  },
  {
    name: "itzzsauravp",
    icon: <FaGithub />,
    link: "https://github.com/itzzsauravp",
  },
];

export const Navigation = [
  {
    name: "Home",
    icon: <FaHome />,
    to: "/",
  },
  {
    name: "Tech",
    icon: <GrTechnology />,
    to: "/tech-stack",
  },
];

export const SkillsDetail = [
  {
    name: "HTML",
    icon: <FaHtml5 />,
    color: "hover:bg-[#E54C21]/20",
  },
  { name: "CSS", icon: <FaCss3 />, color: "hover:bg-[#0B74B8]/20" },
  {
    name: "Javascript",
    icon: <FaJs />,
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

export const TechStackDetails = [
  {
    category: "Frontend",
    items: [
      { name: "HTML", icon: <FaHtml5 /> },
      { name: "CSS", icon: <FaCss3 /> },
    ],
  },
  {
    category: "Languages",
    items: [
      { name: "Javascript", icon: <FaJs /> },
      { name: "Python", icon: <FaPython /> },
      { name: "Java", icon: <FaJava /> },
    ],
  },
  {
    category: "Frameworks & Libraries",
    items: [
      { name: "React", icon: <FaReact /> },
      { name: "Redux", icon: <SiRedux /> },
      { name: "Tailwind", icon: <RiTailwindCssFill /> },
      { name: "Express", icon: <SiExpress /> },
      { name: "Axios", icon: <SiAxios /> },
      { name: "Motion", icon: <TbBrandFramerMotion /> },
    ],
  },
  {
    category: "Database",
    items: [
      { name: "Postgresql", icon: <BiLogoPostgresql /> },
      { name: "MySQL", icon: <SiMysql /> },
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
      { name: "pnpm", icon: <SiPnpm /> },
      { name: "Postman", icon: <SiPostman /> },
    ],
  },
];
