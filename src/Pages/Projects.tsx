// COMPONENTS //
import PageLayout from "../layouts/PageLayout";
import PageWrapperV2 from "../components/pageWrapper/PageWrapperV2";
import ProjectsLayoutV2 from "../components/projectsLayout/ProjectsLayoutV2";

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
      <PageWrapperV2 className="w-full">
        <ProjectsLayoutV2 projectsTab={projectsTab} />
      </PageWrapperV2>
    </PageLayout>
  );
};

export default Projects;
