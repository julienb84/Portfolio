// COMPONENTS //
import PageLayout from "../layouts/PageLayout";
import PageWrapper from "../components/pageWrapper/PageWrapper";
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
      <PageWrapper className="w-full">
        <ProjectsLayout projectsTab={projectsTab} />
      </PageWrapper>
    </PageLayout>
  );
};

export default Projects;
