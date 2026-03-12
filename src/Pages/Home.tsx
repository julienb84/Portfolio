// COMPONENTS //
import PageLayout from "../layouts/PageLayout";
import ResumeView from "../components/common/ResumeView";
import Card from "../components/ui/Card";

// DATA //
import screenA from "../assets/screen-vs_02.svg";
import routerLogo from "../assets/rr_lockup_dark.svg";

// UI //
import { FaReact } from "react-icons/fa";

const Home = () => {
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
        <div className="mt-12 mb-18 flex flex-col gap-4">
          <div className="px-4 text-app-content font-medium">
            <p>
              Développeur Full-Stack, voici les principales technologies que
              j'utilise
            </p>
          </div>
          <section className="px-4 flex flex-col">
            <div className="flex flex-col gap-4">
              <h2 className="text-app-content/50 font-semibold">Front-end</h2>
              <div className="flex gap-1.5">
                <Card className="flex gap-2 text-[18px] text-white font-extrabold bg-logo-background">
                  <FaReact className="text-3xl" /> React
                </Card>
                <Card className="bg-logo-background">
                  <img src={routerLogo} className="w-25" />
                </Card>
              </div>
            </div>
          </section>
        </div>
      </PageLayout>
    </>
  );
};

export default Home;
