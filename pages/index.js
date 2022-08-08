import React, { useEffect } from 'react';
import Head from 'next/head';
//IMPORT COMPONENTS
import Navbar from "../components/global/Navbar";
import HeroLandingPage from '../components/landingPage/HeroLandingPage';
import Footer from '../components/global/Footer';

export default function LandingPage() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <>
      <Head>
        <title>HOME | TEAM ONE</title>
      </Head>
      <Navbar />
      <HeroLandingPage />
      <Footer />

    </>
  )
}
