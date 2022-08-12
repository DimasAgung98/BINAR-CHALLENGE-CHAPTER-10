import React, { useEffect } from 'react';
import Head from 'next/head';
//IMPORT COMPONENTS
import Navbar from "../components/global/Navbar";
import Content from '../components/leaderboard/Leaderboard';
import Footer from '../components/global/Footer';

export default function ListGame() {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <>
            <Head>
                <title>LEADERBOARD | TEAM ONE</title>
            </Head>
            <Navbar />
            <Content />
            <Footer />
        </>
    )
}