/**
 * Shared site-level configuration.
 *
 * Values come from public environment variables at build time because this
 * project is statically exported. See `.env.example` for the full list.
 */
export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL || 'https://westlinkstechnologies.com'
).replace(/\/$/, '');

export const CONTACT_EMAIL =
  process.env.NEXT_PUBLIC_CONTACT_EMAIL || 'westlinkstechnologies@gmail.com';

export const CONTACT_PHONE =
  process.env.NEXT_PUBLIC_CONTACT_PHONE || '+233593021696';

export const CONTACT_PHONE_DISPLAY = (() => {
  const digits = CONTACT_PHONE.replace(/[^\d+]/g, '');
  if (digits.startsWith('+233') && digits.length === 13) {
    return `+233 ${digits.slice(4, 6)} ${digits.slice(6, 9)} ${digits.slice(9)}`;
  }
  return CONTACT_PHONE;
})();

export const CONTACT_ENDPOINT =
  process.env.NEXT_PUBLIC_CONTACT_ENDPOINT || '';

export const NEWSLETTER_ENDPOINT =
  process.env.NEXT_PUBLIC_NEWSLETTER_ENDPOINT || '';

export const BOOKING_URL = process.env.NEXT_PUBLIC_BOOKING_URL || '';

export const SOCIALS = {
  github: process.env.NEXT_PUBLIC_GITHUB_URL || '',
  linkedin: process.env.NEXT_PUBLIC_LINKEDIN_URL || '',
};

/** Build an absolute URL, respecting the site's trailing-slash convention. */
export function absoluteUrl(path = '/') {
  const normalized = path.startsWith('/') ? path : `/${path}`;
  const isFile = /\.[a-z0-9]+$/i.test(normalized);

  if (normalized === '/' || isFile) return `${SITE_URL}${normalized}`;
  return `${SITE_URL}${normalized.replace(/\/$/, '')}/`;
}
