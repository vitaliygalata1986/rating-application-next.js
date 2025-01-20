import Footer from '@/components/Footer/Footer';
import Header from '@/components/Header/Header';
import Sidebar from '@/components/Sidebar/Sidebar';
import type { Metadata } from 'next';
import { Noto_Sans } from 'next/font/google';
import '../globals.css';
import styles from '../page.module.css';

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
        <div className={styles.wrapper}>
          <Header className={styles.header} />
          <Sidebar className={styles.sidebar} />
          <div className={styles.body}>{children}</div>
          <Footer className={styles.heaser} />
        </div>
      </body>
    </html>
  );
}
