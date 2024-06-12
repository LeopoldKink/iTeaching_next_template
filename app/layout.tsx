export const metadata = {
  title: 'iTeaching',
  description: 'Powered by dizzweb',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
