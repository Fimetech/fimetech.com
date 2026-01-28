"use client";

import { ButtonLink } from "@/components/ui";
import { siteConfig } from "@/lib/constants";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

/**
 * Hero section with animated gradient mesh background
 */
export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 50, y: 50 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;

      setMousePosition({ x, y });
    };

    const container = containerRef.current;
    container?.addEventListener("mousemove", handleMouseMove);

    return () => {
      container?.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <section
      ref={containerRef}
      className='relative flex min-h-screen items-center justify-center overflow-hidden'
    >
      {/* Animated Gradient Background */}
      <div
        className='hero-gradient'
        style={{
          backgroundPosition: `${mousePosition.x}% ${mousePosition.y}%`,
        }}
      />

      {/* Noise Overlay for texture */}
      <div
        className='pointer-events-none absolute inset-0 opacity-[0.015]'
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Content */}
      <div className='relative z-10 mx-auto max-w-[var(--content-width)] px-6 text-center'>
        {/* Logo */}
        <motion.h1
          className='font-[family-name:var(--font-geist)] text-[var(--text-hero)] font-bold tracking-[-0.03em] text-text-primary'
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          style={{
            textShadow: "0 0 80px rgba(0, 102, 255, 0.3)",
          }}
        >
          {siteConfig.name.toUpperCase()}
        </motion.h1>

        {/* Tagline */}
        <motion.p
          className='mx-auto mt-6 max-w-xl text-lg text-text-secondary md:text-xl'
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        >
          {siteConfig.tagline}
        </motion.p>

        {/* CTA */}
        <motion.div
          className='mt-10'
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
        >
          <ButtonLink href='#services' variant='ghost' size='lg'>
            Explore Our Work
            <svg
              className='ml-2 h-4 w-4 animate-bounce'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
              strokeWidth={2}
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M19 14l-7 7m0 0l-7-7m7 7V3'
              />
            </svg>
          </ButtonLink>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className='absolute bottom-8 left-1/2 -translate-x-1/2'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
      >
        <div className='flex h-10 w-6 items-start justify-center rounded-full border border-glass-border p-2'>
          <motion.div
            className='h-2 w-1 rounded-full bg-text-secondary'
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
      </motion.div>
    </section>
  );
}
