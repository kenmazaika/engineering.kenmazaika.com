// Canonical-host redirects for the blog. Everything except the canonical host
// is a permanent redirect to https://notesfromtheloop.com, preserving path and
// query. The static Astro build is served from the ASSETS binding.
export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    const host = url.hostname.toLowerCase();
    const canonicalHost = 'notesfromtheloop.com';

    const redirectHosts = new Set([
      'www.notesfromtheloop.com',
      'engineering.kenmazaika.com',
      'www.engineering.kenmazaika.com',
    ]);

    if (redirectHosts.has(host)) {
      const target = `https://${canonicalHost}${url.pathname}${url.search}`;
      return Response.redirect(target, 301);
    }

    return env.ASSETS.fetch(request);
  },
};
