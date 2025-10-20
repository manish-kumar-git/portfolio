export interface Skill {
  name: string;
  level: number;
  category: 'mobile' | 'backend' | 'healthcare' | 'tools';
  icon?: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  technologies: string[];
  features: string[];
  impact: string[];
  image: string;
  githubUrl?: string;
  liveUrl?: string;
  appStoreUrl?: string;
  playStoreUrl?: string;
  category: 'featured' | 'healthcare' | 'personal';
  status: 'completed' | 'in-progress' | 'concept';
  startDate: string;
  endDate?: string;
}

export interface Experience {
  id: string;
  company: string;
  position: string;
  location: string;
  startDate: string;
  endDate: string;
  current: boolean;
  description: string;
  achievements: string[];
  technologies: string[];
  healthcareRelevance?: string;
}

export interface ContactInfo {
  email: string;
  phone: string;
  location: string;
  linkedin: string;
  github: string;
  website?: string;
}

export const contactInfo: ContactInfo = {
  email: 'manish.reachout@gmail.com',
  phone: '+91-854-195-4641',
  location: 'Chandigarh, India',
  linkedin: 'https://www.linkedin.com/in/manish-kumar-410796237/',
  github: 'https://github.com/manish-kumar-git',
  website: 'https://manish-portfolio.vercel.app'
};

export const skills: Skill[] = [
  // Mobile Development
  { name: 'Flutter', level: 95, category: 'mobile', icon: 'flutter' },
  { name: 'Dart', level: 95, category: 'mobile', icon: 'dart' },
  { name: 'Android Native', level: 85, category: 'mobile', icon: 'android' },
  { name: 'iOS Native', level: 80, category: 'mobile', icon: 'ios' },
  { name: 'React Native', level: 70, category: 'mobile', icon: 'react' },
  
  // Backend Development
  { name: 'Go (Golang)', level: 90, category: 'backend', icon: 'go' },
  { name: 'Node.js', level: 85, category: 'backend', icon: 'nodejs' },
  { name: 'Python', level: 80, category: 'backend', icon: 'python' },
  { name: 'RESTful APIs', level: 95, category: 'backend', icon: 'api' },
  { name: 'gRPC', level: 85, category: 'backend', icon: 'grpc' },
  { name: 'Microservices', level: 90, category: 'backend', icon: 'microservices' },
  
  // Healthcare Technologies
  { name: 'HL7 FHIR', level: 75, category: 'healthcare', icon: 'health' },
  { name: 'HIPAA Compliance', level: 80, category: 'healthcare', icon: 'security' },
  { name: 'EHR Integration', level: 70, category: 'healthcare', icon: 'database' },
  { name: 'Telemedicine', level: 85, category: 'healthcare', icon: 'video' },
  { name: 'Health Data Analytics', level: 75, category: 'healthcare', icon: 'chart' },
  
  // Tools & Infrastructure
  { name: 'Docker', level: 90, category: 'tools', icon: 'docker' },
  { name: 'Kubernetes', level: 85, category: 'tools', icon: 'kubernetes' },
  { name: 'Firebase', level: 90, category: 'tools', icon: 'firebase' },
  { name: 'AWS', level: 80, category: 'tools', icon: 'aws' },
  { name: 'Git', level: 95, category: 'tools', icon: 'git' },
  { name: 'CI/CD', level: 90, category: 'tools', icon: 'cicd' }
];

export const projects: Project[] = [
  {
    id: 'blast-golf-2',
    title: 'Blast Golf 2.0',
    description: 'AI-powered swing analysis platform with real-time feedback and personalized coaching insights.',
    longDescription: 'A comprehensive golf training application that leverages AI and Bluetooth Low Energy technology to provide real-time swing analysis and personalized coaching. The app integrates with Blast Swing & Stroke Analyzer sensors to deliver adaptive audio cues and detailed performance metrics.',
    technologies: ['Flutter', 'Dart', 'Bluetooth LE', 'Firebase', 'AI Integration', 'Clean Architecture'],
    features: [
      'AI-driven swing analysis using Blast iQ™',
      'Bluetooth Low Energy sensor integration',
      'Real-time feedback with adaptive audio cues',
      'Database of 325+ million swings for comparison',
      'Weekly progress reports and challenges',
      'Cross-platform compatibility (iOS/Android)'
    ],
    impact: [
      'Enhanced player development through AI insights',
      'Improved coaching experiences with data-driven feedback',
      'Real-time performance optimization',
      'Comprehensive swing database integration'
    ],
    image: '/images/blast-golf.jpg',
    appStoreUrl: 'https://apps.apple.com/us/app/blast-golf/id818681736',
    playStoreUrl: 'https://play.google.com/store/apps/details?id=com.blastmotion.sport.golf&hl=en_IN',
    category: 'featured',
    status: 'in-progress',
    startDate: '2025-01-01'
  },
  {
    id: 'geoshield-mobile',
    title: 'GeoShield Mobile',
    description: 'CJIS-compliant real-time situational awareness application for law enforcement agencies.',
    longDescription: 'A comprehensive mobile application designed for law enforcement agencies providing real-time situational awareness through live surveillance feeds, two-way audio communication, and GPS-enabled tracking systems. Built with security and compliance as top priorities.',
    technologies: ['Flutter', 'Dart', 'ArcGIS', 'Firebase', 'Keycloak', 'OpenID Connect'],
    features: [
      'Live surveillance camera feeds',
      'Two-way audio communication',
      'Real-time data visualization (CFS, AVL, LPR)',
      'CJIS-compliant security architecture',
      'Keycloak authentication integration',
      'Cross-platform deployment'
    ],
    impact: [
      'Enhanced field situational awareness for officers',
      'Improved coordination between field and command centers',
      'Real-time operational insights and alerts',
      'Secure, compliant data handling'
    ],
    image: '/images/geoshield.jpg',
    appStoreUrl: 'https://apps.apple.com/us/app/geoshield-mobile/id6450347811',
    playStoreUrl: 'https://play.google.com/store/apps/details?id=com.geoshield.mobile&hl=en_IN',
    category: 'featured',
    status: 'completed',
    startDate: '2023-01-01',
    endDate: '2024-06-30'
  },
  {
    id: 'nps-2',
    title: 'NPS 2.0 - National Pension System',
    description: 'Microservices-based pension management platform with 99.9% uptime and comprehensive testing.',
    longDescription: 'A robust backend system for the National Pension System featuring 10+ microservices built with Go, comprehensive documentation, and event-driven architecture. Handles government-scale traffic with high availability and security.',
    technologies: ['Go', 'Docker', 'Kubernetes', 'PostgreSQL', 'Redis', 'gRPC', 'Prometheus'],
    features: [
      '10+ microservices with Clean Architecture',
      'Comprehensive HLD, LLD, and BRD documentation',
      'Event-driven architecture with message queues',
      '90+ code coverage with comprehensive testing',
      'Auto-scaling Kubernetes deployment',
      '99.9+ uptime monitoring'
    ],
    impact: [
      'Scalable pension management system',
      'Government-scale traffic handling',
      'Comprehensive regulatory compliance',
      'High availability and performance'
    ],
    image: '/images/nps-2.jpg',
    category: 'featured',
    status: 'in-progress',
    startDate: '2025-01-01'
  },
//   {
//     id: 'telemed-connect',
//     title: 'TeleMed Connect',
//     description: 'Comprehensive telemedicine platform with EHR integration and HIPAA compliance.',
//     longDescription: 'A conceptual telemedicine platform designed to connect patients with healthcare providers through secure video consultations, health data integration, and AI-powered symptom analysis. Built with healthcare compliance and patient privacy as core principles.',
//     technologies: ['Flutter', 'Go', 'Firebase', 'HL7 FHIR', 'WebRTC', 'AI/ML'],
//     features: [
//       'Secure video consultations',
//       'EHR integration via HL7 FHIR',
//       'HIPAA-compliant data handling',
//       'AI-powered symptom analysis',
//       'Cross-platform mobile and web apps',
//       'Real-time health data sharing'
//     ],
//     impact: [
//       'Improved healthcare accessibility',
//       'Secure patient-provider communication',
//       'Integrated health data management',
//       'AI-enhanced diagnostic assistance'
//     ],
//     image: '/images/telemed-connect.jpg',
//     category: 'healthcare',
//     status: 'concept'
//   },
  {
    id: 'healthvault',
    title: 'HealthVault',
    description: 'Personal health data management with blockchain-based integrity and patient consent.',
    longDescription: 'A comprehensive personal health data management system that allows patients to securely store, manage, and share their health information with healthcare providers. Features blockchain-based data integrity and patient consent management.',
    technologies: ['Flutter', 'Node.js', 'MongoDB', 'Blockchain', 'EHR APIs', 'Encryption'],
    features: [
      'Health metrics tracking and visualization',
      'EHR integration for seamless data sharing',
      'Blockchain-based data integrity',
      'Patient consent management',
      'Offline-first architecture',
      'Cross-platform synchronization'
    ],
    impact: [
      'Patient-controlled health data',
      'Improved data accuracy and integrity',
      'Enhanced patient-provider collaboration',
      'Secure health information sharing'
    ],
    image: '/images/healthvault.jpg',
    category: 'healthcare',
    status: 'concept',
    startDate: '2022-01-01',
    endDate: '2022-12-31'
  },
  {
    id: 'palette-edu',
    title: 'Palette Edu',
    description: 'Educational app for iPad designed to enhance learning through interactive visual experiences.',
    longDescription: 'An innovative educational application built for iPad that provides interactive learning experiences through visual and creative tools. The app is designed to make learning more engaging and effective for students.',
    technologies: ['Flutter', 'Dart', 'iOS', 'iPadOS', 'Educational Technology'],
    features: [
      'Interactive learning modules',
      'Visual learning tools',
      'iPad-optimized interface',
      'Educational content management',
      'Progress tracking',
      'Offline learning capabilities'
    ],
    impact: [
      'Enhanced learning experience for students',
      'Interactive educational content delivery',
      'iPad-optimized learning platform',
      'Improved student engagement'
    ],
    image: '/images/palette-edu.jpg',
    appStoreUrl: 'https://apps.apple.com/jp/app/paletteedu/id1579825780?l=en-US&platform=ipad',
    category: 'featured',
    status: 'completed',
    startDate: '2022-01-01',
    endDate: '2022-12-31'
  },
  {
    id: 'fanwelt',
    title: 'Fanwelt',
    description: 'Fantasy gaming app prototype with real-time scoring and team management.',
    longDescription: 'A fantasy sports application that allows users to create and manage virtual sports teams with real-time scoring, leaderboards, and dynamic user interactions. Built as a prototype to demonstrate Flutter development skills.',
    technologies: ['Flutter', 'Dart', 'Firebase', 'State Management'],
    features: [
      'Virtual team creation and management',
      'Real-time scoring system',
      'Leaderboard displays',
      'Dynamic user interactions',
      'State management implementation'
    ],
    impact: [
      'Demonstrated Flutter development skills',
      'Real-time data handling experience',
      'User engagement features implementation'
    ],
    image: '/images/fanwelt.jpg',
    githubUrl: 'https://github.com/manish-kumar-git/fanwelt',
    category: 'personal',
    status: 'completed',
    startDate: '2022-08-01',
    endDate: '2022-09-30'
  }
];

export const experiences: Experience[] = [
  {
    id: 'wits-innovation',
    company: 'WITS Innovation Lab',
    position: 'Senior Software Engineer (Go / Flutter)',
    location: 'Chandigarh',
    startDate: '2024-08-01',
    endDate: 'Present',
    current: true,
    description: 'Leading Flutter development team and architecting microservices for scalable applications.',
    achievements: [
      'Led 10 Flutter developers, ensuring seamless delivery of scalable, production-ready applications',
      'Architected and maintained 8+ Go microservices for Email, SMS, Payment, Digital Signature, and Real-time Event Processing',
      'Integrated Temporal for orchestration and implemented observability with Prometheus and Grafana',
      'Developed and optimized RESTful and gRPC APIs using Go and Gin for low-latency communication',
      'Built CI/CD pipelines and automation scripts with Make, Docker, and GitHub Actions'
    ],
    technologies: ['Go', 'Flutter', 'Dart', 'Docker', 'Kubernetes', 'Temporal', 'Prometheus', 'Grafana'],
    healthcareRelevance: 'Designed microservices architecture suitable for healthcare data processing and patient management systems'
  },
  {
    id: 'regalartech',
    company: 'RegalarTech Pvt. Ltd.',
    position: 'Mobile App Developer (iOS/Android)',
    location: 'Pune, Maharashtra',
    startDate: '2023-01-01',
    endDate: '2024-06-30',
    current: false,
    description: 'Developed cross-platform mobile applications with GIS integration and security compliance.',
    achievements: [
      'Developed, managed and deployed 2 stand-alone mobile apps with GIS Map integration, Live cameras, Playback, and Audio features',
      'Implemented authentication using Keycloak and OpenID client - critical for healthcare app security',
      'Performed security testing using tools like MobSF, SonarQube, and OSV Scanner',
      'Handled app development, testing, debugging, and deployment for 4+ different products',
      'Integrated iOS and Android native code with Flutter for platform-specific functionalities'
    ],
    technologies: ['Flutter', 'Dart', 'Android', 'iOS', 'ArcGIS', 'Keycloak', 'OpenID Connect', 'MobSF', 'SonarQube'],
    healthcareRelevance: 'Worked on law enforcement situational awareness app with real-time data visualization and secure communication, similar security requirements to healthcare applications'
  },
  {
    id: 'xelpmoc',
    company: 'Xelpmoc Design and Tech Limited',
    position: 'Flutter Developer',
    location: 'Bangalore',
    startDate: '2022-01-01',
    endDate: '2022-12-31',
    current: false,
    description: 'Mobile application development with focus on UI/UX and cross-platform deployment.',
    achievements: [
      'Designed declarative UI, performed bug fixes, and handled maintenance for mobile applications',
      'Managed iOS and Android app deployment and maintenance',
      'Implemented push notifications, background fetch, streams, and state management',
      'Contributed to the development of mobile apps, including one available on the Google Play Store'
    ],
    technologies: ['Flutter', 'Dart', 'iOS', 'Android', 'Push Notifications', 'State Management'],
    healthcareRelevance: 'Gained experience in mobile app deployment and maintenance, essential for healthcare application lifecycle management'
  }
];

export const personalInfo = {
  name: 'Manish Kumar',
  title: 'Flutter Developer & Healthcare Technology Enthusiast',
  subtitle: 'Building the future of healthcare, one mobile app at a time',
  description: 'Passionate Flutter Developer with 3+ years of experience in mobile application development and a strong drive to revolutionize healthcare through technology. Led teams of 10-12 developers while delivering scalable, production-ready applications.',
  healthcareMission: 'Driven by the mission to improve patient outcomes through innovative mobile solutions in telemedicine, patient monitoring, health data management, and healthcare accessibility.',
  location: 'Chandigarh, India',
  email: 'manish.reachout@gmail.com',
  phone: '+91-854-195-4641',
  linkedin: 'https://linkedin.com/in/manish-kumar-41079',
  github: 'https://github.com/manish-kumar-git',
  resumeUrl: '/ManishResume.pdf'
};

export const healthcareFocus = {
  title: 'Healthcare Impact Statement',
  statement: 'Technology has the power to transform healthcare delivery and improve patient outcomes. I am passionate about leveraging my mobile development expertise to create intuitive, secure, and accessible healthcare applications that bridge the gap between patients and healthcare providers.',
  areas: [
    {
      title: 'Telemedicine Platforms',
      description: 'Remote patient consultations and virtual care',
      icon: 'video'
    },
    {
      title: 'Health Data Management',
      description: 'Secure patient data handling and EHR integration',
      icon: 'database'
    },
    {
      title: 'Patient Monitoring Apps',
      description: 'Real-time health tracking and alerts',
      icon: 'heart'
    },
    {
      title: 'HIPAA-Compliant Solutions',
      description: 'Ensuring data privacy and security',
      icon: 'shield'
    },
    {
      title: 'Healthcare Accessibility',
      description: 'Making healthcare more accessible through mobile technology',
      icon: 'accessibility'
    }
  ]
};
