"use client";

import { RevealOnScroll } from "@/components/motion/RevealOnScroll";
import { ButtonLink } from "@/components/ui";

/**
 * Final CTA section
 */
export function CTA() {
  return (
    <section className='relative flex min-h-[60vh] items-center justify-center py-[var(--space-section)]'>
      {/* Subtle gradient background */}
      <div className='absolute inset-0 bg-gradient-to-b from-transparent via-accent-blue/5 to-transparent' />

      <div className='relative mx-auto max-w-[var(--content-width)] px-6 text-center'>
        <RevealOnScroll>
          <h2 className='font-[family-name:var(--font-geist)] text-[var(--text-xl)] font-medium tracking-tight text-text-primary md:text-[var(--text-2xl)]'>
            Let&apos;s engineer something.
          </h2>
        </RevealOnScroll>

        <RevealOnScroll delay={0.2}>
          <div className='mt-8'>
            <ButtonLink href='/connect' variant='primary' size='lg'>
              Start a Conversation
            </ButtonLink>
          </div>
        </RevealOnScroll>

        <RevealOnScroll delay={0.4}>
          <p className='mt-6 text-sm text-text-muted'>
            No sales pitch. Just engineering.
          </p>
        </RevealOnScroll>
      </div>
    </section>
  );
}
