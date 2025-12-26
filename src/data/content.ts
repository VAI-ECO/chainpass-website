import type {
  TrustBadge,
  FlowStep,
  Top10Item,
  ComparisonRow,
  PartnerCard,
  FormField,
  FooterColumn
} from '../types';

// ===================
// NAVIGATION
// ===================
export const NAV_LINKS = ['Home', 'How It Works', 'For Platforms', 'FAQ'];

// ===================
// HERO SECTION
// ===================
export const HERO_IMAGE = '/images/Herov2-Chainpass.jpeg';

export const TRUST_BADGES: TrustBadge[] = [
  { label: 'ComplyCube', src: '/assets/COMPLYCUBE.svg', scale: 1.1 },
  { label: 'iDenfy', src: '/assets/Indenfy.svg', scale: 1.32 },
  { label: 'Offenders.io', src: '/assets/Offenders.io.svg', scale: 1.1 },
  { label: 'Proton Mail', src: '/assets/Proton Mail.svg', scale: 1.1 },
  { label: 'AWS', src: '/assets/AWS.svg', scale: 1.24 },
  { label: 'MongoDB', src: '/assets/Mongo DB.svg', scale: 0.92 },
  { label: 'SOC 2', src: '/assets/Soc Compliant .svg', scale: 2.1 },
  { label: 'ISO 27001', src: '/assets/ISO Compliance.svg', scale: 2.1 },
  { label: 'Stripe', src: '/assets/Stripe.svg', scale: 1.12 },
];

// ===================
// HOW IT WORKS - FLOW
// ===================
export const FLOW_STEPS: FlowStep[] = [
  {
    num: 1,
    label: 'PLATFORM',
    desc: 'User arrives from\npartner platform'
  },
  {
    num: 2,
    label: 'KYC +\nVOS',
    desc: 'ID verified +\nviolent offender screen'
  },
  {
    num: 3,
    label: 'CHAINPASS\nRECEIVES',
    desc: '✓ Photo\n✓ Biometric\n✓ Clear/Flag',
    highlight: true,
    greenDesc: true
  },
  {
    num: 4,
    label: 'PLATFORM\nREQS',
    desc: 'LEO Disclosure +\nplatform-specific'
  },
  {
    num: 5,
    label: 'PLATFORM\nHANDOFF',
    desc: 'User returns with\nV.A.I. number'
  },
];

// ===================
// TOP 10 - PLATFORMS
// ===================
export const TOP10_PLATFORMS: Top10Item[] = [
  { num: 1, title: 'Zero Identity Storage', desc: 'Nothing to protect. Nothing to lose.', cost: '$0' },
  { num: 2, title: 'Zero Breach Liability', desc: "They can't steal what your platform doesn't have.", cost: '$0' },
  { num: 3, title: 'Government & Legal Exposure', desc: "Determined by you. We can't be compelled.", cost: '$0' },
  { num: 4, title: '100% Age Verification', desc: 'You set the age. We verify it.', cost: '$0' },
  { num: 5, title: 'Near-Zero Support Tickets', desc: 'No passwords. No takeovers. No headaches.', cost: '$0' },
  { num: 6, title: '100% Real Users', desc: 'Keep your platform bot-free—guaranteed!', cost: '$0' },
  { num: 7, title: 'KYC Done', desc: 'We built it. You benefit.', cost: '$0' },
  { num: 8, title: 'Special Requirements', desc: 'Let us know. Implementation free.', cost: '$0' },
  { num: 9, title: 'Guaranteed Compliance', desc: 'Every V.A.I. guaranteed compliant.', cost: '$0' },
  { num: 10, title: 'Criminal Screening', desc: 'Registry checked. Clear or Flagged.', cost: '$0' },
];

// ===================
// TOP 10 - USERS
// ===================
export const TOP10_USERS: Top10Item[] = [
  { num: 1, title: 'Zero Data Breach Risk', desc: 'V.A.I. platforms hold no personal data—by design.', cost: '' },
  { num: 2, title: 'Zero Data Selling', desc: "V.A.I. platforms can't sell what they don't have.", cost: '' },
  { num: 3, title: 'You Control Legal Exposure', desc: "Platform can't hand over what they never had.", cost: '' },
  { num: 4, title: 'One V.A.I. — All Platforms', desc: 'Use one V.A.I. number for all V.A.I. platforms.', cost: '' },
  { num: 5, title: 'Zero Account Takeover', desc: 'Your biometrics, your account.', cost: '' },
  { num: 6, title: 'Bot-Free Platforms', desc: 'Every user is a verified human.', cost: '' },
  { num: 7, title: 'All Users Screened', desc: 'Violent criminal registry checked.', cost: '' },
  { num: 8, title: 'All Users Signed LE Disclosure', desc: 'Legally signed under penalty of perjury.', cost: '' },
  { num: 9, title: 'Spam-Free Platforms', desc: "You can't spam a number.", cost: '' },
  { num: 10, title: 'ChainPass V.A.I. Creation in Minutes', desc: 'Onboarding in under 5 minutes. Works with all V.A.I. platforms.', cost: '$99/year', isPaid: true },
];

// ===================
// ASHLEY MADISON - PLATFORMS
// ===================
export const COMPARISON_PLATFORMS: ComparisonRow[] = [
  { bad: '$11.2M settlement', good: '$0' },
  { bad: 'CEO resigned', good: 'Business continues' },
  { bad: 'Brand destroyed', good: 'Brand intact' },
  { bad: 'Years of lawsuits', good: 'Nothing to sue for' },
  { bad: 'Data breach', good: 'Nothing to leak' },
];

// ===================
// ASHLEY MADISON - USERS
// ===================
export const COMPARISON_USERS: ComparisonRow[] = [
  { bad: 'Names exposed', good: 'Anonymous' },
  { bad: 'Blackmailed', good: 'Nothing to leverage' },
  { bad: 'Divorced', good: 'Private' },
  { bad: 'Fired from jobs', good: 'Untraceable' },
  { bad: 'Suicides reported', good: 'Safe' },
];

// ===================
// ECOSYSTEM PARTNERS
// ===================
export const PARTNERS: PartnerCard[] = [
  { name: 'Vairify', desc: 'Safety platform for adult service providers', status: 'LIVE', flagship: true, logo: '/assets/vairify-circle-dark.svg' },
  { name: 'VAI Vault', desc: 'Secure document storage', status: 'Q1', logo: '/assets/Vai Vault.svg' },
  { name: 'Avictria', desc: 'Verified escort directory', status: 'Q1', logo: '/assets/3.svg' },
  { name: 'AVChexxx', desc: 'Adult performer verification', status: 'Q1', logo: '/assets/AVChexx-LOGO.svg' },
  { name: 'Girlfriend Exchange', desc: 'Companion services platform', status: 'Q1', logo: '/assets/GFExhange.svg' },
  { name: 'Erotic Kneads', desc: 'Massage services directory', status: 'Q1', logo: '/assets/partner-erotic-kneads.svg' },
];

// ===================
// FORM FIELDS
// ===================
export const FORM_FIELDS: FormField[] = [
  { label: 'Platform Name', type: 'text', placeholder: 'Your platform name' },
  { label: 'Contact Email', type: 'email', placeholder: 'you@platform.com' },
  { label: 'Platform URL', type: 'url', placeholder: 'https://yourplatform.com' },
  { label: 'Tell us about your platform', type: 'textarea', placeholder: 'What does your platform do?' },
];

// ===================
// FOOTER
// ===================
export const FOOTER_COLUMNS: FooterColumn[] = [
  {
    title: 'PRODUCT',
    links: [
      { label: 'How It Works', href: '#' },
      { label: 'For Platforms', href: '#' },
      { label: 'Pricing', href: '#' },
      { label: 'API Docs', href: '#' },
    ],
  },
  {
    title: 'COMPANY',
    links: [
      { label: 'About', href: '#' },
      { label: 'Blog', href: '#' },
      { label: 'Contact', href: '#' },
      { label: 'VAI Forum', href: '#', external: true },
    ],
  },
  {
    title: 'LEGAL',
    links: [
      { label: 'Privacy Policy', href: '#' },
      { label: 'Terms of Service', href: '#' },
      { label: 'Cookie Policy', href: '#' },
    ],
  },
];
