// COMPONENTS //
import PageLayout from "../layouts/PageLayout";

// FRAMEWORKS COMPONENTS & HOOKS //
import { useEffect } from "react";

type ProjectsProps = {
  setIsHome: React.Dispatch<React.SetStateAction<boolean>>;
};

const Projects = ({ setIsHome }: ProjectsProps) => {
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
