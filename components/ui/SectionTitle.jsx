import Reveal from './Reveal';

// Judul section bergaya editorial: nomor + label uppercase + judul serif besar.
export default function SectionTitle({ num, kicker, title, align = 'center' }) {
  const alignment = align === 'left' ? 'text-left items-start' : 'text-center items-center';
  return (
    <Reveal className={`flex flex-col ${alignment}`}>
      {num && (
        <span className="font-display text-sm italic text-rose-deep">{num}</span>
      )}
      {kicker && (
        <p className="mt-1 text-xs uppercase tracking-[0.35em] text-muted">{kicker}</p>
      )}
      <h2 className="mt-3 font-display text-4xl font-medium leading-tight text-ink md:text-5xl">
        {title}
      </h2>
    </Reveal>
  );
}
