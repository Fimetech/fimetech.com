import { navLinks, siteConfig } from "@/lib/constants";
import Link from "next/link";

/**
 * Social icon props type
 */
type IconProps = { className?: string };

/**
 * LinkedIn icon component
 */
function LinkedInIcon({ className }: IconProps) {
  return (
    <svg
      className={className}
      fill='currentColor'
      viewBox='0 0 24 24'
      aria-hidden='true'
    >
      <path d='M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z' />
    </svg>
  );
}

/**
 * Facebook icon component
 */
function FacebookIcon({ className }: IconProps) {
  return (
    <svg
      className={className}
      fill='currentColor'
      viewBox='0 0 24 24'
      aria-hidden='true'
    >
      <path d='M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z' />
    </svg>
  );
}

/**
 * Twitter/X icon component
 */
function TwitterIcon({ className }: IconProps) {
  return (
    <svg
      className={className}
      fill='currentColor'
      viewBox='0 0 24 24'
      aria-hidden='true'
    >
      <path d='M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z' />
    </svg>
  );
}

/**
 * GitHub icon component
 */
function GitHubIcon({ className }: IconProps) {
  return (
    <svg
      className={className}
      fill='currentColor'
      viewBox='0 0 24 24'
      aria-hidden='true'
    >
      <path d='M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z' />
    </svg>
  );
}

/**
 * Instagram icon component
 */
function InstagramIcon({ className }: IconProps) {
  return (
    <svg
      className={className}
      fill='currentColor'
      viewBox='0 0 24 24'
      aria-hidden='true'
    >
      <path d='M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z' />
    </svg>
  );
}

/**
 * YouTube icon component
 */
function YouTubeIcon({ className }: IconProps) {
  return (
    <svg
      className={className}
      fill='currentColor'
      viewBox='0 0 24 24'
      aria-hidden='true'
    >
      <path d='M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z' />
    </svg>
  );
}

/**
 * Social links configuration - maps social keys to their icons and labels
 * Only links with non-empty URLs will be displayed
 */
const socialIcons: {
  key: keyof typeof siteConfig.social;
  icon: React.ComponentType<IconProps>;
  label: string;
}[] = [
  { key: "linkedin", icon: LinkedInIcon, label: "LinkedIn" },
  { key: "facebook", icon: FacebookIcon, label: "Facebook" },
  { key: "twitter", icon: TwitterIcon, label: "Twitter" },
  { key: "github", icon: GitHubIcon, label: "GitHub" },
  { key: "instagram", icon: InstagramIcon, label: "Instagram" },
  { key: "youtube", icon: YouTubeIcon, label: "YouTube" },
];

/**
 * Mail icon component
 */
function MailIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      fill='none'
      viewBox='0 0 24 24'
      stroke='currentColor'
      strokeWidth={1.5}
    >
      <path
        strokeLinecap='round'
        strokeLinejoin='round'
        d='M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75'
      />
    </svg>
  );
}

/**
 * Phone icon component
 */
function PhoneIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      fill='none'
      viewBox='0 0 24 24'
      stroke='currentColor'
      strokeWidth={1.5}
    >
      <path
        strokeLinecap='round'
        strokeLinejoin='round'
        d='M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z'
      />
    </svg>
  );
}

/**
 * Location icon component
 */
function LocationIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      fill='none'
      viewBox='0 0 24 24'
      stroke='currentColor'
      strokeWidth={1.5}
    >
      <path
        strokeLinecap='round'
        strokeLinejoin='round'
        d='M15 10.5a3 3 0 11-6 0 3 3 0 016 0z'
      />
      <path
        strokeLinecap='round'
        strokeLinejoin='round'
        d='M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z'
      />
    </svg>
  );
}

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className='border-t border-glass-border bg-bg-void'>
      <div className='mx-auto max-w-[var(--content-width)] px-6 py-12'>
        {/* Main Footer Content */}
        <div className='grid gap-8 md:grid-cols-3'>
          {/* Logo & Tagline */}
          <div className='text-center md:text-left'>
            <Link
              href='/'
              className='font-[family-name:var(--font-geist)] text-lg font-bold tracking-tight text-text-primary'
            >
              {siteConfig.name}
            </Link>
            <p className='mt-1 text-sm text-text-muted'>{siteConfig.tagline}</p>

            {/* Social Links - only shows links with URLs */}
            <div className='mt-4 flex items-center justify-center gap-4 md:justify-start'>
              {socialIcons.map(({ key, icon: Icon, label }) => {
                const url = siteConfig.social[key];
                if (!url) return null;
                return (
                  <a
                    key={key}
                    href={url}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='text-text-muted transition-colors hover:text-accent-green'
                    aria-label={label}
                  >
                    <Icon className='h-5 w-5' />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Contact Info */}
          <div className='text-center md:text-left'>
            <h4 className='font-[family-name:var(--font-jetbrains-mono)] text-sm font-medium text-text-primary'>
              Contact
            </h4>
            <ul className='mt-3 space-y-2'>
              <li>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className='inline-flex items-center gap-2 text-sm text-text-secondary transition-colors hover:text-accent-green'
                >
                  <MailIcon className='h-4 w-4' />
                  {siteConfig.email}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
                  className='inline-flex items-center gap-2 text-sm text-text-secondary transition-colors hover:text-accent-green'
                >
                  <PhoneIcon className='h-4 w-4' />
                  {siteConfig.phone}
                </a>
              </li>
              <li>
                <span className='inline-flex items-start gap-2 text-sm text-text-secondary'>
                  <LocationIcon className='mt-0.5 h-4 w-4 flex-shrink-0' />
                  {siteConfig.address.full}
                </span>
              </li>
            </ul>
          </div>

          {/* Navigation */}
          <div className='text-center md:text-left'>
            <h4 className='font-[family-name:var(--font-jetbrains-mono)] text-sm font-medium text-text-primary'>
              Navigation
            </h4>
            <nav className='mt-3'>
              <ul className='space-y-2'>
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className='text-sm text-text-secondary transition-colors hover:text-accent-green'
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>

        {/* Copyright */}
        <div className='mt-10 border-t border-glass-border pt-8 text-center'>
          <p className='text-xs text-text-muted'>
            &copy; {currentYear} {siteConfig.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
