'use client';
import Reveal from './ui/Reveal';
import config from '@/lib/data';
import { useCountdown } from '@/lib/hooks';

function Unit({ value, label }) {
  return (
    <div className="flex flex-col items-center">
      <span className="font-display text-4xl font-medium tabular-nums text-ink sm:text-5xl md:text-6xl">
        {String(value).padStart(2, '0')}
      </span>
      <span className="mt-1 text-[10px] uppercase tracking-[0.3em] text-muted">{label}</span>
    </div>
  );
}

// Hitung mundur minimalis: angka besar dipisah garis tipis vertikal.
export default function CountdownTimer() {
  const { days, hours, minutes, seconds, passed } = useCountdown(config.mainDate);

  return (
    <section className="bg-blush/30 px-6 py-20">
      {passed ? (
        <Reveal className="mx-auto max-w-md text-center">
          <p className="text-xs uppercase tracking-[0.35em] text-muted">Hari itu telah tiba</p>
          <p className="mt-3 font-display text-2xl text-ink">Terima kasih atas doa dan restu Anda.</p>
        </Reveal>
      ) : (
        <Reveal className="mx-auto flex max-w-lg items-center justify-center divide-x divide-rose-deep/20" role="timer" aria-label={`${days} hari ${hours} jam ${minutes} menit lagi`}>
          <div className="px-3 sm:px-5"><Unit value={days} label="Hari" /></div>
          <div className="px-3 sm:px-5"><Unit value={hours} label="Jam" /></div>
          <div className="px-3 sm:px-5"><Unit value={minutes} label="Menit" /></div>
          <div className="px-3 sm:px-5"><Unit value={seconds} label="Detik" /></div>
        </Reveal>
      )}
    </section>
  );
}
