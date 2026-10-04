import { ArrowRight, Check, CirclePlay, Sparkles } from "lucide-react";
import heroImg from "../assets/hero.jpg";
import { ButtonLink, Container, Eyebrow } from "./ui";
import { Reveal } from "./Reveal";

const WAVE = [0.4, 0.8, 0.55, 1, 0.65, 0.9, 0.45, 0.75];

function RotatingBadge() {
  return (
    <div className="relative grid size-28 place-items-center sm:size-32">
      <svg viewBox="0 0 120 120" className="absolute inset-0 size-full animate-spin-slow" aria-hidden="true">
        <defs>
          <path id="badge-circle" d="M60,60 m-45,0 a45,45 0 1,1 90,0 a45,45 0 1,1 -90,0" />
        </defs>
        <circle cx="60" cy="60" r="58" fill="#12163f" />
        <text fill="#fff" fontSize="10" fontWeight="800" letterSpacing="3" fontFamily="Plus Jakarta Sans, sans-serif">
          <textPath href="#badge-circle">3 JAM • 4 SKILL • 3 KARYA •</textPath>
        </text>
      </svg>
      <div className="relative grid size-12 place-items-center rounded-full bg-linear-to-br from-sun to-pink shadow-lg">
        <Sparkles className="size-6 text-white" />
      </div>
    </div>
  );
}

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      {/* ambient background */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute -left-32 -top-24 size-[32rem] animate-drift rounded-full bg-pink/20 blur-3xl" />
        <div className="absolute -right-24 top-10 size-[28rem] animate-drift rounded-full bg-violet/20 blur-3xl [animation-delay:-6s]" />
        <div className="absolute bottom-0 left-1/3 size-[24rem] animate-drift rounded-full bg-aqua/20 blur-3xl [animation-delay:-11s]" />
        <div className="bg-dots absolute inset-0 [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]" />
      </div>

      <Container className="relative grid items-center gap-14 pb-20 pt-6 sm:pt-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10 lg:pb-28 lg:pt-14">
        {/* ---------------- Copy (centered on mobile) ---------------- */}
        <div className="text-center lg:text-left">
          <Reveal>
            <Eyebrow>Creative Experience for Kids</Eyebrow>
          </Reveal>

          <h1 className="mt-6 font-display text-[length:clamp(3.25rem,17.5vw,5rem)] font-bold leading-[0.95] tracking-tight sm:text-[4rem] md:text-[5rem] lg:text-[3.75rem] xl:text-[4.75rem]">
            <Reveal inline delay={80}>
              <span className="block text-ink">
                <span className="block sm:inline">KIDS</span> <span className="block sm:inline">CREATOR</span>
              </span>
            </Reveal>
            <Reveal inline delay={170}>
              <span className="text-gradient block">MALL</span>
            </Reveal>
          </h1>

          <Reveal delay={260}>
            <p className="mt-6 flex flex-wrap justify-center gap-x-3 font-display text-xl font-semibold sm:text-2xl lg:justify-start">
              <span className="text-[#1560c4]">Pegang HP.</span>
              <span className="text-[#c9155f]">Buat Karya.</span>
              <span className="text-[#0b7a45]">Berani Tampil!</span>
            </p>
          </Reveal>

          <Reveal delay={340}>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-ink-soft text-pretty lg:mx-0">
              Event kreatif untuk anak SD kelas 3–6. Dalam <strong className="text-ink">3 jam</strong>, anak belajar
              berbicara, membangun percaya diri, dan membuat karya digital hanya dengan HP.
            </p>
          </Reveal>

          <Reveal delay={420}>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-center lg:justify-start">
              <ButtonLink href="#daftar" size="lg">
                Daftarkan Anak
                <ArrowRight className="size-5 transition-transform group-hover:translate-x-1" />
              </ButtonLink>
              <ButtonLink href="#program" size="lg" variant="secondary">
                <CirclePlay className="size-5 text-violet" />
                Lihat Program
              </ButtonLink>
            </div>
          </Reveal>

          <Reveal delay={500}>
            <ul className="mt-8 flex flex-wrap justify-center gap-x-6 gap-y-3 text-sm font-semibold text-ink-soft lg:justify-start">
              {["Kelas 3–6 SD", "Cukup bawa HP", "Sertifikat & portfolio digital"].map((t) => (
                <li key={t} className="flex items-center gap-2">
                  <span className="grid size-5 place-items-center rounded-full bg-lime/20 text-[#0b7a45]">
                    <Check className="size-3.5" strokeWidth={3} />
                  </span>
                  {t}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        {/* ---------------- Visual ---------------- */}
        <Reveal variant="zoom" delay={200} className="relative mx-auto w-full max-w-md lg:max-w-none">
          <div className="relative mx-auto max-w-[27rem] lg:ml-auto lg:mr-4">
            <div
              aria-hidden="true"
              className="absolute -inset-3 -rotate-6 rounded-[3rem] bg-linear-to-br from-pink via-orange to-sun opacity-90"
            />
            <div
              aria-hidden="true"
              className="absolute -inset-3 rotate-3 rounded-[3rem] bg-linear-to-br from-sky/80 to-violet/80"
            />

            <div className="relative aspect-[4/5] overflow-hidden rounded-[2.5rem] border-[5px] border-white bg-white shadow-2xl shadow-violet/25">
              <img
                src={heroImg}
                alt="Anak-anak SD merekam video dengan HP sambil tertawa di area event mall"
                width={1024}
                height={1280}
                className="size-full object-cover transition-transform duration-[1600ms] ease-out hover:scale-105"
                fetchPriority="high"
              />
              <div className="absolute inset-0 bg-linear-to-t from-ink/40 via-transparent to-transparent" aria-hidden="true" />

              <div className="glass absolute inset-x-4 bottom-4 flex items-center gap-3 rounded-2xl px-4 py-3 shadow-lg">
                <span className="relative flex size-3 shrink-0">
                  <span className="absolute inline-flex size-full animate-ring rounded-full bg-red-500" />
                  <span className="relative inline-flex size-3 rounded-full bg-red-500" />
                </span>
                <div className="min-w-0 flex-1 text-left">
                  <p className="text-[0.7rem] font-extrabold uppercase tracking-widest text-ink">Rec · Video Speaking</p>
                  <p className="truncate text-xs text-ink-soft">“Halo, namaku Kayla dan aku berani!”</p>
                </div>
                <div className="flex h-7 items-center gap-[3px]" aria-hidden="true">
                  {WAVE.map((h, i) => (
                    <span
                      key={i}
                      className="w-[3px] origin-center animate-wave rounded-full bg-linear-to-t from-pink to-violet"
                      style={{ height: `${h * 100}%`, animationDelay: `${i * 90}ms` }}
                    />
                  ))}
                </div>
              </div>
            </div>

            <div className="absolute -right-4 -top-10 sm:-right-10 sm:-top-12">
              <RotatingBadge />
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
