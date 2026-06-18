import { MessageSquareQuote, Quote } from 'lucide-react';
import { portfolioData } from '../../data/portfolio';
import { Container } from '../ui/Container';
import { SectionHeading } from '../ui/SectionHeading';
import { FadeIn } from '../ui/FadeIn';
import { Card } from '../ui/Card';

export function Testimonials() {
  const { testimonials } = portfolioData;
  const hasTestimonials = testimonials.length > 0;

  return (
    <section id="testimonials" className="section-padding bg-surface-100/50 dark:bg-surface-900/30">
      <Container>
        <SectionHeading
          label="Testimonials"
          title="What people say"
          description={
            hasTestimonials
              ? 'Feedback from colleagues, clients, and collaborators.'
              : 'Testimonials from colleagues and clients will appear here.'
          }
        />

        {hasTestimonials ? (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((t, i) => (
              <FadeIn key={t.id} delay={i * 0.1}>
                <Card className="h-full">
                  <Quote size={24} className="mb-4 text-brand-500/50" />
                  <p className="text-surface-600 italic dark:text-surface-300">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                  <div className="mt-6 flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-500/10 text-sm font-bold text-brand-600">
                      {t.name.charAt(0)}
                    </div>
                    <div>
                      <p className="font-semibold text-surface-900 dark:text-white">
                        {t.name}
                      </p>
                      <p className="text-sm text-surface-500">
                        {t.role}, {t.company}
                      </p>
                    </div>
                  </div>
                </Card>
              </FadeIn>
            ))}
          </div>
        ) : (
          <FadeIn>
            <Card hover={false} className="mx-auto max-w-2xl text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-brand-500/10 text-brand-600 dark:text-brand-400">
                <MessageSquareQuote size={32} />
              </div>
              <h3 className="text-lg font-semibold text-surface-900 dark:text-white">
                Testimonials coming soon
              </h3>
              <p className="mt-2 text-surface-600 dark:text-surface-400">
                This section is ready for client and colleague testimonials. Add entries
                in{' '}
                <code className="rounded bg-surface-100 px-1.5 py-0.5 text-sm dark:bg-surface-800">
                  src/data/portfolio.ts
                </code>{' '}
                to display them here.
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-3">
                {[1, 2, 3].map((n) => (
                  <div
                    key={n}
                    className="rounded-xl border border-dashed border-surface-300 p-6 dark:border-surface-700"
                  >
                    <div className="mx-auto mb-3 h-10 w-10 rounded-full bg-surface-200 dark:bg-surface-700" />
                    <div className="mx-auto h-3 w-24 rounded bg-surface-200 dark:bg-surface-700" />
                    <div className="mx-auto mt-2 h-2 w-16 rounded bg-surface-100 dark:bg-surface-800" />
                  </div>
                ))}
              </div>
            </Card>
          </FadeIn>
        )}
      </Container>
    </section>
  );
}
