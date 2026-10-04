import {
  BatteryCharging,
  Camera,
  Heart,
  Image as ImageIcon,
  Lightbulb,
  Mic,
  Palette,
  Presentation,
  Smartphone,
  Sparkles,
  Star,
  Wifi,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import type { Tone } from "../lib/tones";

/* ------------------------------------------------------------------ */
/* Navigation                                                          */
/* ------------------------------------------------------------------ */
export const NAV_LINKS = [
  { id: "program", label: "Program" },
  { id: "manfaat", label: "Manfaat" },
  { id: "faq", label: "FAQ" },
] as const;

/* ------------------------------------------------------------------ */
/* Quick facts                                                         */
/* ------------------------------------------------------------------ */
export const STATS: { value: number; prefix?: string; label: string; tone: Tone }[] = [
  { value: 3, label: "Jam pengalaman seru", tone: "pink" },
  { value: 4, label: "Skill yang diasah", tone: "sky" },
  { value: 3, label: "Karya dibawa pulang", tone: "lime" },
  { value: 50, label: "Peserta per event", tone: "violet" },
];

/* ------------------------------------------------------------------ */
/* Skills                                                              */
/* ------------------------------------------------------------------ */
export const FLOW: { word: string; text: string; tone: Tone }[] = [
  { word: "PLAY", text: "Bermain", tone: "pink" },
  { word: "LEARN", text: "Belajar", tone: "sky" },
  { word: "CREATE", text: "Berkarya", tone: "violet" },
  { word: "SHOW", text: "Tampil", tone: "orange" },
];

export const SKILLS: {
  n: string;
  title: string;
  icon: LucideIcon;
  tone: Tone;
  desc: string;
  output: string;
}[] = [
  {
    n: "01",
    title: "Speak Up",
    icon: Mic,
    tone: "sky",
    desc: "Perkenalan diri, storytelling, dan speaking challenge di depan kamera.",
    output: "Video Speaking",
  },
  {
    n: "02",
    title: "Build Confidence",
    icon: Heart,
    tone: "pink",
    desc: "Games, team challenge, dan expression challenge yang seru dan penuh tawa.",
    output: "Mini Performance",
  },
  {
    n: "03",
    title: "Create Digital",
    icon: Palette,
    tone: "violet",
    desc: "Membuat desain dan konten digital dengan HP — dari ide sampai jadi.",
    output: "Digital Artwork / Content",
  },
  {
    n: "04",
    title: "Show Your Creativity",
    icon: Presentation,
    tone: "orange",
    desc: "Presentasi dan showcase karya di hadapan teman dan keluarga.",
    output: "Creative Digital Portfolio",
  },
];

/* ------------------------------------------------------------------ */
/* Event areas                                                         */
/* ------------------------------------------------------------------ */
export const AREAS: { title: string; text: string; icon: LucideIcon; tone: Tone }[] = [
  { title: "Creator Stage", text: "Speaking activity dan showcase.", icon: Mic, tone: "sky" },
  { title: "Creator Zone", text: "Aktivitas digital dengan HP.", icon: Smartphone, tone: "violet" },
  { title: "Creative Zone", text: "Area pembuatan karya.", icon: Palette, tone: "pink" },
  { title: "Showcase Zone", text: "Penampilan hasil karya.", icon: Star, tone: "orange" },
  { title: "Photo Spot", text: "Dokumentasi dan branding event.", icon: Camera, tone: "lime" },
];

/* ------------------------------------------------------------------ */
/* Benefits for Ibu & anak                                             */
/* ------------------------------------------------------------------ */
export const GOALS: { icon: LucideIcon; title: string; text: string; tone: Tone }[] = [
  {
    icon: Sparkles,
    title: "Pengalaman kreatif yang menyenangkan",
    text: "Belajar yang dikemas seperti bermain.",
    tone: "pink",
  },
  {
    icon: Mic,
    title: "Berani berbicara & tampil",
    text: "Latihan nyata di depan kamera dan audience.",
    tone: "sky",
  },
  {
    icon: Heart,
    title: "Percaya diri yang tumbuh",
    text: "Lewat aktivitas dan challenge yang seru.",
    tone: "orange",
  },
  {
    icon: Lightbulb,
    title: "Kreativitas & skill digital",
    text: "Keterampilan sederhana yang bisa dipraktikkan di rumah.",
    tone: "violet",
  },
  {
    icon: ImageIcon,
    title: "Portfolio digital pertama",
    text: "Karya anak tersimpan rapi dan bisa dibanggakan.",
    tone: "aqua",
  },
];

export const REQUIREMENTS: { icon: LucideIcon; title: string }[] = [
  { icon: Smartphone, title: "HP / Smartphone" },
  { icon: Wifi, title: "Paket data internet" },
  { icon: BatteryCharging, title: "Charger / Powerbank" },
];

/* ------------------------------------------------------------------ */
/* FAQ                                                                 */
/* ------------------------------------------------------------------ */
export const FAQS = [
  {
    q: "Siapa saja yang bisa mengikuti KIDS CREATOR MALL?",
    a: "Event ini untuk siswa SD kelas 3–6. Peserta dibatasi 50 peserta per event agar setiap anak mendapat pendampingan yang optimal dari trainer, mentor, dan fasilitator.",
  },
  {
    q: "Apa saja yang perlu dibawa anak saya?",
    a: "Cukup bawa HP/smartphone, pastikan ada paket data internet, dan bawa charger atau powerbank. Seluruh aktivitas utama dirancang agar dapat dilakukan dengan HP peserta.",
  },
  {
    q: "Anak saya pemalu. Apakah tetap cocok ikut?",
    a: "Justru itu salah satu tujuannya. Alurnya bertahap: dimulai dari ice breaking dan games, lalu speaking challenge, hingga mini performance — sehingga keberanian tumbuh secara alami.",
  },
  {
    q: "Apa saja yang didapat anak setelah acara?",
    a: "Tiga karya (Video Speaking, Mini Performance, Digital Artwork/Content), Creative Digital Portfolio, sertifikat, dan dokumentasi kegiatan.",
  },
  {
    q: "Bagaimana cara mendaftar dan kapan jadwalnya?",
    a: "Isi formulir pendaftaran di bagian bawah halaman ini, lalu kirim lewat WhatsApp. Tim kami akan menginformasikan jadwal, lokasi, dan detail pendaftaran.",
  },
];
