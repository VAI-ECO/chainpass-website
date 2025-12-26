// Trust Badge
export interface TrustBadge {
  label: string;
  src?: string;  // SVG path (optional - fallback to text label)
  scale?: number; // Individual scale factor for zooming into logo
}

// Flow Step
export interface FlowStep {
  num: number;
  label: string;      // e.g., "PLATFORM" or "KYC +\nVOS"
  desc: string;       // e.g., "User arrives from\npartner platform"
  highlight?: boolean;
  greenDesc?: boolean;
}

// Top 10 Item
export interface Top10Item {
  num: number;
  title: string;
  desc: string;
  cost: string;       // "$0" or "$99"
  isPaid?: boolean;   // true for $99 item
}

// Comparison Row
export interface ComparisonRow {
  bad: string;
  good: string;
}

// Partner Card
export interface PartnerCard {
  name: string;
  desc: string;
  status: 'LIVE' | 'Q1';
  flagship?: boolean;
  logo?: string;  // SVG path (optional - fallback to text)
}

// Form Field
export interface FormField {
  label: string;
  type: 'text' | 'email' | 'url' | 'textarea';
  placeholder: string;
}

// Footer Link
export interface FooterLink {
  label: string;
  href: string;
  external?: boolean;
}

// Footer Column
export interface FooterColumn {
  title: string;
  links: FooterLink[];
}
