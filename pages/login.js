import React, { useEffect } from 'react';
import Head from 'next/head';
import Image from 'next/image';
//IMPORT ICONS
import { FaInstagram, FaTwitter, FaTiktok, FaFacebook } from 'react-icons/fa'
//IMPORT COMPONENTS
import Navbar from "../components/global/Navbar";
import FormLogin from '../components/LoginPage/FormLogin';
import Footer from '../components/global/Footer';
//IMPORT IMAGE
import BG from '../public/BGIF.gif';

function Login() {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <>
            <Head>
                <title>LOGIN | TEAM ONE</title>
            </Head>
            <Navbar />
            <div className='container-fluid bg mt-3'>
                <div className='row'>
                    <div className='col'>
                        <div className='form-container'>
                            <div className='form-content-left'>
                                <Image src={BG} alt="bg" />
                                <ul className='icon-socials'>
                                    <li><a className='instagram2 mx-3' href='https://www.instagram.com/'><FaInstagram /></a></li>
                                    <li><a className='twitter2 mx-3' href='https://twitter.com/'><FaTwitter /></a></li>
                                    <li><a className='tiktok2 mx-3' href='https://www.tiktok.com/'><FaTiktok /></a></li>
                                    <li><a className='facebook2 mx-3' href='https://www.facebook.com/'><FaFacebook /></a></li>
                                </ul>
                            </div>
                            <FormLogin />
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Login;