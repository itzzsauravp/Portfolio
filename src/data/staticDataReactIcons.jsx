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
  FaFigma,
  FaChartBar,
  FaStore,
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
  SiReactrouter,
  SiSocketdotio,
} from "react-icons/si";
import { GrTechnology } from "react-icons/gr";
import { RiTailwindCssFill } from "react-icons/ri";
import { TbBrandFramerMotion } from "react-icons/tb";
import { FaJava } from "react-icons/fa6";
import { BiLogoPostgresql } from "react-icons/bi";

// Vision UI Dashboard assets
import dashboard1 from "/images/VisionUIDashboard/dashboard1.png";
import dashboard2 from "/images/VisionUIDashboard/dashboard2.png";
import login from "/images/VisionUIDashboard/login.png";
import signUp from "/images/VisionUIDashboard/signUp.png";

//Ecom assets
import cart from "/images/Ecom/cart.png";
import itemDetails from "/images/Ecom/itemDetails.png";
import landing from "/images/Ecom/landing.png";
import shop from "/images/Ecom/shop.png";
import wishlist from "/images/Ecom/wishlist.png";

// TeamSync assets
import groupChat from "/images/TeamSync/groupChat.png";
import account from "/images/TeamSync/account.png";
import createGroup from "/images/TeamSync/createGroup.png";
import liveChat from "/images/TeamSync/liveChat.png";
import userSearch from "/images/TeamSync/userSearch.png";

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
    color: "can-hover:hover:bg-[#E54C21]/20",
  },
  { name: "CSS", icon: <FaCss3 />, color: "can-hover:hover:bg-[#0B74B8]/20" },
  {
    name: "Javascript",
    icon: <FaJs />,
    color: "can-hover:hover:bg-[#FFDF00]/20",
  },
  {
    name: "React",
    icon: <FaReact />,
    color: "can-hover:hover:bg-[#5ADAFD]/20",
  },
  {
    name: "Tailwind",
    icon: <RiTailwindCssFill />,
    color: "can-hover:hover:bg-[#38BDF8]/20",
  },
  {
    name: "Redux",
    icon: <SiRedux />,
    color: "can-hover:hover:bg-[#7749BD]/20",
  },
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

export const ProjectDetails = [
  {
    name: "Vision UI Dashboard",
    introduction:
      "Created the Vision UI Dashboard ( uses materialUI ) from scratch ( without materialUI ). ",
    desc: "For this project, I challenged myself to recreate a dashboard design I discovered on Figma. The original design was implemented using MaterialUI, but I aimed to replicate it using only HTML, CSS, and JavaScript. My goal was to stay as true to the original design as possible while also incorporating my own unique touches to enhance its functionality and aesthetics. This is the result of my efforts, A blend of meticulous replication and creative customization.",
    link: "https://github.com/itzzsauravp/Vision-UI-Dashboard",
    images: [`${dashboard1}`, `${dashboard2}`, `${signUp}`, `${login}`],
    uses: [
      { icon: <FaReact />, name: "React" },
      { icon: <RiTailwindCssFill />, name: "Tailwind" },
      { icon: <FaFigma />, name: "Figma" },
      { icon: <FaChartBar />, name: "ChartJS" },
    ],
    tags: ["UI", "Dashboard"],
    features: ["Dashboard Page", "Login Page", "Signup Page"],
    learned: [
      "Basic Tailwind",
      "Use of Figma",
      "ChartJS",
      "Grids and Flexboxes",
    ],
    status: "completed",
  },
  {
    name: "E-com",
    introduction:
      "A frontend e-commerce project powered by FakeStoreAPI, showcasing statemanagement techniques using Redux, Redux Toolkit, and Context API.",
    desc: "This project is a frontend e-commerce application powered by the FakeStoreAPI, designed to simulate a real-world online shopping experience. It showcases the implementation of advanced state management techniques, leveraging Redux Toolkit for simplified and scalable state management, and Context API for more localized state sharing. The application highlights dynamic data fetching, user-friendly UI/UX, providing a comprehensive example of modern frontend development practices.",
    link: "https://github.com/itzzsauravp/E-Com",
    images: [
      `${shop}`,
      `${cart}`,
      `${itemDetails}`,
      `${landing}`,
      `${wishlist}`,
    ],
    uses: [
      { icon: <FaReact />, name: "React" },
      { icon: <SiRedux />, name: "Redux" },
      { icon: <FaStore />, name: "FakeStore API" },
      { icon: <RiTailwindCssFill />, name: "Tailwind" },
      { icon: <SiReactrouter />, name: "React Router" },
    ],
    tags: ["E-commerce", "Product listings"],
    features: [
      "Login/Logout",
      "Wishlist",
      "Order History",
      "Cart",
      "Item details showcase",
    ],
    learned: [
      "API integration",
      "Redux/ReduxToolkit usage",
      "State/Data Control",
    ],
    status: "completed",
  },
  {
    name: "TeamSync",
    introduction:
      "A chatbased communication platform with task management built into it.",
    desc: "This project is a full-stack web application built using the PERN stack (PostgreSQL, Express.js, React, and Node.js) with real-time capabilities provided by Socket.io.The platform will facilitate seamless communication and efficient task management within teams. Users can engage in live, real-time chat, create and manage tasks, and receive notifications for updates. The application features secure authentication, a user-friendly interface, and responsive design to ensure accessibility across devices. Planned additional features include file sharing, calendar integration, advanced analytics, and potential mobile application development using React Native.",
    link: "https://github.com/itzzsauravp/TeamSync",
    images: [
      `${liveChat}`,
      `${createGroup}`,
      `${groupChat}`,
      `${account}`,
      `${userSearch}`,
    ],
    uses: [
      { icon: <BiLogoPostgresql />, name: "PostgreSQL" },
      { icon: <SiExpress />, name: "Express" },
      { icon: <FaReact />, name: "React" },
      { icon: <FaNode />, name: "NodeJs" },
      { icon: <SiSocketdotio />, name: "Scoket.io" },
      { icon: <SiRedux />, name: "Redux" },
      { icon: <RiTailwindCssFill />, name: "Tailwind" },
      { icon: <SiReactrouter />, name: "React Router" },
    ],
    tags: ["Chatapp", "Task Management", "Websocket"],
    features: ["User authentication", "Live Chat"],
    learned: ["Tailwind", "Basic use of figma"],
    status: "ongoing",
  },
];
