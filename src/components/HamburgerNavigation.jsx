import { MdCancel } from "react-icons/md";
import { NavLink } from "react-router-dom";
const Navigation = [
  {
    name: "Home",
    to: "/",
  },
  {
    name: "Tech",
    to: "/tech-stack",
  },
];
const HamburgerNavigation = ({ setOpenMenu }) => {
  return (
    <div className="fixed top-0 left-0 h-screen w-full bg-iOrange opacity-95 flex items-center justify-center z-10">
      <div className="flex flex-col gap-5 mb-24 w-[50%] text-center">
        {Navigation.map((l, i) => (
          <NavLink
            key={i}
            to={l.to}
            onClick={() => setOpenMenu(false)}
            className="p-2 border rounded-md text-xl"
          >
            {l.name}
          </NavLink>
        ))}
        <button
          onClick={() => setOpenMenu(false)}
          className="absolute right-2 top-11 text-black text-4xl"
        >
          <MdCancel />
        </button>
      </div>
    </div>
  );
};

export default HamburgerNavigation;
