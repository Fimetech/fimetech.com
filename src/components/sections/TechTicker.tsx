import { techStackRow1, techStackRow2 } from "@/lib/constants";

interface TickerRowProps {
  items: readonly string[];
  reverse?: boolean;
}

function TickerRow({ items, reverse = false }: TickerRowProps) {
  // Duplicate items for seamless loop
  const duplicatedItems = [...items, ...items];

  return (
    <div className='ticker-wrapper py-4'>
      <div className={`ticker-track ${reverse ? "ticker-track-reverse" : ""}`}>
        {duplicatedItems.map((item, index) => (
          <span
            key={`${item}-${index}`}
            className='flex items-center whitespace-nowrap px-6 font-[family-name:var(--font-jetbrains-mono)] text-sm text-text-muted md:text-base'
          >
            {item}
            <span className='ml-6 text-glass-border'>·</span>
          </span>
        ))}
      </div>
    </div>
  );
}

/**
 * Tech stack ticker section with infinite scrolling
 */
export function TechTicker() {
  return (
    <section className='relative border-y border-glass-border bg-bg-surface/50 py-8'>
      {/* Gradient overlays for fade effect */}
      <div className='pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-bg-surface/50 to-transparent' />
      <div className='pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-bg-surface/50 to-transparent' />

      {/* Ticker rows */}
      <TickerRow items={techStackRow1} />
      <TickerRow items={techStackRow2} reverse />
    </section>
  );
}
