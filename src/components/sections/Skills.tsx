import {
  Code2,
  Database,
  Server,
  Wrench,
  Layers,
  Cpu,
} from 'lucide-react';
import { portfolioData } from '../../data/portfolio';
import { Container } from '../ui/Container';
import { SectionHeading } from '../ui/SectionHeading';
import { FadeIn } from '../ui/FadeIn';
import { Card } from '../ui/Card';

const iconMap: Record<string, typeof Code2> = {
  Frontend: Code2,
  Backend: Server,
  Database: Database,
  'DevOps & Tools': Wrench,
  'Frameworks & Patterns': Layers,
  Other: Cpu,
};

export function Skills() {
  return (
    <section id="skills" className="section-padding bg-surface-100/50 dark:bg-surface-900/30">
      <Container>
        <SectionHeading
          label="Skills"
          title="Technologies I work with"
          description="A comprehensive toolkit for building modern, scalable web applications."
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {portfolioData.skills.map((category, i) => {
            const Icon = iconMap[category.title] || Code2;
            return (
              <FadeIn key={category.title} delay={i * 0.05}>
                <Card className="h-full">
                  <div className="mb-4 flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-500/10 text-brand-600 dark:text-brand-400">
                      <Icon size={20} />
                    </div>
                    <h3 className="font-semibold text-surface-900 dark:text-white">
                      {category.title}
                    </h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <span
                        key={skill}
                        className="rounded-lg border border-surface-200 bg-surface-50 px-3 py-1.5 text-sm text-surface-700 transition-colors hover:border-brand-300 hover:bg-brand-50 dark:border-surface-700 dark:bg-surface-800 dark:text-surface-300 dark:hover:border-brand-700 dark:hover:bg-brand-950"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </Card>
              </FadeIn>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
