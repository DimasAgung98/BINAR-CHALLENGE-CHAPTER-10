import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import Swal from 'sweetalert2';
import Head from 'next/head';
//IMPORT COMPONENTS
import Navhome from '../../components/HomePage/Navhome';
import Profile from '../../components/ProfilePage/Profile';
import Footer from "../../components/global/Footer";

function ProfilePage() {
    // const router = useRouter()
    // useEffect(() => {
    //     const isAuthenticated = localStorage.getItem('isAuthenticated');
    //     window.scrollTo(0, 0)

    //     if (isAuthenticated) {
    //         router.push('/home/profile');
    //     } else {
    //         Swal.fire({
    //             icon: 'info',
    //             title: 'Notification',
    //             text: 'Please Login First',
    //             confirmButtonColor: '#dc3545',
    //         })
    //         router.push('/login')
    //     }
    // }, [])
    return (
        <>
            <Head>
                <title>PROFILE | TEAM ONE</title>
            </Head>
            <Navhome />
            <Profile />
            <Footer />
        </>
    )
}

export default ProfilePage