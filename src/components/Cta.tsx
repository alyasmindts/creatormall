import { useRef, useState } from "react";
import type { FormEvent, ReactNode } from "react";
import { ArrowRight, Check, Copy, Lock, MessageCircle, Send } from "lucide-react";
import { Button, ButtonLink, Container } from "./ui";
import { Reveal } from "./Reveal";
import { CONTACT } from "../config";

type FormState = {
  parentName: string;
  whatsapp: string;
  childName: string;
  grade: string;
};

const EMPTY: FormState = { parentName: "", whatsapp: "", childName: "", grade: "4" };

const inputCls =
  "h-12 w-full rounded-2xl border border-ink/10 bg-white px-4 text-base text-ink placeholder:text-ink/35 outline-none transition-all duration-200 hover:border-violet/40 focus:border-violet focus:ring-4 focus:ring-violet/15 aria-[invalid=true]:border-red-500 aria-[invalid=true]:ring-red-500/10";

function Field({
  id,
  label,
  error,
  children,
}: {
  id: string;
  label: string;
  error?: string;
  children: ReactNode;
}) {
  return (
    <div>
      <label htmlFor={id} className="mb-1.5 block text-sm font-bold text-ink">
        {label}
      </label>
      {children}
      {error && (
        <p id={`${id}-err`} role="alert" className="mt-1.5 text-xs font-semibold text-red-600">
          {error}
        </p>
      )}
    </div>
  );
}

export function Cta() {
  const [form, setForm] = useState<FormState>(EMPTY);
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [sent, setSent] = useState(false);
  const [copied, setCopied] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const set = (k: keyof FormState) => (e: { target: { value: string } }) => {
    setForm((f) => ({ ...f, [k]: e.target.value }));
    if (errors[k]) setErrors((er) => ({ ...er, [k]: undefined }));
  };

  const message = `Halo Tim Kids Creator, saya ${form.parentName}. Saya ingin mendaftarkan ${form.childName} (kelas ${form.grade} SD) ke KIDS CREATOR MALL. WhatsApp saya: ${form.whatsapp}. Mohon info jadwal & lokasi event. Terima kasih!`;
  const waHref = `https://wa.me/${CONTACT.whatsapp}?text=${encodeURIComponent(message)}`;

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    const er: Partial<Record<keyof FormState, string>> = {};
    if (form.parentName.trim().length < 2) er.parentName = "Mohon isi nama Ibu / orang tua.";
    if (form.whatsapp.replace(/\D/g, "").length < 9) er.whatsapp = "Masukkan nomor WhatsApp yang valid.";
    if (form.childName.trim().length < 2) er.childName = "Mohon isi nama anak.";
    setErrors(er);
    const firstKey = Object.keys(er)[0];
    if (firstKey) {
      formRef.current?.querySelector<HTMLElement>(`#f-${firstKey}`)?.focus();
      return;
    }
    setSent(true);
    // Langsung buka WhatsApp tim Kids Creator dengan pesan yang sudah terisi.
    window.open(waHref, "_blank", "noopener");
  };

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(message);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2200);
    } catch {
      /* clipboard unavailable — user can still select the text manually */
    }
  };

  const reset = () => {
    setSent(false);
    setCopied(false);
    setForm(EMPTY);
  };

  const err = (k: keyof FormState) => ({
    "aria-invalid": errors[k] ? (true as const) : undefined,
    "aria-describedby": errors[k] ? `f-${k}-err` : undefined,
  });

  return (
    <section id="daftar" aria-labelledby="daftar-title" className="relative scroll-mt-20 py-16 sm:py-24">
      <Container>
        <div className="relative overflow-hidden rounded-[2.5rem] bg-linear-to-br from-[#d81b6a] via-[#8a3bd9] to-[#3a3ad4] p-6 text-white shadow-2xl shadow-violet/30 sm:p-12 lg:p-16">
          <div aria-hidden="true" className="pointer-events-none absolute inset-0">
            <div className="absolute -left-20 -top-20 size-80 animate-drift rounded-full bg-orange/40 blur-3xl" />
            <div className="absolute -bottom-24 right-10 size-96 animate-drift rounded-full bg-aqua/30 blur-3xl [animation-delay:-7s]" />
            <div className="bg-dots-light absolute inset-0 opacity-70" />
          </div>

          <div className="relative grid items-center gap-12 lg:grid-cols-[1fr_1.02fr] lg:gap-14">
            {/* ------------ copy ------------ */}
            <div>
              <Reveal>
                <span className="glass-dark inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 text-xs font-bold uppercase tracking-[0.14em] text-white/90">
                  <span className="size-2 rounded-full bg-sun" /> Pendaftaran
                </span>
              </Reveal>
              <Reveal delay={80}>
                <h2 id="daftar-title" className="mt-5 font-display text-4xl font-semibold leading-[1.05] tracking-tight text-balance sm:text-6xl">
                  Yuk, jadikan hari libur mereka <span className="text-sun">bermakna</span>
                </h2>
              </Reveal>
              <Reveal delay={160}>
                <p className="mt-5 max-w-lg text-lg leading-relaxed text-white/85">
                  Isi data singkat, lalu Ibu langsung terhubung ke WhatsApp tim kami untuk info jadwal dan lokasi
                  event.
                </p>
              </Reveal>
              <Reveal delay={240}>
                <div className="mt-8 border-t border-white/20 pt-5">
                  <p className="text-sm text-white/70">Hormat kami,</p>
                  <p className="font-display text-xl font-semibold">TIM KIDS CREATOR</p>
                  <p className="text-sm text-white/70">Creative Experience for Kids</p>
                </div>
              </Reveal>
            </div>

            {/* ------------ form ------------ */}
            <Reveal variant="right" delay={140}>
              <div className="rounded-[2rem] bg-white p-6 text-ink shadow-2xl shadow-ink/30 sm:p-8">
                {!sent ? (
                  <form ref={formRef} onSubmit={onSubmit} noValidate aria-label="Formulir pendaftaran">
                    <h3 className="font-display text-2xl font-semibold">Daftarkan Anak</h3>
                    <p className="mt-1 text-sm text-ink-soft">Isi data singkat di bawah ini.</p>

                    <div className="mt-6 grid gap-4">
                      <Field id="f-parentName" label="Nama Ibu / orang tua" error={errors.parentName}>
                        <input
                          id="f-parentName"
                          className={inputCls}
                          autoComplete="name"
                          placeholder="mis. Bu Rina"
                          value={form.parentName}
                          onChange={set("parentName")}
                          {...err("parentName")}
                        />
                      </Field>
                      <Field id="f-whatsapp" label="Nomor WhatsApp" error={errors.whatsapp}>
                        <input
                          id="f-whatsapp"
                          type="tel"
                          inputMode="tel"
                          className={inputCls}
                          autoComplete="tel"
                          placeholder="08xx xxxx xxxx"
                          value={form.whatsapp}
                          onChange={set("whatsapp")}
                          {...err("whatsapp")}
                        />
                      </Field>
                      <div className="grid gap-4 sm:grid-cols-[1.4fr_1fr]">
                        <Field id="f-childName" label="Nama anak" error={errors.childName}>
                          <input
                            id="f-childName"
                            className={inputCls}
                            placeholder="mis. Kayla"
                            value={form.childName}
                            onChange={set("childName")}
                            {...err("childName")}
                          />
                        </Field>
                        <Field id="f-grade" label="Kelas">
                          <select id="f-grade" className={inputCls} value={form.grade} onChange={set("grade")}>
                            {["3", "4", "5", "6"].map((g) => (
                              <option key={g} value={g}>
                                Kelas {g} SD
                              </option>
                            ))}
                          </select>
                        </Field>
                      </div>
                    </div>

                    <Button type="submit" size="lg" className="mt-7 w-full">
                      Daftar via WhatsApp
                      <ArrowRight className="size-5 transition-transform group-hover:translate-x-1" />
                    </Button>
                    <p className="mt-4 flex items-center justify-center gap-1.5 text-center text-xs text-ink-soft">
                      <Lock className="size-3.5" />
                      Data dikirim langsung ke WhatsApp tim Kids Creator.
                    </p>
                  </form>
                ) : (
                  <div className="animate-pop text-center" role="status">
                    <span className="mx-auto grid size-16 place-items-center rounded-full bg-linear-to-br from-lime to-aqua text-white shadow-lg shadow-lime/30">
                      <Check className="size-8" strokeWidth={3} />
                    </span>
                    <h3 className="mt-5 font-display text-2xl font-semibold">WhatsApp sedang dibuka…</h3>
                    <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                      Tekan <strong className="text-ink">Kirim</strong> di WhatsApp agar pendaftaran sampai ke tim Kids
                      Creator. Jika WhatsApp tidak terbuka otomatis, tekan tombol di bawah.
                    </p>
                    <p className="mt-5 select-all rounded-2xl bg-paper p-4 text-left text-sm leading-relaxed text-ink">
                      {message}
                    </p>
                    <div className="mt-6 grid gap-3 sm:grid-cols-2">
                      <ButtonLink href={waHref} target="_blank" rel="noopener noreferrer" size="lg">
                        <Send className="size-5" /> Buka WhatsApp
                      </ButtonLink>
                      <Button type="button" variant="secondary" size="lg" onClick={copy} className="border border-ink/10 bg-white">
                        {copied ? <Check className="size-5 text-[#0b7a45]" /> : <Copy className="size-5" />}
                        {copied ? "Tersalin!" : "Salin pesan"}
                      </Button>
                    </div>
                    <button
                      type="button"
                      onClick={reset}
                      className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-violet underline-offset-4 hover:underline"
                    >
                      <MessageCircle className="size-4" /> Isi ulang formulir
                    </button>
                  </div>
                )}
              </div>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
