import { useState } from "react";
import { createContext } from "react";
const ProjectDetailContext = createContext({});
const ProjectDetailProvider = ({ children }) => {
  const [projectDetails, setProjectDetails] = useState({});
  return (
    <ProjectDetailContext.Provider
      value={{ projectDetails, setProjectDetails }}
    >
      {children}
    </ProjectDetailContext.Provider>
  );
};

export default ProjectDetailContext;
export { ProjectDetailProvider };
