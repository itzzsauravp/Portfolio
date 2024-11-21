import { SiPlaycanvas, SiCounterstrike, SiValorant } from "react-icons/si";
import { FaYoutube, FaSpotify } from "react-icons/fa";
import ToolTip from "../components/ToolTip";
const Hobbies = () => {
  const HobbiesList = [
    {
      name: "steam",
      icon: <SiCounterstrike />,
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
  return (
    <div className="mt-7">
      {" "}
      <span className="flex py-2 text-xl lg:text-3xl gap-2 items-center font-semibold uppercase border-iOrange border-b">
        <SiPlaycanvas />
        Hobbies
      </span>
      <h1 className="mt-2">
        During my free time you&apos;ll find me playing video games listening to
        music. And may be something debugging my code. And I do stream sometimes
        on YouTube.😁👍
      </h1>
      <div className="flex items-center justify-center gap-4 mt-5">
        {HobbiesList.map((item, i) => (
          <ToolTip key={i} name={item.name}>
            <div className="border p-3 rounded-full dark:border-black hover:text-black hover:bg-white">
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
