// COMPONENTS //
import PageLayout from "../layouts/PageLayout";
import HomeContent from "../components/home/HomeContent";
import PageWrapperV2 from "../components/pageWrapper/PageWrapperV2";

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
        <PageWrapperV2>
          <HomeContent />
        </PageWrapperV2>
      </PageLayout>
    </>
  );
};

export default Home;
