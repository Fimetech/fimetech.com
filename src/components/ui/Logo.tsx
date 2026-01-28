"use client";

import { siteConfig } from "@/lib/constants";
import Image from "next/image";
import { useEffect, useState } from "react";

interface LogoProps {
  className?: string;
  priority?: boolean;
}

/**
 * Logo component with automatic format detection
 * Supports PNG, WebP, and SVG formats
 * Place your logo as /public/logo/logo.{png|webp|svg} and it will be automatically detected
 */
export function Logo({ className = "", priority = false }: LogoProps) {
  const [logoSrc, setLogoSrc] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Try to detect logo in order of preference: SVG -> WebP -> PNG
    const formats = ["svg", "webp", "png"];

    const checkLogo = async () => {
      for (const format of formats) {
        try {
          const response = await fetch(`/logo/logo.${format}`, {
            method: "HEAD",
          });
          if (response.ok) {
            setLogoSrc(`/logo/logo.${format}`);
            break;
          }
        } catch {
          // Continue to next format
        }
      }
      setIsLoading(false);
    };

    checkLogo();
  }, []);

  if (isLoading) {
    // Placeholder while loading
    return (
      <span className={`inline-block ${className}`}>
        <span className='font-[family-name:var(--font-geist)] text-xl font-bold tracking-tight'>
          {siteConfig.name}
        </span>
      </span>
    );
  }

  if (!logoSrc) {
    // Fallback to text if no logo found
    return (
      <span className={`inline-block ${className}`}>
        <span className='font-[family-name:var(--font-geist)] text-xl font-bold tracking-tight'>
          {siteConfig.name}
        </span>
      </span>
    );
  }

  const isSvg = logoSrc.endsWith(".svg");

  return (
    <span className={`relative inline-block ${className}`}>
      {isSvg ? (
        // SVG: use img tag for better compatibility
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={logoSrc}
          alt={`${siteConfig.name} logo`}
          className='h-full w-auto'
        />
      ) : (
        // PNG/WebP: use Next.js Image optimization
        <Image
          src={logoSrc}
          alt={`${siteConfig.name} logo`}
          width={180}
          height={45}
          className='h-auto w-full'
          priority={priority}
          quality={95}
        />
      )}
    </span>
  );
}
