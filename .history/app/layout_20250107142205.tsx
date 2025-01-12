import type { Metadata } from 'next';
import { Geist, Geist_Mono, Open_Sans } from 'next/font/google';
import './globals.css';

const geistSans = Open_Sans({
  variable: '--font-geist-sans',
  subsets: ['latin'],
  we
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
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
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
