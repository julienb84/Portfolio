// COMPONENTS //
import PageLayout from "../layouts/PageLayout";

// FRAMEWORKS COMPONENTS & HOOKS //
import { useEffect } from "react";

interface ProjectsProps {
  setIsHome: React.Dispatch<React.SetStateAction<boolean>>;
}

const Projects: React.FC<ProjectsProps> = ({ setIsHome }) => {
  useEffect(() => {
    document.title = "Projects | Julien Bouchez";
    setIsHome(false);
  }, []);

  return (
    <PageLayout>
      <div>
        <h1 className="text-app-content">projects</h1>
      </div>
    </PageLayout>
  );
};

export default Projects;
