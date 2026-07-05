'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';
import config from '@/lib/data';
import { useGuestName } from '@/lib/hooks';

// Cover editorial gaya sampul majalah (porting Stitch "Editorial") — split foto/teks.
export default function Cover({ onOpen }) {
  const guest = useGuestName();
  const { couple, opening } = config;

  return (
    <motion.section
      className="fixed inset-0 z-50 overflow-y-auto bg-cream p-3 sm:p-5"
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: 'easeInOut' }}
    >
      <div className="relative flex min-h-[calc(100vh-1.5rem)] flex-col border border-rose-deep/30 bg-cream sm:min-h-[calc(100vh-2.5rem)]">
        {/* Masthead */}
        <header className="flex items-start justify-between border-b border-rose-deep/20 p-5">
          <div className="flex flex-col gap-0.5 text-[10px] font-bold uppercase tracking-[0.2em] text-muted">
            <span>Issue No. 1</span>
            <span>{opening.greeting}</span>
          </div>
          <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-rose-deep">Moments in Time</span>
        </header>

        {/* Isi: nama (kiri) + foto (kanan) */}
        <div className="relative flex flex-grow">
          <motion.div
            initial={{ opacity: 0, x: -16 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.9 }}
            className="z-20 flex w-[56%] flex-col justify-center px-5 py-8"
          >
            <h1 className="font-display uppercase leading-[0.9] tracking-tight text-ink">
              <span className="block break-words text-5xl sm:text-6xl">{couple.groom.name}</span>
              <span className="my-2 block font-script text-4xl normal-case italic text-rose-deep">&amp;</span>
              <span className="block break-words text-5xl sm:text-6xl">{couple.bride.name}</span>
            </h1>
          </motion.div>

          <div className="relative w-[44%] overflow-hidden border-l border-rose-deep/20">
            <Image src={couple.bride.photo} alt="" fill priority sizes="44vw" className="object-cover" />
          </div>
        </div>

        {/* Footer */}
        <footer className="flex items-end justify-between gap-4 border-t border-rose-deep/20 p-5">
          <div className="max-w-[60%]">
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted">Kepada</p>
            <p className="mt-1 font-display text-lg text-ink">{guest}</p>
          </div>
          <button onClick={onOpen} className="group flex flex-col items-center gap-2">
            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-rose-deep">Buka Undangan</span>
            <span className="h-10 w-px bg-rose-deep transition-all duration-500 group-hover:h-14" />
          </button>
        </footer>
      </div>
    </motion.section>
  );
}
