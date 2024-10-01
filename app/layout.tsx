import type { Metadata } from 'next'
import Script from 'next/script'
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
      <body className={monsterat.className}>

        <Script id="yandex-metrika" strategy="beforeInteractive">
          {`(function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
            m[i].l=1*new Date();
            for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
            k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
            (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

            ym(98511387, "init", {
              clickmap: true,
              trackLinks: true,
              accurateTrackBounce: true,
              webvisor: true
            });
          `}
        </Script>

        <noscript>
          <div>
            <img src="https://mc.yandex.ru/watch/98511387" style={{ position: 'absolute', left: '-9999px' }} alt="" />
          </div>
        </noscript>

        {children}
      </body>
    </html>
  )
}
