import type { CSSProperties, ReactNode, RefObject } from "react";
import { useInView } from "../hooks/useInView";
import { cn } from "../utils/cn";

type Props = {
  children: ReactNode;
  /** stagger delay in ms */
  delay?: number;
  variant?: "up" | "left" | "right" | "zoom";
  className?: string;
  /** render a <span> instead of a <div> (use inside headings / paragraphs) */
  inline?: boolean;
};

/** Wraps content with a scroll-triggered entrance. Put hover effects on the inner element. */
export function Reveal({ children, delay = 0, variant = "up", className, inline = false }: Props) {
  const [ref, inView] = useInView<HTMLDivElement>({
    threshold: 0.12,
    rootMargin: "0px 0px -6% 0px",
  });
  const style = { "--d": `${delay}ms` } as CSSProperties;
  const classes = cn("reveal", inline && "block", inView && "is-visible", className);

  if (inline) {
    return (
      <span
        ref={ref as unknown as RefObject<HTMLSpanElement>}
        data-variant={variant}
        style={style}
        className={classes}
      >
        {children}
      </span>
    );
  }
  return (
    <div ref={ref} data-variant={variant} style={style} className={classes}>
      {children}
    </div>
  );
}
