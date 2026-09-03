import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: {
    default: 'Ted Kang | Research, Commercialization & Strategy',
    template: '%s | Ted Kang',
  },
  description:
    'Engineering-trained research and strategy professional working across technology commercialization, cross-border partnerships, and AI-enabled operations.',
  authors: [{ name: 'Ted Kang' }],
  creator: 'Ted Kang',
  keywords: [
    'Research Analyst',
    'Technology Commercialization',
    'Business Development',
    'Strategy',
    'Materials Engineering',
    'U.S.-Korea',
  ],
  robots: {
    index: false,
    follow: false,
    nocache: true,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    title: 'Ted Kang | Research, Commercialization & Strategy',
    description:
      'Complex technical work, translated into clear decisions and executable plans.',
    siteName: 'Ted Kang Portfolio',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body>{children}</body>
    </html>
  );
}
