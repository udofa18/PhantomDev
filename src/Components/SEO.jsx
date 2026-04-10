import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';
import { absoluteUrl } from '../config/site';

/**
 * @param {Object} props
 * @param {string} props.title - Page title (browser tab); site name appended if omitSiteName is false
 * @param {string} [props.description]
 * @param {string} [props.keywords] - comma-separated
 * @param {string} [props.canonicalPath] - path only; defaults to current route
 * @param {string} [props.ogImage] - path starting with / or absolute URL
 * @param {string} [props.ogType] - default website
 * @param {boolean} [props.omitSiteName] - if true, title is used as full document title
 * @param {string} [props.twitterSite] - e.g. @handle
 */
function SEO({
  title,
  description,
  keywords,
  canonicalPath,
  ogImage,
  ogType = 'website',
  omitSiteName = false,
  twitterSite,
  children,
}) {
  const { pathname } = useLocation();
  const siteName = 'Phantom Dev';
  const fullTitle = omitSiteName ? title : `${title} | ${siteName}`;
  const canonical = absoluteUrl(canonicalPath ?? pathname);
  const imageUrl = ogImage
    ? ogImage.startsWith('http')
      ? ogImage
      : absoluteUrl(ogImage)
    : absoluteUrl('/images/dan.png');

  return (
    <Helmet>
      <html lang="en" />
      <title>{fullTitle}</title>
      {description && <meta name="description" content={description} />}
      {keywords && <meta name="keywords" content={keywords} />}
      <link rel="canonical" href={canonical} />

      <meta property="og:type" content={ogType} />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:title" content={fullTitle} />
      {description && <meta property="og:description" content={description} />}
      <meta property="og:image" content={imageUrl} />
      <meta property="og:url" content={canonical} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      {description && <meta name="twitter:description" content={description} />}
      <meta name="twitter:image" content={imageUrl} />
      {twitterSite && <meta name="twitter:site" content={twitterSite} />}

      {children}
    </Helmet>
  );
}

export default SEO;
