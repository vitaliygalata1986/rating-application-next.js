import type { Metadata } from 'next';
import { Geist, Geist_Mono, Open_Sans, Roboto } from 'next/font/google';
import './globals.css';

const roboto = Roboto({
  variable: '--font-roboto',
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Our project',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <link rel='stylesheet' href='' />
      <body className={`${roboto.variable}`}>{children}</body>
    </html>
  );
}
