export type Tone = "pink" | "orange" | "sun" | "lime" | "sky" | "violet" | "aqua";

type ToneClasses = {
  /** solid background */
  bg: string;
  /** soft tinted background */
  soft: string;
  /** accessible (dark enough) text colour on light backgrounds */
  text: string;
  /** gradient stops, use with bg-linear-to-br */
  grad: string;
  /** subtle border */
  border: string;
  /** coloured shadow */
  glow: string;
};

export const TONES: Record<Tone, ToneClasses> = {
  pink: {
    bg: "bg-pink",
    soft: "bg-pink/10",
    text: "text-[#c9155f]",
    grad: "from-pink to-orange",
    border: "border-pink/25",
    glow: "shadow-pink/30",
  },
  orange: {
    bg: "bg-orange",
    soft: "bg-orange/15",
    text: "text-[#b84f00]",
    grad: "from-orange to-sun",
    border: "border-orange/30",
    glow: "shadow-orange/30",
  },
  sun: {
    bg: "bg-sun",
    soft: "bg-sun/20",
    text: "text-[#8a5a00]",
    grad: "from-sun to-orange",
    border: "border-sun/40",
    glow: "shadow-sun/40",
  },
  lime: {
    bg: "bg-lime",
    soft: "bg-lime/15",
    text: "text-[#0b7a45]",
    grad: "from-lime to-aqua",
    border: "border-lime/30",
    glow: "shadow-lime/30",
  },
  sky: {
    bg: "bg-sky",
    soft: "bg-sky/10",
    text: "text-[#1560c4]",
    grad: "from-sky to-violet",
    border: "border-sky/25",
    glow: "shadow-sky/30",
  },
  violet: {
    bg: "bg-violet",
    soft: "bg-violet/10",
    text: "text-[#5b2fe0]",
    grad: "from-violet to-pink",
    border: "border-violet/25",
    glow: "shadow-violet/30",
  },
  aqua: {
    bg: "bg-aqua",
    soft: "bg-aqua/15",
    text: "text-[#0a7f92]",
    grad: "from-aqua to-sky",
    border: "border-aqua/30",
    glow: "shadow-aqua/30",
  },
};
