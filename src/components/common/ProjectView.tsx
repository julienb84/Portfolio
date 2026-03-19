// UI //
import Drawer from "../ui/drawer/drawerComponents/Drawer";
import DrawerClose from "../ui/drawer/drawerComponents/DrawerClose";
import DrawerContent from "../ui/drawer/drawerLayout/DrawerContent";
import DrawerDescription from "../ui/drawer/drawerContent/DrawerDescription";
import DrawerFooter from "../ui/drawer/drawerLayout/DrawerFooter";
import DrawerHeader from "../ui/drawer/drawerLayout/DrawerHeader";
import DrawerTitle from "../ui/drawer/drawerContent/DrawerTitle";
import DrawerTrigger from "../ui/drawer/drawerComponents/DrawerTrigger";
import {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardAction,
  CardDescription,
  CardContent,
} from "../ui/Card";
import { Badge } from "../ui/Badge";
import { IoArrowForward } from "react-icons/io5";

// FRAMEWORKS COMPONENTS & HOOKS //
import { twMerge } from "tailwind-merge";

// TYPES //
import type { Project } from "../../types/project";

interface ProjectViewProps {
  project: Project;
  triggerClassName?: string;
}

const ProjectView = ({ project, triggerClassName }: ProjectViewProps) => {
  return (
    <div>
      <Drawer>
        <DrawerTrigger
          variant="default"
          size="lg"
          className={twMerge(
            `bg-app-content text-app-background w-60 md:w-52 font-semibold ${triggerClassName}`,
          )}
        >
          Aperçu
        </DrawerTrigger>
        <DrawerContent className="data-[vaul-drawer-direction=bottom]:border-transparent">
          <DrawerHeader className="pb-0">
            <DrawerTitle></DrawerTitle>
            <DrawerDescription></DrawerDescription>
          </DrawerHeader>
          <Card className="relative mx-auto w-full max-w-sm pt-0 rounded-sm">
            <div className="absolute inset-0 z-30 aspect-video bg-black/8 dark:bg-black/15" />
            <img
              src={project.previewSecureURL}
              alt="Project cover"
              className="relative z-20 aspect-video w-full object-cover object-top"
            />
            <CardHeader>
              <CardAction>
                <Badge
                  variant="outline"
                  className="border-app-content font-semibold"
                >
                  {project.projectType}
                </Badge>
              </CardAction>
              <CardTitle className="font-semibold">{project.title}</CardTitle>
              <CardDescription>{project.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="mb-2 font-semibold">Techno :</p>
              <section className="flex gap-2">
                <Badge variant="default" className="h-6">
                  {project.framework}
                </Badge>
                <Badge variant="default" className="h-6">
                  {project.router}
                </Badge>
                <Badge variant="default" className="h-6">
                  {project.cssTools}
                </Badge>
              </section>
            </CardContent>
            <CardFooter className="justify-center gap-8">
              {project.webURL && (
                <a
                  href={project.webURL}
                  target="_blank"
                  className="w-36 border-2 border-border bg-app-background h-9 rounded-sm text-app-content font-medium inline-flex justify-center items-center gap-2 hover:cursor-default hover:bg-muted"
                >
                  Site Web
                  <IoArrowForward />
                </a>
              )}
              <a
                href={project.githubURL}
                target="_blank"
                className="w-36 border-2 border-border bg-app-background h-9 rounded-sm text-app-content font-medium inline-flex justify-center items-center gap-2 hover:cursor-default hover:bg-muted"
              >
                Repo GitHub
                <IoArrowForward />
              </a>
            </CardFooter>
          </Card>
          <DrawerFooter className="pb-10 xs:pb-5">
            <DrawerClose className="w-2xs xs:w-90">Close</DrawerClose>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </div>
  );
};

export default ProjectView;
