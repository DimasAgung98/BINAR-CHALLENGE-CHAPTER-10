import React, { useEffect } from 'react';
import Head from 'next/head';
//IMPORT COMPONENTS
import Navbar from "../components/global/Navbar";
import Faq from '../components/SupportPage/Faq';
import Footer from '../components/global/Footer';

export default function ListGame() {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <>
            <Head>
                <title>FAQ | TEAM ONE</title>
            </Head>
            <Navbar />
            <Faq />
            <Footer />
        </>
    )
}