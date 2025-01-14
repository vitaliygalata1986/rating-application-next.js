
export default function AboutLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (

        <div className={styles.nav}>
          <ul>
            <li>Курсы</li>
            <li>Для детей</li>
            <li>О нас</li>
          </ul>
        </div>
        {children}

  );
}
