// COMPONENTS //
import PageLayout from "../layouts/PageLayout";
import ContentWrapper from "../components/contentWrapper/ContentWrapper";
import HomeContent from "../components/home/HomeContent";
import PageMeta from "../components/common/PageMeta";

// FRAMEWORKS COMPONENTS & HOOKS //
import { Helmet } from "react-helmet-async";

const personSchema = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Julien Bouchez",
  url: "https://www.julienbouchez.com",
  jobTitle: "Développeur Full-Stack",
  sameAs: [
    "https://github.com/julienb84",
    "https://www.linkedin.com/in/julien-bouchez-developer/",
  ],
});

// interface HomeProps {}

const Home = () => {
  return (
    <>
      <PageMeta
        title="Julien Bouchez | Développeur Full-Stack"
        description="Portfolio de Julien Bouchez, développeur full-stack spécialisé en React, Node.js et applications web modernes."
        page=""
      />
      <Helmet>
        <script type="application/ld+json">{personSchema}</script>
      </Helmet>
      <PageLayout>
        <ContentWrapper>
          <HomeContent />
        </ContentWrapper>
      </PageLayout>
    </>
  );
};

export default Home;
