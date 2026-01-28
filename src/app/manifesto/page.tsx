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
      "We don't disappear for six months. We ship weekly, learn constantly, and iterate toward the right solution.",
  },
  {
    number: "04",
    title: "Own the Outcome",
    description:
      "We're not vendors—we're partners. If it breaks at 3 AM, we're already debugging it.",
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
];

const skills = [
  { name: "Python", category: "ai" },
  { name: "PyTorch", category: "ai" },
  { name: "TensorFlow", category: "ai" },
  { name: "CUDA", category: "ai" },
  { name: "ONNX", category: "ai" },
  { name: "C++", category: "embedded" },
  { name: "Rust", category: "embedded" },
  { name: "Zephyr", category: "embedded" },
  { name: "FPGA", category: "embedded" },
  { name: "ARM", category: "embedded" },
  { name: "ROS2", category: "robotics" },
  { name: "SLAM", category: "robotics" },
  { name: "Nav2", category: "robotics" },
  { name: "MoveIt", category: "robotics" },
  { name: "Gazebo", category: "robotics" },
];

const categoryColors = {
  ai: "bg-accent-green/20 border-accent-green/30 text-accent-green",
  embedded: "bg-accent-lime/20 border-accent-lime/30 text-accent-lime",
  robotics: "bg-accent-emerald/20 border-accent-emerald/30 text-accent-emerald",
};

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
              <span className='font-[family-name:var(--font-jetbrains-mono)] text-sm text-accent-green'>
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
            A neural network of expertise—competencies that cluster around three
            gravitational centers: AI, Embedded, and Robotics.
          </p>

          {/* Skill Nodes */}
          <div className='mt-12 flex flex-wrap gap-3'>
            {skills.map((skill) => (
              <span
                key={skill.name}
                className={`rounded-full border px-4 py-2 font-[family-name:var(--font-jetbrains-mono)] text-sm transition-all hover:scale-105 ${
                  categoryColors[skill.category as keyof typeof categoryColors]
                }`}
              >
                {skill.name}
              </span>
            ))}
          </div>

          {/* Legend */}
          <div className='mt-8 flex flex-wrap gap-6 text-sm'>
            <div className='flex items-center gap-2'>
              <span className='h-3 w-3 rounded-full bg-accent-green/50' />
              <span className='text-text-muted'>AI / ML</span>
            </div>
            <div className='flex items-center gap-2'>
              <span className='h-3 w-3 rounded-full bg-accent-lime/50' />
              <span className='text-text-muted'>Embedded</span>
            </div>
            <div className='flex items-center gap-2'>
              <span className='h-3 w-3 rounded-full bg-accent-emerald/50' />
              <span className='text-text-muted'>Robotics</span>
            </div>
          </div>
        </div>
      </section>

      {/* Quote / Philosophy */}
      <section className='mx-auto max-w-[var(--content-width)] px-6 py-24'>
        <blockquote className='border-l-2 border-accent-green pl-6'>
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
