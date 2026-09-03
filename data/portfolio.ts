export type Project = {
  slug: string;
  title: string;
  shortTitle: string;
  domain: string;
  status: string;
  summary: string;
  question: string;
  role: string;
  approach: string[];
  evidence: string[];
  demonstrates: string[];
  boundary: string;
  featured: boolean;
  icon:
    | 'book'
    | 'archive'
    | 'syringe'
    | 'truck'
    | 'drone'
    | 'scan'
    | 'shield'
    | 'bird'
    | 'handshake'
    | 'microscope';
};

export const projects: Project[] = [
  {
    slug: 'autoinjector-product-stewardship',
    title: 'Autoinjector Product Stewardship & Recovery Model',
    shortTitle: 'Autoinjector Stewardship',
    domain: 'Healthcare systems',
    status: 'Research & pilot architecture',
    summary:
      'A system-level model for recovering used autoinjectors while separating safety, regulatory, logistics, and material-reuse decisions.',
    question:
      'What evidence, operating controls, and partner roles would be needed before an autoinjector recovery pilot could be responsibly proposed?',
    role:
      'I structured the research, mapped the lifecycle and stakeholders, separated hazardous handling from component-recovery questions, and translated open issues into a staged pilot framework.',
    approach: [
      'Mapped the journey from patient use through collection, transport, treatment, disassembly, and candidate material recovery.',
      'Separated regulatory pathways, infection-control requirements, product stewardship, and component qualification instead of treating recovery as one decision.',
      'Defined evidence gates for safety, chain of custody, material compatibility, and downstream use.',
      'Framed partner roles and stop conditions so unresolved assumptions remained visible.',
    ],
    evidence: [
      'Lifecycle and stakeholder maps',
      'Pilot-stage decision gates',
      'Evidence-gap register',
      'Research and commercialization briefs',
    ],
    demonstrates: [
      'Systems research',
      'Commercialization strategy',
      'Stakeholder mapping',
      'Evidence governance',
    ],
    boundary:
      'This is research and pilot architecture, not a validated collection program or a claim that recovered components are suitable for reuse. All company documents, counterparties, and technical details remain private.',
    featured: true,
    icon: 'syringe',
  },
  {
    slug: 'technical-publishing-system',
    title: 'Six-Volume AI-Assisted Publishing & QA System',
    shortTitle: 'Publishing & QA System',
    domain: 'AI-enabled operations',
    status: 'Completed production workflow',
    summary:
      'A repeatable source-to-release workflow that treats AI-assisted publishing as an engineering and quality-control problem.',
    question:
      'How can a multi-volume technical series stay traceable, consistent, accessible, and reproducible across manuscript, document, print, and digital outputs?',
    role:
      'I directed the workflow design, acceptance criteria, iterative implementation, exception handling, visual review, and release validation. AI tools accelerated research, drafting, and code generation; I retained responsibility for scope and final quality.',
    approach: [
      'Structured sources and claim records before layout, keeping research traceable through production.',
      'Automated document generation, style application, figures, tables, metadata, and release packaging.',
      'Added checks for links, schemas, duplicate text, document structure, accessibility, page geometry, and file integrity.',
      'Used rendered-output review and explicit release gates rather than trusting source files alone.',
    ],
    evidence: [
      'Six-volume workflow',
      'Automated build and QA scripts',
      'Multi-format release packages',
      'Checksum-based release integrity',
    ],
    demonstrates: [
      'Workflow design',
      'Human-in-the-loop AI',
      'Quality assurance',
      'Release engineering',
    ],
    boundary:
      'The portfolio describes the architecture and verification method only. Manuscripts, prompts, company source code, production files, and licensed assets are not included. The public demo uses fresh code and synthetic content.',
    featured: true,
    icon: 'book',
  },
  {
    slug: 'medical-waste-operating-model',
    title: 'Mobile Medical-Waste Treatment & Logistics Strategy',
    shortTitle: 'Medical-Waste Operating Model',
    domain: 'Health infrastructure',
    status: 'Concept & operating-model research',
    summary:
      'A commercialization and operating model connecting mobile treatment technology to routing, custody, compliance, evidence, and adoption.',
    question:
      'What has to be true operationally—not only technically—for mobile medical-waste treatment to become a credible service?',
    role:
      'I organized the problem around generators, pickup and treatment events, vehicle operations, records, partner interfaces, and validation needs, then connected those elements to a commercialization narrative.',
    approach: [
      'Mapped the operating chain from waste generation through transport, treatment, evidence capture, and final disposition.',
      'Separated technology claims from service-design assumptions and regulatory questions.',
      'Defined candidate stakeholders, incentives, records, exception paths, and pilot milestones.',
      'Converted a broad product idea into a reviewable system and evidence plan.',
    ],
    evidence: [
      'Operating-model maps',
      'Stakeholder and role definitions',
      'Pilot evidence framework',
      'Commercialization research',
    ],
    demonstrates: [
      'Business model design',
      'Operations research',
      'Regulatory framing',
      'Pilot planning',
    ],
    boundary:
      'This case study presents concept and planning work only. It does not claim field deployment, treatment efficacy, regulatory approval, or customer adoption.',
    featured: true,
    icon: 'truck',
  },
  {
    slug: 'knowledge-asset-audit',
    title: 'Knowledge-Asset Audit & Portfolio Map',
    shortTitle: 'Knowledge-Asset Audit',
    domain: 'Knowledge systems',
    status: 'Completed audit; clean-room demo',
    summary:
      'A structured method for turning a large, inconsistent file archive into defensible work-product families, evidence gaps, and portfolio candidates.',
    question:
      'How do you find the real work inside a messy archive without confusing file count, duplication, ownership, or draft status with proven value?',
    role:
      'I defined the audit questions and taxonomy, guided automated inventory and clustering, reviewed ambiguous families, and used the findings to distinguish reusable methods from confidential content.',
    approach: [
      'Inventoried file types and paths while isolating inaccessible or potentially sensitive material.',
      'Used hashes and normalized naming to separate exact duplicates, revisions, and substantive work-product families.',
      'Classified assets by domain, maturity, evidence quality, and publication risk.',
      'Converted the result into a prioritized portfolio map with explicit verification gaps.',
    ],
    evidence: [
      'Auditable inventory method',
      'Duplicate and revision handling',
      'Project-family taxonomy',
      'Synthetic command-line demonstration',
    ],
    demonstrates: [
      'Knowledge management',
      'Research operations',
      'Data hygiene',
      'Portfolio strategy',
    ],
    boundary:
      'The public demonstration contains fictional files and fresh clean-room code. No archive contents, filenames, internal paths, counterparties, or confidential metrics are published.',
    featured: true,
    icon: 'archive',
  },
  {
    slug: 'drone-lifecycle-decision-support',
    title: 'Drone Lifecycle Decision-Support Prototype',
    shortTitle: 'Drone Decision Support',
    domain: 'Policy-to-product',
    status: 'Tested web prototype',
    summary:
      'A privacy-conscious decision flow that separates administrative aircraft status from physical battery and disposal safety.',
    question:
      'How can dense public rules and safety guidance become a conservative, usable journey without turning a website into legal advice?',
    role:
      'I structured the policy research, specified separate decision engines, defined emergency-first behavior and conservative defaults, and reviewed accessibility, privacy, metadata, and test coverage.',
    approach: [
      'Separated administrative deregistration from physical disposal and battery handling.',
      'Gave urgent battery conditions priority and treated unknown information conservatively.',
      'Kept decision logic in the browser without collecting personal filing data.',
      'Tested representative branches and prevented overly broad disposal recommendations.',
    ],
    evidence: [
      'Typed decision states',
      'Safety-precedence rules',
      'Branch-level regression checks',
      'Accessibility and metadata review',
    ],
    demonstrates: [
      'Policy research',
      'Decision-tree design',
      'Product specification',
      'Safety-focused QA',
    ],
    boundary:
      'This is a portfolio description of a tested prototype, not legal advice or an official service. Company code, screenshots, links, and analytics are excluded; any demo is independently recreated.',
    featured: true,
    icon: 'drone',
  },
  {
    slug: 'synthetic-hull-mapping-lab',
    title: 'Synthetic Hull Mapping Learning Lab',
    shortTitle: 'Synthetic Hull Mapping Learning Lab',
    domain: 'Synthetic engineering demo',
    status: 'Clean-room learning prototype',
    summary:
      'A deterministic browser lab for exploring fictional GPS-denied hull-mapping data while keeping capability limits visible.',
    question:
      'Can a technical demo teach measurement, coverage, and export concepts without implying real flight, inspection, or certification capability?',
    role:
      'I defined the learning use case, synthetic-data boundary, acceptance criteria, documentation, and release structure, and directed AI-assisted TypeScript implementation and testing.',
    approach: [
      'Generated deterministic fictional geometry so results remain reproducible.',
      'Made a deliberate coverage gap visible instead of presenting a deceptively complete scan.',
      'Supported structured PLY, CSV, and JSON exports for inspection and reuse.',
      'Packaged tests, schemas, manifests, checksums, licensing, and explicit non-capabilities.',
    ],
    evidence: [
      'Deterministic synthetic dataset',
      'Measurement and coverage logic',
      'Structured exports',
      'Tests and release metadata',
    ],
    demonstrates: [
      'Technical product framing',
      'Reproducibility',
      'Synthetic-data design',
      'Open-source hygiene',
    ],
    boundary:
      'Synthetic Hull Mapping Learning Lab is a learning and preview tool. It does not connect to a vehicle, plan routes, establish field accuracy, conduct inspections, or provide certification evidence.',
    featured: true,
    icon: 'scan',
  },
  {
    slug: 'decontamination-evidence-plan',
    title: 'Evidence-Driven Dry Decontamination PoC',
    shortTitle: 'Decontamination Evidence Plan',
    domain: 'R&D strategy',
    status: 'PoC planning',
    summary:
      'A staged evidence framework for testing a complex treatment concept without allowing attractive features to outrun proof.',
    question:
      'What must a proof of concept record and demonstrate before stronger efficacy, compatibility, or readiness claims are considered?',
    role:
      'I helped organize system architecture, test stages, configuration records, partner interfaces, safety boundaries, release criteria, and unresolved evidence.',
    approach: [
      'Separated candidate treatment mechanisms until compatibility and efficacy could be tested.',
      'Defined configuration control, measurement expectations, and evidence records.',
      'Mapped external expertise, partner responsibilities, and stop conditions.',
      'Kept planned claims distinct from demonstrated results.',
    ],
    evidence: [
      'Staged validation framework',
      'Configuration and evidence controls',
      'Safety and stop conditions',
      'Partner-interface planning',
    ],
    demonstrates: [
      'R&D planning',
      'Validation design',
      'Systems thinking',
      'Risk communication',
    ],
    boundary:
      'No treatment-efficacy, defense-readiness, field-performance, or certification claim is made. This case covers the design of an evidence plan, not validated system performance.',
    featured: false,
    icon: 'shield',
  },
  {
    slug: 'aviation-wildlife-risk-strategy',
    title: 'Aviation Wildlife-Risk Decision System',
    shortTitle: 'Wildlife-Risk Strategy',
    domain: 'Aviation strategy',
    status: 'Concept & PoC planning',
    summary:
      'A strategy framework connecting detection, risk scoring, response, records, and stakeholder needs into a complete decision loop.',
    question:
      'What makes sensing operationally useful to airport, vertiport, building, and mobility stakeholders?',
    role:
      'I developed research, proposal, and commercialization materials that framed sensing as one part of a decision system and made the missing evidence explicit.',
    approach: [
      'Connected detection quality to classification, risk models, alerts, response, and evidence retention.',
      'Segmented users and decision needs across operational and commercial contexts.',
      'Defined proof-of-concept questions and reporting concepts.',
      'Separated plausible product direction from validated performance.',
    ],
    evidence: [
      'Decision-loop architecture',
      'Stakeholder segmentation',
      'PoC question set',
      'Commercialization framing',
    ],
    demonstrates: [
      'Emerging-tech analysis',
      'Platform strategy',
      'Stakeholder research',
      'Commercialization',
    ],
    boundary:
      'This work is presented as concept and PoC planning. Proprietary algorithms, performance claims, partner identities, and implied regulatory acceptance are excluded.',
    featured: false,
    icon: 'bird',
  },
  {
    slug: 'international-technical-partnerships',
    title: 'International Technical Partnership Development',
    shortTitle: 'Technical Partnerships',
    domain: 'Business development',
    status: 'Completed partnership support',
    summary:
      'Bilingual research and collaboration design that helped move technical conversations from interest toward reviewable joint work.',
    question:
      'What work has to happen between a promising first conversation and an agreement that technical and commercial teams can act on?',
    role:
      'I prepared English- and Korean-language briefs, meeting materials, role maps, proof-of-concept outlines, and follow-up structures for international technology discussions.',
    approach: [
      'Researched counterpart needs and translated technical concepts for mixed audiences.',
      'Made objectives, roles, workstreams, open questions, and next decisions explicit.',
      'Built concise meeting and follow-up structures to maintain momentum.',
      "Coordinated UAM Korea Tech's first export, an approximately USD 15,000 shipment to Europe, from initial outreach through shipment completion.",
      'Supported three signed MOUs for joint R&D and commercialization.',
    ],
    evidence: [
      'Bilingual briefing structures',
      'Role and workstream maps',
      'PoC outlines',
      'First export coordinated',
      'Three signed MOUs supported',
    ],
    demonstrates: [
      'Business development',
      'Cross-border communication',
      'Technical translation',
      'Partner coordination',
    ],
    boundary:
      'Counterparties, correspondence, negotiating positions, agreement text, logos, and implied endorsements remain confidential.',
    featured: false,
    icon: 'handshake',
  },
  {
    slug: 'materials-failure-analysis',
    title: 'Materials Failure Analysis',
    shortTitle: 'Materials Failure Analysis',
    domain: 'Materials engineering',
    status: 'Academic capstone',
    summary:
      'An engineering investigation connecting microstructure, composition, and stress behavior to operational, cost, and environmental recommendations.',
    question:
      'How can physical evidence from a failed material become a defensible mechanism and a useful decision for an industry audience?',
    role:
      'As part of a Carnegie Mellon capstone team, I investigated cast-iron soil-pipe failure using SEM, EDS, and stress modeling, then helped translate findings into recommendations.',
    approach: [
      'Connected fracture observations to microstructure and compositional evidence.',
      'Used stress modeling to test candidate failure explanations.',
      'Compared technical interpretation with operational and environmental trade-offs.',
      'Communicated the result for both engineering and sponsor audiences.',
    ],
    evidence: [
      'SEM and EDS analysis',
      'Stress-model interpretation',
      'Failure-mechanism synthesis',
      'Decision-oriented recommendations',
    ],
    demonstrates: [
      'Failure investigation',
      'Experimental analysis',
      'Technical communication',
      'Materials engineering',
    ],
    boundary:
      'Only the method and high-level learning are described. Sponsor-specific samples, results, and materials are withheld unless separate clearance is obtained.',
    featured: false,
    icon: 'microscope',
  },
];

export const additionalWork = [
  {
    title: 'Patent-Application Support',
    description:
      'Organized technical research, specifications, figures, and review inputs supporting four patent applications; no legal drafting or unpublished claims are shown.',
  },
  {
    title: 'Public R&D Proposal Architecture',
    description:
      'Translated emerging-technology concepts into objectives, milestones, roles, budgets, evidence needs, and implementation risks without publishing submissions or funding figures.',
  },
  {
    title: 'Precision Spray & Component Qualification',
    description:
      'Converted reuse and fluid-control concepts into testable questions around geometry, residue, fatigue, corrosion, leakage, pressure, and compatibility.',
  },
  {
    title: 'Technical Website Content Systems',
    description:
      'Used typed content, localization, structured metadata, scoped component changes, and automated assertions to make complex information consistent and maintainable.',
  },
  {
    title: 'Microneedle Insulin-Patch Concept',
    description:
      'Applied polymeric-biomaterials thinking to material selection, use constraints, delivery mechanics, and early intellectual-property questions.',
  },
  {
    title: 'Insurance Data Quality Support',
    description:
      'Prepared vehicle-accident imagery and reviewed label consistency for an AI risk-prediction dataset, grounding later work in the operations behind reliable models.',
  },
  {
    title: 'Sustainable Water-Control Product Concept',
    description:
      'Explored how material reuse, component qualification, and lifecycle evidence could support a responsible water-control product concept.',
  },
  {
    title: 'International Market-Expansion Planning',
    description:
      'Structured market entry questions around evidence, partner fit, regulatory context, use cases, and the next decision—not unsupported market claims.',
  },
];

export const roles = [
  {
    title: 'Research Analyst',
    line: 'Technical, market, regulatory, and competitive inputs organized into evidence-backed decisions.',
  },
  {
    title: 'Business Development',
    line: 'Partner research, bilingual technical communication, PoC structure, and disciplined follow-through.',
  },
  {
    title: 'Strategy',
    line: 'Ambiguous initiatives translated into options, operating models, risks, milestones, and decision gates.',
  },
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}
