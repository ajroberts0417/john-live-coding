import Header from '@/components/Header'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import '../styles/globals.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>AE Studio Test</title>
      </Head>
      <Header />
      <main className="min-h-screen px-4">
        <Component {...pageProps} />
      </main>
    </>
  )
}

export default MyApp
