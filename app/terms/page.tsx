import type { Metadata } from 'next';
import Link from 'next/link';
import MonoLabel from '@/components/editorial/MonoLabel';
import SchemaMarkup, { JsonLd } from '@/components/seo/SchemaMarkup';
import { getWebPageSchema } from '@/lib/schema';
import { SITE } from '@/content/nav';

export const metadata: Metadata = {
  title: 'Terms of Service',
  description:
    'Terms of Service for seanrichard.com — terms governing use of Sean Richard’s website, content, and resources.',
  alternates: { canonical: '/terms' },
  openGraph: {
    type: 'website',
    url: 'https://seanrichard.com/terms',
    title: 'Terms of Service | Sean Richard',
    description:
      'Terms of Service for seanrichard.com — terms governing use of Sean Richard’s website, content, and resources.',
  },
};

const LAST_UPDATED = 'May 5, 2026';

export default function TermsPage() {
  return (
    <div>
      <SchemaMarkup path="/terms" pageTitle="Terms of Service" />
      <JsonLd
        data={getWebPageSchema({
          path: '/terms',
          title: 'Terms of Service | Sean Richard',
          description:
            "Terms of Service for seanrichard.com — terms governing use of Sean Richard's website, content, and resources.",
          dateModified: '2026-05-05',
        })}
      />

      <section
        className="relative px-6"
        style={{ padding: 'clamp(96px, 14vh, 160px) 24px clamp(48px, 8vh, 80px)' }}
      >
        <div className="max-w-3xl mx-auto">
          <div className="mb-8">
            <MonoLabel variant="accent" leading="rule">
              Legal
            </MonoLabel>
          </div>
          <h1
            className="font-sans font-extrabold text-ink-primary mb-6"
            style={{
              fontSize: 'clamp(40px, 6vw, 84px)',
              lineHeight: 0.98,
              letterSpacing: '-0.035em',
            }}
          >
            Terms of Service
          </h1>
          <p className="text-ink-tertiary font-mono uppercase text-sm tracking-wider mb-10">
            Last updated: {LAST_UPDATED}
          </p>
          <p className="text-[17px] leading-[1.7] text-ink-secondary mb-6">
            These Terms of Service (&ldquo;Terms&rdquo;) govern your access to and use
            of the website located at{' '}
            <span className="text-ink-primary">https://seanrichard.com</span> and any
            related content, features, or services we operate on this site
            (collectively, the &ldquo;Site&rdquo;). The Site is operated by Sean
            Richard (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;).
          </p>
          <p className="text-[17px] leading-[1.7] text-ink-secondary">
            By accessing or using the Site, you agree to be bound by these Terms and
            our{' '}
            <Link
              href="/privacy"
              className="text-accent hover:text-accent-light underline"
            >
              Privacy Policy
            </Link>
            . If you do not agree, do not use the Site.
          </p>
        </div>
      </section>

      <section
        className="relative px-6"
        style={{ paddingBottom: 'clamp(96px, 14vh, 160px)' }}
      >
        <div className="max-w-3xl mx-auto space-y-14">
          <Section title="1. Eligibility">
            <p>
              You must be at least 18 years old (or the age of majority in your
              jurisdiction) to use the Site. By using the Site, you represent and
              warrant that you meet this requirement and that you have the legal
              capacity to enter into these Terms. If you are using the Site on behalf
              of an organization, you represent that you have authority to bind that
              organization to these Terms.
            </p>
          </Section>

          <Section title="2. About the Site and Its Content">
            <p>
              The Site is an informational and personal brand website for Sean Richard,
              an entrepreneur and systems architect. It provides information about Sean
              Richard&rsquo;s professional background, ventures, and expertise;
              information about the companies he has founded or operates, including
              Sitehues Media Inc, Autom8ion Lab, and BuilderLync Inc; written articles
              and insights; and contact and consultation booking pathways. (Note: the
              booking subdomain bookwith.seanrichard.com is operated through a
              third-party platform with its own terms.)
            </p>
            <p>
              The Site is provided for informational purposes only. Information
              published on the Site is not legal, financial, tax, accounting,
              investment, or other professional advice. Always consult a qualified
              professional for advice specific to your situation.
            </p>
            <h3 className="text-ink-primary font-semibold text-lg mt-6">
              2.1 Accuracy of information
            </h3>
            <p>
              We make reasonable efforts to publish accurate and current information.
              However, we do not warrant that the information is error-free, complete,
              or current. Information about pricing, features, services, third-party
              products, and statistics may change without notice.
            </p>
          </Section>

          <Section title="3. Permitted Use">
            <p>
              You may use the Site for lawful, personal, non-commercial purposes and
              for legitimate business purposes consistent with these Terms.
            </p>
            <h3 className="text-ink-primary font-semibold text-lg mt-6">
              3.1 Prohibited use
            </h3>
            <p>You agree not to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Use the Site in any way that violates applicable law or regulation.</li>
              <li>
                Attempt to gain unauthorized access to any part of the Site, our
                systems, our networks, or any user account.
              </li>
              <li>
                Interfere with, disrupt, or impose an unreasonable load on the Site or
                its infrastructure (including denial-of-service attempts, automated
                scraping that does not respect robots.txt, or stress testing without
                consent).
              </li>
              <li>
                Reverse engineer, decompile, or attempt to extract source code from
                the Site, except to the extent permitted by applicable law.
              </li>
              <li>
                Use the Site to transmit malware, harvest data without authorization,
                send unsolicited communications, or engage in fraudulent activity.
              </li>
              <li>
                Frame or mirror any portion of the Site on another website without
                written permission.
              </li>
              <li>
                Use the Site or its content to train machine-learning or
                generative-AI models, except where (a) permitted by our robots.txt
                file or (b) you have obtained our prior written consent. We generally
                allow major AI search and citation crawlers via robots.txt; bulk
                training and reuse rights are not granted by visiting the Site.
              </li>
              <li>
                Submit through the Site any content that is unlawful, defamatory,
                infringing, harassing, or otherwise objectionable.
              </li>
            </ul>
            <p>
              We may monitor use of the Site, investigate suspected violations, and
              take appropriate action, including blocking access and pursuing legal
              remedies.
            </p>
            <h3 className="text-ink-primary font-semibold text-lg mt-6">
              3.2 Automated access
            </h3>
            <p>
              Search engines and AI crawlers may access the Site in accordance with
              our published robots.txt file. Other automated access (scraping,
              crawling, indexing) requires our prior written permission. Authorized
              automated access must respect rate limits and identify itself with a
              descriptive User-Agent string.
            </p>
          </Section>

          <Section title="4. Intellectual Property">
            <h3 className="text-ink-primary font-semibold text-lg">
              4.1 Our content
            </h3>
            <p>
              All content on the Site &mdash; including text, graphics, logos, images,
              photographs, videos, audio, code, design elements, and the selection and
              arrangement of the foregoing &mdash; is owned by Sean Richard or our
              licensors and is protected by U.S. and international copyright,
              trademark, and other intellectual property laws.
            </p>
            <p>
              Subject to your compliance with these Terms, we grant you a limited,
              revocable, non-exclusive, non-transferable, non-sublicensable license to
              access and use the Site for personal and lawful business purposes. This
              license does not include the right to resell, redistribute, or
              commercially exploit the Site or its content; use the Site or its
              content as part of a product or service offered to third parties without
              our written permission; or remove or alter any copyright, trademark, or
              other proprietary notice. All rights not expressly granted are reserved.
            </p>
            <h3 className="text-ink-primary font-semibold text-lg mt-6">
              4.2 Trademarks
            </h3>
            <p>
              &ldquo;Sean Richard,&rdquo; &ldquo;Autom8ion Lab,&rdquo; &ldquo;Sitehues
              Media,&rdquo; and &ldquo;BuilderLync,&rdquo; and any associated logos and
              slogans are trademarks or service marks owned by us or our affiliated
              entities. Other product and company names mentioned on the Site are the
              property of their respective owners. Reference to third-party trademarks
              does not imply endorsement or affiliation unless stated.
            </p>
            <h3 className="text-ink-primary font-semibold text-lg mt-6">
              4.3 Permitted quotation and citation
            </h3>
            <p>
              You may quote brief excerpts of Site content for purposes of news
              reporting, research, criticism, or commentary, provided you give clear
              attribution to &ldquo;Sean Richard&rdquo; with a link back to the source
              page on seanrichard.com.
            </p>
            <h3 className="text-ink-primary font-semibold text-lg mt-6">
              4.4 Feedback
            </h3>
            <p>
              If you submit ideas, suggestions, comments, or feedback to us about the
              Site or our work (&ldquo;Feedback&rdquo;), you grant us a worldwide,
              perpetual, irrevocable, royalty-free license to use and incorporate the
              Feedback for any purpose, without obligation to you. Do not submit
              Feedback you consider confidential.
            </p>
          </Section>

          <Section title="5. User Submissions">
            <p>
              If you submit information through a contact form, comment section,
              newsletter signup, or other interactive feature (&ldquo;User
              Submissions&rdquo;), you represent that the User Submission is your own
              original content or you have all rights necessary to provide it; that it
              does not infringe any third party&rsquo;s intellectual property, privacy,
              or other rights; that it is accurate and not misleading; and that it does
              not contain unlawful, defamatory, harassing, or otherwise objectionable
              content.
            </p>
            <p>
              You grant us a non-exclusive, royalty-free, worldwide license to use,
              store, and process your User Submission as needed to operate the Site,
              respond to your inquiry, and provide any service you&rsquo;ve requested.
              We reserve the right (but have no obligation) to review, edit, or remove
              User Submissions at our discretion.
            </p>
          </Section>

          <Section title="6. Third-Party Links and Services">
            <p>
              The Site contains links to third-party websites and services, including
              the websites of our affiliated companies and the booking subdomain
              operated through a third-party scheduling and CRM platform. These third
              parties have their own terms and privacy practices, which we do not
              control and are not responsible for. Your use of any third-party site or
              service is at your own risk. Inclusion of a link does not imply
              endorsement.
            </p>
          </Section>

          <Section title="7. Booking and Consultations">
            <p>
              Strategy consultations and similar services may be booked through
              bookwith.seanrichard.com. Booking that subdomain is governed by the
              third-party platform&rsquo;s own terms and a separate consulting
              engagement agreement, statement of work, or service agreement that we may
              execute with you for paid services.
            </p>
            <p>
              Use of the Site does not by itself create a consulting, advisory, or
              fiduciary relationship between you and Sean Richard or any of his
              affiliated companies. No such relationship is formed unless and until we
              sign a written agreement.
            </p>
          </Section>

          <Section title="8. Disclaimers">
            <p className="uppercase">
              The Site and its content are provided &ldquo;as is&rdquo; and &ldquo;as
              available,&rdquo; without warranty of any kind, express or implied. To
              the fullest extent permitted by applicable law, we disclaim all
              warranties, including without limitation:
            </p>
            <ul className="list-disc pl-6 space-y-2 uppercase">
              <li>
                Implied warranties of merchantability, fitness for a particular
                purpose, and non-infringement;
              </li>
              <li>
                Warranties that the Site will be uninterrupted, error-free, or secure;
              </li>
              <li>
                Warranties regarding the accuracy, reliability, or completeness of any
                content;
              </li>
              <li>
                Warranties regarding any third-party products, services, or links
                referenced on the Site.
              </li>
            </ul>
            <p>
              You use the Site at your own risk. Information on the Site is for general
              informational purposes only and is not a substitute for professional
              advice tailored to your circumstances.
            </p>
          </Section>

          <Section title="9. Limitation of Liability">
            <p className="uppercase">
              To the fullest extent permitted by applicable law, in no event will Sean
              Richard, his affiliated companies, or their respective officers,
              directors, employees, or agents be liable for any indirect, incidental,
              special, consequential, exemplary, or punitive damages &mdash; including
              without limitation lost profits, lost revenue, lost data, loss of
              goodwill, or business interruption &mdash; arising out of or related to
              your use of the Site, even if we have been advised of the possibility of
              such damages.
            </p>
            <p className="uppercase">
              Our total cumulative liability arising out of or related to these Terms
              or your use of the Site will not exceed one hundred U.S. dollars (USD
              $100) or the amount you paid us in the twelve months preceding the event
              giving rise to liability, whichever is greater.
            </p>
            <p>
              Some jurisdictions do not allow the exclusion or limitation of certain
              damages. To the extent any limitation is not enforceable in your
              jurisdiction, the limitation will apply to the maximum extent permitted
              by law.
            </p>
          </Section>

          <Section title="10. Indemnification">
            <p>
              You agree to indemnify, defend, and hold harmless Sean Richard, his
              affiliated companies, and their respective officers, directors,
              employees, and agents from and against any claims, damages, liabilities,
              losses, costs, and expenses (including reasonable attorneys&rsquo; fees)
              arising out of or related to: your use of the Site in violation of these
              Terms; your violation of any applicable law or regulation; your violation
              of any third-party right, including intellectual property or privacy
              rights; or any content you submit through the Site. We reserve the right
              to assume the exclusive defense and control of any matter subject to
              indemnification, in which case you agree to cooperate with our defense.
            </p>
          </Section>

          <Section title="11. Termination">
            <p>
              We may suspend or terminate your access to the Site at any time, without
              notice, for any reason &mdash; including suspected violation of these
              Terms. Upon termination, your right to use the Site ceases immediately.
              Sections that by their nature should survive termination (including
              Sections 4, 8, 9, 10, 12, and 13) will survive.
            </p>
          </Section>

          <Section title="12. Governing Law and Dispute Resolution">
            <h3 className="text-ink-primary font-semibold text-lg">
              12.1 Governing law
            </h3>
            <p>
              These Terms are governed by the laws of the State of Florida, U.S.A.,
              without regard to its conflict of laws principles. The United Nations
              Convention on Contracts for the International Sale of Goods does not
              apply.
            </p>
            <h3 className="text-ink-primary font-semibold text-lg mt-6">12.2 Venue</h3>
            <p>
              Any dispute, claim, or controversy arising out of or relating to these
              Terms or your use of the Site that is not subject to arbitration (where
              permitted) will be brought exclusively in the state or federal courts
              located in Flagler County, Florida, and you consent to the personal
              jurisdiction of those courts.
            </p>
            <h3 className="text-ink-primary font-semibold text-lg mt-6">
              12.3 Informal resolution
            </h3>
            <p>
              Before filing any claim, you agree to first contact us at{' '}
              <a
                className="text-accent hover:text-accent-light underline"
                href={`mailto:${SITE.email}`}
              >
                {SITE.email}
              </a>{' '}
              and attempt to resolve the dispute informally. If we cannot resolve the
              dispute within sixty (60) days of your written notice, either party may
              pursue formal proceedings.
            </p>
            <h3 className="text-ink-primary font-semibold text-lg mt-6">
              12.4 Class action waiver
            </h3>
            <p>
              To the extent permitted by law, you and we agree that any dispute will be
              brought on an individual basis only &mdash; not as a class action,
              collective action, or representative proceeding.
            </p>
          </Section>

          <Section title="13. Miscellaneous">
            <h3 className="text-ink-primary font-semibold text-lg">
              13.1 Entire agreement
            </h3>
            <p>
              These Terms, together with the Privacy Policy and any other notices or
              agreements posted on the Site, constitute the entire agreement between
              you and us regarding your use of the Site, and supersede any prior
              agreements on that subject.
            </p>
            <h3 className="text-ink-primary font-semibold text-lg mt-6">
              13.2 Severability
            </h3>
            <p>
              If any provision of these Terms is held unenforceable, the remaining
              provisions remain in full effect, and the unenforceable provision will be
              modified only to the extent necessary to make it enforceable.
            </p>
            <h3 className="text-ink-primary font-semibold text-lg mt-6">
              13.3 No waiver
            </h3>
            <p>
              Our failure to enforce any provision of these Terms is not a waiver of
              our right to enforce it later.
            </p>
            <h3 className="text-ink-primary font-semibold text-lg mt-6">
              13.4 Assignment
            </h3>
            <p>
              You may not assign or transfer your rights or obligations under these
              Terms without our prior written consent. We may assign our rights and
              obligations without restriction.
            </p>
            <h3 className="text-ink-primary font-semibold text-lg mt-6">
              13.5 Force majeure
            </h3>
            <p>
              We are not liable for delays or failures resulting from causes beyond our
              reasonable control, including natural disasters, internet or
              telecommunications outages, government action, labor disputes, or
              third-party service failures.
            </p>
            <h3 className="text-ink-primary font-semibold text-lg mt-6">
              13.6 Notices
            </h3>
            <p>
              We may provide notices to you via the Site or by email to the address
              you&rsquo;ve provided. You may provide notices to us at{' '}
              <a
                className="text-accent hover:text-accent-light underline"
                href={`mailto:${SITE.email}`}
              >
                {SITE.email}
              </a>{' '}
              or by mail to the address in Section 14.
            </p>
            <h3 className="text-ink-primary font-semibold text-lg mt-6">
              13.7 Headings
            </h3>
            <p>
              Section headings are for convenience only and do not affect
              interpretation.
            </p>
          </Section>

          <Section title="14. Changes to These Terms">
            <p>
              We may update these Terms from time to time. The &ldquo;Last
              updated&rdquo; date at the top reflects the most recent revision. If we
              make material changes, we will notify you by posting the updated Terms on
              the Site and, where appropriate, by other means. Your continued use of
              the Site after changes take effect constitutes your acceptance of the
              updated Terms.
            </p>
          </Section>

          <Section title="15. Contact Us">
            <p>Questions about these Terms?</p>
            <p>
              Sean Richard
              <br />
              Palm Coast, FL, United States
              <br />
              Email:{' '}
              <a
                className="text-accent hover:text-accent-light underline"
                href={`mailto:${SITE.email}`}
              >
                {SITE.email}
              </a>
              <br />
              Site:{' '}
              <Link
                href="/"
                className="text-accent hover:text-accent-light underline"
              >
                seanrichard.com
              </Link>
            </p>
            <p className="text-sm text-ink-tertiary pt-6">
              See also:{' '}
              <Link
                href="/privacy"
                className="text-accent hover:text-accent-light underline"
              >
                Privacy Policy
              </Link>
              .
            </p>
          </Section>
        </div>
      </section>
    </div>
  );
}

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <h2 className="font-sans font-extrabold text-ink-primary text-2xl md:text-3xl mb-4 tracking-tight">
        {title}
      </h2>
      <div className="text-[16px] leading-[1.7] text-ink-secondary space-y-4">
        {children}
      </div>
    </div>
  );
}
