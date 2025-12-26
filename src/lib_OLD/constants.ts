import type {
  TrustBadge,
  PlatformCard,
  FAQItem,
  FlowStep,
  BreachData,
  NavLink,
} from '../types';

// ========================================
// NAVIGATION
// ========================================
export const NAV_LINKS: NavLink[] = [
  { label: 'Home', href: '/' },
  { label: 'How It Works', href: '/#how-it-works' },
  { label: 'API', href: '/api' },
  { label: 'Blog', href: '/blog' },
  { label: 'FAQ', href: '/faq' },
];

export const EXTERNAL_LINKS = {
  forum: 'https://forum.chainpass.id',
  app: 'https://app.chainpass.id',
  vairify: 'https://vairify.com',
} as const;

// ========================================
// TRUST BADGES (9 total)
// Placeholder sources - replace with actual SVGs
// ========================================
export const TRUST_BADGES: TrustBadge[] = [
  { id: 'zero-knowledge', name: 'Zero-Knowledge', src: '/badges/zero-knowledge.svg', alt: 'Zero-Knowledge Architecture' },
  { id: 'complycube', name: 'ComplyCube', src: '/badges/complycube.svg', alt: 'ComplyCube KYC Partner' },
  { id: 'idenfy', name: 'iDenfy', src: '/badges/idenfy.svg', alt: 'iDenfy Verification' },
  { id: 'offenders-io', name: 'Offenders.io', src: '/badges/offenders-io.svg', alt: 'Offenders.io Screening' },
  { id: 'proton', name: 'Proton Mail', src: '/badges/proton.svg', alt: 'Proton Mail Secure Email' },
  { id: 'aws', name: 'AWS', src: '/badges/aws.svg', alt: 'Amazon Web Services' },
  { id: 'mongodb', name: 'MongoDB', src: '/badges/mongodb.svg', alt: 'MongoDB Database' },
  { id: 'soc2', name: 'SOC 2', src: '/badges/soc2.svg', alt: 'SOC 2 Compliant' },
  { id: 'iso27001', name: 'ISO 27001', src: '/badges/iso27001.svg', alt: 'ISO 27001 Certified' },
];

// ========================================
// HOW IT WORKS - 5 STEP FLOW
// ========================================
export const FLOW_STEPS: FlowStep[] = [
  {
    number: 1,
    title: 'PLATFORM',
    description: 'User arrives from partner platform',
  },
  {
    number: 2,
    title: 'KYC + BG',
    description: 'External providers verify (not us)',
  },
  {
    number: 3,
    title: 'CHAINPASS',
    subtitle: 'RECEIVES',
    description: '',
    isHighlighted: true,
    checks: ['Photo', 'Biometric', 'Clear/Flag'],
  },
  {
    number: 4,
    title: 'PLATFORM',
    subtitle: 'REQS',
    description: 'LEO Disclosure (standard) + platform-specific',
  },
  {
    number: 5,
    title: 'HANDOFF',
    description: 'User returns to platform with V.A.I.',
  },
];

// ========================================
// DATA BREACHES
// ========================================
export const BREACH_DATA: BreachData[] = [
  { company: 'Yahoo', settlement: '$350 million' },
  { company: 'Equifax', settlement: '$700 million' },
  { company: 'T-Mobile', settlement: '$350 million' },
  { company: 'Capital One', settlement: '$190 million' },
  { company: 'Home Depot', settlement: '$200 million' },
  { company: 'Uber', settlement: '$148 million' },
  { company: 'Ashley Madison', settlement: '$11.2 million' },
];

// ========================================
// ASHLEY MADISON COMPARISON
// ========================================
export const ASHLEY_MADISON_STORED = [
  '37 million names',
  'Home addresses',
  'Credit cards',
  'Messages',
  'Sexual preferences',
];

export const ASHLEY_MADISON_RESULTS = [
  '$11.2M settlement',
  'CEO resigned',
  'Brand destroyed',
  'Users blackmailed',
  'Lives lost',
];

export const VAI_STORED = [
  'Verified photo',
  '7-character code',
  'Clear/Flagged status',
  'LEO Disclosure (signed)',
];

export const VAI_RESULTS = [
  '$0',
  'Nothing to leak',
  'Nothing to settle',
  'Business continues',
];

// ========================================
// PARTNER PLATFORMS
// ========================================
export const PARTNER_PLATFORMS: PlatformCard[] = [
  {
    id: 'vairify',
    name: 'Vairify',
    status: 'flagship',
    statusLabel: 'LIVE',
    description: 'Safety platform for adult services',
    tags: ['+ Law Enforcement Disclosure', '+ VAI Signature Agreement'],
    ctaText: 'Visit Vairify',
    ctaUrl: 'https://vairify.com',
    isExternal: true,
  },
  {
    id: 'avictria',
    name: 'Avictria',
    status: 'founding',
    statusLabel: 'Coming Soon',
    description: 'Premium resort directory',
    tags: ['+ Law Enforcement Disclosure'],
    ctaText: 'Visit Site',
  },
  {
    id: 'avchexxx',
    name: 'AVChexxx',
    status: 'coming',
    statusLabel: 'Coming Soon',
    description: 'Age verification - content',
    tags: ['+ Content Consent Agreement'],
    ctaText: 'Visit Site',
  },
  {
    id: 'erotic-kneads',
    name: 'Erotic Kneads',
    status: 'coming',
    statusLabel: 'Coming Soon',
    description: 'Marketplace - wellness',
    tags: ['+ Law Enforcement Disclosure'],
    ctaText: 'Visit Site',
  },
  {
    id: 'girlfriend-exchange',
    name: 'Girlfriend Exchange',
    status: 'coming',
    statusLabel: 'Coming Soon',
    description: 'Directory - services',
    tags: ['+ Law Enforcement Disclosure'],
    ctaText: 'Visit Site',
  },
  {
    id: 'your-platform',
    name: 'Your Platform Here',
    status: 'integrate',
    statusLabel: '',
    description: 'Join the ChainPass ecosystem',
    tags: [],
    ctaText: 'Integrate ChainPass V.A.I.',
    ctaUrl: '/api',
  },
];

// ========================================
// FAQ - PREVIEW (4 items)
// ========================================
export const FAQ_PREVIEW: FAQItem[] = [
  {
    id: 'what-is-vai',
    question: 'What is ChainPass V.A.I.?',
    answer: 'V.A.I. (Verified Anonymous Identity) is a zero-knowledge verification system that proves you\'re a real, verified person without revealing who you are. Your identity is verified once, then discarded—only your photo and a 7-character code remain.',
  },
  {
    id: 'how-zero-knowledge',
    question: 'How does zero-knowledge architecture work?',
    answer: 'External providers (ComplyCube, iDenfy) verify your identity. ChainPass only receives your photo, biometric hash, and clear/flagged status. Your name, address, and ID number never touch our servers.',
  },
  {
    id: 'is-identity-safe',
    question: 'Is my identity safe?',
    answer: 'Yes. We can\'t leak what we don\'t have. ChainPass stores only your verified photo and V.A.I. code. If we\'re ever breached, hackers get photos and 7-character codes—nothing else.',
  },
  {
    id: 'multiple-platforms',
    question: 'Can I use my V.A.I. on multiple platforms?',
    answer: 'Yes. One V.A.I., unlimited platforms. Verify once, use everywhere ChainPass is integrated.',
  },
];

// ========================================
// FAQ - FULL (for /faq page)
// ========================================
export const FAQ_FULL: FAQItem[] = [
  ...FAQ_PREVIEW,
  {
    id: 'vai-rvi-bvi-difference',
    question: 'What\'s the difference between V.A.I., R.V.I., and B.V.I.?',
    answer: 'V.A.I. (Verified Anonymous Identity) provides anonymous verification for individuals. R.V.I. (Real Verified Identity) is for service platforms where reputation matters—coming 2026. B.V.I. (Business Verified Identity) verifies business credentials and job histories—also coming 2026.',
  },
  {
    id: 'verification-time',
    question: 'How long does the verification process take?',
    answer: 'The entire V.A.I. creation process takes 3-5 minutes. ID verification is nearly instant, and the violent offender screening takes less than 1 second.',
  },
  {
    id: 'after-verification',
    question: 'What happens to my verification information after I\'m verified?',
    answer: 'Your name, address, and ID details are immediately discarded after verification. ChainPass only stores your verified photo, biometric hash, clear/flagged status, and your signed Law Enforcement Disclosure.',
  },
  {
    id: 'trace-vai',
    question: 'Can someone trace my V.A.I. back to my real identity?',
    answer: 'No. ChainPass doesn\'t store your name, address, or ID number. The only way to connect a V.A.I. to a real identity is through law enforcement with a valid subpoena—and even then, they\'d need to go through our KYC provider.',
  },
  {
    id: 'delete-vai',
    question: 'What if I want to delete my V.A.I.?',
    answer: 'You can request deletion at any time. We\'ll remove your photo and V.A.I. code from our system. Since we don\'t store your personal information, there\'s nothing else to delete.',
  },
  {
    id: 'country-availability',
    question: 'Is ChainPass available in my country?',
    answer: 'ChainPass V.A.I. is available in 203 countries through our KYC providers. As long as you have a valid government-issued ID from a supported country, you can create a V.A.I.',
  },
  {
    id: 'additional-verification',
    question: 'What if a platform requires additional verification beyond V.A.I.?',
    answer: 'Some platforms have specific requirements (like Vairify\'s Law Enforcement Disclosure). These are handled during Step 4 of the V.A.I. flow. The platform tells us what they need, and we collect it during creation.',
  },
  {
    id: 'verification-cost',
    question: 'How much does V.A.I. verification cost?',
    answer: '$99 for initial creation, $25/year for renewal. This covers KYC verification, violent offender screening, and unlimited platform usage.',
  },
  {
    id: 'hacker-security',
    question: 'Is my V.A.I. secure from hackers?',
    answer: 'If ChainPass is ever breached, hackers would get: photos and 7-character codes. No names. No addresses. No credit cards. No messages. Nothing that can be used for blackmail or identity theft.',
  },
  {
    id: 'leo-disclosure',
    question: 'What is the Law Enforcement Disclosure?',
    answer: 'The Law Enforcement Disclosure is a signed statement (under penalty of perjury) confirming you are not an active law enforcement officer working in an official capacity. This is standard for all V.A.I. holders.',
  },
  {
    id: 'why-separate',
    question: 'Why is ChainPass separate from platforms like Vairify?',
    answer: 'ChainPass is infrastructure—the identity layer. Platforms like Vairify build on top of it. By separating verification from platform usage, we ensure your identity is never tied to any single platform. One V.A.I., unlimited platforms.',
  },
  {
    id: 'chainpass-hacked',
    question: 'What if ChainPass gets hacked?',
    answer: 'That\'s the entire point of zero-knowledge architecture. If we\'re breached, hackers get photos and codes—nothing else. No names to expose. No addresses to leak. No messages to blackmail with. We can\'t lose what we never had.',
  },
];

// ========================================
// COPY - KEY LINES
// ========================================
export const COPY = {
  // Hero
  heroHeadline: 'We built the infrastructure that makes the oldest profession in the world safer.',
  heroBadge: 'V.A.I. — PATENT PENDING',

  // Section 2
  introTitle: 'ChainPass V.A.I.™',
  introSubtitle: 'PATENT PENDING',
  introTagline: 'Verified Anonymous Identity',
  introFeature: 'Featuring Zero-Knowledge Architecture',
  introGuarantee: '100% Anonymous. 100% Accountable. GUARANTEED.',
  introPromise: 'We can\'t share what we never collect.',

  // For Users
  forUsersTitle: 'FOR USERS',
  forUsersLine1: 'One V.A.I.',
  forUsersLine2: 'Unlimited platforms.',
  forUsersLine3: '$99/year.',
  forUsersCta: 'CREATE YOUR V.A.I.',

  // For Platforms
  forPlatformsTitle: 'FOR PLATFORMS',
  forPlatformsLine1: 'Free to integrate.',
  forPlatformsLine2: 'Zero data. Zero liability.',
  forPlatformsCta: 'INTEGRATE FREE',

  // How It Works
  howItWorksTitle: 'HOW V.A.I. WORKS',
  howItWorksHeadline: 'To become anonymous, you verify once.',
  howItWorksPunchline: 'We verify you exist. We don\'t know who you are.',

  // Cost of Storing Identity
  costTitle: 'THE COST OF STORING IDENTITY',
  costSubtext: 'These aren\'t fines. These are settlements. The lawsuits. The lawyers. The lost trust. All because they stored what they didn\'t need.',
  costKillerLine: 'They can\'t take what you never had.',

  // User Footnote
  userFootnoteTitle: 'FOR USERS:',
  userFootnoteLine1: 'V.A.I. platforms are zero-knowledge and spam-free.',
  userFootnoteLine2: 'They can\'t sell your data. They can\'t spam you.',
  userFootnoteLine3: 'They can\'t lose your identity in a breach.',
  userFootnoteLine4: 'Not because they promise. Because they don\'t have it.',

  // Ecosystem
  ecosystemTitle: 'Get Your ChainPass V.A.I.',
  ecosystemSubtitle: 'One verification. Multiple platforms. Choose where you want to use your ChainPass V.A.I.',
  alreadyHaveTitle: 'Already Have a V.A.I.?',
  alreadyHaveText: 'Use your existing V.A.I. to join any platform in the ChainPass network instantly—no need to verify again.',

  // Footer
  footerTagline: 'V.A.I. (Verified Anonymous Identity) is Patent Pending.',
  footerCompany: 'ChainPass Inc. is a Delaware C-Corporation.',
  footerCopyright: '© 2024 ChainPass Inc. All rights reserved.',
} as const;
