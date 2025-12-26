import { Section, Container } from '../ui';
import { Play } from 'lucide-react';
import { FlowDiagram } from './FlowDiagram';

export function HowItWorks() {
  return (
    <Section id="how-it-works" background="white" paddingY="xl">
      <Container size="lg">
        <div className="space-y-16">

          {/* Header */}
          <div className="text-center space-y-4">
            <h2 className="text-3xl sm:text-4xl font-bold text-chainpass-text">
              HOW V.A.I. ACTUALLY WORKS
            </h2>
            <p className="text-xl text-chainpass-text-muted">
              No marketing. Just mechanics.
            </p>
          </div>

          {/* Video Placeholder */}
          <div className="relative aspect-video max-w-4xl mx-auto rounded-2xl overflow-hidden bg-chainpass-dark shadow-xl">
            <div className="absolute inset-0 flex items-center justify-center">
              <button className="w-20 h-20 rounded-full bg-chainpass-secondary flex items-center justify-center hover:scale-110 transition-transform shadow-lg">
                <Play className="w-8 h-8 text-white ml-1" />
              </button>
            </div>
            <div className="absolute bottom-4 left-4 text-white text-sm">
              Watch: How Zero-Knowledge Architecture Works (2:30)
            </div>
          </div>

          {/* Flow Diagram */}
          <FlowDiagram />

        </div>
      </Container>
    </Section>
  );
}
