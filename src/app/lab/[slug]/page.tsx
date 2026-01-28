import { ButtonLink } from "@/components/ui";
import { getProjectBySlug, projects } from "@/lib/projects";
import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

type Props = {
  params: Promise<{ slug: string }>;
};

const categoryLabels = {
  "ai-ml": "AI / ML",
  embedded: "Embedded",
  robotics: "Robotics",
};

const categoryColors = {
  "ai-ml": "border-accent-green/30 bg-accent-green/10 text-accent-green",
  embedded: "border-accent-lime/30 bg-accent-lime/10 text-accent-lime",
  robotics: "border-accent-emerald/30 bg-accent-emerald/10 text-accent-emerald",
};

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return { title: "Not Found" };
  }

  return {
    title: project.title,
    description: project.description,
  };
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <div className='min-h-screen pt-24'>
      {/* Header */}
      <section className='mx-auto max-w-[var(--content-width)] px-6 py-16'>
        <Link
          href='/lab'
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
          All Projects
        </Link>

        {/* Category Badge */}
        <span
          className={`mb-4 inline-block rounded-full border px-3 py-1 font-[family-name:var(--font-jetbrains-mono)] text-xs ${
            categoryColors[project.category]
          }`}
        >
          {categoryLabels[project.category]}
        </span>

        <h1 className='font-[family-name:var(--font-geist)] text-[var(--text-2xl)] font-bold tracking-tight text-text-primary'>
          {project.title}
        </h1>
        <p className='mt-2 text-xl text-text-secondary'>{project.subtitle}</p>
      </section>

      {/* Metrics */}
      {project.metrics && (
        <section className='border-y border-glass-border bg-bg-surface/30'>
          <div className='mx-auto max-w-[var(--content-width)] px-6 py-12'>
            <div className='grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-4'>
              {project.metrics.map((metric) => (
                <div key={metric.label}>
                  <div className='font-[family-name:var(--font-jetbrains-mono)] text-3xl font-bold text-accent-green'>
                    {metric.value}
                  </div>
                  <div className='mt-1 text-sm text-text-muted'>
                    {metric.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Content */}
      <section className='mx-auto max-w-[var(--content-width)] px-6 py-16'>
        <div className='grid gap-16 lg:grid-cols-3'>
          {/* Main Content */}
          <div className='lg:col-span-2'>
            <h2 className='mb-4 font-[family-name:var(--font-geist)] text-xl font-semibold text-text-primary'>
              Overview
            </h2>
            <p className='text-text-secondary leading-relaxed'>
              {project.description}
            </p>

            {/* Placeholder for detailed case study content */}
            <div className='mt-12 space-y-8'>
              <div>
                <h3 className='mb-3 font-[family-name:var(--font-geist)] text-lg font-semibold text-text-primary'>
                  The Challenge
                </h3>
                <p className='text-text-secondary'>
                  This section would contain a detailed description of the
                  technical challenges we faced and the constraints we needed to
                  work within. For a complete case study, this would be expanded
                  with specific technical details.
                </p>
              </div>

              <div>
                <h3 className='mb-3 font-[family-name:var(--font-geist)] text-lg font-semibold text-text-primary'>
                  Our Approach
                </h3>
                <p className='text-text-secondary'>
                  Here we would detail the architecture decisions, algorithms
                  used, and the iterative process we followed. This section
                  would include diagrams, code snippets, and technical
                  explanations.
                </p>
              </div>

              <div>
                <h3 className='mb-3 font-[family-name:var(--font-geist)] text-lg font-semibold text-text-primary'>
                  Results & Learnings
                </h3>
                <p className='text-text-secondary'>
                  The outcomes of the project, including performance metrics,
                  deployment details, and key learnings that informed future
                  projects.
                </p>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className='space-y-8'>
            {/* Technologies */}
            <div className='glass glass-glow rounded-2xl p-6'>
              <h3 className='mb-4 font-[family-name:var(--font-jetbrains-mono)] text-sm text-text-muted'>
                Technologies
              </h3>
              <div className='flex flex-wrap gap-2'>
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className='rounded-full border border-glass-border bg-bg-elevated px-3 py-1 font-[family-name:var(--font-jetbrains-mono)] text-sm text-text-secondary'
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Related Projects */}
            <div className='glass glass-glow rounded-2xl p-6'>
              <h3 className='mb-4 font-[family-name:var(--font-jetbrains-mono)] text-sm text-text-muted'>
                Related Projects
              </h3>
              <div className='space-y-3'>
                {projects
                  .filter(
                    (p) =>
                      p.category === project.category &&
                      p.slug !== project.slug,
                  )
                  .slice(0, 2)
                  .map((p) => (
                    <Link
                      key={p.slug}
                      href={`/lab/${p.slug}`}
                      className='block text-sm text-text-secondary transition-colors hover:text-text-primary'
                    >
                      {p.title}
                    </Link>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className='border-t border-glass-border'>
        <div className='mx-auto max-w-[var(--content-width)] px-6 py-24 text-center'>
          <h2 className='font-[family-name:var(--font-geist)] text-xl font-medium text-text-primary'>
            Interested in similar work?
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
