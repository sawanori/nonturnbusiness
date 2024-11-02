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
    description?: string;
}


const siteName= 'NonTurn.LLC';
const defaultDescription  = '企業動画・採用動画を撮影するならNonTurn。東京・横浜で高品質な動画撮影サービスを提供し、企業のブランディングと集客効果の向上を実現します。';
const url = ' https://non-turn.com';


export const metadata = {
  title: {
    default: siteName,
    /** `next-seo`の`titleTemplate`に相当する機能 */
    template: `%s - ${siteName}`,
  },
  description: defaultDescription,
  openGraph: {
    title: siteName,
    description:defaultDescription,
    url,
    siteName,
    locale: 'ja_JP',
    type: 'website',
  },
  alternates: {
    canonical: url,
  },
};


const RootLayout:FC<props> = ({children, title, description = defaultDescription}) => {
  return (
    <html lang="ja">
     <Suspense fallback={<></>}>
       <GoogleAnalytics />
      </Suspense>
      <body className={inter.className}>
      <Head>
        <title>{`${title} - ${siteName}`}</title>
        <meta name="description" content={description} />
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href={url} />
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
