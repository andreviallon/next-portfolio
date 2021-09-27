import { useRef } from "react";
import Head from "next/head";
import Hero from "../components/Hero";
import Portfolio from "../components/Portfolio";

export default function Home() {
  const portfolioSectionRef = useRef(null);

  const handleScrollToPortfolio = () =>
    portfolioSectionRef.current.scrollIntoView();

  return (
    <div>
      <Head>
        <title>Andre Viallon | Portfolio</title>
        <link rel="icon" href="/fav-icon.png" />
      </Head>
      <Hero scrollToPortfolio={handleScrollToPortfolio} />
      <div className="mt-16 mb-24" ref={portfolioSectionRef}>
        <Portfolio />
      </div>
    </div>
  );
}
