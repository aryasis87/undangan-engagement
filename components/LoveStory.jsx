import Reveal from './ui/Reveal';
import SectionTitle from './ui/SectionTitle';
import config from '@/lib/data';

// Cerita: kartu bernomor dalam grid editorial (bukan timeline vertikal).
export default function LoveStory() {
  const { story } = config;
  return (
    <section className="bg-cream px-6 py-24">
      <div className="mx-auto max-w-4xl">
        <SectionTitle num="iii" kicker="Our Story" title="Perjalanan Kami" />
        <div className="mt-16 grid grid-cols-1 gap-px overflow-hidden border border-rose-deep/15 bg-rose-deep/15 sm:grid-cols-2">
          {story.map((item, i) => (
            <Reveal key={item.year} delay={(i % 2) * 0.1} className="bg-cream">
              <div className="h-full p-8">
                <div className="flex items-baseline justify-between">
                  <span className="font-display text-3xl italic text-rose-deep">0{i + 1}</span>
                  <span className="text-xs uppercase tracking-[0.3em] text-muted">{item.year}</span>
                </div>
                <h3 className="mt-5 font-display text-2xl font-medium text-ink">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{item.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
