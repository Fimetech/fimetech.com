import { siteConfig } from "@/lib/constants";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Connect",
  description: "Start a conversation about your next engineering challenge.",
};

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
                  className='mt-1 block text-lg text-text-primary transition-colors hover:text-accent-blue'
                >
                  {siteConfig.email}
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
                    <span className='mr-2 mt-1.5 h-1 w-1 flex-shrink-0 rounded-full bg-accent-blue' />
                    A brief description of your project or challenge
                  </li>
                  <li className='flex items-start'>
                    <span className='mr-2 mt-1.5 h-1 w-1 flex-shrink-0 rounded-full bg-accent-blue' />
                    Technical constraints or requirements
                  </li>
                  <li className='flex items-start'>
                    <span className='mr-2 mt-1.5 h-1 w-1 flex-shrink-0 rounded-full bg-accent-blue' />
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
                  className='w-full rounded-lg border border-glass-border bg-bg-void/50 px-4 py-3 text-text-primary placeholder:text-text-muted/50 focus:border-accent-blue focus:outline-none focus:ring-1 focus:ring-accent-blue'
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
                  className='w-full rounded-lg border border-glass-border bg-bg-void/50 px-4 py-3 text-text-primary placeholder:text-text-muted/50 focus:border-accent-blue focus:outline-none focus:ring-1 focus:ring-accent-blue'
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
                  className='w-full rounded-lg border border-glass-border bg-bg-void/50 px-4 py-3 text-text-primary placeholder:text-text-muted/50 focus:border-accent-blue focus:outline-none focus:ring-1 focus:ring-accent-blue'
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
                  className='w-full resize-none rounded-lg border border-glass-border bg-bg-void/50 px-4 py-3 text-text-primary placeholder:text-text-muted/50 focus:border-accent-blue focus:outline-none focus:ring-1 focus:ring-accent-blue'
                  placeholder='Tell us about your project...'
                />
              </div>

              {/* Submit */}
              <button
                type='submit'
                className='w-full rounded-xl bg-accent-blue px-6 py-4 font-medium text-white transition-all hover:bg-accent-blue/90 hover:shadow-[0_0_20px_rgba(0,102,255,0.4)] active:scale-[0.98] disabled:pointer-events-none disabled:opacity-50'
              >
                Send Message
              </button>

              <p className='text-center text-xs text-text-muted'>
                We&apos;ll get back to you within 24 hours.
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
