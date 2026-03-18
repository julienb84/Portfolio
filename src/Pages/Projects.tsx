// COMPONENTS //
import PageLayout from "../layouts/PageLayout";
import ProjectsLayout from "../components/projectsLayout/ProjectsLayout";

// FRAMEWORKS COMPONENTS & HOOKS //
import { useEffect } from "react";

// DATA //
import projectsData from "../data/projectsData.json";

// TYPE //
import type { Project } from "../types/project";

type ProjectsProps = {
  setIsHome: React.Dispatch<React.SetStateAction<boolean>>;
};

const Projects = ({ setIsHome }: ProjectsProps) => {
  const projectsTab = projectsData as Project[];

  useEffect(() => {
    document.title = "Projects | Julien Bouchez";
    setIsHome(false);
  }, []);

  return (
    <PageLayout>
      <div className="w-full mt-12 md:mt-16 lg:wrapper1">
        <ProjectsLayout projectsTab={projectsTab} />
      </div>
    </PageLayout>
  );
};

export default Projects;
