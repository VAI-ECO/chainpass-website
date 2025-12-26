import { Section, Container, Button, Badge, Card } from '../ui';
import { User, Home, Briefcase } from 'lucide-react';

export function Products() {
  const products = [
    {
      id: 'vai',
      icon: User,
      name: 'V.A.I.',
      fullName: 'Verified Anonymous Identity',
      status: 'LIVE NOW',
      statusVariant: 'flagship' as const,
      description: 'Anonymous but accountable. For platforms where privacy isn\'t optional.',
      price: '$99/year',
      flagship: 'Vairify',
      cta: 'Get Your V.A.I.',
      ctaVariant: 'primary' as const,
    },
    {
      id: 'rvi',
      icon: Home,
      name: 'R.V.I.',
      fullName: 'Real Verified Identity',
      status: 'Q1 2026',
      statusVariant: 'coming' as const,
      description: 'Verified identity + verified reviews. For domestic workers.',
      price: 'TBD',
      flagship: 'Vetted Maids',
      cta: 'Notify Me',
      ctaVariant: 'ghost' as const,
    },
    {
      id: 'bvi',
      icon: Briefcase,
      name: 'B.V.I.',
      fullName: 'Business Verified Identity',
      status: 'Q2 2026',
      statusVariant: 'coming' as const,
      description: 'Verified work history. For contractors and tradespeople.',
      price: 'TBD',
      flagship: 'Contractor Connects',
      cta: 'Notify Me',
      ctaVariant: 'ghost' as const,
    },
  ];

  return (
    <Section id="products" background="white" paddingY="xl">
      <Container size="lg">
        <div className="space-y-12">

          {/* Header */}
          <div className="text-center space-y-4">
            <h2 className="text-3xl sm:text-4xl font-bold text-chainpass-text">
              THREE PRODUCTS. ONE INFRASTRUCTURE.
            </h2>
            <p className="text-xl text-chainpass-text-muted">
              Different industries. Same trust architecture.
            </p>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {products.map((product) => (
              <Card key={product.id} variant="elevated" padding="lg" className="text-center">
                <div className="space-y-6">
                  {/* Icon */}
                  <div className="w-16 h-16 rounded-full bg-chainpass-primary/10 flex items-center justify-center mx-auto">
                    <product.icon className="w-8 h-8 text-chainpass-primary" />
                  </div>

                  {/* Name */}
                  <div>
                    <h3 className="text-2xl font-bold text-chainpass-text">{product.name}</h3>
                    <p className="text-sm text-chainpass-text-muted">{product.fullName}</p>
                  </div>

                  {/* Status Badge */}
                  <Badge variant={product.statusVariant}>{product.status}</Badge>

                  {/* Description */}
                  <p className="text-chainpass-text-muted">{product.description}</p>

                  {/* Price */}
                  <p className="text-xl font-bold text-chainpass-text">{product.price}</p>

                  {/* Flagship */}
                  <p className="text-sm text-chainpass-text-muted">
                    Flagship: <span className="font-medium">{product.flagship}</span>
                  </p>

                  {/* CTA */}
                  <Button variant={product.ctaVariant} fullWidth>
                    {product.cta}
                  </Button>
                </div>
              </Card>
            ))}
          </div>

        </div>
      </Container>
    </Section>
  );
}
