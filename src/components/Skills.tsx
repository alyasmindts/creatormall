import { ArrowRight } from "lucide-react";
import { Container, SectionHeading, SpotlightCard } from "./ui";
import { Reveal } from "./Reveal";
import { FLOW, SKILLS } from "../data/content";
import { TONES } from "../lib/tones";
import { cn } from "../utils/cn";

export function Skills() {
  return (
    <section id="program" aria-labelledby="program-title" className="relative scroll-mt-20 py-16 sm:py-24">
      <Container>
        <SectionHeading
          titleId="program-title"
          eyebrow="3 Jam • 4 Skill • 3 Karya"
          title={
            <>
              4 skill, satu alur yang <span className="text-gradient">seru</span>
            </>
          }
          subtitle="Setiap skill menghasilkan satu karya nyata. Anak praktik langsung, bukan sekadar mendengarkan."
        />

        {/* PLAY → LEARN → CREATE → SHOW */}
        <Reveal delay={100}>
          <ol className="mx-auto mt-10 grid max-w-3xl grid-cols-2 gap-3 sm:grid-cols-4">
            {FLOW.map((f, i) => {
              const t = TONES[f.tone];
              return (
                <li key={f.word} className="relative">
                  <div className={cn("rounded-2xl border bg-white/80 px-3 py-3.5 text-center", t.border)}>
                    <span className={cn("block font-display text-lg font-bold tracking-wide", t.text)}>{f.word}</span>
                    <span className="block text-xs font-medium text-ink-soft">{f.text}</span>
                  </div>
                  {i < FLOW.length - 1 && (
                    <ArrowRight
                      aria-hidden="true"
                      className="absolute -right-3.5 top-1/2 z-10 hidden size-5 -translate-y-1/2 text-ink/30 sm:block"
                    />
                  )}
                </li>
              );
            })}
          </ol>
        </Reveal>

        <ul className="mt-12 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {SKILLS.map((s, i) => {
            const t = TONES[s.tone];
            return (
              <li key={s.title}>
                <Reveal delay={i * 90} className="h-full">
                  <SpotlightCard className="group h-full rounded-[2rem] border border-ink/5 bg-white p-6 shadow-lg shadow-violet/5 transition-all duration-500 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-violet/15">
                    <span
                      className={cn(
                        "grid size-14 place-items-center rounded-2xl bg-linear-to-br text-white shadow-lg transition-transform duration-500 group-hover:-rotate-6 group-hover:scale-110",
                        t.grad,
                        t.glow,
                      )}
                    >
                      <s.icon className="size-7" />
                    </span>
                    <p className={cn("mt-5 text-xs font-extrabold uppercase tracking-[0.2em]", t.text)}>Skill {s.n}</p>
                    <h3 className="mt-1 font-display text-2xl font-semibold leading-tight">{s.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-ink-soft">{s.desc}</p>
                    <div className={cn("mt-5 rounded-2xl border px-4 py-3", t.border, t.soft)}>
                      <p className="text-[0.65rem] font-bold uppercase tracking-widest text-ink-soft">Output</p>
                      <p className={cn("text-sm font-extrabold", t.text)}>{s.output}</p>
                    </div>
                  </SpotlightCard>
                </Reveal>
              </li>
            );
          })}
        </ul>
      </Container>
    </section>
  );
}
