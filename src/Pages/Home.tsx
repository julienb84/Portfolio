// COMPONENTS //
import PageLayout from "../layouts/PageLayout";
import ContentWrapper from "../components/contentWrapper/ContentWrapper";
import HomeContent from "../components/home/HomeContent";
import PageMeta from "../components/common/PageMeta";

// FRAMEWORKS COMPONENTS & HOOKS //
import { useEffect } from "react";

type HomeProps = {
  setIsHome: React.Dispatch<React.SetStateAction<boolean>>;
};

const Home = ({ setIsHome }: HomeProps) => {
  useEffect(() => {
    document.title = "Julien Bouchez | Full-Stack Developer";
    setIsHome(true);
  }, []);

  return (
    <>
      <PageMeta
        title="Julien Bouchez | Développeur Full-Stack"
        description="Portfolio de Julien Bouchez, développeur full-stack spécialisé en React, Node.js et applications web modernes."
      />
      <PageLayout>
        <ContentWrapper>
          <HomeContent />
        </ContentWrapper>
      </PageLayout>
    </>
  );
};

export default Home;
