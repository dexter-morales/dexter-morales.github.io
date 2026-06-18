export interface SocialLink {
  name: string;
  url: string;
  label: string;
}

export interface SkillCategory {
  title: string;
  skills: string[];
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  period: string;
  location: string;
  description: string;
  achievements: string[];
  technologies: string[];
}

export interface Project {
  id: string;
  title: string;
  category: 'web' | 'enterprise' | 'freelance';
  year: string;
  description: string;
  problem: string;
  features: string[];
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  /** @deprecated Use `images` instead. Kept for backward compatibility. */
  image?: string;
  images?: string[];
  featured: boolean;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  quote: string;
  avatar?: string;
}

export interface NavLink {
  label: string;
  href: string;
}

export interface PersonalInfo {
  name: string;
  firstName: string;
  title: string;
  tagline: string;
  email: string;
  phone: string;
  location: string;
  birthday: string;
  resumeUrl: string;
  github: string;
  linkedin: string;
  yearsExperience: number;
}

export interface PortfolioData {
  personal: PersonalInfo;
  about: {
    summary: string;
    highlights: string[];
    strengths: string[];
  };
  education: {
    degree: string;
    school: string;
    period: string;
    description: string;
  };
  skills: SkillCategory[];
  experience: ExperienceItem[];
  projects: Project[];
  services: Service[];
  testimonials: Testimonial[];
  stats: { label: string; value: string }[];
  navLinks: NavLink[];
}
