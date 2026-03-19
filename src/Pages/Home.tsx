// COMPONENTS //
import PageLayout from "../layouts/PageLayout";
import PageWrapper from "../components/pageWrapper/pageWrapper";
import HomeContent from "../components/home/homeContent";

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
        <PageWrapper>
          <HomeContent />
        </PageWrapper>
      </PageLayout>
    </>
  );
};

export default Home;
