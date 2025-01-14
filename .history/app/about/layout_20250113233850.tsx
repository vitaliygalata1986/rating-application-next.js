
export default function AboutLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (

        <nav className={styles.nav}>
          <ul>
            <li>Курсы</li>
            <li>Для детей</li>
            <li>О нас</li>
          </ul>
        </nav>
        {children}

  );
}
