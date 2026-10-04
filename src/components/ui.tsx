import { useEffect, useRef, useState } from "react";
import type { AnchorHTMLAttributes, ButtonHTMLAttributes, MouseEvent, ReactNode } from "react";
import { cn } from "../utils/cn";
import { useInView, usePrefersReducedMotion } from "../hooks/useInView";
import { Reveal } from "./Reveal";

/* ------------------------------------------------------------------ */
/* Layout                                                              */
/* ------------------------------------------------------------------ */
export function Container({ className, children }: { className?: string; children: ReactNode }) {
  return <div className={cn("mx-auto w-full max-w-7xl px-5 sm:px-8", className)}>{children}</div>;
}

export function Eyebrow({
  children,
  dark = false,
  className,
}: {
  children: ReactNode;
  dark?: boolean;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 text-xs font-bold uppercase tracking-[0.14em]",
        dark ? "glass-dark text-white/85" : "glass text-ink-soft shadow-sm shadow-violet/5",
        className,
      )}
    >
      <span className="relative flex size-2">
        <span className="absolute inline-flex size-full animate-ring rounded-full bg-pink" />
        <span className="relative inline-flex size-2 rounded-full bg-pink" />
      </span>
      {children}
    </span>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
  dark = false,
  className,
  titleId,
}: {
  eyebrow: string;
  title: ReactNode;
  subtitle?: ReactNode;
  align?: "center" | "left";
  dark?: boolean;
  className?: string;
  titleId?: string;
}) {
  return (
    <div
      className={cn(
        "max-w-3xl",
        align === "center" ? "mx-auto text-center" : "text-left",
        className,
      )}
    >
      <Reveal>
        <Eyebrow dark={dark}>{eyebrow}</Eyebrow>
      </Reveal>
      <Reveal delay={80}>
        <h2
          id={titleId}
          className={cn(
            "mt-5 font-display text-[2rem] font-semibold leading-[1.08] tracking-tight text-balance sm:text-5xl",
            dark ? "text-white" : "text-ink",
          )}
        >
          {title}
        </h2>
      </Reveal>
      {subtitle && (
        <Reveal delay={160}>
          <p
            className={cn(
              "mt-5 text-base leading-relaxed text-pretty sm:text-lg",
              dark ? "text-white/70" : "text-ink-soft",
            )}
          >
            {subtitle}
          </p>
        </Reveal>
      )}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Buttons                                                             */
/* ------------------------------------------------------------------ */
type Variant = "primary" | "secondary" | "dark" | "light";
type Size = "md" | "lg";

const variants: Record<Variant, string> = {
  primary:
    "bg-linear-to-r from-[#e11d74] via-[#d6307f] to-violet text-white shadow-lg shadow-pink/30 hover:shadow-xl hover:shadow-pink/40",
  secondary:
    "glass text-ink shadow-md shadow-ink/5 hover:bg-white hover:shadow-lg hover:shadow-violet/10",
  dark: "bg-ink text-white shadow-lg shadow-ink/25 hover:bg-[#1d2260]",
  light: "bg-white text-ink shadow-lg shadow-ink/20 hover:bg-white/95",
};

const sizes: Record<Size, string> = {
  md: "h-11 px-5 text-sm",
  lg: "h-14 px-7 text-base",
};

function buttonClasses(variant: Variant, size: Size, className?: string) {
  return cn(
    "group relative inline-flex select-none items-center justify-center gap-2 overflow-hidden rounded-full font-bold",
    "transition-all duration-300 ease-out hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98]",
    variants[variant],
    sizes[size],
    className,
  );
}

type CommonProps = { variant?: Variant; size?: Size; children: ReactNode; className?: string };

export function ButtonLink({
  variant = "primary",
  size = "md",
  className,
  children,
  ...rest
}: CommonProps & AnchorHTMLAttributes<HTMLAnchorElement>) {
  return (
    <a className={buttonClasses(variant, size, className)} {...rest}>
      {variant === "primary" && (
        <span
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 left-0 w-1/3 animate-shine bg-white/30 blur-md"
        />
      )}
      <span className="relative inline-flex items-center gap-2">{children}</span>
    </a>
  );
}

export function Button({
  variant = "primary",
  size = "md",
  className,
  children,
  ...rest
}: CommonProps & ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button className={buttonClasses(variant, size, className)} {...rest}>
      {variant === "primary" && (
        <span
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 left-0 w-1/3 animate-shine bg-white/30 blur-md"
        />
      )}
      <span className="relative inline-flex items-center gap-2">{children}</span>
    </button>
  );
}

/* ------------------------------------------------------------------ */
/* Spotlight card – subtle cursor-follow glow                          */
/* ------------------------------------------------------------------ */
export function SpotlightCard({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const onMove = (e: MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    el.style.setProperty("--mx", `${e.clientX - r.left}px`);
    el.style.setProperty("--my", `${e.clientY - r.top}px`);
  };
  return (
    <div ref={ref} onMouseMove={onMove} className={cn("spotlight", className)}>
      {children}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Animated counter                                                    */
/* ------------------------------------------------------------------ */
export function CountUp({
  to,
  duration = 1400,
  className,
}: {
  to: number;
  duration?: number;
  className?: string;
}) {
  const [ref, inView] = useInView<HTMLSpanElement>({ threshold: 0.4 });
  const reduced = usePrefersReducedMotion();
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!inView) return;
    if (reduced) {
      setValue(to);
      return;
    }
    let raf = 0;
    const start = performance.now();
    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - t, 4);
      setValue(Math.round(to * eased));
      if (t < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, to, duration, reduced]);

  return (
    <span ref={ref} className={className}>
      {value}
    </span>
  );
}

/* ------------------------------------------------------------------ */
/* Decorative floating shapes (echoes the logo's confetti)             */
/* ------------------------------------------------------------------ */
export function Confetti({ className }: { className?: string }) {
  return (
    <div aria-hidden="true" className={cn("pointer-events-none absolute inset-0 overflow-hidden", className)}>
      <span className="absolute left-[6%] top-[18%] size-3 animate-float rounded-full bg-sky" />
      <span className="absolute left-[44%] top-[8%] size-2.5 animate-float-slow rounded-full bg-lime" />
      <span className="absolute right-[8%] top-[34%] size-3.5 animate-float rounded-full bg-pink" />
      <span className="absolute bottom-[14%] left-[10%] animate-float-slow text-2xl font-black text-sky">+</span>
      <span className="absolute right-[16%] top-[10%] animate-float text-2xl font-black text-violet">+</span>
      <span className="absolute bottom-[26%] right-[5%] h-1.5 w-7 rotate-45 animate-float-slow rounded-full bg-orange" />
      <span className="absolute left-[3%] top-[56%] h-1.5 w-6 -rotate-45 animate-float rounded-full bg-sun" />
    </div>
  );
}
