import type { Metadata } from 'next';
import Link from 'next/link';
import MonoLabel from '@/components/editorial/MonoLabel';
import SchemaMarkup, { JsonLd } from '@/components/seo/SchemaMarkup';
import { getWebPageSchema } from '@/lib/schema';
import { SITE } from '@/content/nav';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description:
    'Privacy policy for seanrichard.com — how Sean Richard collects, uses, shares, and protects information from visitors.',
  alternates: { canonical: '/privacy' },
  openGraph: {
    type: 'website',
    url: 'https://seanrichard.com/privacy',
    title: 'Privacy Policy | Sean Richard',
    description:
      'Privacy policy for seanrichard.com — how Sean Richard collects, uses, shares, and protects information from visitors.',
  },
};

const LAST_UPDATED = 'May 5, 2026';

export default function PrivacyPage() {
  return (
    <div>
      <SchemaMarkup path="/privacy" pageTitle="Privacy Policy" />
      <JsonLd
        data={getWebPageSchema({
          path: '/privacy',
          title: 'Privacy Policy | Sean Richard',
          description:
            'Privacy policy for seanrichard.com — how Sean Richard collects, uses, shares, and protects information from visitors.',
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
            Privacy Policy
          </h1>
          <p className="text-ink-tertiary font-mono uppercase text-sm tracking-wider mb-10">
            Last updated: {LAST_UPDATED}
          </p>
          <p className="text-[17px] leading-[1.7] text-ink-secondary mb-6">
            This Privacy Policy describes how Sean Richard (&ldquo;we,&rdquo;
            &ldquo;us,&rdquo; or &ldquo;our&rdquo;) collects, uses, shares, and
            protects personal information when you visit, interact with, or otherwise
            use the website located at{' '}
            <span className="text-ink-primary">https://seanrichard.com</span> and any
            related pages or services we operate (collectively, the
            &ldquo;Site&rdquo;).
          </p>
          <p className="text-[17px] leading-[1.7] text-ink-secondary">
            By using the Site, you agree to the collection and use of information in
            accordance with this Privacy Policy. If you do not agree, please do not
            use the Site.
          </p>
        </div>
      </section>

      <section
        className="relative px-6 pb-32"
        style={{ paddingBottom: 'clamp(96px, 14vh, 160px)' }}
      >
        <div className="max-w-3xl mx-auto space-y-14">
          <Section title="1. Who We Are">
            <p>
              The Site is owned and operated by Sean Richard, an individual based in
              Palm Coast, Florida, U.S.A.
            </p>
            <p>For privacy-related questions or to exercise your rights, contact:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong className="text-ink-primary">Email:</strong>{' '}
                <a
                  className="text-accent hover:text-accent-light underline"
                  href={`mailto:${SITE.email}`}
                >
                  {SITE.email}
                </a>
              </li>
              <li>
                <strong className="text-ink-primary">Mailing address:</strong> Palm
                Coast, FL, United States
              </li>
            </ul>
            <p>
              Sitehues Media Inc, Autom8ion Lab, and BuilderLync Inc operate their own
              websites and services with their own privacy policies. This Privacy
              Policy applies only to seanrichard.com.
            </p>
          </Section>

          <Section title="2. Information We Collect">
            <p>
              We collect information in three ways: information you provide directly,
              information collected automatically, and information from third parties.
            </p>
            <h3 className="text-ink-primary font-semibold text-lg mt-6">
              2.1 Information you provide
            </h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong className="text-ink-primary">Contact form submissions:</strong>{' '}
                name, email address, company (if provided), and the contents of your
                message.
              </li>
              <li>
                <strong className="text-ink-primary">Newsletter or content subscriptions</strong>{' '}
                (if applicable): email address and any preferences you indicate.
              </li>
              <li>
                <strong className="text-ink-primary">Consultation booking</strong>{' '}
                (handled on the separate subdomain bookwith.seanrichard.com): scheduling
                information, business details, and any information you provide to that
                platform. The booking subdomain is operated through a third-party
                scheduling and CRM platform; see Section 4.
              </li>
              <li>
                <strong className="text-ink-primary">Correspondence:</strong> any
                information you share when you email, message, or otherwise communicate
                with us.
              </li>
            </ul>
            <h3 className="text-ink-primary font-semibold text-lg mt-6">
              2.2 Information collected automatically
            </h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong className="text-ink-primary">Device and connection data:</strong>{' '}
                IP address, browser type and version, operating system, device
                identifiers, and approximate location (typically derived from IP).
              </li>
              <li>
                <strong className="text-ink-primary">Usage data:</strong> pages viewed,
                time on page, click events, referring URL, search terms used to reach
                the Site, and date/time of access.
              </li>
              <li>
                <strong className="text-ink-primary">Cookies and similar technologies:</strong>{' '}
                see Section 5.
              </li>
            </ul>
            <h3 className="text-ink-primary font-semibold text-lg mt-6">
              2.3 Information from third parties
            </h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Analytics providers (page-level usage statistics).</li>
              <li>Hosting and content delivery network providers (server logs, security events).</li>
              <li>Social media platforms (when you engage with content shared on our profiles).</li>
              <li>Public sources (e.g., professional directories) for business research and outreach.</li>
            </ul>
            <h3 className="text-ink-primary font-semibold text-lg mt-6">
              2.4 Sensitive information
            </h3>
            <p>
              We do not knowingly request or process sensitive personal information
              (such as government identifiers, financial account numbers, health
              information, or precise geolocation) through the Site. Do not send
              sensitive information through the contact form or by email.
            </p>
          </Section>

          <Section title="3. How We Use Information">
            <p>We use the information we collect for the following purposes:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong className="text-ink-primary">To respond to inquiries:</strong>{' '}
                processing contact form submissions, scheduling consultations, and
                following up on requests.
              </li>
              <li>
                <strong className="text-ink-primary">To deliver content you&rsquo;ve requested:</strong>{' '}
                sending newsletters, articles, or resources you&rsquo;ve subscribed to.
              </li>
              <li>
                <strong className="text-ink-primary">To operate and improve the Site:</strong>{' '}
                monitoring uptime, diagnosing problems, analyzing traffic patterns, and
                refining content.
              </li>
              <li>
                <strong className="text-ink-primary">To prevent abuse and protect security:</strong>{' '}
                detecting fraud, spam, and unauthorized access; enforcing our Terms of
                Service.
              </li>
              <li>
                <strong className="text-ink-primary">To comply with legal obligations:</strong>{' '}
                responding to lawful requests from public authorities, enforcing legal
                rights, and meeting record-keeping requirements.
              </li>
              <li>
                <strong className="text-ink-primary">For business administration:</strong>{' '}
                managing client relationships, maintaining business records, and
                supporting marketing analytics.
              </li>
            </ul>
            <p>
              We do <strong className="text-ink-primary">not</strong> sell personal
              information for monetary compensation, and we do not engage in
              cross-context behavioral advertising in a way that constitutes a
              &ldquo;sale&rdquo; or &ldquo;sharing&rdquo; under California or other
              applicable state laws. If this changes, we will update this Privacy Policy
              and provide the disclosures required by law.
            </p>
            <h3 className="text-ink-primary font-semibold text-lg mt-6">
              3.1 Legal bases (for users in the EU/UK, EEA, and Switzerland)
            </h3>
            <p>
              Where the EU/UK General Data Protection Regulation applies, we rely on
              consent (for newsletter subscriptions and optional cookies), performance
              of a contract (to respond to consultation requests), legitimate interests
              (to operate, secure, and improve the Site), and legal obligation (when
              required by applicable law). You can withdraw consent at any time without
              affecting the lawfulness of processing already performed.
            </p>
          </Section>

          <Section title="4. How We Share Information">
            <p>
              We share personal information only in the limited circumstances described
              below.
            </p>
            <h3 className="text-ink-primary font-semibold text-lg mt-6">
              4.1 Service providers
            </h3>
            <p>
              We use third-party service providers to operate the Site and conduct our
              business. These providers process information on our behalf under
              contractual obligations to safeguard it, including: hosting and CDN
              (Netlify), web analytics (Google Analytics 4), email and form processing,
              the booking platform on bookwith.seanrichard.com, CRM and contact
              management, and search-engine indexing tools (Google Search Console, Bing
              Webmaster Tools).
            </p>
            <h3 className="text-ink-primary font-semibold text-lg mt-6">
              4.2 Business partners and affiliates
            </h3>
            <p>
              We may share limited information with the businesses we operate (Sitehues
              Media Inc, Autom8ion Lab, BuilderLync Inc) where you have specifically
              engaged with one of them or expressed interest in their services. Each of
              these entities maintains its own privacy practices.
            </p>
            <h3 className="text-ink-primary font-semibold text-lg mt-6">
              4.3 Legal and safety reasons
            </h3>
            <p>
              We may disclose information to comply with applicable law, regulation,
              legal process, or governmental request; to enforce our Terms of Service;
              to detect, prevent, or address fraud, security, or technical issues; or to
              protect the rights, property, or safety of Sean Richard, our visitors, our
              clients, or others.
            </p>
            <h3 className="text-ink-primary font-semibold text-lg mt-6">
              4.4 Business transfers
            </h3>
            <p>
              If we are involved in a merger, acquisition, financing, reorganization, or
              sale of assets, personal information may be transferred as part of that
              transaction, subject to standard confidentiality protections.
            </p>
            <h3 className="text-ink-primary font-semibold text-lg mt-6">
              4.5 With your consent
            </h3>
            <p>
              We may share information for any other purpose with your consent.
            </p>
          </Section>

          <Section title="5. Cookies and Similar Technologies">
            <p>
              The Site uses cookies and similar technologies (such as web beacons,
              pixels, and local storage) to operate the Site, remember preferences, and
              analyze usage. Categories include: strictly necessary cookies (required
              for the Site to function), performance and analytics cookies, and
              functional cookies (to remember choices like language or region). You can
              manage cookies through your browser settings. Disabling cookies may affect
              Site functionality.
            </p>
            <p>
              Some browsers transmit a &ldquo;Do Not Track&rdquo; (DNT) signal. Because
              there is no industry consensus on how to interpret DNT, the Site does not
              currently respond to DNT signals. We do honor opt-out requests submitted
              under applicable state laws (see Section 7).
            </p>
          </Section>

          <Section title="6. Data Retention">
            <p>
              We retain personal information only for as long as needed for the purposes
              described in this Privacy Policy, unless a longer retention period is
              required by law. General retention guidelines:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong className="text-ink-primary">Contact form and inquiry data:</strong>{' '}
                up to 24 months after last contact, then archived or deleted.
              </li>
              <li>
                <strong className="text-ink-primary">Consultation and client records:</strong>{' '}
                for the duration of the engagement plus the period required by tax,
                accounting, and other applicable law (typically 7 years).
              </li>
              <li>
                <strong className="text-ink-primary">Newsletter subscriptions:</strong>{' '}
                until you unsubscribe, plus a brief suppression-list retention to honor
                your unsubscribe.
              </li>
              <li>
                <strong className="text-ink-primary">Server logs and security data:</strong>{' '}
                typically 30&ndash;180 days unless needed for an active investigation.
              </li>
              <li>
                <strong className="text-ink-primary">Analytics data:</strong> in
                aggregated or de-identified form, indefinitely.
              </li>
            </ul>
          </Section>

          <Section title="7. Your Rights">
            <p>
              Depending on where you reside, you may have certain rights with respect to
              your personal information.
            </p>
            <h3 className="text-ink-primary font-semibold text-lg mt-6">
              7.1 Rights for U.S. state residents (CA, VA, CO, CT, UT, TX, FL, and
              others as applicable)
            </h3>
            <p>
              Subject to state-specific eligibility, you may have rights to know /
              access the personal information we hold about you, correct inaccurate
              information, request deletion, opt out of any &ldquo;sale&rdquo; or
              &ldquo;sharing&rdquo; for cross-context behavioral advertising, and not be
              discriminated against for exercising these rights. Where applicable, you
              may appeal a denied request by contacting us using the details in Section
              1.
            </p>
            <h3 className="text-ink-primary font-semibold text-lg mt-6">
              7.2 Rights for residents of the EU/UK, EEA, and Switzerland
            </h3>
            <p>
              Under GDPR or UK GDPR, you may have rights to access, rectify, erase,
              restrict, or object to processing of your personal data, as well as data
              portability and the ability to withdraw consent at any time. You may also
              lodge a complaint with your local supervisory authority. A list of EU
              supervisory authorities is available at{' '}
              <a
                href="https://edpb.europa.eu/about-edpb/about-edpb/members_en"
                className="text-accent hover:text-accent-light underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                edpb.europa.eu
              </a>
              . UK residents may contact the Information Commissioner&rsquo;s Office at{' '}
              <a
                href="https://ico.org.uk"
                className="text-accent hover:text-accent-light underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                ico.org.uk
              </a>
              .
            </p>
            <h3 className="text-ink-primary font-semibold text-lg mt-6">
              7.3 How to exercise your rights
            </h3>
            <p>
              Submit a request by emailing{' '}
              <a
                className="text-accent hover:text-accent-light underline"
                href={`mailto:${SITE.email}`}
              >
                {SITE.email}
              </a>{' '}
              with the words &ldquo;Privacy Request&rdquo; in the subject line and a
              description of the request. We may need to verify your identity before
              responding. We will respond within the timelines required by applicable
              law (typically 30&ndash;45 days).
            </p>
          </Section>

          <Section title="8. Children's Privacy">
            <p>
              The Site is not directed to children under the age of 13 (or under 16 in
              the EU/UK), and we do not knowingly collect personal information from
              children. If you believe a child has provided us with personal
              information, please contact us using the details in Section 1, and we
              will take appropriate steps to delete it.
            </p>
          </Section>

          <Section title="9. International Data Transfers">
            <p>
              We are based in the United States, and the information we process may be
              stored or processed in the U.S. or in other countries where our service
              providers operate. If you are located outside the U.S., your information
              may be transferred to, stored, and processed in the U.S. or other
              countries that may not provide the same level of data protection as your
              home jurisdiction. Where required, we use lawful transfer mechanisms (such
              as Standard Contractual Clauses) to safeguard your information.
            </p>
          </Section>

          <Section title="10. Security">
            <p>
              We use reasonable administrative, technical, and physical safeguards to
              protect personal information against unauthorized access, disclosure,
              alteration, and destruction. These include encryption in transit (HTTPS),
              access controls, vendor due diligence, and routine review of our security
              practices. No system is completely secure, and we cannot guarantee
              absolute security. If a breach affects your personal information, we will
              notify you and the appropriate authorities as required by applicable law
              (including Florida&rsquo;s Information Protection Act and other state
              breach-notification laws).
            </p>
          </Section>

          <Section title="11. Third-Party Links and Integrations">
            <p>
              The Site may link to or embed content from third-party websites, including
              the websites of our affiliated companies and the booking subdomain
              bookwith.seanrichard.com. We are not responsible for the privacy practices
              of third parties. Please review the privacy policies of any third-party
              site or service you visit.
            </p>
          </Section>

          <Section title="12. Marketing Communications">
            <p>
              If you subscribe to our newsletter or otherwise opt in to marketing
              communications, we will send you content related to AI automation,
              business operating systems, contractor operations, and similar topics. You
              can unsubscribe at any time using the link in the email or by contacting
              us. Transactional or service-related communications (such as responses to
              inquiries you initiate) are not subject to unsubscribe. We comply with the
              U.S. CAN-SPAM Act and equivalent laws in other jurisdictions.
            </p>
          </Section>

          <Section title="13. Changes to This Privacy Policy">
            <p>
              We may update this Privacy Policy from time to time. The &ldquo;Last
              updated&rdquo; date at the top reflects the most recent revision. Material
              changes will be communicated through the Site and, where required by law,
              by direct notice. Continued use of the Site after changes take effect
              constitutes your acceptance of the updated Privacy Policy.
            </p>
          </Section>

          <Section title="14. Contact Us">
            <p>For privacy questions or to exercise your rights:</p>
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
                href="/terms"
                className="text-accent hover:text-accent-light underline"
              >
                Terms of Service
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
