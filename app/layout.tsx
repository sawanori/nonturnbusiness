import { ReactNode, FC } from 'react'
import Head from 'next/head'
import './globals.css'
import { Inter } from 'next/font/google'
import { SizeObserver } from './utils/size-observer'
import ScrollObserver from './utils/scroll-observer'
import { Header } from './components/header'
import { Footer } from './components/footer'

const inter = Inter({ subsets: ['latin'] })

interface props {
    children: ReactNode
    title: string
}


export const metadata = {
  title: 'NonTurn.LLC',
  description: '横浜で動画撮るならNonTurn',
}
const RootLayout:FC<props> = ({children, title}) => {
  return (
    <html lang="ja">
      <body className={inter.className}>
        <Head>
          <title>{title}</title>
          <meta name='description' content="Movie creater NORITAKA"></meta>
            <link rel="icon" href="/favicon.ico" />
          </Head>
       <SizeObserver>
         <ScrollObserver>
            <Header />
             {children}
             <Footer />
         </ScrollObserver>
       </SizeObserver>
      </body>
    </html>
  )
}

export default RootLayout
