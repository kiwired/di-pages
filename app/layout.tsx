import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import './globals.css'

const monsterat = Montserrat({
  weight: ['300', '400', '600', '700'],
  subsets: ['cyrillic']
})

export const metadata: Metadata = {
  metadataBase: new URL('http://baltikpsy.ru/'),
  title: 'Диана Позднякова - психолог, гештальт—терапевт',
  // description: '',
  authors: {
    url: 'https://t.me/psicho_di',
    name: 'Диана Позднякова',
  },
  openGraph: {
    title: 'Диана Позднякова - психолог, гештальт—терапевт',
    description: '',
    siteName: 'Диана Позднякова - психолог, гештальт—терапевт',
    images: ['/img-01.jpg'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ru">
      <body className={monsterat.className}>{children}</body>
    </html>
  )
}
