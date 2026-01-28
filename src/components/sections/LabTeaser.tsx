"use client";

import { RevealOnScroll } from "@/components/motion/RevealOnScroll";
import { ButtonLink } from "@/components/ui";
import Link from "next/link";

/**
 * Lab teaser section showcasing a flagship project
 */
export function LabTeaser() {
  return (
    <section className='relative py-[var(--space-section)] overflow-hidden'>
      <div className='mx-auto max-w-[var(--content-width)] px-6'>
        {/* Section Header */}
        <RevealOnScroll>
          <h2 className='font-[family-name:var(--font-geist)] text-[var(--text-2xl)] font-bold tracking-tight text-text-primary'>
            From the Lab
          </h2>
        </RevealOnScroll>

        {/* Project Card - Broken Grid Layout */}
        <RevealOnScroll direction='right' delay={0.2}>
          <div className='relative mt-12 md:ml-[5%] md:mr-[-5%]'>
            <div className='glass glass-glow overflow-hidden rounded-2xl'>
              {/* Project Visual */}
              <div className='relative aspect-video bg-gradient-to-br from-bg-surface to-bg-void'>
                {/* Placeholder pattern for demo */}
                <div className='absolute inset-0 flex items-center justify-center'>
                  <div className='grid grid-cols-8 gap-2 opacity-20'>
                    {Array.from({ length: 64 }).map((_, i) => (
                      <div
                        key={i}
                        className='h-4 w-4 rounded-sm bg-accent-green'
                        style={{
                          opacity: Math.random() * 0.5 + 0.2,
                          animationDelay: `${i * 50}ms`,
                        }}
                      />
                    ))}
                  </div>
                </div>

                {/* Gradient overlay */}
                <div className='absolute inset-0 bg-gradient-to-t from-bg-void/90 via-transparent to-transparent' />

                {/* Project Info Overlay */}
                <div className='absolute inset-x-0 bottom-0 p-6 md:p-8'>
                  <span className='mb-2 inline-block rounded-full border border-accent-lime/30 bg-accent-lime/10 px-3 py-1 font-[family-name:var(--font-jetbrains-mono)] text-xs text-accent-lime'>
                    Featured Project
                  </span>

                  <h3 className='mt-4 font-[family-name:var(--font-geist)] text-xl font-semibold text-text-primary md:text-2xl'>
                    Autonomous Navigation System
                  </h3>

                  <p className='mt-2 max-w-xl text-text-secondary'>
                    Real-time SLAM implementation with sensor fusion for
                    warehouse robotics. Achieved 99.7% navigation accuracy in
                    dynamic environments.
                  </p>

                  <div className='mt-6 flex flex-wrap items-center gap-4'>
                    <ButtonLink
                      href='/lab/autonomous-navigation'
                      variant='ghost'
                      size='md'
                    >
                      View Case Study
                      <svg
                        className='ml-2 h-4 w-4'
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
                    </ButtonLink>

                    {/* Tech tags */}
                    <div className='flex flex-wrap gap-2'>
                      {["ROS2", "C++", "SLAM", "LiDAR"].map((tech) => (
                        <span
                          key={tech}
                          className='font-[family-name:var(--font-jetbrains-mono)] text-xs text-text-muted'
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative elements */}
            <div className='absolute -right-4 -top-4 h-32 w-32 rounded-full bg-accent-green/5 blur-3xl' />
            <div className='absolute -bottom-4 -left-4 h-24 w-24 rounded-full bg-accent-lime/5 blur-3xl' />
          </div>
        </RevealOnScroll>

        {/* Link to all projects */}
        <RevealOnScroll delay={0.4}>
          <div className='mt-8 text-center md:text-right'>
            <Link
              href='/lab'
              className='inline-flex items-center text-sm text-text-secondary transition-colors hover:text-text-primary'
            >
              View all projects
              <svg
                className='ml-2 h-4 w-4'
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
            </Link>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
