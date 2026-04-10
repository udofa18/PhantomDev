/** Base site URL for canonical links and og:image (no trailing slash). */
export const SITE_URL = (
  import.meta.env.VITE_SITE_URL || 'https://phantom-dev-udofa18s-projects.vercel.app'
).replace(/\/$/, '');

export function absoluteUrl(path) {
  if (!path) return SITE_URL;
  const p = path.startsWith('/') ? path : `/${path}`;
  return `${SITE_URL}${p}`;
}
