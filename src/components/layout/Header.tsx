"use client";

import { navLinks, siteConfig } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-bg-void/80 backdrop-blur-xl border-b border-glass-border"
          : "bg-transparent",
      )}
    >
      <nav className='mx-auto flex h-16 max-w-[var(--content-width)] items-center justify-between px-6'>
        {/* Logo */}
        <Link
          href='/'
          className='font-[family-name:var(--font-geist)] text-xl font-bold tracking-tight text-text-primary transition-opacity hover:opacity-80'
        >
          {siteConfig.name}
        </Link>

        {/* Desktop Navigation */}
        <ul className='hidden items-center gap-8 md:flex'>
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className='text-sm text-text-secondary transition-colors hover:text-text-primary'
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          type='button'
          className='flex h-10 w-10 items-center justify-center rounded-lg text-text-secondary transition-colors hover:bg-bg-elevated hover:text-text-primary md:hidden'
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMobileMenuOpen}
        >
          <svg
            className='h-5 w-5'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
            strokeWidth={1.5}
          >
            {isMobileMenuOpen ? (
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M6 18L18 6M6 6l12 12'
              />
            ) : (
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M4 6h16M4 12h16M4 18h16'
              />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className='absolute left-0 right-0 top-16 border-b border-glass-border bg-bg-void/95 backdrop-blur-xl md:hidden'
        >
          <ul className='flex flex-col gap-1 p-4'>
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className='block rounded-lg px-4 py-3 text-text-secondary transition-colors hover:bg-bg-elevated hover:text-text-primary'
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </motion.div>
      )}
    </header>
  );
}
