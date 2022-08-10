import React, { useEffect } from 'react';
import Head from 'next/head';
import Navhome from '../../components/HomePage/Navhome';
import RpsPage from '../../components/Game/RpsPage';

function RpsGame() {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <><Head>
            <title>PLAY ROCK PAPER SCISSORS</title>
        </Head>
            <Navhome />
            <RpsPage />
        </>
    )
}

export default RpsGame;