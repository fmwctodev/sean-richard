'use client';

import { ExpandableCard } from '@/components/ui/ExpandableCard';
import { HOMEPAGE_VENTURES } from '@/content/ventures';

export default function HomeVentures() {
  return (
    <section id="projects" className="py-20 md:py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 max-w-3xl">
          <p className="text-sm text-gray-500 uppercase tracking-wider mb-4">
            ( Operating Companies )
          </p>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Companies, platforms, and systems built from the field.
          </h2>
          <p className="text-lg text-gray-300 leading-relaxed">
            My companies aren&apos;t theoretical case studies. They operate as execution
            vehicles, software platforms, and live testing environments for the systems I
            build.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {HOMEPAGE_VENTURES.map((v) => (
            <ExpandableCard
              key={v.id}
              title={v.name}
              description={v.category}
              src={v.image}
              className="aspect-[4/3]"
              classNameExpanded="[&_h4]:text-white [&_h4]:font-medium [&_h4]:text-xl"
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
