import { ButtonLink } from "@/components/ui";
import { services, type ExpertiseCategory } from "@/lib/constants";
import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

type Props = {
  params: Promise<{ slug: string }>;
};

interface ExpertiseContent {
  title: string;
  subtitle: string;
  description: string;
  capabilities: {
    title: string;
    items: string[];
  }[];
  technologies: string[];
}

const expertiseContent: Record<ExpertiseCategory, ExpertiseContent> = {
  "ai-ml": {
    title: "AI & Machine Learning",
    subtitle: "Intelligent systems that learn, adapt, and scale.",
    description:
      "We build production-grade AI systems that go beyond proof-of-concept. From computer vision pipelines processing satellite imagery to conversational AI handling millions of queries, we engineer intelligence that performs reliably in the real world.",
    capabilities: [
      {
        title: "Computer Vision",
        items: [
          "Object detection & tracking",
          "Semantic segmentation",
          "Medical imaging & diagnostics",
          "Video analytics",
          "3D reconstruction",
        ],
      },
      {
        title: "Natural Language & GenAI",
        items: [
          "Large Language Models",
          "RAG pipelines",
          "Agent-based systems",
          "Document understanding",
          "Semantic search",
        ],
      },
      {
        title: "Audio & Multimodal",
        items: [
          "Speech recognition (ASR)",
          "Voice activity detection",
          "Emotion recognition",
          "Multimodal fusion",
        ],
      },
      {
        title: "Predictive Intelligence",
        items: [
          "Predictive analytics",
          "Recommendation systems",
          "Anomaly detection",
          "Risk modeling",
        ],
      },
    ],
    technologies: [
      "PyTorch",
      "TensorFlow",
      "TensorRT",
      "ONNX",
      "OpenCV",
      "LangChain",
      "LlamaIndex",
      "OpenAI",
      "Hugging Face",
      "Pinecone",
      "Milvus",
      "XGBoost",
      "Scikit-learn",
      "SpaCy",
      "Whisper",
      "Kaldi",
      "AutoGen",
    ],
  },
  data: {
    title: "Data Engineering & Analytics",
    subtitle: "Robust data systems that capture, process, and illuminate.",
    description:
      "We architect data systems that handle the full lifecycle—from ingestion and transformation to analysis and visualization. Whether building real-time pipelines for streaming data or designing warehouses for petabyte-scale analytics, we ensure your data infrastructure is reliable, scalable, and insight-ready.",
    capabilities: [
      {
        title: "Data Architecture",
        items: [
          "Data warehouse design",
          "Lake/Lakehouse architecture",
          "Schema design",
          "Data modeling",
        ],
      },
      {
        title: "Pipelines & Processing",
        items: [
          "ETL/ELT development",
          "Stream processing",
          "Batch processing",
          "Data orchestration",
        ],
      },
      {
        title: "Analytics & BI",
        items: [
          "Business intelligence",
          "Interactive dashboards",
          "KPI frameworks",
          "Self-service analytics",
        ],
      },
      {
        title: "Data Operations",
        items: [
          "Data quality assurance",
          "Annotation pipelines",
          "Governance & lineage",
          "System integration",
        ],
      },
    ],
    technologies: [
      "PostgreSQL",
      "Snowflake",
      "BigQuery",
      "Databricks",
      "Redshift",
      "MongoDB",
      "Redis",
      "Kafka",
      "Spark",
      "Airflow",
      "dbt",
      "Fivetran",
      "Tableau",
      "Looker",
      "Metabase",
      "D3.js",
      "Firebase",
    ],
  },
  embedded: {
    title: "Embedded & Systems",
    subtitle:
      "Engineering at the metal—compilers, firmware, and hardware integration.",
    description:
      "We operate at the lowest levels of the stack, where microseconds matter and every byte counts. From custom LLVM-based compilers for novel architectures to DSP libraries optimized for real-time processing, we build the foundation that high-performance systems run on.",
    capabilities: [
      {
        title: "Compiler & Toolchain",
        items: [
          "LLVM-based compilers",
          "Assembler development",
          "Code generation",
          "Optimization passes",
          "Verification & validation",
        ],
      },
      {
        title: "EDA & Chip Design",
        items: [
          "Frontend R&D",
          "Simulation (Simulink)",
          "Place & route",
          "Bitstream generation",
          "RTL testing",
        ],
      },
      {
        title: "DSP & Signal Processing",
        items: [
          "DSP library development",
          "FIR/IIR filters",
          "Kalman filtering",
          "Real-time processing",
          "Audio codecs",
        ],
      },
      {
        title: "Hardware Integration",
        items: [
          "Firmware development",
          "RTOS integration",
          "BLE/Wireless",
          "Embedded AI optimization",
          "Platform porting",
        ],
      },
    ],
    technologies: [
      "C/C++",
      "Rust",
      "Assembly",
      "LLVM",
      "GCC",
      "RISC-V",
      "ARM",
      "FPGA",
      "Verilog",
      "SystemC",
      "Zephyr",
      "FreeRTOS",
      "NVIDIA Jetson",
      "Raspberry Pi",
      "XMOS",
      "Rockchip",
      "Qt",
      "Boost",
      "CMake",
      "EtherCAT",
    ],
  },
  robotics: {
    title: "Geospatial & Robotics",
    subtitle: "Systems that perceive and navigate the physical world.",
    description:
      "We build systems that understand space—from processing satellite imagery spanning continents to enabling robots that navigate dynamic environments. Our expertise spans the full perception-to-action pipeline: sensors, processing, spatial reasoning, and autonomous control.",
    capabilities: [
      {
        title: "Remote Sensing",
        items: [
          "Satellite imagery processing",
          "Aerial/Drone analytics",
          "LiDAR point clouds",
          "Hyperspectral/Multispectral data",
        ],
      },
      {
        title: "Geospatial Analysis",
        items: [
          "GIS development",
          "Vegetation analysis",
          "Risk modeling",
          "Change detection",
          "3D terrain reconstruction",
        ],
      },
      {
        title: "Perception",
        items: [
          "Multi-sensor fusion",
          "SLAM & localization",
          "Indoor positioning",
          "Scene understanding",
          "Object tracking",
        ],
      },
      {
        title: "Robotics & Autonomy",
        items: [
          "ROS2 development",
          "Motion planning",
          "Behavior systems",
          "Companion robotics",
          "Field operations",
        ],
      },
    ],
    technologies: [
      "QGIS",
      "ParaView",
      "GDAL",
      "Rasterio",
      "GeoPandas",
      "ROS2",
      "Nav2",
      "MoveIt",
      "Gazebo",
      "Isaac",
      "LiDAR SDKs",
      "PCL",
      "OpenCV",
      "Kalman Filters",
      "SLAM",
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
        <div className='grid gap-6 sm:grid-cols-2 lg:grid-cols-4'>
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
                    <span className='mr-2 h-1 w-1 rounded-full bg-green-500' />
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
