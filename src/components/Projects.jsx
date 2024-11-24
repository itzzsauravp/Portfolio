import ProjectCard from "./ProjectCard";
import { GrProjects } from "react-icons/gr";
import { useState } from "react";
import { useEffect } from "react";
import { ProjectDetails } from "../data/staticDataReactIcons";
const Projects = () => {
  const [currIndex, setCurrIndex] = useState(0);
  const handleNext = () => {
    setCurrIndex((prevIndex) => (prevIndex + 1) % ProjectDetails.length);
  };

  useEffect(() => {
    const autoAdvance = setInterval(handleNext, 5000);
    return () => clearInterval(autoAdvance);
  }, []);

  return (
    <div className="mt-5">
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
