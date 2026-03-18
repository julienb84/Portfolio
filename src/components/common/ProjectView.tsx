// UI //
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
import Button from "../ui/Button";

// TYPES //
import type { Project } from "../../types/project";

interface ProjectViewProps {
  projectsTab: Project[];
}

const ProjectView = ({ projectsTab }: ProjectViewProps) => {
  return (
    <div>
      {projectsTab.map((project) => {
        return (
          <div key={project.id}>
            <Card className="relative mx-auto w-full max-w-sm pt-0 rounded-sm">
              <div className="absolute inset-0 z-30 aspect-video bg-black/8 dark:bg-black/15" />
              <img
                src={project.coverSecureURL}
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
              <CardFooter className="flex-col justify-center gap-3">
                {project.webURL && (
                  <Button
                    variant="outline2"
                    size="lg"
                    className="w-full text-app-content"
                  >
                    <a href={project.webURL} target="_blank">
                      Site Web
                    </a>
                  </Button>
                )}
                <Button
                  variant="outline2"
                  size="lg"
                  className="w-full text-app-content"
                >
                  <a href={project.githubURL} target="_blank">
                    Repo GitHub
                  </a>
                </Button>
              </CardFooter>
            </Card>
          </div>
        );
      })}
    </div>
  );
};

export default ProjectView;
