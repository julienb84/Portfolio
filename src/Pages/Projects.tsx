// COMPONENTS //
import PageLayout from "../layouts/PageLayout";
import ProjectsLayout from "../components/projectsLayout/projectsLayout";

// FRAMEWORKS COMPONENTS & HOOKS //
import { useEffect, useState } from "react";

// DATA //
import projectsData from "../data/projectsData.json";

// TYPE //
import type { Project } from "../types/project";

type ProjectsProps = {
  setIsHome: React.Dispatch<React.SetStateAction<boolean>>;
};

const Projects = ({ setIsHome }: ProjectsProps) => {
  const [drawerIsOpen, setDrawerIsOpen] = useState(false);
  const [dialogIsOpen, setDialogIsOpen] = useState(false);

  const projectsTab = projectsData as Project[];

  useEffect(() => {
    document.title = "Projects | Julien Bouchez";
    setIsHome(false);
  }, []);

  return (
    <PageLayout>
      <ProjectsLayout
        projectsTab={projectsTab}
        drawerIsOpen={drawerIsOpen}
        setDrawerIsOpen={setDrawerIsOpen}
        dialogIsOpen={dialogIsOpen}
        setDialogIsOpen={setDialogIsOpen}
      />
    </PageLayout>
  );
};

export default Projects;
