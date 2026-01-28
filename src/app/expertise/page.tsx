import { Card, CardDescription, CardTitle } from "@/components/ui";
import { services } from "@/lib/constants";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Expertise",
  description:
    "Deep technical capabilities in AI/ML, Embedded Systems, and Robotics engineering.",
};

const icons = {
  "ai-ml": (
    <svg
      className='h-16 w-16'
      fill='none'
      viewBox='0 0 48 48'
      stroke='currentColor'
      strokeWidth={1}
    >
      <circle cx='24' cy='24' r='20' />
      <circle cx='24' cy='24' r='8' />
      <path d='M24 4v8M24 36v8M4 24h8M36 24h8M10 10l6 6M32 32l6 6M10 38l6-6M32 16l6-6' />
    </svg>
  ),
  embedded: (
    <svg
      className='h-16 w-16'
      fill='none'
      viewBox='0 0 48 48'
      stroke='currentColor'
      strokeWidth={1}
    >
      <rect x='8' y='8' width='32' height='32' rx='4' />
      <rect x='16' y='16' width='16' height='16' rx='2' />
      <path d='M4 16h4M4 24h4M4 32h4M40 16h4M40 24h4M40 32h4M16 4v4M24 4v4M32 4v4M16 40v4M24 40v4M32 40v4' />
    </svg>
  ),
  robotics: (
    <svg
      className='h-16 w-16'
      fill='none'
      viewBox='0 0 48 48'
      stroke='currentColor'
      strokeWidth={1}
    >
      <circle cx='24' cy='14' r='10' />
      <path d='M14 24v14a4 4 0 004 4h12a4 4 0 004-4V24' />
      <circle cx='20' cy='12' r='2' fill='currentColor' />
      <circle cx='28' cy='12' r='2' fill='currentColor' />
      <path d='M8 28h6M34 28h6M20 34h8' />
    </svg>
  ),
};

export default function ExpertisePage() {
  return (
    <div className='min-h-screen pt-24'>
      {/* Header */}
      <section className='mx-auto max-w-[var(--content-width)] px-6 py-16'>
        <h1 className='font-[family-name:var(--font-geist)] text-[var(--text-2xl)] font-bold tracking-tight text-text-primary'>
          Our Expertise
        </h1>
        <p className='mt-4 max-w-2xl text-lg text-text-secondary'>
          We operate at the intersection of intelligence and hardware, building
          systems that think, sense, and act in the physical world.
        </p>
      </section>

      {/* Services Grid */}
      <section className='mx-auto max-w-[var(--content-width)] px-6 pb-24'>
        <div className='grid gap-8 md:grid-cols-3'>
          {services.map((service) => (
            <Link key={service.id} href={service.href} className='block group'>
              <Card interactive className='h-full'>
                <div className='mb-6 text-text-secondary transition-colors group-hover:text-green-500'>
                  {icons[service.id as keyof typeof icons]}
                </div>
                <CardTitle className='mb-3'>{service.title}</CardTitle>
                <CardDescription className='mb-6'>
                  {service.description}
                </CardDescription>
                <div className='flex flex-wrap gap-2'>
                  {service.technologies.map((tech) => (
                    <span
                      key={tech}
                      className='rounded-full border border-glass-border bg-bg-elevated px-3 py-1 font-[family-name:var(--font-jetbrains-mono)] text-xs text-text-muted'
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

      {/* Methodology Section */}
      <section className='border-t border-glass-border bg-bg-surface/30'>
        <div className='mx-auto max-w-[var(--content-width)] px-6 py-24'>
          <h2 className='font-[family-name:var(--font-geist)] text-[var(--text-xl)] font-bold tracking-tight text-text-primary'>
            Our Approach
          </h2>
          <div className='mt-12 grid gap-12 md:grid-cols-3'>
            {[
              {
                step: "01",
                title: "Understand",
                description:
                  "Deep-dive into your domain. We don't just build features—we understand the physics, constraints, and edge cases of your problem.",
              },
              {
                step: "02",
                title: "Architect",
                description:
                  "Design systems that scale. We plan for the 10x case from day one, with clean interfaces and robust error handling.",
              },
              {
                step: "03",
                title: "Deliver",
                description:
                  "Ship production-ready code. We don't hand off prototypes—we deliver systems that run in the real world.",
              },
            ].map((item) => (
              <div key={item.step}>
                <span className='font-[family-name:var(--font-jetbrains-mono)] text-sm text-green-500'>
                  {item.step}
                </span>
                <h3 className='mt-2 font-[family-name:var(--font-geist)] text-lg font-semibold text-text-primary'>
                  {item.title}
                </h3>
                <p className='mt-2 text-sm text-text-secondary'>
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
