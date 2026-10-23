import type { Metadata } from 'next';
import { Cormorant_Garamond, Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';

const cormorantGaramond = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-serif',
  display: 'swap',
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-sans',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Truly M',
  description:
    'Lookbook and artisanal textile catalogue for Truly M, celebrating handcrafted Indian home decor, bed linen, and heritage living.',
  icons: {
    icon: [
      { url: '/images/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon.svg', type: 'image/svg+xml' },
    ],
    shortcut: '/images/favicon.svg',
    apple: '/images/favicon.svg',
  },
  openGraph: {
    title: 'Truly M',
    description:
      'Lookbook and artisanal textile catalogue for Truly M, celebrating handcrafted Indian home decor, bed linen, and heritage living.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Truly M',
    description:
      'Lookbook and artisanal textile catalogue for Truly M, celebrating handcrafted Indian home decor, bed linen, and heritage living.',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${cormorantGaramond.variable} ${plusJakartaSans.variable}`}>
      <head>
        <link rel="icon" type="image/svg+xml" href="/images/favicon.svg" />
      </head>
      <body className="font-sans antialiased bg-[#FAF7F2] text-brand-charcoal selection:bg-[#B82C1C]/15 selection:text-[#B82C1C]" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
