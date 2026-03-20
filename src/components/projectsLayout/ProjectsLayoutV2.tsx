// COMPONENTS //
import ProjectView from "../common/ProjectView";
import ProjectDialog from "../common/ProjectDialog";

// UI //
import Button from "../ui/Button";

// DATA //
import logo from "../../assets/logo-b.svg";

// TYPES //
import type { Project } from "../../types/project";
import { Card, CardFooter } from "../ui/Card";

type ProjectsLayoutV2Props = {
  projectsTab: Project[];
};

const ProjectsLayoutV2 = ({ projectsTab }: ProjectsLayoutV2Props) => {
  return (
    <div className="px-4 flex flex-col gap-16 text-app-content font-medium xs:gap-18 sm:gap-20 sm:px-8 md:px-10 lg:px-4">
      <section className="flex flex-col gap-8">
        <p className="text-[22px] font-semibold mb-2 md:text-[26px]">
          Projets de formation
        </p>
        <div className="flex flex-col vs:px-4 sm:px-6 md:inline-flex md:px-3">
          {projectsTab.map((project) => {
            return (
              <div
                key={project.id}
                className="rounded-sm shadow-lg shadow-app-content/40 md:max-w-80"
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
                      triggerClassName="md:inline-flex md:hover:bg-app-content/80"
                    />
                  </CardFooter>
                </Card>
              </div>
            );
          })}
        </div>
      </section>
      <section className="flex flex-col gap-8">
        <p className="text-[22px] font-semibold mb-2 md:text-[26px]">
          Projets personnels
        </p>
        <div className="flex flex-col vs:px-4 sm:px-6 md:inline-flex md:px-3">
          <div className="rounded-sm shadow-lg shadow-app-content/40 md:max-w-80">
            <Card className="relative mx-auto w-full pt-0 pb-0 rounded-sm *:[img:last-child]:rounded-b-none">
              <div className="absolute inset-0 z-30 aspect-15/9 bg-black/8 dark:bg-black/50 backdrop-blur-sm" />
              <img
                src={logo}
                alt="Project cover"
                className={
                  logo
                    ? "relative z-20 aspect-video w-full object-fit"
                    : "relative z-20 aspect-video w-full object-cover object-top"
                }
              />
              <div className="absolute top-22 z-50 bg-app-background/80 rounded-sm w-full flex justify-center text-4xl italic font-semibold tracking-widest"></div>
              <CardFooter className="flex-col gap-2 border-t-0 bg-app-background p-3 md:gap-1">
                <span className="text-2xl italic font-semibold tracking-widest">
                  Coming soon...
                </span>
                <Button
                  variant="secondary"
                  size="lg"
                  className="bg-app-content text-app-background w-60 md:w-52 font-semibold"
                  disabled
                >
                  Aperçu
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProjectsLayoutV2;
