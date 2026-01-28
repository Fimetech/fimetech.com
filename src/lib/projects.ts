/**
 * Case study/project data
 */
export interface Project {
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  featured: boolean;
  category: "ai-ml" | "embedded" | "robotics";
  technologies: string[];
  metrics?: {
    label: string;
    value: string;
  }[];
  image?: string;
}

export const projects: Project[] = [
  {
    slug: "autonomous-navigation",
    title: "Autonomous Navigation System",
    subtitle: "Real-time SLAM for warehouse robotics",
    description:
      "Developed a complete autonomous navigation stack for indoor logistics robots, achieving 99.7% navigation accuracy in dynamic warehouse environments with moving obstacles and changing layouts.",
    featured: true,
    category: "robotics",
    technologies: ["ROS2", "C++", "LiDAR", "SLAM", "Nav2"],
    metrics: [
      { label: "Navigation Accuracy", value: "99.7%" },
      { label: "Processing Latency", value: "<50ms" },
      { label: "Fleet Size", value: "200+ robots" },
    ],
  },
  {
    slug: "defect-detection",
    title: "AI Defect Detection Pipeline",
    subtitle: "Computer vision for manufacturing QA",
    description:
      "Built an end-to-end defect detection system using deep learning, processing high-resolution images at 60fps with sub-millimeter accuracy for semiconductor manufacturing.",
    featured: true,
    category: "ai-ml",
    technologies: ["PyTorch", "CUDA", "TensorRT", "OpenCV", "ONNX"],
    metrics: [
      { label: "Detection Accuracy", value: "99.9%" },
      { label: "Throughput", value: "60 fps" },
      { label: "False Positive Rate", value: "<0.1%" },
    ],
  },
  {
    slug: "motor-controller",
    title: "High-Performance Motor Controller",
    subtitle: "FPGA-based servo control system",
    description:
      "Designed and implemented a custom motor controller achieving microsecond-level control loops for precision robotics applications, including surgical robots and CNC machines.",
    featured: false,
    category: "embedded",
    technologies: ["FPGA", "Verilog", "C++", "EtherCAT", "SPI"],
    metrics: [
      { label: "Control Loop", value: "1μs" },
      { label: "Position Accuracy", value: "±0.5μm" },
      { label: "Bandwidth", value: "10kHz" },
    ],
  },
  {
    slug: "edge-ml-inference",
    title: "Edge ML Inference Engine",
    subtitle: "Optimized neural network runtime",
    description:
      "Created a custom inference engine for resource-constrained edge devices, achieving 10x speedup over TensorFlow Lite while maintaining accuracy for real-time object detection.",
    featured: false,
    category: "ai-ml",
    technologies: ["C++", "ARM", "NEON", "TensorRT", "ONNX"],
    metrics: [
      { label: "Speedup vs TFLite", value: "10x" },
      { label: "Memory Usage", value: "-40%" },
      { label: "Power Consumption", value: "-30%" },
    ],
  },
  {
    slug: "sensor-fusion",
    title: "Multi-Modal Sensor Fusion",
    subtitle: "Perception for autonomous vehicles",
    description:
      "Implemented a sensor fusion system combining LiDAR, camera, and radar data for robust object detection and tracking in autonomous vehicle applications.",
    featured: false,
    category: "robotics",
    technologies: ["ROS2", "Python", "C++", "PointCloud", "Kalman"],
    metrics: [
      { label: "Detection Range", value: "200m" },
      { label: "Tracking Accuracy", value: "98.5%" },
      { label: "Sensor Latency", value: "<20ms" },
    ],
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getFeaturedProjects(): Project[] {
  return projects.filter((p) => p.featured);
}

export function getProjectsByCategory(
  category: Project["category"],
): Project[] {
  return projects.filter((p) => p.category === category);
}
