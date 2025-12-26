import { Section, Container } from '../ui';
import { Skull, Shield } from 'lucide-react';

export function BreachScenario() {
  return (
    <Section id="breach" background="dark" paddingY="xl">
      <Container size="lg">
        <div className="space-y-12">

          {/* Header */}
          <div className="text-center space-y-4">
            <h2 className="text-3xl sm:text-4xl font-bold text-white">
              THE BREACH SCENARIO
            </h2>
            <p className="text-xl text-gray-400">
              What happens when hackers get in?
            </p>
          </div>

          {/* Comparison Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

            {/* Traditional - BAD */}
            <div className="bg-red-950/50 border border-red-800 rounded-2xl p-8 space-y-6 shadow-xl">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-red-600 flex items-center justify-center">
                  <Skull className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white">TRADITIONAL</h3>
              </div>

              <p className="text-gray-300">Hacker gets in.</p>

              <div className="space-y-2">
                <p className="text-red-400 font-medium">Hacker gets:</p>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-center gap-2">
                    <span className="text-red-500">✗</span> Names
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-red-500">✗</span> Addresses
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-red-500">✗</span> ID photos
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-red-500">✗</span> ID numbers
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-red-500">✗</span> Phone numbers
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-red-500">✗</span> Everything
                  </li>
                </ul>
              </div>

              <div className="pt-4 border-t border-red-800 space-y-1">
                <p className="text-red-400 font-bold">Lives destroyed.</p>
                <p className="text-red-400 font-bold">Business destroyed.</p>
                <p className="text-gray-400">Lawsuits. Headlines.</p>
              </div>
            </div>

            {/* With ChainPass - GOOD */}
            <div className="bg-green-950/50 border border-green-800 rounded-2xl p-8 space-y-6 shadow-xl">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-green-600 flex items-center justify-center">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white">WITH CHAINPASS</h3>
              </div>

              <p className="text-gray-300">Hacker gets in.</p>

              <div className="space-y-2">
                <p className="text-green-400 font-medium">Hacker gets:</p>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-center gap-2">
                    <span className="text-gray-500">•</span> V.A.I. numbers
                  </li>
                </ul>
                <p className="text-gray-400 mt-4">That's it.</p>
              </div>

              <div className="pt-4 border-t border-green-800 space-y-2">
                <p className="text-gray-300">
                  V.A.I. numbers are <span className="text-green-400 font-bold">meaningless</span> without us.
                </p>
                <p className="text-gray-300">
                  And we don't have names.
                </p>
                <p className="text-green-400 font-bold text-xl mt-4">
                  NOTHING TO STEAL.
                </p>
              </div>
            </div>

          </div>

          {/* Bottom tagline */}
          <div className="text-center">
            <p className="text-2xl text-white font-medium">
              They can't take what you never had.
            </p>
          </div>

        </div>
      </Container>
    </Section>
  );
}
