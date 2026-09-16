export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  technologies: string[];
  image: string;
  githubUrl: string;
  liveUrl: string;
  pdfDocument?: string;
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  issueDate: string;
  credentialId?: string;
  image: string; // Stored in /certifications/
  skills: string[];
  pdfUrl?: string;
}

export interface Experience {
  role: string;
  company: string;
  location: string;
  period: string;
  type: string;
  contributions: string[];
}

export interface Education {
  degree: string;
  institution: string;
  boardOrUniversity: string;
  period: string;
  status: string;
  details: string;
}

export interface JourneyItem {
  id: string;
  year: string;
  title: string;
  category: 'Foundation' | 'Diploma' | 'Degree' | 'Internship';
  badge: string;
  institution: string;
  boardOrUniversity: string;
  status: 'Completed' | 'Pursuing';
  description: string;
  highlights: string[];
  iconType: 'foundation' | 'diploma' | 'internship' | 'degree';
}

export const developerDetails = {
  personal: {
    fullName: "Tanmay Chethan Phadke",
    preferredName: "Tanmay Phadke",
    role: "Full Stack Web Developer & Computer Engineering Student",
    badgeRole: "Full Stack & Computer Engineer",
    tagline: "Bridging decentralized systems, intelligent web solutions, and modern software architecture.",
    headlineTitle: "TURNING IDEAS INTO REALITY",
    headlineSubtitle: "Developer by day, problem solver by nature. Let's build something amazing together.",
    shortBio:
      "Passionate Computer Engineering student focused on building scalable full-stack web applications, decentralized blockchain solutions, and AI-assisted workflows. Driven by problem-solving, clean code, and engineering impact.",
    aboutMe:
      "I am an engineering student with a strong foundation in modern web technologies, systems engineering, and decentralized platforms. From building secure blockchain registries during my internship at Softmusk Solutions to engineering community-focused road safety tools like RTO Web Help, I enjoy taking complex problems and translating them into robust, intuitive software.",
    location: "Maharashtra / Goa, India",
    email: "tanmayphadke22@gmail.com",
    phone: "+91 8999840839",
    whatsappUrl: "https://wa.me/918999840839",
    resumePath: "/Tanmay_Phadke_Resume.pdf",
    photoUrl: "/developer_photo.jpg",
    socialLinks: {
      github: "https://github.com/Tanmay-Phadke",
      linkedin: "https://www.linkedin.com/in/tanmay-phadke22",
      portfolio: "https://phadkeverse.vercel.app/"
    },
    hobbies: [
      "Creative Writing & Poetry (Hindi / Marathi / Urdu)",
      "Automotive Design & Tech Trends",
      "Playing Cricket",
      "Calisthenics & Fitness"
    ],
    stats: [
      { value: 2, label: "Production Projects", suffix: "+", color: "#FF6B35" },
      { value: 1, label: "Internship Experience", suffix: "", color: "#3B82F6" },
      { value: 100, label: "Full-Stack Focused", suffix: "", color: "#10B981", displayText: "Web3" }
    ]
  },

  academicJourney: [
    {
      degree: "Bachelor of Engineering (B.E.) (Pursuing)",
      institution: "Mumbai University",
      boardOrUniversity: "University of Mumbai",
      period: "2026 - Present",
      status: "Pursuing",
      details: "Specializing in Computer Science & Engineering, software architecture, full-stack systems, Web3, and artificial intelligence."
    },
    {
      degree: "Diploma in Computer Engineering",
      institution: "Yashwantrao Bhonsale Institute of Technology",
      boardOrUniversity: "Maharashtra State Board of Technical Education (MSBTE)",
      period: "2023 - 2026",
      status: "Completed",
      details: "Core focus on Data Structures & Algorithms, Object-Oriented Programming, Database Systems, Web Tech, and Software Testing."
    },
    {
      degree: "Foundation (High School)",
      institution: "High School Education",
      boardOrUniversity: "Goa Board",
      period: "Completed",
      status: "Completed",
      details: "Built foundational academic excellence in Mathematics, Science, and Computer Fundamentals under the Goa State Board."
    }
  ] as Education[],

  journeySteps: [
    {
      id: "foundation-goa-board",
      year: "2020 – 2023",
      title: "Foundation (High School)",
      category: "Foundation",
      badge: "Goa Board",
      institution: "High School Education",
      boardOrUniversity: "Goa Board",
      status: "Completed",
      description: "Established strong analytical and logical foundations under the Goa Board. Developed an early curiosity for computer systems, programming fundamentals, and problem-solving.",
      highlights: ["Goa Board High School", "Mathematics & Science Core", "Computer Fundamentals"],
      iconType: "foundation"
    },
    {
      id: "diploma-computer-eng",
      year: "2023 – 2026",
      title: "Diploma in Computer Engineering",
      category: "Diploma",
      badge: "MSBTE | YBIT",
      institution: "Yashwantrao Bhonsale Institute of Technology",
      boardOrUniversity: "MSBTE",
      status: "Completed",
      description: "Rigorous technical diploma covering Data Structures & Algorithms, Object-Oriented Programming (C++/Java), Relational Databases (SQL/MongoDB), and full-stack web application concepts.",
      highlights: ["Data Structures & Algorithms", "OOP & System Design", "Full Stack Development Labs"],
      iconType: "diploma"
    },
    {
      id: "software-internship",
      year: "2025",
      title: "Software Engineering Intern",
      category: "Internship",
      badge: "Softmusk Solutions",
      institution: "Softmusk Solutions Pvt. Ltd.",
      boardOrUniversity: "Industry Experience",
      status: "Completed",
      description: "Engaged in production software development. Designed & deployed decentralized smart contract integration modules for 'Land Registry Using Blockchain' web application using React and Web3 protocols.",
      highlights: ["Blockchain Title Registry", "Web3 Frontend Integration", "Agile & Scrum Engineering"],
      iconType: "internship"
    },
    {
      id: "be-computer-science",
      year: "2026 – Present",
      title: "B.E. (Pursuing) in Computer Science Engineering",
      category: "Degree",
      badge: "Mumbai University",
      institution: "University of Mumbai",
      boardOrUniversity: "University of Mumbai",
      status: "Pursuing",
      description: "Currently pursuing Bachelor of Engineering in Computer Science Engineering. Specializing in advanced web systems, decentralized architecture, intelligent AI integrations, and cloud deployments.",
      highlights: ["Advanced Software Architecture", "Distributed Systems & Web3", "AI & Full-Stack Innovations"],
      iconType: "degree"
    }
  ] as JourneyItem[],

  internship: [
    {
      role: "Software Engineering Intern",
      company: "Softmusk Solutions Pvt. Ltd.",
      location: "Hybrid / Remote",
      period: "June 2025 – August 2025 (12 Weeks)",
      type: "Internship",
      contributions: [
        "Architected and developed core modules for the 'Secure Land Using Blockchain' decentralized application.",
        "Integrated smart contract interactions with modern React frontend interfaces via Web3 protocols.",
        "Collaborated with senior engineers using Agile/Scrum workflows and Git version control."
      ]
    }
  ] as Experience[],

  projects: [
    {
      id: "land-registry-blockchain",
      title: "Land Registry Using Blockchain",
      subtitle: "Decentralized Property Registration & Verification Platform",
      description:
        "A decentralized real estate management solution engineered to eliminate property fraud, unauthorized title tampering, and bureaucratic overhead by storing immutable land records on a distributed ledger.",
      features: [
        "Immutable smart contract verification for land title transfers.",
        "Role-based access controls for citizens, registrars, and administrative officers.",
        "Tamper-proof cryptographic hashes ensuring document integrity.",
        "Clean, responsive dashboard for verifying parcel boundaries and registration histories."
      ],
      technologies: ["Blockchain", "Smart Contracts", "Solidity", "Web3.js", "React.js", "Node.js", "Express.js"],
      image: "/projectDetails/BlockchainSecureLand.png",
      githubUrl: "",
      liveUrl: ""
    },
    {
      id: "rto-web-help",
      title: "RTO WEB HELP",
      subtitle: "Citizen Road Safety & Incident Reporting Portal",
      description:
        "A citizen-first public utility platform integrating real-time geolocation alerts, road hazard tracking, and digital grievance redressal to improve roadway safety and transport communication.",
      features: [
        "Live geolocation mapping alerting drivers to black spots, hazards, and congestion.",
        "Online complaint registration and transparent status lifecycle tracking.",
        "Responsive, low-latency UI optimized for mobile viewports and field usage.",
        "REST API backend managing ticket dispatch and incident logs."
      ],
      technologies: ["React.js", "Tailwind CSS", "Node.js", "REST APIs", "Geolocation API", "MongoDB / Express"],
      image: "/projectDetails/RTOWebHelp.png",
      pdfDocument: "/projectDetails/RTOWebHelpResearchPaper.pdf",
      githubUrl: "",
      liveUrl: ""
    }
  ] as Project[],

  certifications: [
    {
      id: "cert-meta-version-control",
      title: "Version Control with Git & GitHub",
      issuer: "Meta (Coursera)",
      issueDate: "2026",
      image: "/certification/Version control.png",
      pdfUrl: "/certification/Version control.pdf",
      skills: ["Git", "GitHub Workflow", "Branching Strategies", "Open Source Collaboration"]
    },
    {
      id: "cert-scrum-master",
      title: "Working as a Scrum Master",
      issuer: "SkillUp / Coursera",
      issueDate: "2026",
      image: "/certification/Working As A Scrum Master.png",
      pdfUrl: "/certification/Working As A Scrum Master.pdf",
      skills: ["Agile Methodologies", "Sprint Planning", "Jira/Scrum", "Team Coordination"]
    },
    {
      id: "cert-gen-ai",
      title: "Introduction to Generative AI",
      issuer: "Google Cloud / Coursera",
      issueDate: "2026",
      image: "/certification/GenerativeAI(Google).png",
      pdfUrl: "/certification/GenerativeAI(Google).pdf",
      skills: ["Large Language Models", "Prompt Engineering", "AI Integration"]
    },
    {
      id: "cert-ai-claude",
      title: "AI Tools & Productivity Frameworks",
      issuer: "be10x",
      issueDate: "2026",
      image: "/certification/Be10x certificate.jpg",
      skills: ["AI-Assisted Development", "Workflow Automation"]
    },
    {
      id: "cert-data-science",
      title: "Basics of Data Science & Python",
      issuer: "CIQ / Beep Assessments",
      issueDate: "2026",
      image: "/certification/DataScienceCIQ.png",
      pdfUrl: "/certification/DataScienceCIQ.pdf",
      skills: ["Python", "Data Analysis", "Algorithm Optimization"]
    }
  ] as Certification[],

  technicalSkills: {
    programmingLanguages: ["JavaScript (ES6+)", "TypeScript", "Python", "Java", "C", "C++", "Solidity (Basics)"],
    frontend: ["React.js", "Vite", "Tailwind CSS", "HTML5", "CSS3", "Framer Motion"],
    backendAndDatabases: ["Node.js", "Express.js", "RESTful APIs", "MongoDB", "SQL", "Django (Basics)"],
    toolsAndPlatforms: ["Git", "GitHub", "Vercel", "Postman", "Figma", "VS Code"],
    methodologies: ["Agile / Scrum", "Version Control", "Test-Driven Basics", "Responsive Web Design"]
  }
};

// Aliases for compatibility
export const developerInfo = {
  name: developerDetails.personal.fullName,
  headline: developerDetails.personal.role,
  bio: developerDetails.personal.shortBio,
  aboutMe: developerDetails.personal.aboutMe,
  resumeUrl: developerDetails.personal.resumePath,
  photoUrl: developerDetails.personal.photoUrl,
  email: developerDetails.personal.email,
  whatsapp: developerDetails.personal.phone,
  whatsappUrl: developerDetails.personal.whatsappUrl,
  githubUrl: developerDetails.personal.socialLinks.github,
  linkedinUrl: developerDetails.personal.socialLinks.linkedin,
  portfolioUrl: developerDetails.personal.socialLinks.portfolio,
  location: developerDetails.personal.location,
  hobbies: developerDetails.personal.hobbies,
};

export const projectsData = developerDetails.projects;
export const certificationsData = developerDetails.certifications;
