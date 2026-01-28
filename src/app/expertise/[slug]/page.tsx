import { ButtonLink } from "@/components/ui";
import { services } from "@/lib/constants";
import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

type Props = {
  params: Promise<{ slug: string }>;
};

const expertiseContent = {
  "ai-ml": {
    title: "AI / Machine Learning",
    subtitle: "Intelligent systems that learn, adapt, and scale.",
    description:
      "We build production-grade AI systems that go beyond proof-of-concept. From computer vision pipelines to natural language processing, we engineer intelligence that performs reliably in the real world.",
    capabilities: [
      {
        title: "Computer Vision",
        items: [
          "Object detection and tracking",
          "Semantic segmentation",
          "3D reconstruction",
          "Video analytics",
        ],
      },
      {
        title: "Natural Language",
        items: [
          "Document understanding",
          "Information extraction",
          "Conversational AI",
          "Semantic search",
        ],
      },
      {
        title: "ML Infrastructure",
        items: [
          "Model optimization",
          "Edge deployment",
          "MLOps pipelines",
          "A/B testing frameworks",
        ],
      },
    ],
    technologies: [
      "PyTorch",
      "TensorFlow",
      "ONNX",
      "CUDA",
      "TensorRT",
      "Triton",
      "MLflow",
      "Kubernetes",
    ],
  },
  embedded: {
    title: "Embedded Systems",
    subtitle: "Hardware-software integration at the edge.",
    description:
      "We design and implement firmware and embedded software for resource-constrained environments. From sensor interfaces to real-time operating systems, we build software that runs reliably on the metal.",
    capabilities: [
      {
        title: "Firmware Development",
        items: [
          "Bare-metal programming",
          "RTOS integration",
          "Bootloader design",
          "OTA updates",
        ],
      },
      {
        title: "Hardware Interfaces",
        items: [
          "Sensor integration",
          "Motor control",
          "Communication protocols",
          "Power management",
        ],
      },
      {
        title: "System Design",
        items: [
          "Architecture review",
          "Component selection",
          "Thermal analysis",
          "EMC compliance",
        ],
      },
    ],
    technologies: [
      "C++",
      "Rust",
      "Zephyr",
      "FreeRTOS",
      "FPGA",
      "ARM",
      "RISC-V",
      "CAN",
    ],
  },
  robotics: {
    title: "Robotics",
    subtitle: "Autonomous machines that perceive and act.",
    description:
      "We build the brains of robots—perception, planning, and control systems that enable autonomous operation. From warehouse logistics to surgical assistance, we engineer robots that work alongside humans.",
    capabilities: [
      {
        title: "Perception",
        items: [
          "SLAM and localization",
          "Multi-sensor fusion",
          "Object recognition",
          "Scene understanding",
        ],
      },
      {
        title: "Planning",
        items: [
          "Motion planning",
          "Task scheduling",
          "Behavior trees",
          "Multi-agent coordination",
        ],
      },
      {
        title: "Control",
        items: [
          "Trajectory tracking",
          "Force control",
          "Adaptive control",
          "Safety systems",
        ],
      },
    ],
    technologies: [
      "ROS2",
      "Gazebo",
      "MoveIt",
      "Nav2",
      "OpenCV",
      "PCL",
      "Isaac",
      "Webots",
    ],
  },
};

export async function generateStaticParams() {
  return services.map((service) => ({
    slug: service.id,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const content = expertiseContent[slug as keyof typeof expertiseContent];

  if (!content) {
    return { title: "Not Found" };
  }

  return {
    title: content.title,
    description: content.description,
  };
}

export default async function ExpertiseDetailPage({ params }: Props) {
  const { slug } = await params;
  const content = expertiseContent[slug as keyof typeof expertiseContent];

  if (!content) {
    notFound();
  }

  return (
    <div className='min-h-screen pt-24'>
      {/* Header */}
      <section className='mx-auto max-w-[var(--content-width)] px-6 py-16'>
        <Link
          href='/expertise'
          className='mb-6 inline-flex items-center text-sm text-text-secondary transition-colors hover:text-text-primary'
        >
          <svg
            className='mr-2 h-4 w-4'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
            strokeWidth={2}
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M7 16l-4-4m0 0l4-4m-4 4h18'
            />
          </svg>
          All Expertise
        </Link>

        <h1 className='font-[family-name:var(--font-geist)] text-[var(--text-2xl)] font-bold tracking-tight text-text-primary'>
          {content.title}
        </h1>
        <p className='mt-2 text-xl text-text-secondary'>{content.subtitle}</p>
        <p className='mt-6 max-w-3xl text-text-secondary'>
          {content.description}
        </p>
      </section>

      {/* Capabilities */}
      <section className='mx-auto max-w-[var(--content-width)] px-6 pb-16'>
        <h2 className='mb-8 font-[family-name:var(--font-geist)] text-xl font-semibold text-text-primary'>
          Capabilities
        </h2>
        <div className='grid gap-8 md:grid-cols-3'>
          {content.capabilities.map((capability) => (
            <div
              key={capability.title}
              className='glass glass-glow rounded-2xl p-6'
            >
              <h3 className='mb-4 font-[family-name:var(--font-geist)] font-semibold text-text-primary'>
                {capability.title}
              </h3>
              <ul className='space-y-2'>
                {capability.items.map((item) => (
                  <li
                    key={item}
                    className='flex items-center text-sm text-text-secondary'
                  >
                    <span className='mr-2 h-1 w-1 rounded-full bg-accent-blue' />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Technologies */}
      <section className='border-t border-glass-border bg-bg-surface/30'>
        <div className='mx-auto max-w-[var(--content-width)] px-6 py-16'>
          <h2 className='mb-8 font-[family-name:var(--font-geist)] text-xl font-semibold text-text-primary'>
            Technologies
          </h2>
          <div className='flex flex-wrap gap-3'>
            {content.technologies.map((tech) => (
              <span
                key={tech}
                className='rounded-full border border-glass-border bg-bg-elevated px-4 py-2 font-[family-name:var(--font-jetbrains-mono)] text-sm text-text-secondary'
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className='mx-auto max-w-[var(--content-width)] px-6 py-24 text-center'>
        <h2 className='font-[family-name:var(--font-geist)] text-xl font-medium text-text-primary'>
          Have a project in mind?
        </h2>
        <div className='mt-6'>
          <ButtonLink href='/connect' variant='primary' size='lg'>
            Start a Conversation
          </ButtonLink>
        </div>
      </section>
    </div>
  );
}
