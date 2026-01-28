import { ButtonLink } from "@/components/ui";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Manifesto",
  description:
    "Our engineering philosophy. We build systems that matter—reliable, performant, and elegant.",
};

const principles = [
  {
    number: "01",
    title: "Substance Over Style",
    description:
      "We measure success in uptime, latency, and accuracy—not slides. Demo day is nice, but production day is what counts.",
  },
  {
    number: "02",
    title: "First Principles Thinking",
    description:
      "We question assumptions. When the textbook solution doesn't fit, we derive our own from the physics of the problem.",
  },
  {
    number: "03",
    title: "Ship Incrementally",
    description:
      "We prototype as we research. We ship weekly, learn constantly, and iterate toward the right solution—validating in practice, not just theory.",
  },
  {
    number: "04",
    title: "Own the Outcome",
    description:
      "We're fully responsible for project success. From inception to production, we work hand-in-hand with partners to ensure the best results.",
  },
  {
    number: "05",
    title: "Write for the Reader",
    description:
      "Code is read more than it's written. We optimize for clarity, because tomorrow's engineer shouldn't need a decoder ring.",
  },
  {
    number: "06",
    title: "Complexity is the Enemy",
    description:
      "Simple systems are reliable systems. We fight complexity at every layer—from architecture to APIs.",
  },
  {
    number: "07",
    title: "Going Far Together",
    description:
      "We prefer long-term collaborations over short-term wins. Decade-long partnerships take both us and our clients to heights neither could reach alone.",
  },
];

const skills = [
  // AI & Machine Learning
  { name: "Python", category: "ai-ml" },
  { name: "PyTorch", category: "ai-ml" },
  { name: "TensorFlow", category: "ai-ml" },
  { name: "LangChain", category: "ai-ml" },
  { name: "OpenCV", category: "ai-ml" },
  { name: "TensorRT", category: "ai-ml" },
  { name: "Hugging Face", category: "ai-ml" },
  // Data Engineering
  { name: "PostgreSQL", category: "data" },
  { name: "Kafka", category: "data" },
  { name: "Spark", category: "data" },
  { name: "dbt", category: "data" },
  { name: "Snowflake", category: "data" },
  { name: "Airflow", category: "data" },
  // Embedded & Systems
  { name: "C/C++", category: "embedded" },
  { name: "LLVM", category: "embedded" },
  { name: "FPGA", category: "embedded" },
  { name: "RISC-V", category: "embedded" },
  { name: "Rust", category: "embedded" },
  { name: "Zephyr", category: "embedded" },
  // Geospatial & Robotics
  { name: "ROS2", category: "robotics" },
  { name: "QGIS", category: "robotics" },
  { name: "LiDAR", category: "robotics" },
  { name: "SLAM", category: "robotics" },
  { name: "Nav2", category: "robotics" },
  { name: "Gazebo", category: "robotics" },
];

export default function ManifestoPage() {
  return (
    <div className='min-h-screen pt-24'>
      {/* Header */}
      <section className='mx-auto max-w-[var(--content-width)] px-6 py-16'>
        <h1 className='font-[family-name:var(--font-geist)] text-[var(--text-2xl)] font-bold tracking-tight text-text-primary'>
          Manifesto
        </h1>
        <p className='mt-4 max-w-2xl text-lg text-text-secondary'>
          We are engineers. We build systems that matter—reliable, performant,
          and elegant. These are the principles that guide our work.
        </p>
      </section>

      {/* Principles */}
      <section className='mx-auto max-w-[var(--content-width)] px-6 pb-24'>
        <div className='grid gap-8 md:grid-cols-2 lg:grid-cols-3'>
          {principles.map((principle) => (
            <div
              key={principle.number}
              className='glass glass-glow rounded-2xl p-6'
            >
              <span className='font-[family-name:var(--font-jetbrains-mono)] text-sm text-green-500'>
                {principle.number}
              </span>
              <h3 className='mt-3 font-[family-name:var(--font-geist)] text-lg font-semibold text-text-primary'>
                {principle.title}
              </h3>
              <p className='mt-2 text-sm text-text-secondary'>
                {principle.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Skill Topology */}
      <section className='border-t border-glass-border bg-bg-surface/30'>
        <div className='mx-auto max-w-[var(--content-width)] px-6 py-24'>
          <h2 className='font-[family-name:var(--font-geist)] text-[var(--text-xl)] font-bold tracking-tight text-text-primary'>
            Our Brain
          </h2>
          <p className='mt-4 max-w-2xl text-text-secondary'>
            A neural network of expertise—competencies that cluster around four
            gravitational centers: AI, Data, Embedded Systems, and
            Geospatial/Robotics.
          </p>

          {/* Skill Nodes */}
          <div className='mt-12 flex flex-wrap gap-3'>
            {skills.map((skill) => (
              <span
                key={skill.name}
                className='rounded-full border border-green-500/30 bg-green-500/10 px-4 py-2 font-[family-name:var(--font-jetbrains-mono)] text-sm text-green-400 transition-all hover:scale-105 hover:bg-green-500/20'
              >
                {skill.name}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Quote / Philosophy */}
      <section className='mx-auto max-w-[var(--content-width)] px-6 py-24'>
        <blockquote className='border-l-2 border-green-500 pl-6'>
          <p className='font-[family-name:var(--font-geist)] text-xl font-medium italic text-text-primary md:text-2xl'>
            &ldquo;The best code is no code at all. The second best is code so
            clear it explains itself.&rdquo;
          </p>
          <footer className='mt-4 text-sm text-text-muted'>
            — Engineering Philosophy
          </footer>
        </blockquote>
      </section>

      {/* CTA */}
      <section className='border-t border-glass-border'>
        <div className='mx-auto max-w-[var(--content-width)] px-6 py-24 text-center'>
          <h2 className='font-[family-name:var(--font-geist)] text-xl font-medium text-text-primary'>
            Want to work with us?
          </h2>
          <div className='mt-6'>
            <ButtonLink href='/connect' variant='primary' size='lg'>
              Start a Conversation
            </ButtonLink>
          </div>
        </div>
      </section>
    </div>
  );
}
