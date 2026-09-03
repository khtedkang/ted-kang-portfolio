import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  CircleDot,
  EyeOff,
  ShieldCheck,
} from 'lucide-react';

import { SiteFooter } from '@/components/site-footer';
import { SiteHeader } from '@/components/site-header';
import { Badge } from '@/components/ui/badge';
import { getProject, projects } from '@/data/portfolio';

type ProjectPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) return {};

  return {
    title: project.shortTitle,
    description: project.summary,
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) notFound();

  const currentIndex = projects.findIndex((item) => item.slug === project.slug);
  const nextProject = projects[(currentIndex + 1) % projects.length];

  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <SiteHeader />
      <main id="main-content">
        <header className="case-hero border-b border-ink/12 bg-sand">
          <div className="shell py-12 sm:py-18">
            <Link href="/work" className="text-link inline-flex items-center gap-2">
              <ArrowLeft className="size-4" aria-hidden="true" />
              All projects
            </Link>

            <div className="mt-12 grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
              <div>
                <p className="eyebrow">Case {String(currentIndex + 1).padStart(2, '0')} · {project.domain}</p>
                <h1 className="mt-5 max-w-5xl text-balance font-serif text-[clamp(3rem,7vw,6.4rem)] leading-[0.94] tracking-[-0.06em]">
                  {project.title}
                </h1>
              </div>
              <div className="border-l border-ink/18 pl-6 sm:pl-8">
                <Badge variant="outline" className="h-auto rounded-none border-teal/24 bg-mint/50 px-3 py-1.5 font-mono text-[0.68rem] uppercase tracking-[0.1em] text-teal">
                  {project.status}
                </Badge>
                <p className="mt-5 text-lg leading-8 text-ink/70">{project.summary}</p>
              </div>
            </div>
          </div>
        </header>

        <section className="section-pad">
          <div className="shell grid gap-12 lg:grid-cols-[0.68fr_1.32fr] lg:gap-18">
            <aside className="lg:sticky lg:top-28 lg:self-start">
              <p className="eyebrow">The decision question</p>
              <blockquote className="mt-5 border-l-2 border-signal pl-5 font-serif text-2xl leading-[1.35] tracking-[-0.02em]">
                “{project.question}”
              </blockquote>
              <div className="mt-8 border-t border-ink/16 pt-5">
                <p className="font-mono text-[0.67rem] uppercase tracking-[0.12em] text-muted-foreground">Project signals</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.demonstrates.map((item) => (
                    <span key={item} className="border border-ink/14 bg-paper px-3 py-1.5 text-xs text-ink/70">{item}</span>
                  ))}
                </div>
              </div>
            </aside>

            <div>
              <section aria-labelledby="role-heading">
                <p className="eyebrow">My role</p>
                <h2 id="role-heading" className="sr-only">My role</h2>
                <p className="mt-5 text-pretty font-serif text-2xl leading-[1.45] tracking-[-0.02em] sm:text-3xl">{project.role}</p>
              </section>

              <section aria-labelledby="approach-heading" className="mt-14">
                <div className="flex items-center gap-3">
                  <CircleDot className="size-5 text-signal" aria-hidden="true" />
                  <h2 id="approach-heading" className="font-serif text-3xl tracking-[-0.035em]">Approach</h2>
                </div>
                <ol className="mt-6 border-t border-ink/16">
                  {project.approach.map((item, index) => (
                    <li key={item} className="grid gap-3 border-b border-ink/16 py-5 sm:grid-cols-[3rem_1fr]">
                      <span className="font-mono text-xs text-signal">{String(index + 1).padStart(2, '0')}</span>
                      <p className="leading-7 text-ink/72">{item}</p>
                    </li>
                  ))}
                </ol>
              </section>

              <section aria-labelledby="evidence-heading" className="mt-14">
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="size-5 text-teal" aria-hidden="true" />
                  <h2 id="evidence-heading" className="font-serif text-3xl tracking-[-0.035em]">Evidence available for review</h2>
                </div>
                <div className="mt-6 grid gap-px bg-ink/14 sm:grid-cols-2">
                  {project.evidence.map((item) => (
                    <div key={item} className="flex min-h-24 items-start gap-3 bg-card p-5">
                      <span className="mt-1.5 size-2 shrink-0 bg-signal" aria-hidden="true" />
                      <p className="text-sm leading-6 text-ink/70">{item}</p>
                    </div>
                  ))}
                </div>
              </section>

              <section aria-labelledby="boundary-heading" className="mt-14 border border-ink/18 bg-ink p-6 text-paper sm:p-8">
                <div className="flex items-start gap-4">
                  <EyeOff className="mt-1 size-6 shrink-0 text-signal" strokeWidth={1.6} aria-hidden="true" />
                  <div>
                    <h2 id="boundary-heading" className="font-serif text-2xl tracking-[-0.025em]">Publication boundary</h2>
                    <p className="mt-3 leading-7 text-paper/68">{project.boundary}</p>
                  </div>
                </div>
              </section>

              <section aria-labelledby="disclosure-heading" className="mt-6 border border-ink/14 bg-mint/38 p-6 sm:p-8">
                <div className="flex items-start gap-4">
                  <ShieldCheck className="mt-1 size-6 shrink-0 text-teal" strokeWidth={1.6} aria-hidden="true" />
                  <div>
                    <h2 id="disclosure-heading" className="font-semibold">AI and evidence disclosure</h2>
                    <p className="mt-2 text-sm leading-6 text-ink/68">
                      AI tools supported portions of research, drafting, code generation, or production. I defined the problem and acceptance criteria, reviewed sources and outputs, tested critical behavior, corrected errors, and retained responsibility for final decisions. This account is limited to what available artifacts support.
                    </p>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </section>

        <nav aria-label="Next case study" className="border-t border-ink/12 bg-sand">
          <Link href={`/work/${nextProject.slug}`} className="group shell flex flex-col gap-4 py-10 outline-none sm:flex-row sm:items-center sm:justify-between focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-signal">
            <div>
              <p className="font-mono text-[0.67rem] uppercase tracking-[0.13em] text-muted-foreground">Next case study</p>
              <p className="mt-2 font-serif text-2xl tracking-[-0.025em] sm:text-3xl">{nextProject.shortTitle}</p>
            </div>
            <ArrowRight className="size-7 text-signal transition-transform group-hover:translate-x-2" aria-hidden="true" />
          </Link>
        </nav>
      </main>
      <SiteFooter />
    </>
  );
}
