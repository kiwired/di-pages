import type { Metadata } from 'next'
import { Cormorant_Garamond } from 'next/font/google'
import './globals.css'

const cormorant = Cormorant_Garamond({
  weight: ['400', '600'],
  subsets: ['cyrillic']
})

export const metadata: Metadata = {
  title: 'Путь к себе - Авторский курс ‌Дианы Поздняковой',
  description: 'Улучши отношения с собой ‌за 3 недели',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={cormorant.className}>{children}</body>
    </html>
  )
}
