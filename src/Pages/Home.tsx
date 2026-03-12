// COMPONENTS //
import PageLayout from "../layouts/PageLayout";
import ResumeView from "../components/common/ResumeView";
import screenA from "../assets/screen-vs_01_9-16.svg";

const Home = () => {
  return (
    <>
      <PageLayout>
        <div className="flex flex-col gap-5">
          <div className="mt-18 px-4 flex flex-col gap-6">
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
            <img src={screenA} className="w-full aspect-9/16 object-cover" />
          </div>
        </div>
      </PageLayout>
    </>
  );
};

export default Home;
