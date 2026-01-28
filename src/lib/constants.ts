/**
 * Site metadata and configuration
 */
export const siteConfig = {
  name: "Fimetech",
  description:
    "Elite engineering consultancy specializing in AI/ML, Embedded Systems, and Robotics.",
  url: "https://fimetech.com",
  tagline: "We engineer intelligence into machines.",
  email: "hello@fimetech.com",
  logo: {
    // Logo dimensions (adjust based on your actual logo)
    width: 180,
    height: 45,
    // Logo will be automatically detected from /public/logo/ directory
    // Supported formats: SVG (preferred), WebP, PNG
    path: "/logo/logo", // extension will be auto-detected
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
 * Services data
 */
export const services = [
  {
    id: "ai-ml",
    title: "AI / ML",
    description: "Intelligent systems that learn, adapt, and scale.",
    technologies: ["PyTorch", "TensorFlow", "ONNX", "CUDA"],
    href: "/expertise/ai-ml",
  },
  {
    id: "embedded",
    title: "Embedded Systems",
    description: "Hardware-software integration at the edge.",
    technologies: ["C++", "Rust", "Zephyr", "FPGA"],
    href: "/expertise/embedded",
  },
  {
    id: "robotics",
    title: "Robotics",
    description: "Autonomous machines that perceive and act.",
    technologies: ["ROS2", "SLAM", "Motion Planning", "Control"],
    href: "/expertise/robotics",
  },
] as const;

/**
 * Tech stack for the ticker
 */
export const techStackRow1 = [
  "Python",
  "PyTorch",
  "TensorFlow",
  "C++",
  "Rust",
  "Go",
  "TypeScript",
  "CUDA",
  "OpenCV",
  "ONNX",
  "JAX",
  "NumPy",
] as const;

export const techStackRow2 = [
  "ROS2",
  "FPGA",
  "Zephyr",
  "Kubernetes",
  "Docker",
  "AWS",
  "GCP",
  "Linux",
  "ARM",
  "RISC-V",
  "Verilog",
  "SystemC",
] as const;
