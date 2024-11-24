import { MdCancel } from "react-icons/md";
import { NavLink } from "react-router-dom";
import { CiLight } from "react-icons/ci";
import { CiDark } from "react-icons/ci";
import { Navigation } from "../data/staticData";
const HamburgerNavigation = ({ setOpenMenu, darkMode, setDarkMode }) => {
  return (
    <div className="fixed top-0 left-0 h-screen w-full bg-iOrange dark:bg-white opacity-95 flex items-center justify-center z-10">
      <div className="flex flex-col gap-5 mb-24 w-[50%] text-center">
        {Navigation.map((l, i) => (
          <NavLink
            key={i}
            to={l.to}
            onClick={() => setOpenMenu(false)}
            className="py-4 border dark:border-black rounded-md text-xl"
          >
            {l.name}
          </NavLink>
        ))}
        <div
          className="absolute right-9 top-8 text-4xl cursor-pointer p-1 rounded-full can-hover:hover:bg-white can-hover:hover:text-black duration-200 ease-out flex items-center justify-center"
          onClick={() => setDarkMode(!darkMode)}
        >
          {darkMode ? <CiLight /> : <CiDark />}
        </div>
        <button
          onClick={() => setOpenMenu(false)}
          className="absolute left-9 top-10 text-black text-4xl"
        >
          <MdCancel />
        </button>
      </div>
    </div>
  );
};

export default HamburgerNavigation;
