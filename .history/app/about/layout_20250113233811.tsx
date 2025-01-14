import type { Metadata } from 'next';
import { Noto_Sans } from 'next/font/google';
import './globals.css';

export default function AboutLayout({
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
