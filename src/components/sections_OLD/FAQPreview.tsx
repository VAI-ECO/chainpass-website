import { ArrowRight } from 'lucide-react';
import { Section, SectionHeader } from '../ui/Section';
import { Accordion } from '../ui/Accordion';
import { Button } from '../ui/Button';
import { FAQ_PREVIEW } from '../../lib/constants';

export function FAQPreview() {
  return (
    <Section>
      <SectionHeader
        title="Frequently Asked Questions"
        subtitle="Everything you need to know about ChainPass V.A.I."
      />

      <div className="max-w-3xl mx-auto">
        <Accordion items={FAQ_PREVIEW} className="mb-8" />

        <div className="text-center">
          <Button
            as="a"
            href="/faq"
            variant="outline"
            rightIcon={<ArrowRight className="w-4 h-4" />}
          >
            VIEW ALL FAQ
          </Button>
        </div>
      </div>
    </Section>
  );
}
