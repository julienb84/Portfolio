import { HelmetProvider, Helmet } from "react-helmet-async";

const BASE_URL = "https://www.julienbouchez.com";
const DEFAULT_IMAGE =
  "https://res.cloudinary.com/dldc2n70y/image/upload/v1774543248/Screen-portfolio-home_ardv9u.png";

const PageMeta = ({
  title,
  description,
  page,
  image = DEFAULT_IMAGE,
}: {
  title: string;
  description: string;
  page: string;
  image?: string;
}) => {
  const url = `${BASE_URL}/${page}`;

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />

      {/* Open Graph (réseaux sociaux) */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content="Julien Bouchez" />
      <meta property="og:locale" content="fr_FR" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* SEO technique */}
      <meta name="robots" content="index, follow" />

      {/* Canonical */}
      <link rel="canonical" href={url} />
    </Helmet>
  );
};

export const AppWrapper = ({ children }: { children: React.ReactNode }) => (
  <HelmetProvider>{children}</HelmetProvider>
);

export default PageMeta;
