import { useState } from 'react';
import { Section } from '../ui/Section';
import { Button } from '../ui/Button';
import { Card } from '../ui/Card';
import type { IntegrationFormData } from '../../types';

export function ForPlatforms() {
  const [formData, setFormData] = useState<IntegrationFormData>({
    businessName: '',
    contactEmail: '',
    platformUrl: '',
    platformType: 'directory',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission - replace with actual endpoint
    await new Promise((resolve) => setTimeout(resolve, 1000));

    console.log('Form submitted:', formData);
    setIsSubmitting(false);
    setSubmitted(true);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  if (submitted) {
    return (
      <Section id="for-platforms" background="surface">
        <div className="max-w-2xl mx-auto text-center">
          <Card padding="lg">
            <div className="text-4xl mb-4">✓</div>
            <h3 className="text-2xl font-bold text-[var(--color-text)] mb-4">
              Application Received
            </h3>
            <p className="text-[var(--color-text-secondary)]">
              Thank you for your interest in integrating ChainPass V.A.I.
              We'll review your application and be in touch within 48 hours.
            </p>
          </Card>
        </div>
      </Section>
    );
  }

  return (
    <Section id="for-platforms" background="surface">
      {/* Header */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-text)] mb-4">
          Integrate V.A.I. — Free Forever
        </h2>
        <p className="text-lg text-[var(--color-text-secondary)]">
          Eliminate your platform liability. Give your users 100% security.
        </p>
      </div>

      {/* Form */}
      <div className="max-w-xl mx-auto">
        <Card padding="lg">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Business Name */}
            <div>
              <label
                htmlFor="businessName"
                className="block text-sm font-medium text-[var(--color-text)] mb-2"
              >
                Business Name *
              </label>
              <input
                type="text"
                id="businessName"
                name="businessName"
                required
                value={formData.businessName}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-[var(--color-border)] bg-[var(--color-bg)] text-[var(--color-text)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]"
              />
            </div>

            {/* Contact Email */}
            <div>
              <label
                htmlFor="contactEmail"
                className="block text-sm font-medium text-[var(--color-text)] mb-2"
              >
                Contact Email *
              </label>
              <input
                type="email"
                id="contactEmail"
                name="contactEmail"
                required
                value={formData.contactEmail}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-[var(--color-border)] bg-[var(--color-bg)] text-[var(--color-text)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]"
              />
            </div>

            {/* Platform URL */}
            <div>
              <label
                htmlFor="platformUrl"
                className="block text-sm font-medium text-[var(--color-text)] mb-2"
              >
                Platform URL
              </label>
              <input
                type="url"
                id="platformUrl"
                name="platformUrl"
                value={formData.platformUrl}
                onChange={handleChange}
                placeholder="https://"
                className="w-full px-4 py-3 rounded-lg border border-[var(--color-border)] bg-[var(--color-bg)] text-[var(--color-text)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]"
              />
            </div>

            {/* Platform Type */}
            <div>
              <label
                htmlFor="platformType"
                className="block text-sm font-medium text-[var(--color-text)] mb-2"
              >
                Platform Type
              </label>
              <select
                id="platformType"
                name="platformType"
                value={formData.platformType}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-[var(--color-border)] bg-[var(--color-bg)] text-[var(--color-text)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]"
              >
                <option value="directory">Directory</option>
                <option value="marketplace">Marketplace</option>
                <option value="content">Content</option>
                <option value="other">Other</option>
              </select>
            </div>

            {/* Message */}
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-[var(--color-text)] mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-[var(--color-border)] bg-[var(--color-bg)] text-[var(--color-text)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] resize-none"
              />
            </div>

            {/* Submit */}
            <Button
              type="submit"
              variant="primary"
              size="lg"
              fullWidth
              isLoading={isSubmitting}
            >
              APPLY TO INTEGRATE
            </Button>
          </form>
        </Card>
      </div>
    </Section>
  );
}
