export default function AboutTemplate({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div style={{ border: '1px solid ' }}>{children}</div>;
}
