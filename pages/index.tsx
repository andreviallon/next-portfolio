import Head from 'next/head'
import Hero from '../components/Hero'
import Portfolio from '../components/Portfolio'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Andre Viallon | Portfolio</title>
        <link rel="icon" href="/fav-icon.png" />
      </Head>
      <Hero />
      <div className="mt-16 mb-24">
        <Portfolio />
      </div>
    </div>
  )
}
