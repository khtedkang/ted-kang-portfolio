import { readFile, readdir } from 'node:fs/promises';
import { extname, relative } from 'node:path';

const root = new URL('..', import.meta.url);
const inspectedExtensions = new Set(['.ts', '.tsx', '.css', '.md', '.json']);
const excludedDirectories = new Set([
  'node_modules',
  'dist',
  '.git',
  '.wrangler',
  '.vinext',
  '.next',
]);

const prohibited = [
  ['street address', /\b\d{1,6}\s+(?:[a-z0-9.-]+\s+){0,5}(?:avenue|ave|street|road|boulevard|drive|lane|court)\b/i],
  ['postal code', /\b\d{5}(?:-\d{4})?\b/i],
  ['phone number', /(?:\+?1[\s.-]?)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}\b/i],
  ['rejected outreach claim', /prospective\s+(?:partners|counterparties)/i],
  ['rejected meeting claim', /english-language\s+meetings/i],
  ['rejected application-total claim', /government\s+r&d\s+applications/i],
  ['rejected funding-total claim', /requested\s+funding|funding\s+request/i],
  ['company web address', /https?:\/\/[^\s"')]*uam[^\s"')]*korea[^\s"')]*/i],
  ['absolute user path', /[a-z]:\\users\\/i],
  ['private key', /-----begin (?:rsa |ec |openssh )?private key-----/i],
  ['credential token', /\b(?:akia[0-9a-z]{16}|github_pat_[0-9a-z_]{20,}|ghp_[0-9a-z]{20,}|sk-[0-9a-z]{20,}|xox[baprs]-[0-9a-z-]{10,})\b/i],
];

const approvedEmails = new Set(['khted.kang@gmail.com']);
const emailPattern = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}/giu;

async function collect(directoryUrl) {
  const entries = await readdir(directoryUrl, { withFileTypes: true });
  const files = [];

  for (const entry of entries) {
    if (excludedDirectories.has(entry.name)) continue;
    const url = new URL(`${entry.name}${entry.isDirectory() ? '/' : ''}`, directoryUrl);
    if (entry.isDirectory()) files.push(...(await collect(url)));
    else if (inspectedExtensions.has(extname(entry.name))) files.push(url);
  }

  return files;
}

const files = await collect(root);
const findings = [];
let combined = '';

for (const file of files) {
  const content = await readFile(file, 'utf8');
  combined += `\n${content}`;
  for (const [label, pattern] of prohibited) {
    if (pattern.test(content)) {
      findings.push(`${label}: ${relative(root.pathname, file.pathname)}`);
    }
  }
  for (const email of content.match(emailPattern) ?? []) {
    if (!approvedEmails.has(email.toLowerCase())) {
      findings.push(`unapproved email address: ${relative(root.pathname, file.pathname)}`);
    }
  }
}

const required = [
  ['public name', 'Ted Kang'],
  ['public location', 'Flushing, NY'],
  ['public email', 'khted.kang@gmail.com'],
  ['personal GitHub', 'github.com/khtedkang'],
  ['personal LinkedIn', 'linkedin.com/in/kyung-hwan-k-9675a3297'],
  ['MOU attribution', 'three signed MOUs'],
  ['patent attribution', 'four patent applications'],
  ['export attribution', "UAM Korea Tech's first export"],
  ['AI disclosure', 'AI tools supported'],
  ['confidentiality boundary', 'company source code'],
];

for (const [label, text] of required) {
  if (!combined.includes(text)) findings.push(`missing ${label}: ${text}`);
}

const projectSource = await readFile(new URL('../data/portfolio.ts', import.meta.url), 'utf8');
const slugCount = [...projectSource.matchAll(/\n\s+slug:\s+'/g)].length;
if (slugCount !== 10) findings.push(`expected 10 case-study slugs, found ${slugCount}`);

if (findings.length) {
  console.error('Content verification failed:');
  for (const finding of findings) console.error(`- ${finding}`);
  process.exit(1);
}

console.log(`Content verification passed: ${files.length} files, 10 case studies, 0 boundary violations.`);
