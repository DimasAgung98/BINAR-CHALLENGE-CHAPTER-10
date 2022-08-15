import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import Swal from 'sweetalert2';
import Head from 'next/head';
import Navhome from '../../components/HomePage/Navhome';
import RpsPage from '../../components/Game/RpsPage';

function RpsGame() {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    const router = useRouter()
    useEffect(() => {
        const isAuthenticated = localStorage.getItem('isAuthenticated');

        if (isAuthenticated) {
            // router.push('/games/fall-guys');
        } else {
            Swal.fire({
                icon: 'info',
                title: 'Notification',
                text: 'Please Login First',
                confirmButtonColor: '#dc3545',
            })
            router.push('/login')
        }
    }, [router])
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