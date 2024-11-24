import ProjectDetailContext from "../context/ProjectDetailProvider";
import { useContext } from "react";

const useProjectDetails = () => {
  const projectContext = useContext(ProjectDetailContext);
  return projectContext;
};

export default useProjectDetails;
