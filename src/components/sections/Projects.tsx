import { useState } from 'react';
import { ExternalLink } from 'lucide-react';
import { GitHubIcon } from '../ui/SocialIcons';
import { portfolioData } from '../../data/portfolio';
import { Container } from '../ui/Container';
import { SectionHeading } from '../ui/SectionHeading';
import { FadeIn } from '../ui/FadeIn';
import { Badge } from '../ui/Badge';
import { Button } from '../ui/Button';
import { ProjectImageGallery } from '../ui/ProjectImageGallery';

function getProjectImages(project: (typeof portfolioData.projects)[number]): string[] {
  if (project.images?.length) return project.images;
  if (project.image) return [project.image];
  return [];
}

type Filter = 'all' | 'featured' | 'enterprise' | 'freelance';

const filters: { label: string; value: Filter }[] = [
  { label: 'All', value: 'all' },
  { label: 'Featured', value: 'featured' },
  { label: 'Enterprise', value: 'enterprise' },
  { label: 'Freelance', value: 'freelance' },
];

export function Projects() {
  const [filter, setFilter] = useState<Filter>('all');

  const filtered = portfolioData.projects.filter((p) => {
    if (filter === 'all') return true;
    if (filter === 'featured') return p.featured;
    return p.category === filter;
  });

  return (
    <section id="projects" className="section-padding bg-surface-100/50 dark:bg-surface-900/30">
      <Container>
        <SectionHeading
          label="Projects"
          title="Featured work"
          description="Production applications solving real business problems."
        />

        <div className="mb-10 flex flex-wrap justify-center gap-2">
          {filters.map((f) => (
            <button
              key={f.value}
              onClick={() => setFilter(f.value)}
              className={`rounded-xl px-5 py-2.5 text-sm font-medium transition-all ${
                filter === f.value
                  ? 'bg-brand-600 text-white shadow-lg shadow-brand-600/25'
                  : 'bg-white text-surface-600 hover:bg-surface-50 dark:bg-surface-800 dark:text-surface-300 dark:hover:bg-surface-700'
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {filtered.map((project, i) => (
            <FadeIn key={project.id} delay={i * 0.05}>
              <article className="group overflow-hidden rounded-2xl border border-surface-200 bg-white shadow-sm transition-shadow hover:shadow-lg dark:border-surface-800 dark:bg-surface-900">
                <ProjectImageGallery
                  images={getProjectImages(project)}
                  title={project.title}
                  featured={project.featured}
                />

                <div className="p-6">
                  <div className="mb-2 flex items-center justify-between">
                    <span className="text-sm text-brand-600 dark:text-brand-400">
                      {project.year}
                    </span>
                    <span className="rounded-md bg-surface-100 px-2 py-0.5 text-xs font-medium capitalize text-surface-600 dark:bg-surface-800 dark:text-surface-400">
                      {project.category}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-surface-900 dark:text-white">
                    {project.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-surface-600 dark:text-surface-400">
                    {project.description}
                  </p>

                  <div className="mt-4">
                    <p className="text-xs font-semibold uppercase tracking-wider text-surface-500">
                      Problem Solved
                    </p>
                    <p className="mt-1 text-sm text-surface-600 dark:text-surface-400">
                      {project.problem}
                    </p>
                  </div>

                  <ul className="mt-4 space-y-1">
                    {project.features.slice(0, 3).map((f) => (
                      <li
                        key={f}
                        className="flex gap-2 text-sm text-surface-600 dark:text-surface-400"
                      >
                        <span className="text-brand-500">✓</span> {f}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="brand">
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  <div className="mt-6 flex gap-3">
                    {project.liveUrl && (
                      <Button href={project.liveUrl} variant="primary" size="sm" external>
                        <ExternalLink size={16} /> Live Demo
                      </Button>
                    )}
                    {project.githubUrl && (
                      <Button href={project.githubUrl} variant="outline" size="sm" external>
                        <GitHubIcon size={16} /> GitHub
                      </Button>
                    )}
                  </div>
                </div>
              </article>
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  );
}
