"use client";

import { motion } from "framer-motion";

/**
 * Technology categories aligned with the 4 expertise pillars
 */
const techCategories = [
  {
    label: "AI / ML",
    technologies: [
      "PyTorch",
      "TensorFlow",
      "JAX",
      "LangChain",
      "OpenAI",
      "Hugging Face",
      "OpenCV",
      "ONNX",
    ],
  },
  {
    label: "Data",
    technologies: [
      "PostgreSQL",
      "Spark",
      "Kafka",
      "Redis",
      "Pandas",
      "dbt",
      "Pinecone",
      "Milvus",
    ],
  },
  {
    label: "Embedded",
    technologies: [
      "C/C++",
      "Rust",
      "LLVM",
      "RISC-V",
      "ARM",
      "FPGA",
      "Verilog",
      "Go",
    ],
  },
  {
    label: "Robotics",
    technologies: [
      "ROS2",
      "QGIS",
      "LiDAR",
      "SLAM",
      "Docker",
      "Kubernetes",
      "AWS",
      "GCP",
    ],
  },
] as const;

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const categoryVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const techVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.4,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

/**
 * Tech Stack section - Categorized technology display
 * Replaces the horizontal ticker with an elegant, pillar-aligned grid
 */
export function TechStack() {
  return (
    <section className='relative overflow-hidden border-y border-glass-border bg-bg-surface/30 py-16 md:py-24'>
      {/* Subtle ambient glow */}
      <div className='pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-green-500/[0.02] to-transparent' />

      <div className='mx-auto max-w-[var(--content-width)] px-6'>
        {/* Section header */}
        <motion.div
          className='mb-12 text-center md:mb-16'
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className='font-[family-name:var(--font-jetbrains-mono)] text-xs uppercase tracking-[0.2em] text-text-muted'>
            Our Stack
          </p>
        </motion.div>

        {/* Technology grid */}
        <motion.div
          className='grid gap-8 md:grid-cols-2 lg:grid-cols-4 lg:gap-6'
          variants={containerVariants}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, margin: "-50px" }}
        >
          {techCategories.map((category) => (
            <motion.div
              key={category.label}
              className='group relative'
              variants={categoryVariants}
            >
              {/* Category card */}
              <div className='relative rounded-xl border border-glass-border/50 bg-bg-void/50 p-5 transition-all duration-500 hover:border-green-500/20 hover:bg-bg-elevated'>
                {/* Category label */}
                <div className='mb-4 flex items-center gap-2'>
                  <div className='h-1.5 w-1.5 rounded-full bg-green-500/60 transition-colors duration-300 group-hover:bg-green-500' />
                  <span className='font-[family-name:var(--font-jetbrains-mono)] text-xs font-medium uppercase tracking-wider text-text-secondary transition-colors duration-300 group-hover:text-green-400'>
                    {category.label}
                  </span>
                </div>

                {/* Technologies */}
                <motion.div
                  className='flex flex-wrap gap-2'
                  variants={containerVariants}
                >
                  {category.technologies.map((tech) => (
                    <motion.span
                      key={tech}
                      className='inline-block rounded-md border border-glass-border/30 bg-bg-surface/50 px-2.5 py-1 font-[family-name:var(--font-jetbrains-mono)] text-xs text-text-muted transition-all duration-300 hover:border-green-500/30 hover:bg-green-500/5 hover:text-text-secondary'
                      variants={techVariants}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </motion.div>

                {/* Subtle corner accent on hover */}
                <div className='absolute -right-px -top-px h-4 w-4 rounded-bl-xl rounded-tr-xl border-b border-l border-transparent transition-colors duration-500 group-hover:border-green-500/20' />
                <div className='absolute -bottom-px -left-px h-4 w-4 rounded-bl-xl rounded-tr-xl border-r border-t border-transparent transition-colors duration-500 group-hover:border-green-500/20' />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom accent line */}
        <motion.div
          className='mx-auto mt-12 h-px w-24 bg-gradient-to-r from-transparent via-green-500/30 to-transparent md:mt-16'
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
        />
      </div>
    </section>
  );
}
