import type { ExpertiseCategory } from "./constants";

/**
 * Case study/project data
 */
export interface Project {
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  featured: boolean;
  category: ExpertiseCategory;
  technologies: string[];
  metrics?: {
    label: string;
    value: string;
  }[];
  image?: string;
  // Enhanced fields from portfolio
  industry?: string;
  clientType?: "Fortune 500" | "Enterprise" | "Startup" | "Spin-off";
  duration?: string;
  isSpinoff?: boolean;
  externalUrl?: string;
  interactiveDemo?: boolean;
}

export const projects: Project[] = [
  // ============================================
  // SPIN-OFF SUCCESS STORIES (Featured)
  // ============================================
  {
    slug: "chessify",
    title: "Chessify",
    subtitle: "The #1 cloud platform for chess analysis",
    description:
      "Built the world's leading cloud chess analysis platform, recognized as the preferred training platform for top GMs and professionals by FIDE. Features AI-based board scanning, cloud-powered engine analysis reaching 1,000,000 kN/s with Stockfish, and a 9+ million game database updated weekly.",
    featured: true,
    category: "ai-ml",
    technologies: [
      "PyTorch",
      "TensorFlow",
      "Computer Vision",
      "Cloud Computing",
      "React",
      "Node.js",
    ],
    metrics: [
      { label: "Users", value: "500K+" },
      { label: "Grandmasters", value: "200+" },
      { label: "PRO Users", value: "15K+" },
    ],
    industry: "Gaming / Chess",
    clientType: "Spin-off",
    isSpinoff: true,
    externalUrl: "https://chessify.me/",
    interactiveDemo: true,
  },
  {
    slug: "mapato",
    title: "Mapato",
    subtitle: "Complete indoor positioning solution",
    description:
      "Developed a highly accurate AI-based indoor positioning system for locations where GPS navigation doesn't work. Provides businesses with location-based services, comprehensive analytics, and development tools for integration into various systems and apps.",
    featured: true,
    category: "robotics",
    technologies: [
      "Machine Learning",
      "Bluetooth Low Energy",
      "Signal Processing",
      "Mobile SDK",
      "Analytics",
    ],
    metrics: [
      { label: "Positioning Accuracy", value: "<1m" },
      { label: "Industries Served", value: "Retail, Service" },
    ],
    industry: "Location Technology",
    clientType: "Spin-off",
    isSpinoff: true,
    externalUrl: "https://mapato.com/",
    interactiveDemo: true,
  },

  // ============================================
  // MAJOR COLLABORATIONS (Featured)
  // ============================================
  {
    slug: "vegetation-management",
    title: "Vegetation Management & Risk Evaluation",
    subtitle: "AI-powered infrastructure monitoring for global energy",
    description:
      "Collaborated with one of the world's largest energy technology companies to deliver a state-of-the-art vegetation management system. Combined satellite imagery, LiDAR, and hyperspectral data with advanced AI models for unprecedented accuracy in tree detection, species identification, and risk prediction near critical infrastructure.",
    featured: true,
    category: "robotics",
    technologies: [
      "PyTorch",
      "TensorFlow",
      "LiDAR",
      "Satellite Imagery",
      "Hyperspectral",
      "AWS SageMaker",
      "QGIS",
    ],
    metrics: [
      { label: "Data Sources", value: "Satellite + LiDAR + Hyperspectral" },
      { label: "Risk Types", value: "Fall-in, Grow-in, Overhang" },
    ],
    industry: "Energy",
    clientType: "Fortune 500",
    duration: "Ongoing",
  },
  {
    slug: "embodied-moxie",
    title: "Moxie Robot - Embodied Inc.",
    subtitle: "AI for human-centric companion robotics",
    description:
      "Long-term partnership covering a wide range of AI, data, and software development for a revolutionary companion robot. Delivered emotion recognition models, object/activity detection, face recognition, voice AI, image captioning, mobile apps, and comprehensive data analytics platforms.",
    featured: true,
    category: "ai-ml",
    technologies: [
      "PyTorch",
      "TensorFlow",
      "Computer Vision",
      "Speech Recognition",
      "Edge AI",
      "React Native",
      "Analytics",
    ],
    metrics: [
      { label: "AI Models", value: "Vision, Audio, Emotion" },
      { label: "Partnership", value: "Ongoing since inception" },
    ],
    industry: "Robotics / Healthcare",
    clientType: "Startup",
    duration: "Ongoing",
    externalUrl: "https://moxierobot.com/",
  },
  {
    slug: "coherent-logix-compiler",
    title: "LLVM Compiler Suite",
    subtitle: "Decade-long compiler development for MPPA hardware",
    description:
      "Over-a-decade-long collaboration with Coherent Logix, a leading MPPA hardware producer. Delivered LLVM-based C compiler/assembler development, compiler QA and verification, DSP library development, computer vision algorithms, and parallelized stereo vision applications.",
    featured: true,
    category: "embedded",
    technologies: [
      "LLVM",
      "C/C++",
      "Assembly",
      "DSP",
      "Computer Vision",
      "Parallel Computing",
    ],
    metrics: [
      { label: "Partnership Duration", value: "10+ years" },
      { label: "Scope", value: "Compiler, DSP, CV" },
    ],
    industry: "Chip Design",
    clientType: "Enterprise",
    duration: "10+ years",
    externalUrl: "https://www.coherentlogix.com/",
  },

  // ============================================
  // AI & MACHINE LEARNING PROJECTS
  // ============================================
  {
    slug: "intelligent-field-operations",
    title: "Intelligent Field Operations Platform",
    subtitle: "Voice-first AI for energy field crews",
    description:
      "Designed an AI-powered platform transforming field operations for a global energy provider. Features voice-driven reporting, context-aware AI guidance, smart briefings, and multi-modal data capture to help crews work safer, faster, and with greater accuracy.",
    featured: false,
    category: "ai-ml",
    technologies: [
      "LLMs",
      "Speech Recognition",
      "NLP",
      "Cloud Native",
      "Mobile",
    ],
    metrics: [
      { label: "Interface", value: "Voice-first" },
      { label: "Features", value: "Hands-free reporting" },
    ],
    industry: "Energy",
    clientType: "Fortune 500",
  },
  {
    slug: "datachat-analytics",
    title: "DataChat - Conversational Analytics",
    subtitle: "No-code analytics powered by generative AI",
    description:
      "Co-engineered a cutting-edge no-code conversational analytics platform enabling business users to analyze data without SQL or coding. Features natural-language querying, real-time interactive exploration, workflow transparency, and seamless integration with major data warehouses.",
    featured: false,
    category: "data",
    technologies: [
      "Generative AI",
      "LLMs",
      "NLP",
      "Snowflake",
      "BigQuery",
      "Databricks",
      "Redshift",
    ],
    metrics: [
      { label: "Integrations", value: "Snowflake, BigQuery, Databricks" },
      { label: "User Type", value: "Business Users" },
    ],
    industry: "Analytics / BI",
    clientType: "Startup",
    interactiveDemo: true,
  },
  {
    slug: "root-cause-analysis",
    title: "AI-Driven Root Cause Analysis",
    subtitle: "LLM-powered observability and autofix",
    description:
      "Building an AI-first platform for root cause analysis combining large-scale user session intelligence, log analysis, and LLM-powered automation. Features similarity search with embeddings, automatic triaging, and innovative autofix capabilities using code insights and LLMs.",
    featured: false,
    category: "ai-ml",
    technologies: [
      "RAG",
      "LLMs",
      "Milvus",
      "Kafka",
      "PostgreSQL",
      "Embeddings",
    ],
    metrics: [
      { label: "Architecture", value: "Kafka + Milvus + PostgreSQL" },
      { label: "Capabilities", value: "Triage, Ticketing, Autofix" },
    ],
    industry: "DevOps / Observability",
    clientType: "Startup",
  },
  {
    slug: "skin-health-platform",
    title: "AI-Powered Skin Health Platform",
    subtitle: "Medical imaging for preventative healthcare",
    description:
      "Working with a Silicon Valley stealth startup on an AI-driven skin health platform. Integrates advanced imaging pipelines with machine learning for accurate skin analysis, early risk detection, and longitudinal tracking—bringing hospital-grade insights to an accessible format.",
    featured: false,
    category: "ai-ml",
    technologies: [
      "Medical Imaging",
      "PyTorch",
      "Computer Vision",
      "Detection",
      "Segmentation",
    ],
    metrics: [
      { label: "Capabilities", value: "Detection, Segmentation, Tracking" },
      { label: "Focus", value: "Preventative Healthcare" },
    ],
    industry: "Healthcare",
    clientType: "Startup",
  },
  {
    slug: "identity-verification",
    title: "Identity Verification & Liveness Check",
    subtitle: "Secure remote client verification for finance",
    description:
      "Built an integrated computer vision solution enabling accurate and secure verification of client identity with liveness checks for seamless remote registration in banking and financial services.",
    featured: false,
    category: "ai-ml",
    technologies: ["Computer Vision", "Face Recognition", "Liveness Detection"],
    industry: "Finance / Banking",
    clientType: "Enterprise",
    interactiveDemo: true,
  },
  {
    slug: "ai-recommendation-system",
    title: "AI-Based Recommendation System",
    subtitle: "Content matching for video/image creation",
    description:
      "Developed ML models to recommend users video/slide solutions best matching their needs, combining computer vision, audio processing, and predictive analytics for optimal content suggestions.",
    featured: false,
    category: "ai-ml",
    technologies: [
      "Computer Vision",
      "Audio Processing",
      "Predictive Analytics",
      "Recommendations",
    ],
    industry: "Media / Content Creation",
    clientType: "Startup",
  },

  // ============================================
  // DATA ENGINEERING PROJECTS
  // ============================================
  {
    slug: "document-processing",
    title: "AI Document Processing & Management",
    subtitle: "Intelligent document automation for HR",
    description:
      "Built a comprehensive document management system for Himnark integrating AI-based OCR to read scanned documents, automating structured data extraction, document organization, and overall document circulation workflows.",
    featured: false,
    category: "data",
    technologies: ["OCR", "NLP", "Computer Vision", "Document AI", "Workflow"],
    industry: "HR / Enterprise",
    clientType: "Enterprise",
    externalUrl: "https://himnark.am/en/",
  },
  {
    slug: "scimagine-platform",
    title: "Scimagine Research Data Platform",
    subtitle: "Unified AI-powered research data management",
    description:
      "Developed a unified tool for experimental scientists to access, search, and analyze large amounts of scientific research data. Features structured data organization, knowledge mining, hyper-annotation, and collaboration tools for researchers.",
    featured: false,
    category: "data",
    technologies: [
      "AI Search",
      "Data Management",
      "Analytics",
      "Mobile",
      "Desktop",
    ],
    industry: "Science / Academia",
    clientType: "Startup",
    externalUrl: "https://scimagine.com/",
  },

  // ============================================
  // EMBEDDED & SYSTEMS PROJECTS
  // ============================================
  {
    slug: "riscv-compiler",
    title: "RISC-V Compiler Development",
    subtitle: "Custom compilers for advanced networking",
    description:
      "Collaborating with a leading hardware company to develop cutting-edge compilers for RISC-V architectures with custom instruction sets. Designed comprehensive programming models, frameworks, libraries, and APIs for packet and protocol processing.",
    featured: false,
    category: "embedded",
    technologies: ["LLVM", "RISC-V", "C/C++", "Networking", "RTL Testing"],
    industry: "Chip Design / Networking",
    clientType: "Enterprise",
  },
  {
    slug: "eda-toolchain",
    title: "EDA Toolchain Suite",
    subtitle: "Complete chip design automation",
    description:
      "Developed a comprehensive EDA toolchain featuring frontend R&D, accurate Simulink-based simulation, place & route, bitstream generation, and embedded software R&D for chip design workflows.",
    featured: false,
    category: "embedded",
    technologies: ["EDA", "Simulink", "Place & Route", "Bitstream", "Embedded"],
    industry: "Chip Design",
    clientType: "Enterprise",
  },

  // ============================================
  // GEOSPATIAL & ROBOTICS PROJECTS
  // ============================================
  {
    slug: "real-estate-analytics",
    title: "Real Estate Data Analytics Platform",
    subtitle: "AI-driven insights from aerial imagery",
    description:
      "Built an advanced AI-driven platform to capture, analyze, and extract data from aerial imagery. Serves as an invaluable tool for real estate professionals, facilitating enhanced property insights and streamlined operations.",
    featured: false,
    category: "robotics",
    technologies: [
      "Computer Vision",
      "Aerial Imagery",
      "Geospatial Analysis",
      "Analytics",
    ],
    industry: "Real Estate",
    clientType: "Enterprise",
  },
  {
    slug: "activity-recognition",
    title: "Construction Activity Recognition",
    subtitle: "ML models for construction monitoring",
    description:
      "Developed a range of ML models to automate, monitor, and optimize construction processes through computer vision-based activity recognition and analysis.",
    featured: false,
    category: "robotics",
    technologies: [
      "Computer Vision",
      "Activity Recognition",
      "Video Analytics",
    ],
    industry: "Construction",
    clientType: "Enterprise",
  },
];

/**
 * Helper functions for project data access
 */
export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getFeaturedProjects(): Project[] {
  return projects.filter((p) => p.featured);
}

export function getProjectsByCategory(category: ExpertiseCategory): Project[] {
  return projects.filter((p) => p.category === category);
}

export function getSpinoffProjects(): Project[] {
  return projects.filter((p) => p.isSpinoff);
}

export function getProjectsByIndustry(industry: string): Project[] {
  return projects.filter((p) => p.industry === industry);
}
