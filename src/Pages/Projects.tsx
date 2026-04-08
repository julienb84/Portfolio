// COMPONENTS //
import PageLayout from "../layouts/PageLayout";
import ContentWrapper from "../components/contentWrapper/ContentWrapper";
import ProjectsLayoutV2 from "../components/projectsLayout/ProjectsLayoutV2";
import PageMeta from "../components/common/PageMeta";

// FRAMEWORKS COMPONENTS & HOOKS //

// DATA //
import projectsData from "../data/projectsData.json";

// TYPE //
import type { Project } from "../types/project";

// interface ProjectsProps {}

const Projects = () => {
  const projectsTab = projectsData as Project[];

  return (
    <>
      <PageMeta
        title="Projets | Julien Bouchez"
        description="Découvrez les projets de Julien Bouchez, développeur Full-Stack : applications React, Node.js et solutions web modernes, performantes, structurées et avec une UX soignée."
        page="projects"
      />
      <PageLayout>
        <ContentWrapper className="w-full">
          <ProjectsLayoutV2 projectsTab={projectsTab} />
        </ContentWrapper>
      </PageLayout>
    </>
  );
};

export default Projects;
