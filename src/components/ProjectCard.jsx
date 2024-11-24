import { NavLink } from "react-router-dom";
import useProjectDetails from "../hooks/useProjectDetails";
const ProjectCard = ({ project }) => {
  const { name, introduction, link, images } = project;
  const { setProjectDetails } = useProjectDetails();
  return (
    <div className="border p-4 dark:border-black rounded-md w-full flex flex-col">
      <h1 className="font-bold text-xl">{name}</h1>
      <img src={images[0]} className="mt-2" />
      <p className="text-slate-500 py-3 text-sm">{introduction}</p>
      <div className="mt-auto flex flex-col md:flex-row  items-center gap-2 w-full ">
        <a
          className="bg-iOrange px-2 py-1 rounded-md text-center w-full text-sm shadow-lg"
          href={link}
          target="_blank"
        >
          View Repo
        </a>
        <NavLink
          to={`/project/${name
            .split("")
            .map((char) => (char === " " ? (char = "-") : char))
            .join("")}`}
          className="px-2 py-1 bg-transparent shadow-lg border text-center border-iOrange rounded-md w-full text-sm"
          onClick={() => setProjectDetails(project)}
        >
          Details
        </NavLink>
      </div>
    </div>
  );
};

export default ProjectCard;
