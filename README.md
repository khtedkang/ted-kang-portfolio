# Ted Kang — Personal Portfolio

A recruiter-facing portfolio for an engineering-trained research and strategy professional working across technology commercialization, cross-border partnerships, decision systems, and AI-enabled operations.

> **Review state:** Private. The site intentionally ships with `noindex`, `nofollow`, and `nocache` metadata until Ted approves a public release.

## Why this portfolio exists

The work is organized around a simple question: can Ted take an unfamiliar, technically complex problem and make it usable? The answer is shown through evidence-graded case studies rather than a wall of tools or unsupported impact claims.

The site includes:

- a concise homepage for Research Analyst, Business Development, and Strategy roles;
- six featured projects and a ten-case project library;
- eight additional work signals for later tailoring;
- explicit maturity labels for completed workflows, prototypes, planning, and academic work;
- a sanitized downloadable resume; and
- clear AI-assistance and confidentiality disclosures.

## Local development

Requirements: Node.js 22.13 or newer and pnpm 11.19.

```bash
pnpm install --frozen-lockfile
pnpm dev
```

Then open the local URL printed by the development server.

## Quality checks

```bash
pnpm lint
pnpm test
pnpm build
```

`pnpm test` scans the presentation source for private contact details, rejected employer metrics, company URLs, missing disclosures, and an unexpected case-study count. The production build verifies every static route.

## Content model

Case studies live in `data/portfolio.ts`. Each record carries:

- a visible status;
- a decision question;
- Ted's role;
- a structured approach;
- evidence available for review;
- skills demonstrated; and
- a publication boundary.

The same content model supports role-specific reordering without changing the underlying claims.

## AI and confidentiality

AI tools assisted with evidence organization, copy drafting, clean-room code generation, implementation, and review. Ted defined the goals, account permissions, factual corrections, project priorities, and confidentiality boundaries, and he remains responsible for final publication decisions. See `AI_ASSISTANCE.md`.

This repository contains no employer source code, internal documents, prompts, manuscripts, customer or partner identities, proposals, agreements, patent drafts, correspondence, analytics, website screenshots, or proprietary assets. The cover artwork was generated specifically for this portfolio.

## Personal links

- [LinkedIn](https://www.linkedin.com/in/kyung-hwan-k-9675a3297/)
- [GitHub](https://github.com/khtedkang)
- [Email](mailto:khted.kang@gmail.com)

## License

Site code and original documentation are available under the MIT License. The resume and personal biographical content are provided for review and are not licensed as a reusable dataset. See `THIRD_PARTY_NOTICES.md` for the retained shadcn component notice.
