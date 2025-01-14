import type { Metadata } from 'next';
import { Noto_Sans } from 'next/font/google';
import './globals.css';
import styles from './page.module.css';

const noto_sans = Noto_Sans({
  variable: '--font-noto-sans',
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
      <body className={`${noto_sans.variable}`}>
        <nav className={styles.nav}>
          <ul>
            <li>Курсы</li>
            <li>Для детей</li>
            <li>О нас</li>
          </ul>
        </nav>
        {children}
      </body>
    </html>
  );
}
