import { useState } from "react";
import { ChevronDown, MessageCircle } from "lucide-react";
import { ButtonLink, Container, SectionHeading } from "./ui";
import { Reveal } from "./Reveal";
import { FAQS } from "../data/content";
import { CONTACT } from "../config";
import { cn } from "../utils/cn";

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" aria-labelledby="faq-title" className="relative scroll-mt-20 py-20 sm:py-28">
      <Container className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <SectionHeading
            titleId="faq-title"
            align="left"
            eyebrow="Pertanyaan Umum"
            title={
              <>
                Ada yang ingin <span className="text-gradient">Ibu tanyakan?</span>
              </>
            }
            subtitle="Jawaban singkat untuk hal-hal yang paling sering ditanyakan orang tua dan mitra."
          />
          <Reveal delay={200}>
            <div className="glass mt-8 flex items-center gap-4 rounded-3xl p-5 shadow-lg shadow-violet/5">
              <span className="grid size-12 shrink-0 place-items-center rounded-2xl bg-linear-to-br from-lime to-aqua text-white">
                <MessageCircle className="size-6" />
              </span>
              <div className="min-w-0 flex-1">
                <p className="font-bold leading-tight">Masih ragu?</p>
                <p className="text-sm text-ink-soft">Tim kami siap membantu via WhatsApp.</p>
              </div>
              <ButtonLink
                href={`https://wa.me/${CONTACT.whatsapp}?text=${encodeURIComponent(
                  "Halo Tim Kids Creator, saya ingin bertanya tentang KIDS CREATOR MALL.",
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                variant="dark"
                size="md"
              >
                Hubungi
              </ButtonLink>
            </div>
          </Reveal>
        </div>

        <ul className="space-y-3">
          {FAQS.map((f, i) => {
            const isOpen = open === i;
            return (
              <li key={f.q}>
                <Reveal delay={Math.min(i, 4) * 70}>
                  <div
                    className={cn(
                      "rounded-3xl border bg-white transition-all duration-300",
                      isOpen
                        ? "border-violet/30 shadow-xl shadow-violet/10"
                        : "border-ink/5 shadow-sm hover:border-violet/20 hover:shadow-md",
                    )}
                  >
                    <h3>
                      <button
                        type="button"
                        id={`faq-q-${i}`}
                        aria-expanded={isOpen}
                        aria-controls={`faq-a-${i}`}
                        onClick={() => setOpen(isOpen ? null : i)}
                        className="flex w-full items-center justify-between gap-4 rounded-3xl px-6 py-5 text-left text-base font-bold sm:text-lg"
                      >
                        <span className="text-balance">{f.q}</span>
                        <span
                          aria-hidden="true"
                          className={cn(
                            "grid size-9 shrink-0 place-items-center rounded-full transition-all duration-300",
                            isOpen ? "rotate-180 bg-violet text-white" : "bg-violet/10 text-violet",
                          )}
                        >
                          <ChevronDown className="size-5" />
                        </span>
                      </button>
                    </h3>
                    <div
                      id={`faq-a-${i}`}
                      role="region"
                      aria-labelledby={`faq-q-${i}`}
                      inert={!isOpen}
                      className={cn(
                        "grid transition-[grid-template-rows,opacity] duration-300 ease-out",
                        isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0",
                      )}
                    >
                      <div className="overflow-hidden">
                        <p className="px-6 pb-6 text-[0.95rem] leading-relaxed text-ink-soft sm:text-base">{f.a}</p>
                      </div>
                    </div>
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
