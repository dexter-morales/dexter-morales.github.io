import type { PortfolioData } from '../types/portfolio';

const SITE_URL = 'https://dexter-morales.github.io';

export function buildJsonLd(data: PortfolioData) {
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Person',
        '@id': `${SITE_URL}/#person`,
        name: data.personal.name,
        jobTitle: data.personal.title,
        email: data.personal.email,
        telephone: data.personal.phone,
        url: SITE_URL,
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Biñan City',
          addressRegion: 'Laguna',
          addressCountry: 'PH',
        },
        sameAs: [data.personal.github, data.personal.linkedin],
        knowsAbout: data.skills.flatMap((c) => c.skills),
        description: data.about.summary,
      },
      {
        '@type': 'WebSite',
        '@id': `${SITE_URL}/#website`,
        url: SITE_URL,
        name: `${data.personal.name} | ${data.personal.title}`,
        description: data.personal.tagline,
        author: { '@id': `${SITE_URL}/#person` },
      },
      {
        '@type': 'ProfilePage',
        '@id': `${SITE_URL}/#profile`,
        url: SITE_URL,
        name: `${data.personal.name} Portfolio`,
        mainEntity: { '@id': `${SITE_URL}/#person` },
      },
      ...data.experience.map((job) => ({
        '@type': 'OrganizationRole',
        roleName: job.role,
        startDate: job.period.split('–')[0]?.trim(),
        worksFor: {
          '@type': 'Organization',
          name: job.company,
        },
        description: job.description,
      })),
      ...data.projects
        .filter((p) => p.featured)
        .map((project) => ({
          '@type': 'CreativeWork',
          name: project.title,
          description: project.description,
          dateCreated: project.year,
          url: project.liveUrl ?? SITE_URL,
          keywords: project.technologies.join(', '),
        })),
    ],
  };
}

export function buildPortfolioJson(data: PortfolioData) {
  return {
    name: data.personal.name,
    title: data.personal.title,
    email: data.personal.email,
    phone: data.personal.phone,
    location: data.personal.location,
    website: SITE_URL,
    resume: `${SITE_URL}${data.personal.resumeUrl}`,
    github: data.personal.github,
    linkedin: data.personal.linkedin,
    yearsExperience: data.personal.yearsExperience,
    summary: data.about.summary,
    highlights: data.about.highlights,
    specializations: data.about.specializations,
    technicalSkills: data.about.technicalSkills,
    skills: data.skills,
    education: data.education,
    experience: data.experience.map((job) => ({
      role: job.role,
      company: job.company,
      period: job.period,
      description: job.description,
      achievements: job.achievements,
      technologies: job.technologies,
      links: job.links ?? [],
    })),
    projects: data.projects.map((p) => ({
      title: p.title,
      year: p.year,
      category: p.category,
      featured: p.featured,
      description: p.description,
      problem: p.problem,
      features: p.features,
      technologies: p.technologies,
      liveUrl: p.liveUrl ?? null,
      githubUrl: p.githubUrl ?? null,
    })),
    updatedAt: new Date().toISOString().split('T')[0],
  };
}

export function buildLlmsTxt(data: PortfolioData): string {
  const lines = [
    `# ${data.personal.name}`,
    `> ${data.personal.title} — ${data.personal.location}`,
    '',
    '## Summary',
    data.about.summary,
    '',
    '## Specializations',
    ...data.about.specializations.map((s) => `- ${s}`),
    '',
    data.about.closing,
    '',
    '## Contact',
    `- Email: ${data.personal.email}`,
    `- Phone: ${data.personal.phone}`,
    `- Website: ${SITE_URL}`,
    `- GitHub: ${data.personal.github}`,
    `- LinkedIn: ${data.personal.linkedin}`,
    `- Resume: ${SITE_URL}${data.personal.resumeUrl}`,
    '',
    '## Technical Skills',
    data.about.technicalSkills.join(' • '),
    '',
    '## Skills by Category',
    ...data.skills.map(
      (cat) => `- **${cat.title}:** ${cat.skills.join(', ')}`,
    ),
    '',
    '## Experience',
    ...data.experience.flatMap((job) => [
      `### ${job.role} — ${job.company} (${job.period})`,
      job.description,
      ...job.achievements.map((a) => `- ${a}`),
      ...(job.links?.map((l) => `- [${l.label}](${l.url})`) ?? []),
      '',
    ]),
    '## Featured Projects',
    ...data.projects
      .filter((p) => p.featured)
      .flatMap((p) => [
        `### ${p.title} (${p.year})`,
        p.description,
        `**Problem:** ${p.problem}`,
        `**Tech:** ${p.technologies.join(', ')}`,
        ...(p.liveUrl ? [`**Live:** ${p.liveUrl}`] : []),
        '',
      ]),
    '## Full structured data',
    `- Machine-readable JSON: ${SITE_URL}/portfolio.json`,
  ];

  return lines.join('\n');
}

export function buildCrawlerHtml(data: PortfolioData): string {
  const experienceHtml = data.experience
    .map(
      (job) => `
    <section>
      <h3>${job.role} at ${job.company} (${job.period})</h3>
      <p>${job.description}</p>
      <ul>${job.achievements.map((a) => `<li>${a}</li>`).join('')}</ul>
    </section>`,
    )
    .join('');

  const projectsHtml = data.projects
    .map(
      (p) => `
    <article>
      <h3>${p.title} (${p.year})</h3>
      <p>${p.description}</p>
      <p>Technologies: ${p.technologies.join(', ')}</p>
      ${p.liveUrl ? `<p><a href="${p.liveUrl}">Live demo</a></p>` : ''}
    </article>`,
    )
    .join('');

  return `
  <div id="crawl-content" aria-hidden="true">
    <h1>${data.personal.name} — ${data.personal.title}</h1>
    <p>${data.personal.tagline}</p>
    <p>Contact: ${data.personal.email} | ${data.personal.phone} | ${data.personal.location}</p>
    <h2>About</h2>
    <p>${data.about.summary}</p>
    <h2>Experience</h2>
    ${experienceHtml}
    <h2>Projects</h2>
    ${projectsHtml}
  </div>`.trim();
}

export { SITE_URL };
