/**
 * Shared type for expertise categories
 * Used consistently across services, expertise pages, projects, and skills
 */
export type ExpertiseCategory = "ai-ml" | "data" | "embedded" | "robotics";

/**
 * Site metadata and configuration
 */
export const siteConfig = {
  name: "Fimetech",
  description:
    "Advanced AI and technology solutions that advance our partners. 15+ years of AI/ML, data engineering, embedded systems, and geospatial expertise.",
  url: "https://fimetech.com",
  tagline: "Intelligence, Engineered from the Core.",
  email: "info@fimetech.com",
  phone: "+374 93 97 90 20",
  address: {
    street: "24/15 Azatutyan ave.",
    city: "Yerevan",
    country: "Armenia",
    zip: "0014",
    full: "24/15 Azatutyan ave., 0014, Yerevan, Armenia",
    // Google Maps coordinates for Fimetech LLC office
    coordinates: {
      lat: 40.2086807,
      lng: 44.5306447,
    },
    // Google Maps embed URL for Fimetech LLC (place ID based)
    mapEmbedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3047.5!2d44.5284!3d40.2087!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x406abd3487fc06af%3A0x2067141f37c179aa!2sFimetech%20LLC!5e0!3m2!1sen!2sam!4v1706000000000!5m2!1sen!2sam",
    // Direct link to Google Maps for directions
    mapsUrl:
      "https://www.google.com/maps/place/Fimetech+LLC/@40.2086807,44.5306447,17z",
  },
  founded: 2010,
  teamSize: 38,
  seniorRatio: 0.5,
  avgExperience: 12,
  turnoverRate: 0.05,
  spinoffs: 4,
  /**
   * Social media links
   * Set to empty string or null if not yet available
   * All social links are centralized here for easy updates
   */
  social: {
    linkedin: "https://www.linkedin.com/company/fimetech-llc",
    facebook: "https://www.facebook.com/fimetech",
    twitter: "", // To be added
    github: "", // To be added
    instagram: "", // To be added
    youtube: "", // To be added
  },
  logo: {
    width: 180,
    height: 45,
    path: "/logo/logo",
  },
} as const;

/**
 * Navigation links
 */
export const navLinks = [
  { href: "/expertise", label: "Expertise" },
  { href: "/lab", label: "Lab" },
  { href: "/manifesto", label: "Manifesto" },
  { href: "/connect", label: "Connect" },
] as const;

/**
 * Services data - The Four Pillars
 */
export const services: readonly {
  id: ExpertiseCategory;
  title: string;
  description: string;
  technologies: readonly string[];
  href: string;
}[] = [
  {
    id: "ai-ml",
    title: "AI & Machine Learning",
    description:
      "From computer vision to generative AI—intelligent systems that learn, adapt, and scale.",
    technologies: ["PyTorch", "TensorFlow", "LangChain", "OpenAI"],
    href: "/expertise/ai-ml",
  },
  {
    id: "data",
    title: "Data Engineering & Analytics",
    description:
      "Robust data systems that capture, process, and illuminate insights at scale.",
    technologies: ["PostgreSQL", "Snowflake", "Kafka", "Spark"],
    href: "/expertise/data",
  },
  {
    id: "embedded",
    title: "Embedded & Systems",
    description: "From compilers to firmware—engineering at the metal.",
    technologies: ["C/C++", "LLVM", "FPGA", "RISC-V"],
    href: "/expertise/embedded",
  },
  {
    id: "robotics",
    title: "Geospatial & Robotics",
    description:
      "Satellite imagery to companion robots—systems that perceive and navigate the world.",
    technologies: ["QGIS", "LiDAR", "ROS2", "SLAM"],
    href: "/expertise/robotics",
  },
] as const;

/**
 * Tech stack for the ticker
 * Row 1: AI/ML/Data Layer
 * Row 2: Systems/Infrastructure Layer
 */
export const techStackRow1 = [
  // Core ML
  "Python",
  "PyTorch",
  "TensorFlow",
  "JAX",
  "ONNX",
  "TensorRT",
  // GenAI & LLMs
  "LangChain",
  "LlamaIndex",
  "OpenAI",
  "Hugging Face",
  // Vector & Search
  "Pinecone",
  "Milvus",
  "Chroma",
  // NLP & Vision
  "OpenCV",
  "SpaCy",
  "Whisper",
  // Analytics
  "Pandas",
  "Spark",
  "dbt",
] as const;

export const techStackRow2 = [
  // Languages
  "C/C++",
  "Rust",
  "Go",
  "TypeScript",
  // Low-level
  "LLVM",
  "RISC-V",
  "ARM",
  "FPGA",
  "Verilog",
  // Robotics & Geo
  "ROS2",
  "QGIS",
  "LiDAR",
  "SLAM",
  // Infrastructure
  "Docker",
  "Kubernetes",
  "AWS",
  "GCP",
  // Data
  "PostgreSQL",
  "Redis",
  "Kafka",
] as const;
