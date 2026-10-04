import { Heart } from "lucide-react";
import familyImg from "../assets/family.jpg";
import { Container, SectionHeading } from "./ui";
import { Reveal } from "./Reveal";
import { GOALS, REQUIREMENTS } from "../data/content";
import { TONES } from "../lib/tones";
import { cn } from "../utils/cn";

export function Benefits() {
  return (
    <section id="manfaat" aria-labelledby="manfaat-title" className="relative scroll-mt-20 py-16 sm:py-24">
      <Container>
        <SectionHeading
          titleId="manfaat-title"
          eyebrow="Manfaat untuk Ibu & Anak"
          title={
            <>
              Investasi <span className="text-gradient">percaya diri</span> si kecil
            </>
          }
        />

        <div className="mt-14 grid items-center gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-14">
          <Reveal variant="left">
            <div className="relative mx-auto max-w-md">
              <div aria-hidden="true" className="absolute -inset-3 -rotate-3 rounded-[2.75rem] bg-linear-to-br from-sky/30 via-violet/20 to-pink/30" />
              <div className="relative aspect-square overflow-hidden rounded-[2.5rem] border-[5px] border-white shadow-2xl shadow-violet/20">
                <img
                  src={familyImg}
                  alt="Seorang ibu memeluk putrinya yang memegang sertifikat sambil melihat hasil karya di HP"
                  width={1024}
                  height={1024}
                  loading="lazy"
                  className="size-full object-cover transition-transform duration-[1600ms] ease-out hover:scale-105"
                />
              </div>
              <div className="glass absolute -bottom-5 right-4 flex animate-float items-center gap-3 rounded-2xl px-4 py-3 shadow-xl shadow-ink/10 sm:-right-4">
                <span className="grid size-10 place-items-center rounded-xl bg-linear-to-br from-pink to-orange text-white">
                  <Heart className="size-5 fill-current" />
                </span>
                <p className="text-sm font-bold leading-tight">“Aku bisa, Ma!”</p>
              </div>
            </div>
          </Reveal>

          <ul className="grid gap-3 sm:grid-cols-2">
            {GOALS.map((g, i) => {
              const t = TONES[g.tone];
              return (
                <li
                  key={g.title}
                  className={cn(GOALS.length % 2 === 1 && i === GOALS.length - 1 && "sm:col-span-2")}
                >
                  <Reveal delay={(i % 2) * 90} className="h-full">
                    <div className="group h-full rounded-3xl border border-ink/5 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-violet/10">
                      <span
                        className={cn(
                          "grid size-11 place-items-center rounded-2xl transition-transform duration-500 group-hover:-rotate-6 group-hover:scale-110",
                          t.soft,
                          t.text,
                        )}
                      >
                        <g.icon className="size-5" />
                      </span>
                      <h3 className="mt-4 text-base font-bold leading-snug">{g.title}</h3>
                      <p className="mt-1.5 text-sm leading-relaxed text-ink-soft">{g.text}</p>
                    </div>
                  </Reveal>
                </li>
              );
            })}
          </ul>
        </div>

        <Reveal delay={100}>
          <div className="glass mx-auto mt-16 max-w-3xl rounded-[2rem] p-6 shadow-lg shadow-violet/5 sm:p-8">
            <h3 className="text-center font-display text-xl font-semibold">Yang perlu disiapkan</h3>
            <ul className="mt-5 grid gap-3 sm:grid-cols-3">
              {REQUIREMENTS.map((r) => (
                <li key={r.title} className="flex items-center gap-3 rounded-2xl bg-white/80 p-3.5">
                  <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-violet/10 text-violet">
                    <r.icon className="size-5" />
                  </span>
                  <span className="text-sm font-bold">{r.title}</span>
                </li>
              ))}
            </ul>
            <p className="mt-4 text-center text-sm text-ink-soft">
              Seluruh aktivitas utama dirancang agar dapat dilakukan dengan HP peserta.
            </p>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
