import type { Metadata } from 'next'
import './globals.css'
export const metadata: Metadata = {
  title: 'Ooulet-test',
  description: 'Ooulet website for test',
  
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
