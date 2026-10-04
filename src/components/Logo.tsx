import { cn } from "../utils/cn";

/** Brand mark — a phone, play button and idea-spark, echoing the playful Digital Creative Talent identity. */
export function LogoMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" className={className} aria-hidden="true" focusable="false">
      <defs>
        <linearGradient id="kcm-bg" x1="2" y1="2" x2="46" y2="46" gradientUnits="userSpaceOnUse">
          <stop stopColor="#ff3d8b" />
          <stop offset="0.55" stopColor="#7b4dff" />
          <stop offset="1" stopColor="#2d8cff" />
        </linearGradient>
        <linearGradient id="kcm-play" x1="20" y1="16" x2="33" y2="31" gradientUnits="userSpaceOnUse">
          <stop stopColor="#ffc83d" />
          <stop offset="1" stopColor="#ff3d8b" />
        </linearGradient>
      </defs>
      <rect width="48" height="48" rx="15" fill="url(#kcm-bg)" />
      <rect x="13" y="7" width="22" height="34" rx="6" fill="#fff" stroke="#12163f" strokeWidth="2.5" />
      <rect x="20" y="10.5" width="8" height="2" rx="1" fill="#12163f" opacity="0.18" />
      <path
        d="M21 17.5 L21 29.5 L32 23.5 Z"
        fill="url(#kcm-play)"
        stroke="url(#kcm-play)"
        strokeWidth="3"
        strokeLinejoin="round"
      />
      <circle cx="38.5" cy="9.5" r="4.5" fill="#ffc83d" stroke="#12163f" strokeWidth="2" />
      <circle cx="9" cy="37" r="3" fill="#2bd17e" stroke="#12163f" strokeWidth="1.5" />
    </svg>
  );
}

export function Logo({ className, light = false }: { className?: string; light?: boolean }) {
  return (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <LogoMark className="size-10 drop-shadow-[0_6px_14px_rgba(123,77,255,0.35)]" />
      <span className="flex flex-col leading-none">
        <span
          className={cn(
            "font-display text-[1.35rem] font-bold tracking-tight",
            light ? "text-white" : "text-ink",
          )}
        >
          KIDS <span className="text-gradient">CREATOR</span>
        </span>
        <span
          className={cn(
            "mt-1 text-[0.62rem] font-extrabold uppercase tracking-[0.32em]",
            light ? "text-white/70" : "text-ink-soft",
          )}
        >
          Mall
        </span>
      </span>
    </span>
  );
}
