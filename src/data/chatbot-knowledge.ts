import { portfolioData } from "./portfolio";

export interface KnowledgeEntry {
  keywords: string[];
  answer: string;
  category: string;
}

export const chatbotKnowledge: KnowledgeEntry[] = [
  {
    keywords: ["who", "about", "background", "introduce", "yourself", "name"],
    category: "about",
    answer: `I'm the portfolio assistant for ${portfolioData.personal.name}, a ${portfolioData.personal.title} based in ${portfolioData.personal.location}. ${portfolioData.about.summary}`,
  },
  {
    keywords: ["experience", "years", "career", "work history", "job"],
    category: "experience",
    answer: `${portfolioData.personal.name} has ${portfolioData.personal.yearsExperience}+ years of professional experience. Currently IT Specialist at M5nity Global Corporation (Oct 2025–Present), previously IT Associate at EntrePro Inc. (2023–2025) and IT Staff at Royal Amalgamated Product, Inc. (2020–2023). Built production MLM, e-commerce, hub, and barangay systems from scratch at M5nity.`,
  },
  {
    keywords: [
      "skills",
      "technologies",
      "tech stack",
      "programming",
      "languages",
      "frameworks",
    ],
    category: "skills",
    answer: `Core skills include:\n• Frontend: React, TypeScript, JavaScript, Tailwind CSS, Bootstrap\n• Backend: PHP, Laravel, CodeIgniter, Python, VB.NET\n• Database: MySQL, query optimization, data modeling\n• DevOps: Git, system administration, hardware deployment\n• Other: REST APIs, MVC architecture, legacy modernization`,
  },
  {
    keywords: [
      "react",
      "laravel",
      "php",
      "mysql",
      "javascript",
      "typescript",
      "tailwind",
    ],
    category: "skills",
    answer: `Yes! ${portfolioData.personal.firstName} is proficient in ${portfolioData.personal.name.includes("Dexter") ? "these" : "those"} technologies. React and Laravel are primary tools for modern full-stack development, with extensive PHP/MySQL experience from enterprise projects.`,
  },
  {
    keywords: ["projects", "portfolio", "work", "built", "applications"],
    category: "projects",
    answer: `Featured projects include:\n• M5nity MLM Platform — built from scratch at M5nity Global Corporation\n• M5nity E-Commerce — shop.m5nity-global-corp.com\n• M5nity Hub — internal admin portal\n• Barangay MIS — online document request system\n• EntrePro MLM Platform — 2,000+ users\n• E-Commerce Platform — 40% performance improvement\n• HRIS, Student Attendance, and more`,
  },
  {
    keywords: ["mlm", "multi-level", "binary tree", "entrepro"],
    category: "projects",
    answer: `The MLM Platform at EntrePro handles 2,000+ active users with custom binary tree alignment algorithms, real-time downline tracking, and commission calculations. Built with PHP, Laravel, and MySQL.`,
  },
  {
    keywords: ["ecommerce", "e-commerce", "shop", "store"],
    category: "projects",
    answer: `The E-Commerce Platform was optimized for performance — reducing load times by 40% through query optimization and frontend improvements. Built with Laravel, React, and MySQL at EntrePro Inc.`,
  },
  {
    keywords: ["education", "degree", "university", "school", "graduate"],
    category: "education",
    answer: `${portfolioData.personal.name} holds a ${portfolioData.education.degree} from ${portfolioData.education.school} (${portfolioData.education.period}).`,
  },
  {
    keywords: ["contact", "email", "phone", "reach", "hire", "available"],
    category: "contact",
    answer: `You can reach ${portfolioData.personal.firstName} at:\n• Email: ${portfolioData.personal.email}\n• Phone: ${portfolioData.personal.phone}\n• Location: ${portfolioData.personal.location}\n• GitHub: ${portfolioData.personal.github}\n\nFeel free to use the contact form on this page!`,
  },
  {
    keywords: ["resume", "cv", "download"],
    category: "contact",
    answer: `You can download Dexter's CV using the "Download Resume" button in the hero or contact section: /resume/morales-dexter-cv.pdf. It covers full-stack development experience, enterprise projects at EntrePro Inc., and technical skills.`,
  },
  {
    keywords: ["services", "offer", "hire for", "freelance", "consulting"],
    category: "services",
    answer: `Services offered:\n• Full-Stack Web Development\n• REST API Development\n• Database Design & Optimization\n• Custom Web Applications\n• Legacy System Modernization\n• Technical Support & Integration`,
  },
  {
    keywords: ["location", "where", "based", "philippines", "laguna"],
    category: "contact",
    answer: `${portfolioData.personal.name} is based in ${portfolioData.personal.location} and is open to remote and on-site opportunities.`,
  },
  {
    keywords: ["strengths", "highlights", "achievements", "accomplishments"],
    category: "about",
    answer: `Key highlights:\n${portfolioData.about.highlights.map((h) => `• ${h}`).join("\n")}`,
  },
  {
    keywords: [
      "m5nity",
      "current job",
      "current role",
      "it specialist",
      "global corporation",
    ],
    category: "experience",
    answer: `Dexter is IT Specialist at M5nity Global Corporation (October 2025–Present). He built their systems from scratch using Laravel, React, MySQL, Tailwind CSS, Git, and Laravel Forge.\n\nLive products:\n• MLM Platform — m5nity-global-corp.com\n• E-Commerce — shop.m5nity-global-corp.com/ecomm\n• M5nity Hub — hub.m5nity-global-corp.com\n• Barangay MIS — qiqimutech-bmis.m5nity-global-corp.com`,
  },
  {
    keywords: ["performance", "optimization", "speed", "fast"],
    category: "experience",
    answer: `A major achievement was reducing e-commerce platform load times by 40% through database query optimization and frontend component improvements at EntrePro Inc.`,
  },
];

export const suggestedQuestions = [
  "What is your experience?",
  "What technologies do you use?",
  "Tell me about your projects",
  "How can I contact you?",
  "What services do you offer?",
  "What are your key achievements?",
];

export const chatbotFallback =
  "I don't have specific information about that, but I'd recommend reaching out directly! You can email Dexter at morales.dexter.0427@gmail.com or use the contact form below. Is there something else I can help with?";

export const chatbotGreeting = `Hi! I'm Dexter's portfolio assistant. I can answer questions about his background, skills, projects, and experience. What would you like to know?`;
