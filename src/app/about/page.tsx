import { ButtonLink } from "@/components/ui";
import { Metadata } from "next";
import { siteConfig } from "@/lib/constants";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Fimetech - our team, history, and mission to deliver advanced AI and technology solutions.",
};

export default function AboutPage() {
  const teamStats = [
    { value: siteConfig.teamSize, label: "Team Members" },
    { value: `${Math.round(siteConfig.seniorRatio * 100)}%`, label: "Senior Engineers" },
    { value: siteConfig.avgExperience, label: "Avg. Years Experience" },
    { value: siteConfig.spinoffs, label: "Successful Spinoffs" },
  ];

  return (
    <div className='min-h-screen pt-24'>
      {/* Header */}
      <section className='mx-auto max-w-[var(--content-width)] px-6 py-16'>
        <h1 className='font-[family-name:var(--font-geist)] text-[var(--text-2xl)] font-bold tracking-tight text-text-primary'>
          About Us
        </h1>
        <p className='mt-4 max-w-2xl text-lg text-text-secondary'>
          We are engineers who believe in building systems that matter. Since{" "}
          {siteConfig.founded}, we&apos;ve been delivering advanced AI and technology solutions
          that help our partners stay ahead.
        </p>
      </section>

      {/* Stats */}
      <section className='border-t border-glass-border bg-bg-surface/30'>
        <div className='mx-auto max-w-[var(--content-width)] px-6 py-16'>
          <div className='grid gap-8 md:grid-cols-4'>
            {teamStats.map((stat) => (
              <div key={stat.label} className='text-center'>
                <div className='font-[family-name:var(--font-jetbrains-mono)] text-4xl font-bold text-green-500'>
                  {stat.value}
                </div>
                <div className='mt-2 text-sm text-text-secondary'>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className='mx-auto max-w-[var(--content-width)] px-6 py-24'>
        <h2 className='font-[family-name:var(--font-geist)] text-[var(--text-xl)] font-bold tracking-tight text-text-primary'>
          Our Mission
        </h2>
        <p className='mt-4 max-w-2xl text-text-secondary'>
          To deliver engineering excellence through advanced AI and technology solutions.
          We partner with forward-thinking companies to build systems that are reliable,
          performant, and built to last.
        </p>
      </section>

      {/* Location */}
      <section className='border-t border-glass-border'>
        <div className='mx-auto max-w-[var(--content-width)] px-6 py-24'>
          <h2 className='font-[family-name:var(--font-geist)] text-[var(--text-xl)] font-bold tracking-tight text-text-primary'>
            Our Office
          </h2>
          <div className='mt-6 grid gap-8 md:grid-cols-2'>
            <div>
              <p className='text-lg text-text-secondary'>
                {siteConfig.address.full}
              </p>
              <p className='mt-2 text-text-secondary'>
                <a
                  href={siteConfig.address.mapsUrl}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='text-green-500 hover:underline'
                >
                  Get Directions →
                </a>
              </p>
            </div>
            <div className='aspect-video w-full overflow-hidden rounded-xl border border-glass-border bg-bg-surface'>
              <iframe
                src={siteConfig.address.mapEmbedUrl}
                width='100%'
                height='100%'
                style={{ border: 0 }}
                allowFullScreen
                loading='lazy'
                referrerPolicy='no-referrer-when-downgrade'
                title='Fimetech Office Location'
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className='border-t border-glass-border'>
        <div className='mx-auto max-w-[var(--content-width)] px-6 py-24 text-center'>
          <h2 className='font-[family-name:var(--font-geist)] text-xl font-medium text-text-primary'>
            Want to learn more?
          </h2>
          <div className='mt-6'>
            <ButtonLink href='/connect' variant='primary' size='lg'>
              Get in Touch
            </ButtonLink>
          </div>
        </div>
      </section>
    </div>
  );
}
