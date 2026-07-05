'use client';
import { Share2 } from 'lucide-react';
import Reveal from './ui/Reveal';
import config from '@/lib/data';
import { whatsappShareUrl } from '@/lib/utils';

// Penutup editorial: monokrom, garis tipis, tipografi besar.
export default function Footer() {
  const { footer, couple } = config;

  const share = () => {
    const text = `Undangan Tunangan ${couple.groom.name} & ${couple.bride.name}`;
    if (typeof navigator !== 'undefined' && navigator.share) {
      navigator.share({ title: text, url: window.location.href }).catch(() => {});
    } else {
      window.open(whatsappShareUrl(text), '_blank', 'noopener');
    }
  };

  return (
    <footer className="bg-ink px-6 py-24 text-center text-cream">
      <Reveal className="mx-auto max-w-xl">
        <p className="text-sm leading-relaxed text-cream/70">{footer.closing}</p>
        <h2 className="mt-10 font-display text-5xl font-medium md:text-6xl">
          {couple.groom.name} &amp; {couple.bride.name}
        </h2>
        <p className="mt-3 text-xs uppercase tracking-[0.35em] text-rose">{footer.hashtag}</p>

        <button
          onClick={share}
          className="mt-10 inline-flex items-center gap-2 border-b border-cream/40 pb-1 text-xs uppercase tracking-widest text-cream transition hover:opacity-60"
        >
          <Share2 size={14} /> Bagikan
        </button>
      </Reveal>
    </footer>
  );
}
