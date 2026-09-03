import Link from 'next/link';
import { ArrowUpRight, Code2, ContactRound, Mail } from 'lucide-react';

export function SiteFooter() {
  return (
    <footer className="border-t border-paper/16 bg-ink text-paper">
      <div className="shell grid gap-12 py-14 lg:grid-cols-[1.4fr_0.6fr] lg:py-18">
        <div>
          <p className="eyebrow text-mint">Open to U.S. opportunities</p>
          <h2 className="mt-5 max-w-2xl text-balance font-serif text-4xl leading-[1.05] tracking-[-0.035em] sm:text-5xl">
            Let&apos;s turn a difficult question into a clear next move.
          </h2>
          <a
            href="mailto:khted.kang@gmail.com"
            className="mt-8 inline-flex items-center gap-2 border-b border-signal pb-1 text-base font-semibold text-paper outline-none transition-colors hover:text-mint focus-visible:ring-2 focus-visible:ring-signal focus-visible:ring-offset-4 focus-visible:ring-offset-ink"
          >
            khted.kang@gmail.com
            <ArrowUpRight className="size-4" aria-hidden="true" />
          </a>
        </div>

        <div className="grid content-end gap-4 text-sm">
          <a
            href="https://www.linkedin.com/in/kyung-hwan-k-9675a3297/"
            target="_blank"
            rel="noreferrer"
            className="footer-link"
          >
            <ContactRound className="size-4" aria-hidden="true" />
            LinkedIn
            <ArrowUpRight className="ml-auto size-4" aria-hidden="true" />
          </a>
          <a
            href="https://github.com/khtedkang"
            target="_blank"
            rel="noreferrer"
            className="footer-link"
          >
            <Code2 className="size-4" aria-hidden="true" />
            GitHub
            <ArrowUpRight className="ml-auto size-4" aria-hidden="true" />
          </a>
          <a href="mailto:khted.kang@gmail.com" className="footer-link">
            <Mail className="size-4" aria-hidden="true" />
            Email
            <ArrowUpRight className="ml-auto size-4" aria-hidden="true" />
          </a>
        </div>
      </div>

      <div className="border-t border-paper/12">
        <div className="shell flex flex-col gap-3 py-5 text-xs text-paper/62 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Ted Kang · Flushing, NY</p>
          <p>Built as a personal portfolio. Company materials remain confidential.</p>
          <Link href="/work" className="hover:text-paper">
            Project library
          </Link>
        </div>
      </div>
    </footer>
  );
}
