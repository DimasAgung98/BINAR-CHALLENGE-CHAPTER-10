import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import Swal from 'sweetalert2';
import Head from 'next/head';
//IMPORT COMPONENTS
import Navhome from '../Components/HomePage/Navhome';
import ListGame from '../Components/ListGame/Listgame';
import Sidebar from '../components/HomePage/Sidebar';
import Footer from "../components/global/Footer";

function HomePage() {
    const router = useRouter()
    useEffect(() => {
        const isAuthenticated = localStorage.getItem('isAuthenticated');
        window.scrollTo(0, 0)

        if (isAuthenticated) {
            router.push('/home');
        } else {
            Swal.fire({
                icon: 'info',
                title: 'Notification',
                text: 'Please Login First',
                confirmButtonColor: '#dc3545',
            })
            router.push('/login')
        }
    }, [])

    return (
        <>
            <Head>
                <title>HOME | TEAM ONE</title>
            </Head>
            <Navhome />
            <Sidebar />
            <ListGame />
            <Footer />
        </>
    )
}

export default HomePage