import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Nordicate AI Dashboard',
  description: 'AI-powered analytics dashboard',
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