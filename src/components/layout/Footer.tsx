import { Mail, ArrowUp } from 'lucide-react';
import { GitHubIcon, LinkedInIcon } from '../ui/SocialIcons';
import { portfolioData } from '../../data/portfolio';
import { Container } from '../ui/Container';

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-surface-200 bg-surface-100 py-12 dark:border-surface-800 dark:bg-surface-900/50">
      <Container>
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <p className="text-lg font-bold text-surface-900 dark:text-white">
              <span className="text-gradient">{portfolioData.personal.firstName}</span>
              <span className="text-surface-500">.dev</span>
            </p>
            <p className="mt-2 text-sm text-surface-600 dark:text-surface-400">
              {portfolioData.personal.title}
            </p>
            <p className="mt-1 text-sm text-surface-500">
              {portfolioData.personal.location}
            </p>
          </div>

          <div>
            <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-surface-500">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {portfolioData.navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-surface-600 transition-colors hover:text-brand-600 dark:text-surface-400 dark:hover:text-brand-400"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-surface-500">
              Connect
            </h3>
            <div className="flex gap-3">
              <a
                href={`mailto:${portfolioData.personal.email}`}
                aria-label="Email"
                className="rounded-lg p-2 text-surface-600 transition-colors hover:bg-surface-200 hover:text-brand-600 dark:text-surface-400 dark:hover:bg-surface-800 dark:hover:text-brand-400"
              >
                <Mail size={20} />
              </a>
              <a
                href={portfolioData.personal.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="rounded-lg p-2 text-surface-600 transition-colors hover:bg-surface-200 hover:text-brand-600 dark:text-surface-400 dark:hover:bg-surface-800 dark:hover:text-brand-400"
              >
                <GitHubIcon size={20} />
              </a>
              <a
                href={portfolioData.personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="rounded-lg p-2 text-surface-600 transition-colors hover:bg-surface-200 hover:text-brand-600 dark:text-surface-400 dark:hover:bg-surface-800 dark:hover:text-brand-400"
              >
                <LinkedInIcon size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-surface-200 pt-8 sm:flex-row dark:border-surface-800">
          <p className="text-sm text-surface-500">
            &copy; {year} {portfolioData.personal.name}. All rights reserved.
          </p>
          <a
            href="#"
            className="flex items-center gap-1 text-sm text-surface-500 transition-colors hover:text-brand-600 dark:hover:text-brand-400"
            aria-label="Back to top"
          >
            Back to top <ArrowUp size={16} />
          </a>
        </div>
      </Container>
    </footer>
  );
}
