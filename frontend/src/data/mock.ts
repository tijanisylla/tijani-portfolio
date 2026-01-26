// Mock data for Tijani Sylla's Portfolio

// Helper to get asset path with base URL
const assetPath = (path: string): string => {
  // PUBLIC_URL is empty string for custom domain, '/tijani-portfolio' for GitHub Pages
  const baseUrl = process.env.PUBLIC_URL || '';
  // Ensure path starts with /
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  return baseUrl ? `${baseUrl}${cleanPath}` : cleanPath;
};

export interface PersonalInfo {
  name: string;
  title: string;
  tagline: string;
  location: string;
  email: string;
  phone: string;
  bio: string;
  social: {
    github: string;
    linkedin: string;
    whatsapp: string;
    messenger: string;
  };
  stats: {
    experience: string;
    projects: string;
    support: string;
  };
  languages: string[];
}

export interface Skill {
  name: string;
  level: string;
  icon: string;
}

export interface Skills {
  frontend: Skill[];
  backend: Skill[];
  tools: Skill[];
}

export interface Experience {
  id: number;
  title: string;
  company: string;
  location: string;
  period: string;
  description: string[];
  tech: string[];
}

export interface Education {
  id: number;
  institution: string;
  degree: string;
  details: string;
  location: string;
  period: string;
  highlights: string[];
}

export interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  image: string;
  tech: string[];
  github: string;
  live: string;
}

export interface ProjectCategory {
  id: string;
  label: string;
}

export const personalInfo: PersonalInfo = {
  name: "Tijani Sylla",
  title: "Software Engineer",
  tagline: "Full-Stack Developer",
  location: "Chicago, IL | Doha, Qatar",
  email: "Tijani.sylla1@gmail.com",
  phone: "+1 (312) 690-0771",
  bio: "Software Engineer with 4+ years of experience building and optimizing modern web applications, websites, and high-performance marketing assets. Strong skills in React, TypeScript, Node.js, PHP, and Python, with proven ability to deliver scalable digital solutions, improve performance, and enhance user engagement.",
  social: {
    github: "https://github.com/tijanisylla",
    linkedin: "https://linkedin.com/in/tijanisylla",
    whatsapp: "https://api.whatsapp.com/send?phone=3126900771",
    messenger: "https://m.me/tijani.sylla/"
  },
  stats: {
    experience: "4+",
    projects: "35+",
    support: "24/7"
  },
  languages: ["English", "French", "Spanish", "Arabic"]
};

export const skills: Skills = {
  frontend: [
    { name: "React", level: "Advanced", icon: "react" },
    { name: "TypeScript", level: "Advanced", icon: "typescript" },
    { name: "JavaScript", level: "Advanced", icon: "javascript" },
    { name: "HTML5", level: "Advanced", icon: "html" },
    { name: "CSS3", level: "Intermediate", icon: "css" },
    { name: "Redux", level: "Intermediate", icon: "redux" },
    { name: "WordPress", level: "Intermediate", icon: "wordpress" },
    { name: "Bootstrap", level: "Intermediate", icon: "bootstrap" },
    { name: "Figma", level: "Basic", icon: "figma" }
  ],
  backend: [
    { name: "Node.js", level: "Advanced", icon: "node" },
    { name: "PostgreSQL", level: "Advanced", icon: "postgresql" },
    { name: "Python", level: "Intermediate", icon: "python" },
    { name: "MongoDB", level: "Intermediate", icon: "mongodb" },
    { name: "MySQL", level: "Intermediate", icon: "mysql" },
    { name: "AWS", level: "Intermediate", icon: "aws" },
    { name: "Docker", level: "Intermediate", icon: "docker" },
    { name: "Firebase", level: "Intermediate", icon: "firebase" },
    { name: "PHP", level: "Basic", icon: "php" }
  ],
  tools: [
    { name: "Git", level: "Intermediate", icon: "git" },
    { name: "Postman", level: "Advanced", icon: "postman" },
    { name: "Heroku", level: "Intermediate", icon: "heroku" },
    { name: "Testing", level: "Intermediate", icon: "testing" }
  ]
};

export const experiences: Experience[] = [
  {
    id: 1,
    title: "Software Engineer",
    company: "Multiple, Inc",
    location: "Chicago, IL",
    period: "Jun 2023 - Jan 2024",
    description: [
      "Contributed to the development and optimization of HTML email campaigns, resulting in a significant increase in click-through rates and customer engagement.",
      "Played a key role in the implementation of WordPress projects, resulting in noticeable improvements in website loading times and user experience.",
      "Conceptualized and executed banner ad campaigns, leading to a substantial increase in brand visibility and customer acquisition.",
      "Collaborated with team members and clients to understand unique requirements and deliver tailored digital solutions."
    ],
    tech: ["React", "WordPress", "HTML Email", "JavaScript"]
  },
  {
    id: 2,
    title: "Software Engineer (Contract)",
    company: "Nexus",
    location: "Chicago, IL",
    period: "Jan 2023 - Mar 2023",
    description: [
      "Spearheaded the complete life cycle of the official site, ensuring its robustness and user-friendliness.",
      "Actively engaged in troubleshooting and debugging activities, swiftly resolving issues to maintain optimal site performance.",
      "Collaborated with cross-functional teams, contributing technical expertise to shape and align the website with business requirements.",
      "Utilized technologies such as React, Python, and CSS to deliver a cutting-edge and visually appealing online presence."
    ],
    tech: ["React", "Python", "CSS", "Node.js"]
  },
  {
    id: 3,
    title: "Software Engineer",
    company: "FoodMix Marketing",
    location: "Elmhurst, IL",
    period: "Jan 2022 - Mar 2022",
    description: [
      "Maintained client website content pipeline using WordPress, ensuring alignment with company design standards.",
      "Utilized MJML for creating and updating client emails, optimizing communication strategies.",
      "Validated mobile responsiveness using Email Acid across popular web browsers (Chrome, Firefox, IE, etc.)."
    ],
    tech: ["WordPress", "MJML", "HTML", "CSS"]
  }
];

export const education: Education[] = [
  {
    id: 1,
    institution: "University of Illinois at Chicago (UIC)",
    degree: "Web Development Certificate",
    details: "13-week full-time coding bootcamp",
    location: "Chicago, IL",
    period: "Apr 2021 - Jul 2021",
    highlights: [
      "Full-stack development using JavaScript, HTML, CSS, React, and Express",
      "Unit testing with Jest, Mocha, and Jasmine",
      "Built 'Spades-Station' app checkout feature"
    ]
  },
  {
    id: 2,
    institution: "Fullstack Academy",
    degree: "Software Engineering Apprentice",
    details: "Intensive bootcamp program",
    location: "Chicago, IL",
    period: "Apr 2021 - Jul 2021",
    highlights: [
      "Planned, designed, and implemented full-stack applications",
      "JavaScript, Node.js, PostgreSQL, React, jQuery, Bootstrap"
    ]
  },
  {
    id: 3,
    institution: "Lycée des Nations",
    degree: "High School Diploma",
    details: "Le Diplôme du Brevet d'Etudes du 1er Cycle",
    location: "Nouakchott, Mauritania",
    period: "2009 - 2013",
    highlights: []
  }
];

export const projects: Project[] = [
  {
    id: 1,
    title: "Tasks Progress",
    category: "web",
    description: "A task management application with progress tracking and analytics.",
    image: assetPath("/images/projects/tasks-progress.jpg"),
    tech: ["React", "Node.js", "MongoDB"],
    github: "#",
    live: "#"
  },
  {
    id: 2,
    title: "RFID System",
    category: "web",
    description: "RFID-based tracking and management system for inventory control.",
    image: assetPath("/images/projects/rfid-system.jpg"),
    tech: ["React", "Python", "PostgreSQL"],
    github: "#",
    live: "#"
  },
  {
    id: 3,
    title: "Chat GPT-3 AI",
    category: "ai",
    description: "AI-powered chat application leveraging OpenAI's GPT-3 API.",
    image: assetPath("/images/projects/chat-gpt-3-ai.jpg"),
    tech: ["React", "OpenAI API", "Node.js"],
    github: "#",
    live: "#"
  },
  {
    id: 4,
    title: "Movie App",
    category: "web",
    description: "Movie discovery platform with search, ratings, and recommendations.",
    image: assetPath("/images/projects/movie-app.jpg"),
    tech: ["React", "TMDB API", "CSS"],
    github: "#",
    live: "#"
  },
  {
    id: 5,
    title: "Calculator App",
    category: "mobile",
    description: "Feature-rich calculator with scientific functions and history.",
    image: assetPath("/images/projects/calculator-app.jpg"),
    tech: ["React Native", "JavaScript"],
    github: "#",
    live: "#"
  },
  {
    id: 6,
    title: "Snake Game",
    category: "game",
    description: "Classic snake game with modern graphics and leaderboard.",
    image: assetPath("/images/projects/snake-game.jpg"),
    tech: ["JavaScript", "Canvas", "CSS"],
    github: "#",
    live: "#"
  },
  {
    id: 7,
    title: "Retro Draw",
    category: "web",
    description: "Pixel art drawing tool with retro aesthetics and export options.",
    image: assetPath("/images/projects/retro-draw.jpg"),
    tech: ["React", "Canvas", "CSS"],
    github: "#",
    live: "#"
  },
  {
    id: 8,
    title: "UserHub",
    category: "web",
    description: "User management dashboard with authentication and role-based access.",
    image: assetPath("/images/projects/userhub.jpg"),
    tech: ["React", "Node.js", "PostgreSQL"],
    github: "#",
    live: "#"
  },
  {
    id: 9,
    title: "Art Collector",
    category: "web",
    description: "Art gallery application with collection management and search.",
    image: assetPath("/images/projects/art-collector.jpg"),
    tech: ["React", "Harvard Art API", "CSS"],
    github: "#",
    live: "#"
  },
  {
    id: 10,
    title: "Fitness Tracker",
    category: "web",
    description: "Workout tracking app with progress visualization and goal setting.",
    image: assetPath("/images/projects/fitness-tracker.jpg"),
    tech: ["React", "Node.js", "MongoDB"],
    github: "#",
    live: "#"
  }
];

export const projectCategories: ProjectCategory[] = [
  { id: "all", label: "All Projects" },
  { id: "web", label: "Web Apps" },
  { id: "mobile", label: "Mobile" },
  { id: "ai", label: "AI/ML" },
  { id: "game", label: "Games" }
];
