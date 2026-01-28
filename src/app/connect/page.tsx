import { siteConfig } from "@/lib/constants";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Connect",
  description: "Start a conversation about your next engineering challenge.",
};

/**
 * Location pin icon component
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

export default function ConnectPage() {
  return (
    <div className='min-h-screen pt-24'>
      <div className='mx-auto max-w-[var(--content-width)] px-6 py-16'>
        <div className='grid gap-16 lg:grid-cols-2'>
          {/* Left Column - Info */}
          <div>
            <h1 className='font-[family-name:var(--font-geist)] text-[var(--text-2xl)] font-bold tracking-tight text-text-primary'>
              Let&apos;s Talk
            </h1>
            <p className='mt-4 text-lg text-text-secondary'>
              Have an engineering challenge? We&apos;d love to hear about it. No
              sales pitch—just a technical conversation about what you&apos;re
              building.
            </p>

            <div className='mt-12 space-y-8'>
              {/* Email */}
              <div>
                <h3 className='font-[family-name:var(--font-jetbrains-mono)] text-sm text-text-muted'>
                  Email
                </h3>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className='mt-1 block text-lg text-text-primary transition-colors hover:text-green-500'
                >
                  {siteConfig.email}
                </a>
              </div>

              {/* Phone */}
              <div>
                <h3 className='font-[family-name:var(--font-jetbrains-mono)] text-sm text-text-muted'>
                  Phone
                </h3>
                <a
                  href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
                  className='mt-1 block text-lg text-text-primary transition-colors hover:text-green-500'
                >
                  {siteConfig.phone}
                </a>
              </div>

              {/* Response Time */}
              <div>
                <h3 className='font-[family-name:var(--font-jetbrains-mono)] text-sm text-text-muted'>
                  Response Time
                </h3>
                <p className='mt-1 text-text-secondary'>
                  We typically respond within 24 hours.
                </p>
              </div>

              {/* What to Include */}
              <div>
                <h3 className='font-[family-name:var(--font-jetbrains-mono)] text-sm text-text-muted'>
                  What to Include
                </h3>
                <ul className='mt-2 space-y-2 text-sm text-text-secondary'>
                  <li className='flex items-start'>
                    <span className='mr-2 mt-1.5 h-1 w-1 flex-shrink-0 rounded-full bg-green-500' />
                    A brief description of your project or challenge
                  </li>
                  <li className='flex items-start'>
                    <span className='mr-2 mt-1.5 h-1 w-1 flex-shrink-0 rounded-full bg-green-500' />
                    Technical constraints or requirements
                  </li>
                  <li className='flex items-start'>
                    <span className='mr-2 mt-1.5 h-1 w-1 flex-shrink-0 rounded-full bg-green-500' />
                    Timeline and scope (if known)
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Right Column - Form */}
          <div className='glass glass-glow rounded-2xl p-8'>
            <form className='space-y-6'>
              {/* Name */}
              <div>
                <label
                  htmlFor='name'
                  className='mb-2 block font-[family-name:var(--font-jetbrains-mono)] text-sm text-text-muted'
                >
                  Name
                </label>
                <input
                  type='text'
                  id='name'
                  name='name'
                  required
                  className='w-full rounded-lg border border-glass-border bg-bg-void/50 px-4 py-3 text-text-primary placeholder:text-text-muted/50 focus:border-green-500 focus:outline-none focus:ring-1 focus:ring-green-500'
                  placeholder='Your name'
                />
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor='email'
                  className='mb-2 block font-[family-name:var(--font-jetbrains-mono)] text-sm text-text-muted'
                >
                  Email
                </label>
                <input
                  type='email'
                  id='email'
                  name='email'
                  required
                  className='w-full rounded-lg border border-glass-border bg-bg-void/50 px-4 py-3 text-text-primary placeholder:text-text-muted/50 focus:border-green-500 focus:outline-none focus:ring-1 focus:ring-green-500'
                  placeholder='you@company.com'
                />
              </div>

              {/* Company */}
              <div>
                <label
                  htmlFor='company'
                  className='mb-2 block font-[family-name:var(--font-jetbrains-mono)] text-sm text-text-muted'
                >
                  Company <span className='text-text-muted/50'>(optional)</span>
                </label>
                <input
                  type='text'
                  id='company'
                  name='company'
                  className='w-full rounded-lg border border-glass-border bg-bg-void/50 px-4 py-3 text-text-primary placeholder:text-text-muted/50 focus:border-green-500 focus:outline-none focus:ring-1 focus:ring-green-500'
                  placeholder='Your company'
                />
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor='message'
                  className='mb-2 block font-[family-name:var(--font-jetbrains-mono)] text-sm text-text-muted'
                >
                  Message
                </label>
                <textarea
                  id='message'
                  name='message'
                  required
                  rows={5}
                  className='w-full resize-none rounded-lg border border-glass-border bg-bg-void/50 px-4 py-3 text-text-primary placeholder:text-text-muted/50 focus:border-green-500 focus:outline-none focus:ring-1 focus:ring-green-500'
                  placeholder='Tell us about your project...'
                />
              </div>

              {/* Submit */}
              <button
                type='submit'
                className='w-full rounded-xl border border-green-500/40 bg-green-500/10 px-6 py-4 font-medium text-text-primary transition-all hover:bg-green-500/20 hover:border-green-500/60 hover:shadow-[0_0_20px_rgba(87,172,39,0.2)] active:scale-[0.98] disabled:pointer-events-none disabled:opacity-50'
              >
                Send Message
              </button>

              <p className='text-center text-xs text-text-muted'>
                We&apos;ll get back to you within 24 hours.
              </p>
            </form>
          </div>
        </div>

        {/* Location Section with Google Maps */}
        <div className='mt-20'>
          <div className='mb-8 flex items-center gap-3'>
            <LocationIcon className='h-6 w-6 text-green-500' />
            <h2 className='font-[family-name:var(--font-geist)] text-xl font-semibold text-text-primary'>
              Our Location
            </h2>
          </div>

          <div className='grid gap-8 lg:grid-cols-3'>
            {/* Address Info */}
            <div className='glass rounded-xl p-6'>
              <h3 className='font-[family-name:var(--font-jetbrains-mono)] text-sm text-text-muted'>
                Office Address
              </h3>
              <address className='mt-3 not-italic'>
                <p className='text-text-primary'>{siteConfig.address.street}</p>
                <p className='text-text-secondary'>
                  {siteConfig.address.city}, {siteConfig.address.zip}
                </p>
                <p className='text-text-secondary'>
                  {siteConfig.address.country}
                </p>
              </address>
              <a
                href={siteConfig.address.mapsUrl}
                target='_blank'
                rel='noopener noreferrer'
                className='mt-4 inline-flex items-center gap-2 text-sm text-green-500 transition-colors hover:text-green-500/80'
              >
                Get Directions
                <svg
                  className='h-4 w-4'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14'
                  />
                </svg>
              </a>
            </div>

            {/* Google Maps Embed */}
            <div className='overflow-hidden rounded-xl border border-glass-border lg:col-span-2'>
              <iframe
                src={siteConfig.address.mapEmbedUrl}
                width='100%'
                height='300'
                style={{ border: 0 }}
                allowFullScreen
                loading='lazy'
                referrerPolicy='no-referrer-when-downgrade'
                title='Fimetech Office Location'
                className='grayscale-[30%] contrast-[1.1]'
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
