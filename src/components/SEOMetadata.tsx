import { Helmet } from "react-helmet-async";

interface SEOMetadataProps {
  title: string;
  description: string;
  canonicalUrl: string;
  ogImage?: string;
  type?: string;
}

const SEOMetadata = ({
  title,
  description,
  canonicalUrl,
  ogImage = "/og-image.png",
  type = "website"
}: SEOMetadataProps) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonicalUrl} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={canonicalUrl} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={ogImage} />
    </Helmet>
  );
};

export default SEOMetadata;