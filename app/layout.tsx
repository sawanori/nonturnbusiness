import { ReactNode, FC, Suspense } from 'react'
import Head from 'next/head'
import './globals.css'
import { Inter } from 'next/font/google'
import { SizeObserver } from './utils/size-observer'
import ScrollObserver from './utils/scroll-observer'
import { Header } from './components/header'
import { Footer } from './components/footer'
import {Toaster} from "react-hot-toast"
import GoogleAnalytics from './components/GoogleAnalytics'


const inter = Inter({ subsets: ['latin'] })

interface props {
    children: ReactNode
    title: string
}


const siteName= 'NonTurn.LLC';
const description = '企業動画・採用動画を撮影するならNonTurn';
const url = ' https://non-turn.com';


export const metadata = {
  title: {
    default: siteName,
    /** `next-seo`の`titleTemplate`に相当する機能 */
    template: `%s - ${siteName}`,
  },
  description,
  openGraph: {
    title: siteName,
    description,
    url,
    siteName,
    locale: 'ja_JP',
    type: 'website',
  },
  alternates: {
    canonical: url,
  },
};


const RootLayout:FC<props> = ({children, title}) => {
  return (
    <html lang="ja">
     <Suspense fallback={<></>}>
       <GoogleAnalytics />
      </Suspense>
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
             <Toaster />
             <Footer />
         </ScrollObserver>
       </SizeObserver>
      </body>
    </html>
  )
}

export default RootLayout
