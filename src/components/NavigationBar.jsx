import { FaDiscord } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import HamburgerNavigation from "./HamburgerNavigation";
import { RxHamburgerMenu } from "react-icons/rx";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { GrTechnology } from "react-icons/gr";
import { FaHome } from "react-icons/fa";
import { CiLight } from "react-icons/ci";
import { CiDark } from "react-icons/ci";
import { useEffect } from "react";
import { motion } from "motion/react";
import ToolTip from "./ToolTip";
const NavigationBar = () => {
  const SOCIALS = [
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
  const Navigation = [
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
  const [openMenu, setOpenMenu] = useState(false);
  const [darkMode, setDarkMode] = useState(true);
  useEffect(() => {
    const rootElem = document.documentElement;
    rootElem.classList.toggle("dark");
  }, [darkMode]);
  return (
    <motion.nav
      className="text-3xl flex items-center justify-between w-full md:w-[85%] lg:w-[65%] xl:w-[50%] 2xl:w-[35%] m-auto gap-3 dark:text-black"
      initial={{
        y: -100,
        opacity: 0,
      }}
      animate={{
        y: 0,
        opacity: 1,
      }}
      transition={{
        duration: 0.3,
        ease: "easeOut",
      }}
    >
      <RxHamburgerMenu
        className="cursor-pointer lg:hidden"
        onClick={() => setOpenMenu(true)}
      />
      {openMenu && (
        <HamburgerNavigation
          setOpenMenu={setOpenMenu}
          darkMode={darkMode}
          setDarkMode={setDarkMode}
        />
      )}
      <div className="uppercase hidden lg:flex gap-5 items-center">
        {Navigation.map((l, i) => (
          <NavLink
            key={i}
            to={l.to}
            className="cursor-pointer inline-block p-2 hover:bg-white rounded-full hover:text-black duration-200 ease-out"
          >
            {l.icon}
          </NavLink>
        ))}
        <div
          className="cursor-pointer h-11 w-11 p-1 hover:bg-white rounded-full hover:text-black duration-200 ease-out flex items-center justify-center"
          onClick={() => setDarkMode(!darkMode)}
        >
          {darkMode ? <CiLight /> : <CiDark />}
        </div>
      </div>
      <div className="flex gap-3">
        {SOCIALS.map((item, index) => (
          <ToolTip key={index} name={item.name}>
            <a
              className="cursor-pointer inline-block p-2 rounded-full hover:bg-white hover:text-black duration-200 ease-out"
              href={`${item.link}`}
              target="_blank"
            >
              {item.icon}
            </a>
          </ToolTip>
        ))}
      </div>
    </motion.nav>
  );
};

export default NavigationBar;
