import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

import { buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const navigation = [
  { href: '/#work', label: 'Selected work' },
  { href: '/work', label: 'Project library' },
  { href: '/#about', label: 'About' },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-ink/12 bg-paper/92 backdrop-blur-xl">
      <div className="shell flex min-h-16 items-center justify-between gap-5 py-3">
        <Link
          href="/"
          className="group flex items-center gap-3 rounded-sm outline-none focus-visible:ring-2 focus-visible:ring-signal focus-visible:ring-offset-4"
          aria-label="Ted Kang, home"
        >
          <span className="grid size-9 place-items-center border border-ink bg-ink font-mono text-xs font-semibold tracking-[0.12em] text-paper transition-transform group-hover:-translate-y-0.5">
            TK
          </span>
          <span className="leading-none">
            <span className="block font-semibold tracking-[-0.02em]">Ted Kang</span>
            <span className="mt-1 block text-[0.68rem] uppercase tracking-[0.16em] text-muted-foreground">
              Research · Strategy
            </span>
          </span>
        </Link>

        <nav aria-label="Primary navigation" className="hidden items-center gap-7 md:flex">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="nav-link rounded-sm text-sm font-medium outline-none focus-visible:ring-2 focus-visible:ring-signal focus-visible:ring-offset-4"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <a
          href="mailto:khted.kang@gmail.com"
          className={cn(
            buttonVariants({ variant: 'default', size: 'lg' }),
            'h-10 rounded-none bg-ink px-4 text-paper hover:bg-teal',
          )}
        >
          Get in touch
          <ArrowUpRight aria-hidden="true" />
        </a>
      </div>
    </header>
  );
}
