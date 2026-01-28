"use client";

import { ButtonLink } from "@/components/ui";
import { siteConfig } from "@/lib/constants";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

/**
 * Hero section with futuristic geometric grid and particle effects
 */
export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0.5, y: 0.5 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width;
      const y = (e.clientY - rect.top) / rect.height;

      setMousePosition({ x, y });
    };

    const container = containerRef.current;
    container?.addEventListener("mousemove", handleMouseMove);

    return () => {
      container?.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  // Particle system animation
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const setCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    setCanvasSize();
    window.addEventListener("resize", setCanvasSize);

    // Particle configuration
    const particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      opacity: number;
    }> = [];

    const particleCount = 50;
    const connectionDistance = 150;

    // Initialize particles
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        size: Math.random() * 2 + 1,
        opacity: Math.random() * 0.5 + 0.2,
      });
    }

    let animationId: number;

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Update and draw particles
      particles.forEach((particle, i) => {
        // Move particle
        particle.x += particle.vx;
        particle.y += particle.vy;

        // Bounce off edges
        if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1;

        // Draw particle
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(87, 172, 39, ${particle.opacity})`;
        ctx.fill();

        // Draw connections
        particles.forEach((otherParticle, j) => {
          if (i === j) return;

          const dx = particle.x - otherParticle.x;
          const dy = particle.y - otherParticle.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < connectionDistance) {
            ctx.beginPath();
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(otherParticle.x, otherParticle.y);
            const opacity = (1 - distance / connectionDistance) * 0.2;
            ctx.strokeStyle = `rgba(87, 172, 39, ${opacity})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        });
      });

      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", setCanvasSize);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <section
      ref={containerRef}
      className='relative flex min-h-screen items-center justify-center overflow-hidden'
    >
      {/* Base dark gradient */}
      <div className='hero-base-gradient' />

      {/* Geometric grid pattern */}
      <div className='hero-grid-pattern' />

      {/* Interactive glow that follows mouse */}
      <div
        className='hero-interactive-glow'
        style={{
          background: `radial-gradient(600px circle at ${mousePosition.x * 100}% ${mousePosition.y * 100}%, rgba(87, 172, 39, 0.15), transparent 40%)`,
        }}
      />

      {/* Particle system canvas */}
      <canvas
        ref={canvasRef}
        className='pointer-events-none absolute inset-0 opacity-60'
      />

      {/* Scan lines for tech aesthetic */}
      <div className='hero-scan-lines' />

      {/* Vignette for depth */}
      <div className='hero-vignette' />

      {/* Content */}
      <div className='relative z-10 mx-auto max-w-[var(--content-width)] px-6 text-center'>
        {/* Logo */}
        <motion.h1
          className='font-[family-name:var(--font-geist)] text-[var(--text-hero)] font-bold tracking-[-0.03em] text-text-primary'
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          style={{
            textShadow: "0 0 80px rgba(87, 172, 39, 0.3)",
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
