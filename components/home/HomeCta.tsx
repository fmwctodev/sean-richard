import CtaBlock from '@/components/CtaBlock';
import LastUpdated from '@/components/LastUpdated';

export default function HomeCta() {
  return (
    <>
      <CtaBlock
        eyebrow="Ready to Build the System Behind Your Growth?"
        headline="Tell me what you're operating, what's broken, and what scale looks like."
        primaryHref="/contact"
        primaryLabel="Work With Sean"
        showResume
        resumeLocation="portfolio_closing"
      />
      <div className="px-6">
        <div className="max-w-4xl mx-auto">
          <LastUpdated date="May 2026" />
        </div>
      </div>
    </>
  );
}
