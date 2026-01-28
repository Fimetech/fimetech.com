import { navLinks, siteConfig } from "@/lib/constants";
import Link from "next/link";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className='border-t border-glass-border bg-bg-void'>
      <div className='mx-auto max-w-[var(--content-width)] px-6 py-12'>
        <div className='flex flex-col items-center justify-between gap-8 md:flex-row'>
          {/* Logo & Tagline */}
          <div className='text-center md:text-left'>
            <Link
              href='/'
              className='font-[family-name:var(--font-geist)] text-lg font-bold tracking-tight text-text-primary'
            >
              {siteConfig.name}
            </Link>
            <p className='mt-1 text-sm text-text-muted'>{siteConfig.tagline}</p>
          </div>

          {/* Navigation */}
          <nav>
            <ul className='flex flex-wrap items-center justify-center gap-6'>
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
          </nav>
        </div>

        {/* Copyright */}
        <div className='mt-8 border-t border-glass-border pt-8 text-center'>
          <p className='text-xs text-text-muted'>
            &copy; {currentYear} {siteConfig.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
