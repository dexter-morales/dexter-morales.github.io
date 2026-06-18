import { Briefcase } from 'lucide-react';
import { portfolioData } from '../../data/portfolio';
import { Container } from '../ui/Container';
import { SectionHeading } from '../ui/SectionHeading';
import { FadeIn } from '../ui/FadeIn';
import { Badge } from '../ui/Badge';

export function Experience() {
  return (
    <section id="experience" className="section-padding">
      <Container>
        <SectionHeading
          label="Experience"
          title="Professional journey"
          description="Building enterprise platforms and solving complex technical challenges."
        />

        <div className="relative mx-auto max-w-3xl">
          <div className="absolute top-0 bottom-0 left-6 w-px bg-surface-200 dark:bg-surface-700 md:left-1/2 md:-translate-x-px" />

          {portfolioData.experience.map((job, i) => (
            <FadeIn key={job.id} delay={i * 0.1}>
              <div
                className={`relative mb-12 flex flex-col md:flex-row ${
                  i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                <div className="hidden w-1/2 md:block" />

                <div className="absolute left-6 z-10 flex h-12 w-12 -translate-x-1/2 items-center justify-center rounded-full border-4 border-surface-50 bg-brand-500 text-white md:left-1/2 dark:border-surface-950">
                  <Briefcase size={18} />
                </div>

                <div className="w-full pl-16 md:w-1/2 md:pl-0">
                  <div
                    className={`rounded-2xl border border-surface-200 bg-white p-6 shadow-sm dark:border-surface-800 dark:bg-surface-900 ${
                      i % 2 === 0 ? 'md:mr-10' : 'md:ml-10'
                    }`}
                  >
                    <div className="mb-1 flex flex-wrap items-center gap-2">
                      <span className="text-sm font-medium text-brand-600 dark:text-brand-400">
                        {job.period}
                      </span>
                      <span className="text-surface-300 dark:text-surface-600">•</span>
                      <span className="text-sm text-surface-500">{job.location}</span>
                    </div>
                    <h3 className="text-xl font-bold text-surface-900 dark:text-white">
                      {job.role}
                    </h3>
                    <p className="text-brand-600 dark:text-brand-400">{job.company}</p>
                    <p className="mt-3 text-sm leading-relaxed text-surface-600 dark:text-surface-400">
                      {job.description}
                    </p>

                    <ul className="mt-4 space-y-2">
                      {job.achievements.map((item) => (
                        <li
                          key={item}
                          className="flex gap-2 text-sm text-surface-600 dark:text-surface-400"
                        >
                          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-500" />
                          {item}
                        </li>
                      ))}
                    </ul>

                    <div className="mt-4 flex flex-wrap gap-2">
                      {job.technologies.map((tech) => (
                        <Badge key={tech} variant="brand">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  );
}
