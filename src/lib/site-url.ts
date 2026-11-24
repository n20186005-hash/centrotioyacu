// Cloudflare builds may omit CURRENT_SITE_DOMAIN when prerendering static routes.
const domain = process.env.CURRENT_SITE_DOMAIN?.trim();
export const baseUrl = domain
  ? new URL(/^https?:\/\//i.test(domain) ? domain : `https://${domain}`).origin
  : 'https://www.centrotioyacu.com';
