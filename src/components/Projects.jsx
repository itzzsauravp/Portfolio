import ProjectCard from "./ProjectCard";
import { GrProjects } from "react-icons/gr";
import { useState } from "react";
import { useEffect } from "react";

const Projects = () => {
  const [currIndex, setCurrIndex] = useState(0);
  const ProjectDetails = [
    {
      name: "Vision UI Dashboard",
      desc: "Trying to create the Vision UI Dashboard (uses materialUI) from scratch (without materialUI).",
      link: "https://github.com/itzzsauravp/Vision-UI-Dashboard",
    },
    {
      name: "E-com",
      desc: "A frontend e-commerce project powered by FakeStoreAPI, showcasing statemanagement techniques using Redux, Redux Toolkit, and Context API.",
      link: "https://github.com/itzzsauravp/E-Com",
    },
    {
      name: "Artist Management System",
      desc: "A web application for managing users, artists, and songs. Features include role-based access control, CRUD operations via raw SQL, user authentication,Built without ORM for direct database interaction (incomplete) ",
      link: "https://github.com/itzzsauravp/Artist-Management-System",
    },
    {
      name: "TeamSync",
      desc: "A chatbased communication platform with task management built into it.",
      link: "https://github.com/itzzsauravp/TeamSync",
    },
  ];
  const handleNext = () => {
    setCurrIndex((prevIndex) => (prevIndex + 1) % ProjectDetails.length);
  };

  useEffect(() => {
    const autoAdvance = setInterval(handleNext, 5000);
    return () => clearInterval(autoAdvance);
  }, []);

  return (
    <div className="mt-7">
      <span className="flex py-2 text-xl lg:text-3xl gap-2 items-center font-semibold uppercase border-iOrange border-b">
        <GrProjects />
        Projects
      </span>
      <div className="w-full overflow-hidden mt-3 p-1">
        <div
          className="flex gap-6 stransition-transform duration-500"
          style={{
            width: `${ProjectDetails.length * 100}%`,
            transform: `translateX(-${
              (currIndex * 100) / ProjectDetails.length
            }%)`,
          }}
        >
          {ProjectDetails.map((project, i) => (
            <ProjectCard key={i} project={project} />
          ))}
        </div>
        <div className="flex justify-center mt-4">
          {ProjectDetails.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrIndex(index)}
              className={`h-3 w-3 rounded-full mx-2 ${
                currIndex === index ? "bg-orange-500" : "bg-gray-300"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
