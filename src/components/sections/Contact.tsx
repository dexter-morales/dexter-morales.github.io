import { useState, type FormEvent } from 'react';
import { Download, Mail, MapPin, Phone, Send } from 'lucide-react';
import { GitHubIcon, LinkedInIcon } from '../ui/SocialIcons';
import { portfolioData } from '../../data/portfolio';
import { Container } from '../ui/Container';
import { SectionHeading } from '../ui/SectionHeading';
import { FadeIn } from '../ui/FadeIn';
import { Card } from '../ui/Card';
import { Button } from '../ui/Button';
import { ToastContainer } from '../ui/Toast';
import { useToast } from '../../hooks/useToast';
import {
  buildMailtoUrl,
  openMailto,
  validateContactForm,
} from '../../lib/contact-form';

export function Contact() {
  const { personal } = portfolioData;
  const { toasts, dismiss, success, error } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isSubmitting) return;

    const form = e.currentTarget;
    const data = new FormData(form);
    const result = validateContactForm({
      name: String(data.get('name') ?? ''),
      email: String(data.get('email') ?? ''),
      message: String(data.get('message') ?? ''),
    });

    if (!result.valid || !result.data) {
      error(result.errors[0] ?? 'Please check your input and try again.');
      return;
    }

    setIsSubmitting(true);

    const mailtoUrl = buildMailtoUrl(personal.email, result.data);
    const opened = openMailto(mailtoUrl);

    if (opened) {
      success(
        'Your email app should open with your message ready. Click send there to reach me.',
      );
      form.reset();
    } else {
      error(
        `Could not open your email app. Please email me directly at ${personal.email}.`,
      );
    }

    setIsSubmitting(false);
  };

  const contactInfo = [
    { icon: Mail, label: 'Email', value: personal.email, href: `mailto:${personal.email}` },
    { icon: Phone, label: 'Phone', value: personal.phone, href: `tel:${personal.phone}` },
    { icon: MapPin, label: 'Location', value: personal.location },
    { icon: GitHubIcon, label: 'GitHub', value: 'dexter-morales', href: personal.github },
    { icon: LinkedInIcon, label: 'LinkedIn', value: 'dexter-morales', href: personal.linkedin },
  ];

  return (
    <section id="contact" className="section-padding">
      <ToastContainer toasts={toasts} onDismiss={dismiss} />

      <Container>
        <SectionHeading
          label="Contact"
          title="Let's work together"
          description="Have a project in mind or looking to hire? I'd love to hear from you."
        />

        <div className="grid gap-8 lg:grid-cols-5">
          <FadeIn className="lg:col-span-2">
            <div className="space-y-4">
              {contactInfo.map((item) => (
                <Card key={item.label} hover={false} className="flex items-center gap-4 !p-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-500/10 text-brand-600 dark:text-brand-400">
                    <item.icon size={18} />
                  </div>
                  <div>
                    <p className="text-xs font-medium uppercase tracking-wider text-surface-500">
                      {item.label}
                    </p>
                    {item.href ? (
                      <a
                        href={item.href}
                        target={item.href.startsWith('http') ? '_blank' : undefined}
                        rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                        className="text-sm font-medium text-surface-900 hover:text-brand-600 dark:text-white dark:hover:text-brand-400"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-sm font-medium text-surface-900 dark:text-white">
                        {item.value}
                      </p>
                    )}
                  </div>
                </Card>
              ))}

              <Button href={personal.resumeUrl} variant="outline" className="w-full" external>
                <Download size={18} /> Download Resume
              </Button>
            </div>
          </FadeIn>

          <FadeIn delay={0.1} className="lg:col-span-3">
            <Card hover={false}>
              <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-surface-700 dark:text-surface-300">
                      Name
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      minLength={2}
                      maxLength={100}
                      autoComplete="name"
                      disabled={isSubmitting}
                      className="w-full rounded-xl border border-surface-300 bg-white px-4 py-3 text-sm text-surface-900 transition-colors focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20 focus:outline-none disabled:opacity-60 dark:border-surface-700 dark:bg-surface-800 dark:text-white"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-surface-700 dark:text-surface-300">
                      Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      maxLength={254}
                      autoComplete="email"
                      disabled={isSubmitting}
                      className="w-full rounded-xl border border-surface-300 bg-white px-4 py-3 text-sm text-surface-900 transition-colors focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20 focus:outline-none disabled:opacity-60 dark:border-surface-700 dark:bg-surface-800 dark:text-white"
                      placeholder="you@company.com"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-surface-700 dark:text-surface-300">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    minLength={10}
                    maxLength={5000}
                    rows={5}
                    disabled={isSubmitting}
                    className="w-full resize-none rounded-xl border border-surface-300 bg-white px-4 py-3 text-sm text-surface-900 transition-colors focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20 focus:outline-none disabled:opacity-60 dark:border-surface-700 dark:bg-surface-800 dark:text-white"
                    placeholder="Tell me about your project or opportunity..."
                  />
                </div>
                <p className="text-xs text-surface-500">
                  Messages open in your email app — nothing is stored on this site.
                </p>
                <Button type="submit" size="lg" className="w-full sm:w-auto" disabled={isSubmitting}>
                  <Send size={18} /> {isSubmitting ? 'Opening email...' : 'Send Message'}
                </Button>
              </form>
            </Card>
          </FadeIn>
        </div>
      </Container>
    </section>
  );
}
