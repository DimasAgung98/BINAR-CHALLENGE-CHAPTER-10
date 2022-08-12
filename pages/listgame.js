import React, { useEffect } from 'react';
import Head from 'next/head';
//IMPORT COMPONENTS
import Navbar from "../components/global/Navbar";
import Listgame from '../components/listGame/Listgame';
import Footer from '../components/global/Footer';

export default function ListGame() {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <>
            <Head>
                <title>LIST GAME | TEAM ONE</title>
            </Head>
            <Navbar />
            <Listgame />
            <Footer />
        </>
    )
}