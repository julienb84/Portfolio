// COMPONENTS //
import PageLayout from "../layouts/PageLayout";

const Home = () => {
  return (
    <>
      <PageLayout>
        <div className="mt-18 px-4">
          <section>
            <h1 className="text-app-content text-[20px] font-medium">
              Développeur Web et Mobile
            </h1>
            <p className="text-app-content text-[18px] font-medium">
              Ingénieur du son expérimenté, j’ai choisi d’orienter ma carrière
              vers le secteur de l’informatique. Bienvenue sur mon site.
            </p>
          </section>
        </div>
      </PageLayout>
    </>
  );
};

export default Home;
