"use client";

import {
  StaggerContainer,
  StaggerItem,
} from "@/components/motion/RevealOnScroll";
import { Card, CardDescription, CardTitle } from "@/components/ui";
import { services } from "@/lib/constants";
import Link from "next/link";

const icons = {
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
      <circle cx='24' cy='14' r='10' />
      <path d='M14 24v14a4 4 0 004 4h12a4 4 0 004-4V24' />
      <circle cx='20' cy='12' r='2' fill='currentColor' />
      <circle cx='28' cy='12' r='2' fill='currentColor' />
      <path d='M8 28h6M34 28h6M20 34h8' />
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
          className='grid gap-6 md:grid-cols-3'
          staggerDelay={0.15}
        >
          {services.map((service) => (
            <StaggerItem key={service.id}>
              <Link href={service.href} className='block h-full'>
                <Card interactive className='group h-full'>
                  {/* Icon */}
                  <div className='mb-6 text-text-secondary transition-colors group-hover:text-accent-blue'>
                    {icons[service.id as keyof typeof icons]}
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
                        className='rounded-full border border-glass-border bg-bg-elevated px-3 py-1 font-[family-name:var(--font-jetbrains-mono)] text-xs text-text-muted'
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Arrow */}
                  <div className='mt-6 flex items-center text-sm text-text-muted transition-colors group-hover:text-accent-blue'>
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
