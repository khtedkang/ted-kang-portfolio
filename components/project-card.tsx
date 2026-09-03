import Link from 'next/link';
import {
  Archive,
  ArrowUpRight,
  Bird,
  BookOpen,
  Cross,
  Handshake,
  Microscope,
  ScanLine,
  ShieldCheck,
  Truck,
  type LucideIcon,
} from 'lucide-react';

import { Badge } from '@/components/ui/badge';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import type { Project } from '@/data/portfolio';

const icons: Record<Project['icon'], LucideIcon> = {
  book: BookOpen,
  archive: Archive,
  syringe: Cross,
  truck: Truck,
  drone: ScanLine,
  scan: ScanLine,
  shield: ShieldCheck,
  bird: Bird,
  handshake: Handshake,
  microscope: Microscope,
};

export function ProjectCard({ project, index }: { project: Project; index: number }) {
  const Icon = icons[project.icon];

  return (
    <Card className="project-card h-full rounded-none border-0 bg-card py-0 ring-1 ring-ink/12">
      <CardHeader className="grid grid-cols-[auto_1fr] gap-x-4 gap-y-5 border-b border-ink/10 p-5 sm:p-6">
        <div className="grid size-11 place-items-center border border-ink/16 bg-paper text-teal">
          <Icon className="size-5" strokeWidth={1.6} aria-hidden="true" />
        </div>
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="font-mono text-[0.67rem] uppercase tracking-[0.15em] text-muted-foreground">
              Case {String(index + 1).padStart(2, '0')} · {project.domain}
            </p>
            <CardTitle className="mt-2 font-serif text-2xl leading-[1.08] tracking-[-0.025em]">
              {project.shortTitle}
            </CardTitle>
          </div>
          <ArrowUpRight className="mt-0.5 size-5 shrink-0 text-signal transition-transform group-hover/card:-translate-y-1 group-hover/card:translate-x-1" aria-hidden="true" />
        </div>
        <Badge
          variant="outline"
          className="col-span-2 h-auto rounded-none border-teal/22 bg-mint/42 px-2.5 py-1 font-mono text-[0.65rem] uppercase tracking-[0.1em] text-teal"
        >
          {project.status}
        </Badge>
      </CardHeader>
      <CardContent className="flex flex-1 flex-col gap-5 p-5 sm:p-6">
        <p className="text-[0.98rem] leading-7 text-ink/76">{project.summary}</p>
        <div className="mt-auto flex flex-wrap gap-2">
          {project.demonstrates.slice(0, 3).map((tag) => (
            <span key={tag} className="border border-ink/12 bg-paper px-2.5 py-1 text-xs text-ink/68">
              {tag}
            </span>
          ))}
        </div>
      </CardContent>
      <CardFooter className="rounded-none border-t border-ink/10 bg-transparent p-0">
        <Link
          href={`/work/${project.slug}`}
          className="flex min-h-12 w-full items-center justify-between px-5 text-sm font-semibold outline-none transition-colors hover:bg-ink hover:text-paper focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-signal sm:px-6"
          aria-label={`Read case study: ${project.title}`}
        >
          Read case study
          <span aria-hidden="true">↗</span>
        </Link>
      </CardFooter>
    </Card>
  );
}
