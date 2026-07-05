import { MapPin } from 'lucide-react';
import Reveal from './ui/Reveal';
import SectionTitle from './ui/SectionTitle';
import config from '@/lib/data';

// Peta lokasi (editorial: bingkai tegas, tombol garis).
export default function MapEmbed() {
  const { location } = config;
  return (
    <section className="bg-cream px-6 py-24">
      <div className="mx-auto max-w-3xl">
        <SectionTitle num="v" kicker="Location" title="Lokasi Acara" align="left" />
        <Reveal className="mt-12">
          <div className="overflow-hidden border border-rose-deep/20">
            <iframe
              src={location.mapEmbed}
              title="Peta lokasi acara"
              className="h-80 w-full border-0 grayscale-[0.2]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
          <div className="mt-5 flex flex-col items-start justify-between gap-3 sm:flex-row sm:items-center">
            <p className="text-sm text-muted">{location.label}</p>
            <a
              href={location.mapLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border-b border-rose-deep pb-1 text-xs uppercase tracking-widest text-rose-deep transition hover:opacity-60"
            >
              <MapPin size={14} /> Buka di Google Maps
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
