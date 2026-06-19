import { motion } from 'framer-motion';
import { ArrowRight, Download, Mail, MapPin } from 'lucide-react';
import { portfolioData } from '../../data/portfolio';
import { Button } from '../ui/Button';
import { Container } from '../ui/Container';
import { FadeIn } from '../ui/FadeIn';

export function Hero() {
  const { personal, stats } = portfolioData;

  return (
    <section className="relative flex min-h-screen items-center overflow-hidden pt-20">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 right-0 h-[500px] w-[500px] rounded-full bg-brand-500/10 blur-3xl" />
        <div className="absolute -bottom-20 -left-20 h-[400px] w-[400px] rounded-full bg-cyan-500/10 blur-3xl" />
        <div
          className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]"
          style={{
            backgroundImage: `radial-gradient(circle, currentColor 1px, transparent 1px)`,
            backgroundSize: '24px 24px',
          }}
        />
      </div>

      <Container className="relative py-20 lg:py-32">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <FadeIn>
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-brand-500/20 bg-brand-500/5 px-4 py-2 text-sm font-medium text-brand-700 dark:text-brand-300">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
                </span>
                Available for opportunities
              </div>
            </FadeIn>

            <FadeIn delay={0.1}>
              <h1 className="text-4xl font-extrabold tracking-tight text-surface-900 sm:text-5xl lg:text-6xl dark:text-white">
                Hi, I&apos;m{' '}
                <span className="text-gradient">{personal.firstName}</span>
              </h1>
            </FadeIn>

            <FadeIn delay={0.2}>
              <p className="mt-2 text-2xl font-semibold text-surface-700 sm:text-3xl dark:text-surface-300">
                {personal.title}
              </p>
            </FadeIn>

            <FadeIn delay={0.3}>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-surface-600 dark:text-surface-400">
                {personal.tagline}
              </p>
            </FadeIn>

            <FadeIn delay={0.4}>
              <div className="mt-4 flex items-center gap-2 text-sm text-surface-500">
                <MapPin size={16} className="shrink-0" />
                {personal.location}
              </div>
            </FadeIn>

            <FadeIn delay={0.5}>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-4">
                <Button href="#projects" size="lg" className="w-full sm:w-auto">
                  View Projects <ArrowRight size={18} />
                </Button>
                <Button href={personal.resumeUrl} variant="outline" size="lg" className="w-full sm:w-auto" external>
                  <Download size={18} /> Download Resume
                </Button>
                <Button href="#contact" variant="secondary" size="lg" className="w-full sm:w-auto">
                  <Mail size={18} /> Contact Me
                </Button>
              </div>
            </FadeIn>
          </div>

          <FadeIn delay={0.3} direction="left">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="relative rounded-3xl border border-surface-200 bg-white p-8 shadow-2xl shadow-brand-500/10 dark:border-surface-700 dark:bg-surface-900"
              >
                <div className="mb-6 flex items-center gap-3">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-500 to-cyan-500 text-2xl font-bold text-white">
                    DP
                  </div>
                  <div>
                    <p className="font-semibold text-surface-900 dark:text-white">
                      {personal.name}
                    </p>
                    <p className="text-sm text-surface-500">{personal.title}</p>
                  </div>
                </div>

                <div className="space-y-3 font-mono text-sm">
                  <div className="rounded-lg bg-surface-50 p-3 dark:bg-surface-800">
                    <span className="text-brand-600 dark:text-brand-400">const</span>{' '}
                    <span className="text-surface-900 dark:text-white">developer</span>{' '}
                    <span className="text-surface-500">=</span> {'{'}
                  </div>
                  <div className="rounded-lg bg-surface-50 p-3 pl-6 dark:bg-surface-800">
                    <span className="text-surface-500">role:</span>{' '}
                    <span className="text-green-600 dark:text-green-400">
                      &quot;{personal.title}&quot;
                    </span>,
                  </div>
                  <div className="rounded-lg bg-surface-50 p-3 pl-6 dark:bg-surface-800">
                    <span className="text-surface-500">stack:</span>{' '}
                    <span className="text-amber-600 dark:text-amber-400">
                      [&quot;React&quot;, &quot;Laravel&quot;, &quot;MySQL&quot;]
                    </span>,
                  </div>
                  <div className="rounded-lg bg-surface-50 p-3 pl-6 dark:bg-surface-800">
                    <span className="text-surface-500">experience:</span>{' '}
                    <span className="text-purple-600 dark:text-purple-400">
                      &quot;{personal.yearsExperience}+ years&quot;
                    </span>
                  </div>
                  <div className="rounded-lg bg-surface-50 p-3 dark:bg-surface-800">{'}'}</div>
                </div>
              </motion.div>

              <div className="absolute -right-4 -bottom-4 -z-10 h-full w-full rounded-3xl bg-gradient-to-br from-brand-500/20 to-cyan-500/20" />
            </div>
          </FadeIn>
        </div>

        <FadeIn delay={0.6}>
          <div className="mt-20 grid grid-cols-2 gap-6 sm:grid-cols-4">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-2xl border border-surface-200 bg-white/50 p-6 text-center backdrop-blur-sm dark:border-surface-800 dark:bg-surface-900/50"
              >
                <p className="text-3xl font-bold text-gradient">{stat.value}</p>
                <p className="mt-1 text-sm text-surface-600 dark:text-surface-400">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
