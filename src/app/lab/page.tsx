import { Card, CardDescription, CardTitle } from "@/components/ui";
import { projects } from "@/lib/projects";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Lab",
  description:
    "Case studies and technical deep-dives from our engineering projects.",
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

export default function LabPage() {
  const featuredProjects = projects.filter((p) => p.featured);
  const otherProjects = projects.filter((p) => !p.featured);

  return (
    <div className='min-h-screen pt-24'>
      {/* Header */}
      <section className='mx-auto max-w-[var(--content-width)] px-6 py-16'>
        <h1 className='font-[family-name:var(--font-geist)] text-[var(--text-2xl)] font-bold tracking-tight text-text-primary'>
          From the Lab
        </h1>
        <p className='mt-4 max-w-2xl text-lg text-text-secondary'>
          Technical deep-dives into our engineering work. No marketing
          fluff—just the architecture, challenges, and solutions.
        </p>
      </section>

      {/* Featured Projects */}
      <section className='mx-auto max-w-[var(--content-width)] px-6 pb-16'>
        <h2 className='mb-8 font-[family-name:var(--font-jetbrains-mono)] text-sm text-text-muted'>
          Featured Work
        </h2>
        <div className='grid gap-8 md:grid-cols-2'>
          {featuredProjects.map((project) => (
            <Link
              key={project.slug}
              href={`/lab/${project.slug}`}
              className='group block'
            >
              <Card interactive className='h-full'>
                {/* Category Badge */}
                <span
                  className={`mb-4 inline-block rounded-full border px-3 py-1 font-[family-name:var(--font-jetbrains-mono)] text-xs ${
                    categoryColors[project.category]
                  }`}
                >
                  {categoryLabels[project.category]}
                </span>

                <CardTitle className='mb-2 group-hover:text-accent-green transition-colors'>
                  {project.title}
                </CardTitle>
                <CardDescription className='mb-4'>
                  {project.subtitle}
                </CardDescription>

                {/* Metrics */}
                {project.metrics && (
                  <div className='mb-4 grid grid-cols-3 gap-4'>
                    {project.metrics.map((metric) => (
                      <div key={metric.label}>
                        <div className='font-[family-name:var(--font-jetbrains-mono)] text-lg font-semibold text-accent-green'>
                          {metric.value}
                        </div>
                        <div className='text-xs text-text-muted'>
                          {metric.label}
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {/* Technologies */}
                <div className='flex flex-wrap gap-2'>
                  {project.technologies.slice(0, 4).map((tech) => (
                    <span
                      key={tech}
                      className='font-[family-name:var(--font-jetbrains-mono)] text-xs text-text-muted'
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </section>

      {/* Other Projects */}
      <section className='border-t border-glass-border bg-bg-surface/30'>
        <div className='mx-auto max-w-[var(--content-width)] px-6 py-16'>
          <h2 className='mb-8 font-[family-name:var(--font-jetbrains-mono)] text-sm text-text-muted'>
            More Projects
          </h2>
          <div className='grid gap-6 md:grid-cols-3'>
            {otherProjects.map((project) => (
              <Link
                key={project.slug}
                href={`/lab/${project.slug}`}
                className='group block'
              >
                <Card interactive className='h-full'>
                  <span
                    className={`mb-3 inline-block rounded-full border px-2 py-0.5 font-[family-name:var(--font-jetbrains-mono)] text-xs ${
                      categoryColors[project.category]
                    }`}
                  >
                    {categoryLabels[project.category]}
                  </span>
                  <h3 className='font-[family-name:var(--font-geist)] font-semibold text-text-primary group-hover:text-accent-green transition-colors'>
                    {project.title}
                  </h3>
                  <p className='mt-1 text-sm text-text-secondary'>
                    {project.subtitle}
                  </p>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
