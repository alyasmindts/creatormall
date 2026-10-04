import { Container, CountUp, SpotlightCard } from "./ui";
import { Reveal } from "./Reveal";
import { STATS } from "../data/content";
import { TONES } from "../lib/tones";
import { cn } from "../utils/cn";

export function Stats() {
  return (
    <section aria-label="Ringkasan event" className="relative pb-20 sm:pb-24">
      <Container>
        <ul className="grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-4">
          {STATS.map((s, i) => {
            const t = TONES[s.tone];
            return (
              <li key={s.label}>
                <Reveal delay={i * 90} className="h-full">
                  <SpotlightCard className="glass h-full rounded-3xl p-5 text-center shadow-lg shadow-violet/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl sm:p-7">
                    <span className="sr-only">
                      {s.prefix}
                      {s.value} {s.label}
                    </span>
                    <div aria-hidden="true">
                      <p className={cn("font-display text-5xl font-bold leading-none sm:text-6xl", t.text)}>
                        {s.prefix}
                        <CountUp to={s.value} />
                      </p>
                      <p className="mt-3 text-sm font-semibold text-ink-soft">{s.label}</p>
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
