import { CheckCircle2, GraduationCap } from 'lucide-react';
import { portfolioData } from '../../data/portfolio';
import { Container } from '../ui/Container';
import { SectionHeading } from '../ui/SectionHeading';
import { FadeIn } from '../ui/FadeIn';
import { Card } from '../ui/Card';

export function About() {
  const { about, education } = portfolioData;

  return (
    <section id="about" className="section-padding">
      <Container>
        <SectionHeading
          label="About Me"
          title="Building reliable systems that scale"
          description="Passionate about clean code, performance, and delivering production-ready solutions."
        />

        <div className="grid gap-8 lg:grid-cols-5">
          <FadeIn className="lg:col-span-3">
            <Card hover={false} className="h-full">
              <p className="text-lg leading-relaxed text-surface-600 dark:text-surface-300">
                {about.summary}
              </p>

              <h3 className="mt-8 mb-4 text-lg font-semibold text-surface-900 dark:text-white">
                Career Highlights
              </h3>
              <ul className="space-y-3">
                {about.highlights.map((item) => (
                  <li key={item} className="flex gap-3 text-surface-600 dark:text-surface-400">
                    <CheckCircle2
                      size={20}
                      className="mt-0.5 shrink-0 text-brand-500"
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </FadeIn>

          <div className="flex flex-col gap-6 lg:col-span-2">
            <FadeIn delay={0.1}>
              <Card>
                <h3 className="mb-4 text-lg font-semibold text-surface-900 dark:text-white">
                  Core Strengths
                </h3>
                <div className="flex flex-wrap gap-2">
                  {about.strengths.map((strength) => (
                    <span
                      key={strength}
                      className="rounded-lg bg-brand-500/10 px-3 py-1.5 text-sm font-medium text-brand-700 dark:text-brand-300"
                    >
                      {strength}
                    </span>
                  ))}
                </div>
              </Card>
            </FadeIn>

            <FadeIn delay={0.2}>
              <Card>
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand-500/10 text-brand-600 dark:text-brand-400">
                    <GraduationCap size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-surface-900 dark:text-white">
                      {education.degree}
                    </h3>
                    <p className="text-sm text-brand-600 dark:text-brand-400">
                      {education.school}
                    </p>
                    <p className="mt-1 text-sm text-surface-500">{education.period}</p>
                    <p className="mt-3 text-sm leading-relaxed text-surface-600 dark:text-surface-400">
                      {education.description}
                    </p>
                  </div>
                </div>
              </Card>
            </FadeIn>
          </div>
        </div>
      </Container>
    </section>
  );
}
