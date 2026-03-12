// COMPONENTS //
import PageLayout from "../layouts/PageLayout";
import ResumeView from "../components/common/ResumeView";
import Card from "../components/ui/Card";
import Button from "../components/ui/Button";

// REACT HOOKS & COMPONENTS //
import { useNavigate } from "react-router-dom";

// DATA //
import screenA from "../assets/screen-vs_02.svg";
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

const Home = () => {
  const navigate = useNavigate();

  return (
    <>
      <PageLayout>
        <div className="mt-18 flex flex-col gap-12">
          <div className="px-4 flex flex-col gap-6">
            <section>
              <h1 className="text-app-content text-[20px] font-semibold">
                Développeur Web et Mobile
              </h1>
              <p className="text-app-content text-[18px] font-medium">
                Ingénieur du son expérimenté, j’ai choisi d’orienter ma carrière
                vers le secteur du numérique. Bienvenue sur mon site.
              </p>
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
              className="aspect-9/16 object-cover object-[18%] rounded-sm brightness-80 sepia-10"
            />
          </div>
        </div>
        <div className="mt-12 mb-4 flex flex-col gap-5">
          <div className="px-4 text-app-content font-medium">
            <p>
              Développeur Full-Stack, voici les principales technologies que
              j'utilise
            </p>
          </div>
          <section className="px-4 flex flex-col gap-6">
            <div className="flex flex-col gap-4">
              <h2 className="text-app-content/50 font-semibold">Front-end</h2>
              <div className="flex justify-center gap-2">
                <Card className="gap-1 text-[22px] text-white font-extrabold bg-logo-background">
                  <FaReact className="text-3xl" /> React
                </Card>
                <Card className="bg-logo-background">
                  <img src={routerLogo} className="w-25" />
                </Card>
                <Card className="gap-1 text-[22px] text-white font-extrabold bg-logo-background">
                  <SiVite className="text-3xl" /> Vite
                </Card>
              </div>
              <div className="flex justify-center gap-2">
                <Card className="gap-1 text-[16px] text-white font-inter font-medium bg-logo-background">
                  <RiTailwindCssFill className="text-[17px]" /> tailwindcss
                </Card>
                <Card className="gap-2 text-[19px] text-white font-montserrat font-bold bg-logo-background">
                  <span>A</span>
                  <span>X</span>
                  <SiAxios className="text-[14px]" />
                  <span>O</span>
                  <span>S</span>
                </Card>
                <Card className="bg-logo-background">
                  <img src={stripeLogo} className="w-21" />
                </Card>
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <h2 className="text-app-content/50 font-semibold">Back-end</h2>
              <div className="flex justify-center gap-2">
                <Card className="bg-logo-background">
                  <img src={nodeLogo} className="w-18" />
                </Card>
                <Card className="gap-1 text-[14px] text-white font-medium bg-logo-background">
                  <SiExpress className="text-3xl" /> express.js
                </Card>
                <Card className="bg-logo-background">
                  <img src={mongoLogo} className="w-26" />
                </Card>
              </div>
            </div>
          </section>
        </div>
        <div className="px-4 mt-4 mb-18">
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
