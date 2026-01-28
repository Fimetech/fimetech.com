import { cn } from "@/lib/utils";
import {
  forwardRef,
  type AnchorHTMLAttributes,
  type ButtonHTMLAttributes,
  type ReactNode,
} from "react";

type ButtonBaseProps = {
  variant?: "primary" | "ghost" | "outline";
  size?: "sm" | "md" | "lg";
  children?: ReactNode;
  className?: string;
};

type ButtonAsButton = ButtonBaseProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, keyof ButtonBaseProps> & {
    asChild?: false;
  };

type ButtonAsChild = ButtonBaseProps & {
  asChild: true;
};

export type ButtonProps = ButtonAsButton | ButtonAsChild;

const buttonStyles = (
  variant: ButtonProps["variant"] = "primary",
  size: ButtonProps["size"] = "md",
) =>
  cn(
    // Base styles
    "inline-flex items-center justify-center font-medium transition-all duration-300",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-green focus-visible:ring-offset-2 focus-visible:ring-offset-bg-void",
    "disabled:pointer-events-none disabled:opacity-50",

    // Variants
    variant === "primary" && [
      "bg-accent-green text-white",
      "hover:bg-accent-green/90 hover:shadow-[0_0_20px_rgba(87,172,39,0.4)]",
      "active:scale-[0.98]",
    ],
    variant === "ghost" && [
      "border border-glass-border bg-transparent text-text-primary",
      "hover:bg-bg-elevated hover:backdrop-blur-xl",
      "active:scale-[0.98]",
    ],
    variant === "outline" && [
      "border border-accent-green/50 bg-transparent text-accent-green",
      "hover:bg-accent-green/10 hover:border-accent-green",
      "active:scale-[0.98]",
    ],

    // Sizes
    size === "sm" && "h-9 rounded-lg px-4 text-sm",
    size === "md" && "h-11 rounded-xl px-6 text-sm",
    size === "lg" && "h-14 rounded-full px-8 text-base",
  );

/**
 * Primary button component with glass morphism effects
 */
export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = "primary",
      size = "md",
      asChild,
      children,
      ...props
    },
    ref,
  ) => {
    const classes = cn(buttonStyles(variant, size), className);

    if (asChild) {
      // When asChild is true, we expect children to be a single element
      // that we'll clone and pass our styles to
      const child = children as React.ReactElement<{
        className?: string;
        children?: ReactNode;
      }>;

      if (child && typeof child === "object" && "props" in child) {
        const { className: childClassName, ...childProps } = child.props;
        return {
          ...child,
          props: {
            ...childProps,
            className: cn(classes, childClassName),
          },
        } as React.ReactElement;
      }

      return <>{children}</>;
    }

    return (
      <button
        ref={ref}
        className={classes}
        {...(props as ButtonHTMLAttributes<HTMLButtonElement>)}
      >
        {children}
      </button>
    );
  },
);

Button.displayName = "Button";

/**
 * Button styled as anchor for navigation
 */
export const ButtonLink = forwardRef<
  HTMLAnchorElement,
  ButtonBaseProps & AnchorHTMLAttributes<HTMLAnchorElement>
>(
  (
    { className, variant = "primary", size = "md", children, ...props },
    ref,
  ) => {
    return (
      <a
        ref={ref}
        className={cn(buttonStyles(variant, size), className)}
        {...props}
      >
        {children}
      </a>
    );
  },
);

ButtonLink.displayName = "ButtonLink";
