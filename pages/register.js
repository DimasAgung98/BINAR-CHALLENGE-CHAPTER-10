import React, { useEffect } from 'react';
import Head from 'next/head';
import Image from 'next/image';
//IMPORT ICONS
import { FaInstagram, FaTwitter, FaTiktok, FaFacebook } from 'react-icons/fa'
//IMPORT COMPONENTS
import Navbar from "../components/global/Navbar";
import FormRegister from '../components/RegisterPage/FormRegister';
import Footer from '../components/global/Footer';
//IMPORT IMAGE
import BG from '../public/BGIF.gif';

function Register() {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <>
            <Head>
                <title>REGISTER | TEAM ONE</title>
            </Head>
            <Navbar />
            <div className='container-fluid bg'>
                <div className='row'>
                    <div className='col'>
                        <div className='form-container'>
                            <FormRegister />
                            <div className='form-content-left'>
                                <Image src={BG} alt="bg" />
                                <ul className='icon-socials'>
                                    <li><a className='instagram2 mx-3' href='https://www.instagram.com/'><FaInstagram /></a></li>
                                    <li><a className='twitter2 mx-3' href='https://twitter.com/'><FaTwitter /></a></li>
                                    <li><a className='tiktok2 mx-3' href='https://www.tiktok.com/'><FaTiktok /></a></li>
                                    <li><a className='facebook2 mx-3' href='https://www.facebook.com/'><FaFacebook /></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Register