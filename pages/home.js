import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import Swal from 'sweetalert2';
import Head from 'next/head';
//IMPORT COMPONENTS
import Navhome from '../components/HomePage/Navhome';
import HomeListGame from '../components/HomePage/HomeListGame';
import Sidebar from '../components/HomePage/Sidebar';
import Footer from "../components/global/Footer";
// Import UseSelector from Redux to detect Store's data
import { useSelector } from 'react-redux'

function HomePage() {

    const router = useRouter()
    const authId = useSelector(state => state.authentication.id)

    useEffect(() => {
        // const isAuthenticated = localStorage.getItem('isAuthenticated');
        window.scrollTo(0, 0)

        if (authId != "") {
            // router.push('/home');
        } else {
            Swal.fire({
                icon: 'info',
                title: 'Notification',
                text: 'Please Login First',
                confirmButtonColor: '#dc3545',
            })
            router.push('/login')
        }
    }, [router, authId])

    return (
        <>
            <Head>
                <title>HOME | TEAM ONE</title>
            </Head>
            <Navhome />
            <Sidebar />
            <HomeListGame />
            <Footer />
        </>
    )
}

export default HomePage