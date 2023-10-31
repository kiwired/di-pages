import type { Metadata } from 'next'
import { Montserrat, Roboto } from 'next/font/google'
import './globals.css'

// const roboto = Roboto({
//   weight: ['400'],
//   subsets: ['cyrillic']
// })

const monsterat = Montserrat({
  weight: ['300', '400', '600', '700'],
  subsets: ['cyrillic']
})

// const cormorant = Cormorant_Garamond({
//   weight: ['400', '600'],
//   subsets: ['cyrillic']
// })

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
      <body className={monsterat.className}>{children}</body>
    </html>
  )
}
