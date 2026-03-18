// COMPONENTS //
import PageLayout from "../layouts/PageLayout";
import ResumeView from "../components/common/ResumeView";
import { CardBasic } from "../components/ui/Card";
import Button from "../components/ui/Button";
import ResumeDialog from "../components/common/ResumeDialog";

// FRAMEWORKS COMPONENTS & HOOKS //
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

// DATA //
import screenA from "../assets/Screen-VSC.svg";
import routerLogo from "../assets/brand/rr_lockup_dark.svg";
import stripeLogo from "../assets/brand/Stripe wordmark - White.svg";
import nodeLogo from "../assets/brand/nodejsStackedWhite.svg";
import mongoLogo from "../assets/brand/MongoDB_White.svg";

// UI //
import { FaReact } from "react-icons/fa";
import { SiVite } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiAxios } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { IoArrowForward } from "react-icons/io5";

type HomeProps = {
  setIsHome: React.Dispatch<React.SetStateAction<boolean>>;
};

const Home = ({ setIsHome }: HomeProps) => {
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "Home | Julien Bouchez";
    setIsHome(true);
  }, []);

  return (
    <>
      <PageLayout>
        <div className="mt-12 md:mt-16 full lg:wrapper1">
          <div className="flex flex-col gap-14">
            <div className="px-4 flex flex-col gap-7 sm:px-8 md:px-10 lg:px-4">
              <section className="text-app-content">
                <h1 className="text-[22px] font-semibold mb-2 md:text-[26px]">
                  Développeur Web et Mobile
                </h1>
                <p className="text-[18px] font-medium sm:text-justify md:text-[22px]">
                  Ingénieur du son expérimenté, j’ai choisi d’orienter ma
                  carrière vers le secteur du numérique.
                </p>
                <p className="text-[18px] font-medium md:text-[22px]">
                  Bienvenue sur mon site.
                </p>
              </section>
              <section>
                <ResumeView
                  triggerVariant="default"
                  triggerClassName="bg-app-content text-app-background h-10 md:hidden"
                />
                <ResumeDialog
                  triggerVariant="default"
                  triggerClassName="bg-app-content text-app-background h-10 hidden md:inline-flex"
                />
              </section>
            </div>
            <div className="px-4 sm:px-14 md:flex md:justify-center">
              <img
                src={screenA}
                className="aspect-9/16 object-cover object-[8%] rounded-sm brightness-80 sepia-10 md:aspect-3/2"
              />
            </div>
          </div>
          <div className="mt-14 mb-4 flex flex-col gap-5 sm:gap-8">
            <div className="px-4 text-app-content font-medium sm:px-8">
              <p className="text-[18px] vs:text-center md:text-[20px]">
                Développeur Full-Stack, voici les principales technologies que
                j'utilise
              </p>
            </div>
            <section className="px-4 flex flex-col gap-6">
              <div className="flex flex-col gap-4 vs:items-center">
                <h2 className="text-app-content/50 font-semibold md:text-[20px]">
                  Front-end
                </h2>
                <div className="flex justify-between xs:justify-center xs:gap-4 vs:gap-12">
                  <CardBasic className="gap-1 text-[18px] text-white font-extrabold bg-logo-background">
                    <FaReact className="text-l" /> React
                  </CardBasic>
                  <CardBasic className="bg-logo-background">
                    <img src={routerLogo} className="w-20" />
                  </CardBasic>
                  <CardBasic className="gap-1 text-[18px] text-white font-extrabold bg-logo-background">
                    <SiVite className="text-[16px]" /> Vite
                  </CardBasic>
                </div>
                <div className="flex justify-between xs:justify-center xs:gap-4 vs:gap-12">
                  <CardBasic className="gap-1 text-[12px] text-white font-inter font-semibold bg-logo-background">
                    <RiTailwindCssFill className="text-[14px]" /> tailwindcss
                  </CardBasic>
                  <CardBasic className="gap-1.5 text-[14px] text-white font-montserrat font-bold bg-logo-background">
                    <span>A</span>
                    <span>X</span>
                    <SiAxios className="text-[10px]" />
                    <span>O</span>
                    <span>S</span>
                  </CardBasic>
                  <CardBasic className="bg-logo-background">
                    <img src={stripeLogo} className="w-14" />
                  </CardBasic>
                </div>
              </div>
              <div className="flex flex-col gap-4 vs:items-center">
                <h2 className="text-app-content/50 font-semibold md:text-[20px]">
                  Back-end
                </h2>
                <div className="flex justify-between xs:justify-center xs:gap-4 vs:gap-12">
                  <CardBasic className="bg-logo-background">
                    <img src={nodeLogo} className="w-14" />
                  </CardBasic>
                  <CardBasic className="gap-1 text-[12px] text-white font-medium bg-logo-background">
                    <SiExpress className="text-lg" /> express.js
                  </CardBasic>
                  <CardBasic className="bg-logo-background">
                    <img src={mongoLogo} className="w-18" />
                  </CardBasic>
                </div>
              </div>
            </section>
          </div>
          <div className="px-4 mt-6 flex vs:justify-center sm:mt-8">
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
        </div>
      </PageLayout>
    </>
  );
};

export default Home;
