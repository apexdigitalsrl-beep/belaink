import { cn } from "@/lib/utils/cn";
import type { ComponentPropsWithoutRef, ElementType, ReactNode } from "react";

type Variant = "primary" | "accent" | "secondary" | "ghost";
type Size = "sm" | "md" | "lg";

const base =
  "inline-flex items-center justify-center gap-2 font-semibold rounded-pill " +
  "transition-[transform,background-color,box-shadow] duration-150 ease-out-expo " +
  "active:translate-y-px active:scale-[0.99] disabled:opacity-50 disabled:pointer-events-none " +
  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2";

const variants: Record<Variant, string> = {
  primary:
    "bg-primary text-on-primary hover:bg-primary-hover focus-visible:outline-cobalt",
  accent:
    "bg-accent text-ink hover:shadow-ink hover:brightness-105 focus-visible:outline-ink",
  secondary:
    "bg-transparent text-text border border-border-strong hover:border-accent hover:text-accent focus-visible:outline-cobalt",
  ghost:
    "bg-transparent text-text hover:text-accent focus-visible:outline-cobalt",
};

const sizes: Record<Size, string> = {
  sm: "h-9 px-4 text-sm",
  md: "h-11 px-6 text-base", // 44px → táctil OK (R4)
  lg: "h-[52px] px-8 text-base",
};

type ButtonProps<T extends ElementType> = {
  as?: T;
  variant?: Variant;
  size?: Size;
  children: ReactNode;
  className?: string;
} & Omit<ComponentPropsWithoutRef<T>, "as" | "children" | "className">;

export function Button<T extends ElementType = "button">({
  as,
  variant = "primary",
  size = "md",
  className,
  children,
  ...rest
}: ButtonProps<T>) {
  const Tag = (as ?? "button") as ElementType;
  return (
    <Tag className={cn(base, variants[variant], sizes[size], className)} {...rest}>
      {children}
    </Tag>
  );
}
