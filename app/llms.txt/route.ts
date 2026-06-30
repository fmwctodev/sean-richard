import { SITE } from '@/content/nav';
import { VENTURES } from '@/content/ventures';
import { FRACTIONAL_OFFERINGS } from '@/content/fractional';
import { SELECTED_PRODUCTS } from '@/content/products';
import { ARTICLES } from '@/content/articles';

/**
 * /llms.txt — emerging standard for surfacing a curated, plain-text summary
 * to LLM ingestion pipelines. Format: https://llmstxt.org/
 *
 * Served via a Next.js Route Handler so the content stays in sync with the
 * site's actual content data files. Hits the /llms.txt URL directly.
 */
export function GET() {
  const ventureLines = VENTURES.map((v) => {
    const url = v.url ? ` — ${v.url}` : '';
    return `- ${v.name}: ${v.shortPitch}${url}`;
  }).join('\n');

  const productLines = SELECTED_PRODUCTS.map(
    (p) => `- ${p.name}: ${p.tagline}`,
  ).join('\n');

  const articleLines = ARTICLES.map(
    (a) => `- ${a.title} — ${SITE.url}/articles/${a.slug}`,
  ).join('\n');

  const fractionalLines = FRACTIONAL_OFFERINGS.map(
    (o) => `- ${o.title}: ${o.headline}`,
  ).join('\n');

  const body = `# Sean Richard

> American entrepreneur, systems architect, software operator, and fractional executive based in Palm Coast, Florida. Founder and operator of Sitehues Media Inc, Autom8ion Lab, and BuilderLync Inc. Builds AI-driven automation, business infrastructure, and scalable operating systems for contractors and service-based companies.

## About

Sean Richard is the founder and operator of four entities: Sitehues Media Inc (digital infrastructure and marketing systems), Autom8ion Lab (AI automation and voice agents), BuilderLync Inc (contractor SaaS platform), and Sean Scott Richard LLC (holding and fractional executive engagements). His work centers on replacing fragmented tools, manual processes, and vendor dependency with unified systems designed for real-world execution. United States Army veteran. Graduate of Full Sail University (B.S. Cyber/Computer Forensics & Counterterrorism in progress; A.S. Information Technology completed).

- Bio and background: ${SITE.url}/about
- Portfolio: ${SITE.url}/portfolio
- Contact: ${SITE.url}/contact
- Resume (PDF): ${SITE.url}/resume.pdf

## Operating Companies

${ventureLines}

## Fractional Engagements

${fractionalLines}

- Fractional CMO services hub (contractors): ${SITE.url}/fractional-cmo-contractors
- Fractional CTO services hub (service businesses, SaaS, growth-stage operators): ${SITE.url}/fractional-cto-service-businesses
- Combined overview and engagement framework: ${SITE.url}/fractional-cmo-cto

## Selected Products (built and shipped end-to-end)

${productLines}

## Articles

${articleLines}

Articles index: ${SITE.url}/articles

## Areas of Expertise

- AI automation for business operations
- Voice agents and AI-driven communication systems
- SaaS platform architecture for contractors
- CRM, pipeline, and lifecycle infrastructure
- Lead-to-close system design
- Paid media and funnel infrastructure
- Internal process automation and orchestration
- Security-aware platform and workflow design
- Custom software and internal tool development
- Fractional CMO leadership for contractors
- Fractional CTO leadership for service-based companies and growth-stage operators

## Identity & Verified Profiles

- LinkedIn: ${SITE.social.linkedin}
- GitHub (personal): ${SITE.social.githubPersonal}
- GitHub (org): ${SITE.social.githubOrg}
- Facebook: ${SITE.social.facebook}
- Email: ${SITE.email}
- Location: ${SITE.location}

## Disambiguation

This Sean Richard is the entrepreneur and fractional executive based in Palm Coast, Florida — founder of Autom8ion Lab, Sitehues Media, and BuilderLync. Not to be confused with other public figures named Sean Richard (actors, musicians, photographers).

---

Last updated: ${new Date().toISOString().slice(0, 10)}
`;

  return new Response(body, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=3600, must-revalidate',
    },
  });
}
