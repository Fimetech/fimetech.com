import { ButtonLink } from "@/components/ui";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "404 - Page Not Found",
  description: "The page you're looking for doesn't exist.",
};

export default function NotFound() {
  return (
    <div className='flex min-h-screen items-center justify-center'>
      <div className='mx-auto max-w-[var(--content-width)] px-6 text-center'>
        <span className='font-[family-name:var(--font-jetbrains-mono)] text-sm text-accent-blue'>
          404
        </span>
        <h1 className='mt-4 font-[family-name:var(--font-geist)] text-[var(--text-2xl)] font-bold tracking-tight text-text-primary'>
          Page Not Found
        </h1>
        <p className='mt-4 text-text-secondary'>
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <div className='mt-8'>
          <ButtonLink href='/' variant='ghost' size='md'>
            <svg
              className='mr-2 h-4 w-4'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
              strokeWidth={2}
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M7 16l-4-4m0 0l4-4m-4 4h18'
              />
            </svg>
            Back to Home
          </ButtonLink>
        </div>
      </div>
    </div>
  );
}
