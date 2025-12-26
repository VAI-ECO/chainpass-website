import { ArrowDown } from 'lucide-react';

interface FlowStepProps {
  number: number;
  title: string;
  description: string;
  stores?: string[];
  neverStores?: string[];
  partnerLogo?: string;
  partnerName?: string;
}

function FlowStep({ number, title, description, stores, neverStores, partnerLogo, partnerName }: FlowStepProps) {
  return (
    <div className="relative">
      <div className="bg-white rounded-xl border border-chainpass-border p-6 space-y-4 shadow-lg">
        {/* Step Number */}
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-chainpass-primary text-white flex items-center justify-center font-bold text-sm">
            {number}
          </div>
          <h3 className="font-bold text-lg text-chainpass-text">{title}</h3>
        </div>

        {/* Partner Logo if exists */}
        {partnerLogo && (
          <div className="flex items-center gap-2">
            <img src={partnerLogo} alt={partnerName} className="h-6 w-auto" />
            <span className="text-sm text-chainpass-text-muted">{partnerName}</span>
          </div>
        )}

        {/* Description */}
        <p className="text-chainpass-text-muted">{description}</p>

        {/* What it stores */}
        {stores && stores.length > 0 && (
          <div className="space-y-1">
            <p className="text-sm font-medium text-chainpass-text">✓ Stores:</p>
            <ul className="text-sm text-chainpass-text-muted space-y-1">
              {stores.map((item, i) => (
                <li key={i} className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* What it NEVER stores */}
        {neverStores && neverStores.length > 0 && (
          <div className="space-y-1">
            <p className="text-sm font-medium text-red-500">✗ NEVER stores:</p>
            <ul className="text-sm text-chainpass-text-muted space-y-1">
              {neverStores.map((item, i) => (
                <li key={i} className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-500" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* Arrow to next step */}
      <div className="flex justify-center py-4">
        <ArrowDown className="w-6 h-6 text-chainpass-border" />
      </div>
    </div>
  );
}

export function FlowDiagram() {
  const steps: FlowStepProps[] = [
    {
      number: 1,
      title: 'USER',
      description: 'Submits government ID + live selfie',
      stores: ['Nothing - passes to verification'],
    },
    {
      number: 2,
      title: 'COMPLYCUBE',
      partnerLogo: '/assets/badge-complycube.svg',
      partnerName: 'KYC Verification',
      description: 'Verifies identity, checks document authenticity',
      stores: ['Full identity (name, address, DOB)', 'ID document images', 'Transaction number'],
    },
    {
      number: 3,
      title: 'OFFENDERS.IO',
      partnerLogo: '/assets/badge-offenders-io.svg',
      partnerName: 'Registry Screening',
      description: 'Checks violent offender registries using name + DOB',
      stores: ['Nothing - returns pass/fail + flags only'],
    },
    {
      number: 4,
      title: 'CHAINPASS',
      partnerLogo: '/assets/chainpass-logo-full.svg',
      partnerName: 'V.A.I. Infrastructure',
      description: 'Generates V.A.I., stores only what\'s needed for verification',
      stores: ['V.A.I. number', 'Biometric image', 'Biometric hash', 'Screening flags'],
      neverStores: ['Name', 'Address', 'ID number', 'Transaction number (deleted)'],
    },
    {
      number: 5,
      title: 'YOUR PLATFORM',
      description: 'Receives verification without identity data',
      stores: ['V.A.I. number only'],
      neverStores: ['Name', 'Address', 'ID', 'Photo', 'Anything identifiable'],
    },
  ];

  return (
    <div className="max-w-2xl mx-auto">
      <div className="text-center mb-8">
        <h3 className="text-xl font-bold text-chainpass-text mb-2">The Zero-Knowledge Flow</h3>
        <p className="text-chainpass-text-muted">Each step only receives what it needs</p>
      </div>

      <div className="space-y-0">
        {steps.map((step, index) => (
          <div key={step.number}>
            <FlowStep {...step} />
            {index === steps.length - 1 && (
              <div className="text-center py-8">
                <div className="inline-block px-6 py-3 rounded-full bg-green-100 border border-green-300">
                  <p className="text-green-800 font-bold">NOTHING TO STEAL.</p>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
