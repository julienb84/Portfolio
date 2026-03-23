import { HelmetProvider, Helmet } from "react-helmet-async";

const PageMeta = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => (
  <Helmet>
    <title>{title}</title>
    <meta name="description" content={description} />

    {/* Open Graph (réseaux sociaux) */}
    <meta property="og:title" content={title} />
    <meta property="og:description" content={description} />
    <meta property="og:type" content="website" />

    {/* SEO technique */}
    <meta name="robots" content="index, follow" />

    {/* Canonical */}
    <link rel="canonical" href="https://www.julienbouchez.com/" />
    <link rel="canonical" href="https://www.julienbouchez.com/projects" />
  </Helmet>
);

export const AppWrapper = ({ children }: { children: React.ReactNode }) => (
  <HelmetProvider>{children}</HelmetProvider>
);

export default PageMeta;
