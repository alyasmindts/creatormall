import { Container, SectionHeading } from "./ui";
import { Reveal } from "./Reveal";
import { AREAS } from "../data/content";
import { TONES } from "../lib/tones";
import { cn } from "../utils/cn";

export function Areas() {
  return (
    <section id="area" aria-labelledby="area-title" className="relative scroll-mt-20 py-16 sm:py-24">
      <div aria-hidden="true" className="absolute inset-0 -z-10 bg-linear-to-b from-violet/[0.06] via-pink/[0.04] to-transparent" />
      <Container>
        <SectionHeading
          titleId="area-title"
          eyebrow="Konsep Area Event"
          title={
            <>
              Lima zona <span className="text-gradient">kreatif</span>
            </>
          }
        />

        <ul className="mt-12 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-5">
          {AREAS.map((a, i) => {
            const t = TONES[a.tone];
            return (
              <li key={a.title} className={cn(i === AREAS.length - 1 && "col-span-2 lg:col-span-1")}>
                <Reveal delay={i * 70} className="h-full">
                  <div className="h-full rounded-3xl border border-ink/5 bg-white p-5 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-violet/10">
                    <span className={cn("mx-auto grid size-12 place-items-center rounded-2xl", t.soft, t.text)}>
                      <a.icon className="size-6" />
                    </span>
                    <h3 className="mt-3 text-sm font-bold">{a.title}</h3>
                    <p className="mt-1 text-xs leading-relaxed text-ink-soft">{a.text}</p>
                  </div>
                </Reveal>
              </li>
            );
          })}
        </ul>
      </Container>
    </section>
  );
}
