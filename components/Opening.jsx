import Reveal from './ui/Reveal';
import config from '@/lib/data';

// Quote pembuka bergaya pull-quote editorial dengan tanda kutip raksasa.
export default function Opening() {
  const { opening } = config;
  return (
    <section className="bg-cream px-6 py-28">
      <Reveal className="relative mx-auto max-w-2xl text-center">
        <span className="pointer-events-none absolute -top-10 left-1/2 -translate-x-1/2 font-display text-[8rem] leading-none text-rose-deep/15">
          &ldquo;
        </span>
        <p className="relative font-display text-2xl font-medium italic leading-relaxed text-ink md:text-3xl">
          {opening.quote}
        </p>
        <p className="mt-8 text-xs uppercase tracking-[0.35em] text-muted">{opening.quoteSource}</p>
      </Reveal>
    </section>
  );
}
