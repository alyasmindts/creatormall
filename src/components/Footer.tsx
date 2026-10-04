import { ArrowUp } from "lucide-react";
import { Container } from "./ui";
import { Logo } from "./Logo";
import { NAV_LINKS } from "../data/content";
import { BRAND } from "../config";

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-ink pt-14 text-white">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute -left-24 -top-24 size-96 rounded-full bg-violet/25 blur-3xl" />
        <div className="absolute -bottom-32 right-0 size-96 rounded-full bg-pink/20 blur-3xl" />
      </div>
      <Container className="relative">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr]">
          <div>
            <Logo light />
            <p className="mt-5 max-w-xs font-display text-xl font-medium leading-snug text-white/90">
              “{BRAND.tagline}”
            </p>
            <p className="mt-2 text-sm text-white/60">{BRAND.theme}</p>
          </div>

          <nav aria-label="Navigasi footer">
            <h2 className="text-sm font-extrabold uppercase tracking-widest text-white/50">Jelajahi</h2>
            <ul className="mt-5 grid grid-cols-2 gap-x-6 gap-y-3">
              {NAV_LINKS.map((l) => (
                <li key={l.id}>
                  <a href={`#${l.id}`} className="text-sm font-semibold text-white/80 transition-colors hover:text-white">
                    {l.label}
                  </a>
                </li>
              ))}
              <li>
                <a href="#daftar" className="text-sm font-semibold text-sun transition-colors hover:text-white">
                  Daftar Sekarang
                </a>
              </li>
            </ul>
          </nav>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-5 border-t border-white/10 py-7 sm:flex-row sm:items-center">
          <p className="text-xs text-white/50">© 2026 {BRAND.name}. Semua hak dilindungi.</p>
          <a
            href="#top"
            aria-label="Kembali ke atas"
            className="grid size-11 place-items-center rounded-full bg-white/10 transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:text-ink"
          >
            <ArrowUp className="size-5" />
          </a>
        </div>
      </Container>
    </footer>
  );
}
