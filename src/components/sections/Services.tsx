"use client";

import {
  StaggerContainer,
  StaggerItem,
} from "@/components/motion/RevealOnScroll";
import { Card, CardDescription, CardTitle } from "@/components/ui";
import { services } from "@/lib/constants";
import Link from "next/link";

const icons: Record<string, React.ReactNode> = {
  "ai-ml": (
    <svg
      className='h-12 w-12'
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
  data: (
    <svg
      className='h-12 w-12'
      fill='none'
      viewBox='0 0 48 48'
      stroke='currentColor'
      strokeWidth={1}
    >
      <ellipse cx='24' cy='10' rx='18' ry='6' />
      <path d='M6 10v28c0 3.3 8 6 18 6s18-2.7 18-6V10' />
      <path d='M6 19c0 3.3 8 6 18 6s18-2.7 18-6' />
      <path d='M6 28c0 3.3 8 6 18 6s18-2.7 18-6' />
    </svg>
  ),
  embedded: (
    <svg
      className='h-12 w-12'
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
      className='h-12 w-12'
      fill='none'
      viewBox='0 0 48 48'
      stroke='currentColor'
      strokeWidth={1}
    >
      <circle cx='24' cy='12' r='8' />
      <path d='M14 20v16a4 4 0 004 4h12a4 4 0 004-4V20' />
      <circle cx='21' cy='11' r='2' fill='currentColor' />
      <circle cx='27' cy='11' r='2' fill='currentColor' />
      <path d='M8 26h6M34 26h6M20 32h8' />
      <path d='M24 4v-2M6 12l-4-2M42 12l4-2' />
    </svg>
  ),
};

/**
 * Services section with glassmorphism cards
 */
export function Services() {
  return (
    <section id='services' className='relative py-[var(--space-section)]'>
      <div className='mx-auto max-w-[var(--content-width)] px-6'>
        {/* Section Header */}
        <StaggerContainer className='mb-16 text-center'>
          <StaggerItem>
            <h2 className='font-[family-name:var(--font-geist)] text-[var(--text-2xl)] font-bold tracking-tight text-text-primary'>
              What We Build
            </h2>
          </StaggerItem>
          <StaggerItem>
            <p className='mx-auto mt-4 max-w-2xl text-text-secondary'>
              We deliver end-to-end engineering solutions across the full stack
              of intelligent systems.
            </p>
          </StaggerItem>
        </StaggerContainer>

        {/* Service Cards */}
        <StaggerContainer
          className='grid gap-6 sm:grid-cols-2 lg:grid-cols-4'
          staggerDelay={0.15}
        >
          {services.map((service) => (
            <StaggerItem key={service.id}>
              <Link href={service.href} className='block h-full'>
                <Card interactive className='group h-full'>
                  {/* Icon */}
                  <div className='mb-6 text-text-secondary transition-colors group-hover:text-green-500'>
                    {icons[service.id]}
                  </div>

                  {/* Title */}
                  <CardTitle className='mb-2'>{service.title}</CardTitle>

                  {/* Description */}
                  <CardDescription>{service.description}</CardDescription>

                  {/* Tech Tags - revealed on hover */}
                  <div className='mt-6 flex flex-wrap gap-2 opacity-0 transition-opacity duration-300 group-hover:opacity-100'>
                    {service.technologies.map((tech) => (
                      <span
                        key={tech}
                        className='rounded-full border border-green-500/20 bg-green-500/5 px-3 py-1 font-[family-name:var(--font-jetbrains-mono)] text-xs text-text-muted'
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Arrow */}
                  <div className='mt-6 flex items-center text-sm text-text-muted transition-colors group-hover:text-green-500'>
                    <span>Learn more</span>
                    <svg
                      className='ml-2 h-4 w-4 transition-transform group-hover:translate-x-1'
                      fill='none'
                      viewBox='0 0 24 24'
                      stroke='currentColor'
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        d='M17 8l4 4m0 0l-4 4m4-4H3'
                      />
                    </svg>
                  </div>
                </Card>
              </Link>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
