// COMPONENTS //
import PageLayout from "../layouts/PageLayout";
import ContentWrapper from "../components/contentWrapper/ContentWrapper";
import HomeContent from "../components/home/HomeContent";

// FRAMEWORKS COMPONENTS & HOOKS //
import { useEffect } from "react";

type HomeProps = {
  setIsHome: React.Dispatch<React.SetStateAction<boolean>>;
};

const Home = ({ setIsHome }: HomeProps) => {
  useEffect(() => {
    document.title = "Home | Julien Bouchez";
    setIsHome(true);
  }, []);

  return (
    <>
      <PageLayout>
        <ContentWrapper>
          <HomeContent />
        </ContentWrapper>
      </PageLayout>
    </>
  );
};

export default Home;
