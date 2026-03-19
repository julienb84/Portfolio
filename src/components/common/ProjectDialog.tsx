// UI //
import Dialog from "../ui/dialog/dialogComponents/Dialog";
import DialogTrigger from "../ui/dialog/dialogComponents/DialogTrigger";
import DialogContent from "../ui/dialog/dialogLayout/DialogContent";
import DialogHeader from "../ui/dialog/dialogLayout/DialogHeader";
import DialogDescription from "../ui/dialog/dialogContent/DialogDescription";
import DialogTitle from "../ui/dialog/dialogContent/DialogTitle";
import DialogFooter from "../ui/dialog/dialogLayout/DialogFooter";
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

interface ProjectDialogProps {
  project: Project;
  triggerClassName?: string;
}

const ProjectDialog = ({ project, triggerClassName }: ProjectDialogProps) => {
  return (
    <div>
      <Dialog>
        <DialogTrigger
          variant="default"
          size="lg"
          className={twMerge(
            `bg-app-content text-app-background w-60 md:w-52 font-semibold hidden ${triggerClassName}`,
          )}
        >
          Aperçu
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle></DialogTitle>
            <DialogDescription></DialogDescription>
          </DialogHeader>
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
          <DialogFooter></DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default ProjectDialog;
