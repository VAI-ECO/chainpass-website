import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import type { FAQItem } from '../../types';

interface AccordionItemProps {
  item: FAQItem;
  isOpen: boolean;
  onToggle: () => void;
}

function AccordionItem({ item, isOpen, onToggle }: AccordionItemProps) {
  return (
    <div className="border-b border-[var(--color-border)]">
      <button
        onClick={onToggle}
        className="w-full py-5 flex items-center justify-between text-left hover:bg-[var(--color-surface)] transition-colors px-4 -mx-4"
        aria-expanded={isOpen}
      >
        <span className="text-lg font-medium text-[var(--color-text)] pr-4">
          {item.question}
        </span>
        <ChevronDown
          className={`w-5 h-5 text-[var(--color-text-secondary)] transition-transform duration-200 flex-shrink-0 ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-200 ${
          isOpen ? 'max-h-96 pb-5' : 'max-h-0'
        }`}
      >
        <p className="text-[var(--color-text-secondary)] leading-relaxed px-4 -mx-4">
          {item.answer}
        </p>
      </div>
    </div>
  );
}

interface AccordionProps {
  items: FAQItem[];
  className?: string;
}

export function Accordion({ items, className = '' }: AccordionProps) {
  const [openId, setOpenId] = useState<string | null>(null);

  return (
    <div className={className}>
      {items.map((item) => (
        <AccordionItem
          key={item.id}
          item={item}
          isOpen={openId === item.id}
          onToggle={() => setOpenId(openId === item.id ? null : item.id)}
        />
      ))}
    </div>
  );
}
