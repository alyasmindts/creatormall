import { useEffect, useRef, useState } from "react";
import { ArrowRight, Menu, X } from "lucide-react";
import { Logo } from "./Logo";
import { ButtonLink, Container } from "./ui";
import { NAV_LINKS } from "../data/content";
import { cn } from "../utils/cn";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState<string>("");
  const progressRef = useRef<HTMLDivElement>(null);

  /* scroll state + progress bar (no re-render per frame) */
  useEffect(() => {
    let raf = 0;
    const update = () => {
      raf = 0;
      const y = window.scrollY;
      setScrolled(y > 12);
      const max = document.documentElement.scrollHeight - window.innerHeight;
      if (progressRef.current) {
        progressRef.current.style.transform = `scaleX(${max > 0 ? Math.min(1, y / max) : 0})`;
      }
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  /* highlight current section */
  useEffect(() => {
    if (typeof IntersectionObserver === "undefined") return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    NAV_LINKS.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) io.observe(el);
    });
    return () => io.disconnect();
  }, []);

  /* Escape closes menu */
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className="sticky top-0 z-50">
      <div
        ref={progressRef}
        aria-hidden="true"
        className="fixed inset-x-0 top-0 z-[60] h-1 origin-left scale-x-0 bg-linear-to-r from-pink via-orange to-aqua"
      />
      <div className={cn("transition-[padding] duration-300", scrolled ? "py-2" : "py-3 sm:py-4")}>
        <Container>
          <nav
            aria-label="Navigasi utama"
            className={cn(
              "flex items-center justify-between rounded-full px-3 py-2 transition-all duration-300 sm:px-5",
              scrolled || open
                ? "glass shadow-lg shadow-violet/10"
                : "border border-transparent bg-transparent",
            )}
          >
            <a href="#top" aria-label="KIDS CREATOR MALL — ke atas" className="rounded-full">
              <Logo />
            </a>

            <ul className="hidden items-center gap-1 lg:flex">
              {NAV_LINKS.map((l) => (
                <li key={l.id}>
                  <a
                    href={`#${l.id}`}
                    aria-current={active === l.id ? "true" : undefined}
                    className={cn(
                      "relative rounded-full px-4 py-2 text-sm font-semibold transition-colors",
                      active === l.id ? "text-ink" : "text-ink-soft hover:text-ink",
                    )}
                  >
                    {active === l.id && (
                      <span className="absolute inset-0 -z-10 rounded-full bg-violet/10" aria-hidden="true" />
                    )}
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>

            <div className="flex items-center gap-2">
              <ButtonLink href="#daftar" size="md" className="hidden sm:inline-flex">
                Daftar Sekarang
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
              </ButtonLink>
              <button
                type="button"
                className="grid size-11 place-items-center rounded-full text-ink transition-colors hover:bg-ink/5 lg:hidden"
                aria-expanded={open}
                aria-controls="mobile-menu"
                aria-label={open ? "Tutup menu" : "Buka menu"}
                onClick={() => setOpen((v) => !v)}
              >
                {open ? <X className="size-6" /> : <Menu className="size-6" />}
              </button>
            </div>
          </nav>

          {open && (
            <div
              id="mobile-menu"
              className="glass mt-2 animate-pop rounded-3xl p-3 shadow-xl shadow-violet/10 lg:hidden"
            >
              <ul className="flex flex-col">
                {NAV_LINKS.map((l) => (
                  <li key={l.id}>
                    <a
                      href={`#${l.id}`}
                      onClick={() => setOpen(false)}
                      className="flex items-center justify-between rounded-2xl px-4 py-3.5 text-base font-semibold text-ink transition-colors hover:bg-violet/10"
                    >
                      {l.label}
                      <ArrowRight className="size-4 text-ink-soft" />
                    </a>
                  </li>
                ))}
              </ul>
              <ButtonLink
                href="#daftar"
                size="lg"
                className="mt-2 w-full"
                onClick={() => setOpen(false)}
              >
                Daftar Sekarang
              </ButtonLink>
            </div>
          )}
        </Container>
      </div>
    </header>
  );
}
