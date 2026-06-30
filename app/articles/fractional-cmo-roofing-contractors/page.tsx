import type { Metadata } from 'next';
import Link from 'next/link';
import ArticleLayout from '@/components/articles/ArticleLayout';
import { ARTICLES } from '@/content/articles';

const article = ARTICLES.find((a) => a.slug === 'fractional-cmo-roofing-contractors')!;

export const metadata: Metadata = {
  title: `${article.title} | Sean Richard`,
  description: article.description,
  alternates: { canonical: `/articles/${article.slug}` },
  openGraph: {
    type: 'article',
    url: `https://seanrichard.com/articles/${article.slug}`,
    title: article.title,
    description: article.description,
    publishedTime: article.publishedDate,
  },
};

const P_CLS = 'text-[17px] leading-[1.7] text-ink-secondary mb-6';
const H2_CLS =
  'font-sans font-bold text-ink-primary mt-14 mb-6 text-[clamp(24px,3vw,32px)] leading-tight tracking-tight';
const STRONG_CLS = 'text-ink-primary font-semibold';
const LINK_CLS = 'text-accent-light hover:text-ink-primary underline underline-offset-4';
const UL_CLS = 'space-y-3 mb-6 max-w-[65ch]';
const LI_CLS = 'flex gap-3 text-[17px] leading-[1.7] text-ink-secondary';

export default function FractionalCmoRoofingArticle() {
  return (
    <ArticleLayout article={article}>
      <p className={P_CLS}>
        Most roofing companies that hit $3&ndash;10M in revenue start hitting the same
        wall. It is not lead volume. It is not the website. It is not even the close
        rate.
      </p>
      <p className={P_CLS}>
        It is that the marketing operation got built one vendor at a time &mdash; a
        website agency here, a PPC contractor there, a CRM nobody fully understands, a
        follow-up process that lives in someone&apos;s head &mdash; and there is no
        single person who owns whether the whole system works. That is the problem a
        fractional CMO solves.
      </p>

      <h2 className={H2_CLS}>The leadership gap most roofers do not name</h2>
      <p className={P_CLS}>
        Hiring a full-time CMO at the right level &mdash; someone with real
        construction-industry experience, real CRM experience, real paid media
        experience &mdash; costs $200K+ before benefits. For a $5M roofing company,
        that is not realistic. So most roofers do one of two things instead.
      </p>
      <p className={P_CLS}>
        They hire a marketing agency and treat them as the strategy owner. The agency
        is good at one channel &mdash; usually paid ads or SEO &mdash; but does not own
        the CRM, the sales pipeline, the follow-up automation, or the relationship
        with the other lead sources. So you get tactics without coordination.
      </p>
      <p className={P_CLS}>
        Or they hire a marketing coordinator or junior manager internally. That person
        can execute, but does not have the authority or the experience to make senior
        decisions about budget allocation, vendor oversight, technology stack, or
        sales pipeline architecture. The strategic work does not happen. Either way,
        the leadership gap stays open.
      </p>

      <h2 className={H2_CLS}>What &ldquo;fractional&rdquo; actually means</h2>
      <p className={P_CLS}>
        A fractional CMO is a senior marketing leader who works inside your company
        part-time on a retainer basis. Same role, same authority, same accountability
        as a full-time CMO &mdash; just scoped to the hours and weeks your business
        actually needs at this stage.
      </p>
      <p className={P_CLS}>
        For most contractors, a typical engagement runs roughly 10&ndash;20 hours per
        week, with weekly working sessions, async progress reporting between, and
        clear monthly deliverables. The <em>fractional</em> part is not about doing
        less. It is about not paying for senior leadership during the hours when
        senior leadership does not move the needle.
      </p>

      <h2 className={H2_CLS}>What a fractional CMO does inside a roofing company</h2>
      <p className={P_CLS}>
        The specific work depends on where the company is, but in a typical engagement
        I am doing some combination of the following.
      </p>
      <p className={P_CLS}>
        <strong className={STRONG_CLS}>Growth strategy and market positioning.</strong>{' '}
        Where is the next $2M of revenue coming from? Insurance jobs, retail, commercial,
        residential re-roofs, storm response, a new geographic market? What is the offer?
        What is the price point? What is the close rate by source? Strategy first,
        tactics later.
      </p>
      <p className={P_CLS}>
        <strong className={STRONG_CLS}>Paid media direction.</strong> Owning the
        relationship with the Google Ads agency and the Meta agency. Setting budgets,
        reviewing creative, validating attribution, killing campaigns that do not work.
        The agency executes; the fractional CMO decides if the agency&apos;s plan is the
        right plan.
      </p>
      <p className={P_CLS}>
        <strong className={STRONG_CLS}>CRM and pipeline infrastructure.</strong> Most
        roofing companies have a CRM but are not using it as the system of record. A
        fractional CMO designs the pipeline stages, the field configuration, the
        automation triggers, and the reporting &mdash; then makes sure the office
        staff, the field reps, and the owner all see the same numbers.
      </p>
      <p className={P_CLS}>
        <strong className={STRONG_CLS}>
          Sales process and follow-up automation.
        </strong>{' '}
        A lead that comes in at 2pm and does not get called until the next morning is a
        lost lead. The fractional CMO builds the response system: speed-to-lead,
        dispatch routing, follow-up cadence, voicemail drop, AI-assisted nurturing
        for older leads. This work alone often pays for the engagement.
      </p>
      <p className={P_CLS}>
        <strong className={STRONG_CLS}>
          Local SEO and Google Business Profile direction.
        </strong>{' '}
        Reviews strategy, GBP optimization, local citation cleanup, content strategy
        for the service-area pages. Often delegated to an SEO vendor &mdash; but never
        actually owned by the vendor.
      </p>
      <p className={P_CLS}>
        <strong className={STRONG_CLS}>Reporting and accountability.</strong> A weekly
        dashboard the owner can scan in five minutes and know whether marketing is
        winning or losing. Not a 40-tab spreadsheet. The right four to six numbers.
      </p>
      <p className={P_CLS}>
        <strong className={STRONG_CLS}>Marketing team and vendor oversight.</strong>{' '}
        Most roofers already have a marketing coordinator and two or three vendors.
        The fractional CMO becomes the senior voice those people report to &mdash;
        providing the strategic context they cannot get from inside.
      </p>

      <h2 className={H2_CLS}>
        How a fractional CMO is different from hiring a marketing agency
      </h2>
      <p className={P_CLS}>
        A marketing agency is good at executing its own playbook. They are hired to
        run paid ads, or SEO, or a website redesign, or a creative campaign. They are
        not hired to own whether the CRM is configured right, whether the sales
        pipeline is converting at the right rate, or whether the agency itself is the
        right agency for this stage of the business.
      </p>
      <p className={P_CLS}>
        A fractional CMO is hired to be the senior owner of the whole marketing
        operation &mdash; strategy, vendor selection, infrastructure, reporting,
        accountability. The agency might still execute the paid ads. The fractional
        CMO decides if that is the right agency, the right budget, the right campaign
        structure.
      </p>
      <p className={P_CLS}>
        In practice, working with a fractional CMO often means the agency relationship
        gets healthier, not worse. The agency now has a senior counterpart to talk to
        who actually understands their work &mdash; and who can defend a budget
        increase to the owner when the data supports it.
      </p>

      <h2 className={H2_CLS}>When a fractional CMO is the wrong call</h2>
      <p className={P_CLS}>A fractional CMO is not the answer if:</p>
      <ul className={UL_CLS}>
        <li className={LI_CLS}>
          <span className="text-accent-light shrink-0 font-mono text-[12px] mt-[6px]">
            &times;
          </span>
          <span>
            You are under $1M in revenue. The marketing problems at that stage are
            usually about offer and sales process, not marketing leadership.
          </span>
        </li>
        <li className={LI_CLS}>
          <span className="text-accent-light shrink-0 font-mono text-[12px] mt-[6px]">
            &times;
          </span>
          <span>
            You do not have any marketing budget. Senior leadership without execution
            dollars produces strategy decks that sit on a shelf.
          </span>
        </li>
        <li className={LI_CLS}>
          <span className="text-accent-light shrink-0 font-mono text-[12px] mt-[6px]">
            &times;
          </span>
          <span>
            The owner will not make decisions or commit to a process. Fractional CMOs
            deliver recommendations; they do not impose them. If decisions stall at the
            top, the engagement stalls too.
          </span>
        </li>
        <li className={LI_CLS}>
          <span className="text-accent-light shrink-0 font-mono text-[12px] mt-[6px]">
            &times;
          </span>
          <span>
            You already have an in-house head of marketing who is performing well. The
            fractional model fills a gap, not duplicates a role.
          </span>
        </li>
      </ul>

      <h2 className={H2_CLS}>
        How to evaluate a fractional CMO for your roofing company
      </h2>
      <p className={P_CLS}>Three questions that filter out most candidates:</p>
      <ul className={UL_CLS}>
        <li className={LI_CLS}>
          <span className="text-accent-light shrink-0 font-mono text-[12px] mt-[6px]">
            01
          </span>
          <span>
            <strong className={STRONG_CLS}>
              Have they actually run marketing inside a contractor business, or just
              consulted to one?
            </strong>{' '}
            There is a real difference between someone who has been responsible for
            the lead-to-revenue number in a trades business and someone who has read
            about it.
          </span>
        </li>
        <li className={LI_CLS}>
          <span className="text-accent-light shrink-0 font-mono text-[12px] mt-[6px]">
            02
          </span>
          <span>
            <strong className={STRONG_CLS}>
              Will they own the CRM and the pipeline, or just the campaigns?
            </strong>{' '}
            If a candidate scopes their work to &ldquo;marketing strategy&rdquo;
            without touching the CRM or the sales process, the leadership gap will
            stay open.
          </span>
        </li>
        <li className={LI_CLS}>
          <span className="text-accent-light shrink-0 font-mono text-[12px] mt-[6px]">
            03
          </span>
          <span>
            <strong className={STRONG_CLS}>
              What does their engagement scope actually include, and what does it
              explicitly not include?
            </strong>{' '}
            A good fractional CMO is precise about both. Vague scope usually means
            vague results.
          </span>
        </li>
      </ul>

      <p className={`${P_CLS} mt-12`}>
        If you are running a roofing company doing $1M&ndash;$10M+ and you are feeling
        the leadership gap,{' '}
        <Link href="/fractional-cmo-contractors" className={LINK_CLS}>
          I take a small number of fractional CMO engagements at a time
        </Link>
        . Direct conversations only &mdash; no agencies, no intermediaries.
      </p>
    </ArticleLayout>
  );
}
