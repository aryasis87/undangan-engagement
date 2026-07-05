import './globals.css';
import { Playfair_Display, Sacramento, Poppins } from 'next/font/google';
import config from '@/lib/data';

const display = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  style: ['normal', 'italic'],
  variable: '--font-playfair',
  display: 'swap',
});
const script = Sacramento({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-sacramento',
  display: 'swap',
});
const body = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-poppins',
  display: 'swap',
});

export const metadata = {
  metadataBase: new URL('https://undangan.example.com'),
  title: config.meta.title,
  description: config.meta.description,
  openGraph: {
    title: config.meta.title,
    description: config.meta.description,
    type: 'website',
    locale: 'id_ID',
    images: [{ url: config.couple.bride.photo, width: 600, height: 800 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: config.meta.title,
    description: config.meta.description,
  },
  robots: { index: false, follow: false },
};

export const viewport = {
  themeColor: '#6e8158',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="id" className={`${display.variable} ${script.variable} ${body.variable}`}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
