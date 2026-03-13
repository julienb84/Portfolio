// COMPONENTS //
import PageLayout from "../layouts/PageLayout";
import ResumeView from "../components/common/ResumeView";
import Card from "../components/ui/Card";
import Button from "../components/ui/Button";

// FRAMEWORKS COMPONENTS & HOOKS //
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

// DATA //
import screenA from "../assets/Screen-VSC.svg";
import routerLogo from "../assets/rr_lockup_dark.svg";
import stripeLogo from "../assets/Stripe wordmark - White.svg";
import nodeLogo from "../assets/nodejsStackedWhite.svg";
import mongoLogo from "../assets/MongoDB_White.svg";

// UI //
import { FaReact } from "react-icons/fa";
import { SiVite } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiAxios } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { IoArrowForward } from "react-icons/io5";

interface HomeProps {
  setIsHome: React.Dispatch<React.SetStateAction<boolean>>;
}

const Home: React.FC<HomeProps> = ({ setIsHome }) => {
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "Home | Julien Bouchez";
    setIsHome(true);
  }, []);

  return (
    <>
      <PageLayout>
        <div className="mt-18 flex flex-col gap-14">
          <div className="px-4 flex flex-col gap-7">
            <section className="text-app-content">
              <h1 className="text-[22px] font-semibold mb-2">
                Développeur Web et Mobile
              </h1>
              <p className="text-[18px] font-medium">
                Ingénieur du son expérimenté, j’ai choisi d’orienter ma carrière
                vers le secteur du numérique.
              </p>
              <p className="text-[18px] font-medium">Bienvenue sur mon site.</p>
            </section>
            <section>
              <ResumeView
                triggerVariant="default"
                triggerClassName="bg-app-content text-app-background h-10"
              />
            </section>
          </div>
          <div className="px-4">
            <img
              src={screenA}
              className="aspect-9/16 object-cover object-[8%] rounded-sm brightness-80 sepia-10"
            />
          </div>
        </div>
        <div className="mt-14 mb-4 flex flex-col gap-5">
          <div className="px-4 text-app-content font-medium">
            <p className="text-[18px]">
              Développeur Full-Stack, voici les principales technologies que
              j'utilise
            </p>
          </div>
          <section className="px-4 flex flex-col gap-6">
            <div className="flex flex-col gap-4">
              <h2 className="text-app-content/50 font-semibold">Front-end</h2>
              <div className="flex justify-between">
                <Card className="gap-1 text-[18px] text-white font-extrabold bg-logo-background">
                  <FaReact className="text-l" /> React
                </Card>
                <Card className="bg-logo-background">
                  <img src={routerLogo} className="w-20" />
                </Card>
                <Card className="gap-1 text-[18px] text-white font-extrabold bg-logo-background">
                  <SiVite className="text-[16px]" /> Vite
                </Card>
              </div>
              <div className="flex justify-between">
                <Card className="gap-1 text-[12px] text-white font-inter font-semibold bg-logo-background">
                  <RiTailwindCssFill className="text-[14px]" /> tailwindcss
                </Card>
                <Card className="gap-1.5 text-[14px] text-white font-montserrat font-bold bg-logo-background">
                  <span>A</span>
                  <span>X</span>
                  <SiAxios className="text-[10px]" />
                  <span>O</span>
                  <span>S</span>
                </Card>
                <Card className="bg-logo-background">
                  <img src={stripeLogo} className="w-14" />
                </Card>
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <h2 className="text-app-content/50 font-semibold">Back-end</h2>
              <div className="flex justify-between">
                <Card className="bg-logo-background">
                  <img src={nodeLogo} className="w-14" />
                </Card>
                <Card className="gap-1 text-[12px] text-white font-medium bg-logo-background">
                  <SiExpress className="text-lg" /> express.js
                </Card>
                <Card className="bg-logo-background">
                  <img src={mongoLogo} className="w-18" />
                </Card>
              </div>
            </div>
          </section>
        </div>
        <div className="px-4 mt-6 mb-18">
          <Button
            variant="default"
            size="lg"
            className="bg-app-content text-app-background h-10"
            onClick={() => {
              navigate("/projects");
            }}
          >
            <span>Mes projets</span>
            <IoArrowForward />
          </Button>
        </div>
      </PageLayout>
    </>
  );
};

export default Home;
