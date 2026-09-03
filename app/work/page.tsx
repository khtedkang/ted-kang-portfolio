import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, ArrowRight } from 'lucide-react';

import { ProjectCard } from '@/components/project-card';
import { SiteFooter } from '@/components/site-footer';
import { SiteHeader } from '@/components/site-header';
import { additionalWork, projects } from '@/data/portfolio';

export const metadata: Metadata = {
  title: 'Project Library',
  description:
    'Evidence-graded case studies and selected work from Ted Kang across research, strategy, commercialization, and AI-enabled operations.',
};

export default function WorkPage() {
  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <SiteHeader />
      <main id="main-content">
        <header className="border-b border-ink/12 bg-sand">
          <div className="shell py-16 sm:py-24">
            <Link href="/" className="text-link inline-flex items-center gap-2">
              <ArrowLeft className="size-4" aria-hidden="true" />
              Back to overview
            </Link>
            <div className="mt-12 grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
              <div>
                <p className="eyebrow">Project library</p>
                <h1 className="mt-5 max-w-4xl text-balance font-serif text-5xl leading-[0.98] tracking-[-0.055em] sm:text-7xl">
                  The work behind the headline.
                </h1>
              </div>
              <p className="max-w-xl text-lg leading-8 text-ink/70 lg:justify-self-end">
                A broad inventory for review. Every case states its maturity and publication boundary so completed systems, tested prototypes, research plans, and academic work are not blurred together.
              </p>
            </div>
          </div>
        </header>

        <section aria-labelledby="case-studies-heading" className="section-pad">
          <div className="shell">
            <div className="flex flex-col gap-5 border-b border-ink/14 pb-8 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="eyebrow">Case studies</p>
                <h2 id="case-studies-heading" className="mt-4 font-serif text-4xl tracking-[-0.04em]">Ten ways of structuring ambiguity</h2>
              </div>
              <p className="max-w-sm text-sm leading-6 text-ink/62">Featured and supporting cases are intentionally kept together here for easy tailoring to a specific role.</p>
            </div>

            <div className="mt-10 grid gap-px bg-ink/14 md:grid-cols-2">
              {projects.map((project, index) => (
                <ProjectCard key={project.slug} project={project} index={index} />
              ))}
            </div>
          </div>
        </section>

        <section aria-labelledby="additional-work-heading" className="border-t border-ink/12 bg-ink text-paper">
          <div className="shell section-pad">
            <div className="grid gap-10 lg:grid-cols-[0.62fr_1.38fr]">
              <div>
                <p className="eyebrow text-mint">Additional work</p>
                <h2 id="additional-work-heading" className="mt-5 max-w-md font-serif text-4xl leading-[1.05] tracking-[-0.04em] sm:text-5xl">
                  More threads in the portfolio.
                </h2>
                <p className="mt-6 max-w-sm leading-7 text-paper/62">
                  These are concise signals, not inflated case studies. They can be expanded only when enough publishable evidence exists.
                </p>
              </div>

              <div className="border-t border-paper/20">
                {additionalWork.map((item, index) => (
                  <article key={item.title} className="grid gap-3 border-b border-paper/20 py-6 sm:grid-cols-[3rem_0.8fr_1.2fr] sm:gap-6">
                    <span className="font-mono text-xs text-signal">{String(index + 11).padStart(2, '0')}</span>
                    <h3 className="font-serif text-xl leading-tight">{item.title}</h3>
                    <p className="text-sm leading-6 text-paper/64">{item.description}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="border-t border-ink/12 bg-mint/45">
          <div className="shell flex flex-col gap-6 py-10 sm:flex-row sm:items-center sm:justify-between">
            <p className="max-w-2xl font-serif text-2xl leading-snug tracking-[-0.02em]">Looking for the strongest fit for a particular role? Start with the selected-work sequence on the homepage.</p>
            <Link href="/#work" className="text-link inline-flex shrink-0 items-center gap-2">
              View selected work
              <ArrowRight className="size-4" aria-hidden="true" />
            </Link>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
