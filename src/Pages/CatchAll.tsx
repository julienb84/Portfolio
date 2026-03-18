// COMPONENTS //
import PageLayout from "../layouts/PageLayout";

// FRAMEWORKS COMPONENTS & HOOKS //
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

// UI //
import { TbError404 } from "react-icons/tb";
import { FaRegFaceSurprise } from "react-icons/fa6";
import Button from "../components/ui/Button";
import { IoArrowForward } from "react-icons/io5";

type CatchAllProps = {
  setIsHome: React.Dispatch<React.SetStateAction<boolean>>;
};

const CatchAll = ({ setIsHome }: CatchAllProps) => {
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "Not Found | Julien Bouchez";
    setIsHome(true);
  }, []);

  return (
    <PageLayout className="items-center gap-10">
      <div className="mt-26 md:mt-32 lg:mt-32 lg:wrapper1">
        <div className="text-app-content text-4xl md:text-6xl flex flex-col items-center font-medium">
          <h1>ERROR</h1>
          <TbError404 className="text-6xl md:text-9xl" />
        </div>
        <div className="text-app-content px-4 md:text-2xl flex flex-col items-center gap-2 md:gap-4">
          <p>La page que vous cherchez n'existe pas...</p>
          <FaRegFaceSurprise className="text-[20px] md:text-3xl" />
        </div>
        <div className="flex justify-center mt-6 md:mt-8">
          <Button
            variant="default"
            size="lg"
            className="bg-app-content text-app-background h-10"
            onClick={() => {
              navigate("/");
            }}
          >
            Back Home
            <IoArrowForward />
          </Button>
        </div>
      </div>
    </PageLayout>
  );
};
export default CatchAll;
