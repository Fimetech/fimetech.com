import type { MDXComponents } from "mdx/types";

/**
 * MDX components for styling MDX content
 */
export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: ({ children }) => (
      <h1 className='mb-6 font-[family-name:var(--font-geist)] text-3xl font-bold tracking-tight text-text-primary'>
        {children}
      </h1>
    ),
    h2: ({ children }) => (
      <h2 className='mb-4 mt-10 font-[family-name:var(--font-geist)] text-2xl font-semibold text-text-primary'>
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className='mb-3 mt-8 font-[family-name:var(--font-geist)] text-xl font-semibold text-text-primary'>
        {children}
      </h3>
    ),
    p: ({ children }) => (
      <p className='mb-4 leading-relaxed text-text-secondary'>{children}</p>
    ),
    ul: ({ children }) => (
      <ul className='mb-4 ml-6 list-disc space-y-2 text-text-secondary'>
        {children}
      </ul>
    ),
    ol: ({ children }) => (
      <ol className='mb-4 ml-6 list-decimal space-y-2 text-text-secondary'>
        {children}
      </ol>
    ),
    li: ({ children }) => <li className='text-text-secondary'>{children}</li>,
    code: ({ children }) => (
      <code className='rounded bg-bg-elevated px-1.5 py-0.5 font-[family-name:var(--font-jetbrains-mono)] text-sm text-accent-blue'>
        {children}
      </code>
    ),
    pre: ({ children }) => (
      <pre className='mb-4 overflow-x-auto rounded-xl border border-glass-border bg-bg-surface p-4 font-[family-name:var(--font-jetbrains-mono)] text-sm'>
        {children}
      </pre>
    ),
    blockquote: ({ children }) => (
      <blockquote className='my-6 border-l-2 border-accent-blue pl-6 italic text-text-secondary'>
        {children}
      </blockquote>
    ),
    a: ({ href, children }) => (
      <a
        href={href}
        className='text-accent-blue underline underline-offset-4 transition-colors hover:text-accent-teal'
      >
        {children}
      </a>
    ),
    ...components,
  };
}
