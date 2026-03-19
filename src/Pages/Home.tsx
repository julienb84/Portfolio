// COMPONENTS //
import PageLayout from "../layouts/PageLayout";
import HomeContent from "../components/home/HomeContent";
import PageWrapper from "../components/pageWrapper/PageWrapper";

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
