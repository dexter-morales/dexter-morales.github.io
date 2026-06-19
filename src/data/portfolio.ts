import type { PortfolioData } from "../types/portfolio";

export const portfolioData: PortfolioData = {
  personal: {
    name: "Dexter Paul Morales",
    firstName: "Dexter",
    title: "Full-Stack Web Developer",
    tagline:
      "I build scalable, production-ready web applications — from MLM platforms serving 5,000+ users to enterprise HR and e-commerce systems.",
    email: "morales.dexter.0427@gmail.com",
    phone: "0916-706-1282",
    location: "Biñan City, Laguna, Philippines",
    birthday: "April 27, 1998",
    resumeUrl: "/resume/morales-dexter-cv.pdf",
    github: "https://github.com/dexter-morales",
    linkedin: "https://www.linkedin.com/in/dexter-morales",
    yearsExperience: 5,
  },

  about: {
    summary:
      "Results-driven Full-Stack Web Developer with 4+ years of hands-on experience in PHP, Laravel, React, and MySQL. Proven track record of building scalable MLM and e-commerce platforms from scratch, refactoring legacy systems for performance, and delivering enterprise-grade web solutions. Passionate about clean code, performance optimization, and user-centric design.",
    highlights: [
      "Architected and built M5nity Global Corporation's MLM, e-commerce, hub, and barangay systems from scratch",
      "Built MLM platform handling 5,000+ active users with custom binary tree logic",
      "Reduced e-commerce load times by 40% through query and frontend optimization",
      "BS Information Technology graduate from Pamantasan ng Lungsod ng Muntinlupa",
    ],
    strengths: [
      "Full-stack architecture & API design",
      "Legacy system modernization",
      "Performance optimization",
      "Hardware-software integration",
      "System debugging & troubleshooting",
      "Independent & team collaboration",
    ],
  },

  education: {
    degree: "Bachelor of Science in Information Technology",
    school: "Pamantasan ng Lungsod ng Muntinlupa (PLMun)",
    period: "2017 – 2021",
    description:
      "Comprehensive training in programming languages, web development, computer hardware, network administration, cybersecurity, and system analysis.",
  },

  skills: [
    {
      title: "Frontend",
      skills: [
        "React",
        "TypeScript",
        "JavaScript",
        "HTML5",
        "CSS3",
        "Tailwind CSS",
        "Bootstrap",
        "Responsive Design",
      ],
    },
    {
      title: "Backend",
      skills: [
        "PHP",
        "Laravel",
        "CodeIgniter",
        "REST APIs",
        "Python",
        "VB.NET",
        "Node.js",
      ],
    },
    {
      title: "Database",
      skills: [
        "MySQL",
        "Database Design",
        "Query Optimization",
        "Data Modeling",
      ],
    },
    {
      title: "DevOps & Tools",
      skills: [
        "Git",
        "GitHub",
        "Laravel Forge",
        "VS Code",
        "Crystal Reports",
        "Hardware Deployment",
        "System Administration",
      ],
    },
    {
      title: "Frameworks & Patterns",
      skills: [
        "MVC Architecture",
        "Component Architecture",
        "Agile Development",
        "CI/CD Basics",
      ],
    },
    {
      title: "Other",
      skills: [
        "Arduino (C)",
        "Adobe Photoshop",
        "Video Editing",
        "Technical Support",
        "Biometrics Integration",
      ],
    },
  ],

  experience: [
    {
      id: "m5nity",
      role: "IT Specialist",
      company: "M5nity Global Corporation",
      period: "October 2025 – Present",
      location: "Philippines",
      description:
        "Lead full-stack developer building production web systems from the ground up — MLM platform, e-commerce store, internal hub portal, and barangay management system deployed via Laravel Forge.",
      achievements: [
        "Developed the company's core MLM platform from scratch with member management, genealogy tracking, and commission workflows",
        "Built and launched the e-commerce storefront for product sales and order processing",
        "Created M5nity Hub — an internal admin portal for operations, authentication, and system management",
        "Delivered a Barangay Management Information System for online document requests and local government workflows",
        "Owned full-stack architecture, database design, API development, and production deployment on Laravel Forge",
        "Maintained version control and release workflows using Git across all production applications",
      ],
      technologies: [
        "Laravel",
        "React",
        "MySQL",
        "Tailwind CSS",
        "Git",
        "Laravel Forge",
        "REST APIs",
      ],
      links: [
        { label: "MLM Platform", url: "https://m5nity-global-corp.com/" },
        { label: "E-Commerce", url: "https://shop.m5nity-global-corp.com/ecomm" },
        { label: "M5nity Hub", url: "https://hub.m5nity-global-corp.com/login" },
        {
          label: "Barangay MIS",
          url: "https://qiqimutech-bmis.m5nity-global-corp.com/",
        },
      ],
    },
    {
      id: "entrepro",
      role: "IT Associate",
      company: "EntrePro Inc.",
      period: "2023 – 2025",
      location: "Philippines",
      description:
        "Full-stack web developer responsible for MLM, e-commerce, and back-office platforms — from architecture and feature development to performance optimization and production support.",
      achievements: [
        "Built a scalable MLM system handling 5,000+ users with custom binary tree logic, ensuring long-term maintainability and real-time performance",
        "Refactored and modernized legacy MLM logic, resolving system conflicts and improving performance",
        "Built a custom algorithm for binary tree alignment and accurate downline/member count reporting",
        "Configured and deployed hardware and software environments to support internal development and employee workstations",
        "Diagnosed and resolved inconsistencies in the company's e-commerce platform, improving reliability and user experience",
        "Enhanced e-commerce performance by optimizing queries and frontend components, reducing load time by 40% and increasing user retention",
        "Maintained and upgraded the Back Office web portal by identifying issues and implementing robust code improvements",
      ],
      technologies: [
        "PHP",
        "Laravel",
        "React",
        "MySQL",
        "JavaScript",
        "Tailwind CSS",
        "Bootstrap",
        "REST APIs",
        "Git",
      ],
    },
    {
      id: "rapi",
      role: "IT Staff",
      company: "Royal Amalgamated Product, Inc.",
      period: "2020 – 2023",
      location: "Philippines",
      description:
        "Provided technical support, system administration, and web development for enterprise operations.",
      achievements: [
        "Developed Web-Based Employee Management System with Payroll, synced with Biometrics attendance (65% complete)",
        "Delivered onsite technical support and troubleshooting for all employees",
        "Configured hardware, devices, and software for employee workstations",
        "Used Crystal Reports for sales reporting and data analysis",
        "Investigated and resolved printer, copier, and peripheral device issues",
        "Explained technical concepts clearly to non-technical stakeholders",
      ],
      technologies: [
        "PHP",
        "VB.NET",
        "Crystal Reports",
        "MySQL",
        "Hardware Support",
        "Biometrics",
      ],
    },
  ],

  projects: [
    {
      id: "mlm-platform",
      title: "MLM Platform",
      category: "enterprise",
      year: "2023 – 2025",
      description:
        "Enterprise multi-level marketing platform with custom binary tree logic, real-time member tracking, and commission calculations.",
      problem:
        "The company needed a scalable MLM system that could handle thousands of members with accurate binary tree alignment and real-time reporting.",
      features: [
        "Custom binary tree algorithm",
        "5,000+ active user support",
        "Real-time downline tracking",
        "Commission calculation engine",
        "Member dashboard & reporting",
      ],
      technologies: ["PHP", "Laravel", "MySQL", "JavaScript", "REST APIs"],
      images: [
        "/projects/mlm/image-1.jpg",
        "/projects/mlm/image-2.jpg",
        "/projects/mlm/image-3.jpg",
        "/projects/mlm/image-4.jpg",
      ],
      featured: true,
    },
    {
      id: "ecommerce",
      title: "E-Commerce Platform",
      category: "enterprise",
      year: "2023 – 2025",
      description:
        "Full-featured e-commerce platform with optimized performance, inventory management, and order processing.",
      problem:
        "Legacy e-commerce system had performance bottlenecks and data inconsistencies affecting user experience and sales.",
      features: [
        "40% faster load times",
        "Query optimization",
        "Order management",
        "Inventory tracking",
        "Payment integration",
      ],
      technologies: ["PHP", "Laravel", "MySQL", "React", "JavaScript"],
      // image: "/projects/ecommerce.svg",
      images: [
        "/projects/ecomm/image-1.jpg",
        "/projects/ecomm/image-2.jpg",
        "/projects/ecomm/image-3.jpg",
        "/projects/ecomm/image-4.jpg",
        "/projects/ecomm/image-5.jpg",
        "/projects/ecomm/image-6.jpg",
        "/projects/ecomm/image-7.jpg",
      ],
      featured: true,
    },
    {
      id: "back-office",
      title: "Back Office Portal",
      category: "enterprise",
      year: "2023 – 2025",
      description:
        "Internal administration portal for managing members, transactions, reports, and system configurations.",
      problem:
        "Administrators needed a centralized portal to manage operations, generate reports, and monitor system health.",
      features: [
        "Admin dashboard",
        "Member management",
        "Transaction reporting",
        "System configuration",
        "Role-based access",
      ],
      technologies: ["PHP", "Laravel", "MySQL", "JavaScript"],
      // image: "/projects/backoffice.svg",
      images: [
        "/projects/back_office/image-1.jpg",
        "/projects/back_office/image-2.jpg",
        "/projects/back_office/image-3.jpg",
      ],
      featured: true,
    },
    {
      id: "hris",
      title: "Human Resource Information System",
      category: "freelance",
      year: "2025",
      description:
        "Web-based HRIS for employee management, leave tracking, attendance monitoring, and performance reporting.",
      problem:
        "HR teams needed to automate manual record-keeping, leave management, and attendance tracking processes.",
      features: [
        "Employee records management",
        "Leave tracking & approval",
        "Attendance monitoring",
        "Performance reports",
        "HR dashboard analytics",
      ],
      technologies: ["PHP", "Laravel", "MySQL", "Bootstrap"],
      image: "/projects/hris.svg",
      images: [
        // "/projects/employee_management/image-1.jpg",
        // "/projects/employee_management/image-2.jpg",
        // "/projects/employee_management/image-3.jpg",
        // "/projects/employee_management/image-4.jpg",
        // "/projects/employee_management/image-5.jpg",
        // "/projects/employee_management/image-6.jpg",
      ],
      featured: true,
    },
    {
      id: "admission-test",
      title: "School Admission Test System",
      category: "freelance",
      year: "2022",
      description:
        "Web-based admission test with intelligent course program recommendation based on exam results.",
      problem:
        "Students needed guidance choosing the right academic program based on their aptitude test performance.",
      features: [
        "Online examination module",
        "Course recommendation engine",
        "Percentage-based scoring per program",
        "Admin result management",
        "Student result portal",
      ],
      technologies: ["PHP", "CodeIgniter", "MySQL", "JavaScript"],
      // image: "/projects/admission.svg",
      images: [
        "/projects/school_admission/image-1.jpg",
        "/projects/school_admission/image-2.jpg",
        "/projects/school_admission/image-3.jpg",
        "/projects/school_admission/image-4.jpg",
        "/projects/school_admission/image-5.jpg",
        "/projects/school_admission/image-6.jpg",
        "/projects/school_admission/image-7.jpg",
      ],
      featured: false,
    },
    {
      id: "attendance",
      title: "Student Attendance System",
      category: "freelance",
      year: "2022",
      description:
        "Cross-platform intelligent attendance monitoring with device registration to prevent proxy attendance.",
      problem:
        "Universities needed a secure attendance system that prevents students from logging in on behalf of absent peers.",
      features: [
        "Device-locked authentication",
        "Real-time attendance tracking",
        "Professor subject management",
        "Performance monitoring",
        "Cross-platform support",
      ],
      technologies: ["PHP", "MySQL", "JavaScript", "Mobile Integration"],
      // image: "/projects/attendance.svg",
      images: [
        "/projects/school_attendance/image-1.jpg",
        "/projects/school_attendance/image-2.jpg",
        "/projects/school_attendance/image-3.jpg",
        "/projects/school_attendance/image-4.jpg",
        "/projects/school_attendance/image-5.jpg",
        "/projects/school_attendance/image-6.jpg",
      ],
      featured: false,
    },
    {
      id: "rdms",
      title: "Barangay Document Management",
      category: "freelance",
      year: "2022",
      description:
        "Online document request system for Barangay Bayanan, Muntinlupa City residents.",
      problem:
        "Residents faced long queues and delays when requesting barangay documents in person.",
      features: [
        "Online document requests",
        "Request status tracking",
        "Admin approval workflow",
        "Resident portal",
        "Document queue management",
      ],
      technologies: ["PHP", "CodeIgniter", "MySQL"],
      image: "/projects/rdms.svg",
      featured: false,
    },
    {
      id: "payroll",
      title: "Employee Management & Payroll",
      category: "web",
      year: "2020 – 2023",
      description:
        "Web-based employee management system with payroll processing synced to biometric attendance machines.",
      problem:
        "Company needed integrated HR and payroll automation connected to biometric attendance data.",
      features: [
        "Employee records",
        "Payroll computation",
        "Biometrics sync",
        "Attendance integration",
        "Reporting module",
      ],
      technologies: ["PHP", "VB.NET", "MySQL", "Crystal Reports"],
      // image: "/projects/payroll.svg",
      images: [
        "/projects/employee_management/image-1.jpg",
        "/projects/employee_management/image-2.jpg",
        "/projects/employee_management/image-3.jpg",
        "/projects/employee_management/image-4.jpg",
        "/projects/employee_management/image-5.jpg",
        "/projects/employee_management/image-6.jpg",
      ],
      featured: false,
    },
  ],

  services: [
    {
      id: "fullstack",
      title: "Full-Stack Development",
      description:
        "End-to-end web application development using modern frameworks like React, Laravel, and MySQL — from architecture to deployment.",
      icon: "Layers",
    },
    {
      id: "api",
      title: "API Development",
      description:
        "Design and build RESTful APIs with clean architecture, authentication, and documentation for scalable integrations.",
      icon: "Server",
    },
    {
      id: "database",
      title: "Database Design",
      description:
        "Schema design, query optimization, and data modeling for high-performance applications handling large datasets.",
      icon: "Database",
    },
    {
      id: "webapp",
      title: "Web Application Development",
      description:
        "Custom web applications tailored to business needs — MLM platforms, e-commerce, HR systems, and enterprise portals.",
      icon: "Globe",
    },
    {
      id: "legacy",
      title: "Legacy System Modernization",
      description:
        "Refactor and upgrade outdated systems for better performance, maintainability, and user experience.",
      icon: "RefreshCw",
    },
    {
      id: "support",
      title: "Technical Support & Integration",
      description:
        "Hardware-software integration, system troubleshooting, and technical support for enterprise environments.",
      icon: "Wrench",
    },
  ],

  testimonials: [],

  stats: [
    { label: "Years Experience", value: "5+" },
    { label: "Projects Delivered", value: "12+" },
    { label: "Users Supported", value: "5K+" },
    { label: "Performance Gain", value: "40%" },
  ],

  navLinks: [
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Experience", href: "#experience" },
    { label: "Projects", href: "#projects" },
    { label: "Services", href: "#services" },
    { label: "Contact", href: "#contact" },
  ],
};
