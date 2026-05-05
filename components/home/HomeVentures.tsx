'use client';

import { ExpandableCard } from '@/components/ui/ExpandableCard';
import { HOMEPAGE_VENTURES } from '@/content/ventures';
import EditorialHeadline from '@/components/editorial/EditorialHeadline';
import MonoLabel from '@/components/editorial/MonoLabel';

export default function HomeVentures() {
  return (
    <section
      id="projects"
      className="border-t border-line py-[clamp(64px,10vh,120px)] px-6"
    >
      <div className="max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-[80px_1fr] gap-x-[clamp(24px,4vw,60px)] gap-y-3 items-start mb-[clamp(48px,7vh,80px)]">
          <div className="font-mono text-ink-tertiary pt-3 text-[13px] tracking-[0.12em]">
            02
          </div>
          <div>
            <div className="mb-3">
              <MonoLabel variant="accent">Operating Companies</MonoLabel>
            </div>
            <EditorialHeadline
              text="Companies, platforms, and systems built {{em}}from the field{{/em}}."
              size="section"
              className="max-w-[24ch]"
            />
            <p className="mt-6 text-[18px] leading-[1.55] text-ink-secondary max-w-[60ch]">
              My companies aren&apos;t theoretical case studies. They operate as execution
              vehicles, software platforms, and live testing environments for the systems I
              build.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {HOMEPAGE_VENTURES.map((v) => (
            <ExpandableCard
              key={v.id}
              title={v.name}
              description={v.category}
              src={v.image}
              className="aspect-[4/3]"
              classNameExpanded="[&_h4]:text-ink-primary [&_h4]:font-medium [&_h4]:text-xl"
            >
              {v.expandedSections.map((section) => (
                <div key={section.heading}>
                  <h4>{section.heading}</h4>
                  <p>{section.body}</p>
                </div>
              ))}
            </ExpandableCard>
          ))}
        </div>
      </div>
    </section>
  );
}
