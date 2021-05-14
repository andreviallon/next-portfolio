import Head from 'next/head'
import AboutMe from 'components/AboutMe'

export default function About() {
  return (
    <div>
      <Head>
        <title>Andre Viallon | About</title>
        <link rel="icon" href="/fav-icon.png" />
      </Head>
      <div className="flex about-container">
        <AboutMe />
      </div>
    </div>
  )
}
