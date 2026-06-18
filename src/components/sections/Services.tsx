import {
  Layers,
  Server,
  Database,
  Globe,
  RefreshCw,
  Wrench,
} from 'lucide-react';
import { portfolioData } from '../../data/portfolio';
import { Container } from '../ui/Container';
import { SectionHeading } from '../ui/SectionHeading';
import { FadeIn } from '../ui/FadeIn';
import { Card } from '../ui/Card';

const iconMap: Record<string, typeof Layers> = {
  Layers,
  Server,
  Database,
  Globe,
  RefreshCw,
  Wrench,
};

export function Services() {
  return (
    <section id="services" className="section-padding">
      <Container>
        <SectionHeading
          label="Services"
          title="What I can build for you"
          description="From concept to deployment — full-stack solutions tailored to your business needs."
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {portfolioData.services.map((service, i) => {
            const Icon = iconMap[service.icon] || Layers;
            return (
              <FadeIn key={service.id} delay={i * 0.05}>
                <Card className="h-full">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-brand-500 to-cyan-500 text-white">
                    <Icon size={22} />
                  </div>
                  <h3 className="text-lg font-semibold text-surface-900 dark:text-white">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-surface-600 dark:text-surface-400">
                    {service.description}
                  </p>
                </Card>
              </FadeIn>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
