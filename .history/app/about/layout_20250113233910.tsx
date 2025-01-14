export default function AboutLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div className={styles.nav}>{children}</div>;
}
