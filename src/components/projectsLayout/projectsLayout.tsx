// COMPONENTS //
import ProjectView from "../common/ProjectView";
import ProjectDialog from "../common/ProjectDialog";

// TYPES //
import type { Project } from "../../types/project";
import { Card, CardFooter } from "../ui/Card";

type ProjectsLayoutProps = {
  projectsTab: Project[];
};

const ProjectsLayout = ({ projectsTab }: ProjectsLayoutProps) => {
  return (
    <div className="px-4 flex flex-col text-app-content font-medium sm:px-8 md:px-10 lg:px-4">
      <section className="flex flex-col gap-8">
        <p className="text-[22px] font-semibold mb-2 md:text-[26px]">
          Projets d'études
        </p>
        <div className="flex flex-col vs:px-4 sm:px-6 md:inline-flex md:px-0">
          {projectsTab.map((project) => {
            return (
              <div
                key={project.id}
                className="rounded-sm shadow-lg shadow-app-content md:max-w-80"
              >
                <Card className="relative mx-auto w-full pt-0 pb-0 rounded-sm *:[img:last-child]:rounded-b-none">
                  <div className="absolute inset-0 z-30 aspect-15/9 bg-black/8 dark:bg-black/50 backdrop-blur-sm" />
                  <img
                    src={project.coverSecureURL}
                    alt="Project cover"
                    className="relative z-20 aspect-video w-full object-cover object-top"
                  />
                  <div className="absolute top-22 z-50 bg-app-background/80 rounded-sm w-full flex justify-center text-4xl italic font-semibold tracking-widest"></div>
                  <CardFooter className="flex-col gap-2 border-t-0 bg-app-background p-3 md:gap-1">
                    <span className="text-2xl italic font-semibold tracking-widest">
                      {project.title}
                    </span>
                    <ProjectView
                      project={project}
                      triggerClassName="md:hidden"
                    />
                    <ProjectDialog
                      project={project}
                      triggerClassName="md:inline-flex"
                    />
                  </CardFooter>
                </Card>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default ProjectsLayout;
