import Link from 'next/link';
import Image from 'next/image';
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Check,
  Download,
  FileCheck2,
  GraduationCap,
  Languages,
  MapPin,
  SearchCheck,
} from 'lucide-react';

import { ProjectCard } from '@/components/project-card';
import { SiteFooter } from '@/components/site-footer';
import { SiteHeader } from '@/components/site-header';
import { buttonVariants } from '@/components/ui/button';
import { projects, roles } from '@/data/portfolio';
import { cn } from '@/lib/utils';

const featuredProjects = projects.filter((project) => project.featured);

const method = [
  {
    number: '01',
    title: 'Question',
    body: 'Define the real decision, user, and boundary before expanding the work.',
  },
  {
    number: '02',
    title: 'Evidence',
    body: 'Organize sources, grade confidence, and separate facts from assumptions and missing proof.',
  },
  {
    number: '03',
    title: 'Decision',
    body: 'Make options, roles, risks, dependencies, and stop conditions visible.',
  },
  {
    number: '04',
    title: 'Execution',
    body: 'Turn the decision into a pilot, partner plan, tool, publication, or repeatable workflow—then test it.',
  },
];

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <SiteHeader />

      <main id="main-content">
        <section className="hero-grid border-b border-ink/12">
          <div className="shell grid min-h-[calc(100svh-4rem)] gap-0 py-10 lg:grid-cols-[minmax(0,1.04fr)_minmax(360px,0.96fr)] lg:py-0">
            <div className="flex flex-col justify-center py-12 pr-0 lg:min-h-[740px] lg:border-r lg:border-ink/12 lg:py-20 lg:pr-16">
              <p className="eyebrow reveal">Research · Commercialization · Strategy</p>
              <h1 className="mt-7 max-w-[13ch] text-balance font-serif text-[clamp(3.35rem,7.2vw,6.8rem)] leading-[0.91] tracking-[-0.065em] text-ink">
                Complex work.
                <span className="block text-teal">Clear decisions.</span>
              </h1>
              <p className="mt-8 max-w-2xl text-pretty text-lg leading-8 text-ink/72 sm:text-xl sm:leading-9">
                I&apos;m Ted Kang, an engineering-trained research and strategy professional. I turn fragmented technical, market, and operational evidence into plans people can evaluate and execute.
              </p>

              <div className="mt-9 flex flex-wrap gap-3">
                <Link
                  href="#work"
                  className={cn(
                    buttonVariants({ size: 'lg' }),
                    'h-12 rounded-none bg-ink px-5 text-paper hover:bg-teal',
                  )}
                >
                  View selected work
                  <ArrowDown aria-hidden="true" />
                </Link>
                <Link
                  href="/Ted_Kang_Resume.pdf"
                  download
                  className={cn(
                    buttonVariants({ variant: 'outline', size: 'lg' }),
                    'h-12 rounded-none border-ink/28 bg-transparent px-5 hover:bg-mint',
                  )}
                >
                  Resume
                  <Download aria-hidden="true" />
                </Link>
              </div>

              <div className="mt-12 flex flex-wrap gap-x-7 gap-y-3 border-t border-ink/12 pt-5 text-sm text-ink/66">
                <span className="inline-flex items-center gap-2">
                  <MapPin className="size-4 text-signal" aria-hidden="true" />
                  Flushing, NY
                </span>
                <span className="inline-flex items-center gap-2">
                  <Languages className="size-4 text-signal" aria-hidden="true" />
                  English · Korean
                </span>
                <span className="inline-flex items-center gap-2">
                  <GraduationCap className="size-4 text-signal" aria-hidden="true" />
                  Carnegie Mellon University
                </span>
              </div>
            </div>

            <div className="relative flex items-center py-10 lg:pl-12">
              <div className="relative w-full">
                <div className="absolute -left-3 -top-3 size-20 border-l border-t border-signal" aria-hidden="true" />
                <figure className="relative border border-ink/14 bg-[#e8eee9] p-3 shadow-[12px_12px_0_0_#123b3a] sm:p-4">
                  <div className="relative aspect-[3/2] overflow-hidden bg-[#e4e9e5]">
                    <Image
                      src="/portfolio-cover.png"
                      alt=""
                      fill
                      priority
                      sizes="(max-width: 1024px) calc(100vw - 2rem), 44vw"
                      className="object-cover"
                    />
                  </div>
                  <figcaption className="flex items-center justify-between gap-4 border-t border-ink/12 bg-paper px-4 py-3 font-mono text-[0.65rem] uppercase tracking-[0.13em] text-ink/58">
                    <span>Evidence → Decision → Execution</span>
                    <span>TK / 2026</span>
                  </figcaption>
                </figure>

                <div className="relative -mt-1 ml-auto grid w-[88%] grid-cols-2 border border-ink bg-paper sm:w-[82%]">
                  <div className="border-r border-ink/16 p-4 sm:p-5">
                    <p className="font-serif text-3xl tracking-[-0.04em]">3</p>
                    <p className="mt-1 text-xs leading-5 text-ink/62">signed MOUs supported</p>
                  </div>
                  <div className="p-4 sm:p-5">
                    <p className="font-serif text-3xl tracking-[-0.04em]">4</p>
                    <p className="mt-1 text-xs leading-5 text-ink/62">patent applications supported</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section aria-labelledby="role-fit-heading" className="border-b border-ink/12 bg-ink text-paper">
          <div className="shell py-10 lg:py-12">
            <div className="grid gap-7 lg:grid-cols-[0.62fr_1.38fr]">
              <div>
                <p className="eyebrow text-mint">Where I fit</p>
                <h2 id="role-fit-heading" className="mt-4 max-w-md font-serif text-3xl leading-tight tracking-[-0.035em] sm:text-4xl">
                  One operating style, three useful lenses.
                </h2>
              </div>
              <div className="grid border-l border-paper/15 sm:grid-cols-3">
                {roles.map((role, index) => (
                  <article key={role.title} className="border-b border-r border-t border-paper/15 p-5 sm:border-b-0 sm:p-6">
                    <span className="font-mono text-xs text-signal">0{index + 1}</span>
                    <h3 className="mt-8 text-lg font-semibold">{role.title}</h3>
                    <p className="mt-3 text-sm leading-6 text-paper/64">{role.line}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="work" aria-labelledby="selected-work-heading" className="section-pad">
          <div className="shell">
            <div className="section-heading">
              <div>
                <p className="eyebrow">Selected work</p>
                <h2 id="selected-work-heading" className="mt-5 max-w-3xl text-balance font-serif text-4xl leading-[1.02] tracking-[-0.045em] sm:text-6xl">
                  Decisions shaped across systems, markets, and evidence.
                </h2>
              </div>
              <div className="max-w-md lg:pt-8">
                <p className="text-base leading-7 text-ink/68">
                  These case studies focus on the question, method, evidence, and limits—not confidential deliverables. Project status is stated explicitly.
                </p>
                <Link href="/work" className="text-link mt-5 inline-flex items-center gap-2">
                  Browse the full project library
                  <ArrowRight className="size-4" aria-hidden="true" />
                </Link>
              </div>
            </div>

            <div className="mt-12 grid gap-px bg-ink/14 md:grid-cols-2 xl:grid-cols-3">
              {featuredProjects.map((project, index) => (
                <ProjectCard key={project.slug} project={project} index={index} />
              ))}
            </div>
          </div>
        </section>

        <section aria-labelledby="method-heading" className="border-y border-ink/12 bg-sand">
          <div className="shell section-pad">
            <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr]">
              <div className="lg:sticky lg:top-28 lg:self-start">
                <p className="eyebrow">Working method</p>
                <h2 id="method-heading" className="mt-5 max-w-lg font-serif text-4xl leading-[1.03] tracking-[-0.04em] sm:text-5xl">
                  Research that ends in a decision.
                </h2>
                <p className="mt-6 max-w-md leading-7 text-ink/68">
                  I work best when a project has too much information and too little structure. The goal is not more material; it is a more reviewable next move.
                </p>
              </div>

              <ol className="border-t border-ink/18">
                {method.map((step) => (
                  <li key={step.number} className="grid gap-3 border-b border-ink/18 py-7 sm:grid-cols-[4.2rem_0.62fr_1fr] sm:items-start sm:gap-6">
                    <span className="font-mono text-xs text-signal">{step.number}</span>
                    <h3 className="font-serif text-2xl tracking-[-0.025em]">{step.title}</h3>
                    <p className="leading-7 text-ink/68">{step.body}</p>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </section>

        <section id="about" aria-labelledby="about-heading" className="section-pad">
          <div className="shell grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
            <div>
              <p className="eyebrow">About</p>
              <h2 id="about-heading" className="mt-5 text-balance font-serif text-4xl leading-[1.02] tracking-[-0.045em] sm:text-6xl">
                Engineering discipline, applied beyond the lab.
              </h2>
            </div>
            <div>
              <p className="text-pretty font-serif text-2xl leading-[1.45] tracking-[-0.02em] text-ink sm:text-3xl">
                My materials-science background taught me to ask how a system works, how it fails, and what evidence would change a decision.
              </p>
              <div className="mt-8 grid gap-6 text-base leading-7 text-ink/70 sm:grid-cols-2">
                <p>
                  At UAM Korea Tech, I applied that mindset across technology commercialization, healthcare systems, mobility, R&amp;D planning, technical partnerships, and knowledge operations.
                </p>
                <p>
                  I work natively in English and fluently in Korean, bridging technical contributors, business stakeholders, and cross-border partners without hiding uncertainty.
                </p>
              </div>

              <div className="mt-9 border border-ink/14 bg-mint/38 p-6 sm:p-7">
                <div className="flex items-start gap-4">
                  <SearchCheck className="mt-1 size-6 shrink-0 text-teal" strokeWidth={1.6} aria-hidden="true" />
                  <div>
                    <h3 className="font-semibold">How I use AI</h3>
                    <p className="mt-2 leading-7 text-ink/68">
                      AI accelerates research, drafting, and implementation. I define requirements, inspect sources and outputs, test edge cases, correct failures, and retain responsibility for the final decisions.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <div className="flex gap-3 border-t border-ink/18 pt-5">
                  <FileCheck2 className="size-5 shrink-0 text-signal" aria-hidden="true" />
                  <p className="text-sm leading-6 text-ink/66">Available for Research Analyst, Business Development, and Strategy roles across major U.S. markets.</p>
                </div>
                <div className="flex gap-3 border-t border-ink/18 pt-5">
                  <Check className="size-5 shrink-0 text-signal" aria-hidden="true" />
                  <p className="text-sm leading-6 text-ink/66">Portfolio claims are evidence-graded and distinguish completed, prototype, planning, and academic work.</p>
                </div>
              </div>

              <a
                href="https://www.linkedin.com/in/kyung-hwan-k-9675a3297/"
                target="_blank"
                rel="noreferrer"
                className="text-link mt-9 inline-flex items-center gap-2"
              >
                Continue on LinkedIn
                <ArrowUpRight className="size-4" aria-hidden="true" />
              </a>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}
