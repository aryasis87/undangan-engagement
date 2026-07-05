// ============================================================
//  KONFIGURASI UNDANGAN — Engagement (Tunangan / Lamaran)
//  Ubah seluruh isi undangan dari satu tempat ini saja.
// ============================================================

const config = {
  // -- Meta / SEO --
  meta: {
    title: 'Undangan Tunangan — Raka & Sinta',
    description: 'Dengan penuh syukur, kami mengundang Anda untuk hadir di acara pertunangan kami.',
  },

  // -- Sambutan / quote pembuka --
  opening: {
    greeting: 'The Engagement Of',
    quote:
      'Cinta yang tumbuh perlahan dan dirawat dengan kesungguhan, hari ini kami satukan dalam ikatan janji untuk melangkah ke jenjang berikutnya.',
    quoteSource: 'Dengan Penuh Cinta',
  },

  // -- Pasangan --
  couple: {
    groom: {
      name: 'Raka',
      fullName: 'Raka Adi Pratama',
      as: 'Putra dari',
      parents: 'Bpk. Suryanto & Ibu Wulandari',
      instagram: 'raka.ap',
      photo: 'https://placehold.co/600x800/6e8158/f6f5ef.png?text=Calon+Pria',
    },
    bride: {
      name: 'Sinta',
      fullName: 'Sinta Dewi Maharani',
      as: 'Putri dari',
      parents: 'Bpk. Hendarto & Ibu Kartika',
      instagram: 'sinta.dm',
      photo: 'https://placehold.co/600x800/6e8158/f6f5ef.png?text=Calon+Wanita',
    },
  },

  // -- Tanggal utama untuk countdown (format ISO) --
  mainDate: '2026-07-12T10:00:00+07:00',

  // -- Rangkaian acara --
  events: [
    {
      name: 'Acara Lamaran',
      date: 'Minggu, 12 Juli 2026',
      time: '10.00 - 13.00 WIB',
      venue: 'Kediaman Keluarga Maharani',
      address: 'Jl. Kenanga No. 8, Bandung',
      start: '2026-07-12T10:00:00+07:00',
      end: '2026-07-12T13:00:00+07:00',
    },
  ],

  // -- Lokasi (embed Google Maps) --
  location: {
    label: 'Kediaman Keluarga Maharani, Bandung',
    mapEmbed: 'https://www.google.com/maps?q=Gedung+Sate+Bandung&output=embed',
    mapLink: 'https://maps.google.com/?q=Gedung+Sate+Bandung',
  },

  // -- Cerita / timeline --
  story: [
    { year: '2020', title: 'Awal Berkenalan', desc: 'Pertemuan tak terduga yang menjadi awal segalanya.' },
    { year: '2022', title: 'Semakin Dekat', desc: 'Mulai saling memahami dan menyamakan tujuan.' },
    { year: '2024', title: 'Yakin', desc: 'Memutuskan untuk serius melangkah bersama.' },
    { year: '2026', title: 'Bertunangan', desc: 'Mengikat janji dalam acara lamaran keluarga.' },
  ],

  // -- Galeri foto --
  // Placeholder bertema (andal). Ganti dengan URL foto asli saat dipakai.
  gallery: [
    'https://placehold.co/600x800/9fb088/f6f5ef.png?text=Galeri+1',
    'https://placehold.co/600x800/6e8158/f6f5ef.png?text=Galeri+2',
    'https://placehold.co/600x800/b08d57/f6f5ef.png?text=Galeri+3',
    'https://placehold.co/600x800/9fb088/f6f5ef.png?text=Galeri+4',
    'https://placehold.co/600x800/6e8158/f6f5ef.png?text=Galeri+5',
    'https://placehold.co/600x800/b08d57/f6f5ef.png?text=Galeri+6',
  ],

  // -- Amplop digital (umumnya tidak dipakai untuk lamaran) --
  gifts: {
    enabled: false,
    note: '',
    banks: [],
  },

  // -- Musik latar (taruh file di /public/music/) --
  music: {
    enabled: true,
    src: '/music/song.mp3',
    title: 'Backsound',
  },

  // -- Footer --
  footer: {
    closing:
      'Sebuah kebahagiaan bagi kami apabila Bapak/Ibu/Saudara/i berkenan hadir dan memberikan doa restu di hari istimewa ini.',
    hashtag: '#RakaSintaBertunangan',
  },
};

export default config;
