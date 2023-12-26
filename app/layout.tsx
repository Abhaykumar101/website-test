import type { Metadata } from 'next'
import './globals.css'
export const metadata: Metadata = {
  title: 'Ooulet-test',
  description: 'Ooulet website for test',
  icons:'/image/favicon.ico'
  
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
      <meta name="viewport" content="width=device-width, initial-scale=1.00, maximum-scale=1.00, minimum-scale=1.00" />
      </head>
      <body>{children}</body>
    </html>
  )
}
