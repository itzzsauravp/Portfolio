import { SiPlaycanvas } from "react-icons/si";
import { HobbiesList } from "../data/staticDataReactIcons";
import ToolTip from "../components/ToolTip";
const Hobbies = () => {
  return (
    <div className="mt-7">
      <span className="flex py-2 text-xl lg:text-3xl gap-2 items-center font-semibold uppercase border-iOrange border-b">
        <SiPlaycanvas />
        Hobbies
      </span>
      <h1 className="mt-2">
        During my free time you&apos;ll find me playing video games listening to
        music. And may be sometimes debugging my code.😁👍
      </h1>
      <div className="flex items-center justify-center gap-4 mt-2">
        {HobbiesList.map((item, i) => (
          <ToolTip
            key={i}
            name={item.name}
            toolTipBoxTW="top-[-45px]"
            toolTipPointerTW="border-b border-r bottom-[-7px]"
          >
            <div className="border p-3 rounded-full dark:border-black can-hover:hover:text-black can-hover:hover:bg-white">
              <a href={item.link} className="text-3xl">
                {item.icon}
              </a>
            </div>
          </ToolTip>
        ))}
      </div>
    </div>
  );
};

export default Hobbies;
