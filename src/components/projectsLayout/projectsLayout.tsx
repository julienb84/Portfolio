// TYPES //
import type { Project } from "../../types/project";

type ProjectsLayoutProps = {
  projectsTab: Project[];
  drawerIsOpen: boolean;
  setDrawerIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  dialogIsOpen: boolean;
  setDialogIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const ProjectsLayout = ({
  projectsTab,
  drawerIsOpen,
  setDrawerIsOpen,
  dialogIsOpen,
  setDialogIsOpen,
}: ProjectsLayoutProps) => {
  return (
    <div className="px-4 flex flex-col text-app-content font-medium">
      <section>
        <p className="text-[18px]">Projets d'études</p>
        <div></div>
      </section>
    </div>
  );
};

export default ProjectsLayout;
