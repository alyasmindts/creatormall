import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Stats } from "./components/Stats";
import { Skills } from "./components/Skills";
import { Areas } from "./components/Areas";
import { Benefits } from "./components/Benefits";
import { FAQ } from "./components/FAQ";
import { Cta } from "./components/Cta";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="relative">
      <a
        href="#main"
        className="fixed left-4 top-4 z-[100] -translate-y-24 rounded-full bg-ink px-5 py-3 text-sm font-bold text-white shadow-xl transition-transform focus:translate-y-0"
      >
        Lewati ke konten utama
      </a>
      <Navbar />
      <main id="main">
        <Hero />
        <Stats />
        <Skills />
        <Areas />
        <Benefits />
        <FAQ />
        <Cta />
      </main>
      <Footer />
    </div>
  );
}
