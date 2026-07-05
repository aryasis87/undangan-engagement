import { MapPin, CalendarPlus } from 'lucide-react';
import Reveal from './ui/Reveal';
import SectionTitle from './ui/SectionTitle';
import config from '@/lib/data';
import { googleCalendarUrl } from '@/lib/utils';

// Detail acara lamaran (umumnya satu acara) dengan tanggal tampil besar.
export default function EventDetails() {
  const event = config.events[0];
  const d = new Date(event.start);
  const calUrl = googleCalendarUrl(event, { title: config.meta.title, location: config.location.label });

  return (
    <section className="bg-cream px-6 py-24">
      <div className="mx-auto max-w-2xl">
        <SectionTitle num="ii" kicker="Save The Date" title={event.name} />

        <Reveal className="mt-14 text-center">
          <div className="flex items-end justify-center gap-4">
            <span className="font-display text-2xl text-muted">{d.toLocaleDateString('id-ID', { weekday: 'short' })}</span>
            <span className="font-display text-7xl font-semibold leading-none text-rose-deep md:text-8xl">
              {String(d.getDate()).padStart(2, '0')}
            </span>
            <span className="font-display text-2xl text-muted">{d.toLocaleDateString('id-ID', { month: 'short', year: 'numeric' })}</span>
          </div>

          <div className="mx-auto mt-10 max-w-sm space-y-2 border-t border-rose-deep/20 pt-8 text-sm text-ink">
            <p className="font-medium tracking-widest uppercase">{event.time}</p>
            <p className="font-display text-2xl text-ink">{event.venue}</p>
            <p className="flex items-center justify-center gap-1.5 text-muted">
              <MapPin size={14} /> {event.address}
            </p>
          </div>

          {event.start && event.end && (
            <a
              href={calUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-2 border-b border-rose-deep pb-1 text-sm uppercase tracking-widest text-rose-deep transition hover:opacity-60"
            >
              <CalendarPlus size={14} /> Tambah ke Kalender
            </a>
          )}
        </Reveal>
      </div>
    </section>
  );
}
