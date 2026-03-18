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

// TYPES //
import type { Project } from "../../types/project";

interface ProjectViewProps {
  projectsTab: Project[];
}

const ProjectView = ({ projectsTab }: ProjectViewProps) => {
  return (
    <div>
      {projectsTab.map((project) => {
        return <></>;
      })}
    </div>
  );
};

export default ProjectView;
