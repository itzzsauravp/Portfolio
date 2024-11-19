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

const NavigationBar = () => {
  const SOCIALS = [
    {
      name: "Discord",
      icon: <FaDiscord />,
      link: "https://discord.gg/BPWVQuJe",
    },
    {
      name: "Linkedin",
      icon: <FaLinkedin />,
      link: "https://www.linkedin.com/in/itzzsauravp/",
    },
    {
      name: "Github",
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
    <nav className="text-3xl flex items-center justify-between w-full md:w-[85%] lg:w-[65%] xl:w-[50%] 2xl:w-[35%] m-auto gap-3 dark:text-black">
      <RxHamburgerMenu
        className="cursor-pointer lg:hidden"
        onClick={() => setOpenMenu(true)}
      />
      {openMenu && <HamburgerNavigation setOpenMenu={setOpenMenu} />}
      <div className="uppercase hidden lg:flex gap-3 items-center">
        {Navigation.map((l, i) => (
          <NavLink
            key={i}
            to={l.to}
            className="cursor-pointer p-2 rounded-md hover:bg-white hover:text-black duration-200 ease-out"
          >
            {l.icon}
          </NavLink>
        ))}
        <div
          className="cursor-pointer p-1 h-10 w-10 rounded-full hover:bg-white hover:text-black duration-200 ease-out flex items-center justify-center "
          onClick={() => setDarkMode(!darkMode)}
        >
          {darkMode ? <CiLight /> : <CiDark />}
        </div>
      </div>
      <div className="flex gap-3">
        {SOCIALS.map((item, index) => (
          <a
            key={index}
            className="cursor-pointer p-2 rounded-md hover:bg-white hover:text-black duration-200 ease-out"
            href={`${item.link}`}
            target="_blank"
          >
            {item.icon}
          </a>
        ))}
      </div>
    </nav>
  );
};

export default NavigationBar;
