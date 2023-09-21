import Head from "next/head";
import GradientWrapper from "../components/GradientWrapper";
import CTA from "../components/ui/CTA";
import Features from "../components/ui/Features";
import FooterCTA from "../components/ui/FooterCTA";
import Hero from "../components/ui/Hero";
import Teams from "../components/ui/Teams";
import Services from "../components/ui/Services";

export default function Home() {
  return (
    <>
      <Head>
        <meta name='robots' content='index' />
      </Head>
      <Hero />
    
      <GradientWrapper>
        <Features />
        <CTA />
      </GradientWrapper>
      <Services/>
      <GradientWrapper>
        <Teams />
      </GradientWrapper>
      <FooterCTA />
    </>
  );
}
