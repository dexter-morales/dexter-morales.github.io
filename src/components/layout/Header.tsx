import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { portfolioData } from '../../data/portfolio';
import { ThemeToggle } from './ThemeToggle';
import { Button } from '../ui/Button';
import { Container } from '../ui/Container';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isMobileOpen]);

  const closeMobile = () => setIsMobileOpen(false);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'glass shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <Container>
        <nav className="flex h-16 items-center justify-between lg:h-20" aria-label="Main navigation">
          <a
            href="#"
            className="text-lg font-bold tracking-tight text-surface-900 dark:text-white"
            onClick={closeMobile}
          >
            <span className="text-gradient">{portfolioData.personal.firstName}</span>
            <span className="text-surface-500 dark:text-surface-400">.dev</span>
          </a>

          <div className="hidden items-center gap-1 lg:flex">
            {portfolioData.navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="rounded-lg px-4 py-2 text-sm font-medium text-surface-600 transition-colors hover:text-brand-600 dark:text-surface-300 dark:hover:text-brand-400"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <ThemeToggle />
            <Button href="#contact" size="sm" className="hidden sm:inline-flex">
              Hire Me
            </Button>
            <button
              className="rounded-xl p-2.5 text-surface-600 lg:hidden dark:text-surface-300"
              onClick={() => setIsMobileOpen(!isMobileOpen)}
              aria-label={isMobileOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isMobileOpen}
            >
              {isMobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </nav>
      </Container>

      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="glass border-t border-surface-200 lg:hidden dark:border-surface-800"
          >
            <Container className="flex flex-col gap-1 py-4">
              {portfolioData.navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={closeMobile}
                  className="rounded-lg px-4 py-3 text-base font-medium text-surface-700 hover:bg-surface-100 dark:text-surface-200 dark:hover:bg-surface-800"
                >
                  {link.label}
                </a>
              ))}
              <Button href="#contact" className="mt-2 w-full" onClick={closeMobile}>
                Hire Me
              </Button>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
